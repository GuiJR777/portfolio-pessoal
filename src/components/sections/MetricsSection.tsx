import type { ConversionCtaContent, MetricsContent } from '../../content/types';
import type { Locale } from '../../lib/locale';
import { SectionReveal } from '../motion/SectionReveal';
import { ConversionCta } from '../ui/ConversionCta';

export function MetricsSection({ content, cta, locale }: { content: MetricsContent; cta: ConversionCtaContent; locale: Locale }) {
  return (
    <>
      <SectionReveal id="impact" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
        <div className="metrics-grid">
          {content.items.map((metric) => (
            <article key={`${metric.company}-${metric.value}`} className="metric" data-testid="metric">
              <strong>{metric.value}</strong><span>{metric.company}</span><p>{metric.context}</p>
            </article>
          ))}
        </div>
        <ConversionCta content={cta} locale={locale} source="impact" />
      </SectionReveal>
      <section className="company-strip" id="companies" aria-label={content.companyStrip}>
        <div className="container">
          <p>{content.companyStrip}</p>
          <ul aria-label="Companies">
            {['Delfos', 'Softplan', 'DOJO', 'QuintoAndar', 'Spinver'].map((company) => <li key={company}>{company}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
