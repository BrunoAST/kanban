import React from 'react';
import { ChangeEvent } from 'react';

type TextAreaProps = {
  /**
   * Uniquely identifies the textarea.
   * It is an optional prop, but it is recommended to use it.
   */
  id?: string;

  /**
   * Text that is displayed next to the textarea.
   * It is a required prop and must be a string.
   * The default value is an empty string.
   */
  label: string;

  /**
  * Used to handle the change event of the textfield.
  * It can be used to update the state of the textfield, or to perform other actions.
  */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * Short hint that is displayed before the user enters any text.
   * It is used to help the user understand what kind of information is expected in the field.
   */
  placeholder: string;

  /**
   * Text that is entered by the user.
   * It is stored in the text field's value property. The value property is a string property,
   * and it can be accessed and modified in JavaScript.
   */
  value: any;
};

export default function TextArea({
  placeholder,
  value,
  id,
  label,
  onChange
}: TextAreaProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-grey-300 font-bold text-xs dark:text-white"
      >
        {label}
      </label>
      <textarea
        className="form-textarea text-[13px] placeholder-shown:text-grey-700 placeholder-shown:text-opacity-100
          font-medium py-2 px-4 rounded text-grey-700 border-grey-300 focus:opacity-100
          focus:ring-purple-200 w-full bg-transparent dark:text-white"
        placeholder={placeholder}
        rows={4}
        value={value}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}
