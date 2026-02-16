"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type AspectRatio = "free" | "1:1" | "4:3" | "3:4" | "16:9" | "9:16" | "3:2" | "2:3";

interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Preset {
  name: string;
  width: number;
  height: number;
  description: string;
}

const aspectRatios: { value: AspectRatio; label: string; ratio: number | null }[] = [
  { value: "free", label: "Free", ratio: null },
  { value: "1:1", label: "1:1", ratio: 1 },
  { value: "4:3", label: "4:3", ratio: 4 / 3 },
  { value: "3:4", label: "3:4", ratio: 3 / 4 },
  { value: "16:9", label: "16:9", ratio: 16 / 9 },
  { value: "9:16", label: "9:16", ratio: 9 / 16 },
  { value: "3:2", label: "3:2", ratio: 3 / 2 },
  { value: "2:3", label: "2:3", ratio: 2 / 3 },
];

const presets: Preset[] = [
  { name: "Instagram Post", width: 1080, height: 1080, description: "1:1 Square" },
  { name: "Instagram Story", width: 1080, height: 1920, description: "9:16 Vertical" },
  { name: "Twitter Post", width: 1200, height: 675, description: "16:9 Landscape" },
  { name: "YouTube Thumbnail", width: 1280, height: 720, description: "16:9 HD" },
  { name: "LinkedIn Banner", width: 1584, height: 396, description: "4:1 Wide" },
  { name: "Profile Picture", width: 400, height: 400, description: "1:1 Avatar" },
];

export default function ImageCropper() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [displayDimensions, setDisplayDimensions] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [cropArea, setCropArea] = useState<CropArea>({ x: 0, y: 0, width: 100, height: 100 });
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("free");
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, cropX: 0, cropY: 0 });
  const [processing, setProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    setOriginalFile(file);
    setCroppedImage(null);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgSrc = e.target?.result as string;
      setSelectedImage(imgSrc);
      
      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.width, height: img.height });
        // Initialize crop area to full image
        setCropArea({ x: 0, y: 0, width: img.width, height: img.height });
      };
      img.src = imgSrc;
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  // Calculate display dimensions and scale when image loads
  useEffect(() => {
    if (imageRef.current && originalDimensions.width > 0) {
      const containerWidth = imageContainerRef.current?.clientWidth || 500;
      const containerHeight = 400;
      
      const scaleX = containerWidth / originalDimensions.width;
      const scaleY = containerHeight / originalDimensions.height;
      const newScale = Math.min(scaleX, scaleY, 1);
      
      setScale(newScale);
      setDisplayDimensions({
        width: originalDimensions.width * newScale,
        height: originalDimensions.height * newScale,
      });
    }
  }, [originalDimensions, selectedImage]);

  const getAspectRatioValue = () => {
    const ratio = aspectRatios.find((r) => r.value === aspectRatio);
    return ratio?.ratio || null;
  };

  const handleAspectRatioChange = (newRatio: AspectRatio) => {
    setAspectRatio(newRatio);
    const ratio = aspectRatios.find((r) => r.value === newRatio)?.ratio;
    
    if (ratio) {
      // Adjust crop area to match new aspect ratio
      const centerX = cropArea.x + cropArea.width / 2;
      const centerY = cropArea.y + cropArea.height / 2;
      
      let newWidth = cropArea.width;
      let newHeight = newWidth / ratio;
      
      if (newHeight > originalDimensions.height) {
        newHeight = originalDimensions.height * 0.8;
        newWidth = newHeight * ratio;
      }
      
      if (newWidth > originalDimensions.width) {
        newWidth = originalDimensions.width * 0.8;
        newHeight = newWidth / ratio;
      }
      
      let newX = centerX - newWidth / 2;
      let newY = centerY - newHeight / 2;
      
      // Clamp to image bounds
      newX = Math.max(0, Math.min(newX, originalDimensions.width - newWidth));
      newY = Math.max(0, Math.min(newY, originalDimensions.height - newHeight));
      
      setCropArea({
        x: Math.round(newX),
        y: Math.round(newY),
        width: Math.round(newWidth),
        height: Math.round(newHeight),
      });
    }
  };

  const applyPreset = (preset: Preset) => {
    const ratio = preset.width / preset.height;
    
    // Calculate crop area based on preset ratio
    let newWidth = Math.min(originalDimensions.width, originalDimensions.height * ratio);
    let newHeight = newWidth / ratio;
    
    if (newHeight > originalDimensions.height) {
      newHeight = originalDimensions.height;
      newWidth = newHeight * ratio;
    }
    
    const newX = (originalDimensions.width - newWidth) / 2;
    const newY = (originalDimensions.height - newHeight) / 2;
    
    setCropArea({
      x: Math.round(newX),
      y: Math.round(newY),
      width: Math.round(newWidth),
      height: Math.round(newHeight),
    });
    setAspectRatio("free");
  };

  const handleMouseDown = (e: React.MouseEvent, action: "drag" | string) => {
    e.preventDefault();
    if (action === "drag") {
      setIsDragging(true);
    } else {
      setIsResizing(action);
    }
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      cropX: cropArea.x,
      cropY: cropArea.y,
    });
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging && !isResizing) return;
    
    const dx = (e.clientX - dragStart.x) / scale;
    const dy = (e.clientY - dragStart.y) / scale;
    const ratio = getAspectRatioValue();
    
    if (isDragging) {
      let newX = dragStart.cropX + dx;
      let newY = dragStart.cropY + dy;
      
      // Clamp to bounds
      newX = Math.max(0, Math.min(newX, originalDimensions.width - cropArea.width));
      newY = Math.max(0, Math.min(newY, originalDimensions.height - cropArea.height));
      
      setCropArea((prev) => ({
        ...prev,
        x: Math.round(newX),
        y: Math.round(newY),
      }));
    } else if (isResizing) {
      let newCrop = { ...cropArea };
      
      // Handle different resize handles
      switch (isResizing) {
        case "se":
          newCrop.width = Math.max(50, cropArea.width + dx);
          newCrop.height = ratio ? newCrop.width / ratio : Math.max(50, cropArea.height + dy);
          break;
        case "sw":
          newCrop.width = Math.max(50, cropArea.width - dx);
          newCrop.height = ratio ? newCrop.width / ratio : Math.max(50, cropArea.height + dy);
          newCrop.x = cropArea.x + cropArea.width - newCrop.width;
          break;
        case "ne":
          newCrop.width = Math.max(50, cropArea.width + dx);
          newCrop.height = ratio ? newCrop.width / ratio : Math.max(50, cropArea.height - dy);
          newCrop.y = cropArea.y + cropArea.height - newCrop.height;
          break;
        case "nw":
          newCrop.width = Math.max(50, cropArea.width - dx);
          newCrop.height = ratio ? newCrop.width / ratio : Math.max(50, cropArea.height - dy);
          newCrop.x = cropArea.x + cropArea.width - newCrop.width;
          newCrop.y = cropArea.y + cropArea.height - newCrop.height;
          break;
      }
      
      // Clamp to image bounds
      if (newCrop.x < 0) {
        newCrop.width += newCrop.x;
        newCrop.x = 0;
      }
      if (newCrop.y < 0) {
        newCrop.height += newCrop.y;
        newCrop.y = 0;
      }
      if (newCrop.x + newCrop.width > originalDimensions.width) {
        newCrop.width = originalDimensions.width - newCrop.x;
        if (ratio) newCrop.height = newCrop.width / ratio;
      }
      if (newCrop.y + newCrop.height > originalDimensions.height) {
        newCrop.height = originalDimensions.height - newCrop.y;
        if (ratio) newCrop.width = newCrop.height * ratio;
      }
      
      setCropArea({
        x: Math.round(newCrop.x),
        y: Math.round(newCrop.y),
        width: Math.round(newCrop.width),
        height: Math.round(newCrop.height),
      });
    }
  }, [isDragging, isResizing, dragStart, scale, cropArea, originalDimensions]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(null);
  }, []);

  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

  const cropImage = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      canvas.width = cropArea.width;
      canvas.height = cropArea.height;
      
      ctx.drawImage(
        img,
        cropArea.x,
        cropArea.y,
        cropArea.width,
        cropArea.height,
        0,
        0,
        cropArea.width,
        cropArea.height
      );
      
      const mimeType = originalFile?.type || "image/png";
      const cropped = canvas.toDataURL(mimeType === "image/jpeg" ? "image/jpeg" : "image/png", 0.95);
      setCroppedImage(cropped);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const downloadImage = () => {
    if (!croppedImage) return;
    const extension = originalFile?.type === "image/jpeg" ? "jpg" : "png";
    const link = document.createElement("a");
    link.href = croppedImage;
    link.download = `cropped-${cropArea.width}x${cropArea.height}-${originalFile?.name?.replace(/\.[^.]+$/, "")}.${extension}`;
    link.click();
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setCroppedImage(null);
    setOriginalDimensions({ width: 0, height: 0 });
    setCropArea({ x: 0, y: 0, width: 100, height: 100 });
    setAspectRatio("free");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
            Crop Images{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              With Precision
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Crop images with custom aspect ratios or social media presets. 
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
                  <div className="text-5xl mb-4">✂️</div>
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

              {/* Crop Controls */}
              {selectedImage && !croppedImage && (
                <div className="space-y-6">
                  {/* Aspect Ratio Options */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <Label className="text-sm text-gray-500 mr-2">Aspect Ratio:</Label>
                    {aspectRatios.map((ratio) => (
                      <button
                        key={ratio.value}
                        onClick={() => handleAspectRatioChange(ratio.value)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                          aspectRatio === ratio.value
                            ? "bg-purple-100 text-purple-700 border border-purple-300"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {ratio.label}
                      </button>
                    ))}
                  </div>

                  {/* Preset Buttons */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Label className="text-sm text-gray-500 mb-3 block">Quick Presets:</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                      {presets.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => applyPreset(preset)}
                          className="p-2 bg-white border rounded-lg hover:border-purple-300 hover:shadow-sm transition-all text-left"
                        >
                          <p className="font-medium text-xs">{preset.name}</p>
                          <p className="text-xs text-gray-400">{preset.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image with Crop Overlay */}
                  <div 
                    ref={imageContainerRef}
                    className="relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
                    style={{ minHeight: "400px" }}
                  >
                    <div className="relative" style={{ width: displayDimensions.width, height: displayDimensions.height }}>
                      <img
                        ref={imageRef}
                        src={selectedImage}
                        alt="Original"
                        className="w-full h-full object-contain pointer-events-none"
                        draggable={false}
                      />
                      
                      {/* Darkened overlay outside crop area */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `
                            linear-gradient(to right, rgba(0,0,0,0.5) ${cropArea.x * scale}px, transparent ${cropArea.x * scale}px),
                            linear-gradient(to left, rgba(0,0,0,0.5) ${(originalDimensions.width - cropArea.x - cropArea.width) * scale}px, transparent ${(originalDimensions.width - cropArea.x - cropArea.width) * scale}px),
                            linear-gradient(to bottom, rgba(0,0,0,0.5) ${cropArea.y * scale}px, transparent ${cropArea.y * scale}px),
                            linear-gradient(to top, rgba(0,0,0,0.5) ${(originalDimensions.height - cropArea.y - cropArea.height) * scale}px, transparent ${(originalDimensions.height - cropArea.y - cropArea.height) * scale}px)
                          `
                        }}
                      />
                      
                      {/* Crop Selection Box */}
                      <div
                        className="absolute border-2 border-white shadow-lg cursor-move"
                        style={{
                          left: cropArea.x * scale,
                          top: cropArea.y * scale,
                          width: cropArea.width * scale,
                          height: cropArea.height * scale,
                          boxShadow: "0 0 0 9999px rgba(0,0,0,0.5)",
                        }}
                        onMouseDown={(e) => handleMouseDown(e, "drag")}
                      >
                        {/* Grid lines */}
                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="border border-white/30" />
                          ))}
                        </div>
                        
                        {/* Resize Handles */}
                        {["nw", "ne", "sw", "se"].map((handle) => (
                          <div
                            key={handle}
                            className={`absolute w-4 h-4 bg-white rounded-sm border-2 border-purple-500 cursor-${
                              handle === "nw" || handle === "se" ? "nwse" : "nesw"
                            }-resize`}
                            style={{
                              left: handle.includes("w") ? -8 : undefined,
                              right: handle.includes("e") ? -8 : undefined,
                              top: handle.includes("n") ? -8 : undefined,
                              bottom: handle.includes("s") ? -8 : undefined,
                            }}
                            onMouseDown={(e) => handleMouseDown(e, handle)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Crop Dimensions */}
                  <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Label className="text-sm text-gray-500">Crop:</Label>
                      <span className="font-mono text-purple-600 font-medium">
                        {cropArea.width} × {cropArea.height} px
                      </span>
                    </div>
                    <div className="text-gray-300">|</div>
                    <div className="flex items-center gap-2">
                      <Label className="text-sm text-gray-500">Position:</Label>
                      <span className="font-mono text-gray-600 text-sm">
                        X: {cropArea.x}, Y: {cropArea.y}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={cropImage}
                      disabled={processing}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      size="lg"
                    >
                      {processing ? "Cropping..." : "Crop Image"}
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Try Another
                    </Button>
                  </div>
                </div>
              )}

              {/* Result */}
              {croppedImage && (
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                      ✓ Cropped to {cropArea.width} × {cropArea.height} px
                    </span>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative max-w-lg">
                      <img
                        src={croppedImage}
                        alt="Cropped"
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
                      Download Cropped
                    </Button>
                    <Button 
                      onClick={() => setCroppedImage(null)}
                      variant="outline"
                      size="lg"
                    >
                      Adjust Crop
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Crop Another
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
          <h2 className="text-2xl font-bold text-center mb-8">Cropping Made Easy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📐</div>
                <h3 className="font-semibold mb-2">Aspect Ratios</h3>
                <p className="text-sm text-gray-600">
                  Lock to 1:1, 16:9, 4:3, or any custom ratio for consistent results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Social Presets</h3>
                <p className="text-sm text-gray-600">
                  One-click presets for Instagram, Twitter, YouTube, and more.
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
              { icon: "📸", title: "Profile Photos", desc: "Perfect avatars" },
              { icon: "🎬", title: "Thumbnails", desc: "YouTube & blog" },
              { icon: "📱", title: "Social Posts", desc: "Instagram & Twitter" },
              { icon: "🖼️", title: "Product Images", desc: "E-commerce ready" },
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
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/crop" className="hover:underline">Cropper</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link> •
            <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
