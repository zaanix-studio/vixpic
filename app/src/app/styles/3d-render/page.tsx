import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 3D Render Generator Guide | Product Shots, Characters & Isometric | VixPic",
  description: "Create stunning 3D render style AI art. Product visualization, character models, isometric scenes, abstract 3D. Best prompts for DALL-E 3, Flux Pro.",
  keywords: ["AI 3D render", "3D generator AI", "product mockup AI", "isometric AI", "3D character AI", "Blender style AI", "3D visualization"],
};

const renderSubStyles = [
  {
    name: "Product Visualization",
    description: "Clean product shots with studio lighting and reflections",
    prompts: [
      "3D render of modern headphones, studio lighting, white background, product photography style",
      "3D product visualization, sleek smartphone on reflective surface, soft shadows, commercial quality",
    ],
    examples: "Apple product shots, Amazon listings, E-commerce",
  },
  {
    name: "Isometric Scenes",
    description: "Cute 3D dioramas from a tilted top-down view",
    prompts: [
      "isometric 3D render of a cozy bedroom, soft pastel colors, miniature diorama style, cute",
      "isometric game scene, fantasy village, low poly style, vibrant colors, clean edges",
    ],
    examples: "Monument Valley, game UI, app illustrations",
  },
  {
    name: "Character Design",
    description: "Stylized 3D characters from realistic to cartoon",
    prompts: [
      "3D character render, cute robot mascot, Pixar style, soft lighting, clean background",
      "3D character model, fantasy warrior, detailed armor, dramatic lighting, Blender render",
    ],
    examples: "Pixar, Fortnite, 3D mascots",
  },
  {
    name: "Abstract 3D",
    description: "Geometric shapes, fluid simulations, artistic renders",
    prompts: [
      "abstract 3D render, metallic spheres with iridescent surface, minimal composition, black background",
      "3D abstract art, fluid simulation, colorful liquid shapes, studio lighting, high contrast",
    ],
    examples: "Album covers, tech branding, wallpapers",
  },
  {
    name: "Architectural Visualization",
    description: "Interior and exterior 3D renders for architecture",
    prompts: [
      "3D architectural render, modern living room interior, natural lighting, minimalist furniture",
      "architectural visualization, contemporary house exterior, sunset lighting, photorealistic",
    ],
    examples: "Real estate marketing, ArchViz",
  },
  {
    name: "Clay/Matte Render",
    description: "Soft matte materials without textures, minimal aesthetic",
    prompts: [
      "clay render style, 3D scene without textures, soft ambient occlusion, white material",
      "matte 3D render, minimalist objects, soft shadows, pastel background, clean aesthetic",
    ],
    examples: "UI/UX illustrations, minimal design",
  },
];

const bestModels = [
  {
    name: "DALL-E 3",
    provider: "OpenAI",
    strengths: ["Best 3D quality", "Clean compositions", "Excellent product shots"],
    cost: "~$0.04/image",
    recommendation: "Best Overall",
  },
  {
    name: "Flux Pro",
    provider: "FAL / Replicate",
    strengths: ["Great detail", "Good prompt following", "Realistic materials"],
    cost: "~$0.03/image",
    recommendation: "Best Detail",
  },
  {
    name: "SDXL (3D LoRAs)",
    provider: "Replicate",
    strengths: ["Many style options", "Affordable", "Good isometric renders"],
    cost: "~$0.01/image",
    recommendation: "Best Value",
  },
  {
    name: "Midjourney (via API)",
    provider: "Various",
    strengths: ["Artistic quality", "Great lighting", "Unique aesthetics"],
    cost: "~$0.05/image",
    recommendation: "Most Creative",
  },
];

const examplePrompts = [
  {
    title: "Product Shot - Tech Device",
    prompt: "3D render of wireless earbuds and charging case, floating on gradient background, soft studio lighting, product photography, clean white and silver materials, subtle reflections, commercial quality, 8k",
    tags: ["product", "tech", "commercial"],
  },
  {
    title: "Isometric Room Diorama",
    prompt: "isometric 3D render of a cozy coffee shop interior, warm lighting, miniature diorama style, tiny furniture and details, pastel color palette, cute aesthetic, clean edges, soft shadows",
    tags: ["isometric", "cozy", "cute"],
  },
  {
    title: "3D Character Mascot",
    prompt: "3D render of a friendly robot character, round body, glowing blue eyes, waving hand, Pixar animation style, soft lighting, white background, cute personality, high detail",
    tags: ["character", "mascot", "Pixar"],
  },
  {
    title: "Abstract Geometric",
    prompt: "abstract 3D render, collection of geometric shapes, metallic gold and matte black materials, floating composition, dramatic studio lighting, minimal black background, high contrast, artistic",
    tags: ["abstract", "geometric", "minimal"],
  },
];

const materialTips = [
  { name: "Glass", prompt: "glass material, transparent, refractive, caustics" },
  { name: "Metal", prompt: "brushed metal, chrome, reflective surface" },
  { name: "Matte", prompt: "matte material, soft surface, no reflections" },
  { name: "Plastic", prompt: "glossy plastic, subtle reflections, saturated color" },
  { name: "Clay", prompt: "clay render, uniform material, soft shadows" },
  { name: "Iridescent", prompt: "iridescent surface, color-shifting, holographic" },
];

export default function ThreeDRenderStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
          <span className="text-gray-900">3D Render</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🎮</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  3D Render
                </span>{" "}
                Style Guide
              </h1>
              <p className="text-gray-600 mt-2">Clean 3D visualization with AI</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            3D renders are essential for product shots, app illustrations, and modern design. 
            AI models can now create Blender-quality renders instantly — from product visualization 
            to cute isometric scenes and abstract art.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              ⚡ Advanced
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              High Popularity
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Commercial Ready
            </span>
          </div>
        </div>
      </section>

      {/* Material Quick Reference */}
      <section className="py-12 px-4 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Material Keywords</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {materialTips.map((material, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{material.name}</h3>
                  <p className="text-xs text-gray-600 font-mono">{material.prompt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">3D Render Sub-Styles</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From product shots to abstract art — each has its own prompting techniques.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderSubStyles.map((style, i) => (
              <Card key={i} className="border-2 hover:border-indigo-200 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-medium">Example prompts:</p>
                    {style.prompts.map((prompt, j) => (
                      <p key={j} className="text-sm bg-indigo-50 p-2 rounded mb-2 font-mono text-gray-700">
                        {prompt}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Reference:</span> {style.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Models */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Best Models for 3D Renders</h2>
          <p className="text-gray-600 text-center mb-12">
            DALL-E 3 leads for 3D quality, but other options work well for specific styles.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{model.name}</h3>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
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
                      <p className="text-2xl font-bold text-indigo-600">{model.cost}</p>
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Copy-Paste Prompts</h2>
          <p className="text-gray-600 text-center mb-12">
            Ready-to-use prompts for different 3D render types.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
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

      {/* Tips Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pro Tips for 3D Renders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span>💡</span> Quality Boosters
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <ul className="space-y-2 text-sm">
                  <li>• Add &quot;studio lighting&quot; for professional look</li>
                  <li>• Include &quot;soft shadows&quot; for depth</li>
                  <li>• Use &quot;octane render&quot; or &quot;unreal engine&quot; for quality</li>
                  <li>• Specify &quot;8k, high detail&quot; for resolution</li>
                  <li>• Add material types: &quot;metallic, glass, matte&quot;</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <span>⚠️</span> Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-800">
                <ul className="space-y-2 text-sm">
                  <li>• Missing lighting description → flat results</li>
                  <li>• Too complex scenes → confusing outputs</li>
                  <li>• No background specified → random backgrounds</li>
                  <li>• Mixing 2D and 3D terms → inconsistent style</li>
                  <li>• Forgetting camera angle → unexpected views</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6 border-2 border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <span>📐</span> Composition Keywords
              </CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-800">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Camera Angles:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Isometric view</strong></li>
                    <li>• <strong>Front view</strong></li>
                    <li>• <strong>45-degree angle</strong></li>
                    <li>• <strong>Bird&apos;s eye view</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Lighting:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Studio lighting</strong></li>
                    <li>• <strong>Three-point lighting</strong></li>
                    <li>• <strong>Rim lighting</strong></li>
                    <li>• <strong>HDRI environment</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Backgrounds:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Gradient background</strong></li>
                    <li>• <strong>White studio</strong></li>
                    <li>• <strong>Reflective surface</strong></li>
                    <li>• <strong>Transparent/isolated</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Commercial Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Product Photography", desc: "E-commerce listings, Amazon images, product pages", icon: "📦" },
              { title: "App Illustrations", desc: "Onboarding screens, feature graphics, empty states", icon: "📱" },
              { title: "Social Media", desc: "3D posts, branded content, eye-catching visuals", icon: "📸" },
              { title: "Presentations", desc: "Pitch decks, concept visualization, mockups", icon: "📊" },
            ].map((useCase, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <span className="text-4xl">{useCase.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-gray-600">{useCase.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Stunning 3D Renders?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start generating 3D style images for free. Add your API keys for unlimited 
            generation with the best models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-indigo-600 hover:bg-gray-100">
                Try Free Now
              </Button>
            </Link>
            <Link href="/styles">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Explore More Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
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
