import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adobe Firefly Alternative 2026 — VixPic (BYOK, No Creative Cloud) | VixPic",
  description: "Looking for an Adobe Firefly alternative without Creative Cloud subscription? VixPic offers BYOK pricing, similar quality with DALL-E and Flux, at a fraction of the cost.",
  keywords: ["Adobe Firefly alternative", "Firefly replacement", "AI image generator no subscription", "BYOK image generator", "cheap Firefly alternative", "Firefly without Creative Cloud"],
};

const comparisonData = [
  { feature: "Pricing Model", firefly: "Creative Cloud required ($23+/mo)", vixpic: "BYOK or LTD ($29 one-time)", winner: "vixpic" },
  { feature: "Standalone Access", firefly: "Limited — needs CC subscription", vixpic: "Yes — fully independent", winner: "vixpic" },
  { feature: "Credit System", firefly: "Generative credits (limited)", vixpic: "Pay per image (no limits)", winner: "vixpic" },
  { feature: "Integration", firefly: "Photoshop, Illustrator (excellent)", vixpic: "API + export (good)", winner: "firefly" },
  { feature: "Image Quality", firefly: "Good — conservative style", vixpic: "Excellent — multiple models", winner: "vixpic" },
  { feature: "Commercial Safety", firefly: "Trained on licensed content", vixpic: "Depends on model chosen", winner: "firefly" },
  { feature: "Models Available", firefly: "Firefly only", vixpic: "SDXL, DALL-E, Flux & more", winner: "vixpic" },
  { feature: "Text in Images", firefly: "Good", vixpic: "Excellent with DALL-E 3", winner: "vixpic" },
  { feature: "Batch Generation", firefly: "Limited", vixpic: "Yes, with CSV/bulk", winner: "vixpic" },
  { feature: "API Access", firefly: "Enterprise only", vixpic: "Yes, all plans", winner: "vixpic" },
  { feature: "Privacy", firefly: "Adobe servers", vixpic: "Edge proxy, your keys", winner: "vixpic" },
  { feature: "Learning Curve", firefly: "Easy if you know Adobe", vixpic: "Easy for everyone", winner: "tie" },
];

const faqs = [
  {
    q: "Why switch from Adobe Firefly to VixPic?",
    a: "If you only need AI image generation and don't use other Creative Cloud apps, you're overpaying. Firefly requires a $23+/month CC subscription. VixPic offers similar quality with DALL-E 3 and Flux for a $29 one-time payment or BYOK."
  },
  {
    q: "Is VixPic as safe for commercial use as Firefly?",
    a: "Adobe Firefly is trained on licensed content, which is excellent for commercial safety. VixPic uses various models — DALL-E 3 (OpenAI) has similar commercial terms. For maximum legal safety in enterprise, Firefly's provenance is unmatched."
  },
  {
    q: "How does image quality compare?",
    a: "Firefly produces good results but tends to be conservative (safe, stock-photo style). VixPic with DALL-E 3 or Flux often produces more creative, dynamic results. Firefly excels at realistic corporate imagery."
  },
  {
    q: "Can VixPic integrate with Photoshop?",
    a: "Not directly like Firefly. However, VixPic's API lets you build custom integrations, and generated images can be exported for use in any tool. For deep Photoshop integration, Firefly is better."
  },
  {
    q: "What about generative fill and expand?",
    a: "Firefly's generative fill in Photoshop is excellent. VixPic focuses on image generation rather than in-context editing. For inpainting/outpainting workflows, Firefly (with Photoshop) is currently superior."
  },
  {
    q: "Can I use VixPic if I already have Creative Cloud?",
    a: "Absolutely! Many users use Firefly for Photoshop workflows and VixPic for standalone generation (bulk batches, API access, or when they run out of Firefly credits). They complement each other well."
  },
];

export default function FireflyAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔥 No Creative Cloud Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent">
              Adobe Firefly
            </span>
            {" "}Quality, Without the Subscription
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need AI image generation without paying $23+/month for Creative Cloud? 
            VixPic gives you DALL-E 3 and Flux quality for a one-time payment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-destructive to-warning">
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
            The Adobe Lock-In Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "💳",
                title: "Expensive Bundle Requirement",
                desc: "Just want AI images? Too bad. Firefly is bundled with Creative Cloud at $23+/month. You're paying for apps you don't use."
              },
              {
                icon: "🎟️",
                title: "Generative Credits Run Out",
                desc: "Even with CC, you get limited credits. Heavy users hit the wall fast. Need more? Pay more."
              },
              {
                icon: "🏢",
                title: "Enterprise API Gatekeeping",
                desc: "Want to automate or integrate? Firefly API is enterprise-only. Small creators and developers locked out."
              },
              {
                icon: "😐",
                title: "Conservative, Safe Results",
                desc: "Firefly is trained to avoid legal risk, which means bland, stock-photo-ish outputs. Where's the creativity?"
              },
              {
                icon: "📦",
                title: "Single Model Only",
                desc: "You get Firefly. Period. No DALL-E, no Stable Diffusion, no Flux. Adobe's way or the highway."
              },
              {
                icon: "🔒",
                title: "Ecosystem Lock-In",
                desc: "Deep integration with Adobe apps is great — until you want to leave. Your workflow becomes dependent on their subscription."
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
            VixPic: Freedom from the Adobe Tax
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "💰",
                title: "$29 One-Time, Forever",
                desc: "LTD pricing means you own VixPic forever. No monthly fees, no annual renewals. Use it for years."
              },
              {
                icon: "🔑",
                title: "Or BYOK — True Pay-Per-Use",
                desc: "Bring your own API keys. Pay ~$0.04 per image. Generate 100 images for $4. No subscription required."
              },
              {
                icon: "🎨",
                title: "Multiple Premium Models",
                desc: "DALL-E 3, SDXL, Flux — choose the best model for each job. Better quality than Firefly in many cases."
              },
              {
                icon: "⚡",
                title: "API For Everyone",
                desc: "Developers and creators get full API access. No enterprise pricing, no gatekeeping."
              },
              {
                icon: "🎭",
                title: "Creative Freedom",
                desc: "Less corporate safety rails. More creative, dynamic outputs. Make art, not stock photos."
              },
              {
                icon: "🔓",
                title: "No Lock-In",
                desc: "Use VixPic with any tools. Export anywhere. Your images, your workflow, your choice."
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
          <h2 className="text-3xl font-bold text-center mb-4">VixPic vs Adobe Firefly: Full Comparison</h2>
          <p className="text-muted-foreground text-center mb-12">
            An honest look at how VixPic compares across all major features.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Adobe Firefly</th>
                  <th className="py-4 px-6 text-center bg-brand-muted/50">VixPic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className={`py-4 px-6 text-center ${row.winner === 'firefly' ? 'text-success font-medium' : 'text-muted-foreground'}`}>
                      {row.firefly}
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
            VixPic wins on pricing and flexibility. Firefly excels in Adobe ecosystem integration.
          </p>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Adobe Tax Calculator</h2>
          <p className="text-muted-foreground text-center mb-12">
            How much are you actually paying for AI image generation?
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🔴</span>
                  Adobe Firefly (via CC)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Creative Cloud All Apps</span>
                    <span className="font-semibold">$60/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Or Photography Plan</span>
                    <span className="font-semibold">$23/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual cost (min)</span>
                    <span className="font-semibold text-destructive">$276/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5-year total (min)</span>
                    <span className="font-semibold text-destructive">$1,380</span>
                  </div>
                  <div className="border-t pt-4 mt-4 text-sm text-muted-foreground">
                    <p>Plus generative credits may run out.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-success/30 shadow-lg">
              <CardHeader className="bg-success-muted/50 -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🟢</span>
                  VixPic (LTD or BYOK)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>LTD (one-time)</span>
                    <span className="font-semibold text-success">$29-149</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual cost</span>
                    <span className="font-semibold text-success">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5-year total</span>
                    <span className="font-semibold text-success">$29-149</span>
                  </div>
                  <div className="flex justify-between">
                    <span>API costs (optional)</span>
                    <span className="font-semibold">~$0.04/image</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-success-muted-foreground font-medium">
                      Save $1,200+ over 5 years
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 bg-info-muted/50 p-6 rounded-xl text-center">
            <p className="text-lg">
              <strong>The Adobe Tax:</strong> $276/year minimum, just to access Firefly.
              <br/>
              <span className="text-muted-foreground">VixPic: $29 once, use forever. Even with heavy API usage, you&apos;ll save hundreds.</span>
            </p>
          </div>
        </div>
      </section>

      {/* When Firefly Is Better */}
      <section className="py-16 px-4 bg-warning-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Honest Take: When Adobe Firefly Is Better
          </h2>
          <div className="bg-card p-8 rounded-xl border border-warning/20">
            <p className="text-foreground mb-6">
              We believe in honesty. Here&apos;s when Firefly might be the right choice:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You already pay for Creative Cloud</strong> — If you use Photoshop, Illustrator, etc. daily, Firefly is included. The integration is seamless and genuinely useful.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You need maximum commercial safety</strong> — Firefly is trained on licensed Adobe Stock content. For enterprise use where legal provenance matters, this is valuable.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You need generative fill in Photoshop</strong> — Firefly&apos;s integration with Photoshop for inpainting, outpainting, and object removal is best-in-class.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>Your company requires Adobe</strong> — Some enterprises mandate Creative Cloud. In that case, you already have Firefly access.
                </div>
              </li>
            </ul>
            <p className="text-foreground mt-6">
              For everyone else — independent creators, developers, small businesses — VixPic offers better value.
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
      <section className="py-20 px-4 bg-gradient-to-r from-destructive to-warning text-destructive-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Escape the Adobe Tax?</h2>
          <p className="text-xl opacity-90 mb-8">
            Try VixPic free. No Creative Cloud required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Generating Free
              </Button>
            </Link>
            <Link href="/alternatives">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-destructive-foreground text-destructive-foreground hover:bg-background/10">
                Compare Other Alternatives
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
