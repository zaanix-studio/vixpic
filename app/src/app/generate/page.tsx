'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/toast';
import { useApiKeys, useHistory, usePreferences } from '@/lib/store';
import { PROVIDERS, getProvider, getModel, type Provider, type Model, type GeneratedImage } from '@/lib/types';
import { PROMPT_TEMPLATES, CATEGORIES, type PromptTemplate } from '@/lib/prompts';
import { Onboarding, useOnboarding } from '@/components/onboarding';

// Aspect ratio presets
const ASPECT_RATIOS = [
  { id: '1:1', width: 1024, height: 1024, label: 'Square' },
  { id: '16:9', width: 1344, height: 768, label: 'Landscape' },
  { id: '9:16', width: 768, height: 1344, label: 'Portrait' },
  { id: '4:3', width: 1152, height: 896, label: 'Standard' },
  { id: '3:4', width: 896, height: 1152, label: 'Tall' },
];

// Wrapper component for Suspense boundary (Next.js 16+ requirement for useSearchParams)
export default function GeneratePage() {
  return (
    <Suspense fallback={<GeneratePageLoading />}>
      <GeneratePageContent />
    </Suspense>
  );
}

function GeneratePageLoading() {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

function GeneratePageContent() {
  const { keys, hasKey, setKey, isLoaded: keysLoaded } = useApiKeys();
  const { history, addImage } = useHistory();
  const { prefs } = usePreferences();
  const { addToast } = useToast();
  const searchParams = useSearchParams();
  const { showOnboarding, completeOnboarding, isLoaded: onboardingLoaded } = useOnboarding();

  // Generation state
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<Provider>(prefs.defaultProvider);
  const [selectedModel, setSelectedModel] = useState<string>(prefs.defaultModel);
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [steps, setSteps] = useState(25);
  const [guidance, setGuidance] = useState(7.5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStatus, setGenerationStatus] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Template selection state
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('photography');

  // Get current provider and model
  const provider = useMemo(() => getProvider(selectedProvider), [selectedProvider]);
  const model = useMemo(() => getModel(selectedProvider, selectedModel), [selectedProvider, selectedModel]);
  const dimensions = useMemo(() => ASPECT_RATIOS.find(ar => ar.id === aspectRatio) || ASPECT_RATIOS[0], [aspectRatio]);

  // Cost estimate
  const estimatedCost = model ? (model.costPer1k / 1000).toFixed(3) : '0.00';

  // Check if we have API key for selected provider
  const hasProviderKey = hasKey(selectedProvider);

  // Load prompt from URL params (for "Regenerate" from gallery)
  useEffect(() => {
    const urlPrompt = searchParams.get('prompt');
    if (urlPrompt) {
      setPrompt(urlPrompt);
    }
  }, [searchParams]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Enter to generate
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (!isGenerating && hasProviderKey && prompt.trim()) {
          handleGenerate();
        }
      }
      // Escape to close templates
      if (e.key === 'Escape' && showTemplates) {
        setShowTemplates(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGenerating, hasProviderKey, prompt, showTemplates]);

  // Apply template
  const applyTemplate = (template: PromptTemplate) => {
    setPrompt(template.prompt);
    setShowTemplates(false);
    addToast(`Applied "${template.name}" template`, 'success');
  };

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

  // Generate image using the API route
  const handleGenerate = async () => {
    if (!prompt.trim()) {
      addToast('Please enter a prompt', 'error');
      return;
    }
    if (!hasProviderKey) {
      addToast('Please configure your API key first', 'error');
      return;
    }

    const apiKey = keys[selectedProvider];
    if (!apiKey) {
      addToast('API key not found', 'error');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);
    setGenerationStatus('Connecting to ' + getProviderName(selectedProvider) + '...');

    try {
      setGenerationStatus('Generating image...');
      
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          params: {
            prompt,
            negativePrompt: negativePrompt || undefined,
            model: selectedModel,
            provider: selectedProvider,
            width: dimensions.width,
            height: dimensions.height,
            steps,
            guidance,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Generation failed');
      }

      setGenerationStatus('Processing result...');
      const imageUrl = data.imageUrl;
      
      const image: GeneratedImage = {
        id: crypto.randomUUID(),
        url: imageUrl,
        prompt: prompt,
        model: selectedModel,
        provider: selectedProvider,
        width: dimensions.width,
        height: dimensions.height,
        createdAt: new Date(),
        cost: model ? model.costPer1k / 1000 : 0
      };
      
      setGeneratedImage(imageUrl);
      addImage(image);
      addToast('Image generated! Cost: $' + image.cost.toFixed(4), 'success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Generation failed';
      setError(errorMessage);
      addToast(errorMessage, 'error');
    } finally {
      setIsGenerating(false);
      setGenerationStatus('');
    }
  };

  // Helper to get provider name
  const getProviderName = (id: Provider) => {
    return PROVIDERS.find(p => p.id === id)?.name || id;
  };

  if (!keysLoaded || !onboardingLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  // Check if user has any API keys configured
  const hasAnyKey = PROVIDERS.some(p => hasKey(p.id));

  return (
    <div className="min-h-screen bg-muted">
      {/* Onboarding Modal for first-time users */}
      {showOnboarding && (
        <Onboarding
          onComplete={completeOnboarding}
          onAddKey={(provider, key) => {
            setKey(provider, key);
            addToast(`${provider.charAt(0).toUpperCase() + provider.slice(1)} API key saved!`, 'success');
          }}
          hasAnyKey={hasAnyKey}
        />
      )}
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand to-info rounded-lg" />
            <span className="font-bold text-xl">VixPic</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/gallery">
              <Button variant="ghost" size="sm">
                🖼️ Gallery
              </Button>
            </Link>
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
          <div className="mb-6 p-4 bg-warning-muted/50 border border-warning/20 rounded-lg">
            <h3 className="font-semibold text-warning-muted-foreground mb-1">No API Keys Configured</h3>
            <p className="text-warning-muted-foreground text-sm mb-3">
              You need to add at least one API key to start generating images.
            </p>
            <Link href="/settings">
              <Button size="sm" className="bg-warning text-warning-foreground hover:bg-warning/90">
                Configure API Keys →
              </Button>
            </Link>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr,400px] gap-6">
          {/* Main Generation Panel */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <Label htmlFor="prompt" className="text-lg font-semibold">
                  Describe your image
                </Label>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowTemplates(!showTemplates)}
                >
                  📝 Templates
                </Button>
              </div>
              
              {/* Templates Panel */}
              {showTemplates && (
                <div className="mb-4 p-4 bg-muted rounded-lg border">
                  <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
                    {CATEGORIES.map(cat => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(cat.id)}
                        className="whitespace-nowrap"
                      >
                        {cat.icon} {cat.name}
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {PROMPT_TEMPLATES
                      .filter(t => t.category === selectedCategory)
                      .map(template => (
                        <button
                          key={template.id}
                          onClick={() => applyTemplate(template)}
                          className="text-left p-3 rounded-lg border bg-card hover:border-brand/30 hover:bg-brand-muted/50 transition-colors"
                        >
                          <p className="font-medium text-sm">{template.name}</p>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                            {template.prompt.slice(0, 80)}...
                          </p>
                        </button>
                      ))}
                  </div>
                </div>
              )}
              
              <Textarea
                id="prompt"
                placeholder="A serene Japanese garden with cherry blossoms, koi pond reflecting moonlight, traditional stone lanterns, photorealistic..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] text-base resize-none"
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{prompt.length} characters</span>
                  <span className="text-xs text-muted-foreground hidden sm:block">⌘/Ctrl + Enter to generate</span>
                </div>
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !hasProviderKey || !prompt.trim()}
                  className="px-8 bg-gradient-to-r from-brand to-info hover:from-brand/90 hover:to-info/90"
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
            <div className="bg-card rounded-xl p-6 shadow-sm min-h-[400px] flex items-center justify-center">
              {error && (
                <div className="text-center text-destructive">
                  <p className="text-lg">⚠️ {error}</p>
                </div>
              )}
              {isGenerating && (
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">{generationStatus || 'Creating your image...'}</p>
                  <p className="text-sm text-muted-foreground mt-2">This may take 5-30 seconds depending on the model</p>
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
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={async () => {
                        try {
                          const response = await fetch(generatedImage);
                          const blob = await response.blob();
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `vixpic-${Date.now()}.webp`;
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                          URL.revokeObjectURL(url);
                        } catch (e) {
                          // Fallback: open in new tab
                          window.open(generatedImage, '_blank');
                        }
                      }}
                    >
                      📥 Download
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                    >
                      🔄 Regenerate
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(prompt);
                        addToast('Prompt copied to clipboard', 'success');
                      }}
                    >
                      📋 Copy Prompt
                    </Button>
                  </div>
                </div>
              )}
              {!isGenerating && !error && !generatedImage && (
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">🎨</div>
                  <p>Your generated image will appear here</p>
                </div>
              )}
            </div>

            {/* Recent History */}
            {history.length > 0 && (
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Recent Generations</h3>
                <div className="grid grid-cols-4 gap-3">
                  {history.slice(0, 8).map(img => (
                    <button
                      key={img.id}
                      onClick={() => setGeneratedImage(img.url)}
                      className="aspect-square rounded-lg overflow-hidden hover:ring-2 ring-brand/60 transition-all"
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
                    <Label className="text-sm text-muted-foreground">Provider</Label>
                    <Select value={selectedProvider} onValueChange={(v) => v && handleProviderChange(v as Provider)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PROVIDERS.map(p => (
                          <SelectItem key={p.id} value={p.id}>
                            <span className="flex items-center gap-2">
                              {p.name}
                              {hasKey(p.id) ? (
                                <Badge variant="outline" className="text-success border-success/20">✓</Badge>
                              ) : (
                                <Badge variant="outline" className="text-muted-foreground">No key</Badge>
                              )}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Model */}
                  <div>
                    <Label className="text-sm text-muted-foreground">Model</Label>
                    <Select value={selectedModel} onValueChange={(v) => v && setSelectedModel(v)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {provider?.models.map(m => (
                          <SelectItem key={m.id} value={m.id}>
                            <span className="flex flex-col">
                              <span>{m.name}</span>
                              <span className="text-xs text-muted-foreground">~${(m.costPer1k / 1000).toFixed(3)}/img</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {model && (
                      <p className="text-xs text-muted-foreground mt-1">{model.description}</p>
                    )}
                  </div>

                  {/* Cost Estimate */}
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Estimated cost</span>
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
                          ? 'border-brand/60 bg-brand-muted/50'
                          : 'border-border hover:border-input'
                      }`}
                    >
                      <div
                        className={`mx-auto bg-border rounded ${
                          aspectRatio === ar.id ? 'bg-brand/40' : ''
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
                <p className="text-xs text-muted-foreground mt-2 text-center">
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
                        <span className="text-sm text-muted-foreground">{steps}</span>
                      </div>
                      <Slider
                        value={[steps]}
                        onValueChange={(v) => setSteps(Array.isArray(v) ? v[0] : v)}
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
                        <span className="text-sm text-muted-foreground">{steps}</span>
                      </div>
                      <Slider
                        value={[steps]}
                        onValueChange={(v) => setSteps(Array.isArray(v) ? v[0] : v)}
                        min={10}
                        max={50}
                        step={5}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm">Guidance Scale</Label>
                        <span className="text-sm text-muted-foreground">{guidance.toFixed(1)}</span>
                      </div>
                      <Slider
                        value={[guidance]}
                        onValueChange={(v) => setGuidance(Array.isArray(v) ? v[0] : v)}
                        min={1}
                        max={20}
                        step={0.5}
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground block mb-2">Negative Prompt</Label>
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
