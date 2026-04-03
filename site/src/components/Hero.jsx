import { useState, useEffect, useRef } from 'react';
import { MAPS_URL } from '../data/constants.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

/* ═══════════════════════════════════
   HERO COMPONENT — Soft UI
═══════════════════════════════════ */
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const activeSection = useActiveSection(['angebot', 'story', 'galerie', 'kontakt']);

  const [navScrolled, setNavScrolled] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  /* ── Nav background after hero ── */
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Body scroll lock when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Focus trap + ESC for mobile menu ── */
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll('a, button');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    // Focus first link on open
    requestAnimationFrame(() => {
      menuRef.current?.querySelector('a')?.focus();
    });
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  return (
    <section className="relative flex flex-col h-[100svh] overflow-hidden hero-bg-gradient texture-grain pt-9 md:pt-10">

      {/* ── Nav — Glass morphism ── */}
      <nav className={`hero-nav fixed left-0 right-0 ${menuOpen ? 'z-57' : 'z-51'} transition-[top] duration-300 ${navScrolled ? 'top-0' : 'top-[26px]'} px-6 pt-5 sm:px-8 sm:pt-6 md:px-12 md:pt-7 lg:px-16 lg:pt-8 xl:max-w-[1400px] xl:mx-auto xl:w-full xl:px-20`}>
        <div className={`hero-nav-bar flex items-center justify-between px-5 py-3 md:px-6 md:py-3.5 lg:px-8 ${navScrolled && !menuOpen ? 'nav-scrolled' : ''}`}>
          <img
            className={`h-[18px] w-auto lg:h-[18px] transition-all duration-400 ${navScrolled && !menuOpen ? 'brightness-[0.3] opacity-90' : 'brightness-[10]'}`}
            src="/assets/logo.svg"
            alt="Frohnatur"
          />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
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
                className={`hero-nav-link font-display font-semibold text-[0.75rem] tracking-[0.08em] uppercase leading-none no-underline transition-all duration-300 px-2 lg:px-3 py-1.5 rounded-xl ${navScrolled
                  ? (activeSection === link.href.slice(1) ? 'text-brown-dark' : 'text-brown-dark/50 hover:text-brown-dark')
                  : (activeSection === link.href.slice(1) ? 'text-cream-warm' : 'text-cream-warm/50 hover:text-cream-warm')
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Burger — soft circle */}
          <button
            ref={burgerRef}
            className={`flex md:hidden items-center justify-center w-10 h-10 cursor-pointer p-0 relative z-10 border-none focus-visible:outline-2 focus-visible:outline-brown-mid focus-visible:outline-offset-[3px]`}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <div className="flex flex-col justify-center gap-[5px] w-5 h-5">
              <span className={`block w-full h-[2px] rounded-full transition-all duration-300 ease-in-out ${navScrolled && !menuOpen ? 'bg-brown-dark' : 'bg-cream-warm'} ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-full h-[2px] rounded-full transition-all duration-300 ease-in-out ${navScrolled && !menuOpen ? 'bg-brown-dark' : 'bg-cream-warm'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-[2px] rounded-full transition-all duration-300 ease-in-out ${navScrolled && !menuOpen ? 'bg-brown-dark' : 'bg-cream-warm'} ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        ref={menuRef}
        className={`hero-mobile-menu fixed inset-0 z-56 flex flex-col justify-center items-center gap-8 text-center transition-opacity duration-350 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
              className="font-display font-bold text-[1.5rem] tracking-[-0.01em] uppercase text-cream no-underline hover:text-cream-warm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="font-body text-[0.85rem] font-medium text-cream-warm leading-[1.8]">
          Neusser Str. 34<br />
          Agnesviertel, Köln
          <span className="block mt-2 pt-2 border-t border-cream/15">
            Mo–So 9–18h
          </span>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display font-bold text-[0.8rem] tracking-[0.08em] uppercase text-cream bg-brown-dark px-7 py-3.5 rounded-[14px] no-underline soft-btn"
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
      </div>

      {/* ── Content area — flex layout for even spacing ── */}
      <div className="hero-layout flex flex-col items-center flex-1 z-5 pt-[28vh] sm:pt-[26vh] md:pt-[24vh] lg:pt-[22vh] pb-4 px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Spacer top */}
        <div className="flex-1" />

        {/* ── Text block ── */}
        <div className="hero-content flex flex-col items-center text-center max-w-[80vw] md:max-w-none">
          <h1 className="hero-headline font-display font-[800] italic uppercase leading-[0.95] tracking-[-0.02em] text-cream mb-2 md:mb-3 text-[3.5rem] sm:text-[4rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[4.8rem]">
            <span className="md:hidden block mb-0.5">Your Local</span>
            <span className="md:hidden block hero-headline-outline">Hangout</span>
            <span className="hidden md:inline whitespace-nowrap">Your Local </span>
            <span className="hidden md:inline hero-headline-outline whitespace-nowrap">Hangout</span>
          </h1>
          <p className="hero-subtitle font-display font-normal text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] uppercase tracking-[0.15em] leading-none text-cream-warm/70 whitespace-nowrap">
            Open all day 9–18h
          </p>
        </div>

        {/* Spacer bottom */}
        <div className="flex-1" />

        {/* ── Character + Scroll indicator ── */}
        <div className="hero-illustration flex flex-col items-center">
          <img
            src="/assets/Charakter1.svg"
            alt="Frohnatur Charakter — Figur mit Kaffeetasse"
            loading="eager"
            className="hero-char-img"
          />
          <div className="hero-scroll flex flex-col items-center gap-[0.35rem] mt-2" aria-hidden="true">
            <span className="font-display italic font-medium text-[0.65rem] tracking-[0.06em] text-cream-warm opacity-60">
              Entdecken
            </span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </div>

    </section>
  );
}
