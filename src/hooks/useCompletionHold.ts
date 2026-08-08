import { useEffect } from 'react';

export function useCompletionHold(
  complete: boolean,
  onDismiss: () => void,
  holdMs: number,
): void {
  useEffect(() => {
    if (!complete) return;

    const timer = window.setTimeout(onDismiss, holdMs);
    return () => window.clearTimeout(timer);
  }, [complete, holdMs, onDismiss]);
}
