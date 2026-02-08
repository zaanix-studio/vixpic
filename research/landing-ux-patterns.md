# Landing Page UX Patterns & Conversion Optimization
## Research for VixPic (BYOK AI Image Generator)

*Research Date: February 2026*
*Target Audience: Developers and Creators*

---

## Executive Summary

Analysis of 5 competitor sites (TypingMind, Msty, BoltAI, Linear, Raycast) combined with industry best practices reveals a consistent pattern for high-converting SaaS landing pages. Key findings:

- **Single-goal focus** outperforms multi-CTA pages (2-3x higher conversion)
- **Above-the-fold completeness** is critical—users should understand value + see CTA without scrolling
- **Social proof placement** immediately after hero increases trust velocity
- **Mobile-first** is mandatory (60%+ traffic is mobile)
- **Page speed** directly correlates with conversion (every 100ms delay = 7% drop)

---

## 1. Recommended Section Order (with Rationale)

### Optimal Flow for VixPic

```
┌─────────────────────────────────────────┐
│  1. HERO SECTION                        │  ← Above the fold
│     - Headline + Value Prop             │
│     - Subheadline (what it does)        │
│     - Primary CTA                       │
│     - Hero Image/Demo Preview           │
└─────────────────────────────────────────┘
│  2. SOCIAL PROOF BAR                    │  ← Trust acceleration
│     - Logo strip OR user count          │
│     - "Used by X developers"            │
└─────────────────────────────────────────┘
│  3. PRODUCT SHOWCASE / HOW IT WORKS     │  ← Show, don't tell
│     - Interactive demo OR screenshots   │
│     - 3-step process visualization      │
└─────────────────────────────────────────┘
│  4. KEY FEATURES + BENEFITS             │  ← Address pain points
│     - 3-6 features with icons           │
│     - Benefits > Features framing       │
└─────────────────────────────────────────┘
│  5. BYOK DIFFERENTIATOR                 │  ← VixPic-specific
│     - "Bring Your Own Keys" explanation │
│     - Cost savings visualization        │
│     - Privacy/control messaging         │
└─────────────────────────────────────────┘
│  6. TESTIMONIALS / CASE STUDIES         │  ← Social proof depth
│     - Developer testimonials            │
│     - Real use cases                    │
└─────────────────────────────────────────┘
│  7. PRICING (if applicable)             │  ← Transparency
│     - Clear tiers OR "Free to start"    │
│     - Comparison table                  │
└─────────────────────────────────────────┘
│  8. FAQ                                 │  ← Objection handling
│     - Address BYOK concerns             │
│     - Technical questions               │
└─────────────────────────────────────────┘
│  9. FINAL CTA                           │  ← Last conversion point
│     - Repeat hero CTA                   │
│     - Urgency element (optional)        │
└─────────────────────────────────────────┘
│  10. FOOTER                             │
│      - Minimal: Links, Legal, Social    │
└─────────────────────────────────────────┘
```

### Rationale by Section

| Section | Why This Position | Competitor Evidence |
|---------|-------------------|---------------------|
| Hero | First impression = 50ms judgment | All 5 competitors lead with strong hero |
| Social Proof Bar | Reduces skepticism before deep dive | Linear, Raycast use logo strips immediately |
| Product Showcase | Visual learners need to "see it work" | Msty, BoltAI show product in action early |
| Features | After seeing product, explain capabilities | Universal pattern across all analyzed sites |
| BYOK Differentiator | Unique selling prop needs dedicated space | N/A (VixPic-specific advantage) |
| Testimonials | Validates claims made above | Msty has extensive testimonial section |
| Pricing | Transparency builds trust; late = qualified traffic | Linear, Raycast defer to separate pages |
| FAQ | Catches fence-sitters with objections | Common pattern in high-converting pages |
| Final CTA | "Lazy scrollers" need bottom CTA | Universal best practice |

---

## 2. Above-the-Fold Requirements

### Must-Have Elements (100% viewport without scrolling)

1. **Clear Headline** (8 words or fewer)
   - Bad: "The Ultimate AI-Powered Image Generation Solution for Modern Creators"
   - Good: "AI Images. Your Keys. Zero Markup."

2. **Subheadline** (1-2 sentences)
   - Explains WHAT it does for WHO
   - Example: "Generate images with GPT-4, Claude, or any model. Pay providers directly, keep full control."

3. **Primary CTA Button**
   - High contrast color (not in brand palette = stands out)
   - Action verb + value: "Start Creating Free" > "Sign Up"
   - Above fold = non-negotiable

4. **Hero Visual**
   - Product screenshot OR demo preview OR generated image showcase
   - Animated > Static (but weigh against page speed)
   - Show the OUTPUT users will get

5. **Trust Signal** (at least one)
   - User count: "Join 5,000+ developers"
   - Logo strip (if you have notable users)
   - GitHub stars (for dev audience)

### Above-the-Fold Anti-Patterns (What to Avoid)

❌ Navigation with 10+ links (causes decision paralysis)
❌ Auto-playing video with sound
❌ Multiple CTAs competing for attention
❌ Dense paragraphs of text
❌ Stock photos of people at computers
❌ "Learn More" as primary CTA (weak)

### Competitor Analysis: Above-the-Fold

| Site | Headline Approach | Visual | CTA |
|------|-------------------|--------|-----|
| **TypingMind** | "LLM Frontend Chat UI" | Product screenshot | "Buy A License" |
| **Msty** | "AI your way. Simple. Powerful. Private." | Product interface | Download CTA |
| **BoltAI** | "Your entire AI stack in one app" | Feature list (text-heavy) | Pricing link |
| **Linear** | "Plan and build products" | Product animation | "Get Started" |
| **Raycast** | "Your shortcut to everything" | Keyboard visualization | "Download" |

**Key Insight:** All successful competitors show product visuals, not abstract graphics.

---

## 3. Mobile vs Desktop Considerations

### Traffic Reality
- **60-70%** of SaaS landing page traffic is mobile
- **BUT** desktop users convert 2-3x higher for dev tools
- Strategy: Optimize mobile for discovery, desktop for conversion

### Mobile-First Design Checklist

#### Layout
- [ ] Single-column layout below 768px
- [ ] Hero headline: 32-40px font size
- [ ] CTA button: Minimum 48px tap target
- [ ] No horizontal scroll ever
- [ ] Thumb-friendly CTA placement (bottom 1/3 of screen)

#### Content
- [ ] Shorter headlines on mobile (7 words max)
- [ ] Collapsible FAQ accordions
- [ ] Lazy-load images below fold
- [ ] Reduce testimonials to carousel
- [ ] Hide comparison tables; show simplified version

#### Performance
- [ ] Target < 3 seconds load time on 3G
- [ ] Total page weight < 2MB
- [ ] Use WebP images with AVIF fallback
- [ ] Critical CSS inlined

### Desktop Enhancements

| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero layout | Stacked (text → image) | Side-by-side |
| Feature grid | 1 column | 3 columns |
| Testimonials | Carousel | Grid of 3-6 |
| Demo | Link to video | Embedded/interactive |
| Pricing table | Simplified cards | Full comparison |
| CTA placement | Sticky bottom bar | Inline with sections |

### Responsive Breakpoints

```css
/* Recommended breakpoints for VixPic */
Mobile:       320px - 639px
Tablet:       640px - 1023px
Desktop:      1024px - 1439px
Large:        1440px+
```

---

## 4. CTA Strategy: Placement, Repetition, and Design

### How Many CTAs?

**Single Goal Rule:** All CTAs should drive to the SAME action.
- Landing pages with 1 CTA goal: 13.5% average conversion
- Landing pages with 2+ CTA goals: 2.5% average conversion

### CTA Placement Map

```
┌────────────────────────────────────────────┐
│ HERO                                       │
│            [Primary CTA] ←──────── #1      │
│                                            │
├────────────────────────────────────────────┤
│ SOCIAL PROOF                               │
│                                            │
├────────────────────────────────────────────┤
│ PRODUCT SHOWCASE                           │
│            [Secondary CTA] ←──── #2        │
│                                            │
├────────────────────────────────────────────┤
│ FEATURES                                   │
│                                            │
├────────────────────────────────────────────┤
│ BYOK SECTION                               │
│            [Contextual CTA] ←─── #3        │
│                                            │
├────────────────────────────────────────────┤
│ TESTIMONIALS                               │
│                                            │
├────────────────────────────────────────────┤
│ PRICING                                    │
│            [Pricing CTAs] ←───── #4        │
│                                            │
├────────────────────────────────────────────┤
│ FAQ                                        │
│                                            │
├────────────────────────────────────────────┤
│ FINAL CTA SECTION                          │
│            [Final CTA] ←────────  #5       │
│                                            │
└────────────────────────────────────────────┘
```

### Recommended CTA Count: 3-5

1. **Hero CTA** (always)
2. **Mid-page CTA** (after product showcase or features)
3. **End CTA** (always)
4. **Sticky CTA** (mobile only, optional)
5. **Pricing CTAs** (if pricing section exists)

### CTA Design Best Practices

#### Button Copy Formula
```
[Action Verb] + [Value/Outcome] + [Free/Low Risk]

Examples:
✅ "Start Creating Free"
✅ "Try VixPic Free"
✅ "Generate Your First Image"
✅ "Get Started — No Credit Card"

❌ "Submit"
❌ "Learn More"
❌ "Click Here"
❌ "Sign Up"
```

#### Visual Design

| Element | Recommendation |
|---------|----------------|
| Color | High contrast (if brand is blue, CTA is orange) |
| Size | Minimum 16px padding, 44px height |
| Shape | Rounded corners (4-8px radius) |
| Shadow | Subtle drop shadow adds depth |
| Hover | Color shift or slight scale (1.02-1.05) |
| Loading | Show spinner on click, prevent double-click |

#### Microcopy Near CTAs
Add trust-building microcopy beneath buttons:
- "Free forever. No credit card required."
- "Set up in 60 seconds"
- "Join 5,000+ developers"
- "Cancel anytime"

---

## 5. Page Length: Long-Form vs Minimal

### The Verdict: **Medium-Long** for VixPic

**Why not minimal?**
- BYOK is a new concept requiring education
- Developer audience wants technical details
- Multiple objections to address (security, privacy, cost)

**Why not ultra-long?**
- Risk of losing mobile users
- Diminishing returns after ~5 scroll depths
- Developer audience values efficiency

### Recommended Length

| Device | Scroll Depths | Approximate Length |
|--------|---------------|-------------------|
| Desktop | 4-6 screens | 3000-4500px |
| Mobile | 6-8 screens | 4000-6000px |

### Content Density by Section

```
HIGH DENSITY (lots of info)
├── Features section
├── Pricing comparison
└── FAQ

MEDIUM DENSITY
├── Product showcase
├── BYOK explanation
└── Testimonials

LOW DENSITY (breathing room)
├── Hero section
├── Social proof bar
└── Final CTA
```

### Long-Form Content Guidelines

1. **Use visual hierarchy aggressively**
   - Large section headers
   - Generous whitespace between sections
   - Alternating background colors

2. **Enable scanning**
   - Bullet points over paragraphs
   - Bold key phrases
   - Icons next to features

3. **Progressive disclosure**
   - Show summaries; hide details in accordions
   - "Learn more" expanders for technical specs

4. **Anchor navigation** (for long pages)
   - Sticky header with section links
   - "Back to top" button after fold 2

---

## 6. Interactive Demo / Preview Strategies

### Options Ranked by Effectiveness

#### 1. **Embedded Interactive Demo** ⭐⭐⭐⭐⭐
Best for: VixPic (shows instant value)

```
┌──────────────────────────────────────┐
│  Try it now — no sign up required    │
│  ┌────────────────────────────────┐  │
│  │ Enter a prompt:                │  │
│  │ [A cat wearing sunglasses...] │  │
│  │                                │  │
│  │     [Generate Image]          │  │
│  └────────────────────────────────┘  │
│                                      │
│  → Generates a preview/watermarked   │
│    image using visitor's prompt      │
└──────────────────────────────────────┘
```

**Implementation Notes:**
- Use a demo API key with rate limiting
- Watermark demo outputs
- Show loading states (builds anticipation)
- Capture email for "high-res version"

#### 2. **Animated Product Walkthrough** ⭐⭐⭐⭐
Best for: Complex UIs

- Auto-playing GIF or video (muted)
- Shows key workflow in 10-15 seconds
- Loop with pause on hover
- Raycast does this exceptionally well

#### 3. **Screenshot Carousel** ⭐⭐⭐
Best for: Multiple features

- 3-5 annotated screenshots
- Auto-advance every 4-5 seconds
- Manual navigation dots
- Captions explaining each view

#### 4. **Before/After Slider** ⭐⭐⭐
Best for: Image transformation tools

- Drag slider to compare input/output
- Instant visual impact
- Works great on mobile

#### 5. **Video Demo** ⭐⭐
Best for: Detailed explanations

- Keep under 90 seconds
- Include captions (85% watch muted)
- Thumbnail with play button (don't autoplay)
- Consider Loom-style with face bubble

### Demo Strategy for VixPic

**Recommendation: Hybrid Approach**

1. **Hero Section:** Static preview showing stunning generated images
2. **Product Showcase Section:** Interactive prompt → image demo
3. **Features Section:** Annotated screenshots of UI
4. **Below FAQ:** 60-second video walkthrough

### Technical Considerations

| Demo Type | Load Impact | Mobile Friendly | Engagement |
|-----------|-------------|-----------------|------------|
| Interactive | Heavy | Challenging | Highest |
| Video | Medium | Good | Medium |
| GIF/Animation | Medium | Good | Medium |
| Screenshots | Light | Excellent | Lower |

---

## 7. Wireframe Description

### Desktop Layout (1440px)

```
┌─────────────────────────────────────────────────────────────────┐
│ NAV: Logo ─────────────────── Features | Pricing | Docs | [CTA] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   HERO (Split Layout)                                           │
│   ┌──────────────────────┐  ┌────────────────────────────────┐  │
│   │                      │  │                                │  │
│   │  AI Images.          │  │     [Generated Image Grid]     │  │
│   │  Your Keys.          │  │     or                         │  │
│   │  Zero Markup.        │  │     [Interactive Demo]         │  │
│   │                      │  │                                │  │
│   │  Subheadline text    │  │                                │  │
│   │                      │  │                                │  │
│   │  [Start Free] [Demo] │  │                                │  │
│   │                      │  │                                │  │
│   │  "No credit card"    │  │                                │  │
│   └──────────────────────┘  └────────────────────────────────┘  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   SOCIAL PROOF BAR (centered, light gray bg)                    │
│   "Trusted by developers at"  [Logo] [Logo] [Logo] [Logo]       │
│   or: "★★★★★ Loved by 5,000+ creators"                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   HOW IT WORKS (3-column)                                       │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│   │   1️⃣        │  │   2️⃣        │  │   3️⃣        │            │
│   │  Add Your   │  │   Write a   │  │   Get Your  │            │
│   │  API Key    │  │   Prompt    │  │   Image     │            │
│   └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FEATURES (2x3 grid with icons)                                │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│   │ 🔑 BYOK    │  │ 🎨 Models   │  │ 💾 History  │            │
│   │ Your keys, │  │ GPT-4, DALL│  │ All images  │            │
│   │ your data  │  │ Claude...   │  │ saved       │            │
│   └─────────────┘  └─────────────┘  └─────────────┘            │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│   │ 📱 Apps    │  │ 🔒 Private  │  │ ⚡ Fast     │            │
│   │ Web, Mac,  │  │ Nothing on  │  │ Direct API  │            │
│   │ iOS        │  │ our servers │  │ calls       │            │
│   └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
│                    [Try VixPic Free]                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   BYOK EXPLAINER (split layout, alt bg)                         │
│   ┌────────────────────────────────┐  ┌───────────────────────┐ │
│   │                                │  │                       │ │
│   │   Why Bring Your Own Keys?     │  │  [Cost comparison     │ │
│   │                                │  │   visualization]      │ │
│   │   • Pay OpenAI directly        │  │                       │ │
│   │   • No middleman markup        │  │  VixPic: $0/mo        │ │
│   │   • Full control over data     │  │  Competitors: $20/mo  │ │
│   │   • Use any provider           │  │  + API costs          │ │
│   │                                │  │                       │ │
│   └────────────────────────────────┘  └───────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   TESTIMONIALS (3-column cards)                                 │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│   │ "Quote..." │  │ "Quote..." │  │ "Quote..." │            │
│   │ - Dev Name │  │ - Creator  │  │ - Designer │            │
│   │   @handle  │  │   @handle  │  │   @handle  │            │
│   └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FAQ (accordion style)                                         │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ ▶ How does BYOK work?                                    │   │
│   │ ▶ Is my API key secure?                                  │   │
│   │ ▶ Which AI providers are supported?                      │   │
│   │ ▶ Can I use this commercially?                           │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FINAL CTA (centered, gradient bg)                             │
│                                                                 │
│         Ready to create?                                        │
│         [Start Generating Images — Free]                        │
│         No credit card required                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER: Logo | Links | Social | Legal                           │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375px)

```
┌─────────────────────────┐
│ [☰] Logo    [CTA btn]   │
├─────────────────────────┤
│                         │
│   AI Images.            │
│   Your Keys.            │
│   Zero Markup.          │
│                         │
│   Subheadline...        │
│                         │
│   [Start Free]          │
│   No credit card        │
│                         │
│   ┌─────────────────┐   │
│   │ [Hero Image]    │   │
│   │                 │   │
│   └─────────────────┘   │
│                         │
├─────────────────────────┤
│ ★★★★★ 5,000+ creators   │
├─────────────────────────┤
│                         │
│   How it Works          │
│   ┌─────────────────┐   │
│   │ 1. Add API Key  │   │
│   ├─────────────────┤   │
│   │ 2. Write Prompt │   │
│   ├─────────────────┤   │
│   │ 3. Get Image    │   │
│   └─────────────────┘   │
│                         │
├─────────────────────────┤
│   Features              │
│   (stacked cards)       │
│                         │
├─────────────────────────┤
│   Testimonials          │
│   (carousel)            │
│   ← [quote] →           │
│                         │
├─────────────────────────┤
│   FAQ (accordions)      │
├─────────────────────────┤
│                         │
│   [Start Free]          │
│                         │
├─────────────────────────┤
│ Footer                  │
└─────────────────────────┘
┌─────────────────────────┐
│ [Sticky: Start Free]    │  ← Appears after scrolling
└─────────────────────────┘
```

---

## 8. Mobile Optimization Checklist

### Performance
- [ ] Page loads in < 3 seconds on 4G
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Total page size < 2MB
- [ ] Images lazy-loaded below fold
- [ ] Critical CSS inlined
- [ ] JavaScript deferred/async

### Touch & Interaction
- [ ] All tap targets ≥ 48x48px
- [ ] 8px+ spacing between tap targets
- [ ] No hover-dependent interactions
- [ ] Swipe gestures for carousels
- [ ] Pull-to-refresh disabled (prevents accidental nav)
- [ ] Form inputs have appropriate keyboard types

### Layout & Typography
- [ ] No horizontal scrolling
- [ ] Body text ≥ 16px
- [ ] Line height ≥ 1.5
- [ ] Adequate contrast (WCAG AA minimum)
- [ ] Buttons full-width or centered
- [ ] Images scale to container width

### Navigation
- [ ] Hamburger menu for secondary nav
- [ ] Sticky header (slim, ~48px height)
- [ ] Sticky bottom CTA (optional, appears after fold 1)
- [ ] Back-to-top button for long pages

### Forms
- [ ] Single-column form layout
- [ ] Large input fields (44px height minimum)
- [ ] Floating labels or clear placeholders
- [ ] Real-time validation
- [ ] Auto-focus first field
- [ ] Success/error states are visible

### Content Adaptation
- [ ] Shorter headlines on mobile
- [ ] Collapsed FAQ sections
- [ ] Simplified pricing (cards vs. tables)
- [ ] Video thumbnails instead of autoplay
- [ ] Essential info prioritized (cut fluff)

---

## 9. Page Speed Considerations

### Performance Budget

| Metric | Target | Impact |
|--------|--------|--------|
| Time to First Byte | < 200ms | Server response |
| First Contentful Paint | < 1.8s | User sees content |
| Largest Contentful Paint | < 2.5s | Main content visible |
| Time to Interactive | < 3.8s | Page usable |
| Total Blocking Time | < 200ms | Input responsiveness |
| Cumulative Layout Shift | < 0.1 | Visual stability |

### Optimization Techniques

#### Images (Biggest Wins)
1. **Use modern formats:** WebP (95% support), AVIF (80% support)
2. **Responsive images:** srcset with multiple sizes
3. **Lazy loading:** `loading="lazy"` for below-fold images
4. **Compression:** 80% quality for photos, lossless for UI
5. **CDN delivery:** CloudFlare, Vercel Edge, AWS CloudFront

```html
<img 
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="(max-width: 640px) 100vw, 50vw"
  loading="lazy"
  alt="VixPic generated image example"
/>
```

#### JavaScript
1. **Defer non-critical scripts:** `<script defer>`
2. **Code splitting:** Load only what's needed per section
3. **Tree shaking:** Remove unused code
4. **Minimize third-party scripts:** Each analytics/chat tool costs 100-500ms

#### CSS
1. **Critical CSS inlined:** Above-fold styles in `<head>`
2. **Purge unused CSS:** Remove framework bloat
3. **Minification:** Use cssnano or similar

#### Fonts
1. **System font stack:** Fastest option
   ```css
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
   ```
2. **If custom fonts:** Subset, preload, use `font-display: swap`

#### Hosting & Delivery
1. **Edge deployment:** Vercel, Netlify, CloudFlare Pages
2. **HTTP/2 or HTTP/3:** Multiplexed requests
3. **Brotli compression:** Better than gzip
4. **Cache headers:** Long TTL for static assets

### Speed Testing Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- Lighthouse (Chrome DevTools)

---

## 10. Key Takeaways for VixPic

### Immediate Priorities

1. **Hero Section Excellence**
   - Nail the headline: "AI Images. Your Keys. Zero Markup."
   - Show generated images (the output), not abstract graphics
   - CTA above fold: "Start Creating Free"

2. **BYOK as Hero Differentiator**
   - Make "Bring Your Own Keys" instantly understandable
   - Visualize cost savings vs. competitors
   - Address security concerns proactively

3. **Interactive Demo**
   - Let visitors generate a sample image without signup
   - This is your highest-impact conversion tool
   - Watermark demo outputs; capture email for full quality

4. **Developer-Focused Trust**
   - GitHub stars (if available)
   - Developer testimonials with @handles
   - Technical documentation links

5. **Mobile-First Build**
   - Design mobile layout first, then expand to desktop
   - Test on real devices, not just emulators
   - Monitor Core Web Vitals weekly

### What to A/B Test First

1. Hero headline variations
2. CTA button text ("Start Free" vs. "Try Now" vs. "Generate Image")
3. Social proof format (logos vs. user count vs. testimonials)
4. Interactive demo vs. video demo
5. Page length (short vs. full version)

---

## Sources & References

- Unbounce 2024 Conversion Benchmark Report
- Userpilot SaaS Landing Page Best Practices
- KlientBoost SaaS Landing Page Analysis
- Competitor analysis: TypingMind, Msty, BoltAI, Linear, Raycast
- Google Core Web Vitals documentation
- Nielsen Norman Group mobile UX research
