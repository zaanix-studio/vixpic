# VixPic Typography Research

> **Context**: VixPic is a BYOK AI image generator that needs to feel modern, technical but approachable, and premium.

---

## What Competitors Use (and Why)

| Company | Primary Font | Style | Why It Works |
|---------|-------------|-------|--------------|
| **Linear** | Inter | Clean, neutral sans-serif | High x-height for screen readability, professional yet approachable |
| **Vercel** | Geist Sans | Sharp, technical | Custom-designed for developers, variable font, modern feel |
| **Raycast** | Inter | Functional, clear | Pairs well with monospace for technical content |
| **Supabase** | Inter / System fonts | Developer-first | Performance-focused, familiar to dev community |
| **Notion** | Inter (website) / System | Minimal, flexible | Lets content shine, doesn't distract |
| **TypingMind** | Inter | Functional, readable | Focus on usability over branding |

### Key Insight
The dev tool space is dominated by **Inter** because it was literally designed for computer screens. It's the "safe choice" that never looks bad. For differentiation while staying in the same aesthetic family, consider **Geist**, **Space Grotesk**, or **Manrope**.

---

## 3 Font Pairing Recommendations

### 1. **Geist Sans + Inter** (Premium Technical)
*Best for: Standing out from the Inter crowd while staying developer-friendly*

| Element | Font | Weight | Why |
|---------|------|--------|-----|
| Headings | Geist Sans | 600-700 | Sharp, modern, Vercel-esque premium feel |
| Body | Inter | 400-500 | Proven readability, developer familiarity |
| Code/Mono | Geist Mono | 400 | Consistent family, built-in ligatures |

**Google Fonts**: Geist is open source but not on Google Fonts. Use via npm or self-host.
- Geist: https://vercel.com/font (SIL Open Font License)
- Inter: https://fonts.google.com/specimen/Inter

```css
/* Variable font loading */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

/* Geist requires npm install or self-hosting */
```

---

### 2. **Space Grotesk + DM Sans** (Distinctive Modern)
*Best for: More personality, creative/design-forward positioning*

| Element | Font | Weight | Why |
|---------|------|--------|-----|
| Headings | Space Grotesk | 500-700 | Distinctive geometric shapes, techy vibe |
| Body | DM Sans | 400-500 | Friendly, low-contrast, excellent readability |
| Code/Mono | Space Mono | 400 | Same family as Space Grotesk |

**Both on Google Fonts** ✅
- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk
- DM Sans: https://fonts.google.com/specimen/DM+Sans
- Space Mono: https://fonts.google.com/specimen/Space+Mono

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
```

---

### 3. **Manrope + Inter** (Clean Premium)
*Best for: Balancing uniqueness with safety, tech startup feel*

| Element | Font | Weight | Why |
|---------|------|--------|-----|
| Headings | Manrope | 600-800 | Geometric, modern, slightly more character than Inter |
| Body | Inter | 400-500 | Can't beat it for long-form readability |
| Code/Mono | JetBrains Mono | 400 | Best-in-class for code, developer favorite |

**All on Google Fonts** ✅
- Manrope: https://fonts.google.com/specimen/Manrope
- Inter: https://fonts.google.com/specimen/Inter
- JetBrains Mono: https://fonts.google.com/specimen/JetBrains+Mono

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Manrope:wght@200..800&display=swap');
```

---

## Type Scale (Recommended)

Based on a **1.25 ratio** (Major Third) - balanced for landing pages with dense content.

### Desktop (1024px+)

| Element | Size | Line Height | Letter Spacing | Weight |
|---------|------|-------------|----------------|--------|
| **H1** (Hero) | 56-72px / 3.5-4.5rem | 1.1 | -0.02em | 700 |
| **H2** (Section) | 40-48px / 2.5-3rem | 1.15 | -0.015em | 600-700 |
| **H3** (Subsection) | 28-32px / 1.75-2rem | 1.2 | -0.01em | 600 |
| **H4** (Card title) | 20-24px / 1.25-1.5rem | 1.3 | 0 | 600 |
| **Body** | 16-18px / 1-1.125rem | 1.6-1.7 | 0 | 400 |
| **Body Large** | 18-20px / 1.125-1.25rem | 1.5-1.6 | 0 | 400-500 |
| **Small/Caption** | 13-14px / 0.8125-0.875rem | 1.4 | 0.01em | 400-500 |
| **Tiny/Label** | 11-12px / 0.6875-0.75rem | 1.3 | 0.02em | 500 |

### Mobile (< 768px)

| Element | Size | Line Height | Letter Spacing |
|---------|------|-------------|----------------|
| **H1** (Hero) | 32-40px / 2-2.5rem | 1.15 | -0.01em |
| **H2** (Section) | 28-32px / 1.75-2rem | 1.2 | -0.01em |
| **H3** (Subsection) | 22-24px / 1.375-1.5rem | 1.25 | 0 |
| **H4** (Card title) | 18-20px / 1.125-1.25rem | 1.3 | 0 |
| **Body** | 16px / 1rem | 1.6 | 0 |
| **Small** | 14px / 0.875rem | 1.5 | 0.01em |

### CSS Implementation

```css
:root {
  /* Type scale using clamp for fluid typography */
  --text-xs: clamp(0.6875rem, 0.65rem + 0.1vw, 0.75rem);
  --text-sm: clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem);
  --text-base: clamp(1rem, 0.95rem + 0.2vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 0.8vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.2vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 1.6vw, 3rem);
  --text-5xl: clamp(2.5rem, 2rem + 2vw, 4rem);
  --text-6xl: clamp(3rem, 2.25rem + 2.5vw, 4.5rem);
  
  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.15;
  --leading-snug: 1.3;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 1.75;
  
  /* Letter spacing */
  --tracking-tighter: -0.02em;
  --tracking-tight: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.01em;
  --tracking-wider: 0.02em;
}
```

---

## Line Height & Letter Spacing Guidelines

### Line Height Rules

| Text Type | Line Height | Why |
|-----------|-------------|-----|
| Hero headings | 1.0-1.15 | Large text needs tighter leading to feel cohesive |
| Section headings | 1.15-1.25 | Balanced, allows for 2-line headings |
| Body text (long form) | 1.6-1.75 | Optimal reading comfort |
| UI text (short) | 1.3-1.5 | Tighter for buttons, labels, nav |
| Captions/small | 1.4-1.5 | Small text needs slightly more air |

### Letter Spacing Rules

| Text Type | Letter Spacing | Why |
|-----------|----------------|-----|
| Large headings (>32px) | -0.01em to -0.02em | Negative tracking for optical balance |
| Medium headings (20-32px) | -0.005em to -0.01em | Slight tightening |
| Body text | 0 (default) | Natural spacing is optimal |
| All caps text | 0.05em to 0.1em | ALWAYS add tracking to caps |
| Small text (<14px) | 0.01em to 0.02em | Open up for readability |

---

## Variable Fonts for Performance

### Why Variable Fonts?

- **Single file** instead of multiple weight files
- **Smaller total size** for multiple weights
- **Smooth weight transitions** for hover states
- **Better caching** - one request, all weights

### Recommended Variable Fonts (All Free)

| Font | Axes | Google Fonts |
|------|------|--------------|
| Inter | wght (100-900), ital | ✅ Yes |
| Manrope | wght (200-800) | ✅ Yes |
| DM Sans | wght (100-1000), ital, opsz | ✅ Yes |
| Space Grotesk | wght (300-700) | ✅ Yes |
| Plus Jakarta Sans | wght (200-800), ital | ✅ Yes |
| Work Sans | wght (100-900), ital | ✅ Yes |

### Loading Variable Fonts

```css
/* Modern approach with display=swap for performance */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Or via Google Fonts (they auto-serve variable versions) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
```

### Next.js / Vercel Optimization

```javascript
// app/layout.tsx
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})
```

---

## Final Recommendation for VixPic

Given VixPic's positioning as:
- **BYOK AI image generator** (technical)
- **Modern, premium** (design-forward)
- **Approachable** (not intimidating)

### 🏆 Recommended: **Space Grotesk + DM Sans**

**Why:**
1. **Space Grotesk** for headings gives distinctive character that stands out from the sea of Inter
2. **DM Sans** for body is friendly and highly readable without being boring
3. **Space Mono** completes the family for code/API examples
4. **All free on Google Fonts** - no licensing concerns
5. **All variable fonts** - great performance
6. **Differentiated from competitors** - Linear, Vercel, Raycast all use Inter-based systems

### Alternative: Geist + Inter
If you want to align more closely with the Vercel ecosystem aesthetic (since many BYOK users are likely developers familiar with Next.js/Vercel), the Geist + Inter combo is more "expected" but equally premium.

---

## Quick Reference Card

```
HEADINGS:    Space Grotesk 600-700 | -0.01em tracking | 1.1-1.2 line-height
BODY:        DM Sans 400 | 0 tracking | 1.6 line-height  
CODE:        Space Mono 400 | 0 tracking | 1.5 line-height
BUTTONS:     DM Sans 500-600 | 0.01em tracking | 1.3 line-height
SMALL TEXT:  DM Sans 400-500 | 0.01em tracking | 1.4 line-height

Mobile: Reduce heading sizes by ~20-30%, keep body at 16px minimum
```
