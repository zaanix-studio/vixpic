import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Anime Art Generation Guide | Prompts, Models & Tips | VixPic",
  description: "Master anime and manga AI art generation. Learn prompting techniques for Studio Ghibli, cyberpunk, chibi styles. Best models: SDXL Anime, NovelAI, Anything V5.",
  keywords: ["anime AI art", "AI manga generator", "anime AI prompts", "Studio Ghibli AI", "anime art styles", "SDXL anime", "NovelAI"],
};

const animeSubStyles = [
  {
    name: "Classic Anime",
    description: "Traditional cel-shaded look from 80s-90s anime",
    prompts: [
      "classic anime style, 90s anime aesthetic, cel shaded, vibrant colors",
      "retro anime, hand-drawn look, film grain, Studio Gainax style",
    ],
    examples: "Evangelion, Cowboy Bebop, Akira",
  },
  {
    name: "Studio Ghibli",
    description: "Soft, painterly Ghibli aesthetic with nature themes",
    prompts: [
      "studio ghibli style, soft lighting, watercolor textures, magical realism",
      "ghibli landscape, lush greenery, blue sky with clouds, peaceful atmosphere",
    ],
    examples: "Spirited Away, Totoro, Howl's Moving Castle",
  },
  {
    name: "Modern Digital Anime",
    description: "Clean, polished contemporary anime look",
    prompts: [
      "modern anime style, digital art, clean lines, vibrant colors, highly detailed",
      "anime illustration, soft shading, beautiful lighting, pixiv quality",
    ],
    examples: "Demon Slayer, Jujutsu Kaisen, Chainsaw Man",
  },
  {
    name: "Chibi / Cute",
    description: "Super-deformed cute style with exaggerated features",
    prompts: [
      "chibi style, cute, big head, small body, kawaii, pastel colors",
      "adorable chibi character, simple background, sticker style",
    ],
    examples: "Pop Team Epic, Chibis in merch art",
  },
  {
    name: "Cyberpunk Anime",
    description: "Neon-lit futuristic anime with tech elements",
    prompts: [
      "cyberpunk anime, neon lights, dark atmosphere, futuristic city, tech noir",
      "anime girl, cybernetic implants, holographic displays, rain, night city",
    ],
    examples: "Ghost in the Shell, Akira, Psycho-Pass",
  },
  {
    name: "Shonen Action",
    description: "Dynamic action poses with intense energy",
    prompts: [
      "shonen anime style, dynamic action pose, energy aura, intense expression",
      "anime battle scene, dramatic lighting, motion blur, powerful stance",
    ],
    examples: "Dragon Ball, Naruto, One Piece",
  },
];

const bestModels = [
  {
    name: "SDXL Anime Checkpoints",
    provider: "Replicate",
    strengths: ["Best anime quality", "Many style variations", "Fine-tuned for anime"],
    cost: "~$0.01/image",
    recommendation: "Best Overall",
  },
  {
    name: "NovelAI (via API)",
    provider: "NovelAI",
    strengths: ["Consistent characters", "Great anatomy", "Light novel aesthetic"],
    cost: "~$0.02/image",
    recommendation: "Best for Characters",
  },
  {
    name: "Anything V5",
    provider: "Replicate",
    strengths: ["Classic anime look", "Good for portraits", "Stable outputs"],
    cost: "~$0.008/image",
    recommendation: "Best Value",
  },
  {
    name: "Flux (anime LoRA)",
    provider: "FAL / Replicate",
    strengths: ["Modern quality", "Good prompt following", "Versatile"],
    cost: "~$0.02/image",
    recommendation: "Most Flexible",
  },
];

const examplePrompts = [
  {
    title: "Fantasy Anime Warrior",
    prompt: "anime girl warrior, silver armor, long flowing hair, magical sword glowing blue, fantasy forest background, dramatic lighting, detailed anime style, vibrant colors, 8k quality",
    tags: ["fantasy", "character", "detailed"],
  },
  {
    title: "Ghibli-Style Landscape",
    prompt: "studio ghibli style landscape, rolling green hills, small cottage, blue sky with fluffy clouds, wildflowers, peaceful atmosphere, soft watercolor textures, magical realism",
    tags: ["landscape", "ghibli", "peaceful"],
  },
  {
    title: "Cyberpunk Anime Character",
    prompt: "cyberpunk anime character, neon pink and blue lighting, rain, futuristic city background, cybernetic eye, holographic interface, dark atmosphere, detailed anime illustration",
    tags: ["cyberpunk", "character", "moody"],
  },
  {
    title: "Cute Chibi Mascot",
    prompt: "cute chibi character, big sparkly eyes, tiny body, holding a coffee cup, pastel pink background, kawaii style, simple design, sticker art quality",
    tags: ["chibi", "cute", "simple"],
  },
];

export default function AnimeStylePage() {
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
          <span className="text-gray-900">Anime & Manga</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🎌</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Anime & Manga
                </span>{" "}
                Style Guide
              </h1>
              <p className="text-gray-600 mt-2">Master Japanese animation aesthetics with AI</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Anime is one of the most popular AI art styles, with distinct sub-genres from 
            classic cel-shaded to modern digital illustration. Learn which models, prompts, 
            and techniques produce the best results.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ✓ Beginner Friendly
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Very High Popularity
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Many Model Options
            </span>
          </div>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Anime Sub-Styles</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            &quot;Anime&quot; covers many aesthetics. Here are the most popular sub-styles with prompting tips.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animeSubStyles.map((style, i) => (
              <Card key={i} className="border-2 hover:border-purple-200 transition-all">
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
                    <span className="font-medium">Reference:</span> {style.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Models */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Best Models for Anime</h2>
          <p className="text-gray-600 text-center mb-12">
            Not all AI models handle anime well. These are proven choices.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{model.name}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
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
                      <p className="text-2xl font-bold text-purple-600">{model.cost}</p>
                      <p className="text-xs text-gray-500">per image</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            All models accessible via VixPic with your own API keys. No subscriptions required.
          </p>
        </div>
      </section>

      {/* Example Prompts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Copy-Paste Prompts</h2>
          <p className="text-gray-600 text-center mb-12">
            Ready-to-use prompts to get started. Customize to your needs.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pro Tips for Anime Generation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span>💡</span> Quality Boosters
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <ul className="space-y-2 text-sm">
                  <li>• Add &quot;masterpiece, best quality&quot; for premium outputs</li>
                  <li>• Use &quot;highly detailed&quot; for intricate artwork</li>
                  <li>• Include &quot;anime screencap&quot; for authentic look</li>
                  <li>• Try &quot;official art&quot; or &quot;key visual&quot; for polished style</li>
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
                  <li>• Mixing anime with photorealistic → confuses model</li>
                  <li>• Overloading prompts → muddled results</li>
                  <li>• Using wrong model → DALL-E 3 struggles with anime</li>
                  <li>• Forgetting negative prompts → extra fingers, artifacts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6 border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <span>🎯</span> Negative Prompts for Anime
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <p className="text-sm mb-3">Add these to avoid common issues:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                bad anatomy, bad hands, extra fingers, missing fingers, watermark, signature, 
                blurry, low quality, jpeg artifacts, worst quality, deformed, ugly
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Anime Art?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start generating anime images for free. Add your API keys for unlimited generation 
            with the best anime models at fraction of subscription costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100">
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
