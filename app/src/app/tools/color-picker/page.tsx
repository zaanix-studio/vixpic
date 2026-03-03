"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useCallback } from "react";

interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
}

export default function ColorPickerTool() {
  const [image, setImage] = useState<string | null>(null);
  const [currentColor, setCurrentColor] = useState<ColorInfo | null>(null);
  const [colorHistory, setColorHistory] = useState<ColorInfo[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [isPickerActive, setIsPickerActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImage(result);
        setCurrentColor(null);
        setColorHistory([]);
        setIsPickerActive(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setImage(result);
        setCurrentColor(null);
        setColorHistory([]);
        setIsPickerActive(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
  };

  const rgbToHsl = (r: number, g: number, b: number): string => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const handleImageLoad = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return;
    const canvas = canvasRef.current;
    const img = imageRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!canvasRef.current || !imageRef.current) return;
    const canvas = canvasRef.current;
    const img = imageRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = [pixel[0], pixel[1], pixel[2]];

    const color: ColorInfo = {
      hex: rgbToHex(r, g, b),
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: rgbToHsl(r, g, b),
    };

    setCurrentColor(color);
    
    // Add to history if not duplicate
    if (!colorHistory.some(c => c.hex === color.hex)) {
      setColorHistory(prev => [color, ...prev].slice(0, 20));
    }
  };

  const copyToClipboard = async (text: string, format: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(format);
    setTimeout(() => setCopied(null), 1500);
  };

  const clearAll = () => {
    setImage(null);
    setCurrentColor(null);
    setColorHistory([]);
    setIsPickerActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand to-info rounded-lg" />
              <span className="font-bold text-xl">VixPic</span>
            </Link>
            <span className="text-muted-foreground mx-2">/</span>
            <Link href="/tools" className="text-muted-foreground hover:text-foreground">Tools</Link>
            <span className="text-muted-foreground mx-2">/</span>
            <span className="text-muted-foreground">Color Picker</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/tools">
              <Button variant="ghost">All Tools</Button>
            </Link>
            <Link href="/generate">
              <Button>Full App</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-success-muted text-success-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              ✨ Free • No Upload • 100% Private
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Color Picker
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extract colors from any image. Click anywhere to pick colors and get HEX, RGB, and HSL values instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Image Area */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardContent className="p-6">
                  {!image ? (
                    <div
                      className="border-2 border-dashed border-input rounded-xl p-12 text-center hover:border-brand transition-colors cursor-pointer"
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      onClick={() => document.getElementById("fileInput")?.click()}
                    >
                      <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      <div className="w-16 h-16 mx-auto mb-4 bg-brand-muted rounded-full flex items-center justify-center text-3xl">
                        🎨
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Drop image here or click to upload</h3>
                      <p className="text-sm text-muted-foreground">
                        Supports PNG, JPG, WebP • Max 10MB • 100% client-side
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          {isPickerActive ? "👆 Click anywhere on the image to pick colors" : ""}
                        </p>
                        <Button variant="outline" size="sm" onClick={clearAll}>
                          Clear
                        </Button>
                      </div>
                      <div className="relative rounded-lg overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjBmMGYwIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4=')]">
                        <img
                          ref={imageRef}
                          src={image}
                          alt="Upload"
                          className="w-full h-auto cursor-crosshair"
                          onLoad={handleImageLoad}
                          onClick={handleImageClick}
                        />
                        <canvas ref={canvasRef} className="hidden" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Color Info Panel */}
            <div className="space-y-6">
              {/* Current Color */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Selected Color</h3>
                  {currentColor ? (
                    <div className="space-y-4">
                      {/* Color Preview */}
                      <div
                        className="w-full h-24 rounded-lg shadow-inner border"
                        style={{ backgroundColor: currentColor.hex }}
                      />
                      
                      {/* Color Values */}
                      <div className="space-y-2">
                        <button
                          onClick={() => copyToClipboard(currentColor.hex, "hex")}
                          className="w-full flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted transition-colors text-left"
                        >
                          <span className="text-sm text-muted-foreground">HEX</span>
                          <span className="font-mono font-semibold">
                            {copied === "hex" ? "✓ Copied!" : currentColor.hex}
                          </span>
                        </button>
                        <button
                          onClick={() => copyToClipboard(currentColor.rgb, "rgb")}
                          className="w-full flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted transition-colors text-left"
                        >
                          <span className="text-sm text-muted-foreground">RGB</span>
                          <span className="font-mono font-semibold text-sm">
                            {copied === "rgb" ? "✓ Copied!" : currentColor.rgb}
                          </span>
                        </button>
                        <button
                          onClick={() => copyToClipboard(currentColor.hsl, "hsl")}
                          className="w-full flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted transition-colors text-left"
                        >
                          <span className="text-sm text-muted-foreground">HSL</span>
                          <span className="font-mono font-semibold text-sm">
                            {copied === "hsl" ? "✓ Copied!" : currentColor.hsl}
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <div className="text-4xl mb-2">🖱️</div>
                      <p className="text-sm">Click on an image to pick colors</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Color History */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Color History</h3>
                    {colorHistory.length > 0 && (
                      <button
                        onClick={() => setColorHistory([])}
                        className="text-xs text-muted-foreground hover:text-muted-foreground"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  {colorHistory.length > 0 ? (
                    <div className="grid grid-cols-5 gap-2">
                      {colorHistory.map((color, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setCurrentColor(color);
                            copyToClipboard(color.hex, "hex");
                          }}
                          className="aspect-square rounded-lg shadow-sm border hover:scale-110 transition-transform"
                          style={{ backgroundColor: color.hex }}
                          title={color.hex}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Picked colors will appear here
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips Section */}
          <Card className="mt-8 border-2 bg-gradient-to-r from-brand-muted to-info-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">💡 Pro Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Click any value</strong> to copy it instantly to your clipboard.
                </div>
                <div>
                  <strong>History palette</strong> saves your last 20 picked colors for easy reference.
                </div>
                <div>
                  <strong>Works offline</strong> - all processing happens in your browser.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            <Link href="/" className="text-brand hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/crop" className="hover:underline">Cropper</Link> • 
            <Link href="/tools/convert" className="hover:underline">Converter</Link> •
            <Link href="/tools/color-picker" className="hover:underline">Color Picker</Link> •
            <Link href="/tools/blur-sharpen" className="hover:underline">Blur/Sharpen</Link> • 
            <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link> • 
            <Link href="/tools/upscaler" className="hover:underline">Upscaler</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
