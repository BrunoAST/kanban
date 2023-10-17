import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = & ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
  * Content to be interpolated by the button
  */
  children: ReactNode;

  /**
  * Used to handle the click event of the button.
  */
  onClick: (e: MouseEvent) => void;

  /**
  * It changes the size of the button.
  * The default value is large.
  */
  size?: 'large' | 'small';

  /**
  * It changes the color scheme of the button.
  * The default value is primary.
  */
  variant?: 'primary' | 'secondary' | 'destructive';
};

export default function Button({
  children,
  size = 'large',
  variant = 'primary',
  onClick,
  ...rest
}: ButtonProps) {
  function applyPadding(): string {
    return size === 'large' ? 'py-3.5' : 'py-2';
  }

  function applyColor(): string {
    return {
      ['primary']: 'bg-purple-200 text-white hover:bg-purple-100',
      ['secondary']: 'bg-purple-125 dark:bg-white text-purple-200 hover:bg-purple-150 dark:hover:bg-white',
      ['destructive']: 'bg-red-200 text-white hover:bg-red-100',
    }[variant];
  }

  return (
    <button
      type="button"
      {...rest}
      className={
        `
        ${twMerge(`${applyColor()}
        ${applyPadding()}
        px-4 rounded-3xl duration-300 font-bold text-sm`, rest.className)}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
