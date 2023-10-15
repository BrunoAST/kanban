import { ThemeContext } from '@/app/providers/theme-provider';
import { useContext } from 'react';

export default function useTheme() {
  const { isDarkModeEnabled, handleDarkTheme } = useContext(ThemeContext);

  return { handleDarkTheme, isDarkModeEnabled };
}
