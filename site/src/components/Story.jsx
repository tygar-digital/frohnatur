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
      className="relative bg-cream texture-grain warm-glow py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:max-w-[1400px] xl:mx-auto xl:w-full xl:px-20">

        {/* ── Full Grid: Text (inkl. Headline) + Illustration ── */}
        <div className="md:grid md:grid-cols-[1fr_auto] md:gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Text-Spalte — alles von Tag bis Body ── */}
          <div>
            {/* ── Section Tag with decorative accent ── */}
            <div className="story-animate story-tag flex items-center gap-3 mb-6 md:mb-8">
              <span className="story-accent-line" aria-hidden="true" />
              <span className="block font-display italic font-semibold text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.15em] text-brown-warm">
                Unsere Geschichte
              </span>
            </div>

            {/* ── Headline ── */}
            <h2 className="story-animate font-display font-bold text-[1.75rem] sm:text-[2.1rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3rem] uppercase tracking-[-0.01em] leading-[1.05] text-brown-dark mb-3 md:mb-4 max-w-[600px] lg:max-w-[700px]" style={{ '--story-delay': '0.08s' }}>
              Frohnatur ist <span className="text-brown-mid">ein Gefühl</span>
            </h2>

            {/* ── Sub-Headline (Italic) ── */}
            <p className="story-animate font-display italic font-medium text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] leading-[1.4] text-brown-warm mb-10 md:mb-14 max-w-[380px] md:max-w-[420px]" style={{ '--story-delay': '0.16s' }}>
              Ein Ort, der sich anfühlt wie der erste Schluck am Morgen.
            </p>

            <div className="max-w-[520px] lg:max-w-[560px]">
              <p className="story-animate font-body text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] leading-[1.65] text-text-muted mb-6 md:mb-8" style={{ '--story-delay': '0.24s' }}>
                Frohnatur — das ist kein ausgedachter Markenname. Das ist eine Haltung. Wir glauben daran, dass ein guter Tag mit einem guten Kaffee anfängt. Und dass der beste Kaffee da getrunken wird, wo man sich wohlfühlt.
              </p>

              <p className="story-animate font-body text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] leading-[1.65] text-text-muted mb-6 md:mb-0" style={{ '--story-delay': '0.32s' }}>
                Mitten im Agnesviertel, auf der Neusser Straße. Zwischen dem Lärm der Stadt und der Ruhe einer guten Tasse. Specialty Coffee aus der La Marzocco, Frühstück das sich lohnt und Kuchen der zu viel Liebe abbekommen hat. Komm so wie du bist.
              </p>
            </div>
          </div>

          {/* ── Illustration with warm glow ── */}
          <div className="story-animate story-illustration relative flex justify-center md:justify-end mt-[60px] md:mt-0" style={{ '--story-delay': '0.20s' }}>
            <div className="story-illustration-glow" aria-hidden="true" />
            <img
              src="/assets/Chrakter2.svg"
              alt="Frohnatur Charakter — Figur mit Kaffeebohne"
              className="story-character relative z-10 w-[230px] h-auto sm:w-[250px] md:w-[230px] lg:w-[269px] xl:w-[307px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
