import { useEffect, useState } from 'react';

export type Platform = 'desktop' | 'tablet' | 'mobile';

export default function usePlatformDetector(): Platform {
  const [platform, setPlatform] = useState<Platform>('mobile');
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setPlatform('desktop');
      } else if (width < 1024 && width >= 768) {
        setPlatform('tablet');
      } else {
        setPlatform('mobile');
      }
    });
  }, []);

  return platform;
}
