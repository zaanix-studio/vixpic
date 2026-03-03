import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stable Diffusion Alternative with Web UI — VixPic (No Setup) | VixPic",
  description: "Use Stable Diffusion without local setup, GPU requirements, or Python. VixPic offers SDXL, Flux, and more via simple web interface. BYOK pricing, no technical skills needed.",
  keywords: ["Stable Diffusion alternative", "Stable Diffusion web UI", "SDXL online", "AI image generator no GPU", "Stable Diffusion without installation", "easy Stable Diffusion", "cloud Stable Diffusion"],
};

const comparisonData = [
  { feature: "Setup Required", sd: "Python, CUDA, models download", vixpic: "None — instant start", winner: "vixpic" },
  { feature: "GPU Required", sd: "Yes (8GB+ VRAM recommended)", vixpic: "No — cloud rendering", winner: "vixpic" },
  { feature: "Technical Skill", sd: "High — command line, configs", vixpic: "None — click and generate", winner: "vixpic" },
  { feature: "Cost", sd: "Free (but need GPU)", vixpic: "Pay per image (~$0.02-0.08)", winner: "tie" },
  { feature: "Models Available", sd: "Unlimited (download any)", vixpic: "SDXL, Flux, DALL-E, more", winner: "sd" },
  { feature: "Fine-tuning", sd: "Full control, LoRAs, training", vixpic: "Use pre-trained only", winner: "sd" },
  { feature: "Image Quality", sd: "SDXL/custom (excellent)", vixpic: "SDXL/Flux (excellent)", winner: "tie" },
  { feature: "Speed", sd: "Depends on your GPU", vixpic: "Fast cloud GPUs (A100s)", winner: "vixpic" },
  { feature: "Mobile Access", sd: "No (desktop only)", vixpic: "Yes — any device", winner: "vixpic" },
  { feature: "Batch Generation", sd: "Yes (scripts)", vixpic: "Yes (built-in UI)", winner: "tie" },
  { feature: "Privacy", sd: "100% local", vixpic: "Edge proxy, keys never stored", winner: "sd" },
  { feature: "Updates", sd: "Manual downloads", vixpic: "Automatic, always latest", winner: "vixpic" },
];

const faqs = [
  {
    q: "Why use VixPic instead of running Stable Diffusion locally?",
    a: "Local SD requires a powerful GPU ($500-2000+), Python setup, model downloads (GB each), and ongoing maintenance. VixPic lets you use the same SDXL models instantly in your browser. You pay per image instead of buying hardware."
  },
  {
    q: "Is VixPic using Stable Diffusion under the hood?",
    a: "Yes! When you select SDXL or SD models in VixPic, we route to providers like Replicate or FAL that run the actual Stable Diffusion models on their GPUs. You get the same quality without the setup."
  },
  {
    q: "How does pricing compare to running locally?",
    a: "Local SD is 'free' per image but requires ~$1000+ GPU investment plus electricity. At $0.04/image on VixPic, you'd need to generate 25,000+ images before local becomes cheaper. For most creators, cloud is more economical."
  },
  {
    q: "Can I use custom models and LoRAs?",
    a: "Currently VixPic supports the models available through our providers (SDXL, Flux, DALL-E, etc.). Custom LoRAs aren't supported yet — if you need heavy customization, local SD is better. We're working on LoRA support."
  },
  {
    q: "What about privacy? I don't want my images on someone's server.",
    a: "VixPic uses edge proxies — your API requests go directly to providers, not through our servers. We never see your prompts or images. For maximum privacy, local SD is still king, but VixPic is the most private cloud option."
  },
  {
    q: "Can I use VixPic on my phone or tablet?",
    a: "Yes! Unlike local Stable Diffusion which needs a desktop with GPU, VixPic works on any device with a browser. Generate images from your iPad, phone, or Chromebook."
  },
];

export default function StableDiffusionAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-warning-muted text-warning-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Stable Diffusion Without the Hassle
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-warning to-destructive bg-clip-text text-transparent">
              Stable Diffusion
            </span>
            {" "}Quality, Zero Setup
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Love SDXL but hate the Python setup, GPU requirements, and model management?
            VixPic gives you the same quality through a simple web interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-warning to-destructive">
                Try SDXL Instantly
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
            The Stable Diffusion Setup Struggle
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "💻",
                title: "GPU Requirements",
                desc: "Need an NVIDIA GPU with 8GB+ VRAM. That's a $500-2000 investment before you generate a single image."
              },
              {
                icon: "🐍",
                title: "Python & Dependencies Hell",
                desc: "Install Python, CUDA, PyTorch, create virtual environments. One wrong version and nothing works."
              },
              {
                icon: "📦",
                title: "Massive Model Downloads",
                desc: "Each model is 2-7GB. Want SDXL, SD 1.5, and some LoRAs? That's 20GB+ before you start."
              },
              {
                icon: "🔧",
                title: "Constant Maintenance",
                desc: "New models, updated UIs, driver updates. Running local SD is a part-time job."
              },
              {
                icon: "🖥️",
                title: "Desktop Only",
                desc: "Can't generate on your phone, tablet, or work laptop. Stuck at your desktop with the GPU."
              },
              {
                icon: "⚡",
                title: "Your GPU = Your Limit",
                desc: "Slow card? Slow generations. Want to batch 100 images? Hope you don't need your computer."
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
            VixPic: SDXL Quality, Zero Friction
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🌐",
                title: "Works in Your Browser",
                desc: "Open VixPic, paste your API key, start generating. No downloads, no installs, no waiting."
              },
              {
                icon: "📱",
                title: "Any Device, Anywhere",
                desc: "Generate from your phone on the bus, your iPad in bed, or your Chromebook at the coffee shop."
              },
              {
                icon: "⚡",
                title: "A100 GPUs in the Cloud",
                desc: "We route to fast cloud GPUs. Get SDXL generations in seconds, not minutes."
              },
              {
                icon: "🔑",
                title: "BYOK = Fair Pricing",
                desc: "Bring your own API key from Replicate or FAL. Pay ~$0.04/image. No markup, no subscription."
              },
              {
                icon: "🆕",
                title: "Always Up to Date",
                desc: "New models? Available instantly. No downloads, no configs. We handle the infrastructure."
              },
              {
                icon: "🎨",
                title: "Multiple Models",
                desc: "SDXL, Flux, DALL-E 3, and more. Switch between models in one click. Compare results."
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
          <h2 className="text-3xl font-bold text-center mb-4">VixPic vs Local Stable Diffusion</h2>
          <p className="text-muted-foreground text-center mb-12">
            An honest comparison for different use cases.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Local SD</th>
                  <th className="py-4 px-6 text-center bg-brand-muted/50">VixPic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className={`py-4 px-6 text-center ${row.winner === 'sd' ? 'text-success font-medium' : 'text-muted-foreground'}`}>
                      {row.sd}
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
            VixPic wins on convenience. Local SD wins on customization and privacy.
          </p>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Real Cost Calculation</h2>
          <p className="text-muted-foreground text-center mb-12">
            When does local SD actually make financial sense?
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🖥️</span>
                  Local Stable Diffusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>GPU (RTX 3080)</span>
                    <span className="font-semibold">~$700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Electricity (~100W for hours)</span>
                    <span className="font-semibold">~$10/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time investment (setup)</span>
                    <span className="font-semibold">4-8 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per image (after setup)</span>
                    <span className="font-semibold text-success">$0.00</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      Break-even vs VixPic: ~17,500 images<br/>
                      (at $0.04/image)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-brand/30 shadow-lg">
              <CardHeader className="bg-brand-muted/50 -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">☁️</span>
                  VixPic (BYOK)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>GPU required</span>
                    <span className="font-semibold text-success">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup time</span>
                    <span className="font-semibold text-success">2 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly minimum</span>
                    <span className="font-semibold text-success">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per image (SDXL)</span>
                    <span className="font-semibold">~$0.04</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      100 images/mo = ~$4/mo<br/>
                      500 images/mo = ~$20/mo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 bg-info-muted/50 p-6 rounded-xl text-center">
            <p className="text-lg">
              <strong>Bottom line:</strong> If you generate less than 15,000 images, VixPic is cheaper.
              <br/>
              <span className="text-muted-foreground">Most creators generate 100-500/month. That&apos;s $4-20 vs $700+ upfront.</span>
            </p>
          </div>
        </div>
      </section>

      {/* When Local SD Is Better */}
      <section className="py-16 px-4 bg-warning-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Honest Take: When Local SD Is Better
          </h2>
          <div className="bg-card p-8 rounded-xl border border-warning/20">
            <p className="text-foreground mb-6">
              We believe in honesty. Here&apos;s when local Stable Diffusion makes more sense:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You need custom models and LoRAs</strong> — If you&apos;re training your own models, fine-tuning, or using niche LoRAs, local is essential. VixPic only supports provider-available models.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You generate thousands of images</strong> — At 15,000+ images, local SD pays off. Professional studios or heavy researchers should invest in hardware.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>Maximum privacy is required</strong> — If images must never leave your machine (legal, medical, etc.), local is the only option. VixPic uses edge proxies but still routes through providers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warning font-bold">→</span>
                <div>
                  <strong>You enjoy tinkering</strong> — Some people love the process of optimizing, tweaking, and customizing. If that&apos;s you, local SD is a great hobby.
                </div>
              </li>
            </ul>
            <p className="text-foreground mt-6">
              For everyone else — creators who want SDXL quality without the headache — VixPic is the faster, cheaper path.
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
      <section className="py-20 px-4 bg-gradient-to-r from-warning to-destructive text-warning-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for SDXL Without the Setup?</h2>
          <p className="text-xl opacity-90 mb-8">
            Try VixPic free. Generate your first image in 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Generating Free
              </Button>
            </Link>
            <Link href="/alternatives">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-warning-foreground text-warning-foreground hover:bg-background/10">
                Compare Other Alternatives
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
