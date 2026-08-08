import type { TechnologiesContent } from '../../content/types';
import { SectionReveal } from '../motion/SectionReveal';

export function TechnologiesSection({ content }: { content: TechnologiesContent }) {
  return (
    <SectionReveal id="stack" eyebrow={content.eyebrow} title={content.title} intro={content.intro} theme="light">
      <div className="technology-manifest">{content.groups.map((group, index) => <article key={group.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></article>)}</div>
    </SectionReveal>
  );
}
