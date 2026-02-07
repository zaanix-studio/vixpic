# BYOK AI Image Tool - Feature Research

*Research Date: February 5, 2026*

---

## Part 1: Canvas Features Research

### Leonardo.ai Canvas

**Core Canvas Features:**
- **Infinite Canvas**: Large workspace for arranging multiple generations
- **Masking System**: Draw masks to select specific areas for editing
- **Inpaint/Outpaint Modes**: Toggle between editing inside vs expanding outside image
- **Generation Box**: Highlight specific areas to regenerate
- **Lock System**: Lock/unlock areas to prevent accidental editing

**Multi-Image Workflows:**
- Place multiple images on canvas
- Create consistent faces across images using reference + inpainting
- Selective upscaling with masks (different upscale for different areas)
- Model selection per generation (Dreamshaper v7 for artistic, Absolute Reality for photos)

**Key UX Elements:**
- Right-hand toolbar for mode selection
- Strength slider for inpaint (lower = closer to original)
- Canvas Mode dropdown (Inpaint/Outpaint vs other modes)
- Layer tools + brushes for real-time tweaking

---

### Krea.ai Real-Time Canvas

**Revolutionary Feature: Real-Time Generation**
- **Split View**: Sketch on left → See AI result on right instantly
- **Canvas Mode**: Direct image-based generation (not just text prompts)
- **Live Collaboration**: Teams can edit same canvas globally (<1 second sync)

**Canvas Tools:**
- Select and Move for positioning
- Shapes (square, circle, triangle) for overlaying geometric elements
- Drawing tablet optimized for sketch-to-image workflows

**Unique Capabilities:**
- 22K resolution upscaling
- Pattern generation built-in
- Real-time updates as you draw or adjust prompts
- More "design tool" feel vs text-only prompt systems

---

### Ideogram Canvas

**Core Features (Released October 2024):**
- **Infinite Creative Board**: Organize, generate, and edit images
- **Magic Fill (Inpainting)**: Modify parts while keeping rest intact
- **Extend (Outpainting)**: Expand images beyond original boundaries
- **Batch Generator**: Upload spreadsheet with prompts for bulk generation

**Canvas Tools Panel (Left Side):**
- Generate: Create images from text prompts
- Magic Fill: Inpainting tool
- Extend: Outpainting tool
- Upload: Add your own images

**Key Differentiators:**
- Industry-leading text rendering in images
- Character creator for consistent characters across scenes
- Remix feature (image-to-image)
- Basic layer management

---

### Photopea/Photoshop Layered Editing Concepts

**Layer System (Industry Standard):**
- **Layer Stack**: Layers render bottom-to-top
- **Layer Masks**: Non-destructive hiding (white = visible, black = hidden)
- **Vector Masks**: Sharp-edged shapes via paths
- **Blend Modes**: Control how layers interact
- **Clipping Masks**: Layer above uses transparency of layer below

**Key Concepts for AI Tools:**
- **Non-Destructive Editing**: Never delete pixels, use masks instead
- **Smart Objects**: Containers that preserve source data
- **Adjustment Layers**: Apply effects without modifying pixels
- **History Panel**: Visual undo/redo with state painting

**Photopea AI Features:**
- Background removal
- AI-assisted selections
- Content-aware tools
- Image generation (recent addition)

---

### ComfyUI Node-Based Workflows

**Core Architecture:**
- **Nodes**: Boxes representing operations (model loading, text encoding, sampling)
- **Connections**: Define data flow between nodes
- **Workflow**: Graphical interface showing entire AI generation pipeline

**Key Node Types:**
- **KSampler**: Heart of generation (accepts latent, prompts, parameters)
- **EmptySD3LatentImage**: Creates image container (batch size setting)
- **CLIP Text Encode**: Converts prompts to model-understandable format
- **Model Loader**: Loads checkpoints and LoRAs

**Workflow Concepts:**
- Full visibility and control over generation pipeline
- Branch, remix, and adjust any part
- Supports multiple models in one graph
- Workflow saved in PNG metadata (drag to load)
- Batch processing native support

---

## Undo/Redo & Version Systems

### Best Practices from Research:

**Stack-Based History:**
- Linear undo/redo stack (Ctrl+Z / Ctrl+Shift+Z)
- New actions clear redo history
- Optional branching history for complex edits

**State Management Approaches:**
- **Full State Snapshots**: Simple but memory-intensive
- **Delta/Diff System**: Store only changes (like version control)
- **Action-Based**: Store operation + inverse operation

**Recommended for AI Tool:**
- Generation history with thumbnails
- Ability to "fork" from any point
- Compare mode (before/after slider)
- Export/import history as JSON

---

## Part 2: Free Tools That Hook Users

### 1. Background Removal (PRIMARY HOOK)

**Why It Works:**
- Immediate, tangible value
- Everyone needs it (product photos, profile pics, memes)
- Low compute cost, high perceived value
- Used by: Erase.bg, Pixelcut, PhotoRoom, remove.bg

**Implementation:**
- Free: 5-10 images/day, standard resolution
- Paid: Unlimited, HD output, batch processing

### 2. Image Upscaling

**Why It Works:**
- Rescues low-quality images
- Essential for AI-generated images (often 1024x1024)
- Visible before/after improvement

**Tools Reference:**
- Upscale.media: Free up to 8x
- Krea.ai: Up to 22K resolution (paid)
- Leonardo.ai: 4K upscaling (locked behind "Boosts" currency)

**Implementation:**
- Free: 2x upscale, watermark
- Paid: 4x-8x, no watermark, batch

### 3. Prompt Enhancement

**Why It Works:**
- Makes beginners successful immediately
- Adds "magic" to basic prompts
- Shows expertise (builds trust)

**Reference Tools:**
- PromptPerfect
- Flexos Prompt Enhancer
- Magai Image Prompt Enhancer

**Implementation:**
- Free: Basic enhancement
- Paid: Style-specific, model-optimized

### 4. Quick Filters/Adjustments

**Why It Works:**
- Instagram-style instant gratification
- Non-AI features reduce compute costs
- Upsell path to AI editing

**Features:**
- Brightness/contrast/saturation
- Preset filters (vintage, cinematic, etc.)
- Crop/rotate/flip
- Color correction

### 5. Format Conversion

**Why It Works:**
- Universal need (PNG→JPG, WEBP→PNG)
- Zero compute cost
- SEO traffic magnet

**Implementation:**
- Free: All conversions
- Upsell: Batch conversion, quality settings

---

## Part 3: Feature Priority Matrix

### MVP (Launch Essential)

| Feature | Effort | Impact | Notes |
|---------|--------|--------|-------|
| BYOK API Key Input | Low | Critical | Core differentiator |
| Basic Prompt Interface | Low | Critical | Text-to-image generation |
| Model Selection | Low | High | OpenRouter, Replicate, fal.ai |
| Generation History | Medium | High | With thumbnails, re-use |
| Background Removal | Low | Very High | **FREE HOOK** - Drives signups |
| Image Download | Low | Critical | PNG, JPG export |
| Basic Image Preview | Low | Critical | View generated images |
| Cost Display | Medium | High | Show API cost per generation |

### V1.1 (Month 2-3)

| Feature | Effort | Impact | Notes |
|---------|--------|--------|-------|
| Image Upscaling | Medium | High | Free tier hook |
| Prompt Enhancement | Low | High | GPT-powered prompt improvement |
| Image-to-Image | Medium | High | Use image as reference |
| Negative Prompts | Low | Medium | Better control |
| Aspect Ratio Presets | Low | Medium | Portrait, landscape, square |
| Format Conversion | Low | Medium | Free utility |
| Batch Generation | Medium | High | Multiple prompts at once |
| Generation Presets | Low | Medium | Save prompt templates |

### V2 (Month 4-6)

| Feature | Effort | Impact | Notes |
|---------|--------|--------|-------|
| Canvas Editor | High | Very High | Multi-image workspace |
| Inpainting | High | Very High | Edit specific areas |
| Outpainting | High | High | Extend images |
| Layer Management | High | High | Non-destructive editing |
| Mask Tools | High | High | Brush-based selection |
| Real-time Preview | Very High | High | Krea-style live generation |
| Workflow Builder | Very High | Medium | ComfyUI-lite |
| Team Collaboration | High | Medium | Shared workspaces |

### Competitor Paid Tier Features (What They Gate)

| Feature | Leonardo | Krea | Ideogram | Midjourney |
|---------|----------|------|----------|------------|
| High-res upscale | Boosts (paid currency) | Pro tier | Free tier limited | Paid only |
| No watermark | Free has none | Pro tier | Free has none | Paid only |
| Priority queue | Premium | Pro | Paid tiers | Paid tiers |
| Batch processing | Limited free | Pro | Paid | Paid |
| Commercial rights | Paid tiers | Pro | Paid tiers | Paid tiers |
| Canvas/Editor | Free (limited) | Pro features | Free | Not available |
| API Access | Paid | Pro | Paid | None |

### Low-Effort, High-Impact Features

1. **Background Removal** - Open source models (rembg), massive user hook
2. **Prompt Enhancement** - One LLM call, huge UX improvement
3. **Aspect Ratio Presets** - Simple dropdown, prevents user confusion
4. **Cost Calculator** - Just math, builds trust
5. **Generation History** - Local storage, high retention value
6. **Quick Filters** - CSS/Canvas filters, zero compute
7. **Format Converter** - Browser-native, SEO traffic

---

## Part 4: Workflow Builder Concepts

### ComfyUI Simplified

**What Makes ComfyUI Powerful:**
- Visual representation of entire pipeline
- Branching and conditional logic
- Mix multiple models/LoRAs
- Full parameter control at every step

**Simplification Approach:**
- **Pre-built Modules**: One node = one complete task
  - "Generate Portrait" module (combines model + prompting + sampling)
  - "Upscale 2x" module
  - "Remove Background" module
- **Connect modules with simple pipes**
- **Hide complexity by default, expand for power users**

**Reference: SwarmUI**
- ComfyUI backend with simplified GUI
- Great for text-to-image without node complexity
- Power of ComfyUI, simplicity of traditional UI

### Zapier-Style Automation

**Workflow Patterns:**
```
Trigger → Process → Output

Examples:
1. "Generate from spreadsheet"
   CSV Upload → For Each Row → Generate Image → Save to Folder

2. "Social media batch"
   Prompt Template → 4 Aspect Ratios → Generate All → Zip Download

3. "Product photo pipeline"
   Upload Photo → Remove BG → Add New BG → Upscale → Export
```

**Key UX Elements:**
- Drag-and-drop steps
- Clear input/output connections
- Test with sample data
- Save as reusable "recipe"

### Batch Processing UI

**Interface Concepts:**

**1. Spreadsheet Mode**
```
| Prompt | Style | Size | Model | Status |
|--------|-------|------|-------|--------|
| A cat  | Photo | 1:1  | SDXL  | ✓ Done |
| A dog  | Art   | 16:9 | Flux  | Running|
```

**2. Queue Mode**
- Add jobs to queue
- Progress bar per job
- Pause/resume/cancel
- Priority ordering

**3. Template + Variables Mode**
```
Template: "A {animal} in a {setting}, {style} style"
Variables:
  animal: [cat, dog, bird]
  setting: [forest, city, beach]
  style: [realistic, cartoon]
  
→ Generates 18 combinations
```

### Recommended Workflow Builder Approach

**Phase 1: Simple Batch**
- CSV/spreadsheet upload
- Variable substitution in prompts
- Basic queue with progress

**Phase 2: Visual Recipes**
- Pre-built workflow blocks (like Shortcuts app)
- Connect blocks: Input → Process → Output
- Save and share recipes

**Phase 3: Full Node Editor (Optional)**
- ComfyUI-lite for power users
- Import/export to real ComfyUI
- Community workflow marketplace

---

## Competitive Positioning Summary

### Our BYOK Advantage

| Competitor Problem | Our Solution |
|-------------------|--------------|
| $20-60/month subscriptions | Pay only for what you generate |
| Vendor lock-in | Use any API provider |
| Credit systems confusing | Direct API cost transparency |
| Features gated behind tiers | Core features free, scale as needed |

### Recommended Launch Strategy

1. **Free Hooks** (no API key needed):
   - Background removal
   - Format conversion
   - Quick filters
   - Prompt enhancement (limited)

2. **BYOK Core** (bring your API key):
   - All generation features
   - Full model access
   - No feature gates
   - Pay-per-use

3. **Premium** (optional subscription):
   - Cloud storage for history
   - Team features
   - Priority support
   - Workflow marketplace access

---

## Key Takeaways

1. **Canvas is table stakes** - Leonardo, Krea, Ideogram all have it
2. **Real-time is the future** - Krea's instant preview is game-changing
3. **Free hooks drive adoption** - Background removal is the #1 hook
4. **Simplify ComfyUI** - Power users want workflows, but not the complexity
5. **Transparency wins** - Show costs, be honest about API pricing
6. **Batch is underserved** - Most tools make batch processing painful

---

*Research compiled from: Leonardo.ai docs, Krea.ai docs, Ideogram docs, ComfyUI wiki, Photopea docs, Reddit discussions, industry reviews*
