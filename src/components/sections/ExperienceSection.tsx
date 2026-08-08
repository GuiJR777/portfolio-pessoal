import type { ConversionCtaContent, ExperienceContent } from '../../content/types';
import type { Locale } from '../../lib/locale';
import { SectionReveal } from '../motion/SectionReveal';
import { ConversionCta } from '../ui/ConversionCta';

export function ExperienceSection({ content, cta, locale }: { content: ExperienceContent; cta: ConversionCtaContent; locale: Locale }) {
  return (
    <SectionReveal id="experience" eyebrow={content.eyebrow} title={content.title} intro={content.intro} theme="light">
      <ol className="timeline">{content.items.map((item, index) => <li key={`${item.company}-${item.period}`} data-testid="experience-item"><span className="timeline__marker">{String(content.items.length - index).padStart(2, '0')}</span><div><p>{item.period} · {item.model}</p><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.summary}</p></div></li>)}</ol>
      <ConversionCta content={cta} locale={locale} source="experience" />
    </SectionReveal>
  );
}
