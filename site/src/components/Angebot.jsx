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
      className="relative angebot-bg-fade texture-grain pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10 overflow-hidden -mt-px"
    >
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:max-w-[1400px] xl:mx-auto xl:w-full xl:px-20">

        {/* ── Section Tag ── */}
        <div className="angebot-animate angebot-tag flex items-center gap-3 mb-6 md:mb-8">
          <span className="section-accent-line section-accent-line--dark" aria-hidden="true" />
          <span className="block font-display italic font-semibold text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.15em] text-cream-warm">
            Was wir machen
          </span>
        </div>

        {/* ── Section Headline ── */}
        <h2 className="angebot-animate font-display font-bold text-[1.75rem] sm:text-[2.1rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3rem] uppercase tracking-[-0.01em] leading-[1.05] text-cream-light mb-10 md:mb-14">
          Unser <span className="text-cream-warm">Angebot</span>
        </h2>

        {/* ── Drei Bereiche — gleich groß ── */}
        <div className="angebot-grid grid grid-cols-1 lg:grid-cols-3 gap-0 lg:items-stretch">
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
                <div className="flex justify-center md:justify-center mb-1 md:mb-2">
                  <item.icon className="angebot-icon w-[132px] h-[132px] md:w-[156px] md:h-[156px] lg:w-[182px] lg:h-[182px] text-brown-warm" />
                </div>

                <h3 className="font-display font-bold text-[1.75rem] sm:text-[1.85rem] md:text-[2rem] lg:text-[2.25rem] uppercase tracking-[-0.01em] leading-[1.1] text-brown-dark mb-2 text-center">
                  {item.title}
                </h3>

                <p className="font-display italic font-medium text-[1rem] md:text-[1.1rem] lg:text-[1.15rem] text-brown-mid mb-3 md:mb-4 text-center">
                  {item.tagline}
                </p>

                <p className="font-body text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] leading-[1.65] text-brown-warm text-center max-w-[320px] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
