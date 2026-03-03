"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useCallback, useEffect } from "react";

type FilterMode = "blur" | "sharpen";

export default function BlurSharpenTool() {
  const [image, setImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [mode, setMode] = useState<FilterMode>("blur");
  const [intensity, setIntensity] = useState(5);
  const [isProcessing, setIsProcessing] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const originalCanvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImage(result);
        setOriginalImage(result);
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
        setOriginalImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyBlur = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Use CSS filter for blur - more performant
    ctx.filter = `blur(${intensity}px)`;
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext("2d")!;
    tempCtx.drawImage(ctx.canvas, 0, 0);
    
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(tempCanvas, 0, 0);
    ctx.filter = "none";
  }, [intensity]);

  const applySharpen = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const copy = new Uint8ClampedArray(data);
    
    // Sharpen kernel
    const factor = intensity / 10;
    const kernel = [
      0, -factor, 0,
      -factor, 1 + 4 * factor, -factor,
      0, -factor, 0
    ];

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        for (let c = 0; c < 3; c++) {
          let sum = 0;
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const idx = ((y + ky) * width + (x + kx)) * 4 + c;
              sum += copy[idx] * kernel[(ky + 1) * 3 + (kx + 1)];
            }
          }
          const idx = (y * width + x) * 4 + c;
          data[idx] = Math.min(255, Math.max(0, sum));
        }
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
  }, [intensity]);

  const processImage = useCallback(() => {
    if (!originalImage || !canvasRef.current) return;
    setIsProcessing(true);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      if (mode === "blur") {
        applyBlur(ctx, canvas.width, canvas.height);
      } else {
        applySharpen(ctx, canvas.width, canvas.height);
      }

      setImage(canvas.toDataURL("image/png"));
      setIsProcessing(false);
    };
    img.src = originalImage;
  }, [originalImage, mode, applyBlur, applySharpen]);

  // Store original for comparison
  useEffect(() => {
    if (originalImage && originalCanvasRef.current) {
      const img = new Image();
      img.onload = () => {
        const canvas = originalCanvasRef.current!;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);
      };
      img.src = originalImage;
    }
  }, [originalImage]);

  const downloadImage = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.download = `vixpic-${mode}-${Date.now()}.png`;
    link.href = image;
    link.click();
  };

  const resetImage = () => {
    if (originalImage) {
      setImage(originalImage);
    }
  };

  const clearAll = () => {
    setImage(null);
    setOriginalImage(null);
    setIntensity(5);
    setCompareMode(false);
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
            <span className="text-muted-foreground">Blur & Sharpen</span>
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
              Blur & Sharpen Tool
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Apply blur effects or sharpen images for better clarity. All processing happens in your browser—your images never leave your device.
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
                        🔍
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Drop image here or click to upload</h3>
                      <p className="text-sm text-muted-foreground">
                        Supports PNG, JPG, WebP • Max 10MB • 100% client-side
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {compareMode && originalImage && (
                            <span className="text-sm text-muted-foreground">
                              👈 Original | Processed 👉
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setCompareMode(!compareMode)}
                            disabled={!originalImage || image === originalImage}
                          >
                            {compareMode ? "Hide Compare" : "Compare"}
                          </Button>
                          <Button variant="outline" size="sm" onClick={clearAll}>
                            Clear
                          </Button>
                        </div>
                      </div>
                      
                      <div className={`relative rounded-lg overflow-hidden bg-muted ${compareMode ? "grid grid-cols-2 gap-1" : ""}`}>
                        {compareMode && originalImage && (
                          <div className="relative">
                            <img
                              src={originalImage}
                              alt="Original"
                              className="w-full h-auto"
                            />
                            <div className="absolute top-2 left-2 bg-inverted/60 text-inverted-foreground text-xs px-2 py-1 rounded">
                              Original
                            </div>
                          </div>
                        )}
                        <div className="relative">
                          <img
                            src={image}
                            alt="Processed"
                            className="w-full h-auto"
                          />
                          {compareMode && (
                            <div className="absolute top-2 right-2 bg-inverted/60 text-inverted-foreground text-xs px-2 py-1 rounded">
                              {mode === "blur" ? "Blurred" : "Sharpened"}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <canvas ref={canvasRef} className="hidden" />
                      <canvas ref={originalCanvasRef} className="hidden" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Controls Panel */}
            <div className="space-y-6">
              {/* Mode Selection */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Effect Mode</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setMode("blur")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        mode === "blur"
                          ? "border-brand/60 bg-brand-muted/50"
                          : "border-border hover:border-brand"
                      }`}
                    >
                      <div className="text-2xl mb-1">🌫️</div>
                      <div className="font-medium text-sm">Blur</div>
                    </button>
                    <button
                      onClick={() => setMode("sharpen")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        mode === "sharpen"
                          ? "border-brand/60 bg-brand-muted/50"
                          : "border-border hover:border-brand"
                      }`}
                    >
                      <div className="text-2xl mb-1">✨</div>
                      <div className="font-medium text-sm">Sharpen</div>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Intensity Control */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">
                    {mode === "blur" ? "Blur Intensity" : "Sharpen Intensity"}
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="1"
                      max={mode === "blur" ? "20" : "15"}
                      value={intensity}
                      onChange={(e) => setIntensity(Number(e.target.value))}
                      className="w-full accent-brand"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Low</span>
                      <span className="font-medium text-brand">{intensity}</span>
                      <span>High</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Actions</h3>
                  <div className="space-y-3">
                    <Button
                      onClick={processImage}
                      disabled={!image || isProcessing}
                      className="w-full bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
                    >
                      {isProcessing ? "Processing..." : `Apply ${mode === "blur" ? "Blur" : "Sharpen"}`}
                    </Button>
                    <Button
                      onClick={resetImage}
                      variant="outline"
                      disabled={!originalImage || image === originalImage}
                      className="w-full"
                    >
                      Reset to Original
                    </Button>
                    <Button
                      onClick={downloadImage}
                      variant="outline"
                      disabled={!image}
                      className="w-full"
                    >
                      Download PNG
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips Section */}
          <Card className="mt-8 border-2 bg-gradient-to-r from-brand-muted to-info-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">💡 When to Use</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>🌫️ Blur:</strong> Create depth of field effects, hide sensitive info, make backgrounds less distracting, or create dreamy aesthetics.
                </div>
                <div>
                  <strong>✨ Sharpen:</strong> Enhance photo clarity, improve text readability, bring out fine details, or fix slightly out-of-focus images.
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
