import CoffeeBean from './CoffeeBean.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { MAPS_URL } from '../data/constants.js';

/* ── Inline SVG Icons ── */

function MapPinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Kontakt() {
  const sectionRef = useScrollAnimation('kontakt-visible', '.kontakt-animate');

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="kontakt-section relative bg-cream-warm texture-grain py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:max-w-[1400px] xl:mx-auto xl:w-full xl:px-20">

        {/* Section Tag */}
        <span className="kontakt-animate kontakt-tag block font-display italic font-semibold text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.15em] text-brown-warm mb-6 md:mb-8">
          Komm vorbei
        </span>

        {/* Headline */}
        <h2
          className="kontakt-animate font-display font-bold italic text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3rem] uppercase tracking-[-0.01em] leading-[1.05] text-brown-dark mb-3 md:mb-4"
          style={{ '--kontakt-delay': '0.08s' }}
        >
          Wir sind hier <span className="text-brown-mid">für dich</span>
        </h2>

        {/* Sub-Headline */}
        <p
          className="kontakt-animate font-display italic font-medium text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] leading-[1.4] text-brown-warm mb-12 md:mb-16"
          style={{ '--kontakt-delay': '0.16s' }}
        >
          Neusser Straße 34, mitten im Agnesviertel.
        </p>

        {/* Grid: Info + Map */}
        <div className="md:grid md:grid-cols-[1fr_1fr] md:gap-12 lg:gap-16 xl:gap-20">

          {/* Left: Info blocks */}
          <div className="space-y-8 md:space-y-10">

            {/* Adresse */}
            <div
              className="kontakt-animate kontakt-card"
              style={{ '--kontakt-delay': '0.24s' }}
            >
              <div className="kontakt-icon-wrap"><MapPinIcon className="kontakt-icon" /></div>
              <div>
                <h3 className="font-display font-bold text-[1.1rem] md:text-[1.2rem] uppercase tracking-[0.02em] text-brown-dark mb-1.5">
                  Adresse
                </h3>
                <p className="font-body text-[0.9rem] md:text-[0.95rem] leading-[1.65] text-text-muted mb-3">
                  Neusser Straße 34<br />
                  50670 Köln · Agnesviertel
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display font-bold text-[0.75rem] md:text-[0.8rem] uppercase tracking-[0.08em] text-red hover:text-red-dark transition-colors duration-200"
                >
                  Route planen
                  <span className="text-[0.85em]" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div
              className="kontakt-animate kontakt-card"
              style={{ '--kontakt-delay': '0.32s' }}
            >
              <div className="kontakt-icon-wrap"><ClockIcon className="kontakt-icon" /></div>
              <div>
                <h3 className="font-display font-bold text-[1.1rem] md:text-[1.2rem] uppercase tracking-[0.02em] text-brown-dark mb-1.5">
                  Öffnungszeiten
                </h3>
                <div className="font-body text-[0.9rem] md:text-[0.95rem] leading-[1.65] text-text-muted">
                  <div className="flex justify-between gap-4 max-w-[260px]">
                    <span>Mo – So</span>
                    <span className="font-medium text-brown-dark">9 – 18 Uhr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Telefon */}
            <div
              className="kontakt-animate kontakt-card"
              style={{ '--kontakt-delay': '0.40s' }}
            >
              <div className="kontakt-icon-wrap"><PhoneIcon className="kontakt-icon" /></div>
              <div>
                <h3 className="font-display font-bold text-[1.1rem] md:text-[1.2rem] uppercase tracking-[0.02em] text-brown-dark mb-1.5">
                  Telefon
                </h3>
                <a
                  href="tel:+49XXXXXXXXXX"
                  className="font-body text-[0.9rem] md:text-[0.95rem] text-text-muted hover:text-red underline underline-offset-2 transition-colors duration-200"
                >
                  +49 XXX XXXXXXX
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div
              className="kontakt-animate kontakt-card"
              style={{ '--kontakt-delay': '0.48s' }}
            >
              <div className="kontakt-icon-wrap"><InstagramIcon className="kontakt-icon" /></div>
              <div>
                <h3 className="font-display font-bold text-[1.1rem] md:text-[1.2rem] uppercase tracking-[0.02em] text-brown-dark mb-1.5">
                  Folge uns
                </h3>
                <div className="flex flex-col gap-1">
                  <a
                    href="https://instagram.com/frohnatur.coffeeshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[0.9rem] md:text-[0.95rem] text-text-muted hover:text-red underline underline-offset-2 transition-colors duration-200"
                  >
                    @frohnatur.coffeeshop
                  </a>
                  <a
                    href="https://instagram.com/frohnatur.bistrooo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[0.85rem] md:text-[0.9rem] text-text-muted opacity-70 hover:text-red hover:opacity-100 underline underline-offset-2 transition-all duration-200"
                  >
                    @frohnatur.bistrooo
                  </a>
                  <a
                    href="https://instagram.com/frohnatur.bar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[0.85rem] md:text-[0.9rem] text-text-muted opacity-70 hover:text-red hover:opacity-100 underline underline-offset-2 transition-all duration-200"
                  >
                    @frohnatur.bar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map placeholder with illustration */}
          <div
            className="kontakt-animate kontakt-map-area mt-12 md:mt-0"
            style={{ '--kontakt-delay': '0.32s' }}
          >
            <div className="kontakt-map-card relative flex flex-col items-center justify-center rounded-xl bg-cream py-12 px-8 md:py-16 md:h-full min-h-[320px]">
              {/* Decorative large map pin — soft icon circle */}
              <div className="soft-icon-circle bg-cream w-[80px] h-[80px] md:w-[92px] md:h-[92px] lg:w-[100px] lg:h-[100px] flex items-center justify-center mb-6">
                <svg className="kontakt-pin w-[40px] md:w-[46px] lg:w-[52px] h-auto text-red opacity-80" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 15 9 15s9-8.25 9-15c0-4.97-4.03-9-9-9zm0 12.75c-2.07 0-3.75-1.68-3.75-3.75S9.93 5.25 12 5.25s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75z" />
                </svg>
              </div>

              {/* Address — large, typographic */}
              <p className="font-display font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] uppercase tracking-[-0.01em] leading-[1.15] text-brown-dark text-center mb-1.5">
                Neusser Str. 34
              </p>
              <p className="font-display italic font-medium text-[0.95rem] md:text-[1.05rem] text-brown-warm text-center mb-6 leading-[1.4]">
                Agnesviertel · Köln
              </p>

              {/* CTA */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-bold text-[0.8rem] lg:text-[0.85rem] tracking-[0.08em] uppercase text-white bg-red px-7 lg:px-8 py-3.5 lg:py-4 rounded-xl no-underline soft-btn focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-[3px]"
              >
                Auf Google Maps anzeigen
                <span className="text-base" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative coffee beans */}
      <CoffeeBean className="deco-bean--kontakt-1" color="var(--color-brown-mid)" />
      <CoffeeBean className="deco-bean--kontakt-2" color="var(--color-brown-dark)" />
      <CoffeeBean className="deco-bean--kontakt-3" color="var(--color-brown-warm)" />
      <CoffeeBean className="deco-bean--kontakt-4" color="var(--color-brown-dark)" />
      <CoffeeBean className="deco-bean--kontakt-5" color="var(--color-brown-warm)" />
    </section>
  );
}
