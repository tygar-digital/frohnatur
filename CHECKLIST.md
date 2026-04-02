# Projekt-Checkliste

Status-Board für das gesamte Projekt. Wird laufend aktualisiert — Claude proaktiv, Jan bei Review.
Bei "status?" wird diese Checkliste gelesen und offene Punkte gemeldet.

Vor Go-Live muss jeder Punkt abgehakt oder explizit mit Begründung als N/A markiert sein.

---

## Brand & Design

- [ ] DESIGN.md vollständig (Farben, Fonts, Stimmung, Bildstil, Referenzen)
- [ ] Farbpalette als CSS Custom Properties definiert
- [ ] Typografie gewählt und lokal eingebunden (kein CDN)
- [ ] Design-Richtung von Jan approved
- [ ] Referenz-Websites recherchiert und studiert (min. 3-5 Konkurrenten/Branche)
- [ ] Design Inspo-Materialien (Logos, Fotos, Screenshots) eingearbeitet
- [ ] Favicon erstellt und eingebunden
- [ ] OG-Image erstellt (1200x630px)

## Content

- [ ] Alle Sektionstexte geschrieben (keine Platzhalter mehr)
- [ ] Keine TODOs/TBDs in content.json oder Komponenten
- [ ] Meta-Titles für alle Seiten (unique, < 60 Zeichen)
- [ ] Meta-Descriptions für alle Seiten (unique, < 160 Zeichen)
- [ ] Alt-Texte auf allen Bildern (beschreibend, nicht "Bild von...")
- [ ] Kontaktdaten korrekt und vollständig (Adresse, Telefon, E-Mail)
- [ ] Öffnungszeiten korrekt (falls relevant)

## Seiten

- [ ] Homepage
- [ ] Impressum (rechtlich vollständig — Name, Adresse, Kontakt, Handelsregister wenn relevant)
- [ ] Datenschutzerklärung (DSGVO-konform, alle eingesetzten Dienste aufgeführt)
- [ ] 404-Seite (gestaltet, nicht Standard)
- [ ] Weitere Seiten: __________ (nach Projektbedarf eintragen)

## Komponenten

Jede Komponente muss auf Mobile UND Desktop funktionieren.

- [ ] Navigation (Mobile Hamburger + Desktop)
- [ ] Hero-Sektion
- [ ] Content-Sektionen (alle laut DESIGN.md Blueprint)
- [ ] Kontakt / Booking-Sektion
- [ ] Footer (mit allen rechtlichen Links)
- [ ] Cookie-Banner / Consent (falls nötig)

## Responsive Design

- [ ] 375px (Mobile) — kein Overflow, kein abgeschnittener Text
- [ ] 768px (Tablet) — Layout-Übergänge sauber
- [ ] 1024px (kleiner Desktop) — keine leeren Flächen
- [ ] 1280px+ (Desktop) — volle Wirkung, max-width begrenzt
- [ ] Touch-Targets mindestens 44px auf Mobile
- [ ] Kein horizontaler Scroll auf keinem Breakpoint
- [ ] Schriftgrößen lesbar auf allen Viewports

## Performance

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90
- [ ] Bilder optimiert (WebP, max. 200KB pro Bild, Hero max. 400KB)
- [ ] Fonts lokal geladen (kein Google Fonts CDN — DSGVO)
- [ ] Lazy Loading für Bilder unterhalb des Folds
- [ ] Hero-Bild eager-loaded
- [ ] Keine render-blockierenden Ressourcen

## SEO

- [ ] Schema.org Structured Data (LocalBusiness mit name, address, telephone, openingHours, geo, image, url, priceRange)
- [ ] sitemap.xml generiert und erreichbar
- [ ] robots.txt vorhanden und korrekt
- [ ] Canonical URLs gesetzt
- [ ] Alt-Texte auf allen Bildern
- [ ] Heading-Hierarchie korrekt (ein H1 pro Seite, logische Struktur)
- [ ] Interne Verlinkung sinnvoll

## Accessibility

- [ ] Farbkontraste WCAG AA (4.5:1 für Text, 3:1 für große Texte)
- [ ] Keyboard-Navigation funktioniert (Tab-Reihenfolge logisch)
- [ ] Focus-Indikatoren sichtbar
- [ ] Semantisches HTML (header, main, nav, footer, article, section)
- [ ] Screen-Reader getestet (oder zumindest: ARIA-Labels wo nötig)
- [ ] Bilder: dekorative mit alt="", inhaltliche mit beschreibendem alt

## Legal / DSGVO

- [ ] Impressum vollständig und korrekt
- [ ] Datenschutzerklärung aktuell (alle Dienste aufgeführt)
- [ ] Keine externen Fonts via CDN (lokal hosten)
- [ ] Kein Google Maps iframe ohne Consent (statische Karte oder Zwei-Klick)
- [ ] Keine Tracking-Skripte ohne Consent
- [ ] Cookie-freie Analytics (Plausible/Umami) oder Cookie-Banner
- [ ] Kontaktformular: Hinweis auf Datenverarbeitung + SSL
- [ ] Impressum und Datenschutz von jeder Seite erreichbar (Footer-Links)

## Infrastruktur

- [ ] GitHub Repository erstellt (tygar-web Org)
- [ ] Vercel Projekt verbunden (Auto-Deploy bei Push)
- [ ] Cloudflare DNS konfiguriert
- [ ] SSL-Zertifikat aktiv (HTTPS)
- [ ] Domain zeigt auf Vercel
- [ ] MX-Records korrekt (falls E-Mail existiert)
- [ ] www → non-www Redirect (oder umgekehrt)

## Analytics & Monitoring

- [ ] Plausible oder Umami installiert und funktionsfähig
- [ ] Google Search Console verifiziert
- [ ] Sitemap in Search Console eingereicht
- [ ] Analytics-Dashboard erreichbar und trackt Besuche

## Go-Live

- [ ] Finaler visueller Review auf allen Breakpoints (375px, 768px, 1280px)
- [ ] qa-check.sh Script durchgelaufen und alle Checks bestanden
- [ ] Alle internen Links funktionieren (keine 404s)
- [ ] Click-to-Call funktioniert auf Mobile
- [ ] Click-to-Maps funktioniert
- [ ] Kontaktformular getestet (Nachricht kommt an)
- [ ] Booking-Integration getestet (falls vorhanden)
- [ ] Ladezeit auf 3G akzeptabel (kritischer Content sofort sichtbar)
- [ ] Client-Abnahme erhalten
- [ ] DNS umgestellt und Site live
- [ ] Alte Website deaktiviert oder Redirect eingerichtet (falls Migration)

---

## Notizen

<!-- Platz für projektspezifische Anmerkungen, Sonderwünsche, Abweichungen -->
