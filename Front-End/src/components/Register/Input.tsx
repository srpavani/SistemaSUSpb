/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError | undefined;
  className?: string;
  classNameError?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type = "text", name, label, placeholder, className, error, classNameError, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label htmlFor={name} className="font-semibold text-blueDiff">{label}</label>

        <div className="relative">
          <input
            type={type}
            name={name}
            id={name}
            ref={ref}
            placeholder={placeholder}
            className={`p-inputPadding rounded-lg ${
              className ? className : "w-full"
            } ${error && "border border-red-600"}`}
            {...props}
          />

          {error && (
            <div className="mb-2">
              <span className={`text-red-500 font-semibold text-sm ${classNameError ? classNameError : 'absolute top-[51px] left-0'}`}>
                {error.message}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
);
