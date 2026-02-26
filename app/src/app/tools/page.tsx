import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FreeTools() {
  const tools = [
    {
      title: "Image Compressor",
      description: "Reduce file size by up to 90% without visible quality loss. Works entirely in your browser.",
      icon: "📦",
      href: "/tools/compress",
      cost: "Free forever",
      features: ["Adjustable quality", "Instant results", "No upload needed"],
      isFree: true,
    },
    {
      title: "Image Resizer",
      description: "Resize images by pixels, percentage, or social media presets. Supports Instagram, Twitter, Facebook sizes.",
      icon: "📐",
      href: "/tools/resize",
      cost: "Free forever",
      features: ["Custom dimensions", "Percentage scaling", "Social media presets"],
      isFree: true,
    },
    {
      title: "Image Cropper",
      description: "Crop images with custom aspect ratios or social media presets. Perfect for profile pictures and thumbnails.",
      icon: "✂️",
      href: "/tools/crop",
      cost: "Free forever",
      features: ["Aspect ratio lock", "Social media presets", "Drag & resize"],
      isFree: true,
    },
    {
      title: "Format Converter",
      description: "Convert between PNG, JPG, and WebP formats instantly. 100% client-side processing.",
      icon: "🔄",
      href: "/tools/convert",
      cost: "Free forever",
      features: ["PNG, JPG, WebP", "Quality control", "No server upload"],
      isFree: true,
    },
    {
      title: "Rotate & Flip",
      description: "Rotate images by any angle or flip them horizontally and vertically. Fix orientation instantly.",
      icon: "🔃",
      href: "/tools/rotate",
      cost: "Free forever",
      features: ["Any rotation angle", "Flip H/V", "Quick presets"],
      isFree: true,
    },
    {
      title: "Photo Filters",
      description: "Apply beautiful filters to your photos. Sepia, grayscale, vintage, vivid, and more — all instant.",
      icon: "🎨",
      href: "/tools/filters",
      cost: "Free forever",
      features: ["12+ preset filters", "Brightness/Contrast", "Fine-tune controls"],
      isFree: true,
    },
    {
      title: "Color Picker",
      description: "Extract colors from any image. Click anywhere to get HEX, RGB, and HSL values with one click.",
      icon: "🖌️",
      href: "/tools/color-picker",
      cost: "Free forever",
      features: ["HEX, RGB, HSL", "Color history palette", "Click to copy"],
      isFree: true,
    },
    {
      title: "Palette Extractor",
      description: "Automatically extract dominant color palettes from any image. Perfect for designers and brand projects.",
      icon: "🎭",
      href: "/tools/palette-extractor",
      cost: "Free forever",
      features: ["3-12 colors", "HEX/RGB export", "SVG download"],
      isFree: true,
    },
    {
      title: "Blur & Sharpen",
      description: "Apply blur effects or sharpen images for better clarity. Perfect for depth effects or enhancing details.",
      icon: "🔍",
      href: "/tools/blur-sharpen",
      cost: "Free forever",
      features: ["Gaussian blur", "Sharpen filter", "Compare mode"],
      isFree: true,
    },
    {
      title: "Add Watermark",
      description: "Protect your images with custom text watermarks. Choose position, size, color, and opacity.",
      icon: "💧",
      href: "/tools/watermark",
      cost: "Free forever",
      features: ["Custom text", "Tile patterns", "Adjustable opacity"],
      isFree: true,
    },
    {
      title: "Metadata Viewer",
      description: "View image metadata and strip EXIF data for privacy. See dimensions, file info, and more.",
      icon: "📋",
      href: "/tools/metadata",
      cost: "Free forever",
      features: ["View all metadata", "Strip EXIF data", "Privacy protection"],
      isFree: true,
    },
    {
      title: "Image Splitter",
      description: "Split images into grid tiles for Instagram carousels and seamless profile layouts.",
      icon: "🔲",
      href: "/tools/splitter",
      cost: "Free forever",
      features: ["Instagram 3×3 grids", "Custom grid sizes", "Batch download"],
      isFree: true,
    },
    {
      title: "Collage Maker",
      description: "Combine multiple photos into beautiful grid layouts. 8 layout options from 2×1 to 3×3.",
      icon: "🖼️",
      href: "/tools/collage",
      cost: "Free forever",
      features: ["8 grid layouts", "Custom spacing", "Background colors"],
      isFree: true,
    },
    {
      title: "Meme Generator",
      description: "Create memes with classic top/bottom text. Impact font, custom colors, live preview.",
      icon: "😂",
      href: "/tools/meme-maker",
      cost: "Free forever",
      features: ["Impact font style", "Custom colors", "No watermarks"],
      isFree: true,
    },
    {
      title: "Image to PDF",
      description: "Convert multiple images into a single PDF document. Perfect for portfolios and documents.",
      icon: "📄",
      href: "/tools/image-to-pdf",
      cost: "Free forever",
      features: ["Multi-page PDFs", "Reorder pages", "A4/Letter sizes"],
      isFree: true,
    },
    {
      title: "QR Code Generator",
      description: "Create custom QR codes for URLs, WiFi, contacts, and more. Download as PNG with custom colors.",
      icon: "📱",
      href: "/tools/qr-generator",
      cost: "Free forever",
      features: ["Custom colors", "Error correction", "Multiple formats"],
      isFree: true,
    },
    {
      title: "Image Compare",
      description: "Compare two images side by side with an interactive slider. Perfect for before/after edits.",
      icon: "⚖️",
      href: "/tools/image-compare",
      cost: "Free forever",
      features: ["Slider view", "Side by side", "Overlay mode"],
      isFree: true,
    },
    {
      title: "Text Extractor (OCR)",
      description: "Extract text from images, screenshots, and scanned documents using AI-powered OCR.",
      icon: "📝",
      href: "/tools/text-extractor",
      cost: "Free forever",
      features: ["100+ languages", "Copy & download", "High accuracy"],
      isFree: true,
    },
    {
      title: "Background Remover",
      description: "Remove backgrounds from any image instantly using AI. Perfect for product photos, portraits, and more.",
      icon: "🪄",
      href: "/tools/background-remover",
      cost: "~$0.005/image",
      features: ["Instant processing", "Transparent PNG output", "High accuracy edges"],
    },
    {
      title: "Image Upscaler",
      description: "Enhance image resolution up to 4x with AI upscaling. Preserve details while increasing size.",
      icon: "🔎",
      href: "/tools/upscaler",
      cost: "~$0.01/image",
      features: ["2x or 4x upscaling", "Face enhancement", "Detail preservation"],
    },
    {
      title: "AI Image Generator",
      description: "Generate images with DALL-E, FLUX, and Stable Diffusion using your own API keys.",
      icon: "✨",
      href: "/generate",
      cost: "$0.003-0.08/image",
      features: ["Multiple AI models", "Style presets", "Batch generation"],
      isPremium: true,
    },
  ];

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
            <Link href="/">
              <Button variant="ghost">Home</Button>
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
            ✨ Free • No Login • BYOK
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Free AI Image Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional image editing powered by AI. Use your own API keys for maximum privacy 
            and pay-per-use pricing. No subscriptions, no watermarks.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card 
                key={tool.href} 
                className={`border-2 hover:shadow-lg transition-all ${
                  tool.isPremium ? "border-purple-200" : "hover:border-purple-300"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-3xl">
                      {tool.icon}
                    </div>
                    {tool.isPremium && (
                      <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded">
                        Pro Feature
                      </span>
                    )}
                    {tool.isFree && (
                      <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                        No API Key
                      </span>
                    )}
                  </div>
                  <CardTitle className="mt-4">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{tool.cost}</span>
                    <Link href={tool.href}>
                      <Button 
                        variant={tool.isPremium ? "default" : "outline"}
                        className={tool.isPremium ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
                      >
                        {tool.isPremium ? "Open App" : "Use Free"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why BYOK */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why BYOK (Bring Your Own Key)?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlike other &quot;free&quot; tools that add watermarks, limit usage, or sell your data — 
            our tools use YOUR API keys directly. You get:
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div className="p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-semibold mb-1">API Pricing</h3>
              <p className="text-sm text-gray-600">Pay pennies per image, not dollars.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-semibold mb-1">100% Private</h3>
              <p className="text-sm text-gray-600">Images never touch our servers.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">♾️</div>
              <h3 className="font-semibold mb-1">No Limits</h3>
              <p className="text-sm text-gray-600">No daily caps or quotas.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">🚫</div>
              <h3 className="font-semibold mb-1">No Watermarks</h3>
              <p className="text-sm text-gray-600">Clean output, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for the Full Experience?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            VixPic Pro adds batch processing, style presets, project management, and more.
          </p>
          <Link href="/#pricing">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              See Pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>
            <Link href="/" className="text-purple-600 hover:underline">VixPic</Link> • 
            Free Tools: <Link href="/tools/compress" className="hover:underline">Compressor</Link> • 
            <Link href="/tools/resize" className="hover:underline">Resizer</Link> •
            <Link href="/tools/crop" className="hover:underline">Cropper</Link> • 
            <Link href="/tools/rotate" className="hover:underline">Rotate</Link> •
            <Link href="/tools/filters" className="hover:underline">Filters</Link> •
            <Link href="/tools/convert" className="hover:underline">Converter</Link> •
            <Link href="/tools/metadata" className="hover:underline">Metadata</Link> •
            <Link href="/tools/splitter" className="hover:underline">Splitter</Link> • 
            <Link href="/tools/background-remover" className="hover:underline">Background Remover</Link> • 
            <Link href="/tools/upscaler" className="hover:underline">Upscaler</Link>
          </p>
          <p className="mt-2">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
