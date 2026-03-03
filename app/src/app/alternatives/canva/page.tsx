import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canva AI Alternative 2026 — VixPic (BYOK, Unlimited Generation) | VixPic",
  description: "Looking for a Canva AI alternative without Magic Media credit limits? VixPic offers BYOK pricing, more AI models, and unlimited generation at a fraction of the cost.",
  keywords: ["Canva AI alternative", "Magic Media alternative", "Canva Text to Image alternative", "AI image generator without Canva", "BYOK image generator", "unlimited AI image generation"],
};

const comparisonData = [
  { feature: "Pricing Model", canva: "Canva Pro required ($12.99/mo)", vixpic: "BYOK or LTD ($29 one-time)", winner: "vixpic" },
  { feature: "AI Generation Limits", canva: "500 Magic Media/month (Pro)", vixpic: "Unlimited with API key", winner: "vixpic" },
  { feature: "AI Models Available", canva: "Canva's proprietary model", vixpic: "DALL-E 3, SDXL, Flux & more", winner: "vixpic" },
  { feature: "Design Integration", canva: "Excellent — built into canvas", vixpic: "Export to any tool", winner: "canva" },
  { feature: "Image Quality", canva: "Good — improving rapidly", vixpic: "Excellent — premium models", winner: "vixpic" },
  { feature: "Text in Images", canva: "Limited", vixpic: "Excellent with DALL-E 3", winner: "vixpic" },
  { feature: "Batch Generation", canva: "No", vixpic: "Yes, with CSV/bulk", winner: "vixpic" },
  { feature: "API Access", canva: "No (Canva Apps only)", vixpic: "Yes, all plans", winner: "vixpic" },
  { feature: "Template Library", canva: "Massive — millions of templates", vixpic: "None (image generation only)", winner: "canva" },
  { feature: "Background Removal", canva: "Yes (Pro)", vixpic: "Yes (free)", winner: "tie" },
  { feature: "Photo Editing", canva: "Full suite", vixpic: "Basic + free tools", winner: "canva" },
  { feature: "Privacy", canva: "Canva servers", vixpic: "Edge proxy, your keys", winner: "vixpic" },
];

const faqs = [
  {
    q: "Why switch from Canva AI to VixPic?",
    a: "If you primarily need AI image generation and hit Canva's 500 Magic Media limit, VixPic offers unlimited generation with BYOK. You'll also get access to better models like DALL-E 3 and Flux that produce higher quality results."
  },
  {
    q: "Does VixPic replace Canva completely?",
    a: "No — and that's intentional. VixPic focuses on AI image generation, while Canva is a full design platform. Many users use VixPic for generation and import the results into Canva for final design work."
  },
  {
    q: "How does image quality compare?",
    a: "Canva's Magic Media has improved significantly but still trails DALL-E 3 and Flux in prompt adherence, detail, and artistic quality. For critical images, VixPic's premium models produce noticeably better results."
  },
  {
    q: "Can I use VixPic with Canva?",
    a: "Absolutely! Generate images in VixPic, download them, and import into Canva for your design work. Many creators use this workflow to bypass Magic Media limits while keeping Canva's excellent design tools."
  },
  {
    q: "What about Canva's new AI features like Magic Eraser?",
    a: "Canva's editing features (Magic Eraser, Background Remover, etc.) are excellent and included with Pro. VixPic offers similar tools for free but focuses primarily on generation. For heavy editing, Canva's integration is smoother."
  },
  {
    q: "Is VixPic cheaper than Canva Pro?",
    a: "For AI generation alone, absolutely. Canva Pro is $155/year. VixPic LTD is $29-149 once, forever. But Canva Pro includes the entire design platform — so value depends on what you need. If you just need generation, VixPic wins."
  },
];

export default function CanvaAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎯 No Magic Media Limits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Beyond{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Canva AI
            </span>
            {" "}Limits
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hit your 500 Magic Media limit? Need better AI models than Canva offers? 
            VixPic gives you unlimited DALL-E 3 and Flux generation at a fraction of the cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-500">
                Try VixPic Free
              </Button>
            </Link>
            <Link href="#comparison">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See Full Comparison ↓
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-cyan-800">
            The Canva AI Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎟️",
                title: "500 Credits Vanish Fast",
                desc: "Magic Media gives you 500 generations per month with Pro. Sounds like a lot — until you're iterating on designs. Power users burn through this in days."
              },
              {
                icon: "🤷",
                title: "One Model, Take It or Leave It",
                desc: "Canva uses their own AI model. No DALL-E 3 quality. No Flux creativity. No choice. You get what they give you."
              },
              {
                icon: "📦",
                title: "Design Platform Tax",
                desc: "Just want AI generation? You still need Canva Pro at $12.99/month. You're paying for the whole platform when you just need images."
              },
              {
                icon: "🎨",
                title: "Good, Not Great Quality",
                desc: "Canva's AI has improved but still produces \"Canva-ish\" results. Compare to DALL-E 3 or Flux and the difference is obvious."
              },
              {
                icon: "🚫",
                title: "No API Access",
                desc: "Can't automate, can't integrate, can't build workflows. Everything stays inside Canva's walled garden."
              },
              {
                icon: "📝",
                title: "Weak Text Rendering",
                desc: "Need text in your images? Canva's AI struggles. DALL-E 3 excels at text — it's not even close."
              },
            ].map((pain, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-cyan-200">
                <div className="text-3xl mb-3">{pain.icon}</div>
                <h3 className="font-bold text-lg mb-2">{pain.title}</h3>
                <p className="text-gray-600">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VixPic Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-green-800">
            VixPic: Unlimited AI Generation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "♾️",
                title: "No Credit Limits Ever",
                desc: "BYOK means unlimited generation. Generate 50 or 5,000 images — pay only for actual API usage. No monthly caps."
              },
              {
                icon: "🎨",
                title: "Premium AI Models",
                desc: "Access DALL-E 3, SDXL, Flux, and more. Choose the best model for each project. Quality Canva can't match."
              },
              {
                icon: "💰",
                title: "$29 Once, Forever",
                desc: "LTD pricing means no subscriptions. That's 2 months of Canva Pro for lifetime access to better AI."
              },
              {
                icon: "📝",
                title: "Perfect Text in Images",
                desc: "DALL-E 3 renders text beautifully. Logos, signs, typography — actually readable, actually useful."
              },
              {
                icon: "⚡",
                title: "API + Automation Ready",
                desc: "Build workflows, batch process, integrate with your tools. No walled garden restrictions."
              },
              {
                icon: "🔗",
                title: "Works WITH Canva",
                desc: "Generate in VixPic, finish in Canva. Best of both worlds — unlimited AI plus Canva's design tools."
              },
            ].map((solution, i) => (
              <div key={i} className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="text-3xl mb-3">{solution.icon}</div>
                <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section id="comparison" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">VixPic vs Canva AI: Full Comparison</h2>
          <p className="text-gray-600 text-center mb-12">
            An honest look at how VixPic compares for AI image generation.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Canva AI</th>
                  <th className="py-4 px-6 text-center bg-purple-50">VixPic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className={`py-4 px-6 text-center ${row.winner === 'canva' ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                      {row.canva}
                    </td>
                    <td className={`py-4 px-6 text-center bg-purple-50 ${row.winner === 'vixpic' ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                      {row.vixpic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            VixPic wins on AI generation. Canva excels as a full design platform.
          </p>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Real Cost of Canva AI</h2>
          <p className="text-gray-600 text-center mb-12">
            What are you actually paying for AI image generation?
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-cyan-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Canva Pro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Monthly cost</span>
                    <span className="font-semibold">$12.99/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual cost</span>
                    <span className="font-semibold text-cyan-600">$155/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Magic Media limit</span>
                    <span className="font-semibold">500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost per image</span>
                    <span className="font-semibold">$0.26</span>
                  </div>
                  <div className="border-t pt-4 mt-4 text-sm text-gray-600">
                    <p>If you max out credits, $155/yr ÷ 6,000 images = $0.026/image</p>
                    <p className="mt-2">But you also pay for the design platform.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-300 shadow-lg">
              <CardHeader className="bg-green-50 -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🟢</span>
                  VixPic (BYOK)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>LTD (one-time)</span>
                    <span className="font-semibold text-green-600">$29-149</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual cost</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Generation limit</span>
                    <span className="font-semibold text-green-600">Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span>API cost per image</span>
                    <span className="font-semibold">~$0.02-0.08</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-green-800 font-medium">
                      Generate 500 images: ~$10-40 total
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      vs $155/year Canva Pro subscription
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 bg-blue-50 p-6 rounded-xl text-center">
            <p className="text-lg">
              <strong>The Math:</strong> At BYOK rates (~$0.04/image), you can generate 3,875 images before you match Canva Pro&apos;s annual cost.
              <br/>
              <span className="text-gray-600">That&apos;s 6.5x Canva&apos;s monthly limit — with better quality models.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Combo Play */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            The Power Combo: VixPic + Canva
          </h2>
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <p className="text-gray-700 mb-6 text-lg text-center">
              You don&apos;t have to choose. Many creators use both:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  1️⃣
                </div>
                <h3 className="font-bold mb-2">Generate in VixPic</h3>
                <p className="text-gray-600 text-sm">Use DALL-E 3 or Flux for premium AI generation. No limits.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  2️⃣
                </div>
                <h3 className="font-bold mb-2">Download & Import</h3>
                <p className="text-gray-600 text-sm">Get your high-quality images and bring them into Canva.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  3️⃣
                </div>
                <h3 className="font-bold mb-2">Design in Canva</h3>
                <p className="text-gray-600 text-sm">Use Canva&apos;s templates, text tools, and design features to finish.</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                <strong>Result:</strong> Unlimited high-quality AI images + Canva&apos;s design power
              </p>
              <p className="text-sm text-gray-500">
                Works with Canva Free too — save $155/year and get better AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When Canva Is Better */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Honest Take: When Canva AI Is Better
          </h2>
          <div className="bg-white p-8 rounded-xl border border-cyan-200">
            <p className="text-gray-700 mb-6">
              We believe in honesty. Here&apos;s when Canva is the right choice:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">→</span>
                <div>
                  <strong>You use Canva for everything</strong> — If Canva is your main design tool, Magic Media&apos;s integration is seamless. Generate → design in one place.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">→</span>
                <div>
                  <strong>500 generations is plenty for you</strong> — Casual users rarely hit the limit. If you generate 10-20 images/week, Canva Pro&apos;s limit is fine.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">→</span>
                <div>
                  <strong>You need the full platform</strong> — Templates, Brand Kit, team features, presentations, social scheduling — Canva Pro includes everything. VixPic is just images.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">→</span>
                <div>
                  <strong>You&apos;re non-technical</strong> — Canva is dead simple. VixPic&apos;s BYOK setup requires getting API keys, which takes 5 minutes but may feel technical to some.
                </div>
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              For power users who hit limits, want better quality, or need API access — VixPic is the clear winner.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Unlimited AI Generation?</h2>
          <p className="text-xl opacity-90 mb-8">
            Stop counting credits. Start creating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Try VixPic Free
              </Button>
            </Link>
            <Link href="/alternatives">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Compare Other Alternatives
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
