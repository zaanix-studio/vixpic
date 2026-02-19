import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Generation Use Cases | VixPic",
  description: "Discover how VixPic helps e-commerce sellers, content creators, and marketers create professional AI images at a fraction of the cost.",
  keywords: ["AI image generator", "use cases", "e-commerce photos", "social media images", "thumbnail generator"],
};

const useCases = [
  {
    title: "E-commerce Product Photos",
    description: "Create professional product images, lifestyle shots, and mockups without expensive photoshoots.",
    icon: "🛍️",
    href: "/use-cases/ecommerce",
    benefits: ["Replace expensive product photography", "A/B test different backgrounds", "Scale to thousands of SKUs"],
    stats: "Save 90% on product photography",
  },
  {
    title: "Social Media Content",
    description: "Generate scroll-stopping visuals for Instagram, Twitter, LinkedIn, and TikTok in seconds.",
    icon: "📱",
    href: "/use-cases/social-media",
    benefits: ["Consistent brand visuals", "Never run out of content ideas", "Platform-optimized dimensions"],
    stats: "Create 50+ posts per day",
  },
  {
    title: "YouTube & Blog Thumbnails",
    description: "Design eye-catching thumbnails that boost click-through rates and drive more views.",
    icon: "🎬",
    href: "/use-cases/thumbnails",
    benefits: ["A/B test thumbnail variations", "Consistent channel branding", "Generate ideas instantly"],
    stats: "2x higher CTR on average",
  },
  {
    title: "Marketing & Ads",
    description: "Create compelling ad creatives, landing page heroes, and marketing materials.",
    icon: "📈",
    href: "/use-cases/marketing",
    benefits: ["Rapid creative iteration", "Test concepts before production", "Localized ad variations"],
    stats: "10x faster creative cycles",
    comingSoon: true,
  },
  {
    title: "Game & App Assets",
    description: "Generate concept art, icons, textures, and UI elements for games and applications.",
    icon: "🎮",
    href: "/use-cases/game-assets",
    benefits: ["Rapid prototyping", "Style consistency", "Indie-friendly budgets"],
    stats: "From concept to asset in minutes",
    comingSoon: true,
  },
  {
    title: "Print on Demand",
    description: "Create unique designs for t-shirts, mugs, posters, and other merchandise.",
    icon: "👕",
    href: "/use-cases/print-on-demand",
    benefits: ["Unlimited design variations", "Trend-responsive designs", "Zero inventory risk"],
    stats: "Launch new designs daily",
    comingSoon: true,
  },
];

export default function UseCasesPage() {
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
            <Link href="/use-cases" className="text-purple-600 font-medium hidden sm:block">Use Cases</Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 hidden sm:block">Pricing</Link>
            <Link href="/generate"><Button>Get Started</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            AI Image Generation for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Every Use Case
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From e-commerce product shots to social media content, VixPic helps you create 
            professional images 10x faster and 80% cheaper than traditional methods.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Card 
                key={useCase.href}
                className={`border-2 hover:border-purple-200 transition-all hover:shadow-lg relative ${
                  useCase.comingSoon ? "opacity-75" : ""
                }`}
              >
                {useCase.comingSoon && (
                  <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                    Coming Soon
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-600 mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-semibold text-purple-600">{useCase.stats}</span>
                    {!useCase.comingSoon && (
                      <Link href={useCase.href}>
                        <Button variant="outline" size="sm">Learn More →</Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of creators using AI to produce professional images at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600">
                Start Creating Free
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Pricing
              </Button>
            </Link>
          </div>
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
