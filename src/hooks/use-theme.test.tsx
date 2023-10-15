import React, { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';
import useTheme from './use-theme';
import 'jest-localstorage-mock';
import ThemeProvider from '@/app/providers/theme-provider';

function mockMatchMedia(expectedQuery = '(prefers-color-scheme: dark)'): void {
  Object.defineProperty(window, 'matchMedia', {
    value: (query: string) => ({
      matches: query === expectedQuery,
    }),
    writable: true,
  });
}

const wrapper = ({ children }: { children: ReactNode }) =>
  <ThemeProvider>{children}</ThemeProvider>;

describe('useTheme', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('should initialize #isDarkModeEnabled equals to true when prefers-color-scheme is set to dark', () => {
    mockMatchMedia();

    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.isDarkModeEnabled).toBe(true);
  });

  test('should initialize #isDarkModeEnabled equals to true when the local storage has theme set to dark', () => {
    mockMatchMedia('');
    localStorage.setItem('theme', 'dark');

    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.isDarkModeEnabled).toBe(true);
  });

  test('should initialize #isDarkModeEnabled equals to false when there is no value set in local storage', () => {
    mockMatchMedia('(prefers-color-scheme: light)');
    localStorage.setItem('theme', '');

    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.isDarkModeEnabled).toBe(false);
  });

  it('should apply dark mode and update isDarkModeEnabled when handleDarkTheme is called', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.handleDarkTheme(true);
    });

    expect(result.current.isDarkModeEnabled).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    act(() => {
      result.current.handleDarkTheme(false);
    });

    expect(result.current.isDarkModeEnabled).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
