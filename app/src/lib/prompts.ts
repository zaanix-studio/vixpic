// Curated prompt templates for quick starts
export interface PromptTemplate {
  id: string;
  name: string;
  prompt: string;
  category: 'photography' | 'illustration' | 'concept' | 'product' | 'abstract';
  tags: string[];
}

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  // Photography
  {
    id: 'portrait-studio',
    name: 'Studio Portrait',
    prompt: 'Professional studio portrait photography, soft lighting, neutral background, shallow depth of field, high-end fashion magazine style, 85mm lens, f/1.4',
    category: 'photography',
    tags: ['portrait', 'studio', 'professional'],
  },
  {
    id: 'landscape-epic',
    name: 'Epic Landscape',
    prompt: 'Breathtaking landscape photography, dramatic lighting, golden hour, majestic mountains, reflective lake, volumetric clouds, wide angle, National Geographic style',
    category: 'photography',
    tags: ['landscape', 'nature', 'dramatic'],
  },
  {
    id: 'street-cinematic',
    name: 'Cinematic Street',
    prompt: 'Cinematic street photography, neon lights reflecting on wet pavement, moody atmosphere, urban night scene, bokeh lights, film grain, Blade Runner aesthetic',
    category: 'photography',
    tags: ['street', 'urban', 'cinematic', 'night'],
  },
  {
    id: 'food-gourmet',
    name: 'Gourmet Food',
    prompt: 'Professional food photography, gourmet plating, soft natural lighting from the side, shallow depth of field, fresh ingredients, Michelin star restaurant quality',
    category: 'photography',
    tags: ['food', 'gourmet', 'professional'],
  },
  
  // Illustration
  {
    id: 'anime-character',
    name: 'Anime Character',
    prompt: 'Detailed anime illustration, vibrant colors, dynamic pose, studio Ghibli inspired, clean lines, beautiful lighting, highly detailed background',
    category: 'illustration',
    tags: ['anime', 'character', 'ghibli'],
  },
  {
    id: 'fantasy-scene',
    name: 'Fantasy Scene',
    prompt: 'Epic fantasy illustration, magical forest, ancient ruins, ethereal lighting, mystical atmosphere, highly detailed, concept art style, trending on ArtStation',
    category: 'illustration',
    tags: ['fantasy', 'magical', 'epic'],
  },
  {
    id: 'watercolor-art',
    name: 'Watercolor Art',
    prompt: 'Beautiful watercolor painting, soft color bleeding, delicate brushstrokes, artistic composition, traditional art style, gentle gradients, paper texture',
    category: 'illustration',
    tags: ['watercolor', 'traditional', 'artistic'],
  },
  {
    id: 'pixel-art',
    name: 'Pixel Art',
    prompt: '16-bit pixel art style, retro video game aesthetic, vibrant colors, clean pixel-perfect details, nostalgic gaming atmosphere',
    category: 'illustration',
    tags: ['pixel', 'retro', 'gaming'],
  },
  
  // Concept Art
  {
    id: 'scifi-environment',
    name: 'Sci-Fi Environment',
    prompt: 'Futuristic sci-fi environment concept art, massive space station, holographic displays, advanced technology, cinematic lighting, Syd Mead inspired',
    category: 'concept',
    tags: ['scifi', 'environment', 'futuristic'],
  },
  {
    id: 'character-design',
    name: 'Character Design',
    prompt: 'Professional character design concept art, detailed costume design, dynamic pose, multiple angles, character sheet style, AAA game quality',
    category: 'concept',
    tags: ['character', 'design', 'game'],
  },
  {
    id: 'creature-design',
    name: 'Creature Design',
    prompt: 'Detailed creature design, anatomically plausible, unique biology, dramatic lighting, realistic textures, concept art for film, highly detailed',
    category: 'concept',
    tags: ['creature', 'monster', 'design'],
  },
  
  // Product
  {
    id: 'product-minimal',
    name: 'Minimal Product',
    prompt: 'Clean product photography, minimalist style, soft shadows, white background, professional studio lighting, high-end commercial quality, magazine advertisement',
    category: 'product',
    tags: ['product', 'minimal', 'commercial'],
  },
  {
    id: 'product-lifestyle',
    name: 'Lifestyle Product',
    prompt: 'Lifestyle product photography, natural setting, warm ambient lighting, aspirational mood, modern interior, Instagram aesthetic',
    category: 'product',
    tags: ['product', 'lifestyle', 'instagram'],
  },
  {
    id: 'tech-product',
    name: 'Tech Product',
    prompt: 'Sleek technology product photography, dark background with accent lighting, premium feel, reflective surface, Apple-style commercial, professional studio quality',
    category: 'product',
    tags: ['tech', 'product', 'premium'],
  },
  
  // Abstract
  {
    id: 'abstract-fluid',
    name: 'Fluid Abstract',
    prompt: 'Abstract fluid art, vibrant color mixing, organic flowing shapes, mesmerizing patterns, high resolution, perfect for backgrounds and wallpapers',
    category: 'abstract',
    tags: ['abstract', 'fluid', 'colorful'],
  },
  {
    id: 'geometric-pattern',
    name: 'Geometric Pattern',
    prompt: 'Intricate geometric pattern, sacred geometry, perfect symmetry, mesmerizing optical illusion, vibrant gradient colors, seamless design',
    category: 'abstract',
    tags: ['geometric', 'pattern', 'symmetry'],
  },
  {
    id: '3d-abstract',
    name: '3D Abstract',
    prompt: 'Abstract 3D render, glossy spheres and shapes, soft gradient background, studio lighting, ray tracing, octane render, cinema 4D style',
    category: 'abstract',
    tags: ['3d', 'abstract', 'render'],
  },
];

export const CATEGORIES = [
  { id: 'photography', name: 'Photography', icon: '📷' },
  { id: 'illustration', name: 'Illustration', icon: '🎨' },
  { id: 'concept', name: 'Concept Art', icon: '🖼️' },
  { id: 'product', name: 'Product', icon: '📦' },
  { id: 'abstract', name: 'Abstract', icon: '✨' },
] as const;

export function getTemplatesByCategory(category: string): PromptTemplate[] {
  return PROMPT_TEMPLATES.filter(t => t.category === category);
}
