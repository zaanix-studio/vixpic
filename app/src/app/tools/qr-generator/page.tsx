"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";

export default function QRGeneratorTool() {
  const [text, setText] = useState("https://vixpic.com");
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [errorLevel, setErrorLevel] = useState<"L" | "M" | "Q" | "H">("M");
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simple QR code generation using canvas
  // This is a simplified implementation - in production, use a library like qrcode
  useEffect(() => {
    generateQR();
  }, [text, size, fgColor, bgColor, errorLevel]);

  const generateQR = async () => {
    if (!text.trim()) {
      setQrDataUrl(null);
      return;
    }

    setIsGenerating(true);

    // Dynamic import of qrcode library
    try {
      const QRCode = (await import("qrcode")).default;
      
      const dataUrl = await QRCode.toDataURL(text, {
        width: size,
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel: errorLevel,
      });
      
      setQrDataUrl(dataUrl);
    } catch (err) {
      console.error("QR generation error:", err);
      // Fallback: create a placeholder
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = size;
          canvas.height = size;
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, size, size);
          ctx.fillStyle = fgColor;
          ctx.font = "14px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("QR Code Preview", size / 2, size / 2);
          ctx.fillText("(Install qrcode package)", size / 2, size / 2 + 20);
          setQrDataUrl(canvas.toDataURL());
        }
      }
    }
    
    setIsGenerating(false);
  };

  const downloadQR = (format: "png" | "svg") => {
    if (!qrDataUrl) return;

    const link = document.createElement("a");
    link.download = `qrcode-${Date.now()}.${format}`;
    link.href = qrDataUrl;
    link.click();
  };

  const copyToClipboard = async () => {
    if (!qrDataUrl) return;
    
    try {
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
      alert("QR code copied to clipboard!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const presets = [
    { label: "Website URL", value: "https://" },
    { label: "Email", value: "mailto:" },
    { label: "Phone", value: "tel:" },
    { label: "SMS", value: "sms:" },
    { label: "WiFi", value: "WIFI:T:WPA;S:NetworkName;P:Password;;" },
    { label: "vCard", value: "BEGIN:VCARD\nVERSION:3.0\nN:Doe;John\nTEL:+1234567890\nEND:VCARD" },
  ];

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
            <span className="text-muted-foreground">QR Generator</span>
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
              QR Code Generator
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create custom QR codes for URLs, text, WiFi credentials, contact cards, and more. Download as PNG instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input Panel */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Content</h3>
                  
                  {/* Quick Presets */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {presets.map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() => setText(preset.value)}
                        className="text-xs px-3 py-1.5 bg-muted hover:bg-muted rounded-full transition-colors"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter URL, text, or data..."
                    className="w-full h-32 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-brand/60 focus:border-transparent"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    {text.length} characters
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Customization</h3>
                  
                  {/* Size */}
                  <div className="mb-4">
                    <label className="text-sm text-muted-foreground block mb-2">
                      Size: {size}px
                    </label>
                    <input
                      type="range"
                      min="128"
                      max="512"
                      step="32"
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  {/* Colors */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">
                        Foreground Color
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={fgColor}
                          onChange={(e) => setFgColor(e.target.value)}
                          className="w-10 h-10 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={fgColor}
                          onChange={(e) => setFgColor(e.target.value)}
                          className="flex-1 px-2 py-1 border rounded text-sm font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">
                        Background Color
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="w-10 h-10 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="flex-1 px-2 py-1 border rounded text-sm font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Error Correction */}
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Error Correction Level
                    </label>
                    <div className="flex gap-2">
                      {(["L", "M", "Q", "H"] as const).map((level) => (
                        <button
                          key={level}
                          onClick={() => setErrorLevel(level)}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                            errorLevel === level
                              ? "bg-brand text-brand-foreground"
                              : "bg-muted hover:bg-muted"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      L = 7% • M = 15% • Q = 25% • H = 30% recovery
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Panel */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Preview</h3>
                  
                  <div className="flex items-center justify-center p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjBmMGYwIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4=')] rounded-lg">
                    {qrDataUrl ? (
                      <img
                        src={qrDataUrl}
                        alt="QR Code"
                        className="max-w-full shadow-lg rounded"
                        style={{ width: size, height: size }}
                      />
                    ) : (
                      <div className="text-muted-foreground text-center py-12">
                        <div className="text-4xl mb-2">📱</div>
                        <p>Enter content to generate QR code</p>
                      </div>
                    )}
                  </div>
                  <canvas ref={canvasRef} className="hidden" />

                  {qrDataUrl && (
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={() => downloadQR("png")}
                        className="flex-1 bg-gradient-to-r from-brand to-info"
                      >
                        Download PNG
                      </Button>
                      <Button
                        variant="outline"
                        onClick={copyToClipboard}
                      >
                        Copy
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card className="border-2 bg-gradient-to-r from-brand-muted to-info-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">💡 Common Use Cases</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div><strong>Website:</strong> https://yoursite.com</div>
                    <div><strong>Email:</strong> mailto:hello@example.com</div>
                    <div><strong>Phone:</strong> tel:+1234567890</div>
                    <div><strong>WiFi:</strong> WIFI:T:WPA;S:NetworkName;P:Password;;</div>
                    <div><strong>Location:</strong> geo:40.7128,-74.0060</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips Section */}
          <Card className="mt-8 border-2 bg-gradient-to-r from-brand-muted to-info-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">💡 Pro Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Higher error correction</strong> allows logos/damage but creates denser codes.
                </div>
                <div>
                  <strong>Dark foreground on light background</strong> ensures best scan reliability.
                </div>
                <div>
                  <strong>Keep content short</strong> - shorter text = smaller, easier-to-scan codes.
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
            <Link href="/tools/qr-generator" className="hover:underline">QR Generator</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
