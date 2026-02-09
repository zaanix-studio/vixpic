import { NextRequest, NextResponse } from 'next/server';
import type { Provider, GenerationParams } from '@/lib/types';

// Provider-specific generation functions
async function generateWithReplicate(
  apiKey: string,
  params: GenerationParams
): Promise<string> {
  // For official models like black-forest-labs/flux-schnell, use the models endpoint
  const endpoint = `https://api.replicate.com/v1/models/${params.model}/predictions`;
  
  // Build input based on model type
  const isFlux = params.model.includes('flux');
  const input = isFlux
    ? {
        prompt: params.prompt,
        aspect_ratio: params.width === params.height ? '1:1' 
          : params.width > params.height ? '16:9' : '9:16',
        output_format: 'webp',
        output_quality: 90,
        ...(params.seed && { seed: params.seed }),
      }
    : {
        prompt: params.prompt,
        width: params.width,
        height: params.height,
        num_inference_steps: params.steps || 25,
        guidance_scale: params.guidance || 7.5,
        ...(params.negativePrompt && { negative_prompt: params.negativePrompt }),
        ...(params.seed && { seed: params.seed }),
      };

  const createResponse = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'wait', // Use sync mode for faster response on quick models
    },
    body: JSON.stringify({ input }),
  });

  if (!createResponse.ok) {
    const error = await createResponse.json();
    throw new Error(error.detail || `Replicate API error: ${createResponse.status}`);
  }

  const prediction = await createResponse.json();
  
  // Poll for completion
  let result = prediction;
  while (result.status !== 'succeeded' && result.status !== 'failed') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const statusResponse = await fetch(result.urls.get, {
      headers: { 'Authorization': `Bearer ${apiKey}` },
    });
    
    if (!statusResponse.ok) {
      throw new Error(`Failed to check prediction status: ${statusResponse.status}`);
    }
    
    result = await statusResponse.json();
  }

  if (result.status === 'failed') {
    throw new Error(result.error || 'Generation failed');
  }

  // Return the image URL (Replicate returns an array, we take the first)
  const output = Array.isArray(result.output) ? result.output[0] : result.output;
  return output;
}

async function generateWithFal(
  apiKey: string,
  params: GenerationParams
): Promise<string> {
  // FAL.ai uses a queue-based system
  const endpoint = `https://queue.fal.run/${params.model}`;
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: params.prompt,
      image_size: {
        width: params.width,
        height: params.height,
      },
      num_inference_steps: params.steps || 25,
      guidance_scale: params.guidance || 7.5,
      ...(params.negativePrompt && { negative_prompt: params.negativePrompt }),
      ...(params.seed && { seed: params.seed }),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || `FAL API error: ${response.status}`);
  }

  const result = await response.json();
  
  // FAL returns images array with url property
  if (result.images && result.images.length > 0) {
    return result.images[0].url;
  }
  
  throw new Error('No image returned from FAL');
}

async function generateWithOpenAI(
  apiKey: string,
  params: GenerationParams
): Promise<string> {
  const model = params.model === 'dall-e-3' ? 'dall-e-3' : 'dall-e-2';
  
  // Map aspect ratio to size
  let size: '1024x1024' | '1792x1024' | '1024x1792' = '1024x1024';
  if (params.width > params.height) {
    size = model === 'dall-e-3' ? '1792x1024' : '1024x1024';
  } else if (params.height > params.width) {
    size = model === 'dall-e-3' ? '1024x1792' : '1024x1024';
  }

  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      prompt: params.prompt,
      size,
      quality: 'standard',
      n: 1,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || `OpenAI API error: ${response.status}`);
  }

  const result = await response.json();
  return result.data[0].url;
}

async function generateWithTogether(
  apiKey: string,
  params: GenerationParams
): Promise<string> {
  const response = await fetch('https://api.together.xyz/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: params.model,
      prompt: params.prompt,
      width: params.width,
      height: params.height,
      steps: params.steps || 25,
      n: 1,
      ...(params.negativePrompt && { negative_prompt: params.negativePrompt }),
      ...(params.seed && { seed: params.seed }),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || `Together API error: ${response.status}`);
  }

  const result = await response.json();
  
  // Together returns data array with b64_json or url
  if (result.data && result.data.length > 0) {
    const image = result.data[0];
    if (image.url) return image.url;
    if (image.b64_json) return `data:image/png;base64,${image.b64_json}`;
  }
  
  throw new Error('No image returned from Together');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apiKey, params } = body as { apiKey: string; params: GenerationParams };

    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 400 });
    }

    if (!params?.prompt) {
      return NextResponse.json({ error: 'Prompt required' }, { status: 400 });
    }

    let imageUrl: string;

    switch (params.provider) {
      case 'replicate':
        imageUrl = await generateWithReplicate(apiKey, params);
        break;
      case 'fal':
        imageUrl = await generateWithFal(apiKey, params);
        break;
      case 'openai':
        imageUrl = await generateWithOpenAI(apiKey, params);
        break;
      case 'together':
        imageUrl = await generateWithTogether(apiKey, params);
        break;
      default:
        return NextResponse.json({ error: 'Unknown provider' }, { status: 400 });
    }

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Generation failed' },
      { status: 500 }
    );
  }
}
