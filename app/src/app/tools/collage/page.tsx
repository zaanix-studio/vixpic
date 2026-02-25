"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

type Layout = "2x1" | "1x2" | "2x2" | "3x1" | "1x3" | "3x3" | "2x3" | "3x2";

const LAYOUTS: { value: Layout; label: string; cols: number; rows: number }[] = [
  { value: "2x1", label: "2 × 1", cols: 2, rows: 1 },
  { value: "1x2", label: "1 × 2", cols: 1, rows: 2 },
  { value: "2x2", label: "2 × 2", cols: 2, rows: 2 },
  { value: "3x1", label: "3 × 1", cols: 3, rows: 1 },
  { value: "1x3", label: "1 × 3", cols: 1, rows: 3 },
  { value: "2x3", label: "2 × 3", cols: 2, rows: 3 },
  { value: "3x2", label: "3 × 2", cols: 3, rows: 2 },
  { value: "3x3", label: "3 × 3", cols: 3, rows: 3 },
];

export default function CollageMaker() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [layout, setLayout] = useState<Layout>("2x2");
  const [gap, setGap] = useState(8);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [borderRadius, setBorderRadius] = useState(0);
  const [processing, setProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const currentLayout = LAYOUTS.find((l) => l.value === layout)!;
  const maxImages = currentLayout.cols * currentLayout.rows;

  const handleFiles = (files: FileList) => {
    const newImages: ImageFile[] = [];
    const remaining = maxImages - images.length;
    const filesToProcess = Array.from(files).slice(0, remaining);
    
    filesToProcess.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push({
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview: e.target?.result as string,
          });
          if (newImages.length === filesToProcess.length) {
            setImages((prev) => [...prev, ...newImages.filter(img => img.preview)].slice(0, maxImages));
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const drawCollage = async (canvas: HTMLCanvasElement, forDownload = false) => {
    const ctx = canvas.getContext("2d")!;
    const { cols, rows } = currentLayout;
    
    const cellWidth = forDownload ? 600 : 200;
    const cellHeight = forDownload ? 600 : 200;
    const scaledGap = forDownload ? gap * 3 : gap;
    
    canvas.width = cols * cellWidth + (cols + 1) * scaledGap;
    canvas.height = rows * cellHeight + (rows + 1) * scaledGap;
    
    // Background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw images
    for (let i = 0; i < images.length && i < maxImages; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      const x = scaledGap + col * (cellWidth + scaledGap);
      const y = scaledGap + row * (cellHeight + scaledGap);
      
      await new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          // Calculate crop to cover
          const imgRatio = img.width / img.height;
          const cellRatio = cellWidth / cellHeight;
          
          let sx = 0, sy = 0, sw = img.width, sh = img.height;
          
          if (imgRatio > cellRatio) {
            sw = img.height * cellRatio;
            sx = (img.width - sw) / 2;
          } else {
            sh = img.width / cellRatio;
            sy = (img.height - sh) / 2;
          }
          
          // Rounded corners
          if (borderRadius > 0) {
            const scaledRadius = forDownload ? borderRadius * 3 : borderRadius;
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(x, y, cellWidth, cellHeight, scaledRadius);
            ctx.clip();
            ctx.drawImage(img, sx, sy, sw, sh, x, y, cellWidth, cellHeight);
            ctx.restore();
          } else {
            ctx.drawImage(img, sx, sy, sw, sh, x, y, cellWidth, cellHeight);
          }
          
          resolve();
        };
        img.src = images[i].preview;
      });
    }
    
    // Draw placeholders for empty cells
    for (let i = images.length; i < maxImages; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      const x = scaledGap + col * (cellWidth + scaledGap);
      const y = scaledGap + row * (cellHeight + scaledGap);
      
      ctx.fillStyle = "#E5E7EB";
      if (borderRadius > 0) {
        const scaledRadius = forDownload ? borderRadius * 3 : borderRadius;
        ctx.beginPath();
        ctx.roundRect(x, y, cellWidth, cellHeight, scaledRadius);
        ctx.fill();
      } else {
        ctx.fillRect(x, y, cellWidth, cellHeight);
      }
      
      ctx.fillStyle = "#9CA3AF";
      ctx.font = `${forDownload ? 48 : 16}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`+`, x + cellWidth / 2, y + cellHeight / 2);
    }
  };

  // Live preview
  useEffect(() => {
    if (!previewCanvasRef.current) return;
    drawCollage(previewCanvasRef.current, false);
  }, [images, layout, gap, backgroundColor, borderRadius]);

  const downloadCollage = async () => {
    if (images.length === 0 || !canvasRef.current) return;
    
    setProcessing(true);
    await drawCollage(canvasRef.current, true);
    
    const link = document.createElement("a");
    link.href = canvasRef.current.toDataURL("image/png");
    link.download = `collage-${layout}.png`;
    link.click();
    setProcessing(false);
  };

  const resetTool = () => {
    setImages([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
              <span className="font-bold text-xl">VixPic</span>
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-600">Free Tools</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/tools" className="text-gray-600 hover:text-gray-900 hidden sm:block">
              All Tools
            </Link>
            <Link href="/generate">
              <Button>Full App</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✨ 100% Free • No API Key Needed • Client-Side
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Create Photo{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Collages
            </span>{" "}
            Online
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Combine multiple photos into beautiful grid layouts. Perfect for social media,
            memories, and photo projects.
          </p>
          <p className="text-sm text-gray-500">
            Free forever • Works offline • No watermarks
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left: Controls */}
                <div className="space-y-6">
                  {/* Layout Selection */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Layout</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {LAYOUTS.map((l) => (
                        <button
                          key={l.value}
                          onClick={() => {
                            setLayout(l.value);
                            // Trim images if new layout has fewer cells
                            const newMax = l.cols * l.rows;
                            if (images.length > newMax) {
                              setImages((prev) => prev.slice(0, newMax));
                            }
                          }}
                          className={`p-3 rounded-lg border-2 transition-colors ${
                            layout === l.value
                              ? "border-purple-600 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="text-sm font-medium">{l.label}</div>
                          <div className="text-xs text-gray-500">{l.cols * l.rows} photos</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Upload */}
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => images.length < maxImages && fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      images.length < maxImages 
                        ? "border-gray-300 cursor-pointer hover:border-purple-400 hover:bg-purple-50/50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-medium text-gray-700">
                      {images.length < maxImages 
                        ? `Add photos (${images.length}/${maxImages})`
                        : `All ${maxImages} slots filled`}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Drop images or click to browse
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>

                  {/* Image thumbnails */}
                  {images.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {images.map((img) => (
                        <div key={img.id} className="relative group">
                          <div className="w-16 h-16 rounded overflow-hidden border">
                            <img
                              src={img.preview}
                              alt="Thumbnail"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            onClick={() => removeImage(img.id)}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Gap */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-sm font-medium">Spacing</Label>
                      <span className="text-sm font-mono text-purple-600">{gap}px</span>
                    </div>
                    <Slider
                      value={[gap]}
                      onValueChange={([val]) => setGap(val)}
                      min={0}
                      max={32}
                      step={2}
                      className="w-full"
                    />
                  </div>

                  {/* Border Radius */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-sm font-medium">Corner Radius</Label>
                      <span className="text-sm font-mono text-purple-600">{borderRadius}px</span>
                    </div>
                    <Slider
                      value={[borderRadius]}
                      onValueChange={([val]) => setBorderRadius(val)}
                      min={0}
                      max={32}
                      step={2}
                      className="w-full"
                    />
                  </div>

                  {/* Background Color */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Label className="text-sm font-medium mb-2 block">Background Color</Label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-10 h-10 rounded border cursor-pointer"
                      />
                      <div className="flex gap-1">
                        {["#FFFFFF", "#000000", "#F3F4F6", "#FEE2E2", "#E0F2FE", "#DCFCE7"].map((color) => (
                          <button
                            key={color}
                            onClick={() => setBackgroundColor(color)}
                            className={`w-8 h-8 rounded border-2 transition-colors ${
                              backgroundColor === color ? "border-purple-600" : "border-gray-200"
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={downloadCollage}
                      disabled={processing || images.length === 0}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex-1"
                      size="lg"
                    >
                      {processing ? "Creating..." : "Download Collage"}
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Clear
                    </Button>
                  </div>
                </div>

                {/* Right: Preview */}
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
                  <canvas
                    ref={previewCanvasRef}
                    className="max-w-full max-h-[500px] rounded shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Collage Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📐</div>
                <h3 className="font-semibold mb-2">8 Layouts</h3>
                <p className="text-sm text-gray-600">
                  From 2×1 to 3×3 grids. Perfect for any number of photos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold mb-2">Customizable</h3>
                <p className="text-sm text-gray-600">
                  Adjust spacing, corners, and background color to match your style.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Social Ready</h3>
                <p className="text-sm text-gray-600">
                  High-resolution export perfect for Instagram, Facebook, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: "📸", title: "Memories", desc: "Photo collections" },
              { icon: "📱", title: "Social Media", desc: "Instagram grids" },
              { icon: "🎉", title: "Events", desc: "Party highlights" },
              { icon: "💼", title: "Portfolio", desc: "Project showcases" },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upsell */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need More Image Tools?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            VixPic has 15+ free tools plus AI-powered image generation, 
            upscaling, and background removal.
          </p>
          <Link href="/tools">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              See All Free Tools
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>
            Part of <Link href="/" className="text-purple-600 hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/collage" className="hover:underline">Collage</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
