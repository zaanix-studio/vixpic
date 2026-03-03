import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    slug: "ai-image-tools-2026",
    title: "The State of AI Image Generation in 2026",
    description: "How the landscape has changed, what's working, and where things are headed for creators and businesses.",
    category: "News",
    date: "2026-03-01",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "free-ai-image-tools",
    title: "15+ Free Image Tools Every Creator Needs",
    description: "Resize, compress, convert, remove backgrounds, and more — all in your browser, completely free. No signup required.",
    category: "Guide",
    date: "2026-03-01",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: "byok-explained",
    title: "BYOK Explained: Why Bring Your Own Key Changes Everything",
    description: "Learn how BYOK (Bring Your Own Key) AI tools save you money and give you full control over your image generation.",
    category: "Guide",
    date: "2026-02-28",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "dalle-vs-stable-diffusion-vs-flux",
    title: "DALL-E vs Stable Diffusion vs Flux: Complete 2026 Comparison",
    description: "An honest comparison of the three major AI image models. Which one should you use for your projects?",
    category: "Comparison",
    date: "2026-02-27",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "save-money-ai-images",
    title: "How to Save 80% on AI Image Generation (Real Numbers)",
    description: "A detailed breakdown of AI image costs: subscriptions vs pay-per-use vs BYOK. The math might surprise you.",
    category: "Guide",
    date: "2026-02-26",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "perfect-prompts-product-photos",
    title: "Perfect Prompts for E-commerce Product Photos",
    description: "Copy-paste prompt templates for product photography that actually converts. Works with any AI model.",
    category: "Tutorial",
    date: "2026-02-25",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "api-keys-security-guide",
    title: "Keeping Your API Keys Safe: A Non-Technical Guide",
    description: "Everything you need to know about API key security, explained simply. No developer background required.",
    category: "Guide",
    date: "2026-02-24",
    readTime: "4 min",
    featured: false,
  },
  {
    slug: "youtube-thumbnail-prompts",
    title: "50 YouTube Thumbnail Prompts That Get Clicks",
    description: "Battle-tested AI prompts for creating thumbnails that stand out. Organized by niche and style.",
    category: "Tutorial",
    date: "2026-02-23",
    readTime: "10 min",
    featured: false,
  },
];

const categories = ["All", "Guide", "Tutorial", "Comparison", "News"];

export default function BlogPage() {
  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            VixPic Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tutorials, guides, and insights on AI image generation. 
            Learn to create better images, faster and cheaper.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-brand hover:bg-brand/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full border-2 hover:border-brand/30 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-brand-muted text-brand-muted-foreground rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-brand transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">All Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:border-brand/20 transition-all hover:shadow-md group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-brand transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand to-info">
        <div className="max-w-2xl mx-auto text-center text-brand-foreground">
          <h2 className="text-3xl font-bold mb-4">Get AI Image Tips Weekly</h2>
          <p className="text-inverted-muted mb-8">
            Join 2,000+ creators getting practical tips on AI image generation.
            No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground"
            />
            <Button className="bg-background text-brand hover:bg-muted px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
