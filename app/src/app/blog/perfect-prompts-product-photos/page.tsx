import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductPhotoPromptsPost() {
  return (
    <>
      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              Tutorial
            </span>
            <span className="text-sm text-gray-500">7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Perfect Prompts for E-commerce Product Photos
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Copy-paste prompt templates for product photography that actually converts. Works with any AI model.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-b py-4">
            <span>February 25, 2026</span>
            <span>•</span>
            <span>By VixPic Team</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl">
            Professional product photography used to cost $500+ per shoot. Now, with AI, you can 
            create stunning product images in seconds — <strong>if you know how to prompt correctly</strong>.
          </p>

          <p>
            This guide gives you battle-tested prompt templates that work across DALL-E, Stable 
            Diffusion, and Flux. Copy, customize, and watch your product photos transform.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Product Photo Formula</h2>
          
          <p>
            Every great product photo prompt follows the same structure:
          </p>

          <Card className="my-6 bg-gray-50">
            <CardContent className="pt-6">
              <code className="text-sm">
                [Product] + [Background/Setting] + [Lighting] + [Style/Mood] + [Technical specs]
              </code>
            </CardContent>
          </Card>

          <p>
            Let's break down each element and then combine them into prompts you can use today.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. Clean White Background (Amazon-Style)</h2>

          <p>
            Perfect for marketplace listings where you need product-focused, distraction-free images.
          </p>

          <Card className="my-6 border-purple-200">
            <CardContent className="pt-6">
              <p className="font-semibold text-purple-800 mb-3">Template:</p>
              <p className="bg-white p-4 rounded border text-sm font-mono">
                Professional product photography of [PRODUCT], centered on pure white background, 
                soft studio lighting, sharp focus, high resolution, e-commerce style, 8k quality
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Example:</strong> "Professional product photography of a matte black 
                wireless earbuds case, centered on pure white background, soft studio lighting, 
                sharp focus, high resolution, e-commerce style, 8k quality"
              </p>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold mt-6 mb-3">Variations:</h3>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Add "three-quarter angle view" for dimension</li>
            <li>Add "product reflection on surface" for luxury feel</li>
            <li>Add "floating in space" for modern tech products</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. Lifestyle Context Shots</h2>

          <p>
            Show your product in action. These convert better than plain white backgrounds 
            because customers can envision using the product.
          </p>

          <Card className="my-6 border-purple-200">
            <CardContent className="pt-6">
              <p className="font-semibold text-purple-800 mb-3">Template:</p>
              <p className="bg-white p-4 rounded border text-sm font-mono">
                [PRODUCT] in use, [SETTING/CONTEXT], natural lighting, lifestyle photography, 
                shallow depth of field, warm tones, candid feel, professional quality
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Example:</strong> "Ceramic coffee mug in use, cozy home office desk 
                by window, natural morning lighting, lifestyle photography, shallow depth of 
                field, warm tones, candid feel, professional quality"
              </p>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold mt-6 mb-3">Best Settings by Product Type:</h3>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Tech gadgets:</strong> Modern desk setup, minimalist workspace</li>
            <li><strong>Food/beverages:</strong> Kitchen counter, dining table, outdoor picnic</li>
            <li><strong>Fashion:</strong> Street style, studio with colored backdrop</li>
            <li><strong>Home goods:</strong> Styled room corner, bedside table</li>
            <li><strong>Fitness:</strong> Gym setting, outdoor workout, yoga studio</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. Flat Lay / Top-Down</h2>

          <p>
            Perfect for accessories, jewelry, stationery, and products that look great from above.
          </p>

          <Card className="my-6 border-purple-200">
            <CardContent className="pt-6">
              <p className="font-semibold text-purple-800 mb-3">Template:</p>
              <p className="bg-white p-4 rounded border text-sm font-mono">
                Flat lay product photography, top-down view of [PRODUCT], arranged on 
                [SURFACE], surrounded by [COMPLEMENTARY ITEMS], soft diffused lighting, 
                Instagram aesthetic, high resolution
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Example:</strong> "Flat lay product photography, top-down view of 
                leather wallet, arranged on marble surface, surrounded by watch, sunglasses, 
                and car keys, soft diffused lighting, Instagram aesthetic, high resolution"
              </p>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold mt-6 mb-3">Popular Surface Options:</h3>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>White marble</li>
            <li>Light wood grain</li>
            <li>Terrazzo</li>
            <li>Linen fabric</li>
            <li>Concrete texture</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. Hero Shot with Props</h2>

          <p>
            The big, dramatic shot for your homepage or ads. Make your product the star.
          </p>

          <Card className="my-6 border-purple-200">
            <CardContent className="pt-6">
              <p className="font-semibold text-purple-800 mb-3">Template:</p>
              <p className="bg-white p-4 rounded border text-sm font-mono">
                Dramatic product hero shot of [PRODUCT], [BACKGROUND STYLE], cinematic 
                lighting with [LIGHTING DIRECTION], [PROPS/ELEMENTS], premium advertising 
                quality, hyperrealistic
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Example:</strong> "Dramatic product hero shot of premium headphones, 
                dark gradient background with blue accents, cinematic lighting with rim light, 
                floating music notes and sound waves, premium advertising quality, hyperrealistic"
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-12 mb-4">5. Scale and Size Reference</h2>

          <p>
            Help customers understand how big (or small) your product actually is.
          </p>

          <Card className="my-6 border-purple-200">
            <CardContent className="pt-6">
              <p className="font-semibold text-purple-800 mb-3">Template:</p>
              <p className="bg-white p-4 rounded border text-sm font-mono">
                Product photography showing scale, [PRODUCT] held in human hand / next to 
                [REFERENCE OBJECT], clean background, natural proportions, realistic, 
                commercial photography style
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Example:</strong> "Product photography showing scale, compact power 
                bank held in human hand, clean white background, natural proportions, realistic, 
                commercial photography style"
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-12 mb-4">6. Seasonal and Holiday Themes</h2>

          <p>
            Refresh your listings for different seasons without reshooting.
          </p>

          <Card className="my-6 border-purple-200">
            <CardContent className="pt-6">
              <p className="font-semibold text-purple-800 mb-3">Template:</p>
              <p className="bg-white p-4 rounded border text-sm font-mono">
                [PRODUCT] in [SEASON/HOLIDAY] setting, [SEASONAL ELEMENTS], festive atmosphere, 
                [LIGHTING STYLE], gift-worthy presentation, commercial photography
              </p>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold mt-6 mb-3">Seasonal Elements to Add:</h3>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Christmas:</strong> pine branches, ornaments, warm string lights, red ribbon</li>
            <li><strong>Summer:</strong> palm leaves, sunlight rays, beach sand, tropical flowers</li>
            <li><strong>Fall:</strong> autumn leaves, warm golden light, cozy textures</li>
            <li><strong>Valentine's:</strong> rose petals, soft pink tones, romantic lighting</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">7. Detail / Close-Up Shots</h2>

          <p>
            Show off craftsmanship, texture, and quality details that justify your price.
          </p>

          <Card className="my-6 border-purple-200">
            <CardContent className="pt-6">
              <p className="font-semibold text-purple-800 mb-3">Template:</p>
              <p className="bg-white p-4 rounded border text-sm font-mono">
                Extreme close-up macro photography of [PRODUCT DETAIL], showing [TEXTURE/MATERIAL], 
                sharp focus, soft bokeh background, studio lighting, revealing quality and 
                craftsmanship, 8k detail
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Example:</strong> "Extreme close-up macro photography of leather bag 
                stitching, showing grain texture and thread detail, sharp focus, soft bokeh 
                background, studio lighting, revealing quality and craftsmanship, 8k detail"
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-12 mb-4">Model-Specific Tips</h2>

          <Card className="my-8">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-purple-800">DALL-E 3</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Best for: Clean, commercial-quality images. Add "photorealistic" and 
                    "commercial photography" for best results. Handles text on products well.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">Stable Diffusion XL</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Best for: Stylized and artistic product shots. Use "product photography, 
                    8k uhd" in prompt. Consider ControlNet for specific compositions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">Flux</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Best for: Photorealistic lifestyle shots. Excellent at natural lighting. 
                    Add specific lighting descriptions for best control.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-12 mb-4">Common Mistakes to Avoid</h2>

          <ul className="list-disc pl-6 space-y-3 my-6">
            <li>
              <strong>Being too vague:</strong> "Nice product photo" won't work. Be specific 
              about lighting, angle, and background.
            </li>
            <li>
              <strong>Overcomplicating:</strong> More words isn't always better. Focus on 
              key elements that matter for your product.
            </li>
            <li>
              <strong>Ignoring lighting:</strong> Lighting makes or breaks product photos. 
              Always specify: soft, dramatic, natural, studio, etc.
            </li>
            <li>
              <strong>Wrong aspect ratio:</strong> Generate images in the ratio you need 
              (1:1 for Instagram, 4:5 for Pinterest, 16:9 for headers).
            </li>
            <li>
              <strong>No post-processing:</strong> AI images are starting points. Use free 
              tools to crop, adjust colors, and perfect the final image.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Quick Reference: Copy-Paste Prompts</h2>

          <p>Here are ready-to-use prompts for common product categories:</p>

          <Card className="my-6">
            <CardContent className="pt-6 space-y-4">
              <div>
                <p className="font-semibold text-sm text-purple-700">Skincare/Beauty:</p>
                <p className="text-sm bg-gray-50 p-3 rounded mt-1">
                  Elegant skincare bottle product photography, minimalist white background, 
                  soft shadows, water droplets on surface, clean aesthetic, luxury brand style, 
                  high resolution commercial photography
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-purple-700">Electronics:</p>
                <p className="text-sm bg-gray-50 p-3 rounded mt-1">
                  Modern tech product on dark reflective surface, gradient background from 
                  black to deep blue, dramatic rim lighting, floating angle, sleek minimalist 
                  style, Apple-inspired aesthetic, 8k detail
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-purple-700">Food/Beverage:</p>
                <p className="text-sm bg-gray-50 p-3 rounded mt-1">
                  Appetizing food photography, rustic wooden table setting, natural window 
                  light, fresh ingredients as props, shallow depth of field, warm color 
                  grading, restaurant menu quality
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-purple-700">Fashion Accessories:</p>
                <p className="text-sm bg-gray-50 p-3 rounded mt-1">
                  Luxury fashion accessory flat lay, marble surface, gold accent props, 
                  soft diffused lighting, editorial style, Vogue aesthetic, high-end brand 
                  photography, perfect composition
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold mb-3">Try These Prompts Now</h3>
            <p className="text-gray-600 mb-6">
              VixPic lets you use DALL-E, Stable Diffusion, and Flux — all in one place. 
              Test these prompts and find what works best for your products.
            </p>
            <Link href="/generate">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Generating →
              </Button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Bottom Line</h2>

          <p>
            Great product photos aren't about expensive equipment anymore — they're about 
            knowing how to communicate with AI. These prompts give you a starting point, 
            but the best results come from iteration. Generate, refine, repeat.
          </p>

          <p>
            Save this page and refer back to it. Your product photography is about to get 
            a lot better — and a lot cheaper.
          </p>

          <p className="text-gray-500 mt-8 pt-8 border-t">
            <em>
              Want more prompts? Check out our{" "}
              <Link href="/blog/youtube-thumbnail-prompts" className="text-purple-600 hover:underline">
                YouTube thumbnail prompts guide
              </Link>{" "}
              or explore the{" "}
              <Link href="/use-cases/ecommerce" className="text-purple-600 hover:underline">
                e-commerce use case
              </Link>{" "}
              page.
            </em>
          </p>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/youtube-thumbnail-prompts">
              <Card className="hover:border-purple-200 transition-all">
                <CardContent className="pt-6">
                  <span className="text-xs font-medium text-blue-600">Tutorial</span>
                  <h3 className="font-semibold mt-2">50 YouTube Thumbnail Prompts That Get Clicks</h3>
                  <p className="text-sm text-gray-500 mt-2">Battle-tested prompts organized by niche.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/dalle-vs-stable-diffusion-vs-flux">
              <Card className="hover:border-purple-200 transition-all">
                <CardContent className="pt-6">
                  <span className="text-xs font-medium text-purple-600">Comparison</span>
                  <h3 className="font-semibold mt-2">DALL-E vs Stable Diffusion vs Flux</h3>
                  <p className="text-sm text-gray-500 mt-2">Which model is best for your use case?</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
