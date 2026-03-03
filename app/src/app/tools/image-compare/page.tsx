"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useCallback } from "react";

export default function ImageCompareTool() {
  const [imageA, setImageA] = useState<string | null>(null);
  const [imageB, setImageB] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<"slider" | "sideBySide" | "onionSkin">("slider");
  const [onionOpacity, setOnionOpacity] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFileSelect = (side: "A" | "B") => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        if (side === "A") {
          setImageA(result);
        } else {
          setImageB(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (side: "A" | "B") => (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        if (side === "A") {
          setImageA(result);
        } else {
          setImageB(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const swapImages = () => {
    const temp = imageA;
    setImageA(imageB);
    setImageB(temp);
  };

  const clearAll = () => {
    setImageA(null);
    setImageB(null);
    setSliderPosition(50);
  };

  const bothImagesLoaded = imageA && imageB;

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
            <span className="text-muted-foreground">Image Compare</span>
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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-success-muted text-success-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              ✨ Free • No Upload • 100% Private
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Image Compare
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare two images side by side with an interactive slider. Perfect for before/after edits, A/B testing, and quality comparisons.
            </p>
          </div>

          {/* Upload Area */}
          {!bothImagesLoaded && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Image A Upload */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-center">
                    {imageA ? "✓ Image A (Before)" : "Image A (Before)"}
                  </h3>
                  {!imageA ? (
                    <div
                      className="border-2 border-dashed border-input rounded-xl p-8 text-center hover:border-brand transition-colors cursor-pointer"
                      onDrop={handleDrop("A")}
                      onDragOver={(e) => e.preventDefault()}
                      onClick={() => document.getElementById("fileInputA")?.click()}
                    >
                      <input
                        id="fileInputA"
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect("A")}
                        className="hidden"
                      />
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-sm text-muted-foreground">
                        Drop or click to upload
                      </p>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imageA}
                        alt="Image A"
                        className="w-full h-48 object-contain bg-muted rounded-lg"
                      />
                      <button
                        onClick={() => setImageA(null)}
                        className="absolute top-2 right-2 bg-background/80 hover:bg-background rounded-full p-1 shadow"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Image B Upload */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-center">
                    {imageB ? "✓ Image B (After)" : "Image B (After)"}
                  </h3>
                  {!imageB ? (
                    <div
                      className="border-2 border-dashed border-input rounded-xl p-8 text-center hover:border-brand transition-colors cursor-pointer"
                      onDrop={handleDrop("B")}
                      onDragOver={(e) => e.preventDefault()}
                      onClick={() => document.getElementById("fileInputB")?.click()}
                    >
                      <input
                        id="fileInputB"
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect("B")}
                        className="hidden"
                      />
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-sm text-muted-foreground">
                        Drop or click to upload
                      </p>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imageB}
                        alt="Image B"
                        className="w-full h-48 object-contain bg-muted rounded-lg"
                      />
                      <button
                        onClick={() => setImageB(null)}
                        className="absolute top-2 right-2 bg-background/80 hover:bg-background rounded-full p-1 shadow"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Comparison View */}
          {bothImagesLoaded && (
            <Card className="border-2 mb-6">
              <CardContent className="p-6">
                {/* Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex gap-2">
                    {(["slider", "sideBySide", "onionSkin"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setViewMode(mode)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          viewMode === mode
                            ? "bg-brand text-brand-foreground"
                            : "bg-muted hover:bg-muted"
                        }`}
                      >
                        {mode === "slider" && "Slider"}
                        {mode === "sideBySide" && "Side by Side"}
                        {mode === "onionSkin" && "Overlay"}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={swapImages}>
                      ⇄ Swap
                    </Button>
                    <Button variant="outline" size="sm" onClick={clearAll}>
                      Clear
                    </Button>
                  </div>
                </div>

                {/* Onion Skin Opacity Control */}
                {viewMode === "onionSkin" && (
                  <div className="mb-4">
                    <label className="text-sm text-muted-foreground block mb-2">
                      Overlay Opacity: {onionOpacity}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={onionOpacity}
                      onChange={(e) => setOnionOpacity(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                )}

                {/* Slider Mode */}
                {viewMode === "slider" && (
                  <div
                    ref={containerRef}
                    className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden cursor-col-resize select-none"
                    onMouseMove={handleMouseMove}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={() => setIsDragging(false)}
                  >
                    {/* Image B (Full) */}
                    <img
                      src={imageB}
                      alt="After"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    
                    {/* Image A (Clipped) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img
                        src={imageA}
                        alt="Before"
                        className="absolute inset-0 w-full h-full object-contain"
                        style={{ 
                          width: containerRef.current ? containerRef.current.offsetWidth : "100%",
                          maxWidth: "none"
                        }}
                      />
                    </div>

                    {/* Slider Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-background shadow-lg cursor-col-resize"
                      style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                      onMouseDown={() => setIsDragging(true)}
                      onTouchStart={() => setIsDragging(true)}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-muted-foreground">⇔</span>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute bottom-4 left-4 bg-inverted/50 text-inverted-foreground text-xs px-2 py-1 rounded">
                      Before
                    </div>
                    <div className="absolute bottom-4 right-4 bg-inverted/50 text-inverted-foreground text-xs px-2 py-1 rounded">
                      After
                    </div>
                  </div>
                )}

                {/* Side by Side Mode */}
                {viewMode === "sideBySide" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <img
                        src={imageA}
                        alt="Before"
                        className="w-full aspect-video object-contain bg-muted rounded-lg"
                      />
                      <div className="absolute bottom-2 left-2 bg-inverted/50 text-inverted-foreground text-xs px-2 py-1 rounded">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={imageB}
                        alt="After"
                        className="w-full aspect-video object-contain bg-muted rounded-lg"
                      />
                      <div className="absolute bottom-2 right-2 bg-inverted/50 text-inverted-foreground text-xs px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                )}

                {/* Onion Skin Mode */}
                {viewMode === "onionSkin" && (
                  <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={imageA}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    <img
                      src={imageB}
                      alt="After"
                      className="absolute inset-0 w-full h-full object-contain"
                      style={{ opacity: onionOpacity / 100 }}
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-inverted/50 text-inverted-foreground text-xs px-3 py-1 rounded">
                      Before ← Opacity → After
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Tips Section */}
          <Card className="border-2 bg-gradient-to-r from-brand-muted to-info-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">💡 Pro Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Slider mode</strong> is best for comparing specific details in the same location.
                </div>
                <div>
                  <strong>Overlay mode</strong> helps spot subtle differences by fading between images.
                </div>
                <div>
                  <strong>Side by side</strong> works well for overall composition and color changes.
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
            <Link href="/tools/image-compare" className="hover:underline">Image Compare</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
