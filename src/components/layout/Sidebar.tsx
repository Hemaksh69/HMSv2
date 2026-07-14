import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface NavItem {
  icon: string;
  label: string;
  to: string;
  active?: boolean;
}

interface SidebarProps {
  navItems: NavItem[];
  role?: string;
  userName?: string;
  userSubtitle?: string;
  avatarSrc?: string;
  footerItems?: NavItem[];
  onSupportClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  role: propRole,
  userName: propUserName,
  userSubtitle,
  avatarSrc,
  footerItems = [],
  onSupportClick,
}) => {
  const { userName: globalUserName, userRoleLabel: globalUserRole } = useAuth();
  const role = propRole || globalUserRole;
  const userName = propUserName || globalUserName;

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-white border-r border-[#bec8d2]/20 shadow-xl shadow-[#0EA5E9]/5 flex flex-col p-6 gap-4">
      {/* Brand */}
      <div className="flex items-center gap-3 mb-4 px-2">
        <div className="w-10 h-10 bg-[#0EA5E9] rounded-xl flex items-center justify-center flex-shrink-0">
          <span
            className="material-symbols-outlined text-white filled"
            style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}
          >
            medical_services
          </span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-[#0EA5E9] leading-tight">MediCare</h1>
          <p className="text-[10px] text-[#3e4850] uppercase tracking-wider opacity-70">{role}</p>
        </div>
      </div>

      {/* User Profile Card (optional) */}
      {userName && (
        <div className="p-3 bg-[#f0f4fa] rounded-xl flex items-center gap-3 border border-[#bec8d2]/20 mb-2">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={userName}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#0ea5e9] flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {userName.split(' ').map((n) => n[0]).join('').slice(0, 2)}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#171c20] truncate">{userName}</p>
            {userSubtitle && (
              <p className="text-xs text-[#3e4850] truncate">{userSubtitle}</p>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive || item.active
                ? 'flex items-center gap-3 px-4 py-3 bg-[#0ea5e9] text-[#003751] rounded-xl font-semibold sidebar-active-border transition-all duration-200'
                : 'flex items-center gap-3 px-4 py-3 text-[#3e4850] hover:text-[#0EA5E9] hover:bg-[#e4e8ee] rounded-xl transition-all duration-200 hover:translate-x-1'
            }
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              {item.icon}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer Items */}
      {footerItems.length > 0 && (
        <div className="pt-4 border-t border-[#bec8d2]/20 space-y-1">
          {footerItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-4 py-3 text-[#3e4850] hover:text-[#0EA5E9] hover:bg-[#e4e8ee] rounded-xl transition-all duration-200"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                {item.icon}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold">{item.label}</span>
            </NavLink>
          ))}
          {onSupportClick && (
            <button
              onClick={onSupportClick}
              className="w-full bg-[#6becfd] text-[#67E8F9] py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-95"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                contact_support
              </span>
              <span className="text-xs uppercase tracking-wider">Support Center</span>
            </button>
          )}
        </div>
      )}
    </aside>
  );
};
