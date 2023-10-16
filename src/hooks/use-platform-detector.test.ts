import { renderHook, act } from '@testing-library/react';
import usePlatformDetector from './use-platform-detector';

describe('usePlatformDetector', () => {
  it('should return the initial "mobile" platform', () => {
    const { result } = renderHook(() => usePlatformDetector());
    expect(result.current).toBe('mobile');
  });

  it('should update platform to "desktop" when window width is >= 1024', () => {
    const { result } = renderHook(() => usePlatformDetector());

    act(() => {
      global.innerWidth = 1024;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe('desktop');
  });

  it('should update platform to "tablet" when window width is < 1024 and >= 768', () => {
    const { result } = renderHook(() => usePlatformDetector());

    act(() => {
      global.innerWidth = 800;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe('tablet');
  });


  it('should update platform to "mobile" when window width is < 768', () => {
    const { result } = renderHook(() => usePlatformDetector());

    act(() => {
      global.innerWidth = 600;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe('mobile');
  });
});
