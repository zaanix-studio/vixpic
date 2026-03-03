'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useHistory } from '@/lib/store';
import { PROVIDERS, type GeneratedImage, type Provider } from '@/lib/types';

export default function GalleryPage() {
  const { history, removeImage, totalCost, isLoaded } = useHistory();
  
  // Filter/search state
  const [search, setSearch] = useState('');
  const [providerFilter, setProviderFilter] = useState<Provider | 'all'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'cost'>('date');
  const [selectedImage, setSelectedImage] = useState<GeneratedImage | null>(null);

  // Filter and sort images
  const filteredImages = useMemo(() => {
    let result = [...history];
    
    // Search filter
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      result = result.filter(img => 
        img.prompt.toLowerCase().includes(searchLower) ||
        img.model.toLowerCase().includes(searchLower)
      );
    }
    
    // Provider filter
    if (providerFilter !== 'all') {
      result = result.filter(img => img.provider === providerFilter);
    }
    
    // Sort
    if (sortBy === 'cost') {
      result.sort((a, b) => b.cost - a.cost);
    }
    // Default is already sorted by date (newest first)
    
    return result;
  }, [history, search, providerFilter, sortBy]);

  // Download image helper
  const downloadImage = async (image: GeneratedImage) => {
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const ext = blob.type.includes('webp') ? 'webp' : blob.type.includes('png') ? 'png' : 'jpg';
      a.download = `vixpic-${image.id.slice(0, 8)}.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      window.open(image.url, '_blank');
    }
  };

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Get provider name
  const getProviderName = (id: Provider) => {
    return PROVIDERS.find(p => p.id === id)?.name || id;
  };

  if (!isLoaded) {
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
            <Link href="/generate">
              <Button>
                ✨ Generate
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
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Gallery</h1>
            <p className="text-gray-600">
              {history.length} images • ${totalCost.toFixed(2)} total cost
            </p>
          </div>
          
          {history.length > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-600 border-green-200">
                Saved ~${(history.length * 0.03 - totalCost).toFixed(2)} vs subscriptions
              </Badge>
            </div>
          )}
        </div>

        {history.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🖼️</div>
            <h2 className="text-xl font-semibold mb-2">No images yet</h2>
            <p className="text-gray-600 mb-6">
              Start generating to build your gallery
            </p>
            <Link href="/generate">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                ✨ Generate Your First Image
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Search prompts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-3">
                <Select value={providerFilter} onValueChange={(v) => v && setProviderFilter(v as Provider | 'all')}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Providers</SelectItem>
                    {PROVIDERS.map(p => (
                      <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={(v) => v && setSortBy(v as 'date' | 'cost')}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Newest</SelectItem>
                    <SelectItem value="cost">Highest Cost</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            {search || providerFilter !== 'all' ? (
              <p className="text-sm text-gray-500 mb-4">
                Showing {filteredImages.length} of {history.length} images
              </p>
            ) : null}

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredImages.map((image) => (
                <Card 
                  key={image.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square relative">
                    <img
                      src={image.url}
                      alt={image.prompt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-white/90"
                      >
                        {getProviderName(image.provider)}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (search || providerFilter !== 'all') && (
              <div className="text-center py-12">
                <p className="text-gray-500">No images match your filters</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => { setSearch(''); setProviderFilter('all'); }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Image Detail Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Badge>{getProviderName(selectedImage.provider)}</Badge>
                  <span className="text-sm font-normal text-gray-500">
                    {formatDate(selectedImage.createdAt)}
                  </span>
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                {/* Image */}
                <div className="relative rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.prompt}
                    className="w-full max-h-[50vh] object-contain"
                  />
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Prompt</label>
                    <p className="mt-1 text-gray-900">{selectedImage.prompt}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Model:</span>{' '}
                      <span className="font-medium">{selectedImage.model}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Size:</span>{' '}
                      <span className="font-medium">{selectedImage.width}×{selectedImage.height}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Cost:</span>{' '}
                      <span className="font-medium">${selectedImage.cost.toFixed(4)}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    onClick={() => downloadImage(selectedImage)}
                  >
                    📥 Download
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(selectedImage.prompt);
                    }}
                  >
                    📋 Copy Prompt
                  </Button>
                  <Link href={`/generate?prompt=${encodeURIComponent(selectedImage.prompt)}`}>
                    <Button variant="outline">
                      🔄 Regenerate
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => {
                      if (confirm('Delete this image from history?')) {
                        removeImage(selectedImage.id);
                        setSelectedImage(null);
                      }
                    }}
                  >
                    🗑️ Delete
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
