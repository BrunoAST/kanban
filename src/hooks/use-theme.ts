'use client';

import {
  useEffect,
  useState
} from 'react';

function isDarkModeEnabledOnPageLoad(): boolean {
  return localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export default function useTheme() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  useEffect(() => {
    if (isDarkModeEnabledOnPageLoad()) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
  }, []);

  function handleDarkTheme(isDarkModeEnabled: boolean): void {
    if (isDarkModeEnabled) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
  }

  function applyDarkMode(): void {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    setIsDarkModeEnabled(true);
  }

  function removeDarkMode(): void {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
    setIsDarkModeEnabled(false);
  }

  return { handleDarkTheme, isDarkModeEnabled };
}
