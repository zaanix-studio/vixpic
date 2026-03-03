"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ImageInfo {
  name: string;
  size: number;
  type: string;
  width: number;
  height: number;
  lastModified: Date;
}

interface MetadataEntry {
  label: string;
  value: string;
  category: "basic" | "file" | "color";
}

export default function MetadataViewer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [metadata, setMetadata] = useState<MetadataEntry[]>([]);
  const [strippedImage, setStrippedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFile = async (file: File) => {
    setOriginalFile(file);
    setStrippedImage(null);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgSrc = e.target?.result as string;
      setSelectedImage(imgSrc);
      
      const img = new Image();
      img.onload = () => {
        const info: ImageInfo = {
          name: file.name,
          size: file.size,
          type: file.type,
          width: img.width,
          height: img.height,
          lastModified: new Date(file.lastModified),
        };
        setImageInfo(info);

        // Extract basic metadata
        const entries: MetadataEntry[] = [
          { label: "Filename", value: file.name, category: "file" },
          { label: "File Size", value: formatFileSize(file.size), category: "file" },
          { label: "File Type", value: file.type || "Unknown", category: "file" },
          { label: "Last Modified", value: info.lastModified.toLocaleString(), category: "file" },
          { label: "Dimensions", value: `${img.width} × ${img.height} px`, category: "basic" },
          { label: "Aspect Ratio", value: getAspectRatio(img.width, img.height), category: "basic" },
          { label: "Megapixels", value: `${((img.width * img.height) / 1000000).toFixed(2)} MP`, category: "basic" },
          { label: "Color Depth", value: "24-bit (estimated)", category: "color" },
        ];
        setMetadata(entries);
      };
      img.src = imgSrc;
    };
    reader.readAsDataURL(file);
  };

  const getAspectRatio = (w: number, h: number): string => {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(w, h);
    const ratioW = w / divisor;
    const ratioH = h / divisor;
    
    // Simplify common ratios
    if (Math.abs(ratioW / ratioH - 16/9) < 0.01) return "16:9";
    if (Math.abs(ratioW / ratioH - 4/3) < 0.01) return "4:3";
    if (Math.abs(ratioW / ratioH - 3/2) < 0.01) return "3:2";
    if (Math.abs(ratioW / ratioH - 1) < 0.01) return "1:1";
    
    if (ratioW > 100 || ratioH > 100) {
      return `${(w/h).toFixed(2)}:1`;
    }
    return `${ratioW}:${ratioH}`;
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

  const stripMetadata = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Drawing to canvas removes all EXIF data
      ctx.drawImage(img, 0, 0);
      
      // Re-encode as JPEG or PNG (removes metadata)
      const mimeType = originalFile?.type === "image/png" ? "image/png" : "image/jpeg";
      const stripped = canvas.toDataURL(mimeType, 0.95);
      setStrippedImage(stripped);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const downloadStripped = () => {
    if (!strippedImage || !originalFile) return;
    const extension = originalFile.type === "image/png" ? "png" : "jpg";
    const link = document.createElement("a");
    link.href = strippedImage;
    link.download = `no-metadata-${originalFile.name.replace(/\.[^.]+$/, "")}.${extension}`;
    link.click();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setImageInfo(null);
    setMetadata([]);
    setStrippedImage(null);
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
            Image{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Metadata Viewer
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            View image information and remove metadata for privacy. 
            See dimensions, file size, and more — then strip EXIF data if needed.
          </p>
          <p className="text-sm text-muted-foreground">
            Free forever • Works offline • No watermarks
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
                  <div className="text-5xl mb-4">🔍</div>
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

              {/* Metadata Display */}
              {selectedImage && !strippedImage && (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image Preview */}
                  <div>
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center min-h-[300px]">
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-w-full max-h-[400px] object-contain rounded"
                      />
                    </div>
                  </div>

                  {/* Metadata Table */}
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span>📋</span> Image Information
                    </h3>
                    
                    <div className="space-y-1 mb-6">
                      {metadata.map((entry, i) => (
                        <div 
                          key={i}
                          className="flex justify-between items-center py-2 px-3 rounded hover:bg-muted group"
                        >
                          <span className="text-sm text-muted-foreground">{entry.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{entry.value}</span>
                            <button
                              onClick={() => copyToClipboard(entry.value)}
                              className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-muted-foreground transition-opacity"
                              title="Copy"
                            >
                              📋
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Privacy Warning */}
                    <div className="p-4 bg-warning-muted/50 border border-warning/20 rounded-lg mb-4">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">⚠️</span>
                        <div>
                          <p className="text-sm font-medium text-warning-muted-foreground">Privacy Notice</p>
                          <p className="text-xs text-warning-muted-foreground mt-1">
                            Images can contain hidden metadata like GPS location, camera model, 
                            and date taken. Strip metadata before sharing sensitive photos.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button 
                        onClick={stripMetadata}
                        disabled={processing}
                        className="w-full bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
                        size="lg"
                      >
                        {processing ? "Processing..." : "🛡️ Strip All Metadata"}
                      </Button>
                      <Button variant="outline" onClick={resetTool} className="w-full">
                        Check Another Image
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Result */}
              {strippedImage && (
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 bg-success-muted text-success-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
                      ✓ Metadata removed successfully
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Original</p>
                      <div className="bg-muted rounded-lg p-4 inline-block">
                        <img
                          src={selectedImage!}
                          alt="Original"
                          className="max-w-full max-h-[250px] object-contain rounded"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatFileSize(originalFile?.size || 0)}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Clean (No Metadata)</p>
                      <div className="bg-muted rounded-lg p-4 inline-block border-2 border-success/20">
                        <img
                          src={strippedImage}
                          alt="Stripped"
                          className="max-w-full max-h-[250px] object-contain rounded"
                        />
                      </div>
                      <p className="text-xs text-success mt-2">
                        🛡️ Safe to share
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={downloadStripped}
                      className="bg-success hover:bg-success/90"
                      size="lg"
                    >
                      Download Clean Image
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Check Another Image
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
          <h2 className="text-2xl font-bold text-center mb-8">What Is Image Metadata?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-semibold mb-2">Location Data</h3>
                <p className="text-sm text-muted-foreground">
                  GPS coordinates can reveal where a photo was taken. Strip metadata before sharing location-sensitive images.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📷</div>
                <h3 className="font-semibold mb-2">Camera Info</h3>
                <p className="text-sm text-muted-foreground">
                  Camera model, lens, settings (ISO, aperture, shutter speed) are often embedded in photos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="font-semibold mb-2">Timestamps</h3>
                <p className="text-sm text-muted-foreground">
                  Date and time the photo was taken, edited, and saved. Can reveal personal patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Why Strip Metadata?</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: "🔒", title: "Privacy", desc: "Protect your location" },
              { icon: "📤", title: "Sharing", desc: "Safe social uploads" },
              { icon: "💼", title: "Professional", desc: "Clean client deliverables" },
              { icon: "📁", title: "File Size", desc: "Slightly smaller files" },
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
            VixPic offers compression, resizing, cropping, filters, and AI-powered editing.
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
            <Link href="/tools/metadata" className="hover:underline">Metadata</Link> •
            <Link href="/tools/filters" className="hover:underline">Filters</Link> •
            <Link href="/tools/rotate" className="hover:underline">Rotate</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
