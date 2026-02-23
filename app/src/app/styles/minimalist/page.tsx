import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Minimalist Design Guide | Clean Icons, Logos & Illustrations | VixPic",
  description: "Create clean minimalist AI designs. Generate simple logos, flat icons, and modern illustrations. Best models: DALL-E 3, SDXL. Less is more.",
  keywords: ["minimalist AI design", "AI logo generator", "flat design AI", "simple AI illustrations", "icon generator AI", "modern design AI"],
};

const minimalistSubStyles = [
  {
    name: "Flat Design",
    description: "2D graphics with no gradients or shadows",
    prompts: [
      "flat design illustration, simple shapes, solid colors, no gradients, vector style",
      "flat icon design, minimal, geometric shapes, clean lines, modern style",
    ],
    useCases: "App icons, UI elements, infographics",
  },
  {
    name: "Line Art",
    description: "Single-weight continuous line illustrations",
    prompts: [
      "single line art, continuous line drawing, minimalist, black on white, elegant",
      "line art portrait, one line drawing, simple, artistic, clean background",
    ],
    useCases: "Logos, tattoo designs, editorial illustrations",
  },
  {
    name: "Geometric Minimalism",
    description: "Using basic shapes to create abstract compositions",
    prompts: [
      "geometric abstract art, circles and triangles, limited color palette, modern minimal",
      "geometric minimalist poster, shapes, negative space, Bauhaus inspired",
    ],
    useCases: "Posters, wall art, brand identity",
  },
  {
    name: "Logo Design",
    description: "Simple, memorable brand marks",
    prompts: [
      "minimal logo design, simple icon, single color, scalable, professional, clean",
      "abstract logo mark, geometric, modern, minimal, vector style, brand identity",
    ],
    useCases: "Brands, apps, companies",
  },
  {
    name: "Japanese Minimalism",
    description: "Zen-inspired simplicity with nature elements",
    prompts: [
      "Japanese minimalist art, zen style, empty space, subtle, ink wash influence",
      "wabi-sabi aesthetic, imperfect beauty, minimal, natural tones, peaceful",
    ],
    useCases: "Meditation apps, wellness brands, home decor",
  },
  {
    name: "Modern Illustration",
    description: "Contemporary flat illustrations with personality",
    prompts: [
      "modern minimalist illustration, character with simple shapes, pastel colors, clean",
      "editorial illustration, minimal style, flat colors, conceptual, magazine quality",
    ],
    useCases: "Blog headers, marketing, presentations",
  },
];

const bestModels = [
  {
    name: "DALL-E 3",
    provider: "OpenAI",
    strengths: ["Best for text/logos", "Understands design concepts", "Clean outputs"],
    cost: "~$0.04/image",
    recommendation: "Best Overall",
  },
  {
    name: "SDXL",
    provider: "Replicate",
    strengths: ["Great with ControlNet", "Fine-tunable", "Vector-like outputs"],
    cost: "~$0.01/image",
    recommendation: "Most Versatile",
  },
  {
    name: "Flux Pro",
    provider: "FAL",
    strengths: ["Clean aesthetics", "Good composition", "Fast"],
    cost: "~$0.03/image",
    recommendation: "Best for Speed",
  },
];

const examplePrompts = [
  {
    title: "Tech Company Logo",
    prompt: "minimal logo design, abstract geometric shape, modern tech company, single color, scalable vector style, clean negative space, professional, simple, memorable, on white background",
    tags: ["logo", "tech", "geometric"],
  },
  {
    title: "App Icon Set",
    prompt: "flat design app icon, simple geometric shape, single color on white, iOS style, rounded corners, minimal detail, clean vector illustration, ui design",
    tags: ["icon", "flat", "app"],
  },
  {
    title: "Editorial Illustration",
    prompt: "modern minimalist editorial illustration, conceptual, limited color palette of blue and orange, simple shapes, negative space, magazine cover quality, clean composition",
    tags: ["editorial", "conceptual", "modern"],
  },
  {
    title: "Line Art Portrait",
    prompt: "single continuous line art portrait, one line drawing, minimalist, elegant, black line on pure white background, artistic, simple but expressive, no shading",
    tags: ["line art", "portrait", "artistic"],
  },
];

const colorPalettes = [
  {
    name: "Monochrome",
    colors: ["#000000", "#333333", "#666666", "#999999", "#FFFFFF"],
    description: "Classic black and white with grays",
  },
  {
    name: "Earth Tones",
    colors: ["#8B7355", "#D4A574", "#F5E6D3", "#2F4F4F", "#FAF3E0"],
    description: "Natural, warm, and grounded",
  },
  {
    name: "Pastel",
    colors: ["#FFB5BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"],
    description: "Soft, approachable, friendly",
  },
  {
    name: "Bold Contrast",
    colors: ["#FF6B6B", "#000000", "#FFFFFF", "#4ECDC4", "#FFE66D"],
    description: "High impact, modern",
  },
];

export default function MinimalistStylePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
            <span className="font-bold text-xl">VixPic</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/tools" className="text-gray-600 hover:text-gray-900 hidden sm:block">Free Tools</Link>
            <Link href="/styles" className="text-purple-600 font-medium hidden sm:block">Styles</Link>
            <Link href="/generate"><Button>Get Started</Button></Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/styles" className="hover:text-purple-600">Styles</Link>
          <span>/</span>
          <span className="text-gray-900">Minimalist</span>
        </div>
      </div>

      {/* Hero - Clean, minimal design */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">◻️</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">
                  Minimalist
                </span>{" "}
                Style Guide
              </h1>
              <p className="text-gray-500 mt-2">Less is more. Simplicity is the ultimate sophistication.</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Minimalist design is about stripping away the unnecessary to focus on what matters. 
            This guide covers flat icons, simple logos, clean illustrations, and the prompting 
            techniques that prevent AI from over-complicating your vision.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium border border-yellow-200">
              ⚡ Intermediate
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Medium Popularity
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Requires Restraint
            </span>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-4 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Challenge with AI + Minimalism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-gray-700 mb-6">
                <strong>AI wants to add detail. Minimalism wants to remove it.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-800 font-medium mb-2">❌ What AI tends to do:</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Add gradients when you want flat</li>
                    <li>• Include details and textures</li>
                    <li>• Fill empty space</li>
                    <li>• Over-complicate simple concepts</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800 font-medium mb-2">✅ How to fight it:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Explicitly say &quot;no gradients, flat colors&quot;</li>
                    <li>• Use &quot;simple, minimal, clean&quot; repeatedly</li>
                    <li>• Specify &quot;negative space, empty areas&quot;</li>
                    <li>• Add &quot;vector style, 2D, flat design&quot;</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Minimalist Sub-Styles</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Minimalism takes many forms. Here are the most useful for AI generation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minimalistSubStyles.map((style, i) => (
              <Card key={i} className="border hover:border-gray-300 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-medium">Example prompts:</p>
                    {style.prompts.map((prompt, j) => (
                      <p key={j} className="text-sm bg-gray-50 p-2 rounded mb-2 font-mono text-gray-700">
                        {prompt}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Use for:</span> {style.useCases}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palettes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Minimalist Color Palettes</h2>
          <p className="text-gray-600 text-center mb-12">
            Less colors = more impact. Stick to 2-4 colors max.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {colorPalettes.map((palette, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{palette.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{palette.description}</p>
                  <div className="flex gap-2">
                    {palette.colors.map((color, j) => (
                      <div 
                        key={j}
                        className="w-12 h-12 rounded-lg border border-gray-200 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 font-mono">
                    {palette.colors.join(", ")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Tip: Include color codes in prompts — &quot;palette of #000000 and #FF6B6B only&quot;
          </p>
        </div>
      </section>

      {/* Best Models */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Best Models for Minimalism</h2>
          <p className="text-gray-600 text-center mb-12">
            Some models understand &quot;less&quot; better than others.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{model.name}</h3>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {model.recommendation}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">via {model.provider}</p>
                      <div className="flex flex-wrap gap-2">
                        {model.strengths.map((s, j) => (
                          <span key={j} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{model.cost}</p>
                      <p className="text-xs text-gray-500">per image</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Prompts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Copy-Paste Prompts</h2>
          <p className="text-gray-600 text-center mb-12">
            These prompts are tuned for clean, minimal outputs.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {example.prompt}
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="text-xs">
                      Copy Prompt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Negative Prompts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Negative Prompts</h2>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🚫</span> Add These to Keep It Simple
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                gradient, shadow, 3D, realistic, detailed texture, complex, busy, cluttered, 
                ornate, decorative, photorealistic, multiple colors, busy background, 
                intricate details, noise, grain
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For SDXL/Flux: Add these to negative prompt box. For DALL-E 3: Include &quot;avoid&quot; statements in main prompt.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pro Tips for Minimal Design</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🎯",
                title: "One Focus Point",
                tip: "Each image should have ONE clear subject. Remove everything else.",
              },
              {
                emoji: "◻️",
                title: "Embrace Empty Space",
                tip: "White/negative space is a feature, not wasted area. Specify it explicitly.",
              },
              {
                emoji: "🔢",
                title: "Limit Colors",
                tip: "2-3 colors max. Include color codes in your prompt for consistency.",
              },
              {
                emoji: "📐",
                title: "Use Geometry",
                tip: "Circles, squares, triangles. Simple shapes read cleanly at any size.",
              },
              {
                emoji: "✏️",
                title: "Vector Thinking",
                tip: "Add 'vector style' or 'scalable' — AI understands these mean simple paths.",
              },
              {
                emoji: "🔄",
                title: "Iterate Aggressively",
                tip: "Minimalism is hard for AI. Generate 10+, pick 1. That's the workflow.",
              },
            ].map((item, i) => (
              <Card key={i} className="border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Creating Minimal Designs
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Generate clean logos, icons, and illustrations for free. 
            Add your API keys for unlimited generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100">
                Try Free Now
              </Button>
            </Link>
            <Link href="/styles">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-700 text-gray-300 hover:bg-gray-800">
                Explore More Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-950 text-gray-500">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© 2026 VixPic. Built with ❤️ for creators who refuse to overpay.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/styles" className="hover:text-white">All Styles</Link>
            <Link href="/tools" className="hover:text-white">Free Tools</Link>
            <Link href="/providers" className="hover:text-white">Providers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
