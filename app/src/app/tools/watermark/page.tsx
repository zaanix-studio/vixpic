"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useCallback, useEffect } from "react";

type WatermarkPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "tile";

export default function WatermarkTool() {
  const [image, setImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [watermarkText, setWatermarkText] = useState("© VixPic");
  const [position, setPosition] = useState<WatermarkPosition>("bottom-right");
  const [fontSize, setFontSize] = useState(24);
  const [opacity, setOpacity] = useState(50);
  const [color, setColor] = useState("#ffffff");
  const [isProcessing, setIsProcessing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const hexToRgba = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const applyWatermark = useCallback(() => {
    if (!originalImage || !canvasRef.current) return;
    setIsProcessing(true);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      // Set up text style
      ctx.font = `bold ${fontSize}px Arial, sans-serif`;
      ctx.fillStyle = hexToRgba(color, opacity / 100);
      ctx.textBaseline = "middle";
      
      const padding = 20;
      const textMetrics = ctx.measureText(watermarkText);
      const textWidth = textMetrics.width;
      const textHeight = fontSize;

      if (position === "tile") {
        // Tile pattern
        ctx.save();
        ctx.rotate(-30 * Math.PI / 180);
        const spacing = Math.max(textWidth, textHeight) * 2;
        for (let y = -canvas.height; y < canvas.height * 2; y += spacing) {
          for (let x = -canvas.width; x < canvas.width * 2; x += spacing) {
            ctx.fillText(watermarkText, x, y);
          }
        }
        ctx.restore();
      } else {
        // Single position
        let x: number, y: number;
        
        switch (position) {
          case "top-left":
            x = padding;
            y = padding + textHeight / 2;
            ctx.textAlign = "left";
            break;
          case "top-right":
            x = canvas.width - padding;
            y = padding + textHeight / 2;
            ctx.textAlign = "right";
            break;
          case "bottom-left":
            x = padding;
            y = canvas.height - padding - textHeight / 2;
            ctx.textAlign = "left";
            break;
          case "bottom-right":
            x = canvas.width - padding;
            y = canvas.height - padding - textHeight / 2;
            ctx.textAlign = "right";
            break;
          case "center":
          default:
            x = canvas.width / 2;
            y = canvas.height / 2;
            ctx.textAlign = "center";
            break;
        }

        // Draw shadow for better visibility
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        
        ctx.fillText(watermarkText, x, y);
      }

      setImage(canvas.toDataURL("image/png"));
      setIsProcessing(false);
    };
    img.src = originalImage;
  }, [originalImage, watermarkText, position, fontSize, opacity, color]);

  const downloadImage = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.download = `vixpic-watermarked-${Date.now()}.png`;
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
    setWatermarkText("© VixPic");
    setPosition("bottom-right");
    setFontSize(24);
    setOpacity(50);
  };

  const positions: { value: WatermarkPosition; label: string; icon: string }[] = [
    { value: "top-left", label: "Top Left", icon: "↖️" },
    { value: "top-right", label: "Top Right", icon: "↗️" },
    { value: "center", label: "Center", icon: "⏺️" },
    { value: "bottom-left", label: "Bottom Left", icon: "↙️" },
    { value: "bottom-right", label: "Bottom Right", icon: "↘️" },
    { value: "tile", label: "Tile Pattern", icon: "🔲" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
              <span className="font-bold text-xl">VixPic</span>
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/tools" className="text-gray-600 hover:text-gray-900">Tools</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-600">Watermark</span>
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ✨ Free • No Upload • 100% Private
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Add Watermark
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protect your images with custom text watermarks. Choose position, size, color, and opacity. All processing happens in your browser.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Image Area */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardContent className="p-6">
                  {!image ? (
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 transition-colors cursor-pointer"
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
                      <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                        💧
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Drop image here or click to upload</h3>
                      <p className="text-sm text-gray-500">
                        Supports PNG, JPG, WebP • Max 10MB • 100% client-side
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={clearAll}>
                          Clear
                        </Button>
                      </div>
                      
                      <div className="relative rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={image}
                          alt="Preview"
                          className="w-full h-auto"
                        />
                      </div>
                      
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Controls Panel */}
            <div className="space-y-6">
              {/* Watermark Text */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Watermark Text</h3>
                  <input
                    type="text"
                    value={watermarkText}
                    onChange={(e) => setWatermarkText(e.target.value)}
                    placeholder="Enter watermark text..."
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </CardContent>
              </Card>

              {/* Position Selection */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Position</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {positions.map((pos) => (
                      <button
                        key={pos.value}
                        onClick={() => setPosition(pos.value)}
                        className={`p-2 rounded-lg border-2 transition-all text-center ${
                          position === pos.value
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        title={pos.label}
                      >
                        <div className="text-lg">{pos.icon}</div>
                        <div className="text-xs text-gray-500 truncate">{pos.label}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Style Controls */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Style</h3>
                  <div className="space-y-4">
                    {/* Font Size */}
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">
                        Font Size: {fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="72"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full accent-purple-600"
                      />
                    </div>

                    {/* Opacity */}
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">
                        Opacity: {opacity}%
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={opacity}
                        onChange={(e) => setOpacity(Number(e.target.value))}
                        className="w-full accent-purple-600"
                      />
                    </div>

                    {/* Color */}
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">
                        Color
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="w-12 h-10 rounded border cursor-pointer"
                        />
                        <div className="flex gap-1">
                          {["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"].map((c) => (
                            <button
                              key={c}
                              onClick={() => setColor(c)}
                              className={`w-8 h-8 rounded border-2 ${
                                color === c ? "border-purple-500" : "border-gray-200"
                              }`}
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Button
                      onClick={applyWatermark}
                      disabled={!image || isProcessing || !watermarkText.trim()}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      {isProcessing ? "Processing..." : "Apply Watermark"}
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
                      disabled={!image || image === originalImage}
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
          <Card className="mt-8 border-2 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">💡 Pro Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <strong>Protect your work:</strong> Add copyright notices to prevent unauthorized use.
                </div>
                <div>
                  <strong>Use tile pattern:</strong> Makes it harder to remove watermarks from images.
                </div>
                <div>
                  <strong>Subtle is better:</strong> Lower opacity keeps your image visible while still protecting it.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>
            <Link href="/" className="text-purple-600 hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/crop" className="hover:underline">Cropper</Link> • 
            <Link href="/tools/convert" className="hover:underline">Converter</Link> •
            <Link href="/tools/color-picker" className="hover:underline">Color Picker</Link> •
            <Link href="/tools/blur-sharpen" className="hover:underline">Blur/Sharpen</Link> •
            <Link href="/tools/watermark" className="hover:underline">Watermark</Link> • 
            <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link> • 
            <Link href="/tools/upscaler" className="hover:underline">Upscaler</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
