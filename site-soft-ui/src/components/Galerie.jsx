import { useState, useEffect, useRef, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

/* ═══════════════════════════════════
   GALERIE — Film Roll
   Horizontaler Film-Strip mit Auto-Scroll,
   Sprocket-Holes und analogem Kino-Feel.
═══════════════════════════════════ */

/* Platzhalter-Bilder (Unsplash) — werden durch echte Fotos vom Café ersetzt */
const photos = [
  { id: 'interior', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', alt: 'Cafe-Interieur (Platzhalter)', caption: 'Platzhalter — echtes Foto folgt' },
  { id: 'latte', src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', alt: 'Latte Art (Platzhalter)', caption: 'Platzhalter — echtes Foto folgt' },
  { id: 'pastry', src: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=600&q=80', alt: 'Frische Donuts (Platzhalter)', caption: 'Platzhalter — echtes Foto folgt' },
  { id: 'seats', src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80', alt: 'Sitzbereich (Platzhalter)', caption: 'Platzhalter — echtes Foto folgt' },
  { id: 'cake', src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80', alt: 'Kuchen & Süßes (Platzhalter)', caption: 'Platzhalter — echtes Foto folgt' },
];

/* ── Sprocket Hole (einzelnes Loch) ── */
function SprocketHole() {
  return (
    <span className="filmroll-sprocket" aria-hidden="true" />
  );
}

/* ── Sprocket-Reihe: genug Löcher für die doppelte Strip-Breite ── */
function SprocketRow({ count }) {
  return (
    <div className="filmroll-sprocket-row" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <SprocketHole key={i} />
      ))}
    </div>
  );
}

export default function Galerie() {
  const sectionRef = useScrollAnimation('filmroll-visible', '.filmroll-animate', { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  const stripRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);
  /* ── Drag state ── */
  const dragState = useRef({ isDragging: false, didDrag: false, startX: 0, startTime: 0, duration: 0, stripWidth: 0 });
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  /* ── ESC to close lightbox + focus trap ── */
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setLightbox(null);
        return;
      }
      if (e.key === 'Tab') {
        const overlay = document.querySelector('.filmroll-lightbox-overlay');
        if (!overlay) return;
        const focusable = overlay.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
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
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  /* ── Focus close button on open, restore focus on close ── */
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else {
      document.body.style.overflow = '';
      triggerRef.current?.focus();
      triggerRef.current = null;
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  /* ── Calculate exact scroll distance for seamless loop ── */
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const frames = strip.querySelectorAll('.filmroll-frame');
    if (frames.length < photos.length * 2) return;
    const setWidth = frames[photos.length].offsetLeft - frames[0].offsetLeft;
    strip.style.setProperty('--filmroll-scroll-dist', `-${setWidth}px`);
  }, []);

  /* ── Pointer drag (mouse + touch) ── */
  const handlePointerDown = useCallback((e) => {
    const strip = stripRef.current;
    if (!strip) return;
    const animations = strip.getAnimations();
    if (!animations.length) return;
    const anim = animations[0];
    anim.pause();
    const ds = dragState.current;
    ds.isDragging = true;
    ds.didDrag = false;
    ds.startX = e.clientX;
    ds.startTime = anim.currentTime;
    ds.duration = anim.effect.getTiming().duration;
    ds.stripWidth = strip.scrollWidth / 2;
    strip.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const ds = dragState.current;
    if (!ds.isDragging) return;
    const strip = stripRef.current;
    if (!strip) return;
    const dx = e.clientX - ds.startX;
    if (Math.abs(dx) > 5) ds.didDrag = true;
    const timeShift = (dx / ds.stripWidth) * ds.duration;
    const animations = strip.getAnimations();
    if (!animations.length) return;
    const anim = animations[0];
    anim.currentTime = ((ds.startTime - timeShift) % ds.duration + ds.duration) % ds.duration;
  }, []);

  const handlePointerUp = useCallback(() => {
    const ds = dragState.current;
    ds.isDragging = false;
    const strip = stripRef.current;
    if (!strip) return;
    const animations = strip.getAnimations();
    if (animations.length) animations[0].play();
  }, []);

  /* ── Duplicate photos for seamless loop ── */
  const allPhotos = [...photos, ...photos];
  const sprocketCount = allPhotos.length * 4;

  return (
    <div
      ref={sectionRef}
      id="galerie"
      className="filmroll-section relative overflow-hidden"
    >
      {/* ── Film Strip ── */}
      <div className="filmroll-animate filmroll-strip-wrapper">
        <SprocketRow count={sprocketCount} />

        <div
          ref={stripRef}
          className="filmroll-track"
          role="region"
          aria-label="Foto-Galerie"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {allPhotos.map((photo, i) => (
            <button
              key={`${photo.id}-${i}`}
              className="filmroll-frame"
              onClick={(e) => {
                if (dragState.current.didDrag) { e.preventDefault(); return; }
                triggerRef.current = e.currentTarget;
                setLightbox(photo);
              }}
              aria-label={`${photo.alt} ansehen`}
              type="button"
            >
              <div className="filmroll-frame-border">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="filmroll-frame-img"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>
              <span className="filmroll-caption">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>

        <SprocketRow count={sprocketCount} />
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="filmroll-lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <div className="filmroll-lightbox-content">
            <button
              ref={closeButtonRef}
              className="filmroll-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Schliessen"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="2" x2="16" y2="16" />
                <line x1="16" y1="2" x2="2" y2="16" />
              </svg>
            </button>

            <img
              src={lightbox.src.replace('w=600', 'w=1200')}
              alt={lightbox.alt}
              className="filmroll-lightbox-img"
            />

            <p className="filmroll-lightbox-caption">
              <span className="font-display italic font-medium text-[0.95rem] md:text-[1.05rem] text-cream-warm/80">
                {lightbox.caption}
              </span>
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
