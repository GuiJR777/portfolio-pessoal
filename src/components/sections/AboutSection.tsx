import type { AboutContent } from '../../content/types';
import { SectionReveal } from '../motion/SectionReveal';

export function AboutSection({ content }: { content: AboutContent }) {
  return (
    <SectionReveal id="about" eyebrow={content.eyebrow} title={content.title} theme="light" className="about-section">
      <div className="about-layout"><div>{content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><ul>{content.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></div>
    </SectionReveal>
  );
}
