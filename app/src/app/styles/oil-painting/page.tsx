import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Oil Painting Generator Guide | Classical Art Prompts & Tips | VixPic",
  description: "Create stunning oil painting style AI art. Learn prompts for Renaissance, Impressionism, portrait paintings. Best models: Flux, SDXL, DALL-E 3.",
  keywords: ["AI oil painting", "oil painting generator", "classical art AI", "Renaissance AI art", "Impressionism AI", "portrait painting AI", "digital oil painting"],
};

const paintingSubStyles = [
  {
    name: "Renaissance",
    description: "Classical Italian masters: rich colors, religious themes, idealized figures",
    prompts: [
      "Renaissance oil painting, classical composition, rich earth tones, sfumato technique, dramatic lighting",
      "in the style of Leonardo da Vinci, Raphael, oil on canvas, museum quality, classical beauty",
    ],
    examples: "Da Vinci, Raphael, Michelangelo, Botticelli",
  },
  {
    name: "Baroque",
    description: "Dramatic lighting, rich details, emotional intensity",
    prompts: [
      "Baroque oil painting, dramatic chiaroscuro lighting, rich colors, ornate details, emotional intensity",
      "in the style of Caravaggio, Rembrandt, oil painting, dramatic shadows, golden light",
    ],
    examples: "Caravaggio, Rembrandt, Vermeer, Rubens",
  },
  {
    name: "Impressionism",
    description: "Visible brushstrokes, light effects, everyday scenes",
    prompts: [
      "Impressionist oil painting, visible brushstrokes, dappled light, soft colors, outdoor scene",
      "in the style of Monet, Renoir, oil on canvas, natural lighting, peaceful atmosphere",
    ],
    examples: "Monet, Renoir, Degas, Cézanne",
  },
  {
    name: "Romanticism",
    description: "Dramatic landscapes, emotional scenes, sublime nature",
    prompts: [
      "Romantic era oil painting, dramatic landscape, stormy sky, sublime nature, emotional atmosphere",
      "in the style of Turner, Friedrich, oil painting, dramatic lighting, vast scale",
    ],
    examples: "Turner, Friedrich, Delacroix, Constable",
  },
  {
    name: "Post-Impressionism",
    description: "Bold colors, expressive brushwork, geometric forms",
    prompts: [
      "Post-Impressionist oil painting, bold colors, expressive brushstrokes, vibrant palette",
      "in the style of Van Gogh, swirling brushstrokes, intense colors, emotional expression",
    ],
    examples: "Van Gogh, Gauguin, Cézanne, Seurat",
  },
  {
    name: "Portrait Painting",
    description: "Classical portrait techniques with depth and character",
    prompts: [
      "classical oil portrait, three-quarter view, warm skin tones, soft lighting, dignified pose",
      "oil portrait painting, detailed face, expressive eyes, dark background, museum quality",
    ],
    examples: "John Singer Sargent, Frans Hals, Velázquez",
  },
];

const bestModels = [
  {
    name: "Flux Pro",
    provider: "FAL / Replicate",
    strengths: ["Best brushwork", "Excellent textures", "Great prompt following"],
    cost: "~$0.03/image",
    recommendation: "Best Overall",
  },
  {
    name: "SDXL (fine-tuned)",
    provider: "Replicate",
    strengths: ["Many style checkpoints", "Good texture detail", "Affordable"],
    cost: "~$0.01/image",
    recommendation: "Best Value",
  },
  {
    name: "DALL-E 3",
    provider: "OpenAI",
    strengths: ["Clean compositions", "Consistent quality", "Good prompt following"],
    cost: "~$0.04/image",
    recommendation: "Most Consistent",
  },
  {
    name: "Midjourney (via API)",
    provider: "Various",
    strengths: ["Artistic quality", "Beautiful lighting", "Great for portraits"],
    cost: "~$0.05/image",
    recommendation: "Most Artistic",
  },
];

const examplePrompts = [
  {
    title: "Van Gogh Starry Night Style",
    prompt: "oil painting in the style of Van Gogh, swirling night sky, vibrant blues and yellows, visible brushstrokes, small village below, cypress trees, emotional expression, post-impressionist masterpiece",
    tags: ["landscape", "Van Gogh", "night"],
  },
  {
    title: "Renaissance Portrait",
    prompt: "Renaissance oil portrait of a noble woman, three-quarter view, rich velvet dress, pearl jewelry, sfumato technique, warm lighting, dark background, in the style of Raphael, museum quality",
    tags: ["portrait", "Renaissance", "classical"],
  },
  {
    title: "Monet Garden Scene",
    prompt: "Impressionist oil painting of a garden with water lilies, dappled sunlight through trees, soft pastel colors, visible brushstrokes, peaceful atmosphere, in the style of Claude Monet",
    tags: ["landscape", "Impressionist", "garden"],
  },
  {
    title: "Dramatic Baroque Still Life",
    prompt: "Baroque oil painting still life, fruits and flowers on table, dramatic chiaroscuro lighting, rich deep colors, ornate golden frame visible, in the style of Dutch masters, hyperdetailed",
    tags: ["still life", "Baroque", "detailed"],
  },
];

export default function OilPaintingStylePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/styles" className="hover:text-purple-600">Styles</Link>
          <span>/</span>
          <span className="text-gray-900">Oil Painting</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🖼️</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Oil Painting
                </span>{" "}
                Style Guide
              </h1>
              <p className="text-gray-600 mt-2">Classical fine art aesthetics with AI</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Oil painting is one of the most timeless art forms, spanning from Renaissance 
            masters to modern expressionists. AI models can now recreate these classical 
            techniques with stunning accuracy.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ✓ Beginner Friendly
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              High Popularity
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              Timeless Appeal
            </span>
          </div>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Oil Painting Movements</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different eras and movements have distinct characteristics. Choose based on the mood you want.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paintingSubStyles.map((style, i) => (
              <Card key={i} className="border-2 hover:border-amber-200 transition-all">
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
                    <span className="font-medium">Artists:</span> {style.examples}
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
          <h2 className="text-3xl font-bold text-center mb-4">Best Models for Oil Painting</h2>
          <p className="text-gray-600 text-center mb-12">
            Most modern AI models handle oil painting well. Here are the top choices.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{model.name}</h3>
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
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
                      <p className="text-2xl font-bold text-amber-600">{model.cost}</p>
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
            Ready-to-use prompts for different oil painting styles.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
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
          <h2 className="text-3xl font-bold text-center mb-12">Pro Tips for Oil Painting Style</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span>💡</span> Quality Boosters
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <ul className="space-y-2 text-sm">
                  <li>• Add &quot;oil on canvas&quot; for authentic texture</li>
                  <li>• Include artist names: &quot;in the style of Rembrandt&quot;</li>
                  <li>• Use &quot;museum quality&quot; or &quot;masterpiece&quot;</li>
                  <li>• Specify lighting: &quot;chiaroscuro&quot;, &quot;golden hour&quot;</li>
                  <li>• Add &quot;visible brushstrokes&quot; for painterly effect</li>
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
                  <li>• Mixing incompatible eras (Renaissance + Impressionist)</li>
                  <li>• Too many artist references → confused output</li>
                  <li>• Forgetting composition terms (portrait, landscape)</li>
                  <li>• Not specifying color palette for period accuracy</li>
                  <li>• Using &quot;photorealistic&quot; with oil painting style</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6 border-2 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <span>🎨</span> Key Artistic Terms to Know
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Techniques:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Sfumato</strong> — soft, smoky gradients (Da Vinci)</li>
                    <li>• <strong>Chiaroscuro</strong> — dramatic light/shadow contrast</li>
                    <li>• <strong>Impasto</strong> — thick, textured paint application</li>
                    <li>• <strong>Glazing</strong> — transparent color layers</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Compositions:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Three-quarter view</strong> — classic portrait angle</li>
                    <li>• <strong>Tenebrism</strong> — extreme dark backgrounds</li>
                    <li>• <strong>En plein air</strong> — outdoor natural lighting</li>
                    <li>• <strong>Alla prima</strong> — wet-on-wet, spontaneous</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Masterpieces?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start generating oil painting style art for free. Add your API keys for unlimited 
            generation with the best models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-amber-600 hover:bg-gray-100">
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

    </>
  );
}
