import React from 'react';
import useTheme from '@/hooks/use-theme';
import Icons from '../icons';

export default function ToggleTheme() {
  const { handleDarkTheme, isDarkModeEnabled } = useTheme();

  return (
    <div className="relative inline-flex items-center gap-6 bg-grey-100 dark:bg-grey-600 h-12 px-14 rounded-md">
      <Icons name="light" />

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDarkModeEnabled}
          onChange={e => handleDarkTheme(e.target.checked)}
          className="sr-only peer"
        />
        <span className="w-11 h-6 bg-purple-200 hover:bg-purple-100 rounded-full peer-checked:after:translate-x-full
          peer-checked:after:border-white after:absolute after:top-[50%] after:left-[2px] after:bg-white
          after:translate-y-[-50%] after:rounded-full after:h-5 after:w-5 after:transition-all"
        />
      </label>

      <Icons name="dark" />
    </div>
  );
}
