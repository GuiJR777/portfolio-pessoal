import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { App } from './App';
import { introSessionKey } from '../components/motion/IntroOverlay';

function setReducedMotion(matches: boolean): void {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string): MediaQueryList => ({
      matches: query === '(prefers-reduced-motion: reduce)' && matches,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }),
  );
}

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  delete window.portfolioAnalytics;
});

describe('application shell', () => {
  it('renders the approved locale from the route with one main heading', () => {
    window.history.replaceState({}, '', '/en');
    window.sessionStorage.setItem(introSessionKey, 'seen');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'From ambiguous problems to production software.',
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(document.documentElement).toHaveAttribute('lang', 'en-US');
  });

  it('normalizes an unlocalized entry route to the resolved locale', () => {
    window.history.replaceState({}, '', '/#projects');
    window.localStorage.setItem('portfolio.locale', 'es-LATAM');
    window.sessionStorage.setItem(introSessionKey, 'seen');

    render(<App />);

    expect(window.location.pathname).toBe('/es');
    expect(window.location.hash).toBe('#projects');
    expect(document.documentElement).toHaveAttribute('lang', 'es-LATAM');
  });

  it('changes language without losing the active section hash', async () => {
    const user = userEvent.setup();
    window.history.replaceState({}, '', '/pt#cases');
    window.sessionStorage.setItem(introSessionKey, 'seen');

    render(<App />);
    await user.click(screen.getByRole('button', { name: /EN/ }));

    expect(window.location.pathname).toBe('/en');
    expect(window.location.hash).toBe('#cases');
    expect(window.localStorage.getItem('portfolio.locale')).toBe('en-US');
    expect(document.documentElement).toHaveAttribute('lang', 'en-US');
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'From ambiguous problems to production software.',
      }),
    ).toBeInTheDocument();
  });

  it('emits the stable analytics contract when the language changes', async () => {
    const user = userEvent.setup();
    const analytics = vi.fn();
    window.portfolioAnalytics = analytics;
    window.history.replaceState({}, '', '/pt');
    window.sessionStorage.setItem(introSessionKey, 'seen');

    render(<App />);
    await user.click(screen.getByRole('button', { name: /ES/ }));

    expect(analytics).toHaveBeenCalledWith('language_changed', { locale: 'es-LATAM' });
  });

  it('opens an accessible mobile dialog and restores focus when it closes', async () => {
    const user = userEvent.setup();
    window.history.replaceState({}, '', '/pt');
    window.sessionStorage.setItem(introSessionKey, 'seen');

    render(<App />);
    const trigger = screen.getByRole('button', { name: 'Abrir menu' });
    await user.click(trigger);

    expect(screen.getByRole('dialog', { name: 'Navegação' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog', { name: 'Navegação' })).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});

describe('identity introduction', () => {
  it('types the identity source character by character with a visible cursor', async () => {
    window.history.replaceState({}, '', '/pt');

    render(<App />);

    const code = screen.getByTestId('identity-intro-code');
    expect(code).not.toHaveTextContent('from');
    expect(screen.getByTestId('identity-intro-cursor')).toBeInTheDocument();

    await waitFor(() => expect(code).toHaveTextContent('f'));
    expect(code).not.toHaveTextContent(
      'class GuilhermeRamires(SoftwareEngineer):',
    );
  });

  it('plays once per session and can be skipped without moving focus', async () => {
    const user = userEvent.setup();
    window.history.replaceState({}, '', '/pt');
    const firstVisit = render(<App />);

    expect(screen.getByTestId('identity-intro')).toBeInTheDocument();
    expect(window.sessionStorage.getItem(introSessionKey)).toBe('seen');

    await user.click(screen.getByRole('button', { name: 'Pular animação' }));
    await waitFor(() => {
      expect(screen.queryByTestId('identity-intro')).not.toBeInTheDocument();
    }, { timeout: 2500 });

    firstVisit.unmount();
    render(<App />);
    expect(screen.queryByTestId('identity-intro')).not.toBeInTheDocument();
  });

  it('skips typing and morphing for reduced motion', () => {
    window.history.replaceState({}, '', '/pt');
    setReducedMotion(true);
    render(<App />);

    expect(screen.queryByTestId('identity-intro')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Python identity')).toHaveTextContent(
      'class GuilhermeRamires(SoftwareEngineer):',
    );
  });
});
