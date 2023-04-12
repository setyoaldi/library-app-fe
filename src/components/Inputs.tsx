import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export const InputMyBook: FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { placeholder, id } = props;

  return (
    <div className="w-full">
      <label className="text-[#19345E] tracking-wider" htmlFor={id}>
        {placeholder}
      </label>
      <input
        className="mt-1 border rounded-lg bg-slate-100 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full"
        {...props}
      />
    </div>
  );
};

export const TextAreaMyBook: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  const { placeholder, id } = props;

  return (
    <div className="w-full">
      <label className="text-[#19345E] tracking-wider" htmlFor={id}>
        {placeholder}
      </label>
      <textarea
        className="mt-1 border rounded-lg bg-slate-100 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full"
        {...props}
      />
    </div>
  );
};
