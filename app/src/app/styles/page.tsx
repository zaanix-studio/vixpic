import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Styles Guide | Anime, Photorealistic, Fantasy & More | VixPic",
  description: "Master AI image generation styles. Learn prompting techniques for anime, photorealistic, fantasy art, minimalist, and more. Free examples and tips.",
  keywords: ["AI art styles", "AI image prompts", "anime AI", "photorealistic AI", "fantasy AI art", "Midjourney styles", "Stable Diffusion styles"],
};

const styles = [
  {
    name: "Anime & Manga",
    slug: "anime",
    description: "Japanese animation aesthetics from classic cel-shaded to modern digital anime.",
    icon: "🎌",
    examples: ["Studio Ghibli style", "Cyberpunk anime", "Chibi characters", "Shonen action"],
    models: ["SDXL Anime", "NovelAI", "Anything V5"],
    difficulty: "Beginner",
    popularity: "Very High",
  },
  {
    name: "Photorealistic",
    slug: "photorealistic",
    description: "Hyper-realistic images indistinguishable from photographs.",
    icon: "📸",
    examples: ["Portrait photography", "Product shots", "Landscapes", "Food photography"],
    models: ["DALL-E 3", "Flux Pro", "RealVisXL"],
    difficulty: "Intermediate",
    popularity: "Very High",
  },
  {
    name: "Fantasy Art",
    slug: "fantasy-art",
    description: "Epic fantasy worlds, creatures, and characters from dragons to elves.",
    icon: "🐉",
    examples: ["Dragon scenes", "Medieval castles", "Elf portraits", "Magic spells"],
    models: ["SDXL", "Flux", "DreamShaper"],
    difficulty: "Beginner",
    popularity: "High",
  },
  {
    name: "Minimalist",
    slug: "minimalist",
    description: "Clean, simple designs with focused composition and limited color palettes.",
    icon: "◻️",
    examples: ["Logo concepts", "Icon design", "Flat illustrations", "Abstract shapes"],
    models: ["DALL-E 3", "SDXL"],
    difficulty: "Intermediate",
    popularity: "Medium",
  },
  {
    name: "Oil Painting",
    slug: "oil-painting",
    description: "Classical fine art aesthetics from Renaissance to Impressionism.",
    icon: "🖼️",
    examples: ["Portrait paintings", "Landscapes", "Still life", "Abstract expressionism"],
    models: ["SDXL", "Flux", "DALL-E 3"],
    difficulty: "Beginner",
    popularity: "High",
  },
  {
    name: "Cyberpunk",
    slug: "cyberpunk",
    description: "Neon-lit dystopian futures, tech noir, and retrofuturistic aesthetics.",
    icon: "🌆",
    examples: ["Neon cities", "Cyborg characters", "Tech interfaces", "Blade Runner style"],
    models: ["SDXL", "Flux", "Midjourney"],
    difficulty: "Beginner",
    popularity: "High",
  },
  {
    name: "Watercolor",
    slug: "watercolor",
    description: "Soft, flowing watercolor paintings with organic textures and bleeding colors.",
    icon: "🎨",
    examples: ["Botanical art", "Portraits", "Landscapes", "Abstract"],
    models: ["SDXL", "DALL-E 3"],
    difficulty: "Intermediate",
    popularity: "Medium",
  },
  {
    name: "3D Render",
    slug: "3d-render",
    description: "Clean 3D renders from product visualization to character design.",
    icon: "🎮",
    examples: ["Product mockups", "Character models", "Isometric scenes", "Abstract 3D"],
    models: ["DALL-E 3", "Flux Pro"],
    difficulty: "Advanced",
    popularity: "High",
  },
];

export default function StylesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Image Styles
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn how to create stunning images in any style. From anime to photorealistic, 
            we cover prompting techniques, model recommendations, and real examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600">
                Try Free — No Card Required
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Style Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: "8+", label: "Style Categories" },
              { value: "100+", label: "Example Prompts" },
              { value: "15+", label: "AI Models Covered" },
              { value: "Free", label: "Style Guides" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Explore AI Art Styles</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Click any style to learn prompting techniques, see examples, and discover which AI models work best.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style) => (
              <Card 
                key={style.slug}
                className="border-2 hover:border-purple-200 transition-all hover:shadow-lg"
              >
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{style.icon}</div>
                  <CardTitle className="text-xl">{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Difficulty</span>
                      <span className={`font-medium ${
                        style.difficulty === "Beginner" ? "text-green-600" :
                        style.difficulty === "Intermediate" ? "text-yellow-600" :
                        "text-red-600"
                      }`}>{style.difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Popularity</span>
                      <span className="font-medium text-purple-600">{style.popularity}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Example prompts:</p>
                    <div className="flex flex-wrap gap-1">
                      {style.examples.slice(0, 2).map((ex, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{ex}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Best models:</p>
                    <div className="flex flex-wrap gap-1">
                      {style.models.slice(0, 2).map((model, i) => (
                        <span key={i} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">{model}</span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/styles/${style.slug}`}>
                    <Button variant="outline" className="w-full">
                      View Style Guide →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Style Tips Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Universal Prompting Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✅</span> Do This
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Be specific about style: "oil painting" beats "art"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Include lighting: "soft morning light", "dramatic shadows"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Reference artists: "in the style of Greg Rutkowski"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Add quality modifiers: "highly detailed", "8k", "masterpiece"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Specify composition: "portrait", "wide shot", "close-up"</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">❌</span> Avoid This
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Vague prompts: "nice picture" → no direction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Contradicting styles: "photorealistic cartoon"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Too many subjects: focus on one main element</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Negative language: say what you want, not what you don't</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Extremely long prompts: most models have sweet spots</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Which Model for Which Style?</h2>
          <p className="text-gray-600 text-center mb-12">
            Different AI models excel at different styles. Here&apos;s a quick reference.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Style</th>
                  <th className="text-center py-4 px-4 font-semibold">DALL-E 3</th>
                  <th className="text-center py-4 px-4 font-semibold">Flux Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">SDXL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { style: "Anime", dalle: "⭐⭐⭐", flux: "⭐⭐⭐⭐", sdxl: "⭐⭐⭐⭐⭐" },
                  { style: "Photorealistic", dalle: "⭐⭐⭐⭐⭐", flux: "⭐⭐⭐⭐⭐", sdxl: "⭐⭐⭐⭐" },
                  { style: "Fantasy Art", dalle: "⭐⭐⭐⭐", flux: "⭐⭐⭐⭐⭐", sdxl: "⭐⭐⭐⭐⭐" },
                  { style: "Minimalist", dalle: "⭐⭐⭐⭐⭐", flux: "⭐⭐⭐⭐", sdxl: "⭐⭐⭐" },
                  { style: "Oil Painting", dalle: "⭐⭐⭐⭐", flux: "⭐⭐⭐⭐⭐", sdxl: "⭐⭐⭐⭐⭐" },
                  { style: "3D Render", dalle: "⭐⭐⭐⭐⭐", flux: "⭐⭐⭐⭐", sdxl: "⭐⭐⭐" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{row.style}</td>
                    <td className="py-4 px-4 text-center text-sm">{row.dalle}</td>
                    <td className="py-4 px-4 text-center text-sm">{row.flux}</td>
                    <td className="py-4 px-4 text-center text-sm">{row.sdxl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            With VixPic, access all these models with your own API keys. No subscriptions required.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create in Any Style?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start generating images for free. When you&apos;re ready for more, add your own API keys 
            and unlock unlimited generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100">
                Start Free
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
