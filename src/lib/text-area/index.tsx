type TextAreaProps = {
  placeholder: string;
  label: string;
};

export default function TextArea({ placeholder, label }: TextAreaProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor="area"
        className="text-grey-300 font-bold text-xs dark:text-white"
      >
        {label}
      </label>
      <textarea
        className="form-textarea text-[13px] placeholder-shown:text-grey-700  placeholder-shown:text-opacity-100
          font-medium py-2 px-4 rounded text-grey-700 border-grey-300 focus:opacity-100 invalid:border-red-200
          invalid:opacity-100 invalid:focus:ring-red-200 focus:ring-purple-200 w-full bg-transparent
          dark:text-white"
        placeholder={placeholder}
        rows={4}
        id="area"
      />
    </div>
  );
}
