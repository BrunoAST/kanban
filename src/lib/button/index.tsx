import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = & ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
  * Text that is displayed next to the dropdown.
  * It is a required prop and must be a string.
  * The default value is an empty string.
  */
  label: string;

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

  /**
  * Used to handle the click event of the button.
  */
  onClick: (e: MouseEvent) => void;
};

export default function Button({
  label,
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
      {...rest}
      className={`${twMerge(
        `${applyColor()} ${applyPadding()} px-4 rounded-3xl duration-300 font-bold text-sm`,
        rest.className
      )}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
