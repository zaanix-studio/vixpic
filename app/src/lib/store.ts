'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ApiKeys, Provider, GeneratedImage } from './types';

const STORAGE_KEYS = {
  apiKeys: 'vixpic_api_keys',
  history: 'vixpic_history',
  preferences: 'vixpic_preferences'
};

// API Keys management
export function useApiKeys() {
  const [keys, setKeysState] = useState<ApiKeys>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.apiKeys);
      if (stored) {
        setKeysState(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load API keys:', e);
    }
    setIsLoaded(true);
  }, []);

  const setKey = useCallback((provider: Provider, key: string) => {
    setKeysState(prev => {
      const updated = { ...prev, [provider]: key || undefined };
      localStorage.setItem(STORAGE_KEYS.apiKeys, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearKey = useCallback((provider: Provider) => {
    setKeysState(prev => {
      const updated = { ...prev };
      delete updated[provider];
      localStorage.setItem(STORAGE_KEYS.apiKeys, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const hasKey = useCallback((provider: Provider): boolean => {
    return !!keys[provider];
  }, [keys]);

  return { keys, setKey, clearKey, hasKey, isLoaded };
}

// History management
export function useHistory() {
  const [history, setHistoryState] = useState<GeneratedImage[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.history);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        setHistoryState(parsed.map((img: GeneratedImage) => ({
          ...img,
          createdAt: new Date(img.createdAt)
        })));
      }
    } catch (e) {
      console.error('Failed to load history:', e);
    }
    setIsLoaded(true);
  }, []);

  const addImage = useCallback((image: GeneratedImage) => {
    setHistoryState(prev => {
      const updated = [image, ...prev].slice(0, 100); // Keep last 100
      localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeImage = useCallback((id: string) => {
    setHistoryState(prev => {
      const updated = prev.filter(img => img.id !== id);
      localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistoryState([]);
    localStorage.removeItem(STORAGE_KEYS.history);
  }, []);

  const totalCost = history.reduce((sum, img) => sum + img.cost, 0);

  return { history, addImage, removeImage, clearHistory, totalCost, isLoaded };
}

// User preferences
export interface Preferences {
  defaultProvider: Provider;
  defaultModel: string;
  theme: 'light' | 'dark' | 'system';
  showCostEstimate: boolean;
}

const DEFAULT_PREFERENCES: Preferences = {
  defaultProvider: 'replicate',
  defaultModel: 'black-forest-labs/flux-schnell',
  theme: 'system',
  showCostEstimate: true
};

export function usePreferences() {
  const [prefs, setPrefsState] = useState<Preferences>(DEFAULT_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.preferences);
      if (stored) {
        setPrefsState({ ...DEFAULT_PREFERENCES, ...JSON.parse(stored) });
      }
    } catch (e) {
      console.error('Failed to load preferences:', e);
    }
    setIsLoaded(true);
  }, []);

  const setPreference = useCallback(<K extends keyof Preferences>(
    key: K,
    value: Preferences[K]
  ) => {
    setPrefsState(prev => {
      const updated = { ...prev, [key]: value };
      localStorage.setItem(STORAGE_KEYS.preferences, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { prefs, setPreference, isLoaded };
}
