# VixPic

**BYOK AI Image Generation Tool**

> Your API keys. Unlimited images. Pay once.

## What is VixPic?

VixPic is a **Bring Your Own Key (BYOK)** AI image generation tool. Instead of paying expensive subscriptions to Midjourney or Leonardo, you use your own API keys and pay only for what you generate.

## Key Features (Planned)

- 🔑 **BYOK** - Use your own API keys (Together AI, Replicate, FAL, OpenAI)
- 💰 **Pay Once** - Lifetime deal pricing ($29-149)
- 🖼️ **Multi-Provider** - Switch between FLUX, SDXL, DALL-E from one interface
- 📊 **Cost Tracking** - See exactly what each image costs
- 🔒 **Privacy** - Your images stay on your device (IndexedDB)
- ✂️ **Free Tools** - Background removal, upscaling as hooks

## Target Market

- Creators tired of $30/month subscriptions
- Developers who want API access
- Privacy-conscious users
- Power users who generate lots of images

## Pricing Model

| Tier | Price | Target |
|------|-------|--------|
| Starter | $29 | Casual users |
| Pro | $59 | Regular creators |
| Business | $149 | Teams/agencies |

## Tech Stack (Planned)

- **Frontend**: Next.js + shadcn/ui
- **Storage**: IndexedDB (browser-based, no server needed)
- **API Proxy**: Vercel Edge Functions (for CORS)
- **Providers**: Together AI, Replicate, FAL.ai, OpenAI

## Research

See `/research` folder for market research, competitor analysis, and planning docs.

## Status

🔬 **Research Phase** - Validating market and planning MVP

---

*Part of [Zaanix Studio](https://github.com/zaanix-studio)*
