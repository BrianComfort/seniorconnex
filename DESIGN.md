---
name: SeniorConnex
description: "Bright Care — warm, light, confident brand system for proactive senior-care technology."
colors:
  daylight-blue: "#2e7bd0"
  deep-blue: "#1f66b5"
  pressed-blue: "#1a5191"
  midnight-blue: "#112c4c"
  blue-tint: "#eaf3fc"
  warm-coral: "#ff7551"
  coral-deep: "#ec5832"
  garden-green: "#2aa56d"
  green-tint: "#e8f6ee"
  sunrise-amber: "#f5a623"
  amber-deep: "#d98800"
  paper: "#ffffff"
  cream: "#fff9f2"
  sand: "#fbf4ea"
  mist: "#eef4fb"
  ink: "#1b2430"
  ink-soft: "#495663"
  ink-mute: "#78848f"
  line: "#ece4d7"
  line-cool: "#e1e8f1"
typography:
  display:
    fontFamily: "Poppins, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(40px, 6vw, 76px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(28px, 3.6vw, 46px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Poppins, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(20px, 1.7vw, 25px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lede:
    fontFamily: "Inter, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(17px, 1.3vw, 20px)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  field: "12px"
  sm: "14px"
  lg: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  card: "clamp(24px, 2.6vw, 34px)"
  section-tight: "clamp(48px, 7vh, 84px)"
  section: "clamp(64px, 10vh, 116px)"
components:
  button-primary:
    backgroundColor: "{colors.deep-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "{colors.pressed-blue}"
  button-coral:
    backgroundColor: "{colors.warm-coral}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-coral-hover:
    backgroundColor: "{colors.coral-deep}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pressed-blue}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  nav-cta:
    backgroundColor: "{colors.deep-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.lg}"
    padding: "clamp(24px, 2.6vw, 34px)"
  input-field:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 15px"
  pill-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
---

# Design System: SeniorConnex

## 1. Overview

**Creative North Star: "Bright Care"**

Bright Care is daylight made into a design system. Where the category defaults to clinical white-coats and the previous SeniorConnex site felt "dark and depressing," this system commits to the opposite: a warm, light, generously-lit surface that reads as a sunlit living room, not a hospital corridor. The mood is **warm, reassuring, confident** — the three brand words made visual. Every screen should leave an anxious adult child calmer and a senior feeling capable, never watched.

Warmth is carried structurally, not as decoration. The body sits on a warm off-white (Cream `#fff9f2`), type is dark-on-light and comfortably large (17px Inter, never thin), and color does real work: a four-pillar system color-codes the product's promise — **Safety** in blue, **Connection** in coral, **Wellness** in green, **Independence** in amber. Trust-blue is the spine of the brand and carries the primary actions; coral is the heartbeat that adds energy and warmth to moments that matter. Depth is soft and reactive — surfaces are flat at rest and lift gently on interaction, with shadows tinted in the brand blue rather than neutral gray, so even the elevation feels warm.

The system explicitly rejects four things, drawn straight from the brand's anti-references: **cold/clinical medical** sterility, **dark backgrounds with thin low-contrast type**, **surveillance/monitoring** framing, and **patronizing senior cliché**. The visual answer to all four is the same — human warmth, real light, plain confidence, and dignity. Motion is responsive, not theatrical: a single staggered reveal as sections enter, gentle hover lifts, soft count-ups; it reassures, it never performs.

**Key Characteristics:**
- Warm-light surfaces (Cream / Paper), never dark; dark-on-light type at a comfortable 17px floor.
- A four-pillar color code — blue / coral / green / amber — paired always with a label or icon, never color alone.
- Trust-blue spine, coral heartbeat; the blue→deep-blue gradient reserved for hero and CTA bands.
- Soft, blue-tinted shadows; flat at rest, lift on hover. Generous 20px card radii, pill-shaped buttons.
- Poppins headings + Inter body — geometric confidence over humanist warmth, one contrast axis.
- Responsive, not choreographed: one staggered reveal, gentle lifts, easing-out curves; reduced-motion fully honored.

## 2. Colors

A warm-light palette where a confident trust-blue leads, a warm coral adds heartbeat, and green and amber complete a four-pillar code — all floated on cream and paper neutrals.

### Primary
- **Daylight Blue** (`#2e7bd0`): The brand spine and the **Safety** pillar. Links, active nav, icon accents, the lighter stop of hero/CTA gradients, focus glows.
- **Deep Blue** (`#1f66b5`): The primary action color. Solid CTA buttons, the nav "Get Started" pill, statistic numerals, emphasized inline text, the deeper stop of brand gradients.
- **Pressed Blue** (`#1a5191`): Button hover/pressed states and outline-button text. The committed end of the blue ramp.
- **Midnight Blue** (`#112c4c`): The footer ground only — the one large dark surface, used to anchor the page foot, never for content backgrounds elsewhere.

### Secondary
- **Warm Coral** (`#ff7551`): The brand's heartbeat and the **Connection** pillar. Coral CTAs, the eyebrow accent dash, the "Most chosen" price badge, family-audience accents. Used sparingly for warmth and energy, not as a second body color.
- **Coral Deep** (`#ec5832`): Coral hover states and coral-on-light text (`text-coral`) where the lighter coral would fail contrast.

### Tertiary
- **Garden Green** (`#2aa56d`): The **Wellness** pillar. Wellness pillar cards/icons, the checkmark in check-lists, the live-status "all good" pulse dot, success states.
- **Sunrise Amber** (`#f5a623`): The **Independence** pillar. Independence pillar cards/icons, senior-audience accents, warm radial glows in hero backgrounds.
- **Amber Deep** (`#d98800`): Amber-on-light text and the warning role where lighter amber would wash out.

### Neutral
- **Paper** (`#ffffff`): Card, form, and elevated-surface backgrounds; alternating section bands.
- **Cream** (`#fff9f2`): The body background — the warm off-white that defines "Bright Care." Also the hover fill in nav menus and input rest state.
- **Sand** (`#fbf4ea`) / **Mist** (`#eef4fb`): Quiet alternating section bands — Sand warm, Mist cool — used to create rhythm between Paper and Cream.
- **Ink** (`#1b2430`): Primary text and headings. Dark-on-light, always.
- **Ink Soft** (`#495663`): Secondary body text, ledes, supporting copy. Still ≥4.5:1 on Cream/Paper.
- **Ink Mute** (`#78848f`): Labels, captions, meta only — reserved for large or non-essential text; never running body copy.
- **Line** (`#ece4d7`) / **Line Cool** (`#e1e8f1`): Warm and cool hairline borders and dividers (1px).

### Named Rules
**The No-Dark-Body Rule.** Content never sits on a dark background. The only large dark surface in the system is the Midnight Blue footer. Dark-on-light, always — this is the deliberate reversal of the old "dark and depressing" site, and it is non-negotiable.

**The Warm-Shadow Rule.** Every shadow is tinted with the brand blue (`rgba(27, 60, 110, …)`), never neutral gray or black. Elevation should feel like daylight, not like a drop shadow.

**The Pillar-Code Rule.** Blue = Safety, Coral = Connection, Green = Wellness, Amber = Independence. The mapping is fixed and meaningful. Never recolor a pillar, and never let color carry the meaning alone — always pair it with the pillar's label or icon.

## 3. Typography

**Display Font:** Poppins (fallback `-apple-system, "Segoe UI", sans-serif`)
**Body Font:** Inter (fallback `-apple-system, "Segoe UI", Helvetica, Arial, sans-serif`)

**Character:** A geometric-sans display over a humanist-sans body — paired on a contrast axis of personality, not silhouette. Poppins gives headings rounded, optimistic, confident geometry (the friendly "o"s suit a brand about warmth); Inter keeps body copy quiet, legible, and neutral at small sizes. Two well-differentiated weights of clear sans beats any decorative pairing for an older audience.

### Hierarchy
- **Display** (Poppins 700, `clamp(40px, 6vw, 76px)`, line-height 1.04, -0.02em): Homepage hero and big statement headlines. Pair with `text-wrap: balance`.
- **Headline** (Poppins 700, `clamp(28px, 3.6vw, 46px)`, 1.12, -0.018em): The workhorse section heading (`.h2`). Page-hero H1s sit just above this at `clamp(34px, 5vw, 58px)`.
- **Title** (Poppins 600, `clamp(20px, 1.7vw, 25px)`, 1.3, -0.01em): Card and subsection headings (`.h3`); FAQ summaries.
- **Body** (Inter 400, 17px, line-height 1.65): All running text. Cap measure at 65–75ch. The 17px floor is deliberate for legibility — never drop below it for paragraphs.
- **Lede** (Inter 400, `clamp(17px, 1.3vw, 20px)`, 1.65, color Ink Soft): Intro paragraphs under headings; max ~60ch.
- **Label** (Inter 600, 13px, letter-spacing 0.16em, uppercase): The eyebrow/kicker and small meta labels. The eyebrow carries a 22px coral dash before it.

### Named Rules
**The 17px Floor Rule.** Body copy is never smaller than 17px and never lighter than 400. The audience skews older; readability outranks elegance, every time.

**The Two-Weight Voice Rule.** Hierarchy comes from size and from Poppins weight (700 display, 600 titles) — not from new fonts. Do not introduce a third family; the contrast is already in the pairing.

## 4. Elevation

Soft and reactive. Surfaces are **flat at rest** — defined by a 1px warm border and their background, not by a shadow — and lift gently on hover or focus. Shadows are large, soft, and offset-negative (heavy spread reduction), so they read as a diffuse glow beneath an element rather than a hard edge. Critically, every shadow is tinted with the brand blue (`rgba(27, 60, 110, …)`); depth in Bright Care feels like light, not weight.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 10px 30px -18px rgba(27,60,110,0.22)`): The quiet resting elevation for audience cards, forms, price cards, pill tags.
- **Soft lift** (`box-shadow: 0 18px 44px -28px rgba(27,60,110,0.30)`): The hover target for cards and the resting shadow of featured surfaces.
- **Hero float** (`box-shadow: 0 40px 80px -42px rgba(27,60,110,0.45)`): The hero image and large showcase media — the deepest, most diffuse glow.
- **CTA glow** (button shadows, e.g. `0 12px 26px -12px rgba(31,102,181,0.75)` blue / `0 12px 26px -12px rgba(255,117,81,0.8)` coral): Colored glows beneath solid CTAs, matched to the button's own hue.
- **Sticky nav** (`0 1px 0 rgba(27,36,48,0.06), 0 10px 30px -22px rgba(27,60,110,0.35)`): Appears only once the nav gains its translucent scrolled state.

### Named Rules
**The Flat-at-Rest Rule.** Cards and surfaces carry no shadow at rest — only a 1px border. Shadow is a *response* to interaction (hover, focus) or a marker of the page's most important media. A card that's shadowed by default has skipped the system.

**The Lift-Don't-Pop Rule.** Hover elevation is a small upward translate (cards `-5px`, buttons `-2px`) paired with the soft-lift shadow, eased out over 0.3s. Never a scale-pop or a hard drop shadow.

## 5. Components

### Buttons
- **Shape:** Fully pill-shaped (`999px`), Poppins 600 label, 2px transparent border baseline, generous `15px 28px` padding.
- **Primary:** Deep Blue (`#1f66b5`) fill, white text, blue CTA glow. The default action across the site.
- **Coral:** Warm Coral (`#ff7551`) fill, white text, coral glow. The warm, high-energy CTA — demo/Get Started moments.
- **Outline:** Transparent on Paper, Pressed-Blue text, Blue-200 border; hover fills Blue-50 and deepens the border.
- **On-brand / ghost-light:** White (or transparent + white border) variants for use on the blue gradient bands.
- **Text link:** Poppins 600, Deep Blue, with an arrow that slides 4px right on hover.
- **Hover / Focus:** Translate up 2px, deepen fill (Deep→Pressed Blue, Coral→Coral Deep), 0.22s ease. Global focus-visible is a 3px Blue-400 outline at 3px offset.

### Chips / Tags
- **Pill tag:** Paper background, 1px cool border, Ink-Soft text, card-rest shadow, a small leading status dot recolored per audience (coral / amber / blue). Used as page-hero category markers.
- **Resource tag:** Small uppercase Inter 700 label, Blue-50 fill, Blue-700 text, pill-shaped — content-type markers on resource cards.

### Cards / Containers
- **Corner Style:** Large and friendly — 20px (`--radius`) for cards, 14px (`--radius-sm`) for smaller tiles.
- **Background:** Paper on the Cream/Sand/Mist section bands.
- **Shadow Strategy:** Flat-at-rest (1px Line border only); on hover, translate `-5px`, apply Soft-lift shadow, shift border toward Blue-100. (See Elevation.)
- **Internal Padding:** `clamp(24px, 2.6vw, 34px)`.
- **Signature — Pillar Card:** A card with a 4px colored **top** border and a filled icon chip, both keyed to the pillar (Safety blue / Connection coral / Wellness green / Independence amber). The top accent — never a side stripe — is how a pillar announces itself.

### Inputs / Fields
- **Style:** Cream (`#fff9f2`) fill, 1.5px Line border, 12px radius, 13px Ink-Soft label above. Comfortable `13px 15px` padding, 16px text.
- **Focus:** Border shifts to Daylight Blue, background brightens to Paper, and a 4px `rgba(46,123,208,0.14)` blue glow ring appears — the same warm-light feedback used everywhere.

### Navigation
- **Style:** Fixed, transparent over the hero; on scroll past 16px it gains a translucent Cream backdrop (`rgba(255,249,242,0.86)`) with a 14px blur and the sticky-nav shadow.
- **Links:** Inter 500, 15px, Ink-Soft → Deep Blue on hover; active link is Ink. The "Who it's for" dropdown is a Paper panel with rounded 18px corners and per-audience colored icon chips.
- **CTA:** Deep Blue pill ("Get Started"). **Mobile:** below 940px, links collapse into a blurred Cream sheet toggled by a hamburger.

### Signature — Live Status Float Card
A small translucent Paper card (`rgba(255,255,255,0.94)` + 8px blur) floated over hero media, carrying a pulsing Garden-Green status dot and an uppercase Ink-Mute label over a Poppins value. It is the visual shorthand for "everything's fine, quietly monitored" — reassurance, not surveillance.

## 6. Do's and Don'ts

### Do:
- **Do** keep all content dark-on-light. Body text is Ink/Ink-Soft on Cream or Paper, minimum 17px, minimum weight 400, and must clear 4.5:1 contrast (3:1 for large/bold).
- **Do** tint every shadow with the brand blue (`rgba(27,60,110,…)`), keep surfaces flat at rest, and lift them gently on hover (cards `-5px`, buttons `-2px`, 0.3s/0.22s ease-out).
- **Do** use the four-pillar color code consistently — Safety blue, Connection coral, Wellness green, Independence amber — and always pair the color with the pillar's label or icon so meaning survives for color-blind readers.
- **Do** lead with Deep Blue for primary actions and reserve Warm Coral for the warm, high-intent CTA and small accents. Let the blue→deep-blue gradient appear only on hero and CTA bands.
- **Do** use pill buttons (`999px`) and large 20px card radii; keep corners soft and friendly throughout.
- **Do** respect `prefers-reduced-motion`: every reveal, pulse, and scroll behavior has an instant/static fallback already wired — keep it that way.

### Don't:
- **Don't** look cold or clinical. No hospital-grade sterility, device spec-sheet layouts, or eldercare-catalog tone — human warmth (real family photos, plain language, light) is the brand's edge.
- **Don't** put content on dark backgrounds or use thin, low-contrast white type. That was the old "dark and depressing" site; the only dark surface allowed is the Midnight Blue footer.
- **Don't** frame anything as surveillance or monitoring ("we're watching grandma"). Lead with independence and connection; the live-status card reassures, it doesn't spy.
- **Don't** fall into patronizing senior cliché — oversized condescending UI or stock "happy old people" staging that talks down to the audience.
- **Don't** set gray text (Ink-Mute) as running body copy or place gray text on a colored background; use a darker shade of the background's own hue instead.
- **Don't** use side-stripe borders (`border-left`/`border-right` > 1px as an accent) — the pillar card's accent is a **top** border by design. Don't use gradient text or decorative glassmorphism.
- **Don't** stack the uppercase eyebrow label above every section. It's a real system element, but as section-by-section grammar it reads as scaffolding; vary the cadence.
