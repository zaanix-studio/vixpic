'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PROVIDERS, type Provider } from '@/lib/types';

interface OnboardingProps {
  onComplete: () => void;
  onAddKey: (provider: Provider, key: string) => void;
  hasAnyKey: boolean;
}

const STEPS = [
  'welcome',
  'understand',
  'choose',
  'setup',
  'ready'
] as const;

type Step = typeof STEPS[number];

const PROVIDER_DETAILS: Record<Provider, {
  icon: string;
  freeCredit: string;
  signupTime: string;
  recommended?: boolean;
  bestFor: string;
}> = {
  replicate: {
    icon: '🔥',
    freeCredit: 'Pay-as-you-go (no free tier)',
    signupTime: '1 min',
    recommended: true,
    bestFor: 'Best for FLUX models, great quality/price'
  },
  fal: {
    icon: '⚡',
    freeCredit: '$1 free credits',
    signupTime: '1 min',
    bestFor: 'Fastest generation, ~1 second'
  },
  together: {
    icon: '🚀',
    freeCredit: '$5 free credits',
    signupTime: '2 min',
    bestFor: 'Open source models, good free tier'
  },
  openai: {
    icon: '🎨',
    freeCredit: '$5 free credits (new accounts)',
    signupTime: '2 min',
    bestFor: 'Best text rendering (DALL-E 3)'
  }
};

export function Onboarding({ onComplete, onAddKey, hasAnyKey }: OnboardingProps) {
  const [step, setStep] = useState<Step>('welcome');
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const currentIndex = STEPS.indexOf(step);
  const progress = ((currentIndex + 1) / STEPS.length) * 100;

  const nextStep = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < STEPS.length) {
      setStep(STEPS[nextIndex]);
    }
  };

  const prevStep = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setStep(STEPS[prevIndex]);
    }
  };

  const handleProviderSelect = (provider: Provider) => {
    setSelectedProvider(provider);
    setApiKey('');
    setValidationError(null);
    nextStep();
  };

  const validateAndSaveKey = async () => {
    if (!selectedProvider || !apiKey.trim()) return;
    
    setIsValidating(true);
    setValidationError(null);
    
    // Simple validation - just check format
    const key = apiKey.trim();
    
    // Basic format checks
    if (selectedProvider === 'openai' && !key.startsWith('sk-')) {
      setValidationError('OpenAI keys should start with "sk-"');
      setIsValidating(false);
      return;
    }
    
    if (selectedProvider === 'replicate' && !key.startsWith('r8_')) {
      setValidationError('Replicate keys should start with "r8_"');
      setIsValidating(false);
      return;
    }
    
    // Simulate validation delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Save the key
    onAddKey(selectedProvider, key);
    setIsValidating(false);
    nextStep();
  };

  const getProviderLink = (provider: Provider) => {
    return PROVIDERS.find(p => p.id === provider)?.signupUrl || '#';
  };

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" onPointerDownOutside={(e) => e.preventDefault()}>
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step: Welcome */}
        {step === 'welcome' && (
          <div className="text-center py-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl">Welcome to VixPic!</DialogTitle>
            </DialogHeader>
            <p className="text-gray-600 mt-4 mb-8">
              Create stunning AI images with <strong>your own API keys</strong> — 
              no subscriptions, no limits, no markup.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">80%</div>
                <div className="text-xs text-gray-500">Cheaper</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">∞</div>
                <div className="text-xs text-gray-500">No Limits</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-500">Private</div>
              </div>
            </div>
            <Button 
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Get Started →
            </Button>
            <button 
              onClick={onComplete}
              className="text-sm text-gray-500 hover:text-gray-700 mt-4 block mx-auto"
            >
              I&apos;ll set this up later
            </button>
          </div>
        )}

        {/* Step: Understand BYOK */}
        {step === 'understand' && (
          <div className="py-4">
            <DialogHeader>
              <DialogTitle className="text-xl">How BYOK Works</DialogTitle>
            </DialogHeader>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Get your API key</h4>
                  <p className="text-sm text-gray-600">
                    Sign up with an AI provider (free) and copy your API key. 
                    Takes ~2 minutes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Paste it in VixPic</h4>
                  <p className="text-sm text-gray-600">
                    Your key stays in your browser — we never see it or store it 
                    on our servers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Create unlimited images</h4>
                  <p className="text-sm text-gray-600">
                    Pay only for what you use, directly to the AI provider. 
                    Typically $0.003-0.05 per image.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>💡 Example:</strong> 500 images/month with FLUX costs ~$1.50. 
                That&apos;s 95% less than Midjourney&apos;s $30/month!
              </p>
            </div>
            <div className="flex gap-3 mt-8">
              <Button variant="outline" onClick={prevStep} className="flex-1">
                ← Back
              </Button>
              <Button 
                onClick={nextStep}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Choose Provider →
              </Button>
            </div>
          </div>
        )}

        {/* Step: Choose Provider */}
        {step === 'choose' && (
          <div className="py-4">
            <DialogHeader>
              <DialogTitle className="text-xl">Choose Your Provider</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-gray-600 mt-2 mb-6">
              Pick any provider to start. You can add more later.
            </p>
            <div className="space-y-3">
              {(Object.entries(PROVIDER_DETAILS) as [Provider, typeof PROVIDER_DETAILS[Provider]][]).map(([id, details]) => (
                <button
                  key={id}
                  onClick={() => handleProviderSelect(id)}
                  className="w-full text-left p-4 rounded-xl border-2 hover:border-purple-300 hover:bg-purple-50 transition-all flex items-center gap-4"
                >
                  <div className="text-3xl">{details.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold capitalize">{id === 'fal' ? 'FAL.ai' : id === 'openai' ? 'OpenAI' : id}</span>
                      {details.recommended && (
                        <Badge className="bg-purple-100 text-purple-700">Recommended</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{details.bestFor}</p>
                    <p className="text-xs text-green-600 mt-1">{details.freeCredit}</p>
                  </div>
                  <div className="text-gray-400">→</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={prevStep} className="flex-1">
                ← Back
              </Button>
            </div>
          </div>
        )}

        {/* Step: Setup API Key */}
        {step === 'setup' && selectedProvider && (
          <div className="py-4">
            <DialogHeader>
              <DialogTitle className="text-xl flex items-center gap-2">
                <span className="text-2xl">{PROVIDER_DETAILS[selectedProvider].icon}</span>
                Connect {selectedProvider === 'fal' ? 'FAL.ai' : selectedProvider === 'openai' ? 'OpenAI' : selectedProvider.charAt(0).toUpperCase() + selectedProvider.slice(1)}
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-6 space-y-6">
              {/* Step 1: Get API Key */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-600 text-white rounded-full text-sm flex items-center justify-center">1</span>
                  Get your API key
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Click below to open the API key page in a new tab:
                </p>
                <a 
                  href={getProviderLink(selectedProvider)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Open {selectedProvider === 'fal' ? 'FAL.ai' : selectedProvider === 'openai' ? 'OpenAI' : selectedProvider.charAt(0).toUpperCase() + selectedProvider.slice(1)} →
                </a>
              </div>

              {/* Step 2: Paste Key */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-600 text-white rounded-full text-sm flex items-center justify-center">2</span>
                  Paste your API key
                </h4>
                <Input
                  type="password"
                  placeholder={
                    selectedProvider === 'openai' ? 'sk-...' :
                    selectedProvider === 'replicate' ? 'r8_...' :
                    'Enter your API key'
                  }
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    setValidationError(null);
                  }}
                  className="font-mono"
                />
                {validationError && (
                  <p className="text-sm text-red-600 mt-2">{validationError}</p>
                )}
                <p className="text-xs text-gray-500 mt-2">
                  🔒 Your key is stored only in your browser. We never see it.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedProvider(null);
                  setApiKey('');
                  setValidationError(null);
                  prevStep();
                }} 
                className="flex-1"
              >
                ← Back
              </Button>
              <Button 
                onClick={validateAndSaveKey}
                disabled={!apiKey.trim() || isValidating}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600"
              >
                {isValidating ? (
                  <>
                    <span className="animate-spin mr-2">⟳</span>
                    Validating...
                  </>
                ) : (
                  'Connect →'
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step: Ready */}
        {step === 'ready' && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">🎉</span>
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl">You&apos;re all set!</DialogTitle>
            </DialogHeader>
            <p className="text-gray-600 mt-4 mb-8">
              Your API key is connected. Start creating amazing images!
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mb-8">
              <h4 className="font-semibold mb-2">Quick Tips:</h4>
              <ul className="text-sm text-gray-600 text-left space-y-2">
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span>Use the <strong>Templates</strong> button for inspiration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>⌨️</span>
                  <span>Press <strong>Ctrl+Enter</strong> to generate quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💰</span>
                  <span>Check <strong>Settings</strong> to add more providers</span>
                </li>
              </ul>
            </div>
            <Button 
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              size="lg"
            >
              ✨ Start Creating
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Hook to manage onboarding state
const ONBOARDING_KEY = 'vixpic_onboarding_complete';

export function useOnboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const completed = localStorage.getItem(ONBOARDING_KEY) === 'true';
    setShowOnboarding(!completed);
    setIsLoaded(true);
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setShowOnboarding(false);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_KEY);
    setShowOnboarding(true);
  };

  return { showOnboarding, completeOnboarding, resetOnboarding, isLoaded };
}
