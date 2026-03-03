"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

type OutputFormat = "jpeg" | "png" | "webp";

interface FormatOption {
  value: OutputFormat;
  label: string;
  ext: string;
  desc: string;
  supportsQuality: boolean;
}

const formatOptions: FormatOption[] = [
  { value: "jpeg", label: "JPG", ext: "jpg", desc: "Best for photos, smallest size", supportsQuality: true },
  { value: "png", label: "PNG", ext: "png", desc: "Lossless, supports transparency", supportsQuality: false },
  { value: "webp", label: "WebP", ext: "webp", desc: "Modern format, great compression", supportsQuality: true },
];

export default function FormatConverter() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("webp");
  const [quality, setQuality] = useState([85]);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [convertedSize, setConvertedSize] = useState<number>(0);
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

  const getOriginalFormat = (): string => {
    if (!originalFile) return "";
    const ext = originalFile.name.split(".").pop()?.toLowerCase() || "";
    return ext.toUpperCase();
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
    setConvertedImage(null);
    setConvertedSize(0);
    
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

  const convertImage = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const selectedFormat = formatOptions.find(f => f.value === outputFormat)!;
      const mimeType = `image/${outputFormat}`;
      
      let converted: string;
      if (selectedFormat.supportsQuality) {
        converted = canvas.toDataURL(mimeType, quality[0] / 100);
      } else {
        converted = canvas.toDataURL(mimeType);
      }
      
      setConvertedImage(converted);
      
      // Calculate size
      const base64Size = Math.ceil((converted.length - 22) * 0.75);
      setConvertedSize(base64Size);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const downloadImage = () => {
    if (!convertedImage) return;
    const format = formatOptions.find(f => f.value === outputFormat)!;
    const link = document.createElement("a");
    link.href = convertedImage;
    const baseName = originalFile?.name?.replace(/\.[^.]+$/, "") || "converted";
    link.download = `${baseName}.${format.ext}`;
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setConvertedImage(null);
    setOriginalSize(0);
    setConvertedSize(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const sizeDiff = convertedSize > 0 ? ((convertedSize - originalSize) / originalSize * 100).toFixed(0) : null;
  const currentFormat = formatOptions.find(f => f.value === outputFormat)!;

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
            Convert Image{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Format Instantly
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            Convert between PNG, JPG, and WebP formats. 
            All processing happens in your browser — your images stay private.
          </p>
          <p className="text-sm text-muted-foreground">
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
                  className="border-2 border-dashed border-input rounded-lg p-12 text-center cursor-pointer hover:border-brand hover:bg-brand-muted/50 transition-colors"
                >
                  <div className="text-5xl mb-4">🔄</div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    Drop your image here
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, WEBP, GIF, BMP
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
                  {/* Format Selection */}
                  <div className="p-4 bg-muted rounded-lg">
                    <Label className="font-medium mb-3 block">Convert To</Label>
                    <RadioGroup
                      value={outputFormat}
                      onValueChange={(v) => {
                        if (!v) return;
                        setOutputFormat(v as OutputFormat);
                        setConvertedImage(null);
                      }}
                      className="grid grid-cols-3 gap-4"
                    >
                      {formatOptions.map((format) => (
                        <div key={format.value}>
                          <RadioGroupItem
                            value={format.value}
                            id={format.value}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={format.value}
                            className="flex flex-col items-center justify-between rounded-lg border-2 border-border bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-brand peer-data-[state=checked]:bg-brand-muted/50"
                          >
                            <span className="text-lg font-bold">{format.label}</span>
                            <span className="text-xs text-muted-foreground text-center mt-1">{format.desc}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Quality Slider (for formats that support it) */}
                  {currentFormat.supportsQuality && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Label className="font-medium">Quality</Label>
                        <span className="text-sm text-muted-foreground font-mono">{quality[0]}%</span>
                      </div>
                      <Slider
                        value={quality}
                        onValueChange={(v) => setQuality(Array.isArray(v) ? [...v] : [v])}
                        min={10}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>Smaller file</span>
                        <span>Better quality</span>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-muted-foreground">
                          Original ({getOriginalFormat()})
                        </Label>
                        <span className="text-sm font-mono text-muted-foreground">{formatBytes(originalSize)}</span>
                      </div>
                      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                        <img
                          src={selectedImage}
                          alt="Original"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Converted */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-muted-foreground">
                          Converted ({currentFormat.label})
                        </Label>
                        {convertedSize > 0 && (
                          <span className="text-sm font-mono">
                            <span className={parseInt(sizeDiff!) <= 0 ? "text-success" : "text-warning"}>
                              {formatBytes(convertedSize)}
                            </span>
                            <span className="text-muted-foreground ml-2">
                              ({parseInt(sizeDiff!) <= 0 ? sizeDiff : `+${sizeDiff}`}%)
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                        {convertedImage ? (
                          <img
                            src={convertedImage}
                            alt="Converted"
                            className="w-full h-full object-contain"
                          />
                        ) : processing ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin w-12 h-12 border-4 border-brand border-t-transparent rounded-full" />
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-muted-foreground">Click convert to preview</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {!convertedImage && (
                      <Button 
                        onClick={convertImage}
                        disabled={processing}
                        className="bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
                        size="lg"
                      >
                        {processing ? "Converting..." : `Convert to ${currentFormat.label}`}
                      </Button>
                    )}
                    {convertedImage && (
                      <>
                        <Button 
                          onClick={downloadImage}
                          className="bg-success hover:bg-success/90"
                          size="lg"
                        >
                          Download {currentFormat.label}
                        </Button>
                        <Button 
                          onClick={convertImage}
                          variant="outline"
                          size="lg"
                        >
                          Re-convert
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

      {/* Format Comparison */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">When to Use Each Format</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-info">JPG</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Photos and complex images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Smallest file size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Universal compatibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>No transparency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-brand">PNG</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Graphics and logos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Transparency support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Lossless quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Larger file sizes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-success">WebP</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Best of both worlds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Transparency support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Small + high quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-0.5">~</span>
                    <span>Some old browsers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
            Free Tools: <Link href="/tools/convert" className="hover:underline">Format Converter</Link> • 
            <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
