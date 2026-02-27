import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Watercolor Art Generator Guide | Soft Paintings & Prompts | VixPic",
  description: "Create beautiful watercolor style AI art. Learn prompts for botanical, portraits, landscapes. Soft edges, flowing colors, organic textures. Models: SDXL, DALL-E 3.",
  keywords: ["AI watercolor", "watercolor generator", "digital watercolor", "botanical AI art", "soft painting AI", "watercolor prompts", "artistic AI"],
};

const watercolorSubStyles = [
  {
    name: "Botanical Illustration",
    description: "Delicate plant studies with precise detail and soft washes",
    prompts: [
      "botanical watercolor illustration, detailed flower study, soft color washes, white background",
      "scientific botanical art, watercolor painting of rose, delicate petals, natural colors, vintage style",
    ],
    examples: "Maria Sibylla Merian, Pierre-Joseph Redouté",
  },
  {
    name: "Loose Wet-on-Wet",
    description: "Flowing colors bleeding into each other, dreamy atmosphere",
    prompts: [
      "loose watercolor painting, wet-on-wet technique, colors bleeding together, soft edges, dreamy",
      "abstract watercolor, flowing colors, organic shapes, soft gradients, artistic drips",
    ],
    examples: "J.M.W. Turner, modern abstract watercolor",
  },
  {
    name: "Architectural Sketches",
    description: "Urban sketching style with ink lines and watercolor washes",
    prompts: [
      "watercolor architectural sketch, ink line drawing with color wash, urban sketching, loose style",
      "watercolor cityscape, pen and wash technique, European architecture, travel journal style",
    ],
    examples: "Urban Sketchers, travel journals",
  },
  {
    name: "Portrait Watercolor",
    description: "Expressive portraits with soft skin tones and flowing edges",
    prompts: [
      "watercolor portrait, soft skin tones, loose brushwork, expressive, some areas left unpainted",
      "artistic watercolor face, flowing edges, wet-on-wet skin, emotional expression, white paper visible",
    ],
    examples: "Agnes Cecile, modern watercolor portraiture",
  },
  {
    name: "Landscape Washes",
    description: "Soft landscapes with atmospheric perspective and misty effects",
    prompts: [
      "watercolor landscape painting, misty mountains, atmospheric perspective, soft washes, peaceful",
      "watercolor nature scene, forest with fog, soft greens and blues, bleeding edges, serene",
    ],
    examples: "Traditional Chinese watercolor, English watercolor masters",
  },
  {
    name: "Children&apos;s Book Style",
    description: "Whimsical, warm watercolors with storybook charm",
    prompts: [
      "children&apos;s book watercolor illustration, cute animal, warm colors, whimsical, soft lighting",
      "storybook watercolor style, cozy scene, friendly characters, gentle palette, nostalgic",
    ],
    examples: "Beatrix Potter, modern picture books",
  },
];

const bestModels = [
  {
    name: "SDXL (watercolor LoRAs)",
    provider: "Replicate",
    strengths: ["Best texture simulation", "Natural color bleeds", "Many fine-tuned options"],
    cost: "~$0.01/image",
    recommendation: "Best Overall",
  },
  {
    name: "DALL-E 3",
    provider: "OpenAI",
    strengths: ["Clean compositions", "Good prompt following", "Consistent quality"],
    cost: "~$0.04/image",
    recommendation: "Most Consistent",
  },
  {
    name: "Flux",
    provider: "FAL / Replicate",
    strengths: ["Excellent detail", "Natural-looking edges", "Good color mixing"],
    cost: "~$0.03/image",
    recommendation: "Best Detail",
  },
  {
    name: "Midjourney (via API)",
    provider: "Various",
    strengths: ["Beautiful aesthetics", "Artistic quality", "Natural textures"],
    cost: "~$0.05/image",
    recommendation: "Most Artistic",
  },
];

const examplePrompts = [
  {
    title: "Botanical Flower Study",
    prompt: "botanical watercolor illustration of a peony flower, scientific accuracy, soft pink petals with color gradients, green leaves, white background, vintage botanical art style, delicate brushwork, museum quality",
    tags: ["botanical", "detailed", "vintage"],
  },
  {
    title: "Misty Mountain Landscape",
    prompt: "watercolor landscape painting, misty mountains at dawn, soft purple and blue gradients, atmospheric perspective, pine trees in foreground, fog rolling through valleys, peaceful, traditional technique",
    tags: ["landscape", "atmospheric", "serene"],
  },
  {
    title: "Loose Portrait",
    prompt: "expressive watercolor portrait, young woman, loose wet-on-wet technique, soft skin tones with warm undertones, some areas left as white paper, flowing edges, emotional, artistic drips",
    tags: ["portrait", "expressive", "loose"],
  },
  {
    title: "Urban Sketch",
    prompt: "watercolor urban sketch, Paris cafe street scene, ink line drawing with loose color washes, travel journal style, warm afternoon light, people at tables, European architecture",
    tags: ["urban", "sketch", "travel"],
  },
];

export default function WatercolorStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
          <span className="text-gray-900">Watercolor</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🎨</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                  Watercolor
                </span>{" "}
                Style Guide
              </h1>
              <p className="text-gray-600 mt-2">Soft, flowing, organic art with AI</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Watercolor&apos;s distinctive soft edges, color bleeds, and organic textures create 
            uniquely beautiful AI art. From botanical illustrations to loose portraits, 
            master the techniques that bring this delicate medium to life.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              ⚡ Intermediate
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Medium Popularity
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Organic Beauty
            </span>
          </div>
        </div>
      </section>

      {/* Key Characteristics */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What Makes Watercolor Unique</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "💧", title: "Soft Edges", desc: "Colors bleed and flow naturally" },
              { icon: "📄", title: "White Paper", desc: "Unpainted areas become highlights" },
              { icon: "🌊", title: "Transparency", desc: "Layers show through each other" },
              { icon: "🎨", title: "Color Mixing", desc: "Wet-on-wet creates unique blends" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Watercolor Sub-Styles</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Watercolor ranges from precise botanical studies to loose, expressive abstracts.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {watercolorSubStyles.map((style, i) => (
              <Card key={i} className="border-2 hover:border-blue-200 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-medium">Example prompts:</p>
                    {style.prompts.map((prompt, j) => (
                      <p key={j} className="text-sm bg-blue-50 p-2 rounded mb-2 font-mono text-gray-700">
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
          <h2 className="text-3xl font-bold text-center mb-4">Best Models for Watercolor</h2>
          <p className="text-gray-600 text-center mb-12">
            These models handle watercolor&apos;s soft textures and color bleeds best.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{model.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
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
                      <p className="text-2xl font-bold text-blue-600">{model.cost}</p>
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
            Ready-to-use prompts for different watercolor styles.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
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
          <h2 className="text-3xl font-bold text-center mb-12">Pro Tips for Watercolor</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span>💡</span> Quality Boosters
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <ul className="space-y-2 text-sm">
                  <li>• Add &quot;wet-on-wet technique&quot; for soft bleeds</li>
                  <li>• Include &quot;white paper visible&quot; for authentic look</li>
                  <li>• Use &quot;soft edges, hard edges&quot; for contrast</li>
                  <li>• Specify &quot;color gradients&quot; or &quot;color washes&quot;</li>
                  <li>• Add &quot;artistic drips&quot; for organic feel</li>
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
                  <li>• Overworking the image → loses freshness</li>
                  <li>• Too many hard edges → looks like digital paint</li>
                  <li>• Missing white paper → loses transparency effect</li>
                  <li>• Over-saturated colors → watercolor is soft</li>
                  <li>• Too much detail everywhere → needs focal points</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6 border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <span>🎨</span> Watercolor Vocabulary
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Techniques:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Wet-on-wet</strong> — paint on wet paper, soft bleeds</li>
                    <li>• <strong>Wet-on-dry</strong> — paint on dry, harder edges</li>
                    <li>• <strong>Wash</strong> — thin, diluted color layer</li>
                    <li>• <strong>Granulation</strong> — pigment settling in texture</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Effects:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Blooms</strong> — backruns creating organic shapes</li>
                    <li>• <strong>Lifting</strong> — removing paint for highlights</li>
                    <li>• <strong>Salt texture</strong> — crystalline effects</li>
                    <li>• <strong>Splatter</strong> — organic spray effects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Soft, Beautiful Art?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start generating watercolor style images for free. Add your API keys for unlimited 
            generation with the best models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
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
