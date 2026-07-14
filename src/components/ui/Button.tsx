import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-5 py-3 text-sm rounded-xl',
    lg: 'px-6 py-4 text-base rounded-xl',
  };

  const variants = {
    primary:
      'bg-[#0EA5E9] text-white shadow-md hover:brightness-110 focus:ring-[#0EA5E9]/40',
    secondary:
      'bg-[#6becfd] text-[#67E8F9] shadow-sm hover:brightness-105 focus:ring-[#6becfd]/40',
    tertiary:
      'bg-[#5B21B6] text-white shadow-sm hover:brightness-110 focus:ring-[#5B21B6]/40',
    ghost:
      'bg-transparent text-[#0EA5E9] border border-[#bec8d2] hover:bg-[#eaeef4] focus:ring-[#0EA5E9]/20',
    outline:
      'bg-transparent text-[#171c20] border border-[#bec8d2] hover:bg-[#f0f4fa] focus:ring-[#bec8d2]/40',
    danger:
      'bg-[#ba1a1a] text-white shadow-sm hover:brightness-110 focus:ring-[#ba1a1a]/40',
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
          {icon}
        </span>
      )}
    </button>
  );
};
