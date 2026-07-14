import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  rightElement?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon,
  rightElement,
  error,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1"
        >
          {label}
        </label>
      )}
      <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white transition-all duration-200">
        {icon && (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors text-xl">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`w-full bg-transparent border-none outline-none text-[16px] text-[#171c20] placeholder-[#6e7881] py-3 pr-4 rounded-xl ${
            icon ? 'pl-12' : 'pl-4'
          } ${rightElement ? 'pr-12' : ''} ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightElement}</div>
        )}
      </div>
      {error && <p className="text-xs text-[#ba1a1a] ml-1 mt-0.5">{error}</p>}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, id, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={`w-full px-4 py-3 rounded-xl border border-[#bec8d2] bg-white text-[16px] text-[#171c20] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
