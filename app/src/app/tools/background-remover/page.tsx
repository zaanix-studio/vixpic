"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ProcessingState = "idle" | "uploading" | "processing" | "done" | "error";

export default function BackgroundRemover() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [processingState, setProcessingState] = useState<ProcessingState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
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
      setSelectedImage(e.target?.result as string);
      setProcessedImage(null);
      setProcessingState("idle");
      setError(null);
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
      // Convert base64 to blob for Replicate
      const base64Data = selectedImage.split(",")[1];
      
      // Call Replicate API for background removal
      const response = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version: "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003",
          input: {
            image: `data:image/png;base64,${base64Data}`,
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
        await new Promise(resolve => setTimeout(resolve, 1000));
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
    link.download = "background-removed.png";
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setProcessedImage(null);
    setProcessingState("idle");
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
            <Link href="/tools/upscaler" className="text-muted-foreground hover:text-foreground hidden sm:block">
              Upscaler
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
            Remove Image Background{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            AI-powered background removal using your own Replicate API key. 
            No uploads to third parties, no watermarks, no limits.
          </p>
          <p className="text-sm text-muted-foreground">
            ~$0.005 per image via Replicate API
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6">
              {/* API Key Input (shown when needed) */}
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
                  <div className="text-5xl mb-4">🖼️</div>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original */}
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">Original</Label>
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
                      <Label className="text-sm text-muted-foreground mb-2 block">Result</Label>
                      <div 
                        className="relative aspect-square rounded-lg overflow-hidden"
                        style={{
                          backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><rect width=\"10\" height=\"10\" fill=\"%23f0f0f0\"/><rect x=\"10\" y=\"10\" width=\"10\" height=\"10\" fill=\"%23f0f0f0\"/><rect x=\"10\" width=\"10\" height=\"10\" fill=\"%23e0e0e0\"/><rect y=\"10\" width=\"10\" height=\"10\" fill=\"%23e0e0e0\"/></svg>')",
                          backgroundSize: "20px 20px"
                        }}
                      >
                        {processedImage ? (
                          <img
                            src={processedImage}
                            alt="Processed"
                            className="w-full h-full object-contain"
                          />
                        ) : processingState === "processing" ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                            <div className="text-center">
                              <div className="animate-spin w-12 h-12 border-4 border-brand border-t-transparent rounded-full mx-auto mb-3" />
                              <p className="text-sm text-muted-foreground">Removing background...</p>
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-muted">
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
                        Remove Background
                      </Button>
                    )}
                    {processedImage && (
                      <Button 
                        onClick={downloadImage}
                        className="bg-success hover:bg-success/90"
                        size="lg"
                      >
                        Download PNG
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

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-brand-muted text-brand rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Get Replicate API Key</h3>
              <p className="text-sm text-muted-foreground">
                Sign up at replicate.com. Free tier available.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-brand-muted text-brand rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Upload Your Image</h3>
              <p className="text-sm text-muted-foreground">
                Drag & drop or click to select any image.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-brand-muted text-brand rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Download Result</h3>
              <p className="text-sm text-muted-foreground">
                Get your transparent PNG instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BYOK */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why Use Your Own API Key?</h2>
          <p className="text-muted-foreground mb-8">
            Most &quot;free&quot; background removal tools have hidden costs. Here&apos;s why BYOK is better:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold mb-2">Pay API Cost Only</h3>
                <p className="text-sm text-muted-foreground">
                  ~$0.005/image vs $0.50+ on other tools. No markup.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold mb-2">100% Private</h3>
                <p className="text-sm text-muted-foreground">
                  Images go directly to Replicate. We never see them.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">♾️</div>
                <h3 className="font-semibold mb-2">No Limits</h3>
                <p className="text-sm text-muted-foreground">
                  Process unlimited images. No daily caps.
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
            Need More Than Background Removal?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            VixPic offers AI image generation, upscaling, batch processing, and more — 
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
