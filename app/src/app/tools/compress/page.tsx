"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function ImageCompressor() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [quality, setQuality] = useState([80]);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    setOriginalFile(file);
    setOriginalSize(file.size);
    setCompressedImage(null);
    setCompressedSize(0);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const compressImage = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Compress to JPEG with specified quality
      const compressed = canvas.toDataURL("image/jpeg", quality[0] / 100);
      setCompressedImage(compressed);
      
      // Calculate compressed size
      const base64Size = Math.ceil((compressed.length - 22) * 0.75);
      setCompressedSize(base64Size);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const downloadImage = () => {
    if (!compressedImage) return;
    const link = document.createElement("a");
    link.href = compressedImage;
    link.download = `compressed-${originalFile?.name?.replace(/\.[^.]+$/, "")}.jpg`;
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setCompressedImage(null);
    setOriginalSize(0);
    setCompressedSize(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const savings = originalSize > 0 && compressedSize > 0 
    ? Math.round((1 - compressedSize / originalSize) * 100) 
    : 0;

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
            Compress Images{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Without Quality Loss
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Reduce image file size by up to 90% while maintaining visual quality. 
            Everything happens in your browser — nothing is uploaded.
          </p>
          <p className="text-sm text-gray-500">
            Free forever • Works offline
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6">
              {/* Upload Area */}
              {!selectedImage && (
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/50 transition-colors"
                >
                  <div className="text-5xl mb-4">📦</div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Drop your image here
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    or click to browse
                  </p>
                  <p className="text-xs text-gray-400">
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

              {/* Preview Area */}
              {selectedImage && (
                <div className="space-y-6">
                  {/* Quality Slider */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Label className="font-medium">Compression Quality</Label>
                      <span className="text-sm text-gray-600 font-mono">{quality[0]}%</span>
                    </div>
                    <Slider
                      value={quality}
                      onValueChange={(v) => setQuality(Array.isArray(v) ? [...v] : [v])}
                      min={10}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Smaller file</span>
                      <span>Better quality</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-gray-500">Original</Label>
                        <span className="text-sm font-mono text-gray-600">{formatBytes(originalSize)}</span>
                      </div>
                      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={selectedImage}
                          alt="Original"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Compressed */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-gray-500">Compressed</Label>
                        {compressedSize > 0 && (
                          <span className="text-sm font-mono">
                            <span className="text-green-600">{formatBytes(compressedSize)}</span>
                            <span className="text-gray-400 ml-2">(-{savings}%)</span>
                          </span>
                        )}
                      </div>
                      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        {compressedImage ? (
                          <img
                            src={compressedImage}
                            alt="Compressed"
                            className="w-full h-full object-contain"
                          />
                        ) : processing ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full" />
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-400">Click compress to preview</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  {compressedSize > 0 && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <p className="text-green-800 font-medium">
                        🎉 Saved {formatBytes(originalSize - compressedSize)} ({savings}% reduction)
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {!compressedImage && (
                      <Button 
                        onClick={compressImage}
                        disabled={processing}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        size="lg"
                      >
                        {processing ? "Compressing..." : "Compress Image"}
                      </Button>
                    )}
                    {compressedImage && (
                      <>
                        <Button 
                          onClick={downloadImage}
                          className="bg-green-600 hover:bg-green-700"
                          size="lg"
                        >
                          Download Compressed
                        </Button>
                        <Button 
                          onClick={compressImage}
                          variant="outline"
                          size="lg"
                        >
                          Re-compress
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Use This Compressor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">100% Private</h3>
                <p className="text-sm text-gray-600">
                  Images never leave your browser. Zero server uploads.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Instant Results</h3>
                <p className="text-sm text-gray-600">
                  Client-side processing means no waiting for servers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎚️</div>
                <h3 className="font-semibold mb-2">Adjustable Quality</h3>
                <p className="text-sm text-gray-600">
                  Fine-tune the balance between size and quality.
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
              { icon: "🌐", title: "Websites", desc: "Faster page loads" },
              { icon: "📧", title: "Email", desc: "Smaller attachments" },
              { icon: "📱", title: "Social", desc: "Quick uploads" },
              { icon: "💾", title: "Storage", desc: "Save disk space" },
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
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>
            Part of <Link href="/" className="text-purple-600 hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link> • 
            <Link href="/tools/upscaler" className="hover:underline">Upscaler</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
