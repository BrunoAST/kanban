'use client';

import { useRef, useState } from 'react';
import Arrow from './components/arrow';
import useOnClickOutside from '@/hooks/use-click-outside';

type DropdownProps = {
  label: string;
  options: string[];
  initialSelectedOption?: string;
};

export default function Dropdown({
  label,
  options,
  initialSelectedOption
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption ? initialSelectedOption : options[0]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const dropdownContainer = useRef(null);
  useOnClickOutside(dropdownContainer, () => setIsOptionsVisible(false));

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor="options"
        className="text-grey-300 font-bold text-xs dark:text-white"
      >
        {label}
      </label>

      <button
        id="dropdown"
        className="text-grey-700 text-[13px] border border-grey-300 focus:outline-none focus:ring-2 
          focus:ring-purple-200 font-medium rounded py-2 px-4 inline-flex justify-between items-center
          dark:text-white"
        type="button"
        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
      >
        {selectedOption}
        <Arrow />
      </button>

      <div
        ref={dropdownContainer}
        id="dropdownInformation"
        className={`${isOptionsVisible ? 'visible' : 'invisible'}
          z-10 relative bg-white rounded w-full dark:bg-gray-700`}
      >
        <ul
          aria-labelledby="dropdown"
          className="py-4 text-[13px] text-grey-300 absolute w-full bg-white rounded-lg
            dark:bg-grey-600"
        >
          {options.map((value) =>
            <li
              key={value}
              onClick={() => {
                setSelectedOption(value);
                setIsOptionsVisible(!isOptionsVisible);
              }}
              className="hover:bg-grey-250"
            >
              <a
                href="#"
                className="block py-2 px-4"
              >
                {value}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
