import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently in view via IntersectionObserver.
 * Returns the id of the active section (e.g. 'angebot', 'story').
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}
