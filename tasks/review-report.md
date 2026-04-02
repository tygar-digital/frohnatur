# Design & Optical Consistency Review — Frohnatur

**Datum:** 2026-04-03
**Geprüft:** Alle Sektionen, Mobile (375px) + Desktop (1920px), CSS-Inspections

---

## Zusammenfassung

Die Website ist visuell konsistent und gut gebaut. Die Design-Tokens werden sauber durchgezogen. Es gibt keine Layout-Brüche, kein horizontales Scrolling-Problem, und die Typografie-Hierarchie ist einheitlich. Die Hauptprobleme sind inhaltlicher Natur (Platzhalter, irreführendes Bildmaterial) und ein UX-Bug bei der Scroll-Animation.

---

## 🔴 Muss gefixt werden

### 1. Galerie: Rotwein-Foto widerspricht dem Angebot
**Wo:** Galerie-Sektion, erstes/wiederholendes Bild
**Problem:** Zeigt Weingläser mit Rotwein. CLAUDE.md sagt explizit: "Es gibt KEIN Naturwein im Angebot." Das Foto vermittelt einen falschen Eindruck.
**Fix:** Dieses Unsplash-Platzhalter-Foto ersetzen (z.B. mit Kaffee-Latte-Art, Frühstücks-Bowl, oder Kuchen-Nahaufnahme).

### 2. Innenraum-Foto: "CAFE SONNENSCHEIN" sichtbar
**Wo:** Angebot-Sektion, Innenraum-Bild oben
**Problem:** Das KI-generierte Platzhalter-Bild zeigt "CAFE SONNENSCHEIN" auf einer Serviette — ein anderer Café-Name. Peinlich für den Kunden.
**Fix:** Neues KI-Bild generieren ohne fremden Markennamen, oder Bild entfernen bis echte Fotos kommen.

### 3. Scroll-Animation: Inhalte bei Direkt-Navigation unsichtbar
**Wo:** Alle Sektionen
**Problem:** Bei Navigation über Hash-Link (z.B. #kontakt) oder Seitenladung mit tiefem Scroll bleiben Inhalte bei `opacity: 0`, weil der IntersectionObserver den Viewport-Eintritt nicht registriert.
**Fix:** Im `useScrollAnimation` Hook: Beim initialen Mount prüfen, ob Elemente bereits im Viewport sind, und sofort die Visible-Klasse setzen.

---

## 🟠 Sollte gefixt werden

### 4. Telefonnummer-Platzhalter sichtbar
**Wo:** Kontakt-Sektion
**Problem:** "+49 XXX XXXXXXX" ist für den Besucher sichtbar — wirkt unprofessionell.
**Fix:** Telefon-Card ausblenden oder "Telefon folgt" anzeigen, bis die echte Nummer vorliegt.

### 5. "Schliessen" statt "Schließen"
**Wo:** `Galerie.jsx:223` — Lightbox Close-Button aria-label
**Problem:** Schweizer Schreibweise, nicht Hochdeutsch.
**Fix:** `aria-label="Schließen"`

### 6. `!important` in CSS
**Wo:** `kontakt.css:89` — `border-radius: 20px !important`
**Problem:** Code-Smell, unnötig.
**Fix:** Spezifischeren Selektor verwenden.

---

## ✅ Konsistenz-Check: Bestanden

### Typografie

| Element | Erwartet (DESIGN.md) | Tatsächlich | Status |
|---------|---------------------|-------------|--------|
| Section Heading (h2) | Barlow Condensed, 700, uppercase | Alle 4 Sektionen: ✅ identisch | ✅ |
| Section Tag | Barlow Condensed, 600, italic, uppercase, 0.6rem | Alle 4 Sektionen: ✅ identisch | ✅ |
| Body Text | DM Sans, 400, 1rem | Story + Angebot: ✅ identisch (16px, lh 26.4px) | ✅ |
| Sub-Headline (italic) | Barlow Condensed, 500, italic | Story: ✅ (19.2px, lh 26.88px) | ✅ |

### Farben

| Kontext | Erwartet | Tatsächlich | Status |
|---------|----------|-------------|--------|
| Heading auf hellem Grund | brown-dark (#4C1D03) | rgb(76, 29, 3) ✅ | ✅ |
| Heading auf dunklem Grund | cream-light (#FAF6ED) | rgb(250, 246, 237) ✅ | ✅ |
| Body auf hellem Grund | text-muted (#7A5A3E) | rgb(122, 90, 62) ✅ | ✅ |
| Body auf dunklem Grund | cream-warm (#EDE0C8) | rgb(237, 224, 200) ✅ | ✅ |
| Section Tag | brown-warm (#9B5E35) | rgb(155, 94, 53) ✅ | ✅ |

### Soft UI Cards

| Property | Kontakt-Card | DESIGN.md | Status |
|----------|-------------|-----------|--------|
| Background | rgba(cream, 0.45) | rgba(cream, 0.45) | ✅ |
| Shadow | 0 4px 20px rgba(brown-dark, 0.06) | 0 4px 20px | ✅ |

### Navigation

| State | Logo | Links | Status |
|-------|------|-------|--------|
| Hero (dark bg) | brightness(1.15) cream | cream text | ✅ |
| Scrolled (glass nav) | brightness(0.3) dark | brown-dark text | ✅ |

### Spacing

- Section-Padding: Konsistent (`py-20 md:py-28 lg:py-32`)
- Content max-width: Konsistent (`xl:max-w-[1400px]`)
- Horizontal padding: Konsistent (`px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20`)

### Animation

- Alle Sektionen nutzen den gleichen `useScrollAnimation` Hook
- `prefers-reduced-motion` wird in allen CSS-Dateien respektiert
- Stagger-Delays folgen dem gleichen Pattern (CSS-Variable `--*-delay`)

### Responsive

- Mobile (375px): Alle Sektionen single-column, kein Overflow ✅
- Desktop (1920px): 3-Column Angebot, 2-Column Story+Kontakt, Film-Strip Gallery ✅
- Nav: Hamburger auf Mobile, Full-Links auf Desktop (md breakpoint) ✅

---

## 📝 Bekannte Platzhalter (Kunden-Daten nötig)

Diese Punkte sind dokumentiert und warten auf Kundendaten:

- Impressum: [Name], [Telefon], [E-Mail], [USt-IdNr.]
- Datenschutz: [Name], [Telefon], [E-Mail]
- Kontakt Telefon: "+49 XXX XXXXXXX"
- Schema.org Telefon: "+49-XXX-XXXXXXX"
- Galerie: 5 Unsplash-Platzhalter
- OG-Image: Datei existiert nicht (`/assets/og-image.jpg`)
