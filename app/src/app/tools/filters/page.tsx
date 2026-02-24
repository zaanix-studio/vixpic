"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface Filter {
  name: string;
  icon: string;
  filter: string;
  description: string;
}

const presetFilters: Filter[] = [
  { name: "Original", icon: "🖼️", filter: "none", description: "No filter" },
  { name: "Grayscale", icon: "⬛", filter: "grayscale(100%)", description: "Classic black & white" },
  { name: "Sepia", icon: "🟤", filter: "sepia(100%)", description: "Warm vintage tone" },
  { name: "Vintage", icon: "📷", filter: "sepia(40%) contrast(90%) brightness(90%)", description: "Old photo look" },
  { name: "Warm", icon: "🌅", filter: "sepia(30%) saturate(140%) brightness(105%)", description: "Cozy golden tones" },
  { name: "Cool", icon: "❄️", filter: "saturate(80%) hue-rotate(180deg) saturate(120%) hue-rotate(180deg) brightness(105%)", description: "Blue cool tones" },
  { name: "High Contrast", icon: "⚡", filter: "contrast(140%) saturate(110%)", description: "Bold and punchy" },
  { name: "Soft", icon: "☁️", filter: "brightness(105%) contrast(90%) saturate(90%)", description: "Dreamy soft look" },
  { name: "Vivid", icon: "🌈", filter: "saturate(150%) contrast(110%)", description: "Boosted colors" },
  { name: "Muted", icon: "🌫️", filter: "saturate(60%) brightness(105%)", description: "Subtle faded tones" },
  { name: "Dramatic", icon: "🎭", filter: "contrast(130%) brightness(90%) saturate(90%)", description: "Moody atmosphere" },
  { name: "Bright", icon: "☀️", filter: "brightness(120%) contrast(105%)", description: "Light and airy" },
];

export default function PhotoFilters() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>(presetFilters[0]);
  const [customAdjustments, setCustomAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
  });
  const [processing, setProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setOriginalFile(file);
    setProcessedImage(null);
    setActiveFilter(presetFilters[0]);
    setCustomAdjustments({ brightness: 100, contrast: 100, saturation: 100, blur: 0 });
    
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

  const getPreviewFilter = () => {
    const base = activeFilter.filter !== "none" ? activeFilter.filter : "";
    const custom = [
      `brightness(${customAdjustments.brightness}%)`,
      `contrast(${customAdjustments.contrast}%)`,
      `saturate(${customAdjustments.saturation}%)`,
      customAdjustments.blur > 0 ? `blur(${customAdjustments.blur}px)` : "",
    ].filter(Boolean).join(" ");
    
    return base ? `${base} ${custom}` : custom;
  };

  const processImage = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.filter = getPreviewFilter() || "none";
      ctx.drawImage(img, 0, 0);
      
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
    link.download = `filtered-${activeFilter.name.toLowerCase()}-${originalFile?.name?.replace(/\.[^.]+$/, "")}.${extension}`;
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setProcessedImage(null);
    setActiveFilter(presetFilters[0]);
    setCustomAdjustments({ brightness: 100, contrast: 100, saturation: 100, blur: 0 });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const hasChanges = activeFilter.name !== "Original" || 
    customAdjustments.brightness !== 100 || 
    customAdjustments.contrast !== 100 || 
    customAdjustments.saturation !== 100 ||
    customAdjustments.blur !== 0;

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
            Beautiful{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Photo Filters
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Apply stunning filters to your photos instantly. Sepia, vintage, grayscale, 
            and more — all in your browser.
          </p>
          <p className="text-sm text-gray-500">
            Free forever • Works offline • No watermarks
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
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
                  <div className="text-5xl mb-4">🎨</div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Drop your photo here
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
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Preview */}
                  <div className="lg:col-span-2">
                    <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-w-full max-h-[500px] object-contain rounded"
                        style={{ filter: getPreviewFilter() }}
                      />
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="space-y-6">
                    {/* Filter Presets */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Filter Presets</Label>
                      <div className="grid grid-cols-3 gap-2 max-h-[280px] overflow-y-auto">
                        {presetFilters.map((filter) => (
                          <button
                            key={filter.name}
                            onClick={() => setActiveFilter(filter)}
                            className={`p-2 rounded-lg border-2 text-center transition-all ${
                              activeFilter.name === filter.name
                                ? "border-purple-500 bg-purple-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <span className="text-xl block">{filter.icon}</span>
                            <span className="text-xs font-medium">{filter.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Adjustments */}
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <Label className="text-sm font-medium">Fine Tune</Label>
                      
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Brightness</span>
                          <span>{customAdjustments.brightness}%</span>
                        </div>
                        <Slider
                          value={[customAdjustments.brightness]}
                          onValueChange={([val]) => setCustomAdjustments(p => ({ ...p, brightness: val }))}
                          min={50}
                          max={150}
                          step={1}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Contrast</span>
                          <span>{customAdjustments.contrast}%</span>
                        </div>
                        <Slider
                          value={[customAdjustments.contrast]}
                          onValueChange={([val]) => setCustomAdjustments(p => ({ ...p, contrast: val }))}
                          min={50}
                          max={150}
                          step={1}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Saturation</span>
                          <span>{customAdjustments.saturation}%</span>
                        </div>
                        <Slider
                          value={[customAdjustments.saturation]}
                          onValueChange={([val]) => setCustomAdjustments(p => ({ ...p, saturation: val }))}
                          min={0}
                          max={200}
                          step={1}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Blur</span>
                          <span>{customAdjustments.blur}px</span>
                        </div>
                        <Slider
                          value={[customAdjustments.blur]}
                          onValueChange={([val]) => setCustomAdjustments(p => ({ ...p, blur: val }))}
                          min={0}
                          max={10}
                          step={0.5}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button 
                        onClick={processImage}
                        disabled={processing || !hasChanges}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        size="lg"
                      >
                        {processing ? "Applying..." : "Apply Filter"}
                      </Button>
                      <Button variant="outline" onClick={resetTool} className="w-full">
                        Try Another Photo
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Result */}
              {processedImage && (
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                      ✓ Filter applied: {activeFilter.name}
                    </span>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative max-w-2xl">
                      <img
                        src={processedImage}
                        alt="Filtered"
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
                      Try Another Filter
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      New Photo
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
          <h2 className="text-2xl font-bold text-center mb-8">Filter Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold mb-2">12+ Presets</h3>
                <p className="text-sm text-gray-600">
                  Popular filters including sepia, vintage, grayscale, vivid, and more.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="font-semibold mb-2">Fine Tune</h3>
                <p className="text-sm text-gray-600">
                  Adjust brightness, contrast, saturation, and blur to perfect your look.
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
          <h2 className="text-2xl font-bold mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: "📱", title: "Social Media", desc: "Stand out on Instagram" },
              { icon: "📸", title: "Photo Editing", desc: "Quick enhancements" },
              { icon: "🎭", title: "Mood Setting", desc: "Create atmosphere" },
              { icon: "🖼️", title: "Vintage Look", desc: "Retro aesthetics" },
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
            Want AI-Powered Editing?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            VixPic Pro offers AI image generation, smart upscaling, 
            and automatic background removal.
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
            <Link href="/tools/filters" className="hover:underline">Filters</Link> •
            <Link href="/tools/rotate" className="hover:underline">Rotate</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
