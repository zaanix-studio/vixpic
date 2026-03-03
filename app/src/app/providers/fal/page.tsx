import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAL AI API Guide — Flux Pro & Lightning Fast Generation | VixPic",
  description: "Use FAL's API with VixPic for the fastest AI image generation. Flux Pro, Lightning SDXL, and real-time models. $10 free credits for new accounts.",
  keywords: ["FAL AI API", "Flux Pro API", "fast AI images", "Lightning SDXL", "real-time AI generation", "BYOK FAL"],
};

const models = [
  {
    name: "Flux Pro",
    type: "Premium",
    cost: "~$0.05/image",
    speed: "3-6 seconds",
    description: "The best version of Flux. Outstanding quality rivaling DALL-E 3, with better artistic flexibility.",
    strengths: ["Top-tier quality", "Great prompt adherence", "Artistic flexibility"],
    bestFor: "When you need the best possible output, professional work",
  },
  {
    name: "Flux Dev",
    type: "Standard",
    cost: "~$0.025/image",
    speed: "4-8 seconds",
    description: "Development version of Flux. Excellent quality at lower cost than Pro.",
    strengths: ["High quality", "Good value", "Reliable"],
    bestFor: "General purpose high-quality generation",
  },
  {
    name: "Flux Schnell",
    type: "Fast",
    cost: "~$0.003/image",
    speed: "<1 second",
    description: "Distilled Flux for extreme speed. Quality tradeoff but great for iteration.",
    strengths: ["Sub-second speed", "Ultra cheap", "Great for drafts"],
    bestFor: "Quick iterations, testing prompts, prototyping",
  },
  {
    name: "SDXL Lightning",
    type: "Fast",
    cost: "~$0.01/image",
    speed: "1-2 seconds",
    description: "4-step SDXL distillation. Nearly full quality at 4-8x faster speed.",
    strengths: ["Near-SDXL quality", "Very fast", "Good balance"],
    bestFor: "Speed-critical workflows needing SDXL compatibility",
  },
  {
    name: "AuraFlow",
    type: "Standard",
    cost: "~$0.02/image",
    speed: "2-4 seconds",
    description: "Open-source flow-based model. Great for artistic and experimental work.",
    strengths: ["Unique aesthetic", "Fast", "Open weights"],
    bestFor: "Artistic images, experimental work",
  },
];

const pricingTiers = [
  { usage: "100 images/month", monthlySpend: "~$2-5", perImage: "$0.02-0.05" },
  { usage: "500 images/month", monthlySpend: "~$10-25", perImage: "$0.02-0.05" },
  { usage: "2,000 images/month", monthlySpend: "~$40-100", perImage: "$0.02-0.05" },
  { usage: "10,000 images/month", monthlySpend: "~$200-500", perImage: "$0.02-0.05" },
];

export default function FalProviderPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-muted text-brand-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            ⚡ Best for Speed
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-brand to-brand bg-clip-text text-transparent">
              FAL
            </span>
            {" "}— Lightning Fast AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The fastest AI image API. Generate images in under a second with Flux Schnell, 
            or get DALL-E quality with Flux Pro. $10 free credits for new accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://fal.ai/dashboard/keys" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-brand to-brand">
                Get FAL API Key →
              </Button>
            </a>
            <Link href="/settings">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Add Key to VixPic
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why FAL */}
      <section className="py-16 px-4 bg-brand-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose FAL?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "⚡",
                title: "Fastest Generation",
                desc: "Flux Schnell generates images in under 1 second. Even premium models like Flux Pro complete in 3-6 seconds. No other provider is faster."
              },
              {
                icon: "🎁",
                title: "$10 Free Credits",
                desc: "New accounts get $10 in free credits — enough for 200-500+ images depending on model. The most generous free tier in the industry."
              },
              {
                icon: "🌟",
                title: "Flux Pro Access",
                desc: "FAL offers the premium Flux Pro model, which rivals DALL-E 3 in quality. Not available on Replicate. Better value than OpenAI."
              },
              {
                icon: "🔥",
                title: "No Cold Starts",
                desc: "Models are always warm. First request is as fast as the hundredth. Essential for real-time applications."
              },
              {
                icon: "🛠️",
                title: "Developer-Friendly",
                desc: "Clean API, excellent docs, easy webhooks. Built by developers, for developers. Predictable and reliable."
              },
              {
                icon: "📈",
                title: "Scales Instantly",
                desc: "Auto-scaling infrastructure handles any load. Batch 1000 images or 1 — same speed per image."
              },
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-brand/20">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Speed Comparison</h2>
          <p className="text-muted-foreground text-center mb-12">
            FAL optimizes for speed at every level.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Model</th>
                  <th className="py-4 px-6 text-center">FAL</th>
                  <th className="py-4 px-6 text-center">Replicate</th>
                  <th className="py-4 px-6 text-center">OpenAI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Fastest option</td>
                  <td className="py-4 px-6 text-center text-success font-medium">&lt;1 second</td>
                  <td className="py-4 px-6 text-center">2-5 seconds</td>
                  <td className="py-4 px-6 text-center">5-15 seconds</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Premium quality</td>
                  <td className="py-4 px-6 text-center text-success font-medium">3-6 seconds</td>
                  <td className="py-4 px-6 text-center">5-10 seconds</td>
                  <td className="py-4 px-6 text-center">5-15 seconds</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Cold start</td>
                  <td className="py-4 px-6 text-center text-success font-medium">None</td>
                  <td className="py-4 px-6 text-center">10-30 seconds</td>
                  <td className="py-4 px-6 text-center">None</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Batch scaling</td>
                  <td className="py-4 px-6 text-center text-success font-medium">Instant</td>
                  <td className="py-4 px-6 text-center">Variable</td>
                  <td className="py-4 px-6 text-center">Rate limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Available Models</h2>
          <p className="text-muted-foreground text-center mb-12">
            FAL focuses on the best models, optimized for speed.
          </p>
          <div className="space-y-6">
            {models.map((model, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      {model.name}
                      <span className="bg-brand-muted text-brand px-2 py-1 rounded text-sm font-normal">
                        {model.type}
                      </span>
                    </CardTitle>
                    <div className="text-right">
                      <span className="text-success font-semibold block">{model.cost}</span>
                      <span className="text-sm text-muted-foreground">{model.speed}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Strengths</p>
                      <ul className="space-y-1">
                        {model.strengths.map((s, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-center gap-1">
                            <span className="text-success">✓</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Best For</p>
                      <p className="text-sm text-muted-foreground">{model.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing Calculator</h2>
          <p className="text-muted-foreground text-center mb-12">
            Flux Dev average (~$0.025/image) — varies by model
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Monthly Usage</th>
                  <th className="py-4 px-6 text-center">Monthly Spend</th>
                  <th className="py-4 px-6 text-center">Per Image (avg)</th>
                  <th className="py-4 px-6 text-center">vs Midjourney $30/mo</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{tier.usage}</td>
                    <td className="py-4 px-6 text-center">{tier.monthlySpend}</td>
                    <td className="py-4 px-6 text-center">{tier.perImage}</td>
                    <td className="py-4 px-6 text-center text-success font-medium">
                      {i === 0 ? "92% cheaper" : i === 1 ? "67% cheaper" : i === 2 ? "Similar" : "More volume"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-brand-muted p-6 rounded-xl text-center">
            <p className="text-lg">
              <strong>$10 free credits</strong> = 200-500+ images depending on model choice.
              <br/>
              <span className="text-muted-foreground">Enough to fully evaluate before spending a cent.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">5-Minute Setup Guide</h2>
          <p className="text-muted-foreground text-center mb-12">
            Get your FAL API key and start generating instantly.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-muted rounded-full flex items-center justify-center text-brand-muted-foreground font-bold shrink-0">
                1
              </div>
              <div className="bg-card p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Create FAL Account</h3>
                <p className="text-muted-foreground mb-3">
                  Go to <a href="https://fal.ai" target="_blank" rel="noopener noreferrer" className="text-brand underline">fal.ai</a> and sign up with GitHub or email.
                  You&apos;ll get <strong>$10 free credits</strong> immediately.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-muted rounded-full flex items-center justify-center text-brand-muted-foreground font-bold shrink-0">
                2
              </div>
              <div className="bg-card p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Get API Key</h3>
                <p className="text-muted-foreground mb-3">
                  Go to <a href="https://fal.ai/dashboard/keys" target="_blank" rel="noopener noreferrer" className="text-brand underline">Dashboard → Keys</a> and create a new key.
                  Copy it — this is your FAL API key.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-muted rounded-full flex items-center justify-center text-brand-muted-foreground font-bold shrink-0">
                3
              </div>
              <div className="bg-card p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Start with Free Credits</h3>
                <p className="text-muted-foreground mb-3">
                  Your $10 free credits are already active. No payment method required to start.
                  Add a card later to continue past the free tier.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-muted rounded-full flex items-center justify-center text-brand-muted-foreground font-bold shrink-0">
                4
              </div>
              <div className="bg-card p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Paste into VixPic</h3>
                <p className="text-muted-foreground mb-3">
                  Open VixPic Settings, paste your API key in the FAL field. 
                  Select a FAL model and experience the speed difference.
                </p>
                <Link href="/settings">
                  <Button variant="outline">Go to Settings →</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">When to Use FAL</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-success/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-success-muted-foreground">
                  ✅ FAL Excels At
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Speed-critical applications and real-time generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Batch processing large numbers of images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Interactive tools needing instant feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>High-quality with Flux Pro (DALL-E 3 alternative)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Prototyping and iteration (sub-second with Schnell)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-warning/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning-muted-foreground">
                  ⚠️ Consider Alternatives For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Perfect text rendering (use OpenAI DALL-E 3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Lowest possible cost (Replicate SDXL is cheaper)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Anime-specific fine-tunes (Replicate has more variety)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Maximum model variety (Replicate has 1000+)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand to-brand text-brand-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Lightning Speed?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get $10 free credits and experience sub-second generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://fal.ai/dashboard/keys" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get FAL API Key + $10 Free →
              </Button>
            </a>
            <Link href="/providers">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-brand-foreground text-brand-foreground hover:bg-brand-foreground/10">
                Compare Other Providers
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
