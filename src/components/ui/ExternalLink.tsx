import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import type { AriaAttributes, PropsWithChildren } from 'react';

import type { AnalyticsEvent } from '../../content/types';
import type { Locale } from '../../lib/locale';
import { trackEvent } from '../../lib/analytics';

interface ExternalLinkProps extends PropsWithChildren {
  href: string;
  label: string;
  newTabLabel: string;
  event: AnalyticsEvent;
  locale: Locale;
  projectSlug?: string;
  className?: string;
  ariaCurrent?: AriaAttributes['aria-current'];
  dataActive?: boolean;
}

export function ExternalLink({
  href,
  label,
  newTabLabel,
  event,
  locale,
  projectSlug,
  className,
  ariaCurrent,
  dataActive,
  children,
}: ExternalLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${newTabLabel}`}
      aria-current={ariaCurrent}
      data-active={dataActive ? 'true' : undefined}
      onClick={() => trackEvent(event, { locale, project_slug: projectSlug })}
    >
      {children}
      <ExternalLinkIcon className="external-link__icon" size={17} aria-hidden="true" />
    </a>
  );
}
