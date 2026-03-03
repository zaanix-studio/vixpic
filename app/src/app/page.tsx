import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CostCalculator } from "@/components/cost-calculator";
import {
  KeyRoundIcon,
  WalletIcon,
  ZapIcon,
  ShieldCheckIcon,
  RefreshCwIcon,
  PaletteIcon,
  FlameIcon,
  RocketIcon,
  CheckIcon,
  CreditCardIcon,
  ArrowRightIcon,
  SparklesIcon,
  PlugIcon,
  PaintbrushIcon,
  InfinityIcon,
  PercentIcon,
  LayersIcon,
  LockIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-[#08080a] text-stone-100 overflow-x-hidden">
      {/* ============================== NAVIGATION ============================== */}
      <nav className="fixed top-0 w-full z-50 bg-[#08080a]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#c9a87c] flex items-center justify-center">
              <SparklesIcon size={16} className="text-[#08080a]" strokeWidth={2} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              VixPic
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/tools"
              className="hidden sm:inline-flex px-3 py-1.5 text-sm text-stone-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              Free Tools
            </Link>
            <Link
              href="/use-cases"
              className="hidden sm:inline-flex px-3 py-1.5 text-sm text-stone-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              Use Cases
            </Link>
            <Link
              href="/alternatives"
              className="hidden md:inline-flex px-3 py-1.5 text-sm text-stone-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              Compare
            </Link>
            <a
              href="#pricing"
              className="hidden sm:inline-flex px-3 py-1.5 text-sm text-stone-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              Pricing
            </a>
            <Link href="/generate">
              <Button
                size="sm"
                className="ml-3 bg-[#c9a87c] text-[#08080a] hover:bg-[#d4b88a] font-medium text-sm"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ============================== HERO ============================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,124,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,124,0.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Gradient orbs — warm gold tones */}
          <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-[#c9a87c]/[0.08] rounded-full blur-[150px] animate-glow-pulse" />
          <div
            className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-[#c9a87c]/[0.05] rounded-full blur-[130px] animate-glow-pulse"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-[15%] left-[40%] w-[400px] h-[400px] bg-[#c9a87c]/[0.04] rounded-full blur-[120px] animate-glow-pulse"
            style={{ animationDelay: "6s" }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#08080a] to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
          {/* BYOK Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a87c]/10 border border-[#c9a87c]/20 text-[#c9a87c] text-sm font-medium mb-8">
            <KeyRoundIcon size={16} strokeWidth={2} />
            Bring Your Own API Key
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            Professional AI Images.
            <br />
            <span className="text-[#c9a87c]">
              Pay Only What You Use.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Create stunning images with DALL-E, Stable Diffusion, and Flux —
            using your own API keys. No subscriptions. No rate limits. No
            markup.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/generate">
              <Button
                size="lg"
                className="text-base px-8 h-12 bg-[#c9a87c] hover:bg-[#d4b88a] text-[#08080a] font-semibold shadow-lg shadow-[#c9a87c]/15 hover:shadow-[#c9a87c]/25 transition-all"
              >
                Start Creating Free
                <ArrowRightIcon size={18} className="ml-2" />
              </Button>
            </Link>
            <a href="#pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-white/10 bg-white/[0.03] text-stone-300 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all"
              >
                View Pricing
              </Button>
            </a>
          </div>

          {/* Trust line */}
          <p
            className="animate-fade-in-up text-sm text-stone-500"
            style={{ animationDelay: "0.4s" }}
          >
            Join 1,000+ creators · No credit card required · 14-day money-back
            guarantee
          </p>
        </div>
      </section>

      {/* ============================== STATS ============================== */}
      <section className="relative py-16 border-y border-white/[0.06] bg-[#0c0b0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a87c]/10 mb-3">
                <PercentIcon
                  size={20}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white">
                80%
              </div>
              <div className="text-sm text-stone-500 mt-1">
                Cheaper than subscriptions
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a87c]/10 mb-3">
                <InfinityIcon
                  size={20}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white">
                &infin;
              </div>
              <div className="text-sm text-stone-500 mt-1">No rate limits</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a87c]/10 mb-3">
                <LayersIcon
                  size={20}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white">
                5+
              </div>
              <div className="text-sm text-stone-500 mt-1">AI Providers</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a87c]/10 mb-3">
                <LockIcon
                  size={20}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white">
                100%
              </div>
              <div className="text-sm text-stone-500 mt-1">
                Private & Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FEATURES ============================== */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Why VixPic?
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Most AI image tools lock you into expensive subscriptions with
              hidden limits. VixPic gives you full control.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <WalletIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                No Monthly Fees
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Pay only for the images you create — typically 80% less than
                subscriptions.
              </p>
            </div>
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ZapIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                No Rate Limits
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Generate unlimited images with your own API key. No daily caps
                or throttling.
              </p>
            </div>
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                100% Private
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Your images never touch our servers. Direct API connection,
                complete data ownership.
              </p>
            </div>
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <RefreshCwIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                Multi-Provider
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Switch between DALL-E, Stable Diffusion, and Flux anytime. Use
                the best model for each task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== HOW IT WORKS ============================== */}
      <section className="py-24 px-6 bg-[#0c0b0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Get started in under 2 minutes. No complex setup required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#c9a87c] mb-4">
                Step 01
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#c9a87c]/10 flex items-center justify-center mx-auto mb-5">
                <KeyRoundIcon
                  size={28}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                Get Your API Key
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Sign up with OpenAI, Replicate, or Together AI. Takes 2
                minutes.
              </p>
            </div>
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#c9a87c] mb-4">
                Step 02
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#c9a87c]/10 flex items-center justify-center mx-auto mb-5">
                <PlugIcon
                  size={28}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                Connect to VixPic
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Paste your API key. It stays in your browser and never leaves
                your device.
              </p>
            </div>
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#c9a87c] mb-4">
                Step 03
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#c9a87c]/10 flex items-center justify-center mx-auto mb-5">
                <PaintbrushIcon
                  size={28}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                Start Creating
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Generate unlimited images. Pay the provider directly at API
                cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== PROVIDERS ============================== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Supported AI Providers
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Use the best model for each job. Switch providers anytime.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <PaletteIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="font-semibold text-white">OpenAI</div>
              <div className="text-sm text-stone-500 mt-0.5">DALL-E 3</div>
            </div>
            <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FlameIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="font-semibold text-white">Replicate</div>
              <div className="text-sm text-stone-500 mt-0.5">FLUX, SDXL</div>
            </div>
            <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ZapIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="font-semibold text-white">FAL.ai</div>
              <div className="text-sm text-stone-500 mt-0.5">FLUX, Fast</div>
            </div>
            <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-[#c9a87c]/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a87c]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <RocketIcon
                  size={24}
                  className="text-[#c9a87c]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="font-semibold text-white">Together AI</div>
              <div className="text-sm text-stone-500 mt-0.5">Open Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== COST CALCULATOR ============================== */}
      <section id="calculator" className="py-24 px-6 bg-[#0c0b0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Calculate Your Savings
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              See exactly how much you&apos;d save by switching from expensive
              subscriptions to BYOK.
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* ============================== PRICING ============================== */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Simple, One-Time Pricing
            </h2>
            <p className="text-stone-400 text-lg">
              Pay once, use forever. No subscriptions, no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <Card className="bg-white/[0.03] border-white/[0.06] rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Starter</CardTitle>
                <CardDescription className="text-stone-400">
                  Perfect for hobbyists
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-display font-bold text-white">
                    $29
                  </span>
                  <span className="text-stone-500 ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Unlimited BYOK generation",
                    "Background removal",
                    "Basic upscaling (2K)",
                    "5 concurrent jobs",
                    "Email support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon
                        size={16}
                        className="text-[#c9a87c] shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-stone-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/[0.08] hover:text-white"
                  variant="outline"
                >
                  Get Starter
                </Button>
              </CardFooter>
            </Card>

            {/* Pro */}
            <Card className="relative bg-[#c9a87c]/[0.04] border-[#c9a87c]/25 rounded-2xl overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-[#c9a87c]" />
              {/* Badge */}
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 translate-y-3">
                <span className="bg-[#c9a87c] text-[#08080a] text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-[#c9a87c]/15">
                  Most Popular
                </span>
              </div>
              <CardHeader className="pt-10">
                <CardTitle className="text-white">Pro</CardTitle>
                <CardDescription className="text-stone-400">
                  For serious creators
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-display font-bold text-white">
                    $59
                  </span>
                  <span className="text-stone-500 ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Starter",
                    "4K upscaling",
                    "Batch processing",
                    "Style presets & templates",
                    "Priority support",
                    "All future updates",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon
                        size={16}
                        className="text-[#c9a87c] shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-stone-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#c9a87c] hover:bg-[#d4b88a] text-[#08080a] font-semibold shadow-lg shadow-[#c9a87c]/15">
                  Get Pro
                </Button>
              </CardFooter>
            </Card>

            {/* Team */}
            <Card className="bg-white/[0.03] border-white/[0.06] rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">Team</CardTitle>
                <CardDescription className="text-stone-400">
                  For agencies & teams
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-display font-bold text-white">
                    $149
                  </span>
                  <span className="text-stone-500 ml-2">5 seats</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Pro",
                    "Shared workspace",
                    "Team asset library",
                    "Admin controls",
                    "API access",
                    "White-label option",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon
                        size={16}
                        className="text-[#c9a87c] shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-stone-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/[0.08] hover:text-white"
                  variant="outline"
                >
                  Get Team
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-stone-500 mt-8">
            <CreditCardIcon size={16} strokeWidth={1.5} />
            Secure payment via Stripe · 14-day money-back guarantee
          </div>
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section id="faq" className="py-24 px-6 bg-[#0c0b0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion className="w-full space-y-2">
            <AccordionItem
              value="item-1"
              className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="text-white hover:no-underline py-5">
                What is BYOK (Bring Your Own Key)?
              </AccordionTrigger>
              <AccordionContent className="text-stone-400 pb-5">
                BYOK means you use your own API keys from providers like OpenAI,
                Replicate, or Together AI. You pay the provider directly at
                their rates — no markup, no middleman. Your API key never leaves
                your browser, and you have complete control over your costs and
                usage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="text-white hover:no-underline py-5">
                How much will API costs be?
              </AccordionTrigger>
              <AccordionContent className="text-stone-400 pb-5">
                It depends on the model and provider, but typical costs are:
                <ul className="mt-3 space-y-1.5 ml-1">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a87c] shrink-0" />
                    FLUX Schnell: ~$0.003/image
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a87c]/70 shrink-0" />
                    FLUX Pro: ~$0.05/image
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a87c]/50 shrink-0" />
                    DALL-E 3: ~$0.04-0.08/image
                  </li>
                </ul>
                <p className="mt-3 text-sm">
                  For 1,000 images/month using FLUX, expect ~$10-30 in API
                  costs. Compare that to $30/month for Midjourney!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="text-white hover:no-underline py-5">
                Is my data private?
              </AccordionTrigger>
              <AccordionContent className="text-stone-400 pb-5">
                Yes, 100%. VixPic runs entirely in your browser. Your API key is
                stored locally (never sent to our servers), and your images are
                processed directly with your chosen provider. We can&apos;t see
                your prompts, images, or API key.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="text-white hover:no-underline py-5">
                Do I get lifetime updates?
              </AccordionTrigger>
              <AccordionContent className="text-stone-400 pb-5">
                Yes! Your one-time purchase includes all future updates. As we
                add new providers, features, and improvements, you&apos;ll get
                them automatically at no extra cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="text-white hover:no-underline py-5">
                Can I get a refund?
              </AccordionTrigger>
              <AccordionContent className="text-stone-400 pb-5">
                Absolutely. We offer a 14-day money-back guarantee, no questions
                asked. If VixPic isn&apos;t right for you, just email us and
                we&apos;ll refund your purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="text-white hover:no-underline py-5">
                What if I don&apos;t have an API key yet?
              </AccordionTrigger>
              <AccordionContent className="text-stone-400 pb-5">
                No problem! We&apos;ll guide you through getting one. Most
                providers offer free credits to start:
                <ul className="mt-3 space-y-1.5 ml-1">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a87c] shrink-0" />
                    OpenAI: $5 free credits
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a87c]/70 shrink-0" />
                    Replicate: Free tier available
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a87c]/50 shrink-0" />
                    Together AI: $1 free credits
                  </li>
                </ul>
                <p className="mt-3 text-sm">
                  You can try VixPic with free provider credits before
                  committing.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a87c]/[0.06] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Ready to Create Without Limits?
          </h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who switched from expensive subscriptions
            to BYOK.
          </p>
          <Link href="/generate">
            <Button
              size="lg"
              className="text-base px-10 h-13 bg-[#c9a87c] hover:bg-[#d4b88a] text-[#08080a] font-semibold shadow-lg shadow-[#c9a87c]/15 hover:shadow-[#c9a87c]/25 transition-all"
            >
              Start Creating Free
              <ArrowRightIcon size={18} className="ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-stone-500 mt-5">
            No credit card required · 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* ============================== FOOTER ============================== */}
      <footer className="border-t border-white/[0.06] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#c9a87c] flex items-center justify-center">
                <SparklesIcon size={12} className="text-[#08080a]" strokeWidth={2} />
              </div>
              <span className="font-display font-bold text-lg">VixPic</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500">
              <a
                href="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <Link
                href="/blog"
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-stone-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a
                href="#"
                className="text-stone-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-stone-600 mt-8">
            &copy; 2026 VixPic. All rights reserved. Part of Zaanix Studio.
          </div>
        </div>
      </footer>
    </div>
  );
}
