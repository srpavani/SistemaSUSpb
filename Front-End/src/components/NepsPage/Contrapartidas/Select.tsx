/* eslint-disable react/display-name */
import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { FiChevronDown } from "react-icons/fi";

interface CategorySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error: FieldError | undefined;
  label: string;
  children: ReactNode;
  isCurso?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, CategorySelectProps>(
  ({ name, label, error, children, disabled, isCurso, ...props }, ref) => {
    return (
      <div className={`relative w-[18rem] space-y-2`}>
        <label htmlFor={name} className={`font-bold ${isCurso ? 'text-roxo font-medium' : 'text-roxoClaro'}`}>{label}</label>
        <select
          className={`
            p-inputPadding rounded-lg w-[19rem] appearance-none cursor-pointer text-base mt-1 focus:outline-none focus:ring-0 
            ${isCurso ? 'bg-roxoClaro text-black' : 'bg-white text-[#575555]'} ${error && "border-2 border-red-600"}
          `}
          ref={ref}
          name={name}
          disabled={disabled}
          {...props}
        >
          {children}
        </select>

        {error && (
          <span className="text-red-500 font-semibold text-sm">
            {error?.message}
          </span>
        )}

        <FiChevronDown className="absolute -right-2 top-10 text-2xl"/>
      </div>
    )
  }
)