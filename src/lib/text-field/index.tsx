import { ChangeEvent } from 'react';

type TextFieldProps = {
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

  /**
   * Uniquely identifies the textfield.
   * It is an optional prop, but it is recommended to use it.
   */
  id?: string;

  /**
   * Used to handle the change event of the textfield.
   * It can be used to update the state of the textfield, or to perform other actions.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  placeholder,
  value,
  id,
  onChange,
}: TextFieldProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id={id}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input peer text-[13px] placeholder-shown:text-grey-700 placeholder-shown:opacity-25
          font-medium py-2 px-4 rounded text-grey-700 border-grey-300 invalid:border-red-200
          invalid:opacity-100 invalid:focus:ring-red-200 focus:ring-purple-200 w-full bg-transparent
          dark:text-white"
      />
      <span className="text-red-200 hidden peer-invalid:block text-[13px] font-medium absolute
        right-4 top-1/2 -translate-y-1/2"
      >
        Can&apos;t be empty
      </span>
    </div>
  );
}
