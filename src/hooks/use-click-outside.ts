import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

export default function useOnClickOutside<T extends HTMLElement>(ref: RefObject<T>, handler: Handler): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, handler]);
}