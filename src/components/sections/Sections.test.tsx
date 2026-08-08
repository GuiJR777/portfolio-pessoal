import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { App } from '../../app/App';
import { ptBR } from '../../content/pt-BR';
import { introSessionKey } from '../motion/IntroOverlay';
import { ProjectsSection } from './ProjectsSection';

describe('portfolio sections', () => {
  it('renders every approved editorial section and the complete professional evidence', () => {
    window.history.replaceState({}, '', '/pt');
    window.sessionStorage.setItem(introSessionKey, 'seen');
    render(<App />);

    const sectionHeadings = [
      ptBR.metrics.title,
      ptBR.capabilities.title,
      ptBR.cases.title,
      ptBR.projects.title,
      ptBR.experience.title,
      ptBR.technologies.title,
      ptBR.process.title,
      ptBR.about.title,
      ptBR.contact.title,
    ];

    for (const heading of sectionHeadings) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
    }

    expect(screen.getAllByTestId('metric')).toHaveLength(6);
    expect(screen.getAllByTestId('professional-case')).toHaveLength(5);
    expect(screen.getAllByTestId('experience-item')).toHaveLength(5);
    expect(screen.getAllByTestId('process-step')).toHaveLength(5);
  });
});

describe('published products carousel', () => {
  it('uses secure external links that announce the new tab', () => {
    render(<ProjectsSection content={ptBR.projects} a11y={ptBR.a11y} locale="pt-BR" />);

    const donateka = screen.getByRole('link', {
      name: /Acessar Donateka.*abre em nova aba/i,
    });
    expect(donateka).toHaveAttribute('target', '_blank');
    expect(donateka).toHaveAttribute('rel', 'noopener noreferrer');
    expect(
      screen.getByAltText(ptBR.projects.live.items[0].imageAlt ?? ''),
    ).toHaveAttribute(
      'sizes',
      '(max-width: 640px) 84vw, (max-width: 1280px) 51vw, 819px',
    );

    const externalLinks = screen.getAllByRole('link');
    for (const link of externalLinks) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('keeps arrows and pagination synchronized without autoplay', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection content={ptBR.projects} a11y={ptBR.a11y} locale="pt-BR" />);

    const carousel = screen.getByRole('region', { name: ptBR.a11y.carouselLabel });
    const track = carousel.querySelector<HTMLElement>('.carousel__track');
    const donateka = screen.getByRole('link', { name: /Acessar Donateka/ });
    const ramiresTech = screen.getByRole('link', { name: /Conhecer a RamiresTech/ });
    const scrollTo = vi.fn();

    expect(track).not.toBeNull();
    if (!track) throw new Error('Carousel track not found');

    Object.defineProperty(track, 'scrollLeft', { configurable: true, value: 40 });
    Object.defineProperty(track, 'scrollTo', { configurable: true, value: scrollTo });
    track.getBoundingClientRect = () => ({
      left: 100,
      right: 700,
      top: 0,
      bottom: 300,
      width: 600,
      height: 300,
      x: 100,
      y: 0,
      toJSON: () => undefined,
    });
    ramiresTech.getBoundingClientRect = () => ({
      left: 500,
      right: 900,
      top: 0,
      bottom: 300,
      width: 400,
      height: 300,
      x: 500,
      y: 0,
      toJSON: () => undefined,
    });

    expect(screen.getByRole('button', { name: 'Ir para o projeto 1' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(donateka).toHaveAttribute('aria-current', 'true');
    expect(donateka).toHaveAttribute('data-active', 'true');

    await user.click(screen.getByRole('button', { name: 'Próximo projeto' }));

    expect(screen.getByRole('button', { name: 'Ir para o projeto 2' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(ramiresTech).toHaveAttribute('aria-current', 'true');
    expect(ramiresTech).toHaveAttribute('data-active', 'true');
    expect(scrollTo).toHaveBeenCalledWith({ left: 340, behavior: 'smooth' });
  });
});
