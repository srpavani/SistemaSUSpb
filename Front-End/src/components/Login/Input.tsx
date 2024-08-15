/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  className?: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name, placeholder, className, error, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="font-semibold text-blueDiff">{label}</label>

        <input
          type={type}
          name={name}
          id={name}
          ref={ref}
          placeholder={placeholder}
          className={`rounded-lg px-2 py-2.5 w-[300px] placeholder:text-sm2 ${
            error && "border border-red-600"
          }`}
          {...props}
        />

        {error && (
          <span className="text-red-500 font-semibold text-sm">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
