"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function MemeMaker() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [fontSize, setFontSize] = useState(48);
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [font, setFont] = useState<"impact" | "arial" | "comic">("impact");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setOriginalFile(file);
    setTopText("");
    setBottomText("");
    
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

  const getFontFamily = () => {
    switch (font) {
      case "impact": return "Impact, sans-serif";
      case "arial": return "Arial Black, Arial, sans-serif";
      case "comic": return "Comic Sans MS, cursive";
      default: return "Impact, sans-serif";
    }
  };

  const drawMeme = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    // Text settings
    const scale = Math.min(img.width / 500, 2);
    const scaledFontSize = fontSize * scale;
    ctx.font = `bold ${scaledFontSize}px ${getFontFamily()}`;
    ctx.textAlign = "center";
    ctx.lineWidth = strokeWidth * scale;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = textColor;
    ctx.lineJoin = "round";
    ctx.miterLimit = 2;
    
    // Top text
    if (topText) {
      const lines = wrapText(ctx, topText.toUpperCase(), img.width - 40);
      lines.forEach((line, i) => {
        const y = scaledFontSize + (i * scaledFontSize * 1.1) + 10;
        ctx.strokeText(line, img.width / 2, y);
        ctx.fillText(line, img.width / 2, y);
      });
    }
    
    // Bottom text
    if (bottomText) {
      const lines = wrapText(ctx, bottomText.toUpperCase(), img.width - 40);
      lines.reverse().forEach((line, i) => {
        const y = img.height - 20 - (i * scaledFontSize * 1.1);
        ctx.strokeText(line, img.width / 2, y);
        ctx.fillText(line, img.width / 2, y);
      });
    }
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";
    
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  // Live preview
  useEffect(() => {
    if (!selectedImage || !previewCanvasRef.current) return;
    
    const canvas = previewCanvasRef.current;
    const ctx = canvas.getContext("2d")!;
    
    const img = new Image();
    img.onload = () => {
      // Scale for preview
      const maxSize = 500;
      const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Draw text
      const previewScale = canvas.width / 500;
      const scaledFontSize = fontSize * previewScale;
      ctx.font = `bold ${scaledFontSize}px ${getFontFamily()}`;
      ctx.textAlign = "center";
      ctx.lineWidth = strokeWidth * previewScale;
      ctx.strokeStyle = strokeColor;
      ctx.fillStyle = textColor;
      ctx.lineJoin = "round";
      ctx.miterLimit = 2;
      
      if (topText) {
        const lines = wrapText(ctx, topText.toUpperCase(), canvas.width - 20);
        lines.forEach((line, i) => {
          const y = scaledFontSize + (i * scaledFontSize * 1.1) + 5;
          ctx.strokeText(line, canvas.width / 2, y);
          ctx.fillText(line, canvas.width / 2, y);
        });
      }
      
      if (bottomText) {
        const lines = wrapText(ctx, bottomText.toUpperCase(), canvas.width - 20);
        lines.reverse().forEach((line, i) => {
          const y = canvas.height - 10 - (i * scaledFontSize * 1.1);
          ctx.strokeText(line, canvas.width / 2, y);
          ctx.fillText(line, canvas.width / 2, y);
        });
      }
    };
    img.src = selectedImage;
  }, [selectedImage, topText, bottomText, fontSize, textColor, strokeColor, strokeWidth, font]);

  const downloadMeme = () => {
    if (!selectedImage || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    
    const img = new Image();
    img.onload = () => {
      drawMeme(canvas, ctx, img);
      
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `meme-${originalFile?.name?.replace(/\.[^.]+$/, "")}.png`;
      link.click();
    };
    img.src = selectedImage;
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setTopText("");
    setBottomText("");
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
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Meme Generator
            </span>{" "}
            — Free Online
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            Create memes with top and bottom text. Classic Impact font or custom styles.
            No watermarks, no sign-up required.
          </p>
          <p className="text-sm text-muted-foreground">
            Free forever • Works offline • Download instantly
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
                  <div className="text-5xl mb-4">😂</div>
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
              {selectedImage && (
                <div className="space-y-6">
                  {/* Preview */}
                  <div className="bg-inverted rounded-lg p-4 flex items-center justify-center min-h-[350px]">
                    <canvas
                      ref={previewCanvasRef}
                      className="max-w-full max-h-[400px] object-contain rounded"
                    />
                  </div>

                  {/* Text Inputs */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Top Text</Label>
                      <input
                        type="text"
                        value={topText}
                        onChange={(e) => setTopText(e.target.value)}
                        placeholder="WHEN YOU..."
                        className="w-full px-4 py-3 border-2 rounded-lg text-lg font-bold uppercase focus:border-brand/60 focus:outline-none"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Bottom Text</Label>
                      <input
                        type="text"
                        value={bottomText}
                        onChange={(e) => setBottomText(e.target.value)}
                        placeholder="BUT THEN..."
                        className="w-full px-4 py-3 border-2 rounded-lg text-lg font-bold uppercase focus:border-brand/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Font Selection */}
                  <div className="p-4 bg-muted rounded-lg">
                    <Label className="text-sm font-medium mb-3 block">Font Style</Label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: "impact", label: "Impact", preview: "CLASSIC MEME" },
                        { value: "arial", label: "Arial Black", preview: "MODERN STYLE" },
                        { value: "comic", label: "Comic Sans", preview: "FUNNY VIBES" },
                      ].map((f) => (
                        <button
                          key={f.value}
                          onClick={() => setFont(f.value as typeof font)}
                          className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                            font === f.value
                              ? "border-brand bg-brand-muted/50"
                              : "border-border hover:border-brand"
                          }`}
                          style={{ fontFamily: f.value === "impact" ? "Impact" : f.value === "comic" ? "Comic Sans MS" : "Arial Black" }}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size & Colors */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Font Size */}
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm font-medium">Font Size</Label>
                        <span className="text-sm font-mono text-brand">{fontSize}px</span>
                      </div>
                      <Slider
                        value={[fontSize]}
                        onValueChange={(v) => setFontSize(Array.isArray(v) ? v[0] : v)}
                        min={24}
                        max={96}
                        step={2}
                        className="w-full"
                      />
                    </div>

                    {/* Text Color */}
                    <div className="p-4 bg-muted rounded-lg">
                      <Label className="text-sm font-medium mb-2 block">Text Color</Label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="w-10 h-10 rounded border cursor-pointer"
                        />
                        <input
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="flex-1 px-3 border rounded font-mono text-sm"
                        />
                      </div>
                    </div>

                    {/* Stroke Color */}
                    <div className="p-4 bg-muted rounded-lg">
                      <Label className="text-sm font-medium mb-2 block">Outline Color</Label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={strokeColor}
                          onChange={(e) => setStrokeColor(e.target.value)}
                          className="w-10 h-10 rounded border cursor-pointer"
                        />
                        <input
                          type="text"
                          value={strokeColor}
                          onChange={(e) => setStrokeColor(e.target.value)}
                          className="flex-1 px-3 border rounded font-mono text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stroke Width */}
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-sm font-medium">Outline Width</Label>
                      <span className="text-sm font-mono text-brand">{strokeWidth}px</span>
                    </div>
                    <Slider
                      value={[strokeWidth]}
                      onValueChange={(v) => setStrokeWidth(Array.isArray(v) ? v[0] : v)}
                      min={0}
                      max={8}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={downloadMeme}
                      disabled={!topText && !bottomText}
                      className="bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
                      size="lg"
                    >
                      Download Meme
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
          <h2 className="text-2xl font-bold text-center mb-8">Meme Maker Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold mb-2">Custom Styling</h3>
                <p className="text-sm text-muted-foreground">
                  Choose fonts, colors, sizes, and outline thickness for your meme.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">👁️</div>
                <h3 className="font-semibold mb-2">Live Preview</h3>
                <p className="text-sm text-muted-foreground">
                  See your meme update in real-time as you type and adjust settings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🚫</div>
                <h3 className="font-semibold mb-2">No Watermarks</h3>
                <p className="text-sm text-muted-foreground">
                  Download clean memes without any branding or watermarks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upsell */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand to-info">
        <div className="max-w-4xl mx-auto text-center text-brand-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need AI-Generated Images?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            VixPic lets you generate custom images with DALL-E, FLUX, and Stable Diffusion
            using your own API keys. Perfect meme templates on demand!
          </p>
          <Link href="/generate">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Try AI Generator
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
            <Link href="/tools/meme-maker" className="hover:underline">Meme Maker</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
