import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useCompletionHold } from './useCompletionHold';

afterEach(() => {
  vi.useRealTimers();
});

describe('useCompletionHold', () => {
  it('starts the dismissal delay only after the animation completes', async () => {
    vi.useFakeTimers();
    const onDismiss = vi.fn();
    const { rerender } = renderHook(
      ({ complete }) => useCompletionHold(complete, onDismiss, 800),
      { initialProps: { complete: false } },
    );

    await act(() => vi.advanceTimersByTime(5000));
    expect(onDismiss).not.toHaveBeenCalled();

    rerender({ complete: true });
    await act(() => vi.advanceTimersByTime(799));
    expect(onDismiss).not.toHaveBeenCalled();

    await act(() => vi.advanceTimersByTime(1));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
