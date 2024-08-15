/* eslint-disable react/display-name */
import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface CategorySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: FieldError | undefined;
  label: string;
  children: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, CategorySelectProps>(
  ({ name, label, error, children, disabled, className, ...props }, ref) => {
    return (
      <div className={`relative ${className ? className : 'w-[18rem]'} space-y-2`}>
        <label htmlFor={name} className='font-semibold text-blueDiff'>{label}</label>
        <select
          className={`w-full p-inputPadding rounded-lg ${error && "border border-red-600"} cursor-pointer`}
          ref={ref}
          name={name}
          disabled={disabled}
          {...props}
        >
          {children}
        </select>
        {error && (
          <span className="text-red-500 font-semibold text-sm absolute top-[72px] left-0">
            {error?.message}
          </span>
        )}
      </div>
    )
  }
)