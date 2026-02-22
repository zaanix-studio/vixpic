import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenAI DALL-E 3 API Guide — Setup & Pricing | VixPic",
  description: "Use OpenAI's DALL-E 3 API with VixPic. Get the best text-in-image AI at wholesale prices. Complete setup guide and pricing breakdown.",
  keywords: ["OpenAI API", "DALL-E 3 API", "DALL-E pricing", "OpenAI image generation", "BYOK DALL-E", "DALL-E 3 cost"],
};

const models = [
  {
    name: "DALL-E 3",
    quality: "HD",
    sizes: ["1024×1024", "1024×1792", "1792×1024"],
    cost: "$0.080 - $0.120",
    description: "The flagship model. Best prompt adherence, excellent text rendering, photorealistic capability.",
    strengths: ["Best text-in-image", "Follows complex prompts", "Safe for commercial use"],
    bestFor: "Logos, product mockups, social media graphics, professional content",
  },
  {
    name: "DALL-E 3",
    quality: "Standard",
    sizes: ["1024×1024", "1024×1792", "1792×1024"],
    cost: "$0.040 - $0.080",
    description: "Same model, faster generation. Slightly reduced detail but excellent for iteration.",
    strengths: ["Faster generation", "Lower cost", "Same capabilities"],
    bestFor: "Quick iterations, drafts, high-volume generation",
  },
  {
    name: "DALL-E 2",
    quality: "Standard",
    sizes: ["256×256", "512×512", "1024×1024"],
    cost: "$0.016 - $0.020",
    description: "Legacy model. Lower quality but very cheap. Good for simple images and testing.",
    strengths: ["Cheapest option", "Fast", "Simple prompts"],
    bestFor: "Testing, simple icons, budget-constrained projects",
  },
];

const pricingTiers = [
  { usage: "10 images/month", monthlySpend: "~$0.80", perImage: "$0.08" },
  { usage: "50 images/month", monthlySpend: "~$4.00", perImage: "$0.08" },
  { usage: "200 images/month", monthlySpend: "~$16.00", perImage: "$0.08" },
  { usage: "1,000 images/month", monthlySpend: "~$80.00", perImage: "$0.08" },
];

export default function OpenAIProviderPage() {
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
            <Link href="/providers" className="text-purple-600 font-medium hidden sm:block">Providers</Link>
            <Link href="/alternatives" className="text-gray-600 hover:text-gray-900 hidden sm:block">Alternatives</Link>
            <Link href="/generate"><Button>Get Started</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🤖 Best for Text & Quality
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              OpenAI
            </span>
            {" "}DALL-E API
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The gold standard for AI image generation. DALL-E 3 offers unmatched text rendering, 
            prompt adherence, and commercial-safe outputs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-emerald-600">
                Get OpenAI API Key →
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

      {/* Why OpenAI */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose OpenAI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📝",
                title: "Best Text-in-Image",
                desc: "DALL-E 3 renders text beautifully. Signs, logos, posters — actually readable. No other model comes close."
              },
              {
                icon: "🎯",
                title: "Follows Complex Prompts",
                desc: "Describe exactly what you want. DALL-E 3 understands nuance, composition, and creative direction better than any competitor."
              },
              {
                icon: "🏢",
                title: "Enterprise-Grade Safety",
                desc: "OpenAI's content filters ensure commercial-safe outputs. Less risk for professional and business use."
              },
              {
                icon: "⚡",
                title: "Reliable & Fast",
                desc: "99.9%+ uptime. Consistent generation times. The infrastructure you'd expect from OpenAI."
              },
              {
                icon: "🔑",
                title: "Easy API Setup",
                desc: "5-minute signup. $5 free credits for new accounts. The smoothest onboarding in the industry."
              },
              {
                icon: "📊",
                title: "Transparent Billing",
                desc: "Clear per-image pricing. No hidden fees. Monitor usage in real-time on OpenAI dashboard."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-green-200">
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
          <h2 className="text-3xl font-bold text-center mb-4">Available Models</h2>
          <p className="text-gray-600 text-center mb-12">
            OpenAI offers DALL-E 3 (recommended) and DALL-E 2 (budget option).
          </p>
          <div className="space-y-6">
            {models.map((model, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      {model.name}
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-normal">
                        {model.quality}
                      </span>
                    </CardTitle>
                    <span className="text-green-600 font-semibold">{model.cost}/image</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Sizes</p>
                      <div className="flex flex-wrap gap-1">
                        {model.sizes.map((size, j) => (
                          <span key={j} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
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
            DALL-E 3 Standard quality, 1024×1024 (~$0.08/image)
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
                      {i === 0 ? "Save $29.20" : i === 1 ? "Save $26" : i === 2 ? "Save $14" : "2.7x more images"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-100 p-6 rounded-xl text-center">
            <p className="text-lg">
              <strong>New accounts get $5 free credits</strong> — that&apos;s ~62 DALL-E 3 images to test.
            </p>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">5-Minute Setup Guide</h2>
          <p className="text-gray-600 text-center mb-12">
            Get your OpenAI API key and start generating.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">
                1
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Create OpenAI Account</h3>
                <p className="text-gray-600 mb-3">
                  Go to <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">platform.openai.com/signup</a> and create a free account. 
                  New accounts receive $5 in free credits.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">
                2
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Generate API Key</h3>
                <p className="text-gray-600 mb-3">
                  Navigate to <strong>API Keys</strong> in the left sidebar, click <strong>Create new secret key</strong>. 
                  Name it &quot;VixPic&quot; and copy the key immediately (it won&apos;t be shown again).
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">
                3
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Add Billing (Optional)</h3>
                <p className="text-gray-600 mb-3">
                  To use beyond free credits, go to <strong>Billing → Payment methods</strong> and add a card. 
                  Set usage limits to control spending.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">
                4
              </div>
              <div className="bg-white p-6 rounded-xl border flex-1">
                <h3 className="font-bold text-lg mb-2">Paste into VixPic</h3>
                <p className="text-gray-600 mb-3">
                  Open VixPic Settings, paste your API key in the OpenAI field. Keys are stored locally in your browser — 
                  we never see them.
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">When to Use OpenAI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  ✅ OpenAI Excels At
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Images with readable text (logos, signs, posters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Following complex, specific prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Photorealistic images of real-world scenes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Professional/commercial content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Product mockups and marketing materials</span>
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
                    <span>Anime/stylized art (try Replicate with SDXL anime models)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Maximum speed (try FAL Lightning)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Lowest possible cost (try Replicate SDXL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Experimental/edgy content (OpenAI has strict filters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Custom fine-tuned models (not available on OpenAI)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for DALL-E 3?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get $5 free credits with a new OpenAI account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get OpenAI API Key →
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

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          © 2026 VixPic. All rights reserved. OpenAI and DALL-E are trademarks of OpenAI Inc.
        </div>
      </footer>
    </div>
  );
}
