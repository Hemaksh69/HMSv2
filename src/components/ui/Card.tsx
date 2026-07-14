import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  ambient?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glass = false,
  ambient = false,
}) => {
  const base = 'bg-white rounded-2xl border border-[#bec8d2]/20 overflow-hidden';
  const glassClass = glass ? 'glass-card' : '';
  const shadowClass = ambient ? 'shadow-ambient' : 'shadow-xl shadow-[#0EA5E9]/5';

  return (
    <div className={`${base} ${glassClass} ${shadowClass} ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-[#bec8d2]/20 ${className}`}>{children}</div>
);

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
