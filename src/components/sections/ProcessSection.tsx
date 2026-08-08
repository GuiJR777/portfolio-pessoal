import { Check } from 'lucide-react';
import { m, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import type { ProcessContent } from '../../content/types';
import { SectionReveal } from '../motion/SectionReveal';

export function ProcessSection({ content }: { content: ProcessContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();
  return (
    <SectionReveal id="process" eyebrow={content.eyebrow} title={content.title} theme="light">
      <div className="process-pipeline" ref={ref}>
        <svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true"><m.path d="M10 20H990" initial={false} animate={{ pathLength: inView || reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0.01 : 1.1, ease: [0.22, 1, 0.36, 1] }} /></svg>
        <ol>{content.steps.map((step, index) => <li key={step.title} data-testid="process-step"><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        <p className="ready-to-ship"><Check size={18} aria-hidden="true" />{content.ready}</p>
      </div>
    </SectionReveal>
  );
}
