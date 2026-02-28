import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function YouTubeThumbnailsPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
            <span className="font-bold text-xl">VixPic</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">← Back to Blog</Link>
            <Link href="/generate"><Button>Try VixPic</Button></Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
              Tutorial
            </span>
            <span className="text-sm text-gray-500">10 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            50 YouTube Thumbnail Prompts That Get Clicks
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Battle-tested AI prompts for creating thumbnails that stand out. Organized by niche and style.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-b py-4">
            <span>February 23, 2026</span>
            <span>•</span>
            <span>By VixPic Team</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl">
            Your thumbnail is your video's first impression. In a sea of content, you have 
            <strong> 0.5 seconds</strong> to convince someone to click. These prompts help 
            you create thumbnails that stop the scroll.
          </p>

          <p>
            Each prompt is designed for specific thumbnail patterns that actually perform. 
            Copy, paste, customize — then test what works for your audience.
          </p>

          <Card className="my-8 bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">💡 Pro Tip: The 3-Second Test</h3>
              <p className="text-sm text-gray-700">
                After generating a thumbnail, shrink it to mobile size and glance at it for 3 seconds. 
                Can you tell what the video is about? If not, simplify.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-12 mb-4">General Thumbnail Principles</h2>

          <p>Before the prompts, remember these universal rules:</p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li><strong>High contrast:</strong> Thumbnails are viewed small — contrast is everything</li>
            <li><strong>2-3 focal points max:</strong> Face, text, one object</li>
            <li><strong>Emotions over explanations:</strong> Shock, joy, curiosity &gt; descriptions</li>
            <li><strong>Consistent branding:</strong> Use similar colors/style across your channel</li>
            <li><strong>Leave space for text:</strong> You'll add your own headline</li>
          </ul>

          {/* Tech/Tutorial Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">🖥️ Tech & Tutorial Thumbnails</h2>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #1 - The Shocked Reaction</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Professional YouTube thumbnail, person with shocked expression looking at laptop screen, 
                  dramatic blue and orange lighting, clean background with subtle tech elements, 
                  negative space on right for text, 1280x720, high contrast
                </code>
              </div>
              
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #2 - The Before/After Split</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Split-screen YouTube thumbnail, left side messy chaotic code on screen, 
                  right side clean organized code, dramatic diagonal split, 
                  frustrated expression left vs confident smile right, vibrant colors, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #3 - The Minimal Tool Focus</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Clean minimal YouTube thumbnail, [TOOL NAME] logo large and centered, 
                  gradient background from dark blue to purple, subtle glow effect, 
                  professional tech aesthetic, 1280x720, no text
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #4 - The Money Shot</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  YouTube thumbnail, person pointing at floating dollar signs and upward arrows, 
                  green money aesthetic, excited expression, laptop visible, 
                  clean gradient background, high energy composition, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #5 - The Comparison Arrows</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  YouTube thumbnail comparison layout, [ITEM A] logo on left vs [ITEM B] logo on right, 
                  large VS text in center with fire effects, dramatic red and blue opposing colors, 
                  battle aesthetic, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Gaming Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">🎮 Gaming Thumbnails</h2>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #6 - The Epic Moment</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Dynamic gaming YouTube thumbnail, character in action pose, 
                  dramatic explosion and particle effects in background, 
                  intense red and orange color grading, cinematic lighting, 
                  motion blur on edges, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #7 - The Reaction Face</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Gaming YouTube thumbnail, gamer face extreme close-up with shocked expression, 
                  game screenshot blurred in background, neon green and purple lighting, 
                  RGB aesthetic, high contrast, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #8 - The Loot/Rare Item</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Gaming thumbnail, rare glowing item centered with holy light rays from above, 
                  treasure chest scene, gold and purple legendary colors, 
                  sparkle effects, dramatic presentation, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #9 - The Challenge Setup</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  YouTube thumbnail challenge format, person with determined/worried expression, 
                  game elements surrounding them threateningly, 
                  red warning colors, danger aesthetic, bold composition, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Lifestyle/Vlog Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">✈️ Lifestyle & Vlog Thumbnails</h2>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #10 - The Travel Hero Shot</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Travel YouTube thumbnail, person standing at iconic [LOCATION] landmark, 
                  golden hour lighting, arms spread in wonder pose, 
                  vibrant saturated colors, cinematic wide angle, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #11 - The Luxury Tease</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Lifestyle thumbnail, person in luxury setting (private jet/yacht/penthouse), 
                  casual confident pose, warm golden lighting, 
                  aspirational but authentic vibe, subtle smile, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #12 - The Transformation</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Before and after thumbnail, dramatic transformation composition, 
                  left side tired/messy, right side polished/confident, 
                  arrow pointing from left to right, bright energetic colors, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #13 - The Day in Life</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Vlog thumbnail, candid lifestyle shot, person mid-activity in aesthetic environment, 
                  morning light through window, coffee/breakfast visible, 
                  cozy but aspirational, soft warm tones, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">📚 Educational Thumbnails</h2>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #14 - The Whiteboard Explainer</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Educational YouTube thumbnail, person pointing at whiteboard with diagrams, 
                  professional but approachable, clean background, 
                  key concept illustrated simply, warm lighting, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #15 - The Mind-Blown Reveal</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Educational thumbnail, person with surprised enlightened expression, 
                  lightbulb moment, abstract knowledge visualization floating around head, 
                  purple and blue enlightenment colors, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #16 - The Myth Buster</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Thumbnail debunking myths, large red X over common misconception image, 
                  person with knowing smirk expression, 
                  dramatic red warning aesthetic, bold composition, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #17 - The Step-by-Step</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Tutorial thumbnail, numbered steps 1-2-3 floating in space, 
                  clean gradient background, arrow progression, 
                  professional helpful aesthetic, clear visual hierarchy, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Business/Finance Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">💰 Business & Finance Thumbnails</h2>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #18 - The Chart Success</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Finance YouTube thumbnail, green upward trending chart, 
                  person pointing confidently at the growth, 
                  money/currency symbols floating, success energy, 
                  clean professional background, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #19 - The Mistake Warning</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Warning style thumbnail, person with concerned expression, 
                  red warning signs and X marks, money falling/escaping visualization, 
                  dramatic cautionary aesthetic, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #20 - The Secret Reveal</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Thumbnail revealing secrets, person whispering or holding finger to lips, 
                  mysterious shadowy lighting, gold accents suggesting hidden value, 
                  intrigue and curiosity aesthetic, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #21 - The Calculator Proof</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Finance proof thumbnail, calculator showing big number, 
                  person with surprised/excited expression, 
                  receipts or documents visible, authentic credibility aesthetic, 
                  green money colors, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Food/Cooking Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">🍳 Food & Cooking Thumbnails</h2>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #22 - The Hero Dish</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Food YouTube thumbnail, beautiful [DISH] perfectly plated, 
                  steam rising dramatically, warm appetizing lighting, 
                  rustic wooden surface, shallow depth of field, 
                  mouthwatering presentation, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #23 - The Chef Taste Test</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Cooking thumbnail, chef tasting food with exaggerated pleased expression, 
                  beautiful dish in foreground, professional kitchen background, 
                  warm inviting colors, authentic cooking moment, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #24 - The Ingredient Spread</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Recipe thumbnail, fresh ingredients artfully arranged overhead shot, 
                  colorful vegetables and proteins, clean white or marble surface, 
                  natural lighting, cookbook aesthetic, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Fitness Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">💪 Fitness Thumbnails</h2>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #25 - The Power Pose</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Fitness YouTube thumbnail, athletic person in powerful exercise pose, 
                  dramatic gym lighting with shadows, sweat visible, 
                  motivational energy, bold dynamic angles, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #26 - The Transformation Result</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Fitness transformation thumbnail, confident pose showing physique, 
                  dramatic lighting highlighting muscles, 
                  clean dark background, aspirational but achievable look, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #27 - The Workout Preview</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Workout video thumbnail, person mid-exercise frozen in peak position, 
                  motion blur suggesting movement, 
                  timer or duration indicator visual, energetic colors, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Universal Expressions Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">😮 Universal Expression Prompts</h2>

          <p>These work across niches — swap in your specific context:</p>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #28 - Pure Shock</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  YouTube thumbnail, person with genuinely shocked expression, 
                  mouth open, eyes wide, hands on face, 
                  dramatic lighting, clean blurred background, 
                  high contrast emotional impact, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #29 - Curiosity Hook</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Thumbnail curiosity expression, person with raised eyebrow and slight smirk, 
                  leaning toward camera, mysterious object partially visible, 
                  "I know something you don't" energy, 1280x720
                </code>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #30 - Frustrated Rant</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  Thumbnail frustrated expression, person with hands up in exasperation, 
                  annoyed but relatable look, 
                  problem/frustration source blurred in background, 
                  warm orange and red tones, 1280x720
                </code>
              </div>

              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Prompt #31 - Excited Celebration</p>
                <code className="block text-sm bg-gray-100 p-3 rounded">
                  YouTube thumbnail celebration, person with huge genuine smile, 
                  arms raised in victory, confetti or sparkle effects, 
                  bright joyful colors, high energy positive vibes, 1280x720
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Bonus Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">🎯 Bonus: Model-Specific Tips</h2>

          <Card className="my-8">
            <CardHeader>
              <CardTitle>Which Model for Thumbnails?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-600">DALL-E 3</h4>
                  <p className="text-sm text-gray-600">
                    Best for thumbnails with text elements. Add "YouTube thumbnail" and "1280x720" 
                    to prompts. Great at understanding complex scene descriptions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600">Flux Pro</h4>
                  <p className="text-sm text-gray-600">
                    Best for photorealistic thumbnails. Excellent for product shots, 
                    realistic faces, and professional aesthetics.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600">Stable Diffusion XL</h4>
                  <p className="text-sm text-gray-600">
                    Best for stylized thumbnails. Use LoRAs for specific aesthetics. 
                    Cheapest for A/B testing multiple variations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold mb-3">Create Thumbnails That Click</h3>
            <p className="text-gray-600 mb-6">
              VixPic gives you access to DALL-E, Flux, and SDXL in one interface. 
              Test multiple thumbnail variations without subscription limits.
            </p>
            <Link href="/generate">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Creating Free →
              </Button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Thumbnail Testing Workflow</h2>

          <p>Don't just generate once — here's how pros test thumbnails:</p>

          <ol className="list-decimal pl-6 space-y-3 my-6">
            <li>
              <strong>Generate 5-10 variations</strong> with slightly different prompts
            </li>
            <li>
              <strong>Add your text/branding</strong> in Canva or Photoshop
            </li>
            <li>
              <strong>Shrink to mobile size</strong> and do the 3-second test
            </li>
            <li>
              <strong>A/B test</strong> using YouTube's thumbnail test feature
            </li>
            <li>
              <strong>Track CTR</strong> and double down on what works
            </li>
          </ol>

          <p>
            With BYOK pricing (~$0.03/image), generating 10 test variations costs less than $0.30. 
            That's nothing compared to the views you'll gain from a better-performing thumbnail.
          </p>

          <p className="text-gray-500 mt-8 pt-8 border-t">
            <em>
              Want more prompt inspiration? Check our{" "}
              <Link href="/styles" className="text-purple-600 hover:underline">
                style guides
              </Link>{" "}
              for specific aesthetics, or the{" "}
              <Link href="/use-cases/thumbnails" className="text-purple-600 hover:underline">
                thumbnails use case page
              </Link>{" "}
              for more tips.
            </em>
          </p>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/dalle-vs-stable-diffusion-vs-flux">
              <Card className="hover:border-purple-200 transition-all">
                <CardContent className="pt-6">
                  <span className="text-xs font-medium text-blue-600">Comparison</span>
                  <h3 className="font-semibold mt-2">DALL-E vs SDXL vs Flux</h3>
                  <p className="text-sm text-gray-500 mt-2">Which model is best for your needs?</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/perfect-prompts-product-photos">
              <Card className="hover:border-purple-200 transition-all">
                <CardContent className="pt-6">
                  <span className="text-xs font-medium text-orange-600">Tutorial</span>
                  <h3 className="font-semibold mt-2">Perfect Prompts for Product Photos</h3>
                  <p className="text-sm text-gray-500 mt-2">E-commerce prompts that convert.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded" />
            <span className="font-semibold">VixPic</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
