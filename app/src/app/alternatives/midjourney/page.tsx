import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Midjourney Alternative 2026 — VixPic (BYOK, No Discord) | VixPic",
  description: "Looking for a Midjourney alternative without Discord? VixPic offers BYOK pricing, web interface, API access, and no credit expiration. Save 70%+ on AI image generation.",
  keywords: ["Midjourney alternative", "Midjourney replacement", "AI image generator no Discord", "BYOK image generator", "cheap Midjourney alternative", "Midjourney free alternative"],
};

const comparisonData = [
  { feature: "Interface", midjourney: "Discord only", vixpic: "Modern web app", winner: "vixpic" },
  { feature: "Pricing Model", midjourney: "Monthly subscription ($10-120)", vixpic: "Pay per use (BYOK) or LTD", winner: "vixpic" },
  { feature: "Credit Expiration", midjourney: "Monthly reset", vixpic: "Never expires", winner: "vixpic" },
  { feature: "API Access", midjourney: "No official API", vixpic: "Full API included", winner: "vixpic" },
  { feature: "Multiple Models", midjourney: "Midjourney only", vixpic: "SDXL, DALL-E, Flux & more", winner: "vixpic" },
  { feature: "Batch Generation", midjourney: "Limited", vixpic: "Yes, with CSV/bulk", winner: "vixpic" },
  { feature: "Image Quality", midjourney: "Excellent artistic style", vixpic: "Varies by model", winner: "midjourney" },
  { feature: "Community", midjourney: "Large Discord community", vixpic: "Growing", winner: "midjourney" },
  { feature: "Learning Curve", midjourney: "Discord commands", vixpic: "Intuitive web UI", winner: "vixpic" },
  { feature: "Privacy", midjourney: "Public by default", vixpic: "Private, your keys", winner: "vixpic" },
  { feature: "Content Policy", midjourney: "Strict, corporate", vixpic: "Your provider, your rules", winner: "vixpic" },
  { feature: "Commercial Use", midjourney: "Paid plans only", vixpic: "Yes, all plans", winner: "vixpic" },
];

const faqs = [
  {
    q: "Why should I switch from Midjourney to VixPic?",
    a: "If you're frustrated with Discord-only access, credit expiration, lack of API, or high monthly costs, VixPic solves all of these. You bring your own API keys, pay only for what you use, and get a modern web interface with batch generation and gallery management."
  },
  {
    q: "Is VixPic as good as Midjourney for art?",
    a: "Midjourney has its own distinctive artistic style that's hard to replicate. However, VixPic gives you access to multiple models (SDXL, Flux, DALL-E) that can produce stunning results. For many use cases like product photos, marketing assets, and social content, the quality is comparable or better."
  },
  {
    q: "How much can I save switching to VixPic?",
    a: "Typical savings are 70-90%. If you generate 200 images/month, Midjourney costs $30. With VixPic using SDXL on Replicate, the same would cost ~$8 in API fees. Heavy users save even more."
  },
  {
    q: "Do I need technical skills to use VixPic?",
    a: "No. Adding an API key is as simple as pasting it into settings. The interface is designed for creators, not developers. If you can use Canva, you can use VixPic."
  },
  {
    q: "Can I use VixPic without an API key?",
    a: "Yes! VixPic includes 9+ free tools (compress, resize, crop, background removal, etc.) that work without any API key. For AI generation, you'll need to add a key from providers like Replicate, OpenAI, or FAL."
  },
  {
    q: "Is my API key safe with VixPic?",
    a: "Yes. VixPic uses edge proxies — your API key never touches our servers. It stays encrypted in your browser's local storage and goes directly to the provider. We literally cannot see your key."
  },
];

export default function MidjourneyAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎨 #1 Midjourney Alternative for BYOK Users
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Best{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Midjourney Alternative
            </span>
            {" "}in 2026
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tired of Discord commands, credit expiration, and $30/month subscriptions? 
            VixPic gives you a modern web interface, BYOK pricing, and access to multiple AI models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600">
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

      {/* Pain Points */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-red-800">
            Common Frustrations with Midjourney
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "💬",
                title: "Discord-Only Interface",
                desc: "Have to learn slash commands, fight with threads, and work in a chat app instead of a proper image tool."
              },
              {
                icon: "💸",
                title: "Wasted Subscription Money",
                desc: "Pay $30/month whether you use 10 images or 200. Busy month? Pay more. Slow month? Money wasted."
              },
              {
                icon: "⏰",
                title: "Credits Reset Monthly",
                desc: "Use it or lose it. Your unused fast hours vanish at month end. No rollover, no refunds."
              },
              {
                icon: "🔒",
                title: "No API Access",
                desc: "Want to integrate into your workflow or build automation? Too bad — no official API available."
              },
              {
                icon: "👁️",
                title: "Public by Default",
                desc: "Your generations are visible to everyone in the Discord. Stealth mode costs extra."
              },
              {
                icon: "🚫",
                title: "Strict Content Policy",
                desc: "Corporate content moderation. Banned words, restricted concepts, no control over your creative freedom."
              },
            ].map((pain, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-red-200">
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
            How VixPic Solves These Problems
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🖥️",
                title: "Modern Web Interface",
                desc: "Clean, purpose-built app for image generation. No chat commands. Just type, generate, download."
              },
              {
                icon: "🔑",
                title: "BYOK = Pay Only What You Use",
                desc: "Bring your own API key. Generate 5 images? Pay for 5. Generate 500? Pay for 500. No wasted money."
              },
              {
                icon: "♾️",
                title: "Credits Never Expire",
                desc: "Your API balance is yours. Use it this month or next year — it's your account, not a subscription."
              },
              {
                icon: "⚡",
                title: "Full API Included",
                desc: "Build workflows, automate generation, integrate with your tools. Developer-friendly from day one."
              },
              {
                icon: "🛡️",
                title: "Private by Default",
                desc: "Your generations stay on your device. We use edge proxies — images never touch our servers."
              },
              {
                icon: "🎯",
                title: "Multiple Providers & Models",
                desc: "Choose from SDXL, DALL-E, Flux, and more. Switch models based on your needs, not our limits."
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
          <h2 className="text-3xl font-bold text-center mb-4">VixPic vs Midjourney: Full Comparison</h2>
          <p className="text-gray-600 text-center mb-12">
            An honest look at how VixPic compares to Midjourney across all major features.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Midjourney</th>
                  <th className="py-4 px-6 text-center bg-purple-50">VixPic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className={`py-4 px-6 text-center ${row.winner === 'midjourney' ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                      {row.midjourney}
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
            VixPic wins on 10 of 12 features. Midjourney excels in artistic style and community size.
          </p>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Real Cost Comparison</h2>
          <p className="text-gray-600 text-center mb-12">
            How much does it actually cost to generate images? Let&apos;s compare.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Casual User</CardTitle>
                <p className="text-sm text-gray-600">~50 images/month</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Midjourney Basic</p>
                    <p className="text-2xl font-bold">$10/mo</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">VixPic (BYOK)</p>
                    <p className="text-2xl font-bold text-green-600">~$2/mo</p>
                  </div>
                  <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg font-semibold">
                    Save $96/year
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-300 shadow-lg">
              <CardHeader className="text-center bg-purple-50 -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">
                <CardTitle className="text-lg">Regular Creator</CardTitle>
                <p className="text-sm text-gray-600">~200 images/month</p>
              </CardHeader>
              <CardContent className="text-center pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Midjourney Standard</p>
                    <p className="text-2xl font-bold">$30/mo</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">VixPic (BYOK)</p>
                    <p className="text-2xl font-bold text-green-600">~$8/mo</p>
                  </div>
                  <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg font-semibold">
                    Save $264/year
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Power User</CardTitle>
                <p className="text-sm text-gray-600">~1000 images/month</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Midjourney Pro</p>
                    <p className="text-2xl font-bold">$60/mo</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">VixPic (BYOK)</p>
                    <p className="text-2xl font-bold text-green-600">~$40/mo</p>
                  </div>
                  <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg font-semibold">
                    Save $240/year
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            VixPic costs based on SDXL via Replicate (~$0.04/image). Actual costs vary by model and provider.
          </p>
        </div>
      </section>

      {/* When Midjourney Is Better */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Honest Take: When Midjourney Is Still Better
          </h2>
          <div className="bg-white p-8 rounded-xl border border-orange-200">
            <p className="text-gray-700 mb-6">
              We believe in honesty. Here&apos;s when Midjourney might be the better choice:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <div>
                  <strong>You love the Midjourney aesthetic</strong> — Their model has a unique artistic style that&apos;s hard to replicate. If that specific look is essential to your work, stick with MJ.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <div>
                  <strong>You enjoy the community</strong> — The Discord has millions of users sharing prompts, techniques, and inspiration. VixPic&apos;s community is smaller.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <div>
                  <strong>You don&apos;t want to manage API keys</strong> — If &quot;bring your own key&quot; sounds like a hassle, Midjourney&apos;s all-in-one subscription is simpler.
                </div>
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              That said, if cost, privacy, API access, or interface matter to you — VixPic wins.
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch from Midjourney?</h2>
          <p className="text-xl opacity-90 mb-8">
            Try VixPic free today. No credit card, no Discord account required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Generating Free
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
