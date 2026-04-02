# Cafe Frohnatur — Design System

> Visuelles System für dieses Projekt. Wird von Claude vor dem Bauen jeder visuellen Komponente gelesen.

---

## Ästhetische Richtung

Warm, locker, selbstbewusst — wie der Laden selbst. Kein hipster-minimales Café-Template, sondern ein Ort mit Charakter. Die handgezeichneten Illustrationen geben der Seite Seele, die warmen Braun- und Cremetöne kommen direkt aus dem Laden (Holztheke, helle Wände, Papierlampe). Die Italic der Barlow Condensed bringt die lockere, nahbare Persönlichkeit. Insgesamt: ein Nachbarschafts-Café das sich anfühlt wie ein guter Freund — entspannt aber mit Qualitätsanspruch.

**Design-Ansatz: Soft UI** — Weiche Formen, sanfte Schatten, semi-transparente Oberflächen. Kein hartes Glassmorphism, sondern zurückhaltend und warm. Backdrop-Filter nur auf der Navigation.

---

## Farbpalette

```css
@theme extend {
  /* Braun — Haupt-Anker */
  --color-brown-dark: #4C1D03;
  --color-brown-mid: #7A3518;
  --color-brown-warm: #9B5E35;

  /* Creme — ruhiger Gegenpol */
  --color-cream: #F5ECD7;
  --color-cream-light: #FAF6ED;
  --color-cream-warm: #EDE0C8;

  /* Text */
  --color-text: #4C1D03;
  --color-text-muted: #7A5A3E;

  /* Basis */
  --color-white: #FFFBF5;

  /* Dunkel — Hero, Galerie-Filmstrip */
  --color-brown-film: #3A1805;
  --color-brown-film-deep: #2E1001;
  --color-brown-darkest: #1a0a00;
}
```

### RGB-Varianten

Alle Hauptfarben existieren auch als RGB-Tripel für `rgba()`:

```css
:root {
  --color-brown-dark-rgb: 76, 29, 3;
  --color-brown-mid-rgb: 122, 53, 24;
  --color-brown-warm-rgb: 155, 94, 53;
  --color-cream-rgb: 245, 236, 215;
  --color-cream-light-rgb: 250, 246, 237;
  --color-cream-warm-rgb: 237, 224, 200;
  --color-white-rgb: 255, 251, 245;
  --color-black-rgb: 0, 0, 0;
  --color-brown-film-rgb: 58, 24, 5;
  --color-brown-darkest-rgb: 26, 10, 0;
}
```

### Verwendungsregeln

- **Brown Dark** dominiert: Headlines (Regular), Footer-Hintergrund, Hero-Hintergrund, dunkelste Flächen
- **Brown Mid + Brown Warm** für sekundäre Texte, Hover-States, Trennelemente, Akzente
- **Cream-Töne** wechseln zwischen Sektionen: cream-light als Standard-Hintergrund, cream für Akzent-Bereiche, cream-warm für wärmere Zonen
- **Film-Töne** nur für dunkle Elemente (Hero-Gradient, Galerie-Filmstrip)
- Maximal 3 Farben gleichzeitig sichtbar pro Sektion

---

## Typografie

```css
@theme extend {
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

Alle Fonts lokal gehostet (WOFF2, `font-display: swap`). Kein CDN — DSGVO-konform.

**Display-Font: Barlow Condensed**
- Gewichte: 400, 500, 600, 700, 800 (Regular + Italic)
- Einsatz Regular: Headlines, Navigation, Buttons, Logo-Text
- Einsatz Italic: Hero-Akzente, Taglines, Zitate, charmante Einzeiler, Section-Tags
- **Italic-Regel:** Regular = Fakt, Italic = Charakter. Im Zusammenspiel erzählen sie die Story.

**Body-Font: DM Sans**
- Gewichte: 400, 500, 600, 700 (Regular + Italic)
- Einsatz: Fließtext, Captions, Formulare, kleine UI-Elemente

### Größenhierarchie

| Rolle | Mobile | Desktop | Font | Gewicht | Style |
|-------|--------|---------|------|---------|-------|
| Hero-Headline | 3rem | 5rem | Display | 800 | Regular oder Italic |
| Sektions-Headline | 1.75rem | 2.25rem | Display | 700 | Regular |
| Sub-Headline | 1.25rem | 1.5rem | Display | 600 | Regular oder Italic |
| Tagline / Akzent | 1rem | 1.15rem | Display | 500 | Italic |
| Body | 0.95rem | 1rem | Body | 400 | Regular |
| Small / Caption | 0.8rem | 0.85rem | Body | 400 | Regular |
| Button | 0.8rem | 0.85rem | Display | 700 | Regular, Uppercase |
| Nav | 0.75rem | 0.8rem | Display | 600 | Regular, Uppercase |
| Section-Tag | 0.6rem | 0.65rem | Display | 600 | Italic, Uppercase |

### Typografie-Details

- Line-Height Body: 1.65
- Line-Height Headlines: 1.0–1.15
- Letter-Spacing Headlines: -0.02em (Hero), -0.01em (Section)
- Letter-Spacing Buttons/Nav: 0.08em
- Letter-Spacing Section-Tags: 0.15em
- Text-Transform Headlines: uppercase
- Text-Transform Taglines (Italic): mixed case erlaubt

---

## Spacing

```css
@theme extend {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2.5rem;
  --spacing-xl: 4rem;
  --spacing-2xl: 6rem;
  --spacing-section: 8rem;
}
```

---

## Timing

```css
:root {
  --timing-fast: 0.2s;
  --timing-normal: 0.3s;
  --timing-slow: 0.6s;
}
```

---

## Visuelle Sprache

### Illustrationen (Zentrales Design-Element)

Die handgezeichneten Kaffee-Charaktere ("Cafe Collection - New Friends") SIND die visuelle Identität. Sie ersetzen Fotos wo möglich und geben der Seite ihren einzigartigen Charakter.

- **Stil:** Braun auf Creme, organische Linienführung, charmant-verspielt
- **Regel:** Jedes Illustrations-Asset darf nur EINMAL auf der Seite erscheinen. Keine Wiederverwendung.

### Die Lampe (Signature-Element)

Die Papierlampe ist das physische Wahrzeichen des Ladens. Auf der Website als hängendes Element mit animiertem Kabel im Hero eingesetzt.

---

## Fotografie / Bildstil

- **Stimmung:** Warm, natürlich, wie durchs Fenster des Cafés fotografiert
- **Farbbehandlung:** Warme Töne, leicht entsättigt, passend zur Creme/Braun-Palette
- **Galerie-Filter:** `saturate(0.88) brightness(0.96) contrast(1.02) sepia(0.05)` für vintage Wärme
- **Perspektive:** Nah dran, menschlich, nicht inszeniert
- **Was vermeiden:** Kalte/blaue Töne, Stock-Ästhetik, perfekt inszenierte Flat-Lays

---

## Referenzen & Inspiration

| Referenz | Was davon übernehmen |
|----------|---------------------|
| Instagram @frohnatur.coffeeshop | Tonalität, Humor, visuelle Sprache |
| Die Papierlampe | Signature-Element, Warmth |
| Illustrationen "Cafe Collection" | Zentrales Design-Element, Braun-auf-Creme-Stil |
| Font-Referenz (Instagram Story) | Barlow Condensed Italic Richtung |
| Laden-Fotos | Farbwelt (Holz, Creme, Fliesen), Atmosphäre |
