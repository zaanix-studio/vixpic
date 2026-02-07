# UX Research: BYOK AI Image Generation Tool

> **Research Date:** February 5, 2026  
> **Purpose:** Document UX patterns from leading AI image tools and BYOK platforms to inform our tool's design  
> **Scope:** API key management, prompt interfaces, galleries, settings, and user workflows

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [TypingMind Deep Dive: BYOK Excellence](#typingmind-deep-dive)
3. [AI Image Tools Analysis](#ai-image-tools-analysis)
4. [Key UX Patterns](#key-ux-patterns)
5. [Recommendations for Our Tool](#recommendations)

---

## Executive Summary

This research analyzes UX patterns from **8+ tools** to identify best practices for building a BYOK (Bring Your Own Key) AI image generation interface. Key findings:

### Top Insights

1. **BYOK Setup** - Must be dead simple: Settings → API Keys → Paste → Done. TypingMind nails this.
2. **Prompt Augmentation** - Users struggle to articulate visual intent. Help them with style galleries, prompt builders, and AI-powered prompt enhancement.
3. **Two-Bill Transparency** - Clearly separate tool cost from API cost. Users love knowing exactly what they're paying for.
4. **Real-time Feedback** - Krea.ai's instant generation preview is a killer feature for creative iteration.
5. **Local-First Privacy** - Keys stored locally (like TypingMind) builds trust for power users.

---

## TypingMind Deep Dive: BYOK Excellence {#typingmind-deep-dive}

TypingMind is the gold standard for BYOK chat interfaces. Here's what makes it exceptional:

### API Key Setup Flow

**What They Do:**
- Profile menu (bottom-left) → "API Keys" button
- Clean form with fields for each provider (OpenAI, Anthropic, Google)
- Keys stored **locally by default** - never sent to their servers
- Optional cloud sync via TypingMind Cloud (encrypted)

**Key UX Decisions:**
```
✅ Local storage first (privacy-first default)
✅ One-click test connection (validate key works)
✅ Clear explanation: "API key ≠ subscription"
✅ Links to provider docs for getting keys
✅ Visual confirmation when key is saved
```

**What to Steal:**
- The "keys are local" messaging upfront - builds instant trust
- Separate "Add Custom Models" flow for non-standard providers
- Provider icons next to input fields (visual recognition)

### Settings Organization

TypingMind uses a **layered settings architecture:**

1. **Profile Level** - API keys, license, cloud sync
2. **Model Level** - Global system instructions, model parameters
3. **Chat Level** - Per-conversation overrides

**Information Architecture:**
```
├── Profile (bottom-left)
│   ├── API Keys (all providers)
│   ├── License Management
│   ├── Cloud Sync Settings
│   └── Data Export
│
├── Models (left sidebar)
│   ├── Model Selector
│   ├── Global Settings
│   │   └── System Instructions
│   ├── Custom Parameters
│   │   ├── Temperature
│   │   ├── Frequency Penalty
│   │   └── Presence Penalty
│   └── Add Custom Models
│
└── Workspace
    ├── Projects
    ├── Folders
    └── Tags
```

### Chat History UI

**Organization Features:**
- Folders + Tags dual system
- Cross-chat search
- Conversation forking (branch off without losing original)
- Multi-tab support (like browser tabs)
- Projects container for related chats

**What Works:**
- Visual hierarchy: Projects > Folders > Individual Chats
- Instant search across all history
- Recent chats always accessible

### Model Switching UX

**Seamless Switching:**
- Dropdown at top of chat area
- Switch mid-conversation (preserves context)
- Multi-model chat (parallel comparisons)
- Visual indicator of current model + provider

**Smart Default Behavior:**
- Remembers last-used model per project
- Auto-suggests models based on task type
- Shows token limits/pricing inline

---

## AI Image Tools Analysis {#ai-image-tools-analysis}

### Midjourney

**Platform:** Discord-based + Web App

**Discord UX (Original):**
- `/imagine` command-driven interface
- Results in chat feed (public gallery by default)
- Variation/upscale buttons under each generation
- Community gallery = infinite inspiration

**Web App UX:**
- Clean gallery-first interface
- Prompt bar at bottom (persistent)
- Side panel for advanced parameters
- Grid view with filtering options

**What Works:**
- **Button-based actions** - U1/V1 for upscale/variation (no typing)
- **Community inspiration** - Public gallery drives discovery
- **Iteration loops** - Easy to refine with one click

**What Doesn't:**
- Discord learning curve for new users
- Parameter syntax is cryptic (--ar 16:9 --v 6.1)
- Web app still feels beta/limited

### Leonardo.ai

**Standout Feature:** Canvas 2.0 - Full editing environment

**Canvas Modes:**
1. **Text2Img** - Generate directly to canvas from prompts
2. **Img2Img** - Transform existing images
3. **Sketch2Img** - Draw concept → AI generates
4. **Inpaint/Outpaint** - Selective editing and expansion

**UX Patterns:**
```
✅ Floating toolbar (non-intrusive)
✅ Full color picker (including hex codes)
✅ Keyboard shortcuts (documented, consistent)
✅ All finetuned models accessible in canvas
✅ Alchemy quality pipeline toggle
```

**Real-time Canvas Features:**
- Instant preview as you draw/edit
- Rapid prototyping for designers
- Lower barrier for beginners

**Prompt Enhancement:**
- "Prompt Enhance" button rewrites simple prompts
- "Edit with AI" for targeted modifications
- Example: "add dramatic lighting" → AI expands the prompt

### Ideogram

**Known For:** Best text rendering in AI images

**Key UX Elements:**
- **Style presets** as visual buttons (not dropdowns)
- **Magic Prompt** enhancement toggle
- **Describe feature** - Upload image → Get prompt
- Clean, minimal interface

**Generation Flow:**
1. Type prompt
2. Select style (Design, Realistic, 3D, Anime)
3. Choose aspect ratio (visual preview)
4. Generate → 4 variations
5. Regenerate or refine individual results

### Playground AI

**Philosophy:** Simplicity + Free tier

**Interface:**
- Single-page app feel
- Left sidebar: History/Gallery
- Center: Canvas/Results
- Right: Parameters panel

**What Makes It Simple:**
- Minimal parameters exposed by default
- "Enhance" checkbox for auto-prompt improvement
- Template library for beginners
- One-click "Make public" for sharing

### Krea.ai

**Revolutionary Feature:** Real-time generation

**How Real-time Works:**
- Draw/sketch in canvas
- AI generates **live** as you draw
- ~1 second latency
- Infinite iteration without "generate" button

**UX Innovation:**
```
Traditional: Draw → Click Generate → Wait → See Result
Krea: Draw ←→ See Result (continuous loop)
```

**Other Features:**
- 1000+ styles preset library
- 4K native generation
- Lipsync (video)
- Full-fledged asset manager

---

## Key UX Patterns {#key-ux-patterns}

### 1. Prompt Input Patterns

#### Prompt Augmentation Design Patterns (UX Tigers Research)

| Pattern | Description | Best For |
|---------|-------------|----------|
| **Style Galleries** | Visual grid of style options | Image generation |
| **Prompt Rewrite** | AI enhances user's basic prompt | All users |
| **Targeted Prompt Rewrite** | User specifies direction ("add lighting") | Intermediate users |
| **Related Prompts** | Suggested follow-up prompts | Discovery |
| **Prompt Builders** | Dropdown menus to construct prompts | Beginners |
| **Parametrization** | Sliders for dimensions (style, realism, etc.) | Fine control |

**Implementation Priority:**
1. ✅ Style Galleries (visual, low friction)
2. ✅ Prompt Rewrite ("Enhance" button)
3. ✅ Parametrization (sliders for key dimensions)
4. 🔜 Prompt Builders (optional advanced mode)

#### Prompt Input UX Best Practices

```
✅ Multiline text area (not single-line input)
✅ Character/token counter
✅ Prompt history dropdown (recent prompts)
✅ Template/preset selector
✅ "Enhance" or "Improve" button
✅ Negative prompt support (separate field or toggle)
✅ Keyboard shortcut (Cmd/Ctrl + Enter to generate)
```

### 2. Generation Progress/Loading States

**Good Loading UX:**
- Show estimated time remaining
- Display model name being used
- Progress bar or percentage
- Allow cancellation
- Queue position (if applicable)

**Great Loading UX (Krea approach):**
- Real-time preview as generation progresses
- Blur-to-sharp reveal animation
- Skeleton placeholder showing expected dimensions

**Avoid:**
- Static spinners with no information
- Blocking the entire UI
- No way to cancel

### 3. Gallery/History Browsing

**Essential Features:**
- Grid view with responsive thumbnails
- Filter by: date, model, style, favorites
- Search by prompt text
- Bulk select for download/delete
- Persistent storage (local + optional cloud)

**Advanced Features:**
- Collections/Albums
- Tags (manual + auto-generated)
- Duplicate detection
- Usage analytics (credits/cost per image)

**Layout Patterns:**
```
Option A: Pinterest-style masonry grid (Midjourney)
Option B: Fixed-size grid with aspect ratio preservation (Playground)
Option C: List view with metadata (for power users)
```

### 4. Settings and Preferences

**Two-Level Settings:**

**Quick Settings (Always Visible):**
- Model selector
- Aspect ratio
- Quality/speed toggle
- Style preset

**Advanced Settings (Collapsed/Panel):**
- Sampling steps
- CFG scale
- Seed
- Negative prompts
- Custom model selection

**User Preferences (Persistent):**
- Default model
- Default aspect ratio
- Theme (light/dark)
- Keyboard shortcut customization
- Notification preferences

### 5. API Key Management (BYOK-Specific)

**Setup Flow:**
```
1. Settings → API Keys
2. Select provider (OpenAI, Replicate, Stability, etc.)
3. Paste key
4. [Test Connection] button → ✅ Success / ❌ Invalid
5. Save
```

**Security UX Patterns:**

| Feature | Implementation |
|---------|----------------|
| Show/Hide toggle | Eye icon, default hidden (bullets) |
| Copy protection | Disable copy when visible |
| Local storage | Encrypted in browser/keychain |
| Test connection | Validate before saving |
| Clear indication | "Keys stored locally only" badge |
| Easy revocation | One-click delete with confirmation |

**Multi-Provider Support:**
- Separate fields per provider
- Visual status indicator (connected/not connected)
- Fallback configuration (if primary fails)
- Usage tracking per provider

### 6. Error Handling and Messaging

**Error Categories:**

1. **API Key Errors**
   - Invalid key → "This API key appears to be invalid. Please check and try again."
   - Rate limited → "You've hit your API rate limit. Try again in X minutes."
   - Insufficient credits → "Your API account has insufficient credits. [Add credits →]"

2. **Generation Errors**
   - Content filtered → "This prompt was blocked. Try rephrasing."
   - Timeout → "Generation timed out. [Retry] or [Try different model]"
   - Server error → "Something went wrong on [Provider]'s end. [Retry]"

3. **Network Errors**
   - Offline → "No internet connection. Your work is saved locally."
   - Connection lost → Auto-retry with exponential backoff

**Error UX Best Practices:**
```
✅ Clear, human-readable messages
✅ Suggested action (what to do next)
✅ Link to relevant docs/help
✅ Don't lose user's work (preserve prompt)
✅ Copy error details for support
✅ Distinguish user errors from system errors
```

---

## Recommendations for Our Tool {#recommendations}

### Priority 1: Core Experience

#### 1.1 BYOK Setup (TypingMind-inspired)
- Local-first key storage with explicit messaging
- Provider selector with logos
- One-click test connection
- Link to "How to get your API key" docs

#### 1.2 Prompt Interface
- Large, multi-line textarea
- "Enhance Prompt" button (uses AI to expand)
- Style gallery with visual previews
- Negative prompt toggle (hidden by default)
- Recent prompts dropdown

#### 1.3 Generation Flow
- Progress indicator with estimated time
- Real-time preview if feasible (Krea-style)
- Cancel button always available
- Clear cost/credit indicator before generation

### Priority 2: Gallery & History

- Masonry grid layout (Pinterest-style)
- Prompt search
- Filter by date, model, favorites
- One-click re-use prompt
- Bulk download (ZIP)
- Local storage with optional cloud sync

### Priority 3: Advanced Features

- Canvas editor for inpainting/outpainting (Leonardo-style)
- Sketch-to-image mode
- Image-to-image variations
- Batch generation with progress queue

### Design System Recommendations

**Theme:**
- Default dark mode (creative tools convention)
- Light mode option
- High contrast for accessibility

**Layout:**
```
┌─────────────────────────────────────────────────┐
│ Header: Model Selector | Settings | Account    │
├──────────┬──────────────────────────────────────┤
│          │                                      │
│ History  │         Canvas / Results             │
│ & Styles │                                      │
│          │                                      │
├──────────┴──────────────────────────────────────┤
│ Prompt Input | Parameters | [Generate]          │
└─────────────────────────────────────────────────┘
```

**Component Library:**
- shadcn/ui for consistency
- Tabler Icons for visual elements
- Accessible color palette (WCAG 2.1 AA)

---

## Appendix: Competitor Feature Matrix

| Feature | TypingMind | Leonardo | Midjourney | Playground | Krea | **Our Tool** |
|---------|------------|----------|------------|------------|------|--------------|
| BYOK Support | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Local Key Storage | ✅ | N/A | N/A | N/A | N/A | ✅ |
| Prompt Enhancement | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Style Gallery | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Real-time Preview | ❌ | ✅ | ❌ | ❌ | ✅ | 🔜 |
| Canvas Editor | ❌ | ✅ | ❌ | ❌ | ✅ | 🔜 |
| Image History | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Multi-Provider | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Cost Transparency | ✅ | ⚠️ | ⚠️ | ✅ | ⚠️ | ✅ |

---

## Sources

1. TypingMind Documentation - https://docs.typingmind.com
2. BYOK Tools Guide (Rilna) - https://www.rilna.net/blog/bring-your-own-api-key-byok-tools-guide-examples
3. Prompt Augmentation UX Patterns (UX Tigers) - https://www.uxtigers.com/post/prompt-augmentation
4. Leonardo.ai Canvas 2.0 - https://intercom.help/leonardo-ai/en/articles/8092594-canvas-2-0
5. AI Design Tools Review (Merge) - https://merge.rocks/blog/top-ai-design-tools-for-ux-ui-designers-in-2025
6. Krea.ai Official Site - https://www.krea.ai

---

*Research compiled by UX Research Agent | Last updated: 2026-02-05*
