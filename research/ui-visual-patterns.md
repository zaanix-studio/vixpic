# UI Visual Patterns Research: VixPic Landing Page

> Research compiled February 2026  
> Target: BYOK AI image generator for developers and creators

---

## Current Design Trends for Dev Tools (2025-2026)

### ✅ What's IN

| Trend | Examples | Why It Works |
|-------|----------|--------------|
| **Product-led storytelling** | Linear, Raycast, Vercel | Show the product working, not abstract concepts |
| **Dark mode dominance** | Linear, Raycast, Vercel | Signals "built for developers," reduces eye strain |
| **Conversion-focused minimalism** | Clerk, Ramp | One CTA, reduced navigation, zero clutter |
| **Subtle glassmorphism** | Raycast, Framer | Frosted glass effects on cards/modals (not heavy) |
| **Gradient accents** (not full backgrounds) | Vercel, Supabase | Purple→blue or cyan→teal on specific elements |
| **Playful but professional** | Firecrawl, Liveblocks | Personality without sacrificing credibility |
| **Real screenshots over illustrations** | Linear, Clerk | Actual UI builds trust, shows real value |
| **Split-screen layouts** | V7 Labs, Ramp | Text + visual side-by-side, great for features |
| **Component-based modular systems** | All top sites | Reusable blocks for fast iteration |
| **Expressive typography** | Linear, Antimetal | Bold serifs for headlines, clean sans for body |

### ❌ What's OUT

| Outdated | Why |
|----------|-----|
| Heavy 3D illustrations | Feels 2021, resource-heavy, generic |
| Abstract blob shapes | Overused, says nothing about product |
| Full glassmorphism everywhere | Overdone, looks dated if heavy-handed |
| Neon gradients (hot pink/orange) | Too aggressive, feels crypto/gaming |
| Generic stock photos | Kills trust, screams "template" |
| Busy navigation with 10+ links | Increases bounce rate |
| Multiple competing CTAs | Decision fatigue = lower conversion |
| Text-heavy hero sections | Users don't read, they scan |

---

## Button Style Recommendations

### Primary CTA Buttons

```
Style: Solid fill with subtle gradient or hover effect
Shape: Pill/rounded-full (border-radius: 9999px) OR soft-rounded (8-12px)
Colors: 
  - Primary: White text on brand color (purple/blue gradient)
  - Hover: Slight luminosity increase + scale(1.02)
```

**Current trends from top sites:**

| Site | Button Style | Shape | Effect |
|------|-------------|-------|--------|
| Linear | Solid purple gradient | Pill (full round) | Subtle glow on hover |
| Raycast | White/light solid | Soft rounded (8px) | Background shift |
| Vercel | White text, black fill | Pill | None (minimal) |
| Supabase | Green gradient | Pill | Hover brighten |
| Framer | Black/dark fill | Soft rounded | Scale + shadow |

### Recommended for VixPic

```css
/* Primary CTA */
.btn-primary {
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
  color: white;
  border-radius: 9999px; /* Pill */
  padding: 12px 28px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 0 24px rgba(124, 58, 237, 0.4);
}

/* Secondary/Ghost */
.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  border-radius: 9999px;
}
.btn-secondary:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.3);
}
```

**Key insight:** Developer tools favor **pill buttons** for primary CTAs and **ghost/outline buttons** for secondary actions. Avoid sharp corners (feels corporate/enterprise).

---

## Card/Component Patterns

### Feature Cards

```
Structure:
┌────────────────────────────────┐
│  [Icon/Visual]                 │
│                                │
│  Feature Title                 │
│  Short description (1-2 lines) │
│                                │
│  [Optional: Learn more →]      │
└────────────────────────────────┘

Style:
- Background: rgba(255,255,255,0.03) to 0.06
- Border: 1px solid rgba(255,255,255,0.08)
- Border-radius: 16-24px (soft, not sharp)
- Hover: border-color lightens, subtle glow
- No heavy shadows (feels heavy/dated)
```

### Glassmorphism (Subtle)

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}
```

**When to use glass:**
- Modal overlays
- Feature highlight cards
- Floating UI elements (command palettes)
- NOT: every single card (it loses impact)

### Bento Grid Layout

Extremely popular in 2025-2026 for feature sections:

```
┌─────────────────┬────────────┐
│                 │            │
│   Large Card    │  Medium    │
│   (2x height)   │            │
│                 ├────────────┤
│                 │  Small     │
├────────┬────────┼────────────┤
│ Small  │ Small  │   Medium   │
└────────┴────────┴────────────┘
```

**Examples:** Linear, Raycast, Vercel all use bento-style grids for features.

---

## Spacing/Grid System

### Recommended: 8px Base Grid

```
Spacing scale (Tailwind-compatible):
- 4px   (space-1)  - Tight, within components
- 8px   (space-2)  - Default gap
- 12px  (space-3)  - Small sections
- 16px  (space-4)  - Component padding
- 24px  (space-6)  - Section gaps
- 32px  (space-8)  - Major sections
- 48px  (space-12) - Section breaks
- 64px  (space-16) - Hero padding
- 96px  (space-24) - Large section dividers
- 128px (space-32) - Hero to content gap
```

### Layout Widths

```
Max content width: 1280px (xl) or 1440px
Hero: Full-width with centered content
Features: 1200px max, with padding
Cards: 16-24px gaps in grid
```

### Section Rhythm

```
[Hero]           - 100vh or min-h-[80vh]
    ↓ 80-120px gap
[Social Proof]   - Logo bar, short
    ↓ 60-80px gap  
[Features Bento] - Primary value props
    ↓ 80-120px gap
[How It Works]   - 3-step visual
    ↓ 80-120px gap
[Testimonials]   - 1-2 quotes
    ↓ 80-120px gap
[Pricing/CTA]    - Final conversion
    ↓ 40-60px gap
[Footer]
```

---

## Animation Recommendations

### Philosophy: **Subtle > Bold**

Modern dev tools favor micro-interactions that feel **effortless** rather than showy. Animation should communicate, not decorate.

### ✅ DO Use

| Animation | Where | Duration |
|-----------|-------|----------|
| Fade + slide up | Section reveals on scroll | 400-600ms |
| Scale on hover | Buttons, cards | 150-200ms |
| Opacity transitions | Text/content changes | 200-300ms |
| Subtle parallax | Hero background elements | Slow, 0.05 factor |
| Cursor glow/gradient follow | Hero section (optional) | Real-time |
| Progress indicators | Scroll, loading | Smooth ease |

### ❌ AVOID

- Bouncy/spring animations (feels playful, not professional)
- Heavy parallax (performance hit, dated)
- Auto-playing video everywhere (distracting)
- Confetti/particle explosions (gimmicky)
- Animations that block content reading

### Recommended Easing

```css
/* Standard ease for UI */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* For enter animations */
animation-timing-function: cubic-bezier(0, 0, 0.2, 1);

/* For exit animations */  
animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
```

### Scroll-Triggered Animations

```javascript
// Framer Motion example
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};
```

### Interactive Product Demos

**Major trend:** Embed interactive product previews in the hero. Instead of static screenshots, show:
- Animated UI mockups
- Guided product tours
- Real-time demos users can interact with

---

## Hero Visual Strategies

### What to Show in the Hero

For VixPic (AI image generator), the hero should communicate:
1. **What it does** - AI image generation
2. **The "aha" moment** - Beautiful output from simple input
3. **Trust signal** - "Bring Your Own Key" = control + privacy

### Hero Visual Options (Ranked by Effectiveness)

#### 1. **Product Interface Screenshot** ⭐ Best
Show the actual VixPic UI with a generated image:
```
┌─────────────────────────────────────────┐
│  "Create stunning AI art"               │
│  Your API keys. Your images. No limits. │
│                                         │
│  [Get Started Free]  [View Examples]    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Prompt input field]           │    │
│  │  ─────────────────────────────  │    │
│  │       Generated Image           │    │
│  │       (beautiful result)        │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

#### 2. **Before/After or Input→Output**
Show the transformation:
- Left: Simple text prompt
- Right: Stunning generated image
- Animation: Subtle typewriter effect on prompt, image fades in

#### 3. **Gallery Grid**
Show 4-6 AI-generated images in a grid to demonstrate variety and quality.

#### 4. **Video Loop (Short)**
5-10 second silent loop showing:
- User typing prompt
- Image generating
- Result appearing

### Background Treatment

```css
/* Dark gradient background */
.hero-bg {
  background: linear-gradient(
    180deg,
    #0a0a0f 0%,
    #12121a 50%,
    #0a0a0f 100%
  );
}

/* Optional: Subtle grid pattern */
.hero-grid {
  background-image: 
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 64px 64px;
}

/* Optional: Gradient orb accent */
.gradient-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(124, 58, 237, 0.15) 0%,
    transparent 70%
  );
  filter: blur(80px);
}
```

---

## Color Palette Recommendations

### For VixPic (Dev-Focused AI Tool)

```css
:root {
  /* Background */
  --bg-primary: #0a0a0f;      /* Near black */
  --bg-secondary: #12121a;    /* Elevated surfaces */
  --bg-card: rgba(255,255,255,0.03);
  
  /* Text */
  --text-primary: #fafafa;    /* White */
  --text-secondary: #a1a1aa;  /* Muted */
  --text-tertiary: #71717a;   /* Very muted */
  
  /* Brand/Accent */
  --accent-primary: #7c3aed;  /* Purple */
  --accent-secondary: #4f46e5; /* Indigo */
  --accent-gradient: linear-gradient(135deg, #7c3aed, #4f46e5);
  
  /* Semantic */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  
  /* Borders */
  --border-subtle: rgba(255,255,255,0.08);
  --border-hover: rgba(255,255,255,0.15);
}
```

### Why Purple/Indigo?

- Linear, Raycast, many AI tools use this palette
- Signals innovation, creativity, AI
- Works great on dark backgrounds
- Not overused like blue (Vercel) or green (Supabase)

---

## Typography Recommendations

### Font Pairings

**Option 1: Modern Sans (Safe)**
- Headlines: Inter (weight 600-700)
- Body: Inter (weight 400-500)
- Code: JetBrains Mono

**Option 2: Geometric (Trendy)**
- Headlines: Satoshi or General Sans (600-700)
- Body: Inter or DM Sans
- Code: Fira Code

**Option 3: Editorial (Bold)**
- Headlines: Cabinet Grotesk or Clash Display
- Body: Inter
- Code: Berkeley Mono

### Type Scale

```css
/* Based on 16px base, 1.25 ratio */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px - Hero headline */
```

---

## Summary: VixPic Design Direction

### The Look

| Element | Recommendation |
|---------|----------------|
| Mode | Dark mode primary |
| Feel | Clean, professional, slightly playful |
| Inspiration | Linear + Raycast + Clerk |
| Complexity | Minimal - let the product shine |

### Key Decisions

1. **Hero:** Product screenshot showing real generated image
2. **Buttons:** Pill-shaped, purple gradient primary
3. **Cards:** Subtle glass, 20px radius, dark with borders
4. **Grid:** 8px base, max-width 1280px
5. **Animations:** Fade-up on scroll, hover scale, subtle
6. **Typography:** Inter or Satoshi, bold headlines
7. **Colors:** Dark bg, purple/indigo accents

### Reference Sites to Study

1. **linear.app** - Gold standard for dev tools
2. **raycast.com** - Keyboard/productivity aesthetic
3. **clerk.com** - Clean developer marketing
4. **liveblocks.io** - Beautiful collaborative tool UI
5. **firecrawl.dev** - Developer tool with personality

---

*Last updated: 2026-02-07*
