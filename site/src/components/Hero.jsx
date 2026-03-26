import { useState } from 'react';
import CoffeeBean from './CoffeeBean.jsx';
import { MAPS_URL } from '../data/constants.js';

/* ═══════════════════════════════════
   HERO COMPONENT
   Quelle: Website/hero-final.html (1:1)
═══════════════════════════════════ */
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <section className="relative flex flex-col h-[100svh] overflow-hidden bg-cream-light texture-grain pt-9 md:pt-10">

      {/* ── Decorative coffee beans ── */}
      <CoffeeBean className="deco-bean--hero-1" color="var(--color-brown-mid)" />
      <CoffeeBean className="deco-bean--hero-2" color="var(--color-brown-dark)" />
      <CoffeeBean className="deco-bean--hero-3" color="var(--color-brown-warm)" />
      <CoffeeBean className="deco-bean--hero-4" color="var(--color-brown-mid)" />
      <CoffeeBean className="deco-bean--hero-5" color="var(--color-brown-dark)" />
      <CoffeeBean className="deco-bean--hero-6" color="var(--color-brown-warm)" />

      {/* ── Nav ── */}
      <nav className="hero-nav relative z-51 flex items-start justify-between px-6 pt-5 sm:px-8 sm:pt-6 md:px-12 md:pt-7 lg:px-16 lg:pt-8 xl:max-w-[1400px] xl:mx-auto xl:w-full xl:px-20">
        <img
          className="h-5 w-auto mt-[0.2rem] lg:h-6"
          src="/assets/logo.svg"
          alt="Frohnatur"
        />

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8">
            {[
              { href: '#angebot', label: 'Angebot' },
              { href: '#story', label: 'Story' },
              { href: '#galerie', label: 'Galerie' },
              { href: '#kontakt', label: 'Kontakt' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-display font-bold text-[0.65rem] lg:text-[0.7rem] tracking-[0.08em] uppercase text-text-muted no-underline hover:text-brown-dark transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="font-body text-[0.6rem] lg:text-[0.7rem] font-medium text-text-muted tracking-[0.02em] text-right leading-relaxed pl-8 lg:pl-10 border-l border-[rgba(139,115,85,0.2)]">
            Neusser Str. 34<br />
            Agnesviertel, Köln<br />
            <span className="block mt-[0.2rem] pt-[0.2rem] border-t border-[rgba(139,115,85,0.2)]">
              Mo–Fr 9–18h · Sa–So 10–18h
            </span>
          </div>
        </div>

        {/* Burger — mobile only */}
        <button
          className={`flex md:hidden flex-col justify-center gap-[5px] w-7 h-7 bg-transparent border-none cursor-pointer p-0 relative z-52 mt-[0.1rem]`}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className={`block w-full h-[2px] bg-brown-dark rounded-sm transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-full h-[2px] bg-brown-dark rounded-sm transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-[2px] bg-brown-dark rounded-sm transition-transform duration-300 ease-in-out ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-50 bg-cream-light flex flex-col justify-center items-center gap-8 text-center transition-opacity duration-350 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-4">
          {[
            { href: '#angebot', label: 'Angebot' },
            { href: '#story', label: 'Story' },
            { href: '#galerie', label: 'Galerie' },
            { href: '#kontakt', label: 'Kontakt' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setTimeout(() => {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="font-display font-bold text-[1.5rem] tracking-[-0.01em] uppercase text-brown-dark no-underline hover:text-red transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="font-body text-[0.85rem] font-medium text-text-muted leading-[1.8]">
          Neusser Str. 34<br />
          Agnesviertel, Köln
          <span className="block mt-2 pt-2 border-t border-[rgba(139,115,85,0.2)]">
            Mo–Fr 9–18h · Sa–So 10–18h
          </span>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display font-bold text-[0.8rem] tracking-[0.08em] uppercase text-white bg-red px-7 py-3.5 rounded-lg no-underline"
        >
          Komm vorbei →
        </a>
      </div>

      {/* ── Lampe — hängt von der Decke ── */}
      <div className="hero-lamp-wrapper">
        <div className="hero-lamp-cable" />
        <img
          src="/assets/lampe-optimized.webp"
          alt="Papierlampe — das Wahrzeichen von Frohnatur"
          loading="eager"
        />
        <div className="hero-lamp-glow" />
      </div>

      {/* ── Main content ── */}
      <div className="hero-content absolute top-[48%] left-0 right-0 -translate-y-1/2 flex flex-col px-6 z-5 sm:px-8 md:px-12 md:right-auto md:max-w-[58%] lg:px-16 lg:max-w-[55%] xl:max-w-[1400px] xl:mx-auto xl:px-20 xl:right-0">
        <h1 className="hero-headline font-display font-[800] text-[3rem] sm:text-[3.5rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem] leading-[1.0] tracking-[-0.02em] uppercase text-brown-dark mb-3">
          Your Local<br />
          <em className="italic text-brown-mid block">Hangout</em>
        </h1>
        <p className="hero-subtitle font-display italic font-medium text-[1rem] sm:text-[1.15rem] lg:text-[1.3rem] leading-[1.35] text-brown-warm max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[400px] mb-5">
          Specialty Coffee, Frühstück &amp; Süßes — von morgens bis abends.
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta inline-flex items-center gap-2 self-start font-display font-bold text-[0.8rem] lg:text-[0.85rem] tracking-[0.08em] uppercase text-white bg-red px-7 lg:px-8 py-3.5 lg:py-4 rounded-lg no-underline transition-all duration-250 ease-in-out hover:bg-red-dark hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-[3px]"
        >
          Komm vorbei
          <span className="text-base transition-transform duration-250 ease-in-out group-hover:translate-x-[3px]">→</span>
        </a>
      </div>

      {/* ── Character illustration ── */}
      <div className="hero-illustration absolute bottom-8 right-[calc(0.5rem+8px)] z-3 flex justify-end md:right-12 md:bottom-[12%] lg:right-16 lg:bottom-[8%] xl:right-[max(calc(5rem+8px),calc((100vw-1400px)/2+5rem+8px))]">
        <img
          src="/assets/Charakter1.svg"
          alt="Frohnatur Charakter — Figur mit Kaffeetasse"
          loading="eager"
        />
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-scroll absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-[0.35rem]" aria-hidden="true">
        <span className="font-display italic font-medium text-[0.65rem] tracking-[0.06em] text-text-muted opacity-60">
          Entdecken
        </span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
}
