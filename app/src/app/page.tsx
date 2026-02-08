import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
            <span className="font-bold text-xl">VixPic</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900 hidden sm:block">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 hidden sm:block">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 hidden sm:block">FAQ</a>
            <Link href="/generate"><Button>Get Started</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔑 Bring Your Own API Key
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Professional AI Images.{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Pay Per Use.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create stunning images with DALL-E, Stable Diffusion, and Flux — using your own API keys.
            No subscriptions, no rate limits, no markup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Creating Free
              </Button>
            </Link>
            <a href="#pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See Pricing
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Join 1,000+ creators • No credit card required • 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold">80%</div>
              <div className="text-sm text-gray-600">Cheaper than subscriptions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-sm text-gray-600">No rate limits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-gray-600">AI Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-gray-600">Private & Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why VixPic?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Most AI image tools lock you into expensive subscriptions with hidden limits.
            VixPic gives you full control.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                  💰
                </div>
                <CardTitle>No Monthly Fees</CardTitle>
                <CardDescription>
                  Pay only for the images you create — typically 80% less than subscriptions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                  ⚡
                </div>
                <CardTitle>No Rate Limits</CardTitle>
                <CardDescription>
                  Generate unlimited images with your own API key. No daily caps or throttling.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                  🔐
                </div>
                <CardTitle>100% Private</CardTitle>
                <CardDescription>
                  Your images never touch our servers. Direct API connection, complete data ownership.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                  🔄
                </div>
                <CardTitle>Multi-Provider</CardTitle>
                <CardDescription>
                  Switch between DALL-E, Stable Diffusion, and Flux anytime. Use the best model for each task.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Your API Key</h3>
              <p className="text-gray-600">
                Sign up with OpenAI, Replicate, or Together AI. Takes 2 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Connect to VixPic</h3>
              <p className="text-gray-600">
                Paste your API key. It never leaves your browser.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Start Creating</h3>
              <p className="text-gray-600">
                Generate unlimited images. Pay the provider directly at API cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Save 80%+ vs Subscriptions</h2>
          <p className="text-gray-600 text-center mb-12">
            See how much you could save generating 1,000 images/month
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">With Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Midjourney Pro</span>
                    <span className="font-semibold">$30/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span>DALL-E via ChatGPT</span>
                    <span className="font-semibold">$20/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Leonardo Pro</span>
                    <span className="font-semibold">$24/mo</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-red-200">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Annual Cost</span>
                    <span className="font-bold text-red-700">$240-360/year</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">With VixPic + BYOK</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>VixPic License</span>
                    <span className="font-semibold">$59 one-time</span>
                  </li>
                  <li className="flex justify-between">
                    <span>1,000 FLUX images/mo</span>
                    <span className="font-semibold">~$10/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-500">
                    <span>(at ~$0.01/image)</span>
                    <span></span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-green-200">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Year 1 Cost</span>
                    <span className="font-bold text-green-700">~$179</span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Year 2+: Just ~$120/year
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, One-Time Pricing</h2>
          <p className="text-gray-600 text-center mb-12">
            Pay once, use forever. No subscriptions, no hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for hobbyists</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Unlimited BYOK generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Background removal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Basic upscaling (2K)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    5 concurrent jobs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Email support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Starter</Button>
              </CardFooter>
            </Card>
            {/* Pro */}
            <Card className="border-2 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For serious creators</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$59</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Everything in Starter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    4K upscaling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Batch processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Style presets & templates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    All future updates
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Pro
                </Button>
              </CardFooter>
            </Card>
            {/* Team */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Team</CardTitle>
                <CardDescription>For agencies & teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$149</span>
                  <span className="text-gray-500 ml-2">5 seats</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Shared workspace
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Team asset library
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Admin controls
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    API access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    White-label option
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Team</Button>
              </CardFooter>
            </Card>
          </div>
          <p className="text-center text-gray-500 mt-8">
            💳 Secure payment via Stripe • 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Supported Providers */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Supported AI Providers</h2>
          <p className="text-gray-600 mb-12">
            Use the best model for each job. Switch providers anytime.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold">OpenAI</div>
              <div className="text-sm text-gray-500">DALL-E 3</div>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🔥</div>
              <div className="font-semibold">Replicate</div>
              <div className="text-sm text-gray-500">FLUX, SDXL</div>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">FAL.ai</div>
              <div className="text-sm text-gray-500">FLUX, Fast</div>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold">Together AI</div>
              <div className="text-sm text-gray-500">Open Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is BYOK (Bring Your Own Key)?</AccordionTrigger>
              <AccordionContent>
                BYOK means you use your own API keys from providers like OpenAI, Replicate, or Together AI.
                You pay the provider directly at their rates — no markup, no middleman. Your API key never
                leaves your browser, and you have complete control over your costs and usage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How much will API costs be?</AccordionTrigger>
              <AccordionContent>
                It depends on the model and provider, but typical costs are:
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• FLUX Schnell: ~$0.003/image</li>
                  <li>• FLUX Pro: ~$0.05/image</li>
                  <li>• DALL-E 3: ~$0.04-0.08/image</li>
                </ul>
                <p className="mt-2">
                  For 1,000 images/month using FLUX, expect ~$10-30 in API costs. Compare that to $30/month
                  for Midjourney!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is my data private?</AccordionTrigger>
              <AccordionContent>
                Yes, 100%. VixPic runs entirely in your browser. Your API key is stored locally (never sent
                to our servers), and your images are processed directly with your chosen provider. We can&apos;t
                see your prompts, images, or API key.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do I get lifetime updates?</AccordionTrigger>
              <AccordionContent>
                Yes! Your one-time purchase includes all future updates. As we add new providers, features,
                and improvements, you&apos;ll get them automatically at no extra cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I get a refund?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We offer a 14-day money-back guarantee, no questions asked. If VixPic isn&apos;t right
                for you, just email us and we&apos;ll refund your purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What if I don&apos;t have an API key yet?</AccordionTrigger>
              <AccordionContent>
                No problem! We&apos;ll guide you through getting one. Most providers offer free credits to start:
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• OpenAI: $5 free credits</li>
                  <li>• Replicate: Free tier available</li>
                  <li>• Together AI: $1 free credits</li>
                </ul>
                <p className="mt-2">You can try VixPic with free provider credits before committing.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Without Limits?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of creators who switched from expensive subscriptions to BYOK.
          </p>
          <Link href="/generate">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Start Creating Free
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
              <span className="font-bold text-xl">VixPic</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a href="#faq" className="hover:text-gray-900">FAQ</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"></path></svg>
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8">
            © 2026 VixPic. All rights reserved. Part of Zaanix Studio.
          </div>
        </div>
      </footer>
    </div>
  );
}
