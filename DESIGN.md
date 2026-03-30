# Cafe Frohnatur — Design System

**Status: komplett**

> Vollständiges visuelles System für dieses Projekt. Wird von Claude vor dem Bauen jeder visuellen Komponente gelesen.

---

## Ästhetische Richtung

Warm, locker, selbstbewusst — wie der Laden selbst. Kein hipster-minimales Café-Template, sondern ein Ort mit Charakter. Die handgezeichneten Illustrationen geben der Seite Seele, die warmen Braun- und Cremetöne kommen direkt aus dem Laden (Holztheke, helle Wände, Papierlampe). Der Rot-Akzent von den Punkten auf der Signature-Lampe setzt gezielte Highlights. Die Italic der Barlow Condensed bringt die lockere, nahbare Persönlichkeit — überall wo Frohnatur charmant, humorvoll oder persönlich klingt. Insgesamt: ein Nachbarschafts-Café das sich anfühlt wie ein guter Freund — entspannt aber mit Qualitätsanspruch.

---

## Farbpalette

```css
:root {
  /* Braun — kräftiger, tiefer als V1. Anker: #4C1D03 */
  --color-brown-dark: #4C1D03;
  --color-brown-mid: #7A3518;
  --color-brown-warm: #9B5E35;

  /* Creme — ruhiger Gegenpol, unverändert */
  --color-cream: #F5ECD7;
  --color-cream-light: #FAF6ED;
  --color-cream-warm: #EDE0C8;

  /* Rot-Akzent — aus den Punkten auf der Signature-Lampe */
  --color-red: #C8402D;
  --color-red-dark: #A83520;
  --color-red-soft: #D4654F;

  /* Text — matched brown-dark */
  --color-text: #4C1D03;
  --color-text-muted: #7A5A3E;

  /* Basis */
  --color-white: #FFFBF5;
}
```

### Verwendungsregeln

- **Brown Dark** dominiert: Logo, Headlines (Regular), Footer-Hintergrund, dunkelste Flächen
- **Brown Mid + Brown Warm** für sekundäre Texte, Hover-States, Trennelemente
- **Cream-Töne** wechseln zwischen Sektionen: cream-light als Standard-Hintergrund, cream für Akzent-Sektionen, cream-warm für wärmere Bereiche
- **Rot** nur als Akzent: CTA-Buttons, aktive Navigation, Italic-Highlights auf dunklem Hintergrund, Section-Tags. Nie flächig.
- **Red Dark** als Hover-State auf CTA-Buttons, oder in dunkleren Kontexten wo das volle Rot zu hell wirkt
- **Red Soft** als Alternative auf dunklem Hintergrund (besser lesbar als das volle Rot)
- Maximal 3 Farben gleichzeitig sichtbar pro Sektion

---

## Typografie

```css
:root {
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

**Display-Font: Barlow Condensed**
- Warum: Kondensiert, kräftig, mit einer Italic die echten Charakter hat — passt zum selbstbewussten, lockeren Ton von Frohnatur. Die Italic ist ein zentrales Gestaltungsmittel.
- Gewichte: 400, 500, 600, 700, 800 (Regular + Italic)
- Einsatz Regular: Headlines, Navigation, Buttons, Logo-Text
- Einsatz Italic: Hero-Akzente, Taglines, Zitate, charmante Einzeiler, Section-Tags — überall wo Persönlichkeit durchkommen soll
- **Italic-Regel:** Regular = Fakt, Italic = Charakter. Im Zusammenspiel erzählen sie die Story.

**Body-Font: DM Sans**
- Warum: Sauber, modern, humanistisch — ruhiger Gegenpart zur markanten Display-Font. Gut lesbar in allen Größen.
- Gewichte: 400, 500, 600, 700 (Regular + Italic)
- Einsatz: Fließtext, Captions, Formulare, kleine UI-Elemente

### Größenhierarchie

| Rolle | Mobile | Desktop | Font | Gewicht | Style |
|-------|--------|---------|------|---------|-------|
| Hero-Headline | 3rem | 5rem | Display | 800 | Regular oder Italic |
| Sektions-Headline | 1.75rem | 2.25rem | Display | 700 | Regular (Italic alternativ) |
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

## Visuelle Sprache

### Illustrationen (Zentrales Design-Element)

Die handgezeichneten Kaffee-Charaktere ("Cafe Collection - New Friends") SIND die visuelle Identität von Frohnatur. Sie ersetzen Fotos wo möglich und geben der Seite ihren einzigartigen Charakter.

- **Stil:** Braun auf Creme, organische Linienführung, charmant-verspielt
- **Einsatz:** Hero-Begleitung, Sektions-Illustrationen, Galerie-Elemente, Footer-Dekoration
- **Verfügbar:** `Charakter1.svg`, `Chrakter2.svg`, Instagram-Profilbild (Charakter an Espressomaschine)

### Die Lampe (Signature-Element)

Die Papierlampe mit den roten Punkten ist das physische Wahrzeichen des Ladens. Freigestellt verfügbar als `Lampe.png` / `lampe-optimized.webp`. Kann als visuelles Echo auf der Website eingesetzt werden — als Dekoration, Trennungselement oder atmosphärisches Detail.

## Motion & Animation

Bewegung fühlt sich an wie der erste Schluck Kaffee am Morgen — sanft, warm, wach machend. Nicht hektisch, nicht dramatisch. Illustrationen dürfen subtil atmen oder schweben, der Rest bewegt sich nur wenn der Nutzer scrollt.

---

## Fotografie / Bildstil

- **Stimmung:** Warm, natürlich, wie durchs Fenster des Cafés fotografiert
- **Farbbehandlung:** Warme Töne, leicht entsättigt, passend zur Creme/Braun-Palette
- **Perspektive:** Nah dran, menschlich, nicht inszeniert
- **Was vermeiden:** Kalte/blaue Töne, Stock-Ästhetik, perfekt inszenierte Flat-Lays
- **Status:** Keine eigenen Fotos vorhanden. Illustrationen ersetzen Fotos wo möglich. Bei Bedarf KI-generierte Bilder im warmen, natürlichen Stil.

### Bild-Inventar

| # | Dateiname | Format | Verwendung | Status |
|---|-----------|--------|-----------|--------|
| 1 | logo.svg | SVG | Navigation, Footer, Favicon | ✅ |
| 2 | Charakter1.svg | SVG | Sektions-Illustration | ✅ |
| 3 | Chrakter2.svg | SVG | Sektions-Illustration | ✅ |
| 4 | Lampe.png / lampe-optimized.webp | PNG/WebP | Dekoration, Signature-Element | ✅ |
| 5 | innenraum.webp | WebP | Innenraum-Sektion (KI-generiert, Platzhalter) | ✅ |
| 6 | Atmosphäre-Bilder | — | Story / Galerie | ⬜ (Unsplash-Platzhalter) |

---

## Sektions-Blueprint

### Hero
- **Inhalt:** Name "Frohnatur", Tagline ("Your Local Hangout"), kurzer Einzeiler (Kaffee + Frühstück + Naturwein), CTA "Komm vorbei", Öffnungszeiten + Adresse sofort sichtbar
- **Conversion-Rolle:** Sofort wissen wo, was, wann — und Lust machen vorbeizukommen
- **Illustrationen:** Charakter-Illustration als Hero-Begleitung

### Angebot
- **Inhalt:** Was gibt es? Kaffee (Specialty Coffee, La Marzocco), Frühstück, Kuchen & Süßes. Drei Bereiche visuell aufgeteilt.
- **Conversion-Rolle:** Neugier wecken, Angebot entdecken lassen. Optional: Link zur Speisekarte.

### Story
- **Inhalt:** Wer steckt dahinter? Was macht Frohnatur besonders? Das Agnesviertel, die Philosophie, der Name.
- **Conversion-Rolle:** Verbindung aufbauen, Sympathie erzeugen. Die Illustrationen erzählen die Geschichte.

### Galerie
- **Inhalt:** Visueller Einblick in den Laden. Illustrationen, die Lampe, Atmosphäre.
- **Conversion-Rolle:** "Da will ich hin." Visuelle Überzeugung.

### Kontakt
- **Inhalt:** Adresse (Click-to-Maps), Öffnungszeiten, Telefon (Click-to-Call), Instagram-Links, Karte (DSGVO-konform)
- **Conversion-Rolle:** Letzte Hürde entfernen — alle Infos für den Besuch.

### Footer
- **Inhalt:** Logo, Adresse, Öffnungszeiten, Social Links, Impressum, Datenschutz
- **Conversion-Rolle:** Abschluss, rechtliche Pflicht, sekundäre Navigation

---

## Spacing-System

```css
:root {
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
  --space-section: 8rem;
}
```

---

## Referenzen & Inspiration

| Referenz | Was davon übernehmen |
|----------|---------------------|
| Instagram @frohnatur.coffeeshop | Tonalität, Humor, visuelle Sprache |
| Die Papierlampe | Signature-Element, Rot-Akzent-Herleitung |
| Illustrationen "Cafe Collection" | Zentrales Design-Element, Braun-auf-Creme-Stil |
| Font-Referenz (Instagram Story) | Barlow Condensed Italic Richtung |
| Laden-Fotos | Farbwelt (Holz, Creme, Fliesen), Atmosphäre |
