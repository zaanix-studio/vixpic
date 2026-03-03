import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Providers — OpenAI, Replicate, FAL & More | VixPic",
  description: "Compare AI image generation providers supported by VixPic. Learn about OpenAI DALL-E, Replicate, FAL, and choose the best API for your needs.",
  keywords: ["AI image API", "Replicate API", "FAL AI", "OpenAI DALL-E API", "BYOK AI image", "AI image provider comparison"],
};

const providers = [
  {
    name: "OpenAI",
    description: "Home of DALL-E 3, the most capable AI image model for prompt understanding and text rendering.",
    icon: "🤖",
    href: "/providers/openai",
    models: ["DALL-E 3", "DALL-E 2"],
    costPer: "~$0.04-0.12/image",
    strengths: ["Best text-in-image", "Excellent prompt adherence", "Safe & reliable", "Easy API setup"],
    bestFor: "Logos, text-heavy images, realistic photos, commercial use",
    colorClass: "bg-success-muted",
  },
  {
    name: "Replicate",
    description: "Run thousands of open-source AI models via API, including SDXL, Flux, and community fine-tunes.",
    icon: "🔄",
    href: "/providers/replicate",
    models: ["SDXL", "Flux", "Stable Diffusion", "1000+ community models"],
    costPer: "~$0.01-0.10/image",
    strengths: ["Cheapest option", "Most model variety", "Community fine-tunes", "LoRA support"],
    bestFor: "Budget users, style variety, anime, artistic effects",
    colorClass: "bg-info-muted",
  },
  {
    name: "FAL",
    description: "Ultra-fast inference platform optimized for speed. Get images in seconds, not minutes.",
    icon: "⚡",
    href: "/providers/fal",
    models: ["Flux Pro", "SDXL Lightning", "Fast SDXL", "AuraFlow"],
    costPer: "~$0.02-0.08/image",
    strengths: ["Fastest generation", "Flux Pro access", "Real-time models", "Developer-friendly"],
    bestFor: "Speed-critical workflows, batch jobs, real-time applications",
    colorClass: "bg-brand-muted",
  },
];

export default function ProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              AI Provider
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            VixPic connects to multiple AI providers via BYOK. Choose based on your priorities: 
            quality, speed, price, or model variety.
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-8 px-4 bg-gradient-to-r from-brand-muted/50 to-info-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Quick Decision Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-card p-4 rounded-xl border">
              <p className="text-sm text-muted-foreground mb-2">Best Quality</p>
              <p className="font-bold text-lg">OpenAI (DALL-E 3)</p>
            </div>
            <div className="text-center bg-card p-4 rounded-xl border">
              <p className="text-sm text-muted-foreground mb-2">Best Price</p>
              <p className="font-bold text-lg">Replicate (SDXL)</p>
            </div>
            <div className="text-center bg-card p-4 rounded-xl border">
              <p className="text-sm text-muted-foreground mb-2">Best Speed</p>
              <p className="font-bold text-lg">FAL (Lightning)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Supported Providers</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Add your API key from any of these providers. Your keys stay local — we use edge proxies for privacy.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {providers.map((provider) => (
              <Card key={provider.href} className="border-2 hover:border-brand/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-14 h-14 ${provider.colorClass} rounded-xl flex items-center justify-center text-3xl`}>
                      {provider.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{provider.name}</CardTitle>
                      <p className="text-sm text-success font-medium">{provider.costPer}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {provider.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Models</p>
                      <div className="flex flex-wrap gap-1">
                        {provider.models.map((model, i) => (
                          <span key={i} className="bg-muted text-foreground px-2 py-1 rounded text-xs">
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-success uppercase mb-2">Strengths</p>
                      <ul className="space-y-1">
                        {provider.strengths.slice(0, 3).map((strength, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-success">✓</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Best For</p>
                      <p className="text-sm text-foreground">{provider.bestFor}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link href={provider.href}>
                      <Button variant="outline" className="w-full">
                        Learn About {provider.name} →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Provider Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-4 text-left">Feature</th>
                  <th className="py-4 px-4 text-center">OpenAI</th>
                  <th className="py-4 px-4 text-center">Replicate</th>
                  <th className="py-4 px-4 text-center">FAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Cheapest option</td>
                  <td className="py-4 px-4 text-center">$0.04</td>
                  <td className="py-4 px-4 text-center text-success font-medium">$0.01</td>
                  <td className="py-4 px-4 text-center">$0.02</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Best model</td>
                  <td className="py-4 px-4 text-center text-success font-medium">DALL-E 3</td>
                  <td className="py-4 px-4 text-center">Flux</td>
                  <td className="py-4 px-4 text-center">Flux Pro</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Generation speed</td>
                  <td className="py-4 px-4 text-center">5-15s</td>
                  <td className="py-4 px-4 text-center">3-10s</td>
                  <td className="py-4 px-4 text-center text-success font-medium">1-5s</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Model variety</td>
                  <td className="py-4 px-4 text-center">2</td>
                  <td className="py-4 px-4 text-center text-success font-medium">1000+</td>
                  <td className="py-4 px-4 text-center">10+</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Text in images</td>
                  <td className="py-4 px-4 text-center text-success font-medium">Excellent</td>
                  <td className="py-4 px-4 text-center">Good</td>
                  <td className="py-4 px-4 text-center">Good</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Setup difficulty</td>
                  <td className="py-4 px-4 text-center text-success font-medium">Easiest</td>
                  <td className="py-4 px-4 text-center">Easy</td>
                  <td className="py-4 px-4 text-center">Easy</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Free credits</td>
                  <td className="py-4 px-4 text-center">$5 (new accounts)</td>
                  <td className="py-4 px-4 text-center">None</td>
                  <td className="py-4 px-4 text-center text-success font-medium">$10 (new)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BYOK Explainer */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How BYOK Works</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Bring Your Own Key means direct access to AI providers at wholesale prices.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                1️⃣
              </div>
              <h3 className="font-bold mb-2">Get an API Key</h3>
              <p className="text-sm text-muted-foreground">Create a free account with OpenAI, Replicate, or FAL</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                2️⃣
              </div>
              <h3 className="font-bold mb-2">Add to VixPic</h3>
              <p className="text-sm text-muted-foreground">Paste your key in Settings. Stored locally in your browser.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                3️⃣
              </div>
              <h3 className="font-bold mb-2">Generate Images</h3>
              <p className="text-sm text-muted-foreground">VixPic calls the API via edge proxy. Your key never touches our servers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                4️⃣
              </div>
              <h3 className="font-bold mb-2">Pay Provider Direct</h3>
              <p className="text-sm text-muted-foreground">Get billed by OpenAI/Replicate/FAL at wholesale rates. No VixPic markup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand to-info text-brand-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Generating?</h2>
          <p className="text-xl opacity-90 mb-8">
            Try our free tools first, then add your API key for unlimited generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Free
              </Button>
            </Link>
            <Link href="/settings">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-brand-foreground text-brand-foreground hover:bg-brand-foreground/10">
                Configure API Keys
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
