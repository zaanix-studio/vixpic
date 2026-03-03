import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Replicate API Guide — SDXL, Flux & 1000+ Models | VixPic",
  description: "Use Replicate's API with VixPic for access to SDXL, Flux, and thousands of community models. The cheapest way to generate AI images at scale.",
  keywords: ["Replicate API", "SDXL API", "Flux API", "cheap AI images", "Stable Diffusion API", "BYOK Replicate"],
};

const models = [
  {
    name: "SDXL",
    creator: "stability-ai",
    cost: "~$0.01-0.02/image",
    description: "The workhorse of open-source image generation. Fast, cheap, and consistently good results.",
    strengths: ["Cheapest quality option", "Fast generation", "Great prompt flexibility"],
    bestFor: "Budget users, high-volume generation, general purpose",
  },
  {
    name: "Flux (Schnell)",
    creator: "black-forest-labs",
    cost: "~$0.003/image",
    description: "Distilled Flux model, ultra-fast. Quality tradeoff for speed. Great for iterations.",
    strengths: ["Extremely cheap", "Sub-second generation", "Good for drafts"],
    bestFor: "Quick iterations, testing prompts, budget workflows",
  },
  {
    name: "Flux (Dev)",
    creator: "black-forest-labs",
    cost: "~$0.025/image",
    description: "Full Flux model for open-source. Excellent quality approaching DALL-E 3.",
    strengths: ["Near DALL-E quality", "Great prompt adherence", "Open weights"],
    bestFor: "High-quality needs on a budget, professional work",
  },
  {
    name: "Community Fine-tunes",
    creator: "Various",
    cost: "~$0.01-0.05/image",
    description: "Thousands of specialized models: anime, photorealistic, artistic styles, characters, and more.",
    strengths: ["Style variety", "Specialized outputs", "LoRA support"],
    bestFor: "Specific art styles, anime, consistent characters",
  },
];

const pricingTiers = [
  { usage: "100 images/month", monthlySpend: "~$1-2", perImage: "$0.01-0.02" },
  { usage: "500 images/month", monthlySpend: "~$5-10", perImage: "$0.01-0.02" },
  { usage: "2,000 images/month", monthlySpend: "~$20-40", perImage: "$0.01-0.02" },
  { usage: "10,000 images/month", monthlySpend: "~$100-200", perImage: "$0.01-0.02" },
];

export default function ReplicateProviderPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔄 Best for Price & Variety
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Replicate
            </span>
            {" "}— 1000+ AI Models
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Run open-source AI models via API. SDXL, Flux, anime models, artistic styles — 
            the largest selection at the lowest prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://replicate.com/signin" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                Get Replicate API Key →
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

      {/* Why Replicate */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Replicate?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "💰",
                title: "Cheapest Quality Option",
                desc: "SDXL at $0.01/image. Generate 100 images for $1. No other provider comes close on price-to-quality ratio."
              },
              {
                icon: "🎨",
                title: "1000+ Models",
                desc: "Browse the Replicate model zoo: anime specialists, photorealistic experts, artistic styles, character generators, and more."
              },
              {
                icon: "🧬",
                title: "LoRA & Fine-tunes",
                desc: "Access community fine-tuned models. Want anime eyes? Specific character styles? There's probably a model for that."
              },
              {
                icon: "⚡",
                title: "Fast Generation",
                desc: "Cold starts aside, generations complete in 2-10 seconds. Flux Schnell can be sub-second."
              },
              {
                icon: "🔓",
                title: "Open Source Models",
                desc: "Run the same models you could run locally — without the hardware. SDXL, Flux, and community favorites."
              },
              {
                icon: "📊",
                title: "Pay Per Second",
                desc: "Billed by compute time, not per image. Efficient prompts = lower costs. No subscription required."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-blue-200">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Models</h2>
          <p className="text-gray-600 text-center mb-12">
            Replicate hosts thousands of models. Here are the highlights.
          </p>
          <div className="space-y-6">
            {models.map((model, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      {model.name}
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-normal">
                        {model.creator}
                      </span>
                    </CardTitle>
                    <span className="text-green-600 font-semibold">{model.cost}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Strengths</p>
                      <ul className="space-y-1">
                        {model.strengths.map((s, j) => (
                          <li key={j} className="text-sm text-gray-600 flex items-center gap-1">
                            <span className="text-green-600">✓</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Best For</p>
                      <p className="text-sm text-gray-600">{model.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing Calculator</h2>
          <p className="text-gray-600 text-center mb-12">
            SDXL via Replicate (~$0.01-0.02/image)
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Monthly Usage</th>
                  <th className="py-4 px-6 text-center">Monthly Spend</th>
                  <th className="py-4 px-6 text-center">Per Image</th>
                  <th className="py-4 px-6 text-center">vs Midjourney $30/mo</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{tier.usage}</td>
                    <td className="py-4 px-6 text-center">{tier.monthlySpend}</td>
                    <td className="py-4 px-6 text-center">{tier.perImage}</td>
                    <td className="py-4 px-6 text-center text-green-600 font-medium">
                      {i === 0 ? "97% cheaper" : i === 1 ? "83% cheaper" : i === 2 ? "33% cheaper" : "3x more images"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl text-center">
            <p className="text-lg">
              <strong>At $0.015/image</strong>, generate 2,000 images before you spend what Midjourney costs in one month.
            </p>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">5-Minute Setup Guide</h2>
          <p className="text-gray-600 text-center mb-12">
            Get your Replicate API key and access 1000+ models.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">
                1
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Create Replicate Account</h3>
                <p className="text-gray-600 mb-3">
                  Go to <a href="https://replicate.com/signin" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">replicate.com/signin</a> and sign up with GitHub or email.
                  Free to create, pay-as-you-go billing.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">
                2
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Get API Token</h3>
                <p className="text-gray-600 mb-3">
                  Go to <strong>Account Settings → API tokens</strong> and create a new token.
                  Copy it — this is your Replicate API key.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">
                3
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Add Payment Method</h3>
                <p className="text-gray-600 mb-3">
                  Go to <strong>Billing</strong> and add a card. You&apos;re only charged for what you use.
                  Set a spending limit to control costs.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">
                4
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Paste into VixPic</h3>
                <p className="text-gray-600 mb-3">
                  Open VixPic Settings, paste your API token in the Replicate field. 
                  Now you can access any Replicate model through VixPic.
                </p>
                <Link href="/settings">
                  <Button variant="outline">Go to Settings →</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Zoo */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Explore the Model Zoo</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { category: "Photorealistic", examples: "SDXL, RealVisXL, Juggernaut XL" },
              { category: "Anime & Manga", examples: "AnimagineXL, Counterfeit, NovelAI" },
              { category: "Artistic Styles", examples: "DreamShaper, OpenJourney, Deliberate" },
              { category: "Character Gen", examples: "InstantID, FaceSwap, IP-Adapter" },
              { category: "Upscaling", examples: "Real-ESRGAN, GFPGAN, SwinIR" },
              { category: "Experimental", examples: "Flux, PixArt, Playground v2.5" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border">
                <h3 className="font-bold mb-2">{item.category}</h3>
                <p className="text-sm text-gray-600">{item.examples}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            <a href="https://replicate.com/explore" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Browse all 1000+ models on Replicate →
            </a>
          </p>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">When to Use Replicate</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  ✅ Replicate Excels At
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>High-volume generation on a budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Anime, manga, and stylized art</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Accessing community fine-tunes and LoRAs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Testing and iteration (cheap experiments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Specific artistic styles not available elsewhere</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  ⚠️ Consider Alternatives For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Perfect text rendering (use OpenAI DALL-E 3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Guaranteed fast response (use FAL for speed-critical)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Enterprise compliance needs (OpenAI has better safety)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Cold start sensitivity (first requests can be slow)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for 1000+ Models?</h2>
          <p className="text-xl opacity-90 mb-8">
            The cheapest way to generate AI images at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://replicate.com/signin" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get Replicate API Key →
              </Button>
            </a>
            <Link href="/providers">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Compare Other Providers
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
