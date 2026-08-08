import type { AnalyticsEvent } from '../content/types';
import type { Locale } from './locale';

interface AnalyticsPayload {
  locale: Locale;
  project_slug?: string;
}

declare global {
  interface Window {
    portfolioAnalytics?: (event: AnalyticsEvent, payload: AnalyticsPayload) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload): void {
  window.portfolioAnalytics?.(event, payload);
}
