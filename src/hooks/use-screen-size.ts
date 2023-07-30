'use client';

import { useEffect, useState } from 'react';

export default function useScreenSize(): number {
  const [size, setSize] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    function onResize(): void {
      setSize(window.screen.width);
    }

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
