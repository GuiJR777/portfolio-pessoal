import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

import type { AccessibilityContent } from '../../content/types';
import { useCompletionHold } from '../../hooks/useCompletionHold';
import { useTypewriter } from '../../hooks/useTypewriter';

export const introSessionKey = 'portfolio.identity-intro.seen';

interface CodeToken {
  text: string;
  className?: string;
}

const codeLines: CodeToken[][] = [
  [
    { text: 'from ', className: 'syntax-keyword' },
    { text: 'professions', className: 'syntax-attribute' },
    { text: ' import ' },
    { text: 'SoftwareEngineer', className: 'syntax-class' },
  ],
  [],
  [
    { text: 'class ', className: 'syntax-keyword' },
    { text: 'GuilhermeRamires', className: 'syntax-attribute' },
    { text: '(' },
    { text: 'SoftwareEngineer):', className: 'syntax-class' },
  ],
  [
    { text: '    def ', className: 'syntax-keyword' },
    { text: '__init__', className: 'syntax-attribute' },
    { text: '(self): ' },
    { text: '...', className: 'syntax-class' },
  ],
] as const;

const identitySource = codeLines
  .map((line) => line.map((token) => token.text).join(''))
  .join('\n');

const typingIntervalMs = 16;
const completedFrameHoldMs = 800;

function TypedCode({ visibleText }: { visibleText: string }) {
  const visibleLines = visibleText.split('\n');
  const cursorLine = Math.min(visibleLines.length - 1, codeLines.length - 1);

  return (
    <pre className="intro-editor__code" data-testid="identity-intro-code">
      {codeLines.map((tokens, lineIndex) => {
        const typedLine = visibleLines[lineIndex] ?? '';
        let tokenStart = 0;

        return (
          <span key={lineIndex} className="intro-editor__line">
            <span className="intro-editor__number">{lineIndex + 1}</span>
            <span>
              {tokens.map((token, tokenIndex) => {
                const text = token.text.slice(
                  0,
                  Math.max(0, typedLine.length - tokenStart),
                );
                tokenStart += token.text.length;
                return (
                  <span key={tokenIndex} className={token.className}>
                    {text}
                  </span>
                );
              })}
              {lineIndex === cursorLine && (
                <span
                  className="intro-editor__cursor"
                  data-testid="identity-intro-cursor"
                />
              )}
            </span>
          </span>
        );
      })}
    </pre>
  );
}

function shouldStartIntro(): boolean {
  if (typeof window === 'undefined') return false;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return !reduced && window.sessionStorage.getItem(introSessionKey) !== 'seen';
}

interface IntroOverlayProps {
  labels: AccessibilityContent;
}

export function IntroOverlay({ labels }: IntroOverlayProps) {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(shouldStartIntro);
  const skip = useCallback(() => setVisible(false), []);
  const { visibleText, complete } = useTypewriter(identitySource, {
    enabled: visible && !reducedMotion,
    intervalMs: typingIntervalMs,
  });

  useCompletionHold(
    visible && complete,
    skip,
    completedFrameHoldMs,
  );

  useEffect(() => {
    if (!visible || reducedMotion) return;

    window.sessionStorage.setItem(introSessionKey, 'seen');
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') skip();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [reducedMotion, skip, visible]);

  return (
    <AnimatePresence>
      {visible && !reducedMotion && (
        <m.aside
          data-testid="identity-intro"
          className="intro-overlay"
          aria-label={labels.skipAnimation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onPointerDown={skip}
        >
          <m.div
            className="intro-editor"
            layoutId="identity-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <div className="intro-editor__bar">
              <span className="intro-editor__controls" />
              <span>identity.py</span>
            </div>
            <TypedCode visibleText={visibleText} />
          </m.div>
          <button
            className="intro-overlay__skip"
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={skip}
          >
            {labels.skipAnimation}
          </button>
        </m.aside>
      )}
    </AnimatePresence>
  );
}
