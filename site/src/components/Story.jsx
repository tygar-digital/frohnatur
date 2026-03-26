import CoffeeBean from './CoffeeBean.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

/* ═══════════════════════════════════
   STORY COMPONENT
   Wer steckt dahinter? Verbindung aufbauen.
═══════════════════════════════════ */

export default function Story() {
  const sectionRef = useScrollAnimation('story-visible', '.story-animate');

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative bg-cream texture-grain py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:max-w-[1400px] xl:mx-auto xl:w-full xl:px-20">

        {/* ── Full Grid: Text (inkl. Headline) + Illustration ── */}
        <div className="md:grid md:grid-cols-[1fr_auto] md:gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Text-Spalte — alles von Tag bis Body ── */}
          <div>
            {/* ── Section Tag ── */}
            <span className="story-animate story-tag block font-display italic font-semibold text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.15em] text-brown-warm mb-6 md:mb-8">
              Unsere Geschichte
            </span>

            {/* ── Headline ── */}
            <h2 className="story-animate font-display font-bold text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3rem] uppercase tracking-[-0.01em] leading-[1.05] text-brown-dark mb-3 md:mb-4 max-w-[600px] lg:max-w-[700px]" style={{ '--story-delay': '0.08s' }}>
              Frohnatur ist<br />
              <em className="italic text-brown-mid">ein Gefühl</em>
            </h2>

            {/* ── Sub-Headline (Italic) ── */}
            <p className="story-animate font-display italic font-medium text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] leading-[1.4] text-brown-warm mb-10 md:mb-14 max-w-[380px] md:max-w-[420px]" style={{ '--story-delay': '0.16s' }}>
              Ein Ort, der sich anfühlt wie der erste Schluck am Morgen.
            </p>

            <div className="max-w-[520px] lg:max-w-[560px]">
              <p className="story-animate font-body text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] leading-[1.65] text-text-muted mb-6 md:mb-8" style={{ '--story-delay': '0.24s' }}>
                Frohnatur — das ist kein ausgedachter Markenname. Das ist eine Haltung. Wir glauben daran, dass ein guter Tag mit einem guten Kaffee anfängt. Und dass der beste Kaffee da getrunken wird, wo man sich wohlfühlt.
              </p>

              {/* ── Pull-Quote ── */}
              <blockquote className="story-animate story-pullquote relative font-display italic font-medium text-[1.15rem] md:text-[1.25rem] lg:text-[1.35rem] leading-[1.35] text-brown-dark pl-5 md:pl-6 mb-6 md:mb-8 max-w-[460px]" style={{ '--story-delay': '0.32s' }}>
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-red opacity-60 rounded-full" aria-hidden="true" />
                „Natural Wine does make hangovers. But we have the cure."
              </blockquote>

              <p className="story-animate font-body text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] leading-[1.65] text-text-muted mb-6 md:mb-0" style={{ '--story-delay': '0.40s' }}>
                Mitten im Agnesviertel, auf der Neusser Straße. Zwischen dem Lärm der Stadt und der Ruhe einer guten Tasse. Specialty Coffee aus der La Marzocco, Frühstück das sich lohnt, Kuchen der zu viel Liebe abbekommen hat — und abends ein Glas Naturwein. Komm so wie du bist.
              </p>
            </div>
          </div>

          {/* ── Illustration ── */}
          <div className="story-animate story-illustration flex justify-center md:justify-end mt-[60px] md:mt-0" style={{ '--story-delay': '0.20s' }}>
            <img
              src="/assets/Chrakter2.svg"
              alt="Frohnatur Charakter — Figur mit Kaffeebohne"
              className="story-character w-[230px] h-auto sm:w-[250px] md:w-[230px] lg:w-[269px] xl:w-[307px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── Decorative coffee beans ── */}
      <CoffeeBean className="deco-bean--story-1" color="var(--color-brown-mid)" />
      <CoffeeBean className="deco-bean--story-2" color="var(--color-brown-dark)" />
      <CoffeeBean className="deco-bean--story-3" color="var(--color-brown-warm)" />
      <CoffeeBean className="deco-bean--story-4" color="var(--color-brown-warm)" />
      <CoffeeBean className="deco-bean--story-5" color="var(--color-brown-mid)" />
    </section>
  );
}
