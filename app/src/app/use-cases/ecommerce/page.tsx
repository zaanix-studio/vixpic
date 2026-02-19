import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Photos for E-commerce | VixPic",
  description: "Create professional e-commerce product photos with AI. Generate lifestyle shots, white backgrounds, and mockups without expensive photoshoots. BYOK pricing from $0.003/image.",
  keywords: ["AI product photography", "e-commerce product photos", "AI generated product images", "product photo generator", "white background product photos"],
};

const features = [
  {
    title: "White Background Product Shots",
    description: "Clean, professional product images on pure white backgrounds. Perfect for Amazon, eBay, and Shopify listings.",
    icon: "⬜",
  },
  {
    title: "Lifestyle & Context Shots",
    description: "Place your products in realistic environments. Show items in use without expensive location shoots.",
    icon: "🏠",
  },
  {
    title: "Multiple Angles & Variations",
    description: "Generate product images from different angles and perspectives. Test color variations instantly.",
    icon: "🔄",
  },
  {
    title: "Seasonal & Holiday Themes",
    description: "Create holiday-specific product imagery. Update your catalog for Christmas, Halloween, or any season.",
    icon: "🎄",
  },
];

const workflows = [
  {
    step: 1,
    title: "Upload or Describe Your Product",
    description: "Use an existing product photo as reference or describe your product in detail.",
  },
  {
    step: 2,
    title: "Choose Your Scene",
    description: "Select white background, lifestyle setting, or custom environment for your product.",
  },
  {
    step: 3,
    title: "Generate Variations",
    description: "Create multiple versions to A/B test. Find the images that convert best.",
  },
  {
    step: 4,
    title: "Download & Use",
    description: "Export high-resolution images ready for your e-commerce platform.",
  },
];

const comparison = [
  { item: "Professional photography", traditional: "$500-2000/product", vixpic: "$0.05-0.20/product" },
  { item: "Turnaround time", traditional: "1-2 weeks", vixpic: "Minutes" },
  { item: "Variations/angles", traditional: "Limited by budget", vixpic: "Unlimited" },
  { item: "Seasonal updates", traditional: "New shoot required", vixpic: "Instant regeneration" },
  { item: "Scale to 1000 SKUs", traditional: "$500K-2M", vixpic: "$50-200" },
];

const faqs = [
  {
    question: "Can AI product photos match professional photography quality?",
    answer: "For many use cases, yes. AI-generated images are already being used by major e-commerce platforms for product listings. The key is using the right prompts and models. FLUX Pro and DALL-E 3 can produce photorealistic results that are difficult to distinguish from professional photos. For luxury or highly technical products, you might still want professional shots, but AI excels at volume and variation.",
  },
  {
    question: "Do I need my original product photos?",
    answer: "Not necessarily. You can describe your product in detail and let AI generate images from scratch. However, having reference photos (even basic ones from your phone) helps ensure accuracy in details like color, texture, and proportions. VixPic supports both workflows.",
  },
  {
    question: "Will my images look generic or AI-generated?",
    answer: "With good prompts and the right model selection, AI images can be highly specific and realistic. The key is detailed prompts describing materials, lighting, and context. VixPic includes prompt templates optimized for product photography to help you get professional results.",
  },
  {
    question: "What about Amazon's image requirements?",
    answer: "Amazon requires pure white backgrounds (RGB 255,255,255) for main product images. AI models like DALL-E 3 can generate these, and VixPic's background remover tool ensures perfect white backgrounds. You can also create lifestyle images for secondary slots.",
  },
  {
    question: "How does BYOK pricing work for high-volume sellers?",
    answer: "With BYOK (Bring Your Own Key), you pay AI providers directly at their rates. Using FLUX Schnell (~$0.003/image), 10,000 product images cost about $30 in API fees. Compare that to traditional photography at $50-500 per product. VixPic's one-time license ($29-149) gives you unlimited access to the platform.",
  },
];

export default function EcommercePage() {
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
            <Link href="/use-cases" className="text-gray-600 hover:text-gray-900 hidden sm:block">Use Cases</Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 hidden sm:block">Pricing</Link>
            <Link href="/generate"><Button>Get Started</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🛍️ E-commerce Use Case
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Professional Product Photos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Without the Photoshoot
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Generate stunning e-commerce product images with AI. White backgrounds, 
            lifestyle shots, and seasonal themes — all for a fraction of traditional photography costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600">
                Try Product Photo Generator
              </Button>
            </Link>
            <Link href="#comparison">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See Cost Comparison
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">90%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1000x</div>
              <div className="text-sm text-gray-600">Faster Scaling</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">∞</div>
              <div className="text-sm text-gray-600">Variations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">$0.003</div>
              <div className="text-sm text-gray-600">Per Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What You Can Create</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From clean white backgrounds to immersive lifestyle scenes, 
            AI handles every type of e-commerce imagery.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {workflows.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="comparison" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Cost Comparison</h2>
          <p className="text-gray-600 text-center mb-12">
            See how VixPic compares to traditional product photography.
          </p>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Item</th>
                    <th className="text-center px-6 py-4 font-semibold text-red-600">Traditional</th>
                    <th className="text-center px-6 py-4 font-semibold text-green-600">VixPic + AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium">{row.item}</td>
                      <td className="text-center px-6 py-4 text-red-600">{row.traditional}</td>
                      <td className="text-center px-6 py-4 text-green-600 font-semibold">{row.vixpic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Use Cases Detail */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold mb-2">Dropshippers</h3>
              <p className="text-gray-600">
                Create unique product images for items you never physically handle. 
                Stand out from competitors using the same supplier photos.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">Amazon Sellers</h3>
              <p className="text-gray-600">
                Generate Amazon-compliant white background images plus lifestyle 
                shots for A+ Content. Scale across your entire catalog.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">DTC Brands</h3>
              <p className="text-gray-600">
                Maintain consistent brand aesthetics across thousands of products. 
                Quickly create seasonal campaigns and promotional imagery.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Product Imagery?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start with free credits from AI providers. No credit card required.
          </p>
          <Link href="/generate">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100">
              Generate Your First Product Photo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          © 2026 VixPic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
