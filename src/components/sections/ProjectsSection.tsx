import { ArrowLeft, ArrowRight, Boxes, Gamepad2 } from 'lucide-react';
import { useRef, useState, type KeyboardEvent } from 'react';

import type { AccessibilityContent, ProjectLink, ProjectsContent } from '../../content/types';
import type { Locale } from '../../lib/locale';
import { FocusImage } from '../ui/FocusImage';
import { ExternalLink } from '../ui/ExternalLink';
import { SectionReveal } from '../motion/SectionReveal';

function LiveProjectCard({ item, active, a11y, locale }: { item: ProjectLink; active: boolean; a11y: AccessibilityContent; locale: Locale }) {
  return (
    <ExternalLink className="live-project" href={item.url} label={item.cta} newTabLabel={a11y.newTab} event={item.event} locale={locale} projectSlug={item.slug} ariaCurrent={active ? 'true' : undefined} dataActive={active}>
      <div className="browser-frame"><span /><span /><span /><small>{new URL(item.url).hostname}</small></div>
      {item.image && item.imageAlt && <FocusImage className="live-project__image" src={item.image} webpSrc={item.imageWebp} avifSrc={item.imageAvif} alt={item.imageAlt} width={1440} height={900} sizes="(max-width: 640px) 84vw, (max-width: 1280px) 51vw, 819px" active={active} />}
      <div className="live-project__body"><span className="project-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.description}</p>{item.role && <small>{item.role}</small>}{item.status && <b>{item.status}</b>}<strong>{item.cta}</strong></div>
    </ExternalLink>
  );
}

function getCenteredScrollLeft(track: HTMLElement, card: HTMLElement): number {
  const trackRect = track.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;
  const cardCenter = cardRect.left + cardRect.width / 2;
  return track.scrollLeft + cardCenter - trackCenter;
}

function SourceDiagram({ crawler = false }: { crawler?: boolean }) {
  return (
    <div className="source-diagram" aria-hidden="true">
      <Boxes />
      <code>{crawler ? 'case_number → crawler → typed_response' : 'strategy → cache → LLM → recommendation'}</code>
      <svg viewBox="0 0 400 46"><path d="M4 23h96l16-16h90l16 16h174" /></svg>
    </div>
  );
}

export function ProjectsSection({ content, a11y, locale }: { content: ProjectsContent; a11y: AccessibilityContent; locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const bounded = Math.max(0, Math.min(content.live.items.length - 1, index));
    setActiveIndex(bounded);
    const track = trackRef.current;
    const card = track?.children.item(bounded) as HTMLElement | null;
    if (track && card) {
      const left = getCenteredScrollLeft(track, card);
      track.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };

  const syncActiveCard = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    const closest = cards.reduce(
      (best, card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActiveIndex(closest.index);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(activeIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(activeIndex - 1); }
  };

  return (
    <SectionReveal id="projects" eyebrow={content.eyebrow} title={content.title} intro={content.intro} theme="light" className="projects-section">
      <div className="project-group-heading"><span>ship.output</span><h3>{content.live.title}</h3><p>{content.live.description}</p></div>
      <div className="carousel" role="region" aria-label={a11y.carouselLabel}>
        <div className="carousel__track" ref={trackRef} tabIndex={0} onKeyDown={onKeyDown} onScroll={syncActiveCard}>
          {content.live.items.map((item, index) => <LiveProjectCard key={item.slug} item={item} active={index === activeIndex} a11y={a11y} locale={locale} />)}
        </div>
        <div className="carousel__controls">
          <button type="button" aria-label={a11y.previousProject} disabled={activeIndex === 0} onClick={() => goTo(activeIndex - 1)}><ArrowLeft aria-hidden="true" /></button>
          <div className="carousel__pagination">{content.live.items.map((item, index) => <button key={item.slug} type="button" aria-label={`${a11y.goToProject} ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => goTo(index)} />)}</div>
          <button type="button" aria-label={a11y.nextProject} disabled={activeIndex === content.live.items.length - 1} onClick={() => goTo(activeIndex + 1)}><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <div className="project-group-heading project-group-heading--source"><span>source.open</span><h3>{content.source.title}</h3><p>{content.source.description}</p></div>
      <div className="source-grid">
        {content.source.items.map((item, index) => (
          <ExternalLink key={item.slug} className={`source-project${index === 0 ? ' source-project--featured' : ''}`} href={item.url} label={item.cta} newTabLabel={a11y.newTab} event={item.event} locale={locale} projectSlug={item.slug}>
            <SourceDiagram crawler={index === 1} /><span className="project-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.description}</p>{item.proof && <strong>{item.proof}</strong>}<ul className="chips">{item.stack?.map((technology) => <li key={technology}>{technology}</li>)}</ul><b>{item.cta}</b>
          </ExternalLink>
        ))}
      </div>
      <div className="creative-lab">
        <Gamepad2 aria-hidden="true" /><div><span className="project-tag">{content.creative.items[0].tag}</span><h3>{content.creative.items[0].title}</h3><p>{content.creative.items[0].description}</p></div>
        <ExternalLink className="button button--light" href={content.creative.items[0].url} label={content.creative.items[0].cta} newTabLabel={a11y.newTab} event="games_opened" locale={locale} projectSlug={content.creative.items[0].slug}>{content.creative.items[0].cta}</ExternalLink>
      </div>
    </SectionReveal>
  );
}
