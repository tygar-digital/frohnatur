/* ═══════════════════════════════════
   COFFEE BEAN SCATTER — Site-wide decoration
   Renders beans across the full page height
   with varying positions, sizes, rotations.
═══════════════════════════════════ */

import CoffeeBean from './CoffeeBean.jsx';

const beans = [
  // Top zone (0–15%)
  { top: '2%',   left: '7%',   w: 18, rot: -42, op: 0.10, color: 'var(--color-brown-warm)' },
  { top: '5%',   right: '4%',  w: 24, rot: 65,  op: 0.08, color: 'var(--color-brown-mid)' },
  { top: '11%',  left: '85%',  w: 14, rot: -18, op: 0.12, color: 'var(--color-brown-dark)' },
  { top: '14%',  left: '42%',  w: 16, rot: 35,  op: 0.07, color: 'var(--color-brown-warm)' },

  // Upper-mid zone (18–35%)
  { top: '19%',  right: '8%',  w: 30, rot: -55, op: 0.09, color: 'var(--color-brown-mid)' },
  { top: '22%',  left: '3%',   w: 20, rot: 48,  op: 0.11, color: 'var(--color-brown-dark)' },
  { top: '27%',  left: '92%',  w: 16, rot: -72, op: 0.08, color: 'var(--color-brown-warm)' },
  { top: '31%',  left: '15%',  w: 36, rot: 22,  op: 0.06, color: 'var(--color-brown-mid)' },
  { top: '34%',  right: '18%', w: 14, rot: -38, op: 0.10, color: 'var(--color-brown-warm)' },

  // Mid zone (38–55%)
  { top: '39%',  left: '5%',   w: 22, rot: 70,  op: 0.09, color: 'var(--color-cream-warm)' },
  { top: '42%',  right: '3%',  w: 28, rot: -25, op: 0.08, color: 'var(--color-cream-warm)' },
  { top: '46%',  left: '55%',  w: 18, rot: 52,  op: 0.07, color: 'var(--color-brown-mid)' },
  { top: '50%',  left: '8%',   w: 40, rot: -60, op: 0.06, color: 'var(--color-brown-warm)' },
  { top: '53%',  right: '12%', w: 16, rot: 33,  op: 0.10, color: 'var(--color-cream-warm)' },

  // Lower-mid zone (58–75%)
  { top: '59%',  right: '5%',  w: 20, rot: -45, op: 0.09, color: 'var(--color-brown-mid)' },
  { top: '63%',  left: '4%',   w: 32, rot: 58,  op: 0.07, color: 'var(--color-brown-dark)' },
  { top: '67%',  left: '78%',  w: 14, rot: -30, op: 0.11, color: 'var(--color-brown-warm)' },
  { top: '71%',  left: '25%',  w: 22, rot: 75,  op: 0.06, color: 'var(--color-cream-warm)' },
  { top: '74%',  right: '20%', w: 44, rot: -15, op: 0.05, color: 'var(--color-brown-mid)' },

  // Bottom zone (78–95%)
  { top: '79%',  left: '6%',   w: 26, rot: 40,  op: 0.09, color: 'var(--color-brown-warm)' },
  { top: '83%',  right: '7%',  w: 18, rot: -68, op: 0.10, color: 'var(--color-brown-dark)' },
  { top: '87%',  left: '60%',  w: 20, rot: 28,  op: 0.08, color: 'var(--color-brown-mid)' },
  { top: '91%',  left: '3%',   w: 34, rot: -50, op: 0.07, color: 'var(--color-brown-warm)' },
  { top: '95%',  right: '15%', w: 16, rot: 62,  op: 0.09, color: 'var(--color-cream-warm)' },
];

export default function CoffeeBeanScatter() {
  return (
    <div className="bean-scatter-layer" aria-hidden="true">
      {beans.map((b, i) => {
        /* Scale beans down on mobile: clamp between 65% and 100% of original */
        const minW = Math.round(b.w * 0.65);
        const size = `clamp(${minW}px, ${b.w * 0.06}vw + ${minW * 0.5}px, ${b.w}px)`;
        return (
          <span
            key={i}
            className="bean-scatter"
            style={{
              position: 'absolute',
              top: b.top,
              ...(b.left != null ? { left: b.left } : {}),
              ...(b.right != null ? { right: b.right } : {}),
              width: size,
              height: size,
              transform: `rotate(${b.rot}deg)`,
              opacity: b.op,
              pointerEvents: 'none',
            }}
          >
            <CoffeeBean color={b.color} />
          </span>
        );
      })}
    </div>
  );
}
