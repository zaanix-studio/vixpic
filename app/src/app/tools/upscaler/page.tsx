"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProcessingState = "idle" | "processing" | "done" | "error";

export default function ImageUpscaler() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [processingState, setProcessingState] = useState<ProcessingState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [scale, setScale] = useState<string>("2");
  const [originalSize, setOriginalSize] = useState<{ w: number; h: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setSelectedImage(dataUrl);
      setProcessedImage(null);
      setProcessingState("idle");
      setError(null);
      
      // Get original dimensions
      const img = new Image();
      img.onload = () => {
        setOriginalSize({ w: img.width, h: img.height });
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const processImage = async () => {
    if (!selectedImage) return;

    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }

    setProcessingState("processing");
    setError(null);

    try {
      const base64Data = selectedImage.split(",")[1];
      
      // Use Real-ESRGAN via Replicate
      const response = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version: "42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b",
          input: {
            image: `data:image/png;base64,${base64Data}`,
            scale: parseInt(scale),
            face_enhance: true,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "API request failed");
      }

      const prediction = await response.json();
      
      // Poll for completion
      let result = prediction;
      while (result.status !== "succeeded" && result.status !== "failed") {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const pollResponse = await fetch(
          `https://api.replicate.com/v1/predictions/${result.id}`,
          {
            headers: {
              "Authorization": `Bearer ${apiKey}`,
            },
          }
        );
        result = await pollResponse.json();
      }

      if (result.status === "failed") {
        throw new Error(result.error || "Processing failed");
      }

      setProcessedImage(result.output);
      setProcessingState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Processing failed");
      setProcessingState("error");
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = `upscaled-${scale}x.png`;
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setProcessedImage(null);
    setProcessingState("idle");
    setError(null);
    setOriginalSize(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getOutputSize = () => {
    if (!originalSize) return null;
    const s = parseInt(scale);
    return { w: originalSize.w * s, h: originalSize.h * s };
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
            <span className="text-muted-foreground">Free Tools</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/tools/background-remover" className="text-muted-foreground hover:text-foreground hidden sm:block">
              Background Remover
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
            ✨ Free Tool • No Login Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Upscale Images{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Up to 4x
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            AI-powered image upscaling with Real-ESRGAN. Enhance resolution while preserving detail.
            Uses your own Replicate API key.
          </p>
          <p className="text-sm text-muted-foreground">
            ~$0.01 per image via Replicate API
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6">
              {/* API Key Input */}
              {showApiKeyInput && !apiKey && (
                <div className="mb-6 p-4 bg-warning-muted/50 border border-warning/20 rounded-lg">
                  <h3 className="font-semibold text-warning-muted-foreground mb-2">Enter Your Replicate API Key</h3>
                  <p className="text-sm text-warning-muted-foreground mb-3">
                    This tool uses your own API key for privacy. Get one free at{" "}
                    <a 
                      href="https://replicate.com/account/api-tokens" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      replicate.com
                    </a>
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="password"
                      placeholder="r8_..."
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={() => setShowApiKeyInput(false)} disabled={!apiKey}>
                      Save
                    </Button>
                  </div>
                  <p className="text-xs text-warning mt-2">
                    🔒 Your key stays in your browser. Never sent to our servers.
                  </p>
                </div>
              )}

              {/* Upload Area */}
              {!selectedImage && (
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-input rounded-lg p-12 text-center cursor-pointer hover:border-brand hover:bg-brand-muted/50 transition-colors"
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    Drop your image here
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, WEBP up to 10MB
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

              {/* Preview Area */}
              {selectedImage && (
                <div className="space-y-6">
                  {/* Scale selector */}
                  {!processedImage && processingState !== "processing" && (
                    <div className="flex items-center justify-center gap-4">
                      <Label>Upscale Factor:</Label>
                      <Select value={scale} onValueChange={(v) => v && setScale(v)}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2x</SelectItem>
                          <SelectItem value="4">4x</SelectItem>
                        </SelectContent>
                      </Select>
                      {originalSize && (
                        <span className="text-sm text-muted-foreground">
                          {originalSize.w}×{originalSize.h} → {getOutputSize()?.w}×{getOutputSize()?.h}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original */}
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">
                        Original {originalSize && `(${originalSize.w}×${originalSize.h})`}
                      </Label>
                      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                        <img
                          src={selectedImage}
                          alt="Original"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Result */}
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">
                        Upscaled {processedImage && getOutputSize() && `(${getOutputSize()?.w}×${getOutputSize()?.h})`}
                      </Label>
                      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                        {processedImage ? (
                          <img
                            src={processedImage}
                            alt="Upscaled"
                            className="w-full h-full object-contain"
                          />
                        ) : processingState === "processing" ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                            <div className="text-center">
                              <div className="animate-spin w-12 h-12 border-4 border-brand border-t-transparent rounded-full mx-auto mb-3" />
                              <p className="text-sm text-muted-foreground">Upscaling image...</p>
                              <p className="text-xs text-muted-foreground mt-1">This may take 30-60 seconds</p>
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-muted-foreground">Preview will appear here</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg text-destructive">
                      <p className="font-medium">Error</p>
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {!processedImage && processingState !== "processing" && (
                      <Button 
                        onClick={processImage}
                        className="bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
                        size="lg"
                      >
                        Upscale {scale}x
                      </Button>
                    )}
                    {processedImage && (
                      <Button 
                        onClick={downloadImage}
                        className="bg-success hover:bg-success/90"
                        size="lg"
                      >
                        Download HD Image
                      </Button>
                    )}
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Try Another Image
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-semibold mb-1">Old Photos</h3>
              <p className="text-sm text-muted-foreground">Restore low-res memories</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold mb-1">AI Art</h3>
              <p className="text-sm text-muted-foreground">Upscale generated images</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🖼️</div>
              <h3 className="font-semibold mb-1">Print Ready</h3>
              <p className="text-sm text-muted-foreground">Scale for large prints</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🛒</div>
              <h3 className="font-semibold mb-1">E-commerce</h3>
              <p className="text-sm text-muted-foreground">Enhance product photos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BYOK */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why Use Your Own API Key?</h2>
          <p className="text-muted-foreground mb-8">
            Most upscaling tools charge premium prices. Here&apos;s why BYOK is smarter:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold mb-2">~$0.01/Image</h3>
                <p className="text-sm text-muted-foreground">
                  vs $0.10-1.00 on premium upscalers. 90%+ savings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold mb-2">Your Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  Images go directly to Replicate. We never store them.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold mb-2">No Limits</h3>
                <p className="text-sm text-muted-foreground">
                  Process as many images as you need. No daily caps.
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
            Need More Image Tools?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            VixPic offers AI image generation, background removal, batch processing, and more — 
            all with your own API keys.
          </p>
          <Link href="/generate">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Try VixPic Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            Part of <Link href="/" className="text-brand hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link> • 
            <Link href="/tools/upscaler" className="hover:underline">Image Upscaler</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
