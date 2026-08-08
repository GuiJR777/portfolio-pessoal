import { ArrowDownRight } from 'lucide-react';

import type { ConversionCtaContent, CtaSource } from '../../content/types';
import { trackEvent } from '../../lib/analytics';
import type { Locale } from '../../lib/locale';

interface ConversionCtaProps {
  content: ConversionCtaContent;
  locale: Locale;
  source: Exclude<CtaSource, 'hero'>;
}

export function ConversionCta({ content, locale, source }: ConversionCtaProps) {
  return (
    <aside className="conversion-cta">
      <p>{content.text}</p>
      <a
        className="button button--primary"
        href="#contact"
        onClick={() => trackEvent('contact_cta_clicked', { locale, cta_source: source })}
      >
        {content.label}<ArrowDownRight size={18} aria-hidden="true" />
      </a>
    </aside>
  );
}
