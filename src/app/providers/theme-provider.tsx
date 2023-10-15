'use client';

import React, {
  ReactNode,
  createContext,
  useEffect,
  useState
} from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  isDarkModeEnabled: boolean;
  handleDarkTheme: (isDarkModeEnabled: boolean) => void;
};

function isDarkModeEnabledOnPageLoad(): boolean {
  return localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkModeEnabled: isDarkModeEnabledOnPageLoad(),
  handleDarkTheme: () => { }
});

export default function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(false);

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

  return (
    <ThemeContext.Provider value={{ isDarkModeEnabled, handleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
