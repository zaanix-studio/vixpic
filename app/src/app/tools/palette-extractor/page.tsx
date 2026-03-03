"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ColorInfo {
  hex: string;
  rgb: string;
  count: number;
  percentage: number;
}

export default function PaletteExtractor() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [colors, setColors] = useState<ColorInfo[]>([]);
  const [colorCount, setColorCount] = useState(6);
  const [processing, setProcessing] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setColors([]);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
  };

  const extractColors = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      // Scale down for faster processing
      const maxSize = 100;
      const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      
      // Color quantization using simple bucketing
      const colorMap = new Map<string, number>();
      
      for (let i = 0; i < pixels.length; i += 4) {
        // Reduce color space (quantize to nearest 16)
        const r = Math.round(pixels[i] / 16) * 16;
        const g = Math.round(pixels[i + 1] / 16) * 16;
        const b = Math.round(pixels[i + 2] / 16) * 16;
        const a = pixels[i + 3];
        
        if (a < 128) continue; // Skip transparent pixels
        
        const key = `${r},${g},${b}`;
        colorMap.set(key, (colorMap.get(key) || 0) + 1);
      }
      
      // Sort by frequency and get top colors
      const totalPixels = (canvas.width * canvas.height);
      const sortedColors = Array.from(colorMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, colorCount)
        .map(([key, count]) => {
          const [r, g, b] = key.split(",").map(Number);
          return {
            hex: rgbToHex(r, g, b),
            rgb: `rgb(${r}, ${g}, ${b})`,
            count,
            percentage: Math.round((count / totalPixels) * 100),
          };
        });
      
      setColors(sortedColors);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const downloadPalette = () => {
    const paletteText = colors.map(c => `${c.hex} - ${c.percentage}%`).join("\n");
    const blob = new Blob([paletteText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "color-palette.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadPaletteSVG = () => {
    const width = 600;
    const height = 100;
    const colorWidth = width / colors.length;
    
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height + 40}">`;
    colors.forEach((color, i) => {
      svg += `<rect x="${i * colorWidth}" y="0" width="${colorWidth}" height="${height}" fill="${color.hex}"/>`;
      svg += `<text x="${i * colorWidth + colorWidth / 2}" y="${height + 25}" text-anchor="middle" font-family="monospace" font-size="12">${color.hex}</text>`;
    });
    svg += "</svg>";
    
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "color-palette.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setSelectedImage(null);
    setColors([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

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
            Extract{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Color Palettes
            </span>{" "}
            from Images
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            Automatically extract dominant colors from any image. Perfect for designers, 
            brand projects, and color inspiration.
          </p>
          <p className="text-sm text-muted-foreground">
            Free forever • Works offline • Copy HEX/RGB instantly
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
                  <div className="text-5xl mb-4">🎨</div>
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

              {/* Editor */}
              {selectedImage && colors.length === 0 && (
                <div className="space-y-6">
                  {/* Preview */}
                  <div className="bg-muted rounded-lg p-4 flex items-center justify-center min-h-[250px]">
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="max-w-full max-h-[350px] object-contain rounded"
                    />
                  </div>

                  {/* Color Count */}
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Label className="text-sm font-medium">Number of Colors</Label>
                      <span className="text-sm font-mono text-brand">{colorCount} colors</span>
                    </div>
                    <Slider
                      value={[colorCount]}
                      onValueChange={(v) => setColorCount(Array.isArray(v) ? v[0] : v)}
                      min={3}
                      max={12}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>3</span>
                      <span>6</span>
                      <span>9</span>
                      <span>12</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={extractColors}
                      disabled={processing}
                      className="bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
                      size="lg"
                    >
                      {processing ? "Extracting..." : "Extract Colors"}
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Choose Another
                    </Button>
                  </div>
                </div>
              )}

              {/* Results */}
              {colors.length > 0 && (
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 bg-success-muted text-success-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
                      ✓ Extracted {colors.length} dominant colors
                    </span>
                  </div>

                  {/* Image + Palette Side by Side */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                      <img
                        src={selectedImage!}
                        alt="Source"
                        className="max-w-full max-h-[300px] object-contain rounded"
                      />
                    </div>

                    {/* Palette */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Color Palette</Label>
                      <div className="space-y-2">
                        {colors.map((color, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-2 bg-muted rounded-lg hover:bg-muted transition-colors"
                          >
                            <div
                              className="w-12 h-12 rounded-lg shadow-sm border flex-shrink-0"
                              style={{ backgroundColor: color.hex }}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => copyToClipboard(color.hex)}
                                  className="font-mono text-sm font-medium hover:text-brand transition-colors"
                                >
                                  {color.hex}
                                </button>
                                {copiedColor === color.hex && (
                                  <span className="text-xs text-success">Copied!</span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground truncate">{color.rgb}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <span className="text-sm font-medium">{color.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Color Swatches Bar */}
                  <div className="rounded-lg overflow-hidden shadow-lg border flex h-20">
                    {colors.map((color, i) => (
                      <div
                        key={i}
                        className="flex-1 cursor-pointer hover:opacity-90 transition-opacity relative group"
                        style={{ backgroundColor: color.hex }}
                        onClick={() => copyToClipboard(color.hex)}
                        title={`Click to copy ${color.hex}`}
                      >
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono font-bold text-inverted-foreground drop-shadow-lg">
                          {color.hex}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={downloadPaletteSVG}
                      className="bg-success hover:bg-success/90"
                      size="lg"
                    >
                      Download SVG
                    </Button>
                    <Button 
                      onClick={downloadPalette}
                      variant="outline"
                      size="lg"
                    >
                      Download TXT
                    </Button>
                    <Button 
                      onClick={() => setColors([])}
                      variant="outline"
                      size="lg"
                    >
                      Re-extract
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      New Image
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
          <h2 className="text-2xl font-bold text-center mb-8">Palette Extraction Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Smart Extraction</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically identifies dominant colors using color quantization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-semibold mb-2">Click to Copy</h3>
                <p className="text-sm text-muted-foreground">
                  Copy HEX or RGB values instantly. Export as SVG or text.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">100% Private</h3>
                <p className="text-sm text-muted-foreground">
                  Images never leave your browser. Works offline too.
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
              { icon: "🎨", title: "Brand Design", desc: "Extract brand colors" },
              { icon: "🖼️", title: "Art Reference", desc: "Study color palettes" },
              { icon: "🏠", title: "Interior Design", desc: "Match room colors" },
              { icon: "👗", title: "Fashion", desc: "Coordinate outfits" },
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
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            Part of <Link href="/" className="text-brand hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/palette-extractor" className="hover:underline">Palette Extractor</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
