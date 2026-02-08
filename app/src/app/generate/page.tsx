'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useApiKeys, useHistory, usePreferences } from '@/lib/store';
import { PROVIDERS, getProvider, getModel, type Provider, type Model, type GeneratedImage } from '@/lib/types';

// Aspect ratio presets
const ASPECT_RATIOS = [
  { id: '1:1', width: 1024, height: 1024, label: 'Square' },
  { id: '16:9', width: 1344, height: 768, label: 'Landscape' },
  { id: '9:16', width: 768, height: 1344, label: 'Portrait' },
  { id: '4:3', width: 1152, height: 896, label: 'Standard' },
  { id: '3:4', width: 896, height: 1152, label: 'Tall' },
];

export default function GeneratePage() {
  const { keys, hasKey, isLoaded: keysLoaded } = useApiKeys();
  const { history, addImage } = useHistory();
  const { prefs } = usePreferences();

  // Generation state
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<Provider>(prefs.defaultProvider);
  const [selectedModel, setSelectedModel] = useState<string>(prefs.defaultModel);
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [steps, setSteps] = useState(25);
  const [guidance, setGuidance] = useState(7.5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Get current provider and model
  const provider = useMemo(() => getProvider(selectedProvider), [selectedProvider]);
  const model = useMemo(() => getModel(selectedProvider, selectedModel), [selectedProvider, selectedModel]);
  const dimensions = useMemo(() => ASPECT_RATIOS.find(ar => ar.id === aspectRatio) || ASPECT_RATIOS[0], [aspectRatio]);

  // Cost estimate
  const estimatedCost = model ? (model.costPer1k / 1000).toFixed(3) : '0.00';

  // Check if we have API key for selected provider
  const hasProviderKey = hasKey(selectedProvider);

  // Available providers (ones with keys configured)
  const configuredProviders = PROVIDERS.filter(p => hasKey(p.id));

  // Handle model change when provider changes
  const handleProviderChange = (newProvider: Provider) => {
    setSelectedProvider(newProvider);
    const newProviderConfig = getProvider(newProvider);
    if (newProviderConfig && newProviderConfig.models.length > 0) {
      setSelectedModel(newProviderConfig.models[0].id);
    }
  };

  // Generate image (stub - will implement API calls)
  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }
    if (!hasProviderKey) {
      setError('Please configure your API key first');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // TODO: Implement actual API calls
      // For now, simulate a generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Placeholder image (will be replaced with actual generation)
      const placeholderUrl = `https://picsum.photos/${dimensions.width}/${dimensions.height}?random=${Date.now()}`;
      
      const image: GeneratedImage = {
        id: crypto.randomUUID(),
        url: placeholderUrl,
        prompt: prompt,
        model: selectedModel,
        provider: selectedProvider,
        width: dimensions.width,
        height: dimensions.height,
        createdAt: new Date(),
        cost: model ? model.costPer1k / 1000 : 0
      };
      
      setGeneratedImage(placeholderUrl);
      addImage(image);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!keysLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
            <span className="font-bold text-xl">VixPic</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/settings">
              <Button variant="outline" size="sm">
                ⚙️ Settings
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* No API Keys Warning */}
        {configuredProviders.length === 0 && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-semibold text-amber-800 mb-1">No API Keys Configured</h3>
            <p className="text-amber-700 text-sm mb-3">
              You need to add at least one API key to start generating images.
            </p>
            <Link href="/settings">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                Configure API Keys →
              </Button>
            </Link>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr,400px] gap-6">
          {/* Main Generation Panel */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Label htmlFor="prompt" className="text-lg font-semibold mb-3 block">
                Describe your image
              </Label>
              <Textarea
                id="prompt"
                placeholder="A serene Japanese garden with cherry blossoms, koi pond reflecting moonlight, traditional stone lanterns, photorealistic..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] text-base resize-none"
              />
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-gray-500">{prompt.length} characters</span>
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !hasProviderKey || !prompt.trim()}
                  className="px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {isGenerating ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span>
                      Generating...
                    </>
                  ) : (
                    <>✨ Generate</>
                  )}
                </Button>
              </div>
            </div>

            {/* Generated Image Display */}
            <div className="bg-white rounded-xl p-6 shadow-sm min-h-[400px] flex items-center justify-center">
              {error && (
                <div className="text-center text-red-600">
                  <p className="text-lg">⚠️ {error}</p>
                </div>
              )}
              {isGenerating && (
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">Creating your image...</p>
                </div>
              )}
              {!isGenerating && !error && generatedImage && (
                <div className="w-full">
                  <img
                    src={generatedImage}
                    alt={prompt}
                    className="max-w-full max-h-[500px] mx-auto rounded-lg shadow-lg"
                  />
                  <div className="flex justify-center gap-3 mt-4">
                    <Button variant="outline" size="sm">
                      📥 Download
                    </Button>
                    <Button variant="outline" size="sm">
                      🔄 Regenerate
                    </Button>
                    <Button variant="outline" size="sm">
                      📋 Copy Prompt
                    </Button>
                  </div>
                </div>
              )}
              {!isGenerating && !error && !generatedImage && (
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🎨</div>
                  <p>Your generated image will appear here</p>
                </div>
              )}
            </div>

            {/* Recent History */}
            {history.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Recent Generations</h3>
                <div className="grid grid-cols-4 gap-3">
                  {history.slice(0, 8).map(img => (
                    <button
                      key={img.id}
                      onClick={() => setGeneratedImage(img.url)}
                      className="aspect-square rounded-lg overflow-hidden hover:ring-2 ring-purple-500 transition-all"
                    >
                      <img src={img.url} alt={img.prompt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            {/* Model Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Model</h3>
                
                <div className="space-y-4">
                  {/* Provider */}
                  <div>
                    <Label className="text-sm text-gray-600">Provider</Label>
                    <Select value={selectedProvider} onValueChange={(v) => handleProviderChange(v as Provider)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PROVIDERS.map(p => (
                          <SelectItem key={p.id} value={p.id}>
                            <span className="flex items-center gap-2">
                              {p.name}
                              {hasKey(p.id) ? (
                                <Badge variant="outline" className="text-green-600 border-green-200">✓</Badge>
                              ) : (
                                <Badge variant="outline" className="text-gray-400">No key</Badge>
                              )}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Model */}
                  <div>
                    <Label className="text-sm text-gray-600">Model</Label>
                    <Select value={selectedModel} onValueChange={setSelectedModel}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {provider?.models.map(m => (
                          <SelectItem key={m.id} value={m.id}>
                            <span className="flex flex-col">
                              <span>{m.name}</span>
                              <span className="text-xs text-gray-500">~${(m.costPer1k / 1000).toFixed(3)}/img</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {model && (
                      <p className="text-xs text-gray-500 mt-1">{model.description}</p>
                    )}
                  </div>

                  {/* Cost Estimate */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Estimated cost</span>
                      <span className="font-semibold">${estimatedCost}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aspect Ratio */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Size & Aspect Ratio</h3>
                <div className="grid grid-cols-5 gap-2">
                  {ASPECT_RATIOS.map(ar => (
                    <button
                      key={ar.id}
                      onClick={() => setAspectRatio(ar.id)}
                      className={`p-2 rounded-lg border-2 transition-all ${
                        aspectRatio === ar.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`mx-auto bg-gray-300 rounded ${
                          aspectRatio === ar.id ? 'bg-purple-400' : ''
                        }`}
                        style={{
                          width: ar.id === '1:1' ? 24 : ar.id.startsWith('16') || ar.id.startsWith('4') ? 28 : 18,
                          height: ar.id === '1:1' ? 24 : ar.id.startsWith('9') || ar.id.startsWith('3') ? 28 : 18,
                        }}
                      />
                      <p className="text-xs text-center mt-1">{ar.id}</p>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {dimensions.width} × {dimensions.height}px
                </p>
              </CardContent>
            </Card>

            {/* Advanced Settings */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Advanced</h3>
                <Tabs defaultValue="basic">
                  <TabsList className="w-full">
                    <TabsTrigger value="basic" className="flex-1">Basic</TabsTrigger>
                    <TabsTrigger value="advanced" className="flex-1">Pro</TabsTrigger>
                  </TabsList>
                  <TabsContent value="basic" className="space-y-4 mt-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm">Quality Steps</Label>
                        <span className="text-sm text-gray-500">{steps}</span>
                      </div>
                      <Slider
                        value={[steps]}
                        onValueChange={(v) => setSteps(v[0])}
                        min={10}
                        max={50}
                        step={5}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="advanced" className="space-y-4 mt-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm">Steps</Label>
                        <span className="text-sm text-gray-500">{steps}</span>
                      </div>
                      <Slider
                        value={[steps]}
                        onValueChange={(v) => setSteps(v[0])}
                        min={10}
                        max={50}
                        step={5}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm">Guidance Scale</Label>
                        <span className="text-sm text-gray-500">{guidance.toFixed(1)}</span>
                      </div>
                      <Slider
                        value={[guidance]}
                        onValueChange={(v) => setGuidance(v[0])}
                        min={1}
                        max={20}
                        step={0.5}
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600 block mb-2">Negative Prompt</Label>
                      <Textarea
                        placeholder="blurry, low quality, distorted..."
                        value={negativePrompt}
                        onChange={(e) => setNegativePrompt(e.target.value)}
                        className="min-h-[60px] text-sm"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
