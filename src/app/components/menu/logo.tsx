import useTheme from '@/hooks/use-theme';
import Image from 'next/image';
import React, { AnchorHTMLAttributes } from 'react';

export default function Logo(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { isDarkModeEnabled } = useTheme();

  return (
    <a
      href="#"
      {...props}
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={isDarkModeEnabled ? '/logo-dark.svg' : '/logo-light.svg'} />
        <source media="(max-width: 767px)" srcSet="/logo-mobile.svg" />
        <Image
          src="/logo-mobile.svg"
          alt="Logo"
          width="0"
          height="0"
          priority
          className="w-6 h-6 md:w-[152px] md:h-[25px]"
        />
      </picture>
    </a>
  );
}
