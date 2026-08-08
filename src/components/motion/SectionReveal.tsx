import { m, useInView, useReducedMotion } from 'motion/react';
import { useRef, type PropsWithChildren } from 'react';

import type { SectionId } from '../../content/types';

interface SectionRevealProps extends PropsWithChildren {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro?: string;
  theme?: 'dark' | 'light' | 'connect';
  className?: string;
}

export function SectionReveal({
  id,
  eyebrow,
  title,
  intro,
  theme = 'dark',
  className = '',
  children,
}: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const reducedMotion = useReducedMotion();
  const ready = reducedMotion || inView;

  return (
    <m.section
      ref={ref}
      id={id}
      className={`section section--${theme} ${className}`}
      aria-labelledby={`${id}-title`}
      initial={false}
      animate={{ opacity: ready ? 1 : 0.68 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.42 }}
    >
      <div className="container">
        <m.header
          className="section-heading"
          initial={false}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p>{intro}</p>}
        </m.header>
        <m.div
          className="section__content"
          initial={false}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 14 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.48, delay: reducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </m.div>
      </div>
    </m.section>
  );
}
