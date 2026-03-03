import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Image Generator Alternatives 2026 | VixPic",
  description: "Compare VixPic with Midjourney, DALL-E, Leonardo AI and more. Find the best AI image generator for your needs with BYOK pricing.",
  keywords: ["Midjourney alternative", "DALL-E alternative", "AI image generator comparison", "BYOK AI tools", "cheap AI image generator"],
};

interface Alternative {
  name: string;
  description: string;
  icon: string;
  href: string;
  pricing: string;
  painPoints: string[];
  vixpicWins: string[];
  comingSoon?: boolean;
}

const alternatives: Alternative[] = [
  {
    name: "Midjourney",
    description: "Discord-based AI art generator known for artistic, stylized outputs.",
    icon: "🎨",
    href: "/alternatives/midjourney",
    pricing: "$10-120/month subscription",
    painPoints: ["Discord-only interface", "Credit expiration", "No API access", "Censorship limits"],
    vixpicWins: ["Web-based interface", "Pay only for what you use", "Full API access", "Your keys, your rules"],
  },
  {
    name: "DALL-E",
    description: "OpenAI's image generator with strong prompt understanding and realistic outputs.",
    icon: "🤖",
    href: "/alternatives/dalle",
    pricing: "$15-115/month via ChatGPT Plus",
    painPoints: ["Bundled with ChatGPT subscription", "Limited generations", "No bulk operations", "Strict content policy"],
    vixpicWins: ["Standalone image tool", "Unlimited with your API key", "Batch generation", "Multiple providers"],
  },
  {
    name: "Leonardo AI",
    description: "Game asset and concept art focused generator with fine-tuning capabilities.",
    icon: "🎮",
    href: "/alternatives/leonardo",
    pricing: "$12-60/month subscription",
    painPoints: ["Token system complexity", "Credits expire monthly", "Limited free tier", "Slow generation queue"],
    vixpicWins: ["Simple API pricing", "No expiration", "Generous free tools", "Direct API = fast"],
  },
  {
    name: "Stable Diffusion",
    description: "Open-source model requiring technical setup or expensive cloud deployment.",
    icon: "⚙️",
    href: "/alternatives/stable-diffusion",
    pricing: "$0-500+/month (hardware/cloud)",
    painPoints: ["Complex setup", "Hardware requirements", "Maintenance overhead", "No support"],
    vixpicWins: ["Zero setup", "No hardware needed", "Managed providers", "Just add API key"],
  },
  {
    name: "Adobe Firefly",
    description: "Adobe's AI generator integrated with Creative Cloud, trained on licensed content.",
    icon: "🔥",
    href: "/alternatives/firefly",
    pricing: "$22-59/month with Creative Cloud",
    painPoints: ["Requires Adobe subscription", "Limited standalone use", "Generative credits cap", "Enterprise-focused"],
    vixpicWins: ["No subscription lock-in", "Independent tool", "Pay per image", "Creator-focused"],
  },
  {
    name: "Canva AI",
    description: "AI image generation built into Canva's design platform.",
    icon: "🎯",
    href: "/alternatives/canva",
    pricing: "$12.99/month with Canva Pro",
    painPoints: ["Tied to Canva ecosystem", "Basic generation options", "Limited model access", "Design-tool first"],
    vixpicWins: ["Dedicated image tool", "Multiple AI models", "Developer API", "Image-first features"],
  },
];

export default function AlternativesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Tired of Expensive{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              AI Image Subscriptions?
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            VixPic is the BYOK (Bring Your Own Key) alternative to Midjourney, DALL-E, and other 
            AI image generators. Pay only for what you use with your own API keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-brand to-info">
                Try Free — No Card Required
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-brand-muted/50 to-info-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">The Problem with AI Image Subscriptions</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "💸", title: "Wasted Credits", desc: "Pay $30/mo, use $5 worth" },
              { icon: "⏰", title: "Monthly Reset", desc: "Use it or lose it mentality" },
              { icon: "🔒", title: "Vendor Lock-in", desc: "Stuck with one provider" },
              { icon: "🚫", title: "Content Limits", desc: "Censored by corporate policy" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Compare VixPic to Popular Alternatives</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            See how VixPic stacks up against the most popular AI image generators on the market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alternatives.map((alt) => (
              <Card 
                key={alt.href}
                className={`border-2 hover:border-brand/20 transition-all hover:shadow-lg relative ${
                  alt.comingSoon ? "opacity-75" : ""
                }`}
              >
                {alt.comingSoon && (
                  <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
                    Coming Soon
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-brand-muted rounded-xl flex items-center justify-center text-2xl">
                      {alt.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{alt.name}</CardTitle>
                      <p className="text-sm text-warning font-medium">{alt.pricing}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {alt.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-destructive uppercase mb-2">Pain Points</p>
                      <ul className="space-y-1">
                        {alt.painPoints.slice(0, 2).map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-destructive">✗</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-success uppercase mb-2">VixPic Wins</p>
                      <ul className="space-y-1">
                        {alt.vixpicWins.slice(0, 2).map((win, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-success">✓</span>
                            {win}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {!alt.comingSoon && (
                    <div className="mt-4 pt-4 border-t">
                      <Link href={alt.href}>
                        <Button variant="outline" className="w-full">
                          VixPic vs {alt.name} →
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BYOK Explainer */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What is BYOK?</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Bring Your Own Key means you connect your own API keys from providers like OpenAI, Replicate, or FAL. 
            You pay them directly at wholesale rates — we never see your keys or mark up the cost.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔑
              </div>
              <h3 className="font-bold text-lg mb-2">Your Keys</h3>
              <p className="text-muted-foreground">Add your API keys from OpenAI, Replicate, FAL, or other providers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                💰
              </div>
              <h3 className="font-bold text-lg mb-2">Direct Billing</h3>
              <p className="text-muted-foreground">Pay providers directly. No middleman markup. Typical savings: 70-90%.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🛡️
              </div>
              <h3 className="font-bold text-lg mb-2">Edge Privacy</h3>
              <p className="text-muted-foreground">Keys stay in your browser. We use edge proxies — your secrets never touch our servers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Monthly Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-4">If you generate...</th>
                  <th className="py-4 px-4 text-center">Midjourney</th>
                  <th className="py-4 px-4 text-center">DALL-E 3</th>
                  <th className="py-4 px-4 text-center bg-brand-muted/50 rounded-t-lg">VixPic (BYOK)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">50 images/month</td>
                  <td className="py-4 px-4 text-center">$10</td>
                  <td className="py-4 px-4 text-center">$20*</td>
                  <td className="py-4 px-4 text-center bg-brand-muted/50 font-bold text-success">~$2</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">200 images/month</td>
                  <td className="py-4 px-4 text-center">$30</td>
                  <td className="py-4 px-4 text-center">$20*</td>
                  <td className="py-4 px-4 text-center bg-brand-muted/50 font-bold text-success">~$8</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">1,000 images/month</td>
                  <td className="py-4 px-4 text-center">$60</td>
                  <td className="py-4 px-4 text-center">$115*</td>
                  <td className="py-4 px-4 text-center bg-brand-muted/50 font-bold text-success">~$40</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">5,000 images/month</td>
                  <td className="py-4 px-4 text-center">$120</td>
                  <td className="py-4 px-4 text-center">Not available</td>
                  <td className="py-4 px-4 text-center bg-brand-muted/50 rounded-b-lg font-bold text-success">~$200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            *DALL-E 3 pricing via ChatGPT Plus ($20/mo) with limited generations, or API pricing.
            VixPic costs based on SDXL via Replicate (~$0.04/image).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand to-info text-brand-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Overpaying?</h2>
          <p className="text-xl opacity-90 mb-8">
            Try VixPic free with our built-in tools. Add your API keys when you&apos;re ready for unlimited generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Free — No API Key Needed
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-brand-foreground text-brand-foreground hover:bg-background/10">
                View LTD Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
