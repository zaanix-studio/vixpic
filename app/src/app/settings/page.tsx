'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useApiKeys, usePreferences, useHistory } from '@/lib/store';
import { PROVIDERS, type Provider } from '@/lib/types';
import { useOnboarding } from '@/components/onboarding';

export default function SettingsPage() {
  const { keys, setKey, clearKey, hasKey, isLoaded: keysLoaded } = useApiKeys();
  const { prefs, setPreference, isLoaded: prefsLoaded } = usePreferences();
  const { history, totalCost, clearHistory } = useHistory();
  const { resetOnboarding } = useOnboarding();

  const [showKeys, setShowKeys] = useState<Record<Provider, boolean>>({} as Record<Provider, boolean>);
  const [tempKeys, setTempKeys] = useState<Record<Provider, string>>({} as Record<Provider, string>);

  const toggleShowKey = (provider: Provider) => {
    setShowKeys(prev => ({ ...prev, [provider]: !prev[provider] }));
  };

  const handleSaveKey = (provider: Provider) => {
    const key = tempKeys[provider];
    if (key?.trim()) {
      setKey(provider, key.trim());
      setTempKeys(prev => ({ ...prev, [provider]: '' }));
    }
  };

  const handleRemoveKey = (provider: Provider) => {
    clearKey(provider);
  };

  const configuredCount = PROVIDERS.filter(p => hasKey(p.id)).length;

  if (!keysLoaded || !prefsLoaded) {
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
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
            <span className="font-bold text-xl">VixPic</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/gallery">
              <Button variant="ghost" size="sm">
                🖼️ Gallery
              </Button>
            </Link>
            <Link href="/generate">
              <Button size="sm">
                ← Back to Generate
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600 mb-8">Configure your API keys and preferences</p>

        {/* API Keys Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">API Keys</h2>
              <p className="text-sm text-gray-500">
                {configuredCount} of {PROVIDERS.length} providers configured
              </p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-200">
              🔒 Stored locally
            </Badge>
          </div>

          <div className="space-y-4">
            {PROVIDERS.map(provider => (
              <Card key={provider.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">{provider.name}</CardTitle>
                      {hasKey(provider.id) ? (
                        <Badge className="bg-green-100 text-green-700">Connected</Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-500">Not configured</Badge>
                      )}
                    </div>
                    <a
                      href={provider.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-600 hover:underline"
                    >
                      Get API Key →
                    </a>
                  </div>
                  <CardDescription>
                    {provider.models.length} models available • {provider.docsUrl}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {hasKey(provider.id) ? (
                    <div className="flex items-center gap-4">
                      <div className="flex-1 font-mono text-sm bg-gray-100 px-3 py-2 rounded">
                        {showKeys[provider.id] 
                          ? keys[provider.id] 
                          : '••••••••••••' + (keys[provider.id]?.slice(-4) || '')}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleShowKey(provider.id)}
                      >
                        {showKeys[provider.id] ? '👁️ Hide' : '👁️ Show'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleRemoveKey(provider.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Input
                        type="password"
                        placeholder={`Enter your ${provider.name} API key`}
                        value={tempKeys[provider.id] || ''}
                        onChange={(e) => setTempKeys(prev => ({ ...prev, [provider.id]: e.target.value }))}
                        className="flex-1 font-mono"
                      />
                      <Button
                        onClick={() => handleSaveKey(provider.id)}
                        disabled={!tempKeys[provider.id]?.trim()}
                      >
                        Save Key
                      </Button>
                    </div>
                  )}
                  
                  {/* Models preview */}
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-gray-500 mb-2">Available models:</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.models.map(model => (
                        <span
                          key={model.id}
                          className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                        >
                          {model.name} (~${(model.costPer1k / 1000).toFixed(3)}/img)
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>🔐 Security Note:</strong> Your API keys are stored only in your browser&apos;s
              local storage. They never leave your device or touch our servers. When you generate
              images, requests go directly from your browser to the provider.
            </p>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Preferences</h2>
          
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Show Cost Estimates</Label>
                  <p className="text-sm text-gray-500">Display estimated cost before generating</p>
                </div>
                <Switch
                  checked={prefs.showCostEstimate}
                  onCheckedChange={(checked) => setPreference('showCostEstimate', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Usage Stats Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Usage Statistics</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-purple-600">{history.length}</p>
                  <p className="text-sm text-gray-500">Images Generated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">${totalCost.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Total API Cost</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">
                    ${(history.length * 0.03 - totalCost).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">Saved vs Subscriptions</p>
                </div>
              </div>
              
              {history.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <Button
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => {
                      if (confirm('Clear all generation history? This cannot be undone.')) {
                        clearHistory();
                      }
                    }}
                  >
                    Clear History
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Help Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Help & Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">🎓 Show Tutorial Again</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Replay the setup walkthrough to learn the basics.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    resetOnboarding();
                    window.location.href = '/generate';
                  }}
                >
                  Start Tutorial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📖 Getting Started Guide</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Learn how to get your API keys and start generating images.
                </p>
                <Button variant="outline" size="sm">Read Guide</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">💬 Support</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Have questions? We&apos;re here to help.
                </p>
                <Button variant="outline" size="sm">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
