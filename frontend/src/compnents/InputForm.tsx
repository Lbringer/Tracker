import React from "react";

type InputFormProps = {
  title: string;
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
};

export const InputForm: React.FC<InputFormProps> = ({
  title,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className="flex flex-col  w-1/2 md:w-1/4 text-sm">
      <label className="mb-2 font-medium">{title}</label>
      <input
        className="border border-grey rounded bg-light focus:outline-none px-5 py-3 mb-4 placeholder:text-sm"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
