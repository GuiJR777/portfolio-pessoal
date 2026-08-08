import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useTypewriter } from './useTypewriter';

afterEach(() => {
  vi.useRealTimers();
});

describe('useTypewriter', () => {
  it('reveals one character per interval and reports completion', async () => {
    vi.useFakeTimers();

    const { result } = renderHook(() =>
      useTypewriter('abc', { intervalMs: 30 }),
    );

    expect(result.current).toEqual({ visibleText: '', complete: false });

    await act(() => vi.advanceTimersByTime(30));
    expect(result.current).toEqual({ visibleText: 'a', complete: false });

    await act(() => vi.advanceTimersByTime(30));
    expect(result.current).toEqual({ visibleText: 'ab', complete: false });

    await act(() => vi.advanceTimersByTime(30));
    expect(result.current).toEqual({ visibleText: 'abc', complete: true });
  });

  it('returns the complete text immediately when typing is disabled', () => {
    const { result } = renderHook(() =>
      useTypewriter('identity.py', { enabled: false }),
    );

    expect(result.current).toEqual({
      visibleText: 'identity.py',
      complete: true,
    });
  });
});
