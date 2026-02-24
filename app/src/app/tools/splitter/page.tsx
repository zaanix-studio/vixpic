"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface GridPreset {
  name: string;
  cols: number;
  rows: number;
  description: string;
  icon: string;
}

const gridPresets: GridPreset[] = [
  { name: "2×2", cols: 2, rows: 2, description: "4 tiles", icon: "▢▢" },
  { name: "3×1", cols: 3, rows: 1, description: "3 horizontal", icon: "▭▭▭" },
  { name: "1×3", cols: 1, rows: 3, description: "3 vertical", icon: "▯" },
  { name: "3×3", cols: 3, rows: 3, description: "Instagram grid", icon: "▦" },
  { name: "4×4", cols: 4, rows: 4, description: "16 tiles", icon: "▤" },
  { name: "2×3", cols: 2, rows: 3, description: "6 tiles", icon: "▥" },
];

export default function ImageSplitter() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [tiles, setTiles] = useState<string[]>([]);
  const [gridCols, setGridCols] = useState(3);
  const [gridRows, setGridRows] = useState(3);
  const [processing, setProcessing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setOriginalFile(file);
    setTiles([]);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgSrc = e.target?.result as string;
      setSelectedImage(imgSrc);
      
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.src = imgSrc;
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

  const applyPreset = (preset: GridPreset) => {
    setGridCols(preset.cols);
    setGridRows(preset.rows);
  };

  const splitImage = async () => {
    if (!selectedImage || !canvasRef.current) return;
    
    setProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const tileWidth = Math.floor(img.width / gridCols);
      const tileHeight = Math.floor(img.height / gridRows);
      const newTiles: string[] = [];
      
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      
      // Generate tiles from left to right, top to bottom
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          canvas.width = tileWidth;
          canvas.height = tileHeight;
          
          ctx.drawImage(
            img,
            col * tileWidth,
            row * tileHeight,
            tileWidth,
            tileHeight,
            0,
            0,
            tileWidth,
            tileHeight
          );
          
          const mimeType = originalFile?.type === "image/png" ? "image/png" : "image/jpeg";
          const tileData = canvas.toDataURL(mimeType, 0.95);
          newTiles.push(tileData);
        }
      }
      
      setTiles(newTiles);
      setProcessing(false);
    };
    img.src = selectedImage;
  };

  const downloadTile = (tileData: string, index: number) => {
    const extension = originalFile?.type === "image/png" ? "png" : "jpg";
    const link = document.createElement("a");
    link.href = tileData;
    const row = Math.floor(index / gridCols) + 1;
    const col = (index % gridCols) + 1;
    link.download = `tile-${row}-${col}-${originalFile?.name?.replace(/\.[^.]+$/, "")}.${extension}`;
    link.click();
  };

  const downloadAllTiles = () => {
    tiles.forEach((tile, index) => {
      setTimeout(() => downloadTile(tile, index), index * 200);
    });
  };

  const resetTool = () => {
    setSelectedImage(null);
    setOriginalFile(null);
    setImageDimensions({ width: 0, height: 0 });
    setTiles([]);
    setGridCols(3);
    setGridRows(3);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const tileWidth = imageDimensions.width ? Math.floor(imageDimensions.width / gridCols) : 0;
  const tileHeight = imageDimensions.height ? Math.floor(imageDimensions.height / gridRows) : 0;

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
            Image{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Grid Splitter
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Split images into grid tiles for Instagram carousels and seamless profiles.
            Everything happens in your browser.
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

              {/* Editor */}
              {selectedImage && tiles.length === 0 && (
                <div className="space-y-6">
                  {/* Preview with Grid Overlay */}
                  <div className="relative bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <div className="relative inline-block">
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-w-full max-h-[400px] object-contain"
                      />
                      {/* Grid Overlay */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          display: "grid",
                          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
                          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
                        }}
                      >
                        {Array.from({ length: gridCols * gridRows }).map((_, i) => (
                          <div
                            key={i}
                            className="border border-white/70 border-dashed"
                            style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.2)" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Grid Presets */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Grid Presets</Label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {gridPresets.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => applyPreset(preset)}
                          className={`p-3 rounded-lg border-2 text-center transition-all ${
                            gridCols === preset.cols && gridRows === preset.rows
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span className="block font-semibold">{preset.name}</span>
                          <span className="text-xs text-gray-500">{preset.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Grid */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Label className="text-sm font-medium mb-3 block">Custom Grid</Label>
                    <div className="flex items-center gap-4 justify-center">
                      <div className="flex items-center gap-2">
                        <Label className="text-sm">Columns:</Label>
                        <select
                          value={gridCols}
                          onChange={(e) => setGridCols(Number(e.target.value))}
                          className="border rounded px-3 py-1.5"
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                      <span className="text-gray-400">×</span>
                      <div className="flex items-center gap-2">
                        <Label className="text-sm">Rows:</Label>
                        <select
                          value={gridRows}
                          onChange={(e) => setGridRows(Number(e.target.value))}
                          className="border rounded px-3 py-1.5"
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Output Info */}
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-700">
                      Will create <span className="font-semibold">{gridCols * gridRows} tiles</span> at{" "}
                      <span className="font-mono">{tileWidth} × {tileHeight} px</span> each
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={splitImage}
                      disabled={processing}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      size="lg"
                    >
                      {processing ? "Splitting..." : `Split into ${gridCols * gridRows} Tiles`}
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Try Another
                    </Button>
                  </div>
                </div>
              )}

              {/* Results */}
              {tiles.length > 0 && (
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                      ✓ Split into {tiles.length} tiles ({gridCols}×{gridRows} grid)
                    </span>
                  </div>

                  {/* Tiles Grid */}
                  <div 
                    className="grid gap-2 max-w-2xl mx-auto"
                    style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
                  >
                    {tiles.map((tile, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={tile}
                          alt={`Tile ${index + 1}`}
                          className="w-full h-auto rounded border"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                          <button
                            onClick={() => downloadTile(tile, index)}
                            className="bg-white text-gray-900 px-3 py-1 rounded text-sm font-medium"
                          >
                            Download
                          </button>
                        </div>
                        <span className="absolute top-1 left-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Instagram Tip */}
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Instagram Tip:</strong> Upload tiles in reverse order (last to first) 
                      so the first tile appears on the right when scrolling.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button 
                      onClick={downloadAllTiles}
                      className="bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      Download All Tiles
                    </Button>
                    <Button 
                      onClick={() => setTiles([])}
                      variant="outline"
                      size="lg"
                    >
                      Adjust Grid
                    </Button>
                    <Button variant="outline" onClick={resetTool} size="lg">
                      Split Another
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
          <h2 className="text-2xl font-bold text-center mb-8">Splitter Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Instagram Grids</h3>
                <p className="text-sm text-gray-600">
                  Create seamless Instagram profile grids with 3×3 or panoramic layouts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold mb-2">Custom Grids</h3>
                <p className="text-sm text-gray-600">
                  Choose from presets or create custom grid sizes up to 6×6.
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
              { icon: "📸", title: "Instagram Grids", desc: "Seamless profile layouts" },
              { icon: "🎠", title: "Carousels", desc: "Multi-slide posts" },
              { icon: "🖼️", title: "Panoramas", desc: "Wide image splits" },
              { icon: "🎨", title: "Art Projects", desc: "Creative collages" },
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
            Need AI Image Generation?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            VixPic lets you generate images with DALL-E, Flux, and Stable Diffusion
            using your own API keys.
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
            <Link href="/tools/crop" className="hover:underline">Cropper</Link> •
            <Link href="/tools/splitter" className="hover:underline">Splitter</Link> •
            <Link href="/tools/filters" className="hover:underline">Filters</Link> •
            <Link href="/tools/rotate" className="hover:underline">Rotate</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
