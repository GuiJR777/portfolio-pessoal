import type { Locale } from '../../lib/locale';

const options: ReadonlyArray<{ locale: Locale; label: string; name: string }> = [
  { locale: 'pt-BR', label: 'PT', name: 'Português' },
  { locale: 'en-US', label: 'EN', name: 'English' },
  { locale: 'es-LATAM', label: 'ES', name: 'Español' },
];

interface LanguageSwitcherProps {
  activeLocale: Locale;
  label: string;
  activeLabel: string;
  onChange: (locale: Locale) => void;
}

export function LanguageSwitcher({
  activeLocale,
  label,
  activeLabel,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {options.map((option) => {
        const active = option.locale === activeLocale;
        return (
          <button
            key={option.locale}
            className="language-switcher__button"
            type="button"
            aria-pressed={active}
            aria-label={`${option.label} — ${option.name}${active ? `, ${activeLabel}` : ''}`}
            onClick={() => onChange(option.locale)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
