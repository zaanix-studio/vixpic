"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type ResizeMode = "dimensions" | "percentage" | "preset";

interface Preset {
  name: string;
  width: number;
  height: number;
  description: string;
}

const presets: Preset[] = [
  { name: "Instagram Post", width: 1080, height: 1080, description: "Square post" },
  { name: "Instagram Story", width: 1080, height: 1920, description: "9:16 vertical" },
  { name: "Twitter Post", width: 1200, height: 675, description: "16:9 landscape" },
  { name: "Facebook Cover", width: 820, height: 312, description: "Banner size" },
  { name: "YouTube Thumbnail", width: 1280, height: 720, description: "HD 16:9" },
  { name: "LinkedIn Post", width: 1200, height: 627, description: "1.91:1 ratio" },
  { name: "Favicon", width: 32, height: 32, description: "Browser tab icon" },
  { name: "App Icon", width: 512, height: 512, description: "High-res icon" },
];

export default function ImageResizer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [targetWidth, setTargetWidth] = useState<number>(0);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(50);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [resizeMode, setResizeMode] = useState<ResizeMode>("dimensions");
  const [processing, setProcessing] = useState(false);
  const [lastChangedDimension, setLastChangedDimension] = useState<"width" | "height">("width");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    setOriginalFile(file);
    setResizedImage(null);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgSrc = e.target?.result as string;
      setSelectedImage(imgSrc);
      
      // Get original dimensions
      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.width, height: img.height });
        setTargetWidth(img.width);
        setTargetHeight(img.height);
      };
      img.src = imgSrc;
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleWidthChange = (newWidth: number) => {
    setTargetWidth(newWidth);
    setLastChangedDimension("width");
    if (maintainAspectRatio && originalDimensions.width > 0) {
      const ratio = originalDimensions.height / originalDimensions.width;
      setTargetHeight(Math.round(newWidth * ratio));
    }
  };

  const handleHeightChange = (newHeight: number) => {
    setTargetHeight(newHeight);
    setLastChangedDimension("height");
    if (maintainAspectRatio && originalDimensions.height > 0) {
      const ratio = originalDimensions.width / originalDimensions.height;
      setTargetWidth(Math.round(newHeight * ratio));
    }
  };

  const applyPreset = (preset: Preset) => {
    setTargetWidth(preset.width);
    setTargetHeight(preset.height);
    setMaintainAspectRatio(false);
    setResizeMode("dimensions");
  };

  const calculateFromPercentage = () => {
    const newWidth = Math.round(originalDimensions.width * (percentage / 100));
    const newHeight = Math.round(originalDimensions.height * (percentage / 100));
    setTargetWidth(newWidth);
    setTargetHeight(newHeight);
  };

  const resizeImage = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    // Calculate final dimensions based on mode
    let finalWidth = targetWidth;
    let finalHeight = targetHeight;
    
    if (resizeMode === "percentage") {
      finalWidth = Math.round(originalDimensions.width * (percentage / 100));
      finalHeight = Math.round(originalDimensions.height * (percentage / 100));
    }
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = finalWidth;
      canvas.height = finalHeight;
      
      // Use high-quality resizing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
      
      // Preserve format or use PNG for quality
      const mimeType = originalFile?.type || "image/png";
      const resized = canvas.toDataURL(mimeType === "image/jpeg" ? "image/jpeg" : "image/png", 0.95);
      setResizedImage(resized);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const downloadImage = () => {
    if (!resizedImage) return;
    const extension = originalFile?.type === "image/jpeg" ? "jpg" : "png";
    const link = document.createElement("a");
    link.href = resizedImage;
    link.download = `resized-${targetWidth}x${targetHeight}-${originalFile?.name?.replace(/\.[^.]+$/, "")}.${extension}`;
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setResizedImage(null);
    setOriginalDimensions({ width: 0, height: 0 });
    setTargetWidth(0);
    setTargetHeight(0);
    setPercentage(50);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFinalDimensions = () => {
    if (resizeMode === "percentage") {
      return {
        width: Math.round(originalDimensions.width * (percentage / 100)),
        height: Math.round(originalDimensions.height * (percentage / 100)),
      };
    }
    return { width: targetWidth, height: targetHeight };
  };

  const finalDims = getFinalDimensions();

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand to-info rounded-lg" />
              <span className="font-bold text-xl">VixPic</span>
            </Link>
            <span className="text-muted-foreground mx-2">/</span>
            <span className="text-muted-foreground">Free Tools</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/tools" className="text-muted-foreground hover:text-foreground hidden sm:block">
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
          <div className="inline-flex items-center gap-2 bg-success-muted text-success-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✨ 100% Free • No API Key Needed • Client-Side
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Resize Images{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              To Any Size
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            Resize images by pixels, percentage, or social media presets. 
            Everything happens in your browser — nothing is uploaded.
          </p>
          <p className="text-sm text-muted-foreground">
            Free forever • Works offline
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6">
              {/* Upload Area */}
              {!selectedImage && (
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-input rounded-lg p-12 text-center cursor-pointer hover:border-brand hover:bg-brand-muted/50 transition-colors"
                >
                  <div className="text-5xl mb-4">📐</div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    Drop your image here
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, WEBP up to 25MB
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              )}

              {/* Resize Controls */}
              {selectedImage && (
                <div className="space-y-6">
                  {/* Mode Tabs */}
                  <div className="flex gap-2 p-1 bg-muted rounded-lg w-fit">
                    <button
                      onClick={() => setResizeMode("dimensions")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        resizeMode === "dimensions"
                          ? "bg-card shadow text-brand"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Dimensions
                    </button>
                    <button
                      onClick={() => setResizeMode("percentage")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        resizeMode === "percentage"
                          ? "bg-card shadow text-brand"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Percentage
                    </button>
                    <button
                      onClick={() => setResizeMode("preset")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        resizeMode === "preset"
                          ? "bg-card shadow text-brand"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Presets
                    </button>
                  </div>

                  {/* Dimensions Mode */}
                  {resizeMode === "dimensions" && (
                    <div className="p-4 bg-muted rounded-lg space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm text-muted-foreground">Width (px)</Label>
                          <Input
                            type="number"
                            value={targetWidth}
                            onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-sm text-muted-foreground">Height (px)</Label>
                          <Input
                            type="number"
                            value={targetHeight}
                            onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={maintainAspectRatio}
                          onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                          className="w-4 h-4 rounded border-input text-brand focus:ring-brand/60"
                        />
                        <span className="text-sm text-muted-foreground">Maintain aspect ratio</span>
                      </label>
                    </div>
                  )}

                  {/* Percentage Mode */}
                  {resizeMode === "percentage" && (
                    <div className="p-4 bg-muted rounded-lg space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Label className="text-sm text-muted-foreground">Scale</Label>
                          <Input
                            type="number"
                            value={percentage}
                            onChange={(e) => setPercentage(parseInt(e.target.value) || 0)}
                            className="mt-1"
                            min={1}
                            max={500}
                          />
                        </div>
                        <span className="text-xl font-bold text-muted-foreground mt-6">%</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {[25, 50, 75, 100, 150, 200].map((p) => (
                          <button
                            key={p}
                            onClick={() => setPercentage(p)}
                            className={`px-3 py-1 rounded-full text-sm border ${
                              percentage === p
                                ? "bg-brand-muted border-brand/30 text-brand-muted-foreground"
                                : "bg-card border-border text-muted-foreground hover:border-brand"
                            }`}
                          >
                            {p}%
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Result: {Math.round(originalDimensions.width * (percentage / 100))} × {Math.round(originalDimensions.height * (percentage / 100))} px
                      </p>
                    </div>
                  )}

                  {/* Preset Mode */}
                  {resizeMode === "preset" && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {presets.map((preset) => (
                          <button
                            key={preset.name}
                            onClick={() => applyPreset(preset)}
                            className="p-3 bg-card border rounded-lg hover:border-brand hover:shadow-sm transition-all text-left"
                          >
                            <p className="font-medium text-sm">{preset.name}</p>
                            <p className="text-xs text-muted-foreground">{preset.width} × {preset.height}</p>
                            <p className="text-xs text-muted-foreground mt-1">{preset.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Preview */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-muted-foreground">Original</Label>
                        <span className="text-sm font-mono text-muted-foreground">
                          {originalDimensions.width} × {originalDimensions.height}
                        </span>
                      </div>
                      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border">
                        <img
                          src={selectedImage}
                          alt="Original"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Result */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-muted-foreground">Result</Label>
                        <span className="text-sm font-mono">
                          <span className="text-brand">{finalDims.width} × {finalDims.height}</span>
                        </span>
                      </div>
                      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden border-2 border-brand/20">
                        {resizedImage ? (
                          <img
                            src={resizedImage}
                            alt="Resized"
                            className="w-full h-full object-contain"
                          />
                        ) : processing ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin w-12 h-12 border-4 border-brand border-t-transparent rounded-full" />
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-muted-foreground">Preview after resize</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {finalDims.width} × {finalDims.height} px
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {!resizedImage && (
                      <Button 
                        onClick={resizeImage}
                        disabled={processing || finalDims.width <= 0 || finalDims.height <= 0}
                        className="bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
                        size="lg"
                      >
                        {processing ? "Resizing..." : "Resize Image"}
                      </Button>
                    )}
                    {resizedImage && (
                      <>
                        <Button 
                          onClick={downloadImage}
                          className="bg-success hover:bg-success/90"
                          size="lg"
                        >
                          Download Resized
                        </Button>
                        <Button 
                          onClick={resizeImage}
                          variant="outline"
                          size="lg"
                        >
                          Re-resize
                        </Button>
                      </>
                    )}
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Try Another
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Resize Methods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📏</div>
                <h3 className="font-semibold mb-2">Custom Dimensions</h3>
                <p className="text-sm text-muted-foreground">
                  Enter exact pixel dimensions with optional aspect ratio lock.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-semibold mb-2">Percentage Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Scale up or down by percentage. Great for batch consistency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Social Presets</h3>
                <p className="text-sm text-muted-foreground">
                  One-click sizes for Instagram, Twitter, Facebook, and more.
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
              { icon: "📱", title: "Social Media", desc: "Perfect post sizes" },
              { icon: "🌐", title: "Web Design", desc: "Optimize for web" },
              { icon: "🖼️", title: "Printing", desc: "Scale for print" },
              { icon: "📧", title: "Email", desc: "Fit email limits" },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-muted rounded-lg">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upsell */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand to-info">
        <div className="max-w-4xl mx-auto text-center text-brand-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need AI-Powered Image Editing?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Generate, upscale, remove backgrounds, and more with VixPic — 
            using your own API keys for maximum savings.
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
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            Part of <Link href="/" className="text-brand hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link> •
            <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
