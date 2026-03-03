import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Photorealistic Image Generation Guide | VixPic",
  description: "Create hyper-realistic AI images indistinguishable from photos. Learn prompting techniques for portraits, products, landscapes. Best models: DALL-E 3, Flux Pro.",
  keywords: ["photorealistic AI", "AI photography", "realistic AI images", "AI portraits", "product photography AI", "DALL-E 3 realistic"],
};

const photoSubStyles = [
  {
    name: "Portrait Photography",
    description: "Realistic human portraits with professional studio quality",
    prompts: [
      "professional portrait photo, soft studio lighting, shallow depth of field, 85mm lens, bokeh background",
      "headshot photography, natural lighting, catch lights in eyes, professional retouching",
    ],
    tips: "Add camera/lens details: '85mm f/1.4', 'Canon 5D', 'Hasselblad'",
  },
  {
    name: "Product Photography",
    description: "Clean product shots for e-commerce and marketing",
    prompts: [
      "product photography, white background, professional studio lighting, high-end commercial photo",
      "product shot, soft shadows, clean composition, magazine advertisement quality",
    ],
    tips: "Specify material textures: 'glossy', 'matte', 'metallic reflection'",
  },
  {
    name: "Landscape Photography",
    description: "Stunning natural scenery with dramatic lighting",
    prompts: [
      "landscape photography, golden hour, dramatic clouds, wide angle lens, National Geographic quality",
      "nature photograph, sunrise, misty mountains, vivid colors, professional DSLR photo",
    ],
    tips: "Time of day matters: 'golden hour', 'blue hour', 'midday harsh light'",
  },
  {
    name: "Food Photography",
    description: "Appetizing food shots for menus and social media",
    prompts: [
      "food photography, professional styling, soft diffused lighting, shallow depth of field, appetizing",
      "gourmet food photo, restaurant menu quality, garnished, steam rising, warm tones",
    ],
    tips: "Add texture words: 'crispy', 'juicy', 'glistening', 'fresh'",
  },
  {
    name: "Architectural Photography",
    description: "Buildings and interiors with perfect composition",
    prompts: [
      "architectural photography, modern building, clean lines, blue sky, professional real estate photo",
      "interior design photography, natural light, minimalist decor, magazine cover quality",
    ],
    tips: "Include perspective: 'straight lines', 'symmetrical', 'wide angle'",
  },
  {
    name: "Fashion Photography",
    description: "Editorial and commercial fashion imagery",
    prompts: [
      "fashion photography, editorial style, high fashion, dramatic lighting, Vogue magazine quality",
      "fashion model, designer clothing, professional studio, sophisticated lighting setup",
    ],
    tips: "Reference publications: 'Vogue', 'Harper's Bazaar', 'GQ'",
  },
];

const bestModels = [
  {
    name: "DALL-E 3",
    provider: "OpenAI",
    strengths: ["Best prompt understanding", "Consistent quality", "Great for text in images"],
    cost: "~$0.04/image",
    recommendation: "Best Overall",
  },
  {
    name: "Flux Pro",
    provider: "FAL / Replicate",
    strengths: ["Exceptional detail", "Natural skin tones", "Fast generation"],
    cost: "~$0.03/image",
    recommendation: "Best for Portraits",
  },
  {
    name: "RealVisXL",
    provider: "Replicate",
    strengths: ["Hyper-realistic output", "Great lighting", "Optimized for photos"],
    cost: "~$0.01/image",
    recommendation: "Best Value",
  },
  {
    name: "Juggernaut XL",
    provider: "Replicate",
    strengths: ["Cinematic quality", "Dramatic lighting", "Versatile"],
    cost: "~$0.01/image",
    recommendation: "Most Versatile",
  },
];

const examplePrompts = [
  {
    title: "Professional Headshot",
    prompt: "professional business headshot, confident woman in her 30s, soft studio lighting, neutral gray background, shallow depth of field, Canon 5D Mark IV, 85mm f/1.4, corporate portrait, natural makeup, genuine smile",
    tags: ["portrait", "professional", "studio"],
  },
  {
    title: "Luxury Watch Product Shot",
    prompt: "luxury watch product photography, Rolex style, white background, dramatic lighting, reflective surface, macro detail, commercial advertisement, high-end jewelry photography, sharp focus on dial",
    tags: ["product", "luxury", "commercial"],
  },
  {
    title: "Dramatic Landscape",
    prompt: "epic mountain landscape photograph, dramatic sunrise, golden hour light, misty valleys, snow-capped peaks, Ansel Adams style, wide angle 14mm, vivid colors, National Geographic award winner",
    tags: ["landscape", "dramatic", "nature"],
  },
  {
    title: "Gourmet Food",
    prompt: "gourmet beef steak photography, medium rare, fresh herbs, professional food styling, warm restaurant lighting, steam rising, appetizing colors, Michelin star presentation, shallow depth of field",
    tags: ["food", "restaurant", "appetizing"],
  },
];

const technicalSettings = [
  { setting: "Resolution", recommendation: "1024x1024 or higher for detail" },
  { setting: "Steps (SDXL)", recommendation: "30-50 for photorealistic" },
  { setting: "CFG Scale", recommendation: "7-9 for balanced adherence" },
  { setting: "Sampler", recommendation: "DPM++ 2M Karras or Euler a" },
];

export default function PhotorealisticStylePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/styles" className="hover:text-brand">Styles</Link>
          <span>/</span>
          <span className="text-foreground">Photorealistic</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">📸</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-info to-info bg-clip-text text-transparent">
                  Photorealistic
                </span>{" "}
                Style Guide
              </h1>
              <p className="text-muted-foreground mt-2">Create AI images indistinguishable from photographs</p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Photorealistic AI generation is about fooling the eye. Learn the specific techniques, 
            camera terminology, and model choices that produce images people can&apos;t tell aren&apos;t 
            real photographs.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-warning-muted text-warning-muted-foreground rounded-full text-sm font-medium">
              ⚡ Intermediate
            </span>
            <span className="px-3 py-1 bg-brand-muted text-brand-muted-foreground rounded-full text-sm font-medium">
              Very High Popularity
            </span>
            <span className="px-3 py-1 bg-info-muted text-info-muted-foreground rounded-full text-sm font-medium">
              Requires Specific Prompts
            </span>
          </div>
        </div>
      </section>

      {/* Key Principle */}
      <section className="py-12 px-4 bg-gradient-to-r from-info-muted/50 to-info-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-info/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The #1 Rule for Photorealism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-foreground mb-6">
                <strong>Speak like a photographer, not an artist.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-destructive/5 p-4 rounded-lg">
                  <p className="text-sm text-destructive font-medium mb-2">❌ Avoid:</p>
                  <p className="text-sm text-destructive font-mono">
                    &quot;beautiful woman, realistic, detailed&quot;
                  </p>
                </div>
                <div className="bg-success-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-success-muted-foreground font-medium mb-2">✅ Instead:</p>
                  <p className="text-sm text-success-muted-foreground font-mono">
                    &quot;portrait photo, 85mm f/1.4, soft studio lighting, Canon 5D&quot;
                  </p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6 text-sm">
                Camera details, lens specs, and lighting setups trigger photographic training data.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Photography Sub-Styles</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Different photography genres need different approaches. Here are the most requested styles.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoSubStyles.map((style, i) => (
              <Card key={i} className="border-2 hover:border-info/20 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Example prompts:</p>
                    {style.prompts.map((prompt, j) => (
                      <p key={j} className="text-sm bg-muted p-2 rounded mb-2 font-mono text-foreground">
                        {prompt}
                      </p>
                    ))}
                  </div>
                  <div className="bg-info-muted/50 p-2 rounded">
                    <p className="text-xs text-info-muted-foreground">
                      <span className="font-medium">💡 Tip:</span> {style.tips}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Models */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Best Models for Photorealism</h2>
          <p className="text-muted-foreground text-center mb-12">
            Some models are specifically tuned for realistic outputs.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{model.name}</h3>
                        <span className="px-2 py-1 bg-info-muted text-info-muted-foreground text-xs rounded-full">
                          {model.recommendation}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">via {model.provider}</p>
                      <div className="flex flex-wrap gap-2">
                        {model.strengths.map((s, j) => (
                          <span key={j} className="text-xs bg-muted px-2 py-1 rounded">
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

      {/* Technical Settings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recommended Settings</h2>
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {technicalSettings.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-muted rounded">
                    <span className="font-medium">{item.setting}</span>
                    <span className="text-sm text-muted-foreground">{item.recommendation}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Example Prompts */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Copy-Paste Prompts</h2>
          <p className="text-muted-foreground text-center mb-12">
            Production-ready prompts for common photorealistic use cases.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-info-muted/50 text-info-muted-foreground px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-inverted text-inverted-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
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

      {/* Common Issues */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Troubleshooting Photorealism</h2>
          <div className="space-y-4">
            {[
              {
                issue: "Faces look weird or distorted",
                solution: "Use models optimized for faces (Flux Pro, RealVisXL). Add 'natural face, realistic skin texture, catch lights in eyes'.",
              },
              {
                issue: "Hands look wrong",
                solution: "Minimize hands in frame or hide them. Add negative prompt: 'bad hands, extra fingers, deformed hands'.",
              },
              {
                issue: "Image looks too 'AI'",
                solution: "Add imperfections: 'film grain, slight motion blur, natural lighting'. Avoid over-processed look.",
              },
              {
                issue: "Lighting looks flat",
                solution: "Be specific: 'Rembrandt lighting', 'golden hour', 'dramatic side lighting'. Include light source.",
              },
              {
                issue: "Background is distracting",
                solution: "Use 'shallow depth of field, bokeh background, f/1.4' to blur backgrounds naturally.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <span className="text-destructive text-xl">⚠️</span>
                    <div>
                      <p className="font-medium text-foreground">{item.issue}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-info to-info">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-info-foreground mb-6">
            Create Photorealistic Images Now
          </h2>
          <p className="text-xl text-info-foreground/80 mb-8">
            Start with free generations. Add your API keys for unlimited access to
            DALL-E 3, Flux Pro, and specialized photorealistic models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-background text-info hover:bg-muted">
                Try Free Now
              </Button>
            </Link>
            <Link href="/styles">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-info-foreground text-info-foreground hover:bg-info-foreground/10">
                Explore More Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
