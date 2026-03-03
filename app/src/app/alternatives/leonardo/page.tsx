import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Leonardo.ai Alternative 2026 — VixPic (BYOK, No Credits) | VixPic",
  description: "Looking for a Leonardo.ai alternative without token limits? VixPic offers BYOK pricing, no daily resets, and access to multiple AI models including SDXL and Flux.",
  keywords: ["Leonardo.ai alternative", "Leonardo AI replacement", "AI image generator no credits", "BYOK image generator", "cheap AI art generator", "Leonardo free alternative"],
};

const comparisonData = [
  { feature: "Pricing Model", leonardo: "Token credits (150 free/day)", vixpic: "Pay per use (BYOK)", winner: "vixpic" },
  { feature: "Daily Limits", leonardo: "Yes — resets daily", vixpic: "No limits", winner: "vixpic" },
  { feature: "Credit Expiration", leonardo: "Daily reset", vixpic: "Never expires", winner: "vixpic" },
  { feature: "Subscription Cost", leonardo: "$12-60/month", vixpic: "LTD or BYOK only", winner: "vixpic" },
  { feature: "Models Available", leonardo: "Leonardo models + SDXL", vixpic: "SDXL, DALL-E, Flux & more", winner: "tie" },
  { feature: "Game Asset Focus", leonardo: "Excellent — purpose-built", vixpic: "Good — general purpose", winner: "leonardo" },
  { feature: "Fine-tuning", leonardo: "Yes — train custom models", vixpic: "No custom training yet", winner: "leonardo" },
  { feature: "API Access", leonardo: "Paid plans only", vixpic: "Yes, all plans", winner: "vixpic" },
  { feature: "Batch Generation", leonardo: "Limited on free", vixpic: "Yes, with CSV/bulk", winner: "vixpic" },
  { feature: "Canvas Editor", leonardo: "Yes — built in", vixpic: "Basic editing", winner: "leonardo" },
  { feature: "Privacy", leonardo: "Stored on their servers", vixpic: "Edge proxy, your keys", winner: "vixpic" },
  { feature: "Commercial Use", leonardo: "Paid plans only", vixpic: "Yes, all plans", winner: "vixpic" },
];

const faqs = [
  {
    q: "Why switch from Leonardo.ai to VixPic?",
    a: "If you're frustrated with daily token limits, credit expiration, and expensive subscriptions, VixPic solves all of these. BYOK means you pay only for what you use, credits never expire, and there's no daily reset anxiety."
  },
  {
    q: "Is VixPic as good as Leonardo for game assets?",
    a: "Leonardo.ai was built specifically for game assets and has excellent models for that. VixPic is more general-purpose but offers SDXL and Flux which can produce great game art. For specialized game asset workflows, Leonardo may still be better."
  },
  {
    q: "How much can I save switching to VixPic?",
    a: "Leonardo's Artisan plan is $24/month for 8,500 tokens. With VixPic BYOK, 500 images would cost ~$20 in API fees. If you generate less than 500/month, VixPic is cheaper. Heavy users save even more with LTD pricing."
  },
  {
    q: "Can I train custom models on VixPic?",
    a: "Not yet. Leonardo's fine-tuning feature is great for custom styles. If you need to train models on your own data, Leonardo is currently better. We're working on bringing this to VixPic."
  },
  {
    q: "What about Leonardo's canvas and editing tools?",
    a: "Leonardo has a more advanced built-in editor. VixPic focuses on generation + our free tools (crop, resize, background removal). For complex editing, you might still use external tools."
  },
  {
    q: "Can I use both Leonardo and VixPic?",
    a: "Absolutely! Many creators use Leonardo's free tier (150 tokens/day) for quick generations and VixPic for larger batches or when they run out of daily credits. They complement each other well."
  },
];

export default function LeonardoAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-success-muted text-success-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎮 No Daily Token Limits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Best{" "}
            <span className="bg-gradient-to-r from-success to-info bg-clip-text text-transparent">
              Leonardo.ai Alternative
            </span>
            {" "}in 2026
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tired of daily token resets and credit anxiety? 
            VixPic gives you unlimited generation with BYOK pricing — pay only for what you use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-success to-info">
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
      <section className="py-16 px-4 bg-destructive/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-destructive">
            Common Frustrations with Leonardo.ai
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎟️",
                title: "Daily Token Limits",
                desc: "150 free tokens per day. Run out mid-project? Wait 24 hours or pay up. Creative momentum killed."
              },
              {
                icon: "⏰",
                title: "Use It or Lose It",
                desc: "Tokens reset every 24 hours. Didn't generate today? Those tokens are gone forever."
              },
              {
                icon: "💰",
                title: "Expensive Subscriptions",
                desc: "$12-60/month for more tokens. And even paid plans have limits. The meter is always running."
              },
              {
                icon: "📊",
                title: "Token Anxiety",
                desc: "Constantly checking your balance. Should I upscale this? Can I afford variations? Creativity shouldn't feel like budgeting."
              },
              {
                icon: "🔒",
                title: "API Behind Paywall",
                desc: "Want to automate or integrate? API access requires paid subscription. Developers taxed extra."
              },
              {
                icon: "📝",
                title: "Commercial Use Restricted",
                desc: "Free tier can't use images commercially. Even paying customers have license limitations."
              },
            ].map((pain, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-destructive/20">
                <div className="text-3xl mb-3">{pain.icon}</div>
                <h3 className="font-bold text-lg mb-2">{pain.title}</h3>
                <p className="text-muted-foreground">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VixPic Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-success-muted-foreground">
            How VixPic Solves These Problems
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "♾️",
                title: "No Daily Limits",
                desc: "Generate as much as you want, whenever you want. Your API balance is yours — use it today, tomorrow, or next month."
              },
              {
                icon: "🔑",
                title: "BYOK = True Pay-Per-Use",
                desc: "Bring your own API key. Pay ~$0.04 per image directly to providers. No middleman markup."
              },
              {
                icon: "💎",
                title: "LTD Option Available",
                desc: "One-time payment, lifetime access. No monthly anxiety. Perfect for creators who know they'll use it."
              },
              {
                icon: "🎯",
                title: "No Token Math",
                desc: "Stop calculating tokens. One image = one API call. Simple, predictable pricing you can understand."
              },
              {
                icon: "⚡",
                title: "API Included",
                desc: "Build workflows, automate batches, integrate with your tools. No extra cost for developers."
              },
              {
                icon: "✅",
                title: "Full Commercial Rights",
                desc: "Your images, your business. Use everything you generate commercially from day one."
              },
            ].map((solution, i) => (
              <div key={i} className="bg-success-muted/50 p-6 rounded-xl border border-success/20">
                <div className="text-3xl mb-3">{solution.icon}</div>
                <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section id="comparison" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">VixPic vs Leonardo.ai: Full Comparison</h2>
          <p className="text-muted-foreground text-center mb-12">
            An honest look at how VixPic compares across all major features.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Leonardo.ai</th>
                  <th className="py-4 px-6 text-center bg-brand-muted/50">VixPic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className={`py-4 px-6 text-center ${row.winner === 'leonardo' ? 'text-success font-medium' : 'text-muted-foreground'}`}>
                      {row.leonardo}
                    </td>
                    <td className={`py-4 px-6 text-center bg-brand-muted/50 ${row.winner === 'vixpic' ? 'text-success font-medium' : 'text-muted-foreground'}`}>
                      {row.vixpic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            VixPic wins on pricing flexibility. Leonardo excels in game asset workflows.
          </p>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Real Cost Comparison</h2>
          <p className="text-muted-foreground text-center mb-12">
            How much does it actually cost to generate images?
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Free Tier User</CardTitle>
                <p className="text-sm text-muted-foreground">150 tokens/day max</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Leonardo Free</p>
                    <p className="text-2xl font-bold">$0/mo</p>
                    <p className="text-xs text-muted-foreground">(~50 images/day cap)</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground">VixPic (50/day equiv)</p>
                    <p className="text-2xl font-bold text-success">~$60/mo</p>
                  </div>
                  <div className="bg-success-muted text-success-muted-foreground py-2 px-4 rounded-lg font-semibold">
                    Leonardo free tier wins
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-brand/30 shadow-lg">
              <CardHeader className="text-center bg-brand-muted/50 -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">
                <CardTitle className="text-lg">Regular Creator</CardTitle>
                <p className="text-sm text-muted-foreground">~300 images/month</p>
              </CardHeader>
              <CardContent className="text-center pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Leonardo Artisan</p>
                    <p className="text-2xl font-bold">$24/mo</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground">VixPic (BYOK)</p>
                    <p className="text-2xl font-bold text-success">~$12/mo</p>
                  </div>
                  <div className="bg-success-muted text-success-muted-foreground py-2 px-4 rounded-lg font-semibold">
                    Save $144/year
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Power User</CardTitle>
                <p className="text-sm text-muted-foreground">~1000 images/month</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Leonardo Unbound</p>
                    <p className="text-2xl font-bold">$60/mo</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground">VixPic (BYOK)</p>
                    <p className="text-2xl font-bold text-success">~$40/mo</p>
                  </div>
                  <div className="bg-success-muted text-success-muted-foreground py-2 px-4 rounded-lg font-semibold">
                    Save $240/year
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            If you only use 150 tokens/day, Leonardo&apos;s free tier is unbeatable. Beyond that, BYOK wins.
          </p>
        </div>
      </section>

      {/* When Leonardo Is Better */}
      <section className="py-16 px-4 bg-warning-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Honest Take: When Leonardo.ai Is Better
          </h2>
          <div className="bg-card p-8 rounded-xl border border-warning/20">
            <p className="text-foreground mb-6">
              We believe in honesty. Here&apos;s when Leonardo might be the better choice:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You need game-specific assets</strong> — Leonardo was built for game developers. Their models excel at RPG characters, items, environments, and concept art. If that&apos;s your focus, they&apos;re optimized for it.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You want to train custom models</strong> — Leonardo&apos;s fine-tuning lets you create models trained on your style. VixPic doesn&apos;t offer this yet.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>150 tokens/day is enough</strong> — If you generate casually and never hit the daily limit, Leonardo&apos;s free tier is genuinely excellent value.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You need the canvas editor</strong> — Leonardo&apos;s integrated canvas with inpainting and outpainting is more advanced than VixPic&apos;s current tools.
                </div>
              </li>
            </ul>
            <p className="text-foreground mt-6">
              That said, if you regularly hit daily limits or want predictable costs — VixPic is the answer.
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
              <div key={i} className="bg-card border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-success to-info text-success-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Unlimited AI Generation?</h2>
          <p className="text-xl opacity-90 mb-8">
            Try VixPic free. No token limits, no daily resets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Generating Free
              </Button>
            </Link>
            <Link href="/alternatives">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-success-foreground text-success-foreground hover:bg-background/10">
                Compare Other Alternatives
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
