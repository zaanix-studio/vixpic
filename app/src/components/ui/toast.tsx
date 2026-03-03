'use client';

import * as React from 'react';
import { createContext, useContext, useState, useCallback } from 'react';

// Toast types
interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (message: string, type?: Toast['type'], duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

// Toast Provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const addToast = useCallback((
    message: string, 
    type: Toast['type'] = 'info',
    duration: number = 3000
  ) => {
    const id = crypto.randomUUID();
    setToasts(prev => [...prev, { id, message, type, duration }]);
    
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

// Hook to use toast
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

// Toast Container Component
function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`
            px-4 py-3 rounded-lg shadow-lg flex items-center gap-3
            animate-in slide-in-from-right-full duration-300
            ${toast.type === 'success' ? 'bg-success text-success-foreground' : ''}
            ${toast.type === 'error' ? 'bg-destructive text-inverted-foreground' : ''}
            ${toast.type === 'info' ? 'bg-inverted text-inverted-foreground' : ''}
          `}
        >
          <span className="text-lg">
            {toast.type === 'success' && '✓'}
            {toast.type === 'error' && '✕'}
            {toast.type === 'info' && 'ℹ'}
          </span>
          <p className="flex-1 text-sm">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-inverted-foreground/70 hover:text-inverted-foreground"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

// Simple toast function for one-off usage
let toastRef: ToastContextValue | null = null;

export function setToastRef(ref: ToastContextValue) {
  toastRef = ref;
}

export function toast(message: string, type: Toast['type'] = 'info') {
  if (toastRef) {
    toastRef.addToast(message, type);
  } else {
    console.warn('Toast called before provider mounted');
  }
}
