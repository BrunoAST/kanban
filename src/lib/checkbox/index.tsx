type CheckboxProps = {
  /**
   * Text that is displayed next to the checkbox.
   * It is a required prop and must be a string.
   * The default value is an empty string.
   */
  label: string;

  /**
   * Used to set the initial state of the checkbox.
   * It can also be used to change the state of the checkbox dynamically.
   */
  checked?: boolean;

  /**
   * Used to handle the change event of the checkbox.
   * It can be used to update the state of the checkbox, or to perform other actions.
   */
  onChange?: () => void;
};

export default function Checkbox({
  label,
  checked,
  onChange 
}: CheckboxProps) {
  return (
    <div className="w-full inline-flex items-center gap-4 p-3 rounded duration-300
      bg-grey-100 hover:bg-purple-150 dark:hover:bg-purple-150 dark:bg-grey-600"
    >
      <input
        id="checkbox"
        type="checkbox"
        className="form-checkbox peer h-4 w-4 checked:text-purple-200 bg-white rounded border-grey-250
          [&:not(:checked)]:dark:bg-grey-500 focus:ring-purple-200 focus:ring-2 focus:ring-offset-1"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor="checkbox"
        className="text-xs font-bold text-grey-700 dark:text-white peer-checked:line-through
          peer-checked:text-grey-700 peer-checked:opacity-50 dark:peer-checked:text-white"
      >
        {label}
      </label>
    </div>
  );
}
