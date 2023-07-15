type TextFieldProps = {
  placeholder: string;
  id?: string;
};

export default function TextField({ placeholder, id }: TextFieldProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id={id}
        required
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
