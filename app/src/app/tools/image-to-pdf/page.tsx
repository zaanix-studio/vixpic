"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

export default function ImageToPdf() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [pageSize, setPageSize] = useState<"fit" | "a4" | "letter">("fit");
  const [processing, setProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList) => {
    const newImages: ImageFile[] = [];
    
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push({
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview: e.target?.result as string,
          });
          if (newImages.length === files.length) {
            setImages((prev) => [...prev, ...newImages.filter(img => img.preview)]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const moveImage = (index: number, direction: "up" | "down") => {
    const newImages = [...images];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= images.length) return;
    [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
    setImages(newImages);
  };

  const generatePdf = async () => {
    if (images.length === 0) return;
    
    setProcessing(true);
    
    // Dynamic import of jspdf
    const { jsPDF } = await import("jspdf");
    
    // Process first image to determine initial page size
    const firstImg = new Image();
    firstImg.src = images[0].preview;
    
    await new Promise<void>((resolve) => {
      firstImg.onload = () => resolve();
    });

    const getPageDimensions = (img: HTMLImageElement) => {
      let pageWidth: number;
      let pageHeight: number;
      
      if (pageSize === "a4") {
        pageWidth = 210;
        pageHeight = 297;
      } else if (pageSize === "letter") {
        pageWidth = 215.9;
        pageHeight = 279.4;
      } else {
        // Fit to image
        const maxDim = 210;
        const ratio = img.width / img.height;
        if (ratio > 1) {
          pageWidth = maxDim;
          pageHeight = maxDim / ratio;
        } else {
          pageHeight = maxDim;
          pageWidth = maxDim * ratio;
        }
      }
      return { pageWidth, pageHeight };
    };

    const firstDims = getPageDimensions(firstImg);
    
    const pdf = new jsPDF({
      orientation: firstDims.pageWidth > firstDims.pageHeight ? "landscape" : "portrait",
      unit: "mm",
      format: pageSize === "fit" ? [firstDims.pageWidth, firstDims.pageHeight] : (pageSize === "a4" ? "a4" : "letter"),
    });

    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i].preview;
      
      await new Promise<void>((resolve) => {
        img.onload = () => {
          const { pageWidth, pageHeight } = getPageDimensions(img);
          
          if (i > 0) {
            if (pageSize === "fit") {
              pdf.addPage([pageWidth, pageHeight]);
            } else {
              pdf.addPage();
            }
          }
          
          const imgRatio = img.width / img.height;
          const pageRatio = pageWidth / pageHeight;
          
          let imgWidth: number;
          let imgHeight: number;
          let x = 0;
          let y = 0;
          
          if (pageSize === "fit") {
            imgWidth = pageWidth;
            imgHeight = pageHeight;
          } else {
            if (imgRatio > pageRatio) {
              imgWidth = pageWidth - 20;
              imgHeight = imgWidth / imgRatio;
            } else {
              imgHeight = pageHeight - 20;
              imgWidth = imgHeight * imgRatio;
            }
            x = (pageWidth - imgWidth) / 2;
            y = (pageHeight - imgHeight) / 2;
          }
          
          pdf.addImage(images[i].preview, "JPEG", x, y, imgWidth, imgHeight);
          resolve();
        };
      });
    }
    
    pdf.save("images.pdf");
    setProcessing(false);
  };

  const resetTool = () => {
    setImages([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
            Convert{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Images to PDF
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Combine multiple images into a single PDF document. Perfect for portfolios, 
            photo albums, and document scanning.
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
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => images.length === 0 && fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  images.length === 0 
                    ? "border-gray-300 cursor-pointer hover:border-purple-400 hover:bg-purple-50/50" 
                    : "border-gray-200"
                }`}
              >
                {images.length === 0 ? (
                  <>
                    <div className="text-5xl mb-4">📄</div>
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      Drop your images here
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      or click to browse • Select multiple images
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG, WEBP • Images will become PDF pages
                    </p>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">
                        {images.length} image{images.length > 1 ? "s" : ""} selected
                      </Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                      >
                        Add More
                      </Button>
                    </div>
                    
                    {/* Image List */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.map((img, index) => (
                        <div key={img.id} className="relative group">
                          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border">
                            <img
                              src={img.preview}
                              alt={`Page ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1">
                            {index > 0 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  moveImage(index, "up");
                                }}
                                className="p-1.5 bg-white rounded-full text-xs hover:bg-gray-100"
                              >
                                ←
                              </button>
                            )}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeImage(img.id);
                              }}
                              className="p-1.5 bg-red-500 text-white rounded-full text-xs hover:bg-red-600"
                            >
                              ✕
                            </button>
                            {index < images.length - 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  moveImage(index, "down");
                                }}
                                className="p-1.5 bg-white rounded-full text-xs hover:bg-gray-100"
                              >
                                →
                              </button>
                            )}
                          </div>
                          <div className="absolute top-1 left-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* Options */}
              {images.length > 0 && (
                <div className="mt-6 space-y-6">
                  {/* Page Size */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Label className="text-sm font-medium mb-3 block">Page Size</Label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: "fit", label: "Fit to Image", desc: "Each page matches image size" },
                        { value: "a4", label: "A4", desc: "210 × 297 mm" },
                        { value: "letter", label: "Letter", desc: "8.5 × 11 in" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setPageSize(option.value as typeof pageSize)}
                          className={`px-4 py-2 rounded-lg border-2 text-sm transition-colors ${
                            pageSize === option.value
                              ? "border-purple-600 bg-purple-50 text-purple-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="font-medium">{option.label}</div>
                          <div className="text-xs text-gray-500">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={generatePdf}
                      disabled={processing || images.length === 0}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      size="lg"
                    >
                      {processing ? "Generating PDF..." : `Create PDF (${images.length} page${images.length > 1 ? "s" : ""})`}
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Clear All
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
          <h2 className="text-2xl font-bold text-center mb-8">PDF Conversion Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-semibold mb-2">Multi-Page PDFs</h3>
                <p className="text-sm text-gray-600">
                  Combine as many images as you want into a single PDF document.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">↕️</div>
                <h3 className="font-semibold mb-2">Reorder Pages</h3>
                <p className="text-sm text-gray-600">
                  Drag and reorder your images before creating the PDF.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">100% Private</h3>
                <p className="text-sm text-gray-600">
                  PDF is created in your browser. Nothing uploaded anywhere.
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
              { icon: "🎨", title: "Portfolio", desc: "Share your work" },
              { icon: "📸", title: "Photo Albums", desc: "Create digital albums" },
              { icon: "📑", title: "Scan Documents", desc: "Combine phone scans" },
              { icon: "📊", title: "Presentations", desc: "Export slides" },
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
            VixPic has 15+ free tools plus AI-powered image generation, 
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
            <Link href="/tools/image-to-pdf" className="hover:underline">Image to PDF</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
