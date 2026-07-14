import React from 'react';
import { NavLink } from 'react-router-dom';

interface BottomNavItem {
  icon: string;
  label: string;
  to: string;
}

interface BottomNavProps {
  items: BottomNavItem[];
}

export const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  return (
    <nav className="fixed bottom-0 w-full z-50 bg-white/80 backdrop-blur-xl rounded-t-xl border-t border-[#bec8d2]/30 shadow-[0_-4px_10px_rgba(0,101,145,0.05)] flex justify-around items-center px-4 py-2 pb-safe tap-highlight-transparent">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? 'flex flex-col items-center justify-center bg-[#0ea5e9] text-[#003751] rounded-full px-4 py-1 tap-highlight-transparent transition-all'
              : 'flex flex-col items-center justify-center text-[#3e4850] tap-highlight-transparent transition-all px-2 py-1 rounded-full active:bg-[#e4e8ee]'
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '22px',
                  fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                {item.icon}
              </span>
              <span className={`text-[10px] mt-1 font-semibold tracking-wider ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
