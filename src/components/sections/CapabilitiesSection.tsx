import { Braces, Database, GitBranch, Sparkles } from 'lucide-react';
import type { CapabilityContent } from '../../content/types';
import { SectionReveal } from '../motion/SectionReveal';

const icons = [Braces, Database, Sparkles, GitBranch];

export function CapabilitiesSection({ content }: { content: CapabilityContent }) {
  return (
    <SectionReveal id="build" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="capability-grid">
        {content.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <article className={`capability capability--${item.key}`} key={item.key}>
              <div className="capability__top"><Icon aria-hidden="true" /><span>{item.category}</span></div>
              <h3>{item.title}</h3><p>{item.description}</p>
              <ul className="chips" aria-label={item.category}>{item.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              <svg className="module-connector" viewBox="0 0 260 48" aria-hidden="true"><path d="M4 24H78L94 8h66l16 16h80" /></svg>
            </article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
