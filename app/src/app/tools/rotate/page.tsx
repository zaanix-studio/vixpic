"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function ImageRotator() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [processing, setProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setOriginalFile(file);
    setProcessedImage(null);
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    
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

  const quickRotate = (degrees: number) => {
    setRotation((prev) => (prev + degrees) % 360);
  };

  const processImage = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      // Calculate new dimensions for rotated image
      const radians = (rotation * Math.PI) / 180;
      const sin = Math.abs(Math.sin(radians));
      const cos = Math.abs(Math.cos(radians));
      const newWidth = Math.round(img.width * cos + img.height * sin);
      const newHeight = Math.round(img.width * sin + img.height * cos);
      
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, newWidth, newHeight);
      
      // Move to center, apply transforms, draw image
      ctx.translate(newWidth / 2, newHeight / 2);
      ctx.rotate(radians);
      ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      
      const mimeType = originalFile?.type === "image/jpeg" ? "image/jpeg" : "image/png";
      const processed = canvas.toDataURL(mimeType, 0.95);
      setProcessedImage(processed);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const downloadImage = () => {
    if (!processedImage) return;
    const extension = originalFile?.type === "image/jpeg" ? "jpg" : "png";
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = `rotated-${rotation}deg-${originalFile?.name?.replace(/\.[^.]+$/, "")}.${extension}`;
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setProcessedImage(null);
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const getPreviewStyle = () => ({
    transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
    transition: "transform 0.2s ease",
  });

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
            Rotate & Flip{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Images Instantly
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Rotate images by any angle or flip them horizontally and vertically.
            Everything happens in your browser — nothing is uploaded.
          </p>
          <p className="text-sm text-gray-500">
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
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/50 transition-colors"
                >
                  <div className="text-5xl mb-4">🔄</div>
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

              {/* Editor */}
              {selectedImage && !processedImage && (
                <div className="space-y-6">
                  {/* Preview */}
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[300px] overflow-hidden">
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="max-w-full max-h-[400px] object-contain"
                      style={getPreviewStyle()}
                    />
                  </div>

                  {/* Quick Rotate Buttons */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Label className="w-full text-center text-sm text-gray-500 mb-2">Quick Rotate:</Label>
                    {[-90, -45, 45, 90, 180].map((deg) => (
                      <Button
                        key={deg}
                        variant="outline"
                        onClick={() => quickRotate(deg)}
                        className="min-w-[80px]"
                      >
                        {deg > 0 ? `+${deg}°` : `${deg}°`}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Rotation Slider */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Label className="text-sm font-medium">Custom Rotation</Label>
                      <span className="text-sm font-mono text-purple-600">{rotation}°</span>
                    </div>
                    <Slider
                      value={[rotation]}
                      onValueChange={(v) => setRotation(Array.isArray(v) ? v[0] : v)}
                      min={-180}
                      max={180}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>-180°</span>
                      <span>0°</span>
                      <span>180°</span>
                    </div>
                  </div>

                  {/* Flip Options */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button
                      variant={flipH ? "default" : "outline"}
                      onClick={() => setFlipH(!flipH)}
                      className={flipH ? "bg-purple-600 hover:bg-purple-700" : ""}
                    >
                      ↔️ Flip Horizontal
                    </Button>
                    <Button
                      variant={flipV ? "default" : "outline"}
                      onClick={() => setFlipV(!flipV)}
                      className={flipV ? "bg-purple-600 hover:bg-purple-700" : ""}
                    >
                      ↕️ Flip Vertical
                    </Button>
                  </div>

                  {/* Reset rotation */}
                  {(rotation !== 0 || flipH || flipV) && (
                    <div className="text-center">
                      <button
                        onClick={() => { setRotation(0); setFlipH(false); setFlipV(false); }}
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                      >
                        Reset to original
                      </button>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={processImage}
                      disabled={processing || (rotation === 0 && !flipH && !flipV)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      size="lg"
                    >
                      {processing ? "Processing..." : "Apply Changes"}
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Try Another
                    </Button>
                  </div>
                </div>
              )}

              {/* Result */}
              {processedImage && (
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                      ✓ Image transformed: {rotation}° rotation
                      {flipH ? ", flipped H" : ""}
                      {flipV ? ", flipped V" : ""}
                    </span>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative max-w-lg">
                      <img
                        src={processedImage}
                        alt="Rotated"
                        className="max-w-full h-auto rounded-lg shadow-lg border"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={downloadImage}
                      className="bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      Download Image
                    </Button>
                    <Button 
                      onClick={() => setProcessedImage(null)}
                      variant="outline"
                      size="lg"
                    >
                      Adjust More
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Rotate Another
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
          <h2 className="text-2xl font-bold text-center mb-8">Rotation Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Precise Control</h3>
                <p className="text-sm text-gray-600">
                  Rotate by exact degrees with the slider, or use quick presets for common angles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">↔️</div>
                <h3 className="font-semibold mb-2">Flip & Mirror</h3>
                <p className="text-sm text-gray-600">
                  Flip images horizontally or vertically with one click. Combine with rotation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">100% Private</h3>
                <p className="text-sm text-gray-600">
                  Images never leave your browser. Works offline too.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Common Uses</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: "📷", title: "Fix Orientation", desc: "Correct sideways photos" },
              { icon: "🪞", title: "Mirror Selfies", desc: "Flip for natural look" },
              { icon: "🎨", title: "Creative Effects", desc: "Artistic rotations" },
              { icon: "📐", title: "Straighten Photos", desc: "Level horizons" },
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
            Need More Image Tools?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            VixPic has 10+ free tools plus AI-powered image generation, 
            upscaling, and background removal.
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
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/crop" className="hover:underline">Cropper</Link> •
            <Link href="/tools/rotate" className="hover:underline">Rotate</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
