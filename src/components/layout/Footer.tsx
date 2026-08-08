import { Code2, Mail, MessageCircle } from 'lucide-react';
import type { FooterContent, AccessibilityContent } from '../../content/types';
import type { Locale } from '../../lib/locale';
import { profileLinks } from '../../content/links';
import { ExternalLink } from '../ui/ExternalLink';

export function Footer({ content, a11y, locale }: { content: FooterContent; a11y: AccessibilityContent; locale: Locale }) {
  return (
    <footer className="site-footer"><div className="container"><div><strong>{content.line}</strong><p>{content.closing}</p></div><nav aria-label="Social"><a href={profileLinks.email}><Mail aria-hidden="true" />Email</a><ExternalLink href={profileLinks.linkedin} label="LinkedIn" newTabLabel={a11y.newTab} event="linkedin_opened" locale={locale}><MessageCircle aria-hidden="true" />LinkedIn</ExternalLink><ExternalLink href={profileLinks.github} label="GitHub" newTabLabel={a11y.newTab} event="github_opened" locale={locale}><Code2 aria-hidden="true" />GitHub</ExternalLink></nav><div className="site-footer__bottom"><code>{content.availability}</code><span>© {new Date().getFullYear()} · {content.rights}</span></div></div></footer>
  );
}
