type InputProps = {
  label: string;
  placeholder: string;
};

export const InputForm: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <div className="w-full flex flex-col text-slate-950 dark:text-slate-50 mb-4">
      <label className="text-xs font-medium  mb-1" htmlFor={label}>
        {label}
      </label>
      <input
        className="p-3 text-sm rounded placeholder:text-xs bg-slate-100 dark:bg-slate-900 focus:outline-none"
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
};
