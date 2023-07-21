'use client';

import Image from 'next/image';

export default function ToggleTheme() {
  function toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="relative inline-flex gap-6 bg-grey-600 h-12 px-14 rounded-md">
      <Image src="/icons/Light.svg" alt="Light mode" width="18" height="18" />
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" onChange={toggleTheme} className="sr-only peer" />
        <span className="w-11 h-6 bg-purple-200 rounded-full peer-checked:after:translate-x-full
          peer-checked:after:border-white after:absolute after:top-[50%] after:left-[2px] after:bg-white
          after:translate-y-[-50%] after:rounded-full after:h-5 after:w-5 after:transition-all"
        />
      </label>
      <Image src="/icons/Dark.svg" alt="Dark mode" width="18" height="18" />
    </div>
  );
}
