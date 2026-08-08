import { ArrowDownRight, Download } from 'lucide-react';
import { m } from 'motion/react';

import type { HeroContent } from '../../content/types';
import { profileLinks } from '../../content/links';
import { trackEvent } from '../../lib/analytics';
import type { Locale } from '../../lib/locale';
import { IdentityCode } from '../ui/IdentityCode';

interface HeroProps {
  content: HeroContent;
  locale: Locale;
}

export function Hero({ content, locale }: HeroProps) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid container">
        <m.div
          className="hero__copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">{content.title}</h1>
          <p className="hero__intro">{content.intro}</p>
          <p className="hero__reinforcement">{content.reinforcement}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact" onClick={() => trackEvent('contact_cta_clicked', { locale, cta_source: 'hero' })}>
              {content.primaryCta}<ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href={profileLinks.resume} download onClick={() => trackEvent('resume_downloaded', { locale })}>
              <Download size={18} aria-hidden="true" />{content.secondaryCta}
            </a>
          </div>
          <p className="availability"><span aria-hidden="true" />{content.availability}</p>
        </m.div>
        <div className="hero__visual">
          <m.div className="identity-panel" layoutId="identity-panel" aria-label="Python identity">
            <div className="identity-panel__label">identity.py / build.complete</div>
            <IdentityCode />
          </m.div>
          <picture className="hero__portrait">
            <source srcSet="/images/guilherme-640.avif 640w, /images/guilherme.avif 1000w" sizes="(max-width: 767px) 92vw, 42vw" type="image/avif" />
            <source srcSet="/images/guilherme-640.webp 640w, /images/guilherme.webp 1000w" sizes="(max-width: 767px) 92vw, 42vw" type="image/webp" />
            <img
              src="/images/guilherme.png"
              alt={content.portraitAlt}
              width="1000"
              height="1000"
              fetchPriority="high"
              sizes="(max-width: 767px) 92vw, 42vw"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
