import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Social Media Image Generator | VixPic",
  description: "Create stunning social media visuals with AI. Generate Instagram posts, Twitter graphics, LinkedIn banners, and TikTok content. BYOK pricing from $0.003/image.",
  keywords: ["AI social media images", "Instagram post generator", "social media graphics AI", "content creation AI", "social media visual generator"],
};

const platforms = [
  {
    name: "Instagram",
    icon: "📸",
    sizes: ["1080×1080 Feed", "1080×1920 Stories", "1080×566 Landscape"],
    bestFor: "Lifestyle, product showcases, branded content",
  },
  {
    name: "Twitter/X",
    icon: "🐦",
    sizes: ["1600×900 Post", "1500×500 Header", "400×400 Profile"],
    bestFor: "Announcements, quote graphics, thread visuals",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    sizes: ["1200×627 Post", "1584×396 Banner", "800×800 Square"],
    bestFor: "Professional content, thought leadership, case studies",
  },
  {
    name: "TikTok",
    icon: "🎵",
    sizes: ["1080×1920 Video Cover", "1080×1080 Profile"],
    bestFor: "Trending content, text overlays, branded frames",
  },
];

const contentTypes = [
  {
    title: "Quote Graphics",
    description: "Transform quotes into shareable, branded visuals with custom backgrounds and typography styles.",
    icon: "💬",
    prompt: "Minimalist gradient background with inspirational quote typography",
  },
  {
    title: "Product Announcements",
    description: "Create eye-catching launch graphics that stop the scroll and drive engagement.",
    icon: "🚀",
    prompt: "Product hero shot with dynamic lighting and promotional elements",
  },
  {
    title: "Behind-the-Scenes",
    description: "Generate authentic-feeling BTS content even when you don't have photos to share.",
    icon: "🎬",
    prompt: "Cozy workspace scene with laptop, coffee, and creative supplies",
  },
  {
    title: "Educational Carousels",
    description: "Design consistent carousel slides that teach and engage your audience.",
    icon: "📚",
    prompt: "Clean slide design with icon illustrations and key points",
  },
  {
    title: "Seasonal & Holiday",
    description: "Keep your feed fresh with timely seasonal content without planning shoots.",
    icon: "🎃",
    prompt: "Holiday-themed product placement or festive branded graphic",
  },
  {
    title: "User-Generated Style",
    description: "Create authentic-looking UGC content when you're building social proof.",
    icon: "🤳",
    prompt: "Casual lifestyle photo showing product in everyday use",
  },
];

const workflows = [
  {
    title: "The Content Calendar Filler",
    description: "Generate a week's worth of social content in one session. Create variations of each concept for A/B testing.",
    time: "30 minutes → 20+ posts",
  },
  {
    title: "The Real-Time Reactor",
    description: "Jump on trends instantly. Generate relevant visuals while the moment is still hot.",
    time: "5 minutes → trending content",
  },
  {
    title: "The Brand Builder",
    description: "Create consistent visual themes across all platforms. Build recognizable brand aesthetics at scale.",
    time: "1 hour → full brand kit",
  },
];

const faqs = [
  {
    question: "Won't followers notice AI-generated content?",
    answer: "Modern AI models like FLUX Pro produce highly realistic images. The key is using AI as a tool, not a replacement for authentic content. Mix AI-generated visuals with real photos, use AI for concepts and backdrops, and be transparent when appropriate. Many successful creators use AI to enhance their visual output.",
  },
  {
    question: "What about copyright and ownership?",
    answer: "Images generated through VixPic using your API keys belong to you. Different AI providers have different terms, but most (including OpenAI, Replicate models) grant you full commercial rights to generated images. Always check the specific provider's terms for your use case.",
  },
  {
    question: "Can I maintain brand consistency with AI?",
    answer: "Absolutely. VixPic supports style presets and prompt templates. Create a set of prompts that capture your brand's aesthetic (colors, mood, composition) and reuse them across all content. This creates visual consistency that's actually easier to maintain than with traditional photography.",
  },
  {
    question: "How do I get the right dimensions for each platform?",
    answer: "VixPic includes preset dimensions for all major social platforms. Select your platform, and we'll automatically set the correct aspect ratio. You can also use our free resize tool to adapt images to any custom dimensions.",
  },
  {
    question: "Is AI content allowed on social platforms?",
    answer: "Yes, all major social platforms allow AI-generated content. Some platforms (like Meta) are adding disclosure requirements for AI content in certain contexts. VixPic doesn't add any watermarks, so disclosure is at your discretion based on platform guidelines and your audience expectations.",
  },
];

export default function SocialMediaPage() {
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
            📱 Social Media Use Case
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Never Run Out of{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Social Content
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Generate scroll-stopping visuals for Instagram, Twitter, LinkedIn, and TikTok. 
            Create a week's content in 30 minutes, at a fraction of designer costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600">
                Create Social Content
              </Button>
            </Link>
            <Link href="#platforms">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See Platform Sizes
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
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Posts Per Hour</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Platforms Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">$0.003</div>
              <div className="text-sm text-gray-600">Per Image</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">∞</div>
              <div className="text-sm text-gray-600">Creative Ideas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Sizes */}
      <section id="platforms" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Platform-Optimized Sizes</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            VixPic includes presets for every major social platform. 
            One click to set the perfect dimensions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">{platform.icon}</div>
                  <CardTitle>{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-4">
                    {platform.sizes.map((size) => (
                      <div key={size} className="text-sm text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded">
                        {size}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Best for: {platform.bestFor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Content Ideas</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From quote graphics to product announcements, 
            AI handles every type of social content.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content) => (
              <Card key={content.title} className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {content.icon}
                  </div>
                  <CardTitle className="text-lg">{content.title}</CardTitle>
                  <CardDescription>
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded font-mono">
                    Prompt idea: "{content.prompt}"
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Creator Workflows</h2>
          <div className="space-y-6">
            {workflows.map((workflow) => (
              <Card key={workflow.title} className="border-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{workflow.title}</h3>
                      <p className="text-gray-600">{workflow.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="text-purple-600 font-semibold">{workflow.time}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-semibold mb-2">Solo Creators</h3>
              <p className="text-sm text-gray-600">
                Compete with agencies. Create professional content without a design team.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-semibold mb-2">Small Businesses</h3>
              <p className="text-sm text-gray-600">
                Maintain active social presence without hiring a full-time designer.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold mb-2">Social Media Managers</h3>
              <p className="text-sm text-gray-600">
                Handle multiple clients efficiently. Generate content at scale.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Marketing Teams</h3>
              <p className="text-sm text-gray-600">
                Rapid creative iteration. A/B test visuals without designer bottlenecks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion className="w-full">
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
            Fill Your Content Calendar Today
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start with free credits. Create a week's content in your first session.
          </p>
          <Link href="/generate">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100">
              Generate Social Content
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
