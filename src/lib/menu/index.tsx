'use client';

import React, { useRef, useState } from 'react';
import Icons from '../icons';
import { twMerge } from 'tailwind-merge';
import useOnClickOutside from '@/hooks/use-click-outside';

type OptionsType = {
  title: string;
  onClick: () => void;
  classes?: string;
};

type MenuProps = {
  /**
  * Array that represents the list of options the Menu is going to render.
  */
  options: OptionsType[];
  /**
  * Custom classes that is going to be applied to the ul element when provided.
  */
  classes?: string;
};

export default function Menu({ options, classes }: MenuProps): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setShowMenu(false));

  return (
    <menu ref={menuRef} className="relative">
      <button className="p-4" onClick={() => setShowMenu(!showMenu)}>
        <Icons name="menu" />
      </button>

      {
        showMenu && <ul
          className={
            `${twMerge(`
              absolute flex flex-col gap-4 bg-white dark:bg-grey-600 p-4 rounded-lg
              min-w-[190px] cursor-pointer shadow-lg`, classes)
            }`
          }
        >
          {
            options.map(option =>
              <li
                key={option.title}
                className={twMerge('hover:underline text-sm', option.classes)}
                onClick={option.onClick}
              >
                {option.title}
              </li>
            )
          }
        </ul>
      }
    </menu>
  );
}
