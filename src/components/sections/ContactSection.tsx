import { Mail, MessageCircle } from 'lucide-react';
import type { ContactContent } from '../../content/types';
import type { Locale } from '../../lib/locale';
import { profileLinks } from '../../content/links';
import { SectionReveal } from '../motion/SectionReveal';
import { ExternalLink } from '../ui/ExternalLink';
import { ContactForm } from './ContactForm';

export function ContactSection({ content, newTabLabel, locale }: { content: ContactContent; newTabLabel: string; locale: Locale }) {
  return (
    <SectionReveal id="contact" eyebrow={content.eyebrow} title={content.title} intro={content.intro} theme="connect">
      <div className="contact-layout">
        <ContactForm content={content} locale={locale} />
        <aside className="contact-channels" aria-label={`${content.emailCta} / LinkedIn`}>
          <p>input.ready</p>
          <a href={profileLinks.email}><Mail aria-hidden="true" />{content.emailCta}</a>
          <ExternalLink href={profileLinks.linkedin} label={content.linkedinCta} newTabLabel={newTabLabel} event="linkedin_opened" locale={locale}><MessageCircle aria-hidden="true" />{content.linkedinCta}</ExternalLink>
          <span>Florianópolis · UTC-3</span>
        </aside>
      </div>
    </SectionReveal>
  );
}
