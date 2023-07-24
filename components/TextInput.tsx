import React from "react";

type TextInputProps = {
  icon?: string;
  label?: string;
};
const TextInput = ({
  placeholder,
  label,
  ...rest
}: TextInputProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <p className="text-xs font-semibold text-neutral-900">{label}</p>
      )}
      <div className="h-12 w-full overflow-hidden rounded-md border">
        <input
          className="h-full w-full px-5 outline-none"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default TextInput;
