'use client';

import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import Arrow from './components/arrow';
import useOnClickOutside from '@/hooks/use-click-outside';

type DropdownProps = {
  /**
   * Uniquely identifies the dropdown.
   * It is an optional prop, but it is recommended to use it.
   */
  id?: string;

  /**
   * Defines the default value that must be select on initialization.
   */
  initialSelectedOption: string;

  /**
   * Text that is displayed next to the dropdown.
   * It is a required prop and must be a string.
   * The default value is an empty string.
   */
  label: string;

  /**
   * Used to handle the change event of the dropdown.
   */
  onSelectOption: (option: string) => void;

  /**
   * Dynamically populate the dropdown input with data.
   */
  options: string[];
};

export default function Dropdown({
  label,
  options,
  initialSelectedOption,
  onSelectOption,
  id
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(
    initialSelectedOption ? initialSelectedOption : options[0]
  );
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const dropdownContainer = useRef(null);
  useOnClickOutside(dropdownContainer, () => setIsOptionsVisible(false));

  useEffect(() => {
    onSelectOption(selectedOption);
  }, [selectedOption, onSelectOption]);

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="text-grey-300 font-bold text-xs dark:text-white"
      >
        {label}
      </label>

      <button
        id={id}
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
        className={
          `${isOptionsVisible ? 'visible' : 'invisible'}
          z-10 relative bg-white rounded w-full dark:bg-gray-700`
        }
      >
        <ul
          aria-labelledby={id}
          className="py-4 text-[13px] text-grey-300 absolute w-full bg-white rounded-lg
            dark:bg-grey-600"
        >
          {
            options.map(value =>
              <li
                key={value}
                onClick={
                  () => {
                    setSelectedOption(value);
                    setIsOptionsVisible(!isOptionsVisible);
                  }
                }
                className="hover:bg-grey-250"
              >
                <span className="block py-2 px-4 cursor-pointer">
                  {value}
                </span>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
