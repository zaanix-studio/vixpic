import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best DALL-E Alternative 2026 — VixPic (Standalone, BYOK, API Access) | VixPic",
  description: "Looking for a DALL-E alternative without ChatGPT subscription? VixPic offers standalone access, BYOK pricing, multiple models, and unlimited generations. Save 80%+.",
  keywords: ["DALL-E alternative", "DALL-E 3 alternative", "OpenAI image generator alternative", "BYOK image generator", "cheap DALL-E alternative", "standalone AI image generator"],
};

const comparisonData = [
  { feature: "Access Method", dalle: "ChatGPT Plus or API", vixpic: "Standalone web app", winner: "vixpic" },
  { feature: "Pricing Model", dalle: "$20/mo bundled or pay-per-image API", vixpic: "BYOK (your API keys) or LTD", winner: "vixpic" },
  { feature: "Generation Limits", dalle: "~50/day on Plus, metered on API", vixpic: "Unlimited (your API limit)", winner: "vixpic" },
  { feature: "Models Available", dalle: "DALL-E 3 only", vixpic: "DALL-E, SDXL, Flux & more", winner: "vixpic" },
  { feature: "Batch Generation", dalle: "No (one at a time)", vixpic: "Yes, with CSV upload", winner: "vixpic" },
  { feature: "Gallery/History", dalle: "Limited in ChatGPT", vixpic: "Full gallery management", winner: "vixpic" },
  { feature: "Prompt Understanding", dalle: "Excellent (GPT-4 enhanced)", vixpic: "Varies by model", winner: "dalle" },
  { feature: "Image Editing", dalle: "Yes (inpainting)", vixpic: "Coming soon", winner: "dalle" },
  { feature: "API Integration", dalle: "Yes (separate pricing)", vixpic: "Yes (included)", winner: "vixpic" },
  { feature: "Privacy", dalle: "OpenAI retains data", vixpic: "Edge proxy, local storage", winner: "vixpic" },
  { feature: "Content Policy", dalle: "Strict (OpenAI ToS)", vixpic: "Provider-dependent", winner: "vixpic" },
  { feature: "Commercial Use", dalle: "Yes", vixpic: "Yes", winner: "tie" },
];

const faqs = [
  {
    q: "Can I use DALL-E 3 through VixPic?",
    a: "Yes! If you have an OpenAI API key, you can use DALL-E 3 directly through VixPic. You get the same model quality with a better interface, batch generation, and gallery management — all at API pricing (typically 80% cheaper than ChatGPT Plus for heavy users)."
  },
  {
    q: "Why is VixPic cheaper than DALL-E through ChatGPT?",
    a: "ChatGPT Plus ($20/mo) bundles DALL-E with the chat model, but limits you to ~50 images/day. With VixPic + your own API key, you pay only for images you generate (~$0.04-0.08 per image). Light users save more because they don't pay when they don't generate."
  },
  {
    q: "What's the difference between DALL-E API and ChatGPT Plus?",
    a: "ChatGPT Plus gives you a chat interface with DALL-E built in, but with daily limits and no batch features. The API gives you direct access at per-image pricing but requires technical setup. VixPic bridges both: easy interface + API pricing + unlimited generation."
  },
  {
    q: "Should I use DALL-E or other models through VixPic?",
    a: "Depends on your needs. DALL-E 3 excels at prompt understanding and following complex instructions. SDXL and Flux are often better for photorealistic images and specific styles. VixPic lets you try all of them with the same interface."
  },
  {
    q: "Is DALL-E 3 better than Midjourney?",
    a: "Different tools for different needs. DALL-E 3 follows prompts more literally and handles text-in-images better. Midjourney has a more artistic, stylized aesthetic. VixPic gives you access to DALL-E and SDXL/Flux, covering most use cases."
  },
  {
    q: "Can I use VixPic without an OpenAI key?",
    a: "Absolutely. VixPic supports multiple providers: Replicate (for SDXL, Flux), FAL, and OpenAI. You can also use our 9+ free tools without any API key. Many users prefer Replicate for lower costs."
  },
];

export default function DalleAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🤖 #1 DALL-E Alternative for Standalone Access
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Best{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DALL-E Alternative
            </span>
            {" "}in 2026
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don&apos;t want to pay $20/month for ChatGPT Plus just to use DALL-E? 
            VixPic gives you standalone access, multiple models, and BYOK pricing.
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

      {/* The Problem */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-red-800">
            The Problem with DALL-E Access in 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📦",
                title: "Bundled with ChatGPT",
                desc: "Want DALL-E? You have to pay $20/month for ChatGPT Plus — even if you only want image generation."
              },
              {
                icon: "🚧",
                title: "Daily Generation Limits",
                desc: "ChatGPT Plus limits you to roughly 50 images per day. Need more? You're out of luck or paying extra."
              },
              {
                icon: "⚙️",
                title: "API Requires Technical Setup",
                desc: "Direct API access exists but needs developer skills. No simple interface for non-technical users."
              },
              {
                icon: "🎯",
                title: "One Model, One Style",
                desc: "DALL-E is great, but it's just one model. No access to SDXL, Flux, or other generators through the same interface."
              },
              {
                icon: "📊",
                title: "No Batch Generation",
                desc: "Generate one image at a time in ChatGPT. Need 50 product variants? Click 50 times."
              },
              {
                icon: "📁",
                title: "Poor Gallery Management",
                desc: "Images scattered across chat conversations. No proper organization, tagging, or bulk download."
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

      {/* The Solution */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-green-800">
            How VixPic Solves These Problems
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎯",
                title: "Standalone Image Tool",
                desc: "VixPic is built for one thing: AI image generation. No chat interface, no bundled features. Just images."
              },
              {
                icon: "♾️",
                title: "Unlimited Generation",
                desc: "Your API key, your limits. Generate as many images as your API plan allows — no arbitrary daily caps."
              },
              {
                icon: "🖱️",
                title: "No-Code Interface",
                desc: "Modern web app anyone can use. Add your API key once, then just type prompts and generate."
              },
              {
                icon: "🎨",
                title: "Multiple Models",
                desc: "Access DALL-E, SDXL, Flux, and more through one interface. Switch models with a dropdown."
              },
              {
                icon: "📦",
                title: "Batch Generation",
                desc: "Upload a CSV of prompts, generate hundreds of images at once. Perfect for e-commerce and content at scale."
              },
              {
                icon: "🗂️",
                title: "Full Gallery Management",
                desc: "All your images in one place. Search, filter, tag, bulk download. Never lose a generation again."
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

      {/* Feature Comparison */}
      <section id="comparison" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">VixPic vs DALL-E: Full Comparison</h2>
          <p className="text-gray-600 text-center mb-12">
            An honest comparison of VixPic against DALL-E (via ChatGPT Plus and API).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">DALL-E (ChatGPT/API)</th>
                  <th className="py-4 px-6 text-center bg-purple-50">VixPic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className={`py-4 px-6 text-center ${row.winner === 'dalle' ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                      {row.dalle}
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
            VixPic wins on 9 of 12 features. DALL-E excels in prompt understanding and built-in image editing.
          </p>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Real Cost Breakdown</h2>
          <p className="text-gray-600 text-center mb-12">
            How much do you actually spend on AI image generation?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ChatGPT Plus Path */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center bg-gray-50 -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">
                <CardTitle>ChatGPT Plus Path</CardTitle>
                <p className="text-sm text-gray-600">Bundled access to DALL-E</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span>Monthly subscription</span>
                    <span className="font-bold">$20/mo</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Daily limit</span>
                    <span>~50 images</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Monthly max</span>
                    <span>~1,500 images</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Cost per image (at max)</span>
                    <span>$0.013</span>
                  </div>
                  <div className="flex justify-between py-2 text-orange-600">
                    <span>Light user (50/mo)</span>
                    <span className="font-bold">$0.40/image 😬</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* VixPic Path */}
            <Card className="border-2 border-purple-300 shadow-lg">
              <CardHeader className="text-center bg-purple-50 -mx-6 -mt-6 px-6 pt-6 rounded-t-lg">
                <CardTitle>VixPic BYOK Path</CardTitle>
                <p className="text-sm text-gray-600">Direct API access</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span>VixPic (LTD or free)</span>
                    <span className="font-bold">$0-149 once</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Generation limit</span>
                    <span>Unlimited</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>DALL-E 3 (API)</span>
                    <span>$0.04-0.08/image</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>SDXL (Replicate)</span>
                    <span>$0.02-0.04/image</span>
                  </div>
                  <div className="flex justify-between py-2 text-green-600">
                    <span>Light user (50/mo)</span>
                    <span className="font-bold">$1-4/mo 🎉</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Scenario Table */}
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="font-bold text-lg mb-4">Monthly Cost by Usage Level</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="py-3 text-left">Usage</th>
                  <th className="py-3 text-center">ChatGPT Plus</th>
                  <th className="py-3 text-center">DALL-E API Direct</th>
                  <th className="py-3 text-center bg-purple-50">VixPic + SDXL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">50 images</td>
                  <td className="py-3 text-center">$20</td>
                  <td className="py-3 text-center">$2-4</td>
                  <td className="py-3 text-center bg-purple-50 text-green-600 font-medium">~$2</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">200 images</td>
                  <td className="py-3 text-center">$20</td>
                  <td className="py-3 text-center">$8-16</td>
                  <td className="py-3 text-center bg-purple-50 text-green-600 font-medium">~$8</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">500 images</td>
                  <td className="py-3 text-center">$20</td>
                  <td className="py-3 text-center">$20-40</td>
                  <td className="py-3 text-center bg-purple-50 text-green-600 font-medium">~$20</td>
                </tr>
                <tr>
                  <td className="py-3">1,500+ images</td>
                  <td className="py-3 text-center">Daily limits hit</td>
                  <td className="py-3 text-center">$60-120</td>
                  <td className="py-3 text-center bg-purple-50 text-green-600 font-medium">~$60</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4">
              ChatGPT Plus only makes sense if you max out daily limits AND use the chat features. 
              For most image-focused users, BYOK wins.
            </p>
          </div>
        </div>
      </section>

      {/* When DALL-E Is Better */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Honest Take: When DALL-E (via ChatGPT) Is Still Better
          </h2>
          <div className="bg-white p-8 rounded-xl border border-orange-200">
            <p className="text-gray-700 mb-6">
              We&apos;re honest about our limitations. DALL-E via ChatGPT might be better if:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <div>
                  <strong>You already pay for ChatGPT Plus</strong> — If you&apos;re using GPT-4 for chat anyway, DALL-E is a free bonus. Adding another tool doesn&apos;t save you money.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <div>
                  <strong>You need conversational refinement</strong> — ChatGPT lets you say &quot;make it more blue&quot; or &quot;add a dog on the left.&quot; VixPic requires explicit prompts.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <div>
                  <strong>You need image editing (inpainting)</strong> — DALL-E in ChatGPT can edit parts of existing images. VixPic doesn&apos;t support this yet.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <div>
                  <strong>You value text-in-image accuracy</strong> — DALL-E 3 handles text generation better than most models. If you need accurate text in images, it&apos;s the leader.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use DALL-E Through VixPic */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Fun Fact: You Can Use DALL-E Through VixPic</h2>
          <p className="text-xl text-gray-600 mb-8">
            VixPic supports OpenAI&apos;s API directly. Add your OpenAI key, select DALL-E 3, and generate — 
            same model, better interface, API pricing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="font-bold">Get OpenAI Key</h3>
              <p className="text-sm text-gray-600">Create one at platform.openai.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="font-bold">Add to VixPic</h3>
              <p className="text-sm text-gray-600">Paste in Settings → API Keys</p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="font-bold">Generate</h3>
              <p className="text-sm text-gray-600">Select DALL-E 3 and create</p>
            </div>
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
          <h2 className="text-3xl font-bold mb-4">Ready for a Better DALL-E Experience?</h2>
          <p className="text-xl opacity-90 mb-8">
            Try VixPic free — no credit card, no ChatGPT subscription required.
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
