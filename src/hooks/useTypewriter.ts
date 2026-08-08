import { useEffect, useState } from 'react';

interface TypewriterOptions {
  enabled?: boolean;
  intervalMs?: number;
}

interface TypewriterState {
  visibleText: string;
  complete: boolean;
}

export function useTypewriter(
  text: string,
  { enabled = true, intervalMs = 24 }: TypewriterOptions = {},
): TypewriterState {
  const [visibleCharacters, setVisibleCharacters] = useState(() =>
    enabled ? 0 : text.length,
  );

  useEffect(() => {
    if (!enabled || visibleCharacters >= text.length) return;

    const timer = window.setTimeout(() => {
      setVisibleCharacters((count) => Math.min(count + 1, text.length));
    }, intervalMs);

    return () => window.clearTimeout(timer);
  }, [enabled, intervalMs, text.length, visibleCharacters]);

  return {
    visibleText: text.slice(0, visibleCharacters),
    complete: visibleCharacters >= text.length,
  };
}
