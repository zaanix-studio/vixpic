import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Cyberpunk Art Generator Guide | Neon City Prompts & Tips | VixPic",
  description: "Create stunning cyberpunk AI art. Neon cities, tech noir, retrofuturism. Best prompts for Blade Runner, Ghost in the Shell aesthetic. Models: SDXL, Flux, DALL-E 3.",
  keywords: ["cyberpunk AI art", "neon city generator", "Blade Runner AI", "tech noir art", "retrofuturism AI", "cyberpunk prompts", "sci-fi AI art"],
};

const cyberpunkSubStyles = [
  {
    name: "Blade Runner Neo-Noir",
    description: "Rain-soaked streets, neon reflections, dark atmosphere",
    prompts: [
      "cyberpunk city street, rain, neon signs reflecting on wet pavement, fog, Blade Runner aesthetic",
      "neo-noir cyberpunk, dark alley, holographic advertisements, blue and pink neon, cinematic",
    ],
    examples: "Blade Runner, Blade Runner 2049",
  },
  {
    name: "High-Tech Corporate",
    description: "Sleek corporate dystopia, chrome surfaces, blue lighting",
    prompts: [
      "corporate cyberpunk interior, glass and chrome, holographic displays, cold blue lighting, minimalist",
      "futuristic corporate lobby, massive screens, sterile atmosphere, cyberpunk architecture",
    ],
    examples: "Westworld, Ex Machina, Minority Report",
  },
  {
    name: "Street-Level Gritty",
    description: "Underground markets, hackers, DIY tech aesthetic",
    prompts: [
      "cyberpunk street market, vendors with tech augmentations, neon signs in asian characters, crowded",
      "underground hacker den, multiple monitors, cables everywhere, dim lighting, graffiti walls",
    ],
    examples: "Johnny Mnemonic, Neuromancer",
  },
  {
    name: "Cyborg/Augmentation",
    description: "Human-machine hybrids, cybernetic enhancements",
    prompts: [
      "cyberpunk character with cybernetic implants, glowing circuitry under skin, detailed prosthetics",
      "cyborg portrait, mechanical eye with HUD display, chrome facial plates, detailed wiring",
    ],
    examples: "Ghost in the Shell, Alita, Deus Ex",
  },
  {
    name: "Retrofuturism/Synthwave",
    description: "80s-inspired future, hot pink and cyan, chrome and lasers",
    prompts: [
      "synthwave cyberpunk landscape, chrome sun, grid horizon, hot pink and cyan colors, retro future",
      "retrowave aesthetic, DeLorean car, palm trees silhouette, neon sunset, vaporwave",
    ],
    examples: "Tron, Far Cry Blood Dragon, Hotline Miami",
  },
  {
    name: "Megacity Skylines",
    description: "Massive cityscapes, flying vehicles, towering structures",
    prompts: [
      "cyberpunk megacity skyline, flying cars, massive holographic billboards, layered city levels",
      "futuristic cityscape at night, neon-lit skyscrapers, aerial traffic, smog, dystopian",
    ],
    examples: "The Fifth Element, Akira, Judge Dredd",
  },
];

const bestModels = [
  {
    name: "SDXL Cyberpunk LoRAs",
    provider: "Replicate",
    strengths: ["Best neon effects", "Great atmosphere", "Many fine-tuned options"],
    cost: "~$0.01/image",
    recommendation: "Best Overall",
  },
  {
    name: "Flux Pro",
    provider: "FAL / Replicate",
    strengths: ["Excellent detail", "Good prompt following", "Realistic lighting"],
    cost: "~$0.03/image",
    recommendation: "Best Detail",
  },
  {
    name: "DALL-E 3",
    provider: "OpenAI",
    strengths: ["Consistent quality", "Good compositions", "Safe outputs"],
    cost: "~$0.04/image",
    recommendation: "Most Consistent",
  },
  {
    name: "Midjourney (via API)",
    provider: "Various",
    strengths: ["Artistic lighting", "Cinematic look", "Vibrant colors"],
    cost: "~$0.05/image",
    recommendation: "Most Cinematic",
  },
];

const examplePrompts = [
  {
    title: "Rainy Neon Street",
    prompt: "cyberpunk city street at night, heavy rain, neon signs in Japanese and English, reflections on wet asphalt, steam rising from vents, lone figure with umbrella, Blade Runner aesthetic, cinematic lighting, 8k",
    tags: ["street", "rain", "cinematic"],
  },
  {
    title: "Cyberpunk Character Portrait",
    prompt: "portrait of a cyberpunk hacker, cybernetic eye implant with glowing circuits, undercut hairstyle with neon highlights, leather jacket with tech patches, dark background with holographic displays, detailed, dramatic lighting",
    tags: ["character", "portrait", "tech"],
  },
  {
    title: "Megacity Aerial View",
    prompt: "aerial view of cyberpunk megacity, flying vehicles between massive skyscrapers, holographic advertisements floating in air, multiple city levels, neon lights everywhere, smog layer, sunrise breaking through",
    tags: ["cityscape", "aerial", "epic"],
  },
  {
    title: "Synthwave Sunset",
    prompt: "synthwave landscape, chrome sun setting over digital ocean, grid horizon stretching to infinity, hot pink and cyan gradient sky, silhouette of palm trees, retrofuturistic aesthetic, clean lines",
    tags: ["synthwave", "landscape", "retro"],
  },
];

const colorPalettes = [
  {
    name: "Classic Cyberpunk",
    colors: ["#FF00FF", "#00FFFF", "#FF0080", "#0080FF", "#1A1A2E"],
    description: "Magenta, cyan, hot pink on dark blue-black",
  },
  {
    name: "Blade Runner",
    colors: ["#FF6B00", "#00B4D8", "#FFD700", "#2D1B69", "#0A0A0A"],
    description: "Orange, blue, gold with deep purples",
  },
  {
    name: "Synthwave",
    colors: ["#FF1493", "#00CED1", "#FFD700", "#8B00FF", "#1A0A2E"],
    description: "Hot pink, cyan, chrome, purple gradients",
  },
];

export default function CyberpunkStylePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/styles" className="hover:text-info">Styles</Link>
          <span>/</span>
          <span className="text-info">Cyberpunk</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🌆</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-info to-brand bg-clip-text text-transparent">
                  Cyberpunk
                </span>{" "}
                <span className="text-inverted-foreground">Style Guide</span>
              </h1>
              <p className="text-inverted-muted mt-2">Neon-lit dystopian futures with AI</p>
            </div>
          </div>
          <p className="text-xl text-inverted-muted mb-8">
            Cyberpunk is one of the most visually striking AI art styles — neon lights, 
            rain-slicked streets, and high-tech low-life aesthetics. From Blade Runner to 
            Ghost in the Shell, master the prompts that bring dystopian futures to life.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">
              ✓ Beginner Friendly
            </span>
            <span className="px-3 py-1 bg-brand/20 text-brand rounded-full text-sm font-medium">
              High Popularity
            </span>
            <span className="px-3 py-1 bg-info/20 text-info rounded-full text-sm font-medium">
              Iconic Aesthetic
            </span>
          </div>
        </div>
      </section>

      {/* Color Palettes */}
      <section className="py-12 px-4 bg-inverted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-inverted-foreground text-center mb-8">Signature Color Palettes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {colorPalettes.map((palette, i) => (
              <Card key={i} className="bg-foreground/80 border-border/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-inverted-foreground text-lg">{palette.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1 mb-3">
                    {palette.colors.map((color, j) => (
                      <div
                        key={j}
                        className="w-10 h-10 rounded"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <p className="text-inverted-muted text-sm">{palette.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-inverted-foreground mb-4">Cyberpunk Sub-Styles</h2>
          <p className="text-inverted-muted text-center mb-12 max-w-2xl mx-auto">
            Cyberpunk spans many aesthetics. Here are the most popular with prompting tips.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberpunkSubStyles.map((style, i) => (
              <Card key={i} className="bg-foreground/80 border-border/10 hover:border-info/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-inverted-foreground">{style.name}</CardTitle>
                  <CardDescription className="text-inverted-muted">{style.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Example prompts:</p>
                    {style.prompts.map((prompt, j) => (
                      <p key={j} className="text-sm bg-inverted p-2 rounded mb-2 font-mono text-inverted-muted">
                        {prompt}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Reference:</span> {style.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Models */}
      <section className="py-16 px-4 bg-inverted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-inverted-foreground mb-4">Best Models for Cyberpunk</h2>
          <p className="text-inverted-muted text-center mb-12">
            These models excel at cyberpunk&apos;s distinctive neon lighting and atmosphere.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="bg-foreground/80 border-border/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg text-inverted-foreground">{model.name}</h3>
                        <span className="px-2 py-1 bg-info/20 text-info text-xs rounded-full">
                          {model.recommendation}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">via {model.provider}</p>
                      <div className="flex flex-wrap gap-2">
                        {model.strengths.map((s, j) => (
                          <span key={j} className="text-xs bg-foreground/60 text-inverted-muted px-2 py-1 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-info">{model.cost}</p>
                      <p className="text-xs text-muted-foreground">per image</p>
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
          <h2 className="text-3xl font-bold text-center text-inverted-foreground mb-4">Copy-Paste Prompts</h2>
          <p className="text-inverted-muted text-center mb-12">
            Ready-to-use prompts for different cyberpunk scenes.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="bg-foreground/80 border-border/10">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-inverted-foreground">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-brand-muted/20 text-brand px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-inverted text-info p-4 rounded-lg font-mono text-sm overflow-x-auto border border-info/20">
                    {example.prompt}
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="text-xs border-info/50 text-info hover:bg-info/10">
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
      <section className="py-16 px-4 bg-inverted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-inverted-foreground mb-12">Pro Tips for Cyberpunk</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-foreground/80 border-success/30">
              <CardHeader>
                <CardTitle className="text-success flex items-center gap-2">
                  <span>💡</span> Quality Boosters
                </CardTitle>
              </CardHeader>
              <CardContent className="text-inverted-muted">
                <ul className="space-y-2 text-sm">
                  <li>• Add &quot;cinematic lighting&quot; for dramatic effect</li>
                  <li>• Include &quot;rain&quot; and &quot;reflections&quot; for atmosphere</li>
                  <li>• Use &quot;Blade Runner aesthetic&quot; for instant recognition</li>
                  <li>• Specify &quot;neon signs in Japanese/Chinese&quot; for authenticity</li>
                  <li>• Add &quot;volumetric fog&quot; or &quot;steam&quot; for depth</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-foreground/80 border-destructive/30">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <span>⚠️</span> Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-inverted-muted">
                <ul className="space-y-2 text-sm">
                  <li>• Over-saturating colors → loses atmosphere</li>
                  <li>• Forgetting contrast → needs dark areas too</li>
                  <li>• Too many elements → focus on one subject</li>
                  <li>• Missing scale reference → add people/vehicles</li>
                  <li>• Generic &quot;futuristic&quot; → be specific about era</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6 bg-foreground/80 border-info/30">
            <CardHeader>
              <CardTitle className="text-info flex items-center gap-2">
                <span>🎯</span> Atmospheric Keywords
              </CardTitle>
            </CardHeader>
            <CardContent className="text-inverted-muted">
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "neon-lit", "rain-soaked", "smog", "holographic", "chrome",
                  "dystopian", "tech noir", "retrofuturistic", "megacity",
                  "underground", "corporate", "grimy", "high-tech low-life"
                ].map((word, i) => (
                  <span key={i} className="px-3 py-1 bg-foreground/60 rounded-full">
                    {word}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand to-info">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-inverted-foreground mb-6">
            Ready to Build Dystopia?
          </h2>
          <p className="text-xl text-inverted-foreground/80 mb-8">
            Start generating cyberpunk art for free. Add your API keys for unlimited 
            generation with the best models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-background text-foreground hover:bg-muted">
                Try Free Now
              </Button>
            </Link>
            <Link href="/styles">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-brand-foreground text-brand-foreground hover:bg-brand-foreground/10">
                Explore More Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
