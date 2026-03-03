import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Thumbnail Generator for YouTube & Blogs | VixPic",
  description: "Create click-worthy thumbnails with AI. Generate YouTube thumbnails, blog headers, and video covers that boost CTR. BYOK pricing from $0.003/image.",
  keywords: ["AI thumbnail generator", "YouTube thumbnail maker", "blog header generator", "thumbnail creator AI", "video thumbnail generator"],
};

const thumbnailTypes = [
  {
    title: "YouTube Thumbnails",
    description: "Eye-catching thumbnails optimized for 1280×720. Designed to stand out in search results and suggested videos.",
    icon: "🎬",
    size: "1280×720",
    tips: ["High contrast colors", "Expressive faces", "Bold text overlays", "Curiosity gap elements"],
  },
  {
    title: "Blog Post Headers",
    description: "Professional featured images for blog posts. Optimized for SEO and social sharing.",
    icon: "📝",
    size: "1200×630",
    tips: ["On-brand visuals", "Clear subject focus", "Works at small sizes", "Consistent style"],
  },
  {
    title: "Podcast Covers",
    description: "Square artwork for podcast episodes. Legible at small sizes, compelling at full resolution.",
    icon: "🎙️",
    size: "3000×3000",
    tips: ["Episode-specific imagery", "Readable text", "Brand colors", "Guest photos"],
  },
  {
    title: "Course Thumbnails",
    description: "Professional visuals for online courses. Build trust and communicate value instantly.",
    icon: "🎓",
    size: "1280×720",
    tips: ["Professional look", "Topic visualization", "Trust signals", "Outcome focus"],
  },
];

const ctrFactors = [
  { factor: "Faces with emotion", impact: "+25% CTR", description: "Surprised, curious, or excited expressions grab attention" },
  { factor: "High contrast", impact: "+20% CTR", description: "Bold colors that pop against YouTube's white/dark backgrounds" },
  { factor: "Text overlay (3-5 words)", impact: "+15% CTR", description: "Curiosity-inducing text that complements the title" },
  { factor: "Bright colors", impact: "+12% CTR", description: "Yellow, red, and blue perform best statistically" },
  { factor: "Close-up framing", impact: "+10% CTR", description: "Fill the frame with your subject, no wasted space" },
];

const workflows = [
  {
    step: 1,
    title: "Describe Your Concept",
    description: "Tell VixPic what your video/post is about. Include the emotion, style, and key visual elements you want.",
  },
  {
    step: 2,
    title: "Generate Variations",
    description: "Create 5-10 thumbnail options in seconds. Explore different compositions, colors, and styles.",
  },
  {
    step: 3,
    title: "A/B Test Winners",
    description: "Use YouTube's built-in A/B testing or your own analytics to find top performers.",
  },
  {
    step: 4,
    title: "Build Your Library",
    description: "Save winning concepts as templates. Maintain brand consistency while optimizing for clicks.",
  },
];

const faqs = [
  {
    question: "Can AI thumbnails really compete with custom designs?",
    answer: "Yes, and often they outperform them. AI excels at generating high-contrast, attention-grabbing compositions — exactly what thumbnails need. Many top YouTubers use AI as part of their thumbnail workflow, either for concept generation or final images. The key is iteration: generate many options and test what works.",
  },
  {
    question: "How do I add text to AI-generated thumbnails?",
    answer: "You have two options: 1) Use DALL-E 3, which has the best text rendering of any AI model and can include legible text directly in generated images. 2) Generate the background/scene with any model, then add text in VixPic's editor or your preferred design tool. Most creators use option 2 for maximum control over typography.",
  },
  {
    question: "What makes a good thumbnail prompt?",
    answer: "Effective thumbnail prompts include: the subject/topic, the emotion you want to convey, color palette preferences, composition style (close-up, dynamic angle, etc.), and any specific elements to include. For example: 'Shocked expression face, bright yellow background, dramatic lighting, close-up portrait, high contrast, professional YouTube thumbnail style'.",
  },
  {
    question: "Can I use photos of myself in AI thumbnails?",
    answer: "Some AI models support image-to-image generation, where you provide a reference photo and the AI creates variations or places you in new contexts. VixPic supports this workflow with models like SDXL and FLUX. For best results, use a clear, well-lit reference photo.",
  },
  {
    question: "How many thumbnail variations should I create?",
    answer: "We recommend generating at least 5-10 options per video. YouTube's A/B testing feature (available to channels with 1000+ subscribers) lets you test multiple thumbnails automatically. Even without it, having options lets you change thumbnails if performance is low.",
  },
];

const testimonialStats = [
  { stat: "2.3x", label: "Average CTR increase", context: "after switching to AI-generated thumbnails" },
  { stat: "45 min", label: "Time saved per video", context: "compared to manual design or outsourcing" },
  { stat: "10+", label: "Variations per video", context: "for comprehensive A/B testing" },
];

export default function ThumbnailsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-muted text-brand-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎬 Thumbnails Use Case
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Thumbnails That{" "}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Demand Clicks
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Generate scroll-stopping thumbnails for YouTube, blogs, and courses with AI.
            A/B test dozens of variations. Find what converts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-brand to-info">
                Create Thumbnails
              </Button>
            </Link>
            <Link href="#ctr-factors">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn CTR Secrets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {testimonialStats.map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-brand mb-1">{item.stat}</div>
                <div className="font-semibold">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thumbnail Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Thumbnail Types</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Optimized presets for every platform. One click to set the perfect dimensions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {thumbnailTypes.map((type) => (
              <Card key={type.title} className="border-2 hover:border-brand/20 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-brand-muted rounded-lg flex items-center justify-center text-2xl">
                      {type.icon}
                    </div>
                    <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {type.size}
                    </span>
                  </div>
                  <CardTitle className="mt-4">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Pro tips:</span>
                    <ul className="mt-2 space-y-1">
                      {type.tips.map((tip) => (
                        <li key={tip} className="flex items-center gap-2">
                          <span className="text-brand">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTR Factors */}
      <section id="ctr-factors" className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">CTR Science</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Research-backed thumbnail elements that drive clicks.
            VixPic makes it easy to incorporate all of them.
          </p>
          <div className="space-y-4">
            {ctrFactors.map((item) => (
              <Card key={item.factor} className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{item.factor}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-xl font-bold text-success flex-shrink-0 ml-4">
                      {item.impact}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Thumbnail Workflow</h2>
          <div className="space-y-8">
            {workflows.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand text-brand-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="font-semibold mb-2">YouTubers</h3>
              <p className="text-sm text-muted-foreground">
                Stop losing views to bad thumbnails. Test what actually works.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="font-semibold mb-2">Bloggers</h3>
              <p className="text-sm text-muted-foreground">
                Professional featured images for every post. Boost social sharing.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-semibold mb-2">Course Creators</h3>
              <p className="text-sm text-muted-foreground">
                Polished visuals that build trust and increase enrollments.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🎙️</div>
              <h3 className="font-semibold mb-2">Podcasters</h3>
              <p className="text-sm text-muted-foreground">
                Episode-specific artwork without a design subscription.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Prompt Examples */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Example Prompts</h2>
          <p className="text-muted-foreground text-center mb-12">
            Copy these proven prompts and customize for your content.
          </p>
          <div className="space-y-4">
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">😱</span>
                  <div>
                    <h4 className="font-semibold mb-1">Reaction/Shock Thumbnail</h4>
                    <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">
                      "Shocked expression, wide eyes, open mouth, bright yellow background, 
                      dramatic studio lighting, high contrast, close-up portrait photo, 
                      professional YouTube thumbnail style"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="font-semibold mb-1">Tutorial/How-To Thumbnail</h4>
                    <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">
                      "Clean minimalist workspace, [product/topic] prominently displayed, 
                      soft natural lighting, modern aesthetic, professional flat lay, 
                      subtle gradient background, high-resolution detail shot"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <h4 className="font-semibold mb-1">Drama/Controversy Thumbnail</h4>
                    <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">
                      "Split composition, versus format, dramatic red and blue lighting, 
                      high tension atmosphere, bold contrast, cinematic movie poster style, 
                      dark moody background"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand to-info text-brand-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Leaving Views on the Table
          </h2>
          <p className="text-xl text-brand-muted mb-8">
            Great content deserves great thumbnails. Start generating now.
          </p>
          <Link href="/generate">
            <Button size="lg" className="text-lg px-8 py-6 bg-background text-brand hover:bg-muted">
              Create Your First Thumbnail
            </Button>
          </Link>
        </div>
      </section>

    </>
  );
}
