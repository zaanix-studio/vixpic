import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CostCalculator } from "@/components/cost-calculator";

export const metadata: Metadata = {
  title: "Pricing - VixPic | BYOK AI Image Generation",
  description: "One-time payment, unlimited AI image generation. VixPic pricing starts at $29. Use your own API keys with no monthly fees, no rate limits, and no markup.",
  keywords: ["VixPic pricing", "AI image generator cost", "BYOK pricing", "DALL-E pricing alternative", "Midjourney alternative price"],
  openGraph: {
    title: "VixPic Pricing - Pay Once, Create Forever",
    description: "One-time payment from $29. Use your own API keys. No subscriptions, no hidden fees.",
    type: "website",
  },
};

const features = {
  starter: [
    { feature: "BYOK Image Generation", included: true },
    { feature: "All AI Providers (DALL-E, Flux, SDXL)", included: true },
    { feature: "Background Removal", included: true },
    { feature: "Image Upscaling (2K)", included: true },
    { feature: "20+ Free Image Tools", included: true },
    { feature: "Concurrent Jobs", value: "5" },
    { feature: "Image Upscaling (4K)", included: false },
    { feature: "Batch Processing", included: false },
    { feature: "Style Presets & Templates", included: false },
    { feature: "API Access", included: false },
    { feature: "Team Seats", value: "1" },
    { feature: "Support", value: "Email" },
  ],
  pro: [
    { feature: "BYOK Image Generation", included: true },
    { feature: "All AI Providers (DALL-E, Flux, SDXL)", included: true },
    { feature: "Background Removal", included: true },
    { feature: "Image Upscaling (2K)", included: true },
    { feature: "20+ Free Image Tools", included: true },
    { feature: "Concurrent Jobs", value: "20" },
    { feature: "Image Upscaling (4K)", included: true },
    { feature: "Batch Processing", included: true },
    { feature: "Style Presets & Templates", included: true },
    { feature: "API Access", included: false },
    { feature: "Team Seats", value: "1" },
    { feature: "Support", value: "Priority" },
  ],
  team: [
    { feature: "BYOK Image Generation", included: true },
    { feature: "All AI Providers (DALL-E, Flux, SDXL)", included: true },
    { feature: "Background Removal", included: true },
    { feature: "Image Upscaling (2K)", included: true },
    { feature: "20+ Free Image Tools", included: true },
    { feature: "Concurrent Jobs", value: "Unlimited" },
    { feature: "Image Upscaling (4K)", included: true },
    { feature: "Batch Processing", included: true },
    { feature: "Style Presets & Templates", included: true },
    { feature: "API Access", included: true },
    { feature: "Team Seats", value: "5" },
    { feature: "Support", value: "Dedicated" },
  ],
};

const comparisonData = [
  { service: "Midjourney Pro", monthly: 30, annual: 360, images: "900/mo", perImage: "$0.033" },
  { service: "ChatGPT Plus", monthly: 20, annual: 240, images: "~100/mo", perImage: "$0.20" },
  { service: "Leonardo Pro", monthly: 24, annual: 288, images: "8,500/mo", perImage: "$0.003" },
  { service: "Adobe Firefly", monthly: 23, annual: 276, images: "100/mo", perImage: "$0.23" },
  { service: "Ideogram Plus", monthly: 20, annual: 240, images: "1,000/mo", perImage: "$0.02" },
];

const faqs = [
  {
    question: "What does 'Bring Your Own Key' mean?",
    answer: "BYOK means you use your own API keys from providers like OpenAI, Replicate, or FAL. You pay them directly for image generation (typically $0.002-$0.08 per image), while VixPic provides the interface, tools, and features. This is dramatically cheaper than subscription services that mark up API costs by 10-100x.",
  },
  {
    question: "Is this really a one-time payment?",
    answer: "Yes! You pay once for VixPic and own it forever. The only ongoing cost is the API usage you pay directly to providers — which you control completely. There are no hidden fees, no auto-renewals, and no subscription trap.",
  },
  {
    question: "How much do API costs actually run?",
    answer: "It varies by model. SDXL on Replicate costs ~$0.002/image. FLUX Schnell is ~$0.003/image. DALL-E 3 HD is ~$0.08/image. Most users spend $5-20/month on API costs for 500+ images — far less than any subscription.",
  },
  {
    question: "What if I don't have API keys?",
    answer: "We guide you through setup! Getting keys takes about 2 minutes per provider. OpenAI, Replicate, and FAL all offer free trial credits. You can start generating images immediately without paying anything.",
  },
  {
    question: "Can I upgrade my license later?",
    answer: "Absolutely. Pay the difference between tiers at any time. Going from Starter ($29) to Pro ($59) would cost $30. We'll migrate your settings and history automatically.",
  },
  {
    question: "What's your refund policy?",
    answer: "14-day money-back guarantee, no questions asked. If VixPic isn't right for you, email us and we'll refund you immediately. We want you to be completely happy.",
  },
  {
    question: "Do you store my API keys?",
    answer: "Your keys are stored locally in your browser or encrypted on our edge servers (your choice). We never see your actual keys in plain text. API calls go directly from your browser to the provider.",
  },
  {
    question: "What happens if you shut down?",
    answer: "VixPic is a standalone tool that works with your own API keys. Even if we disappeared tomorrow, your keys and workflow remain yours. That's the beauty of BYOK — you're never locked in.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Simple Pricing.{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              One-Time Payment.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Pay once, own forever. Use your own API keys with zero markup.
            Most users save 70-90% compared to monthly subscriptions.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">✓ 14-day money-back guarantee</span>
            <span>•</span>
            <span className="flex items-center gap-1">✓ No subscription required</span>
            <span>•</span>
            <span className="flex items-center gap-1">✓ Lifetime updates</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <Card className="border-2 hover:border-brand/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription>Perfect for hobbyists and side projects</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Unlimited BYOK generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>All AI providers (DALL-E, Flux, SDXL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Background removal</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>2K image upscaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>20+ free image tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>5 concurrent jobs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" size="lg">
                Get Starter
              </Button>
            </CardFooter>
          </Card>

          {/* Pro */}
          <Card className="border-2 border-brand/60 relative shadow-lg scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand to-info text-brand-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>For serious creators and professionals</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-bold">$59</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="font-medium">Everything in Starter, plus:</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>4K image upscaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Batch processing (100+ images)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Style presets & templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>20 concurrent jobs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>All future updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90" size="lg">
                Get Pro
              </Button>
            </CardFooter>
          </Card>

          {/* Team */}
          <Card className="border-2 hover:border-brand/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Team</CardTitle>
              <CardDescription>For agencies, studios, and teams</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-bold">$149</span>
                <span className="text-muted-foreground ml-2">5 seats</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="font-medium">Everything in Pro, plus:</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>5 team member seats</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Shared workspace</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Team asset library</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>Admin controls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span>White-label option</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" size="lg">
                Get Team
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          💳 Secure payment via Stripe • 14-day money-back guarantee • Instant access
        </p>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See exactly how much you'll save compared to subscription services.
              Adjust the sliders to match your usage.
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* Subscription Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Subscriptions Really Cost You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Monthly fees add up fast. Here's what popular AI image services actually charge.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 font-semibold">Service</th>
                  <th className="text-center p-4 font-semibold">Monthly</th>
                  <th className="text-center p-4 font-semibold">Annual</th>
                  <th className="text-center p-4 font-semibold">Images</th>
                  <th className="text-center p-4 font-semibold">Per Image</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4">{row.service}</td>
                    <td className="text-center p-4">${row.monthly}</td>
                    <td className="text-center p-4 text-destructive font-semibold">${row.annual}</td>
                    <td className="text-center p-4">{row.images}</td>
                    <td className="text-center p-4">{row.perImage}</td>
                  </tr>
                ))}
                <tr className="bg-success-muted/50 font-semibold">
                  <td className="p-4 text-success-muted-foreground">VixPic + BYOK</td>
                  <td className="text-center p-4 text-success-muted-foreground">$0*</td>
                  <td className="text-center p-4 text-success-muted-foreground">$59 one-time</td>
                  <td className="text-center p-4 text-success-muted-foreground">Unlimited</td>
                  <td className="text-center p-4 text-success-muted-foreground">$0.002-$0.08</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            *Plus API costs paid directly to providers. Most users spend $5-20/month.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed Feature Comparison</h2>
            <p className="text-muted-foreground">
              Everything included in each tier, side by side.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-inverted text-inverted-foreground">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter ($29)</th>
                  <th className="text-center p-4 font-semibold bg-brand">Pro ($59)</th>
                  <th className="text-center p-4 font-semibold">Team ($149)</th>
                </tr>
              </thead>
              <tbody>
                {features.starter.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted" : "bg-card"}>
                    <td className="p-4 font-medium">{item.feature}</td>
                    <td className="text-center p-4">
                      {item.value ? (
                        <span className="text-foreground">{item.value}</span>
                      ) : item.included ? (
                        <span className="text-success text-xl">✓</span>
                      ) : (
                        <span className="text-muted-foreground text-xl">—</span>
                      )}
                    </td>
                    <td className="text-center p-4 bg-brand-muted/50">
                      {features.pro[i].value ? (
                        <span className="text-foreground font-medium">{features.pro[i].value}</span>
                      ) : features.pro[i].included ? (
                        <span className="text-success text-xl">✓</span>
                      ) : (
                        <span className="text-muted-foreground text-xl">—</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {features.team[i].value ? (
                        <span className="text-foreground">{features.team[i].value}</span>
                      ) : features.team[i].included ? (
                        <span className="text-success text-xl">✓</span>
                      ) : (
                        <span className="text-muted-foreground text-xl">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-success-muted rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-2">14-Day Guarantee</h3>
              <p className="text-muted-foreground">
                Not happy? Get a full refund within 14 days. No questions, no hassle.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-info-muted rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your API keys stay local. We never see your credentials or generated images.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-muted rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                ∞
              </div>
              <h3 className="font-semibold text-lg mb-2">Lifetime Updates</h3>
              <p className="text-muted-foreground">
                Pro and Team licenses include all future features and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about VixPic pricing and BYOK.
            </p>
          </div>

          <Accordion className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save 80% on AI Images?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of creators who've switched to BYOK. Pay once, create forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90">
                Start Creating Free
              </Button>
            </Link>
            <Link href="/tools">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Try Free Tools
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Use free tools instantly
          </p>
        </div>
      </section>

    </>
  );
}
