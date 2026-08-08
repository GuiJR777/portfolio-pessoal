import { domAnimation, LazyMotion } from 'motion/react';
import { useEffect, useState } from 'react';

import { contentByLocale } from '../content';
import { Header } from '../components/layout/Header';
import { BuildRail } from '../components/layout/BuildRail';
import { Footer } from '../components/layout/Footer';
import { IntroOverlay } from '../components/motion/IntroOverlay';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { CasesSection } from '../components/sections/CasesSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TechnologiesSection } from '../components/sections/TechnologiesSection';
import {
  getBrowserLocale,
  setBrowserLocale,
  toLocale,
  type Locale,
} from '../lib/locale';
import { useMetadata } from '../hooks/useMetadata';
import { trackEvent } from '../lib/analytics';

export function App() {
  const [locale, setLocale] = useState<Locale>(getBrowserLocale);
  const content = contentByLocale[locale];
  useMetadata(locale, content.seo);

  useEffect(() => {
    document.documentElement.lang = locale;
    const routeLocale = toLocale(window.location.pathname.split('/').filter(Boolean)[0]);
    if (!routeLocale) setBrowserLocale(locale);
  }, [locale]);

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    setBrowserLocale(nextLocale);
    setLocale(nextLocale);
    trackEvent('language_changed', { locale: nextLocale });
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <a className="skip-link" href="#main-content">{content.a11y.skipToContent}</a>
      <Header content={content} locale={locale} onLocaleChange={changeLocale} />
      <main id="main-content" tabIndex={-1}>
        <Hero content={content.hero} locale={locale} />
        <MetricsSection content={content.metrics} />
        <CapabilitiesSection content={content.capabilities} />
        <CasesSection content={content.cases} />
        <ProjectsSection content={content.projects} a11y={content.a11y} locale={locale} />
        <ExperienceSection content={content.experience} />
        <TechnologiesSection content={content.technologies} />
        <ProcessSection content={content.process} />
        <AboutSection content={content.about} />
        <ContactSection content={content.contact} newTabLabel={content.a11y.newTab} locale={locale} />
      </main>
      <Footer content={content.footer} a11y={content.a11y} locale={locale} />
      <BuildRail />
      <IntroOverlay labels={content.a11y} />
    </LazyMotion>
  );
}
