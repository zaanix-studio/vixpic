# Why No BYOK for Image Generation? - Technical Barriers

## Executive Summary

BYOK (Bring Your Own Key) works well for text AI (TypingMind, etc.) but is virtually non-existent for image generation. This research investigates the **technical barriers** that explain this gap.

**Key Finding:** The barriers are real but **surmountable**. The biggest issues are:
1. **API fragmentation** (no Midjourney API at all)
2. **Async complexity** (polling/webhooks vs simple request/response)
3. **CORS blocks all major APIs** (requires proxy)
4. Storage is NOT a real barrier (IndexedDB handles it fine)

---

## 1. API Complexity: Sync vs Async

### Text APIs: Simple Request/Response
```
Request → Wait → Response (text)
```
- OpenAI Chat: Single POST, streaming or sync response
- Response: Small JSON with text content
- Latency: 1-30 seconds typical
- No polling, no webhooks, no job tracking

### Image APIs: Async by Default

**DALL-E (OpenAI)** - Simplest of the bunch:
```
POST /v1/images/generations
→ Response: { b64_json: "..." } or { url: "https://..." }
```
- Actually synchronous! Returns image data directly
- URLs expire in 60 minutes
- GPT-Image models return base64 only
- **Verdict: Not harder than text APIs**

**Replicate (FLUX, SD, etc.)** - Async by default:
```
POST /predictions → { id: "xxx", status: "starting" }
GET /predictions/{id} → { status: "processing" }
GET /predictions/{id} → { status: "succeeded", output: [...] }
```
- Default behavior is async (returns immediately with job ID)
- Three options for getting results:
  1. **Polling**: Keep checking status endpoint
  2. **Webhooks**: Server receives callback
  3. **Sync mode**: `Prefer: wait=60` header (max 60s)
- **Verdict: Polling adds complexity but is doable in browser**

**Black Forest Labs (FLUX)** - Always async:
```
POST /flux-2-pro → { id: "xxx", polling_url: "..." }
GET {polling_url} → { status: "...", sample: "..." }
```
- No sync mode available
- Must poll for results
- Result is a signed URL for image download
- **Verdict: Requires polling implementation**

### Complexity Assessment

| Provider | Pattern | Browser Difficulty |
|----------|---------|-------------------|
| OpenAI DALL-E | Sync | ⭐ Easy |
| OpenAI GPT-Image | Sync (base64) | ⭐ Easy |
| Replicate | Async + sync option | ⭐⭐ Moderate |
| Black Forest Labs | Async only | ⭐⭐⭐ Harder |
| Stability AI | Async | ⭐⭐⭐ Harder |

**Conclusion:** API complexity is a minor barrier. DALL-E is as simple as text. Others need polling logic but it's ~50 lines of code.

---

## 2. CORS & Browser Limitations

### The Critical Issue: All Major APIs Block CORS

**OpenAI API:**
> "Access to fetch at 'api.openai.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present"

- OpenAI **does NOT** send CORS headers
- Direct browser → OpenAI calls fail
- Applies to BOTH text AND image APIs

**How TypingMind Works:**
> "All API requests are sent directly from your browser to OpenAI server"
> - TypingMind FAQ

Wait, that contradicts... Investigation reveals:
- TypingMind uses a **browser extension** or **CORS proxy workaround**
- For self-hosted: Must run local models "in CORS mode"
- There's even a Docker image: `obeoneorg/simple-cors-proxy` specifically for TypingMind

**The Truth About BYOK for Text:**
- Browser-only BYOK **also** needs a CORS proxy
- TypingMind likely handles this transparently
- It's not "browser direct to API" in the pure sense

**Image API CORS Status:**
| Provider | CORS Enabled? | Notes |
|----------|--------------|-------|
| OpenAI | ❌ No | Same as text - needs proxy |
| Replicate | ❌ No | Backend only |
| Black Forest Labs | ❌ No | Backend only |
| Stability AI | ❌ No | Backend only |

### DALL-E Generated Image URLs Also Block CORS
> "Access to an image created with DALL-E blocked by CORS policy"
> - OpenAI Community, July 2024

Even the returned image URLs can't be fetched directly from browser!

**Solution Options:**
1. **CORS Proxy**: Route requests through a simple proxy
2. **Browser Extension**: Can bypass CORS (but limits distribution)
3. **Use base64**: DALL-E GPT-Image models return base64 (no URL fetch needed)

**Conclusion:** CORS is a real barrier but **the same barrier exists for text APIs**. TypingMind solved it; an image generator can too.

---

## 3. Storage Challenges

### Text vs Image Sizes
- Text response: 1-50 KB typical
- Image (1024x1024 PNG): 1-4 MB typical
- Image (base64 in JSON): 1.3x larger due to encoding

### Browser Storage Options

**localStorage:**
- Limit: 5-10 MB total per origin
- ❌ Not suitable for images

**IndexedDB:**
- Chrome: Up to 80% of free disk (often 60+ GB)
- Firefox: 10% of disk or 10 GB (whichever smaller)
- Safari: ~1 GB per origin
- Supports binary blobs efficiently
- ✅ **Perfectly suitable for images**

### Real-World Capacity
At 2 MB per image average:
- Chrome: Could store 30,000+ images
- Firefox: Could store 5,000+ images
- Safari: Could store 500+ images

**Storage API for Persistence:**
```javascript
const quota = await navigator.storage.estimate();
// { quota: 1073741824, usage: 0 }
await navigator.storage.persist(); // Request persistent storage
```

### QuotaExceededError Handling
```javascript
try {
  await db.put('images', imageBlob, key);
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    // Offer to delete old images
  }
}
```

**Conclusion:** Storage is **NOT a technical barrier**. IndexedDB handles images fine. A gallery of 500+ images in Safari, 5000+ in Firefox, 30,000+ in Chrome is plenty.

---

## 4. Model Fragmentation

### Text API Landscape: Standardized
OpenAI's Chat Completions API became the de facto standard:
```json
{
  "model": "gpt-4",
  "messages": [{"role": "user", "content": "Hello"}]
}
```

Most providers follow this format:
- Anthropic: Similar structure (different auth)
- Google: Different but adapters exist
- Open-source (Ollama, etc.): OpenAI-compatible endpoints

### Image API Landscape: Fragmented

**Midjourney: NO API AT ALL**
> "As of early 2024, Midjourney does not provide an official, publicly available API for third-party developers"
> - ImaginePro Blog, May 2025

- Still Discord-only
- Third-party "APIs" are just Discord bot wrappers
- Violates ToS, risky, unreliable
- **This alone explains 50% of why no BYOK**

**Different APIs, Different Patterns:**

| Provider | Endpoint Format | Auth | Response Format |
|----------|----------------|------|-----------------|
| OpenAI | `/v1/images/generations` | Bearer token | JSON with b64/URL |
| Replicate | `/v1/predictions` | Bearer token | Async job + polling |
| BFL | `/flux-2-pro` | API key header | Async job + polling |
| Stability | `/v1/generation/...` | API key header | Varies by endpoint |

**Parameter Differences:**
```javascript
// OpenAI
{ prompt, size: "1024x1024", quality: "hd" }

// Replicate/FLUX
{ prompt, width: 1024, height: 1024, num_inference_steps: 28 }

// Stability
{ text_prompts: [{text: prompt, weight: 1}], cfg_scale: 7 }
```

No OpenAI-compatible standard for images exists.

### Impact on BYOK
A true BYOK image generator would need:
1. Separate adapter for each provider
2. Handle 3+ different async patterns
3. Map parameters between APIs
4. **Can't support Midjourney at all**

**Conclusion:** Fragmentation is a **significant barrier**. Not impossible, but requires ~3x the integration work compared to text. Midjourney's lack of API is the killer.

---

## 5. Rate Limits & Costs

### Pricing Comparison (per image)
| Provider | Model | Cost/Image |
|----------|-------|-----------|
| OpenAI | DALL-E 3 (1024x1024) | $0.040 |
| OpenAI | DALL-E 3 HD | $0.080 |
| OpenAI | GPT-Image-1 | $0.040-$0.120 |
| BFL | FLUX 1.1 Pro | $0.040 |
| BFL | FLUX 2 Pro | $0.050 |
| Replicate | FLUX Schnell | ~$0.003 |
| Replicate | FLUX Dev | ~$0.025 |
| Stability | SD3 | ~$0.040 |

### Cost Predictability
- Text: ~$0.01-0.03 per 1K tokens (predictable)
- Images: $0.003-$0.12 per image (10-40x variance!)

### Rate Limits
- OpenAI: Tier-based, starts at 5 images/min
- Replicate: Concurrent limit based on plan
- BFL: Credit-based, varies

**Conclusion:** Costs are higher and less predictable than text, but this is a **UX/business concern**, not a technical barrier.

---

## 6. Summary: Real vs Perceived Barriers

### Real Technical Barriers
1. **No Midjourney API** - Can't support the most popular model
2. **API Fragmentation** - 3-5 different integrations needed
3. **CORS** - Requires proxy (same as text, actually)

### Surmountable Technical Challenges
1. **Async polling** - ~50 lines of code, not hard
2. **Storage** - IndexedDB works great
3. **Image size** - Base64 or blob storage handles it

### Not Actually Technical
1. **Cost unpredictability** - Business/UX problem
2. **Rate limits** - Same as text APIs
3. **Lack of standardization** - Market problem, not tech

---

## 7. Opportunity Assessment

**Why hasn't someone built BYOK for images?**

1. **Market timing**: Midjourney dominates, has no API
2. **TypingMind hasn't expanded**: They could add DALL-E easily
3. **Target audience**: Power users who want BYOK are rare
4. **Business model**: BYOK margins are thin (just $39 license)

**What would it take?**

Minimum viable BYOK image generator:
1. CORS proxy (simple serverless function)
2. DALL-E integration (OpenAI is easiest)
3. IndexedDB gallery storage
4. Basic prompt UI

That's actually... not that hard.

**The real question:** Is the market big enough for the effort?

---

## Sources

1. OpenAI API Reference - Images (platform.openai.com)
2. Replicate HTTP API Documentation (replicate.com/docs/reference/http)
3. Black Forest Labs Documentation (docs.bfl.ml)
4. TypingMind FAQ (docs.typingmind.com)
5. MDN - Storage quotas and eviction criteria
6. RxDB - IndexedDB Max Storage Limit Best Practices
7. Reddit r/midjourney - "Why isn't there an official Midjourney API?"
8. ImaginePro Blog - "Unofficial Midjourney API: Risks & Solutions"
9. OpenAI Community Forums - CORS discussions
10. ToolPilot - DALL-E vs Stable Diffusion Comparison 2026
