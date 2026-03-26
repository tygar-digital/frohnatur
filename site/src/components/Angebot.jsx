import CoffeeBean from './CoffeeBean.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

/* ═══════════════════════════════════
   ICONS — Potrace-vektorisierte Illustrationen
   Cream-warm (#EDE0C8) auf brown-dark Hintergrund
═══════════════════════════════════ */

function CoffeeIcon({ className }) {
  return (
    <img
      className={className}
      src="/assets/coffee-icon.svg"
      alt=""
      aria-hidden="true"
    />
  );
}

function FruehstueckIcon({ className }) {
  return (
    <img
      className={className}
      src="/assets/breakfast-icon.svg"
      alt=""
      aria-hidden="true"
    />
  );
}

function KuchenIcon({ className }) {
  return (
    <img
      className={className}
      src="/assets/cake-icon.svg"
      alt=""
      aria-hidden="true"
    />
  );
}

/* ═══════════════════════════════════
   ANGEBOT-DATEN
═══════════════════════════════════ */

const offerings = [
  {
    icon: CoffeeIcon,
    title: 'Specialty Coffee',
    tagline: 'Nicht einfach Kaffee.',
    description: 'Gebrüht auf einer La Marzocco, mit Bohnen die wir sorgfältig auswählen. Espresso, Flat White, Filterkaffee — oder einfach das, worauf du gerade Lust hast.',
  },
  {
    icon: FruehstueckIcon,
    title: 'Frühstück',
    tagline: 'Für die, die morgens Zeit haben.',
    description: 'Bowls, belegte Brote, Granola — alles frisch, alles mit Liebe. Das Frühstück, für das sich das Aufstehen lohnt.',
  },
  {
    icon: KuchenIcon,
    title: 'Kuchen & Süßes',
    tagline: 'Gebacken mit zu viel Liebe.',
    description: 'Hausgemachte Kuchen, Zimtschnecken und alles was dazu gehört. Wechselt täglich — komm vorbei und lass dich überraschen.',
  },
];

/* ═══════════════════════════════════
   ANGEBOT COMPONENT
═══════════════════════════════════ */

export default function Angebot() {
  const sectionRef = useScrollAnimation('angebot-visible', '.angebot-animate');

  return (
    <section
      ref={sectionRef}
      id="angebot"
      className="relative bg-brown-dark texture-grain py-10 md:py-14 lg:py-16 overflow-hidden"
    >
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:max-w-[1400px] xl:mx-auto xl:w-full xl:px-20">

        {/* ── Section Tag — aligned with column content ── */}
        <h2 className="angebot-animate angebot-tag block font-display italic font-semibold text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.15em] text-cream-warm mb-8 md:mb-12 text-center">
          Was wir machen
        </h2>

        {/* ── Drei Bereiche — gleich groß ── */}
        <div className="angebot-grid grid grid-cols-1 md:grid-cols-3 gap-0 md:items-stretch">
          {offerings.map((item, i) => (
            <div
              key={item.title}
              className="angebot-animate angebot-item relative"
              style={{ '--angebot-delay': `${i * 0.12}s` }}
            >
              {/* Trennlinie — zwischen Items */}
              {i > 0 && (
                <div className="angebot-divider" aria-hidden="true" />
              )}

              <div className="angebot-item-inner">
                <div className="flex justify-center md:justify-center mb-4 md:mb-5">
                  <item.icon className="angebot-icon w-[156px] h-[156px] md:w-[182px] md:h-[182px] lg:w-[208px] lg:h-[208px] text-cream-warm" />
                </div>

                <h3 className="font-display font-bold text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] uppercase tracking-[-0.01em] leading-[1.1] text-cream-light mb-2 text-center">
                  {item.title}
                </h3>

                <p className="font-display italic font-medium text-[1rem] md:text-[1.1rem] lg:text-[1.15rem] text-red-soft mb-3 md:mb-4 text-center">
                  {item.tagline}
                </p>

                <p className="font-body text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] leading-[1.65] text-cream-warm text-center max-w-[320px] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Decorative coffee beans ── */}
      <CoffeeBean className="deco-bean--angebot-1" color="var(--color-cream-warm)" />
      <CoffeeBean className="deco-bean--angebot-2" color="var(--color-cream-warm)" />
      <CoffeeBean className="deco-bean--angebot-3" color="var(--color-cream-warm)" />
      <CoffeeBean className="deco-bean--angebot-4" color="var(--color-cream-warm)" />
      <CoffeeBean className="deco-bean--angebot-5" color="var(--color-cream-warm)" />
    </section>
  );
}
