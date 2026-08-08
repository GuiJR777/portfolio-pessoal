import { Download, Menu, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';

import type { SiteContent } from '../../content/types';
import { profileLinks } from '../../content/links';
import { trackEvent } from '../../lib/analytics';
import type { Locale } from '../../lib/locale';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

interface HeaderProps {
  content: SiteContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

interface HeaderNavLinkProps {
  item: SiteContent['header']['nav'][number];
  active: boolean;
  onSelect: (id: SiteContent['header']['nav'][number]['id']) => void;
}

function HeaderNavLink({ item, active, onSelect }: HeaderNavLinkProps) {
  return (
    <a
      href={`#${item.id}`}
      aria-current={active ? 'location' : undefined}
      onClick={() => onSelect(item.id)}
    >
      {item.label}
    </a>
  );
}

export function Header({ content, locale, onLocaleChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => window.location.hash.slice(1) || 'home');
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = content.header.nav
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -62%', threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [content.header.nav]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuTriggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const trapMenuFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    );
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="wordmark" href="#home" aria-label={`${content.header.brand} — ${content.header.descriptor}`}>
          <span>{content.header.brand}</span>
          <span className="wordmark__cursor" aria-hidden="true" />
        </a>
        <nav className="site-nav" aria-label={content.a11y.navigation}>
          {content.header.nav.slice(0, 6).map((item) => (
            <HeaderNavLink key={item.id} item={item} active={activeSection === item.id} onSelect={setActiveSection} />
          ))}
        </nav>
        <div className="site-header__actions">
          <LanguageSwitcher
            activeLocale={locale}
            label={content.a11y.languageSelector}
            activeLabel={content.a11y.activeLanguage}
            onChange={onLocaleChange}
          />
          <a className="header-resume" href={profileLinks.resume} download onClick={() => trackEvent('resume_downloaded', { locale })}>
            <Download size={16} aria-hidden="true" />
            <span>{content.header.resume}</span>
          </a>
          <a className="button button--primary header-contact" href="#contact">
            {content.header.cta}
          </a>
          <button
            ref={menuTriggerRef}
            className="mobile-menu-trigger"
            type="button"
            aria-label={content.a11y.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={content.a11y.navigation}
          onKeyDown={trapMenuFocus}
        >
          <div className="mobile-menu__bar">
            <span>{content.header.descriptor}</span>
            <button ref={closeButtonRef} type="button" aria-label={content.a11y.closeMenu} onClick={closeMenu}>
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={content.a11y.navigation}>
            {content.header.nav.map((item) => (
              <HeaderNavLink
                key={item.id}
                item={item}
                active={activeSection === item.id}
                onSelect={(id) => {
                  setActiveSection(id);
                  closeMenu();
                }}
              />
            ))}
          </nav>
          <div className="mobile-menu__actions">
            <a className="button button--secondary" href={profileLinks.resume} download onClick={() => trackEvent('resume_downloaded', { locale })}>
              <Download size={18} aria-hidden="true" />{content.header.resume}
            </a>
            <a className="button button--primary" href="#contact" onClick={closeMenu}>{content.header.cta}</a>
          </div>
        </div>
      )}
    </header>
  );
}
