# Bild-Prompts — Cafe Frohnatur (Galerie)

## Visueller Stil — "Neighborhood Coffeeshop, warm & authentic"

Warm, natuerlich, wie durchs Fenster des Cafes fotografiert. Leicht entsaettigt, passend zur Creme/Braun-Palette. Nah dran, menschlich, nicht inszeniert. Smartphone-Foto-Feeling.

## Generator

- Modell: Google Gemini / Imagen 3
- Chat-URL: _TBD (nach Generierung eintragen)_
- Generiert am: _TBD_

## Referenz — Echtes Frohnatur-Interieur

Aus Instagram-Fotos (@frohnatur.coffeeshop):
- Geometrische schwarz-weisse Bodenfliesen (Stern/Kreuz-Muster)
- Grosse cremefarbene Papierlampe (Akari-Stil) ueber der Theke
- Holztheke mit dunkler Holzfront, La Marzocca Espressomaschine
- Cremefarbene/hellgraue Waende mit Durchgangs-Boegen
- Warme Kugelwandleuchten
- Grau-blaue Barhocker, weisse runde Tische
- Glas-Gebaeckvitrine, dunkle Menueuetafeln an der Wand

## Bild-Inventar

| # | Dateiname | Format | Pixel | Verwendung | Status |
|---|-----------|--------|-------|-----------|--------|
| 1 | interior.webp | 3:4 | 1200x1600 | Galerie Film-Roll | ⬜ |
| 2 | latte.webp | 3:4 | 1200x1600 | Galerie Film-Roll | ⬜ |
| 3 | pastry.webp | 3:4 | 1200x1600 | Galerie Film-Roll | ⬜ |
| 4 | seats.webp | 3:4 | 1200x1600 | Galerie Film-Roll | ⬜ |

## Generierungs-Reihenfolge

1. interior (setzt Raum-Referenz)
2. seats (zweiter Raum-Shot, Konsistenz)
3. latte (Detail-Shot)
4. pastry (Detail-Shot)

---

## Prompts

### 1. interior.webp — Cafe-Interieur (Gesamtansicht)

```
3:4 portrait photo of a small neighborhood coffee shop interior. Cream-colored walls with archway doorframes, geometric black and white star-pattern floor tiles, large cream rice-paper pendant lamp (Akari-style) hanging from ceiling, wooden counter with dark wood front panel, warm globe wall lights casting soft glow, round white tables with gray-blue upholstered bar stools, glass pastry display case, dark menu boards on wall. Warm intimate atmosphere, natural daylight mixed with warm artificial light, shot at eye level. Like a photo taken by a colleague who knows photography basics. NO text, NO logos, NO branding. No cinematic color grading, no dramatic lighting, no artificial bokeh.
```

### 2. seats.webp — Sitzbereich

```
3:4 portrait photo of a seating area in a small neighborhood coffee shop. Modern gray-blue upholstered bar stools and chairs around round white tables. Distinctive geometric black and white star-cross pattern floor tiles prominently visible. Cream-colored walls with archway doorframe in background. Warm wall-mounted globe lights, large cream Akari-style paper pendant lamp visible above. Intimate cozy atmosphere, natural daylight mixed with warm light. Shot from seated eye level. Like a photo taken by a colleague who knows photography basics. NO text, NO logos. No cinematic color grading, no dramatic lighting, no artificial bokeh, no people.
```

### 3. latte.webp — Latte Art Close-up

```
3:4 portrait close-up of a latte art coffee in a simple white ceramic cup on a round white table. Geometric black and white star-pattern floor tiles visible blurred below. Warm overhead light from a cream paper pendant lamp casting soft shadow. Wooden table edge visible. Casual overhead angle slightly off-center as if taken by a friend. Natural warm lighting, cream and brown color palette. Like a photo taken by a colleague who knows photography basics. NO text, NO logos. No cinematic color grading, no dramatic lighting, no artificial bokeh.
```

### 4. pastry.webp — Gebaeck in der Vitrine

```
3:4 portrait photo of fresh pastries and cakes displayed in a glass pastry case at a coffee shop counter. Wooden counter top visible, professional espresso machine partially visible in background. Cream-colored walls, warm globe wall light in soft focus behind. Natural casual angle as if leaning over the counter to look. Warm golden lighting, slightly imperfect arrangement. Like a photo taken by a colleague who knows photography basics. Warm brown and cream tones. NO text, NO logos. No cinematic color grading, no dramatic lighting, no artificial bokeh, no styled props.
```

---

## Mapping

| # | Gemini-Hash | Inhalt (visuell) | Ziel-Datei | Kopiert? |
|---|------------|-----------------|------------|----------|
| 1 | _TBD_ | Interieur Gesamtansicht | galerie/interior.webp | ⬜ |
| 2 | _TBD_ | Sitzbereich | galerie/seats.webp | ⬜ |
| 3 | _TBD_ | Latte Art | galerie/latte.webp | ⬜ |
| 4 | _TBD_ | Gebaeck Vitrine | galerie/pastry.webp | ⬜ |

## Nachbearbeitung

```bash
# PNG → WebP konvertieren (Qualitaet 85)
cd site/public/assets/galerie/
for f in *.png; do cwebp -q 85 "$f" -o "${f%.png}.webp"; done

# Dimensionen pruefen
for f in *.webp; do echo "$f:"; sips -g pixelWidth -g pixelHeight "$f"; done
```
