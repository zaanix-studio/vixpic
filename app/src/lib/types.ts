// Provider types
export type Provider = 'openai' | 'replicate' | 'fal' | 'together';

export interface ProviderConfig {
  id: Provider;
  name: string;
  models: Model[];
  docsUrl: string;
  signupUrl: string;
}

export interface Model {
  id: string;
  name: string;
  provider: Provider;
  costPer1k: number; // cost per 1000 images in USD
  maxSize: number;
  aspectRatios: string[];
  description: string;
}

export interface ApiKeys {
  openai?: string;
  replicate?: string;
  fal?: string;
  together?: string;
}

export interface GenerationParams {
  prompt: string;
  negativePrompt?: string;
  model: string;
  provider: Provider;
  width: number;
  height: number;
  steps?: number;
  guidance?: number;
  seed?: number;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  model: string;
  provider: Provider;
  width: number;
  height: number;
  createdAt: Date;
  cost: number;
}

export interface GenerationState {
  isGenerating: boolean;
  progress: number;
  error: string | null;
  currentImage: GeneratedImage | null;
}

// Provider configurations
export const PROVIDERS: ProviderConfig[] = [
  {
    id: 'replicate',
    name: 'Replicate',
    docsUrl: 'https://replicate.com/docs',
    signupUrl: 'https://replicate.com/signin',
    models: [
      {
        id: 'black-forest-labs/flux-schnell',
        name: 'FLUX Schnell',
        provider: 'replicate',
        costPer1k: 3, // ~$0.003/image
        maxSize: 1024,
        aspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
        description: 'Fast, high-quality. Best value.'
      },
      {
        id: 'black-forest-labs/flux-dev',
        name: 'FLUX Dev',
        provider: 'replicate',
        costPer1k: 30,
        maxSize: 1440,
        aspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
        description: 'Higher quality, slower generation.'
      },
      {
        id: 'stability-ai/sdxl',
        name: 'SDXL',
        provider: 'replicate',
        costPer1k: 12,
        maxSize: 1024,
        aspectRatios: ['1:1', '16:9', '9:16'],
        description: 'Stable Diffusion XL. Great for styles.'
      }
    ]
  },
  {
    id: 'fal',
    name: 'FAL.ai',
    docsUrl: 'https://fal.ai/docs',
    signupUrl: 'https://fal.ai/dashboard/keys',
    models: [
      {
        id: 'fal-ai/flux/schnell',
        name: 'FLUX Schnell',
        provider: 'fal',
        costPer1k: 2.5,
        maxSize: 1024,
        aspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
        description: 'Fastest FLUX. ~1 second generation.'
      },
      {
        id: 'fal-ai/flux-pro',
        name: 'FLUX Pro',
        provider: 'fal',
        costPer1k: 50,
        maxSize: 1440,
        aspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
        description: 'Best quality. Production-ready.'
      }
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    docsUrl: 'https://platform.openai.com/docs/api-reference/images',
    signupUrl: 'https://platform.openai.com/signup',
    models: [
      {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        provider: 'openai',
        costPer1k: 40, // $0.04/image standard
        maxSize: 1024,
        aspectRatios: ['1:1', '16:9', '9:16'],
        description: 'Best text rendering. Great for graphics.'
      },
      {
        id: 'dall-e-2',
        name: 'DALL-E 2',
        provider: 'openai',
        costPer1k: 18,
        maxSize: 1024,
        aspectRatios: ['1:1'],
        description: 'Older model. Cheaper but less capable.'
      }
    ]
  },
  {
    id: 'together',
    name: 'Together AI',
    docsUrl: 'https://docs.together.ai',
    signupUrl: 'https://api.together.xyz/signup',
    models: [
      {
        id: 'black-forest-labs/FLUX.1-schnell',
        name: 'FLUX Schnell',
        provider: 'together',
        costPer1k: 3,
        maxSize: 1024,
        aspectRatios: ['1:1', '16:9', '9:16'],
        description: 'Fast FLUX via Together AI.'
      },
      {
        id: 'stabilityai/stable-diffusion-xl-base-1.0',
        name: 'SDXL',
        provider: 'together',
        costPer1k: 10,
        maxSize: 1024,
        aspectRatios: ['1:1'],
        description: 'Stable Diffusion XL base model.'
      }
    ]
  }
];

export function getProvider(id: Provider): ProviderConfig | undefined {
  return PROVIDERS.find(p => p.id === id);
}

export function getModel(provider: Provider, modelId: string): Model | undefined {
  const p = getProvider(provider);
  return p?.models.find(m => m.id === modelId);
}

export function getAllModels(): Model[] {
  return PROVIDERS.flatMap(p => p.models);
}
