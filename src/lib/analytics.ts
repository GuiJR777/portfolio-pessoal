import type { AnalyticsEvent, CtaSource } from '../content/types';
import type { Locale } from './locale';

interface AnalyticsPayload {
  locale: Locale;
  project_slug?: string;
  cta_source?: CtaSource;
}

declare global {
  interface Window {
    portfolioAnalytics?: (event: AnalyticsEvent, payload: AnalyticsPayload) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload): void {
  window.portfolioAnalytics?.(event, payload);
}
