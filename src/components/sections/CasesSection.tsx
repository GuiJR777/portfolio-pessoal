import type { CasesContent } from '../../content/types';
import { SectionReveal } from '../motion/SectionReveal';

function ArchitectureDiagram({ index }: { index: number }) {
  return (
    <svg className="case-diagram" viewBox="0 0 420 190" aria-hidden="true">
      <path d="M30 95h80m54 0h92m54 0h78" />
      {[30, 137, 283, 390].map((x, nodeIndex) => <circle key={x} cx={x} cy="95" r={nodeIndex === index % 4 ? 18 : 12} />)}
      <path d="M137 83V38h146v45M137 107v45h146v-45" />
      <rect x="191" y="68" width="38" height="54" rx="8" />
    </svg>
  );
}

export function CasesSection({ content }: { content: CasesContent }) {
  return (
    <SectionReveal id="cases" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="cases-list">
        {content.items.map((item, index) => (
          <article className="case" key={item.company} data-testid="professional-case">
            <div className="case__header"><span>{String(index + 1).padStart(2, '0')}</span><p>{item.company}</p><h3>{item.title}</h3></div>
            <ArchitectureDiagram index={index} />
            <dl className="case__layers">
              <div><dt>{content.labels.problem}</dt><dd>{item.problem}</dd></div>
              <div><dt>{content.labels.solution}</dt><dd>{item.solution}</dd></div>
              <div className="case__impact"><dt>{content.labels.impact}</dt><dd>{item.impact}</dd></div>
            </dl>
            <ul className="chips" aria-label={content.labels.stack}>{item.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
