# ⚠️ Technical Limitations & Issues to Know

## 1. 🖼️ Image Storage - LocalStorage Won't Work

### The Problem
- **LocalStorage limit: 5MB per origin** - Way too small
- Images as Base64 = 33% larger than binary
- A single 1024x1024 image = ~500KB-2MB
- **You'd hit the limit after 2-5 images**

### The Solution: IndexedDB
| Storage | Limit | Best For |
|---------|-------|----------|
| LocalStorage | 5MB | Settings, preferences |
| IndexedDB | **50-100GB+** | Images, files, blobs |

**Use IndexedDB** for image history. Libraries like `Dexie.js` or `idb-keyval` make it easy.

```javascript
// Dexie.js example
const db = new Dexie('ImageHistory');
db.version(1).stores({
  images: '++id, prompt, timestamp, provider'
});

// Store image blob directly (not base64)
await db.images.add({
  blob: imageBlob,
  prompt: "a cat...",
  timestamp: Date.now()
});
```

### Browser Storage Notes
- IndexedDB can be cleared by users (Clear Browsing Data)
- Safari has stricter limits in private mode
- Mobile browsers may evict data under storage pressure
- **Recommend: Offer export/backup feature**

---

## 2. 🔒 CORS - Can't Call APIs Directly From Browser

### The Problem
Most AI image APIs **block direct browser calls**:

| Provider | Direct Browser Calls | CORS Support |
|----------|---------------------|--------------|
| OpenAI | ❌ Blocked | No |
| Replicate | ❌ Blocked | No |
| FAL.ai | ❌ Blocked | No |
| Together AI | ❌ Blocked | No |
| Stability | ❌ Blocked | No |

> "Although endpoints are designed to be called directly from the client, **it is not safe to keep API Keys in client-side code**." - FAL.ai docs

### Wait, How Does TypingMind Do It?
TypingMind claims "static web app, no backend" but:
1. They have a **proxy** (`cloud2.typingmind.com/api/...`)
2. Some providers (OpenAI chat) may work client-side in some cases
3. They offer self-hosted version for full control

### The Solution: Lightweight Edge Proxy

**Option A: Vercel Edge Functions (Recommended)**
```
Browser → Vercel Edge Function → AI Provider
           (adds CORS headers)
```
- Near-zero latency (runs at edge)
- Free tier: 1M requests/month
- User's API key passed in request, never stored

**Option B: Cloudflare Workers**
- Similar to Vercel, global edge network
- Free tier: 100K requests/day

**Option C: Self-hosted proxy**
- User runs their own proxy
- Maximum privacy, more complex

### Proxy Architecture
```javascript
// pages/api/generate.ts (Vercel Edge Function)
export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const { apiKey, provider, prompt } = await req.json();
  
  // Forward to actual provider
  const response = await fetch(providerUrl, {
    headers: { 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({ prompt })
  });
  
  // Return with CORS headers
  return new Response(response.body, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
}
```

### Trade-off
- **Pure client-side** = No server costs, but CORS blocked
- **Edge proxy** = Small server cost (~free), works everywhere
- Most BYOK tools use a proxy - it's the standard approach

---

## 3. 🔑 API Key Security

### Risks of Client-Side Keys
1. **Browser extensions** can read page content
2. **Screenshots/screen sharing** can expose keys
3. **Browser dev tools** show keys in network tab
4. **Malicious JS** on the page could steal keys

### How Competitors Handle This

| Tool | Approach |
|------|----------|
| TypingMind | Encrypted LocalStorage + proxy |
| BoltAI | macOS Keychain (native) |
| Msty | Local encrypted config |
| Jan.ai | Local file (user controls) |

### Best Practices
1. **Encrypt keys at rest** (use SubtleCrypto API)
2. **Show masked keys** (sk-...abc123)
3. **Warn users** about security (show disclaimer)
4. **Support spending limits** (link to provider's limit settings)
5. **Allow easy key rotation** (delete old, add new)
6. **Never log keys** anywhere

### Security Disclaimer Template
```
⚠️ Security Notice

Your API keys are stored locally in your browser and encrypted.
They are sent directly to [Provider] servers, never to our servers.

For maximum security:
- Set spending limits in your [Provider] dashboard
- Use a dedicated key for this app
- Rotate keys periodically
- Don't share screenshots of this app
```

---

## 4. 💸 API Cost Surprises

### The Problem
Users may not understand:
- Each image costs money
- Different models have different costs
- Upscaling/variations cost extra
- Batch generation adds up fast

### Cost Examples (Feb 2026)

| Provider | Model | Cost/Image | Notes |
|----------|-------|------------|-------|
| Replicate | FLUX Schnell | ~$0.003 | Fast, good |
| Replicate | FLUX Pro | ~$0.05 | Best quality |
| FAL.ai | FLUX Dev | ~$0.025 | Good balance |
| OpenAI | DALL-E 3 1024x1024 | $0.04 | |
| OpenAI | DALL-E 3 HD | $0.08 | |
| Together | FLUX Schnell | ~$0.003 | |

### Solution: Cost Transparency
1. **Show estimated cost before generation**
2. **Track cumulative session cost**
3. **Warn at thresholds** ($1, $5, $10 spent)
4. **Link to provider dashboards** for billing

```
💰 Estimated cost: $0.025
    Model: FLUX Dev (FAL.ai)
    Resolution: 1024x1024
    
[Generate Image]
```

---

## 5. ⏱️ Rate Limits

### Provider Rate Limits

| Provider | Free Tier | Paid Limits |
|----------|-----------|-------------|
| OpenAI | Varies by tier | 60 RPM (images) |
| Replicate | Pay-as-you-go | No hard limit |
| FAL.ai | Pay-as-you-go | No hard limit |
| Together | Pay-as-you-go | ~1000 RPM |

### How to Handle
1. **Queue requests** - Don't fire all at once
2. **Show queue status** - "Generating 3 of 10..."
3. **Retry with backoff** - Auto-retry 429 errors
4. **Respect limits** - Throttle batch operations

---

## 6. 📱 Mobile & PWA Considerations

### Issues on Mobile
- **Safari iOS**: IndexedDB can be evicted
- **Chrome Android**: More generous but still can be cleared
- **PWA install**: Better persistence
- **File downloads**: Tricky UX on mobile

### Recommendations
- Make PWA installable (better storage persistence)
- Offer cloud backup option (optional paid feature?)
- Test thoroughly on Safari iOS (most restrictive)
- Use share sheet for saving images on mobile

---

## 7. 🚫 Provider-Specific Limitations

### OpenAI (DALL-E)
- Strict content policy (no faces without consent, etc.)
- No NSFW
- Limited control over style
- Best for: general purpose, text understanding

### Replicate
- Model availability varies
- Cold starts for less-popular models (~10-30s)
- Best for: variety, open models

### FAL.ai
- Focused on FLUX models
- Fast inference
- Best for: FLUX specifically

### Together AI
- Good for open models
- Competitive pricing
- Best for: cost-effective generation

### Stability AI
- Direct Stable Diffusion access
- Requires more prompting skill
- Best for: SD expertise

---

## 8. 🎨 Image Quality & Consistency

### Common User Complaints (from research)
1. **Hands/fingers** - Still problematic
2. **Text in images** - Only Ideogram does well
3. **Character consistency** - Hard across images
4. **Prompt following** - Some models ignore parts

### Can't Fully Solve (Model Limitations)
- These are model-level issues, not app issues
- Be transparent about limitations
- Offer multiple models so users can compare

---

## 9. 📋 Legal & Licensing

### Image Rights
- **Most providers**: You own generated images
- **OpenAI**: You own outputs, can use commercially
- **Replicate**: Depends on model license
- **FLUX**: Non-commercial (Dev), Commercial (Pro)

### Disclaimer Needed
```
Images generated using [Provider] are subject to their terms of service.
Commercial use rights vary by provider and model.
Users are responsible for compliance with applicable laws.
```

### Model Licenses to Check
- FLUX Dev: Non-commercial
- FLUX Pro: Commercial OK
- FLUX Schnell: Commercial OK (Apache 2.0)
- Stable Diffusion: Varies by version/checkpoint

---

## 10. 📊 Analytics Without Privacy Invasion

### What You Can Track (Privacy-Safe)
- Feature usage (anonymous)
- Error rates
- Provider distribution
- Aggregate generation counts

### What You Should NOT Track
- API keys (obviously)
- Prompts (could be sensitive)
- Generated images
- User identity without consent

### Tools
- Plausible Analytics (privacy-focused)
- Umami (self-hosted)
- Simple Vercel Analytics (if using Vercel)

---

## Summary: Architecture Recommendation

```
┌─────────────────────────────────────────────────────────┐
│                    User's Browser                        │
├─────────────────────────────────────────────────────────┤
│  Next.js Static App                                      │
│  ├── UI Components (shadcn/ui)                          │
│  ├── Settings in LocalStorage (encrypted)                │
│  └── Images in IndexedDB (Dexie.js)                     │
├─────────────────────────────────────────────────────────┤
│                         │                                │
│                         ▼                                │
│  ┌────────────────────────────────────────────┐         │
│  │      Vercel Edge Functions (Proxy)          │         │
│  │  - CORS headers                             │         │
│  │  - Request forwarding                       │         │
│  │  - API key passed through (never stored)    │         │
│  └────────────────────────────────────────────┘         │
│                         │                                │
└─────────────────────────┼───────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
     ┌────────┐     ┌────────┐     ┌────────┐
     │Replicate│    │ FAL.ai │    │Together│
     └────────┘     └────────┘     └────────┘
```

### Cost Structure
| Component | Cost |
|-----------|------|
| Vercel Hosting | Free (hobby) |
| Vercel Edge Functions | Free (1M req/mo) |
| Domain | ~$10/year |
| API costs | User pays directly |
| **Your total** | **~$10/year** |

---

## Action Items Before Building

1. ✅ Use **IndexedDB** for images (not LocalStorage)
2. ✅ Build **Edge proxy** for CORS (Vercel/Cloudflare)
3. ✅ Encrypt API keys in browser storage
4. ✅ Show costs before generation
5. ✅ Add security disclaimers
6. ✅ Test on Safari iOS (strictest browser)
7. ✅ Check model licenses for commercial use
8. ✅ Plan export/backup feature
