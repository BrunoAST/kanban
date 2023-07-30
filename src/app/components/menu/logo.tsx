import { BREAKPOINTS } from '@/constants/breakpoints';
import useScreenSize from '@/hooks/use-screen-size';
import Image from 'next/image';
import { AnchorHTMLAttributes } from 'react';

export default function Logo(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const size = useScreenSize();

  return (
    <a
      href="#"
      {...props}
    >
      <Image
        src={size < BREAKPOINTS.md ? '/logo-mobile.svg' : '/logo-light.svg'}
        alt="Logo"
        width="0"
        height="0"
        priority
        className="w-6 h-6 md:w-[152px] md:h-[25px]"
      />
    </a>
  );
}
