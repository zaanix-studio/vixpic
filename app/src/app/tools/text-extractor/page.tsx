"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";

export default function TextExtractorTool() {
  const [image, setImage] = useState<string | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("eng");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const workerRef = useRef<any>(null);

  const languages = [
    { code: "eng", name: "English" },
    { code: "spa", name: "Spanish" },
    { code: "fra", name: "French" },
    { code: "deu", name: "German" },
    { code: "ita", name: "Italian" },
    { code: "por", name: "Portuguese" },
    { code: "nld", name: "Dutch" },
    { code: "pol", name: "Polish" },
    { code: "rus", name: "Russian" },
    { code: "jpn", name: "Japanese" },
    { code: "chi_sim", name: "Chinese (Simplified)" },
    { code: "kor", name: "Korean" },
    { code: "ara", name: "Arabic" },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setImage(result);
        setExtractedText("");
        setError(null);
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
        setExtractedText("");
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const extractText = async () => {
    if (!image) return;

    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setExtractedText("");

    try {
      // Dynamic import of Tesseract.js
      const Tesseract = await import("tesseract.js");
      
      const result = await Tesseract.recognize(image, language, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });

      setExtractedText(result.data.text);
    } catch (err) {
      console.error("OCR Error:", err);
      setError("Failed to extract text. Please try a clearer image.");
    }

    setIsProcessing(false);
    setProgress(0);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const downloadText = () => {
    const blob = new Blob([extractedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `extracted-text-${Date.now()}.txt`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setImage(null);
    setExtractedText("");
    setError(null);
    setProgress(0);
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
            <span className="text-muted-foreground">Text Extractor (OCR)</span>
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
              Text Extractor (OCR)
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extract text from images, screenshots, scanned documents, and photos. Supports 100+ languages with AI-powered OCR.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upload/Image Panel */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Source Image</h3>
                    {image && (
                      <Button variant="outline" size="sm" onClick={clearAll}>
                        Clear
                      </Button>
                    )}
                  </div>
                  
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
                        📝
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Drop image here or click to upload</h3>
                      <p className="text-sm text-muted-foreground">
                        Supports PNG, JPG, WebP • Screenshots, scans, photos
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden bg-muted">
                        <img
                          src={image}
                          alt="Source"
                          className="w-full h-auto max-h-80 object-contain"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Language & Extract Button */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Settings</h3>
                  
                  <div className="mb-4">
                    <label className="text-sm text-muted-foreground block mb-2">
                      Document Language
                    </label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand/60 focus:border-transparent"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    onClick={extractText}
                    disabled={!image || isProcessing}
                    className="w-full bg-gradient-to-r from-brand to-info"
                  >
                    {isProcessing ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Extracting... {progress}%
                      </>
                    ) : (
                      "🔍 Extract Text"
                    )}
                  </Button>

                  {isProcessing && (
                    <div className="mt-4">
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand to-info transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        First extraction may take longer (downloading language data)
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="mt-4 p-3 bg-destructive/5 border border-destructive/20 rounded-lg text-destructive text-sm">
                      {error}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Output Panel */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Extracted Text</h3>
                    {extractedText && (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={copyToClipboard}
                        >
                          {copied ? "✓ Copied!" : "Copy"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={downloadText}
                        >
                          Download
                        </Button>
                      </div>
                    )}
                  </div>

                  {extractedText ? (
                    <div className="space-y-4">
                      <textarea
                        value={extractedText}
                        onChange={(e) => setExtractedText(e.target.value)}
                        className="w-full h-80 p-4 border rounded-lg resize-none font-mono text-sm focus:ring-2 focus:ring-brand/60 focus:border-transparent"
                        placeholder="Extracted text will appear here..."
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{extractedText.length} characters</span>
                        <span>{extractedText.split(/\s+/).filter(w => w).length} words</span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-80 flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <p>Extracted text will appear here</p>
                        <p className="text-sm mt-1">Upload an image and click Extract</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="border-2 bg-gradient-to-r from-brand-muted to-info-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">💡 Best Results Tips</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use high-resolution, clear images</li>
                    <li>• Ensure good contrast between text and background</li>
                    <li>• Straighten skewed or rotated text first</li>
                    <li>• Select the correct language for best accuracy</li>
                    <li>• Crop to just the text area for faster processing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Use Cases */}
          <Card className="mt-8 border-2">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">🎯 Common Use Cases</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-2xl mb-2">📸</div>
                  <h4 className="font-medium">Screenshots</h4>
                  <p className="text-xs text-muted-foreground mt-1">Extract text from app screenshots</p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-2xl mb-2">📄</div>
                  <h4 className="font-medium">Scanned Docs</h4>
                  <p className="text-xs text-muted-foreground mt-1">Digitize paper documents</p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-2xl mb-2">🖼️</div>
                  <h4 className="font-medium">Images</h4>
                  <p className="text-xs text-muted-foreground mt-1">Extract text from photos & memes</p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-medium">Receipts</h4>
                  <p className="text-xs text-muted-foreground mt-1">Capture expense details</p>
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
            <Link href="/tools/text-extractor" className="hover:underline">OCR</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
