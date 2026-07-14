import React from 'react';

type BadgeVariant = 'active' | 'inactive' | 'critical' | 'stable' | 'pending' | 'completed' | 'primary' | 'secondary' | 'tertiary';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  active: 'bg-[#0ea5e9]/20 text-[#003751] border border-[#0ea5e9]/30',
  inactive: 'bg-[#dee3e9] text-[#3e4850] border border-[#bec8d2]/30',
  critical: 'bg-[#ffdad6] text-[#93000a] border border-[#ba1a1a]/20',
  stable: 'bg-[#6becfd]/20 text-[#67E8F9] border border-[#6becfd]/30',
  pending: 'bg-[#eaddff] text-[#420095] border border-[#ad85ff]/30',
  completed: 'bg-[#0ea5e9]/10 text-[#0EA5E9] border border-[#0ea5e9]/20',
  primary: 'bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20',
  secondary: 'bg-[#6becfd]/20 text-[#67E8F9] border border-[#6becfd]/30',
  tertiary: 'bg-[#eaddff] text-[#420095] border border-[#ad85ff]/30',
};

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
};

interface StatusChipProps {
  label: string;
  variant?: BadgeVariant;
}

export const StatusChip: React.FC<StatusChipProps> = ({ label, variant = 'primary' }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
};
