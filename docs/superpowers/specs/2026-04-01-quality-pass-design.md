# Frohnatur — Quality Pass Design Spec

**Date:** 2026-04-01
**Goal:** Elevate the site from "technically solid café template" to "andere Liga" — the quality bar from DESIGN.md.

## Context

The Frohnatur website has all sections built, responsive, accessible, and functionally complete. But it reads like a well-executed template: predictable scroll animations, flat section transitions, and layouts that don't surprise. This spec describes a top-to-bottom quality pass across three layers: animation system, section transitions, and section-specific improvements.

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Section transitions | Organic waves + overlap depth (A+B hybrid) | Sections overlap like stacked cards, but edges use soft SVG wave shapes instead of straight lines. Coffee beans float in transition zones. |
| Animation variety | Focused on 3 sections only | Galerie, Story, Angebot get unique entrances. Rest stays fadeInUp. Restraint over spectacle. |
| Kontakt map area | Static map image (A) | Screenshot of real map area, warm color filter + paper texture overlay. Click opens Google Maps. GDPR-safe. |
| Angebot improvement | Break the symmetry | More prominent taglines, subtle hover interactions, less mechanical feel. |
| Story improvement | Typographic rhythm | Pull-quote as visual moment, better spacing rhythm, distinct styling for English quote. |
| Galerie improvement | Add context | Section tag + headline above the film strip. Minimal intro that gives it a stage. |

## Layer 1: Animation System

### Current State
Every section uses `fadeInUp` with staggered `--delay` CSS variables. Smooth but predictable by section 3.

### Changes

**Hero:** No changes. The entrance sequence (lamp drop, staggered fadeIn, character slideUp) already has choreography.

**Angebot:** Replace fadeInUp with scale-up entrance. Items start at `scale(0.96) opacity(0)` and grow to `scale(1) opacity(1)`. Divider lines draw in with a width animation (0 → 100%). Subtle difference from fadeInUp but feels like offerings "presenting themselves."

**Story:** Split-direction entrance. Text column slides in from the left (`translateX(-30px)`), illustration slides in from the right (`translateX(30px)`). Creates a "meeting in the middle" feel that matches the section's theme of connection.

**Galerie:** Horizontal slide-in. The film strip wrapper enters from off-screen right (`translateX(60px)`), matching the strip's own horizontal scroll direction. Natural and section-appropriate.

**Kontakt:** Stays fadeInUp with existing stagger timing.

### Implementation
- Add new keyframes in respective CSS files: `scaleIn`, `slideFromLeft`, `slideFromRight`, `slideFromHorizontal`
- Update `.angebot-animate`, `.story-animate`, `.filmroll-animate` classes
- All new animations must have `prefers-reduced-motion` fallbacks (instant visibility, no motion)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for all new entrances (matches existing hero easing)

## Layer 2: Section Transitions

### Current State
Sections swap background colors with no visual device between them. The ONE exception is Innenraum's negative margin overlap into Angebot — this is the pattern to extend.

### Design: Organic Wave + Overlap Depth

Each section-to-section boundary gets a transition treatment. The approach combines:
1. **Overlap:** The next section's background extends upward, overlapping the previous section's bottom area by 40-80px
2. **Organic edge:** The overlap boundary is an SVG wave shape — soft, asymmetric curves with 2-3 control points per wave (think gentle hills, not a mathematical sine wave). Amplitude: 20-40px. The goal is "torn paper" subtlety, not "ocean wave" drama.
3. **Depth:** Subtle box-shadow on the overlapping edge to create physical depth (like paper layers)

### Transition Map

| From → To | Treatment |
|-----------|-----------|
| Hero → Innenraum | Already works (photo with negative margin). No change. |
| Innenraum → Angebot | Already works (negative margin pulls photo into dark section). Enhance: add a soft wave shape to the Angebot section's top edge where it meets the Innenraum image. |
| Angebot (dark) → Story (cream) | Wave overlap — Story's cream background extends up with organic wave edge into Angebot's dark area. Most dramatic transition on the page. |
| Story → Galerie | Subtle — the Galerie section is compact and horizontal. A gentle wave or just a soft gradient fade. Keep minimal so the film strip entrance does the visual work. |
| Galerie → Kontakt | Wave overlap — Kontakt's cream-warm background extends up with organic wave edge. |
| Kontakt → Footer | Simpler treatment — gentle gradient or straight overlap with rounded top. Footer is functional, not dramatic. |

### Implementation
- SVG wave shapes as `::before` pseudo-elements on section tops, using `clip-path` or inline SVG backgrounds
- Each wave shape should be slightly different (not the same curve repeated) — 2-3 wave variants rotated/mirrored
- Waves are responsive: use `viewBox` and `preserveAspectRatio="none"` to stretch horizontally
- The overlapping section needs `position: relative` and `margin-top: negative` to create the overlap
- z-index: each section stacks above the previous (ascending z-index down the page)
- Coffee beans can be positioned in the transition zone (the overlap area) for extra depth

### Key Files
- `site/src/styles/global.css` — add wave transition utility classes
- Each section's CSS file — add `::before` wave pseudo-elements
- Each component file — adjust padding-top to account for overlap area

## Layer 3: Section-Specific Improvements

### Angebot: Break the Symmetry

**Current:** Three identical cards with same structure (icon → title → tagline → description), same size, same animation timing.

**Changes:**
1. **Taglines more prominent:** Increase font size from `1rem/1.1rem/1.15rem` to `1.1rem/1.2rem/1.25rem`. Add a subtle line or decorative element before each tagline to draw the eye.
2. **Hover interactions (desktop only):** On hover, the offering card gets a gentle 1-2px upward translate, the icon gets a subtle rotation or scale pulse, and the tagline color shifts slightly warmer.
3. **Stagger variety:** Instead of uniform `i * 0.12s` delay, use `[0s, 0.15s, 0.08s]` — the middle item arrives slightly later, creating a visual "bloom from edges" rather than a left-to-right sweep.

**Files:** `site/src/components/Angebot.jsx`, `site/src/styles/angebot.css`

### Story: Typographic Rhythm

**Current:** Uniform spacing between all text elements. Pull-quote uses `soft-quote` class but doesn't stand out enough.

**Changes:**
1. **Pull-quote as visual moment:** Increase quote font size to `1.3rem/1.45rem/1.55rem`. Add more vertical padding (`p-6 md:p-8`). Make the left border thicker (4px instead of 3px) and more opaque. Add a subtle warm background tint. The quote should feel like a pause — a breath in the reading flow.
2. **Spacing rhythm:** Increase gap between sub-headline and first body paragraph (currently `mb-10 md:mb-14`, increase to `mb-12 md:mb-16`). Tighten gap between body paragraphs and quote slightly. The rhythm should be: big space → text → tight → QUOTE (pause) → tight → text.
3. **English quote distinct styling:** The "Natural Wine does make hangovers..." quote is bilingual humor — style it to signal a different voice. Could be a slightly different color treatment, or a subtle background that distinguishes it from German text.

**Files:** `site/src/components/Story.jsx`, `site/src/styles/story.css`

### Galerie: Add Context

**Current:** The film strip appears directly with no section heading or context.

**Changes:**
1. **Add section intro:** Above the film strip, add the standard section tag pattern: italic uppercase tag ("Ein Blick ins Café" or "Galerie") + optional short headline.
2. **Positioning:** The intro sits inside the existing section wrapper, left-aligned with standard page padding, above the full-bleed film strip.
3. **Background:** Add a subtle cream or cream-warm background behind the intro + strip area. Currently the Galerie section has no explicit background color.

**Files:** `site/src/components/Galerie.jsx`, `site/src/styles/galerie.css`

### Kontakt: Static Map Image

**Current:** Right column is a card with pin icon, address text, and Google Maps button. Takes 50% width for minimal content.

**Changes:**
1. **Replace card content with static map image:** Use a screenshot/render of the Google Maps area around Neusser Str. 34, Köln-Agnesviertel.
2. **Styling:** Apply CSS filter to match the warm palette — `saturate(0.7) sepia(0.15) brightness(1.05)` or similar. Add paper-grain texture overlay (`texture-grain` class). Rounded corners matching the card radius.
3. **Interaction:** Entire map card is a clickable link to Google Maps. On hover: subtle brightness increase and shadow lift.
4. **Pin marker:** CSS overlay pin on the exact café location — red dot with subtle pulse animation (reuse existing `kontaktPinPulse`).
5. **Overlay text:** Small address label at bottom of map card ("Neusser Str. 34 · Agnesviertel") in a frosted glass strip.
6. **Map image source:** Generate a static map image. Options: Google Static Maps API (needs API key), Mapbox Static API, or manual screenshot styled in warm tones. For now, use a placeholder with a TODO marker — the implementation approach depends on what API keys are available.

**Files:** `site/src/components/Kontakt.jsx`, `site/src/styles/kontakt.css`, new static map image asset

## Skills to Invoke During Implementation

| Phase | Skill | Purpose |
|-------|-------|---------|
| Before building any visual component | `frontend-design` | Global aesthetic standards, atmosphere, depth |
| Before building any visual component | Read `DESIGN.md` | Project-specific tokens, direction |
| Polish pass after each section | `make-interfaces-feel-better` | Micro-interactions, optical alignment, shadows, border radius |
| Final QA | `web-design-guidelines` | Compliance audit against Web Interface Guidelines |
| Final QA | `ui-ux-pro-max` | UX quality control, accessibility verification |

## Verification Plan

After implementation, verify each layer:

1. **Start dev server** and open in browser
2. **Animations:** Scroll through the page — confirm Angebot scales in, Story slides from sides, Galerie slides horizontally. Verify `prefers-reduced-motion` disables all motion.
3. **Transitions:** Check each section boundary — wave shapes render correctly, overlaps create depth, no gaps or visual artifacts. Test at 375px, 768px, 1280px.
4. **Angebot:** Hover each card on desktop — verify interaction. Check tagline prominence.
5. **Story:** Read through the section — does the pull-quote create a visual pause? Is the rhythm perceptible?
6. **Galerie:** Confirm section tag/headline appears above strip. Horizontal entrance animation works.
7. **Kontakt:** Map image loads, warm filter applied, click opens Google Maps, pin overlay visible.
8. **Cross-browser:** Test in Safari + Chrome (macOS).
9. **Performance:** No layout shifts, no janky animations, images lazy-loaded appropriately.
10. **Lighthouse:** Run audit, target >90 across all categories.
