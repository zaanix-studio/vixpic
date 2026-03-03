import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Fantasy Art Generation Guide | Dragons, Elves & Magic | VixPic",
  description: "Create epic fantasy AI art. Learn to generate dragons, magical landscapes, elves, and medieval scenes. Best models: SDXL, Flux, DreamShaper.",
  keywords: ["fantasy AI art", "AI dragon generator", "medieval AI art", "fantasy character AI", "D&D art generator", "fantasy landscape AI"],
};

const fantasySubStyles = [
  {
    name: "Epic Fantasy",
    description: "Grand, sweeping scenes of magical realms and epic battles",
    prompts: [
      "epic fantasy landscape, towering castle, dramatic sky, volumetric lighting, Greg Rutkowski style",
      "fantasy battle scene, armies clashing, magical effects, cinematic composition, highly detailed",
    ],
    references: "Lord of the Rings, Game of Thrones, Wheel of Time",
  },
  {
    name: "Dragon Art",
    description: "Majestic dragons in various styles from realistic to stylized",
    prompts: [
      "majestic dragon, scales gleaming, fire breath, perched on mountain, dramatic lighting, detailed",
      "ancient dragon, massive wingspan, storm clouds, fantasy illustration, concept art quality",
    ],
    references: "Smaug, Drogon, D&D dragon art",
  },
  {
    name: "Elf & Character Portraits",
    description: "Fantasy race portraits with intricate details",
    prompts: [
      "elf queen portrait, ethereal beauty, silver hair, pointed ears, forest background, magical glow",
      "fantasy warrior portrait, ornate armor, battle-worn, dramatic lighting, character concept art",
    ],
    references: "Tolkien elves, World of Warcraft, Critical Role",
  },
  {
    name: "Dark Fantasy",
    description: "Gothic, moody aesthetics with horror elements",
    prompts: [
      "dark fantasy scene, gothic castle, ominous atmosphere, ravens, moonlight, grimdark style",
      "dark fantasy warrior, corrupted armor, glowing red eyes, dark fog, dramatic shadows",
    ],
    references: "Dark Souls, Berserk, Warhammer",
  },
  {
    name: "Magical Landscapes",
    description: "Enchanted forests, floating islands, mystical realms",
    prompts: [
      "enchanted forest, bioluminescent plants, fairy lights, mystical atmosphere, fantasy illustration",
      "floating islands, waterfalls into clouds, magical crystals, vibrant colors, dreamlike",
    ],
    references: "Avatar, Studio Ghibli, classic fantasy art",
  },
  {
    name: "Medieval Fantasy",
    description: "Historically-inspired fantasy with armor, castles, villages",
    prompts: [
      "medieval fantasy village, thatched roofs, cobblestone streets, tavern with warm light, detailed",
      "knight in full plate armor, medieval tournament, heraldic banners, period-accurate details",
    ],
    references: "Medieval art, historical fantasy, D&D settings",
  },
];

const bestModels = [
  {
    name: "SDXL + Fantasy LoRAs",
    provider: "Replicate",
    strengths: ["Vast model ecosystem", "Many fantasy fine-tunes", "Excellent detail"],
    cost: "~$0.01/image",
    recommendation: "Best Overall",
  },
  {
    name: "Flux Pro/Dev",
    provider: "FAL / Replicate",
    strengths: ["Great prompt following", "Consistent quality", "Modern architecture"],
    cost: "~$0.02-0.03/image",
    recommendation: "Best Prompt Adherence",
  },
  {
    name: "DreamShaper",
    provider: "Replicate",
    strengths: ["Fantasy-optimized", "Artistic style", "Good value"],
    cost: "~$0.008/image",
    recommendation: "Best Value",
  },
  {
    name: "DALL-E 3",
    provider: "OpenAI",
    strengths: ["Best text in images", "Safe outputs", "Reliable"],
    cost: "~$0.04/image",
    recommendation: "Most Reliable",
  },
];

const examplePrompts = [
  {
    title: "Epic Dragon Battle",
    prompt: "epic fantasy battle, enormous red dragon breathing fire at a castle, knights defending with shields raised, dramatic stormy sky, volumetric lighting, cinematic composition, highly detailed digital painting, Greg Rutkowski, Artstation trending",
    tags: ["dragon", "battle", "epic"],
  },
  {
    title: "Elven Forest Queen",
    prompt: "ethereal elf queen portrait, long silver flowing hair, pointed ears, delicate crown of silver leaves, ancient forest background with shafts of golden light, magical particles floating, detailed fantasy illustration, 8k resolution",
    tags: ["character", "elf", "portrait"],
  },
  {
    title: "Mystical Castle",
    prompt: "fantasy castle at twilight, built into a mountainside, waterfalls cascading beside it, magical aurora in the sky, bridge of light leading to the gates, enchanted atmosphere, matte painting style, concept art",
    tags: ["landscape", "castle", "magical"],
  },
  {
    title: "Dark Knight",
    prompt: "dark fantasy knight, corrupted black armor with red glowing runes, wielding a massive greatsword, standing in misty graveyard, ominous red moon, dark souls inspired, grimdark aesthetic, highly detailed",
    tags: ["character", "dark", "warrior"],
  },
];

const artistReferences = [
  { name: "Greg Rutkowski", style: "Dramatic lighting, epic scenes, painterly" },
  { name: "Frank Frazetta", style: "Classic fantasy, muscular figures, action" },
  { name: "Alan Lee", style: "Tolkien aesthetic, soft, ethereal" },
  { name: "Seb McKinnon", style: "Dark, mystical, Magic: The Gathering" },
  { name: "WLOP", style: "Ethereal, glowing, detailed characters" },
  { name: "Artgerm", style: "Clean, polished, character focus" },
];

export default function FantasyArtStylePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/styles" className="hover:text-purple-600">Styles</Link>
          <span>/</span>
          <span className="text-gray-900">Fantasy Art</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🐉</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                  Fantasy Art
                </span>{" "}
                Style Guide
              </h1>
              <p className="text-gray-600 mt-2">Dragons, magic, and epic worlds await</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Fantasy art is where AI truly shines. Create dragons, elves, magical landscapes, 
            and epic battle scenes that would take traditional artists weeks. Learn the prompts, 
            models, and techniques that produce stunning results.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ✓ Beginner Friendly
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              High Popularity
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              AI Excels Here
            </span>
          </div>
        </div>
      </section>

      {/* Why Fantasy Works */}
      <section className="py-12 px-4 bg-gradient-to-r from-amber-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why AI Excels at Fantasy Art</h2>
          <p className="text-gray-600 mb-8">
            Unlike photorealism (where flaws are obvious), fantasy art benefits from AI&apos;s creativity.
            There&apos;s no &quot;wrong&quot; way to draw a dragon — giving you more freedom.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🎨", title: "Creative Freedom", desc: "No real-world reference to match perfectly" },
              { emoji: "📚", title: "Rich Training Data", desc: "Millions of fantasy artworks in training sets" },
              { emoji: "⚡", title: "Fast Iteration", desc: "Generate concepts in seconds, not hours" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Styles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Fantasy Sub-Styles</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Fantasy is a broad genre. Here are the most popular sub-styles with prompting tips.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fantasySubStyles.map((style, i) => (
              <Card key={i} className="border-2 hover:border-amber-200 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-medium">Example prompts:</p>
                    {style.prompts.map((prompt, j) => (
                      <p key={j} className="text-sm bg-gray-50 p-2 rounded mb-2 font-mono text-gray-700">
                        {prompt}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">References:</span> {style.references}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artist References */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Artist Reference Cheat Sheet</h2>
          <p className="text-gray-600 text-center mb-12">
            Adding artist names to prompts helps steer the aesthetic. Here are reliable fantasy artists.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {artistReferences.map((artist, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-4">
                  <h3 className="font-bold text-purple-600">{artist.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{artist.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Tip: Combine artists — &quot;in the style of Greg Rutkowski and Alan Lee&quot;
          </p>
        </div>
      </section>

      {/* Best Models */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Best Models for Fantasy</h2>
          <p className="text-gray-600 text-center mb-12">
            Most AI models handle fantasy well, but these excel.
          </p>
          <div className="space-y-4">
            {bestModels.map((model, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{model.name}</h3>
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                          {model.recommendation}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">via {model.provider}</p>
                      <div className="flex flex-wrap gap-2">
                        {model.strengths.map((s, j) => (
                          <span key={j} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-amber-600">{model.cost}</p>
                      <p className="text-xs text-gray-500">per image</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Prompts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Copy-Paste Prompts</h2>
          <p className="text-gray-600 text-center mb-12">
            Tested prompts that produce great results. Use as starting points.
          </p>
          <div className="space-y-6">
            {examplePrompts.map((example, i) => (
              <Card key={i} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <div className="flex gap-2">
                      {example.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {example.prompt}
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="text-xs">
                      Copy Prompt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pro Tips for Fantasy Art</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span>✨</span> What Works
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <ul className="space-y-2 text-sm">
                  <li>• Combine artist references for unique styles</li>
                  <li>• Use &quot;Artstation trending&quot; for polished look</li>
                  <li>• Add lighting keywords: &quot;volumetric&quot;, &quot;dramatic&quot;, &quot;magical glow&quot;</li>
                  <li>• Include materials: &quot;gold trim&quot;, &quot;leather armor&quot;, &quot;crystal&quot;</li>
                  <li>• Reference specific fantasy media you like</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <span>⚠️</span> Common Pitfalls
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-800">
                <ul className="space-y-2 text-sm">
                  <li>• Too many subjects = confused composition</li>
                  <li>• Vague prompts = generic outputs</li>
                  <li>• Neglecting negative prompts = artifacts</li>
                  <li>• Overloading with modifiers = diminishing returns</li>
                  <li>• Wrong model choice for specific style</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-red-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Create Your Fantasy World
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start generating dragons, elves, and epic landscapes for free. 
            Add your API keys for unlimited fantasy art at a fraction of subscription costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-amber-600 hover:bg-gray-100">
                Try Free Now
              </Button>
            </Link>
            <Link href="/styles">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Explore More Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
