import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface TopBarProps {
  title: string;
  subtitle?: string;
  userName?: string;
  userRole?: string;
  avatarSrc?: string;
  showSearch?: boolean;
  showLangSwitcher?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  subtitle,
  userName: propUserName,
  userRole: propUserRole,
  avatarSrc,
  showSearch = true,
  showLangSwitcher = false,
}) => {
  const navigate = useNavigate();
  const { userName: globalUserName, userRoleLabel: globalUserRole } = useAuth();
  const userName = propUserName || globalUserName;
  const userRole = propUserRole || globalUserRole;

  const [lang, setLang] = useState<'EN' | 'HI'>('EN');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchToast, setSearchToast] = useState(false);

  // Close dropdowns when clicking outside
  const notificationsRef = useRef<HTMLDivElement>(null);
  const mailRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (mailRef.current && !mailRef.current.contains(event.target as Node)) {
        setShowMail(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    setSearchToast(true);
    setTimeout(() => setSearchToast(false), 3000);
  };

  const getSettingsPath = () => {
    if (!userRole) return '/login';
    const role = userRole.toLowerCase();
    if (role.includes('admin') || role.includes('clinical excellence')) return '/admin/settings';
    if (role.includes('doctor') || role.includes('cardiology')) return '/doctor/settings'; // Note: In App.tsx doctor/settings doesn't exist yet but we will add it.
    if (role.includes('patient')) return '/patient/settings';
    if (role.includes('staff') || role.includes('front desk')) return '/staff/settings';
    return '/login';
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f6faff]/80 backdrop-blur-xl border-b border-[#bec8d2]/30 shadow-sm px-8 py-4 flex justify-between items-center">
      {/* Left: Page Title */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-[#0EA5E9] tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm text-[#3e4850]">{subtitle}</p>}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        {showSearch && (
          <div className="relative group hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3e4850] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '18px' }}>
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-[#eaeef4] rounded-full border-none focus:ring-2 focus:ring-[#0EA5E9]/20 w-64 text-sm transition-all outline-none"
              placeholder="Search patients, records..."
              type="text"
              onChange={handleSearch}
            />
            {searchToast && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-[#3e4850] text-white text-xs py-2 px-3 rounded-lg shadow-lg text-center animate-in fade-in slide-in-from-top-2">
                Search is under construction in demo.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          {showLangSwitcher && (
            <div className="flex items-center bg-[#eaeef4] rounded-full p-1 gap-1 mr-2 transition-all">
              <span className="material-symbols-outlined text-[#3e4850] ml-1" style={{ fontSize: '16px' }}>language</span>
              <div className="flex items-center">
                <button
                  onClick={() => setLang('EN')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === 'EN' ? 'bg-[#0ea5e9] text-white' : 'text-[#3e4850] hover:text-[#0EA5E9]'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('HI')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === 'HI' ? 'bg-[#0ea5e9] text-white' : 'text-[#3e4850] hover:text-[#0EA5E9]'
                  }`}
                >
                  हिं
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-[#e4e8ee] text-[#3e4850] relative active:scale-95 transition-transform focus:outline-none"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#0EA5E9] rounded-full"></span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#bec8d2]/30 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                <div className="p-3 border-b border-[#bec8d2]/30 bg-[#f6faff]">
                  <h4 className="text-sm font-bold text-[#171c20]">Notifications</h4>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  <div className="p-3 border-b border-[#bec8d2]/20 hover:bg-[#f0f4fa] cursor-pointer">
                    <p className="text-xs font-semibold text-[#171c20]">New Patient Admitted</p>
                    <p className="text-[10px] text-[#3e4850] mt-0.5">Alex Johnson has been admitted to Ward 4B</p>
                    <p className="text-[9px] text-[#0ea5e9] mt-1">10m ago</p>
                  </div>
                  <div className="p-3 hover:bg-[#f0f4fa] cursor-pointer">
                    <p className="text-xs font-semibold text-[#171c20]">Lab Results Ready</p>
                    <p className="text-[10px] text-[#3e4850] mt-0.5">Blood panel for patient #4521</p>
                    <p className="text-[9px] text-[#0ea5e9] mt-1">1h ago</p>
                  </div>
                </div>
                <div className="p-2 border-t border-[#bec8d2]/30 text-center bg-[#f6faff]">
                  <button className="text-xs text-[#0ea5e9] font-semibold hover:underline">Mark all as read</button>
                </div>
              </div>
            )}
          </div>

          {/* Mail */}
          <div className="relative" ref={mailRef}>
            <button
              onClick={() => setShowMail(!showMail)}
              className="p-2 rounded-full hover:bg-[#e4e8ee] text-[#3e4850] active:scale-95 transition-transform focus:outline-none"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>mail</span>
            </button>
            {showMail && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#bec8d2]/30 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                <div className="p-3 border-b border-[#bec8d2]/30 bg-[#f6faff]">
                  <h4 className="text-sm font-bold text-[#171c20]">Messages</h4>
                </div>
                <div className="p-6 text-center text-[#3e4850]">
                  <span className="material-symbols-outlined text-[#bec8d2] mb-2" style={{ fontSize: '32px' }}>inbox</span>
                  <p className="text-xs">No new messages</p>
                </div>
                <div className="p-2 border-t border-[#bec8d2]/30 text-center bg-[#f6faff]">
                  <button onClick={() => { setShowMail(false); navigate('/messages'); }} className="text-xs text-[#0ea5e9] font-semibold hover:underline">View all</button>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          {userName && <div className="h-8 w-px bg-[#bec8d2]/30 mx-1" />}

          {/* User Profile */}
          {userName && (
            <div className="relative" ref={profileRef}>
              <div
                className="flex items-center gap-3 cursor-pointer group p-1 pr-2 rounded-full hover:bg-[#e4e8ee] transition-colors"
                onClick={() => setShowProfile(!showProfile)}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-[#171c20]">{userName}</p>
                  {userRole && <p className="text-[10px] text-[#3e4850] uppercase tracking-tighter">{userRole}</p>}
                </div>
                {avatarSrc ? (
                  <img
                    className="w-10 h-10 rounded-full border-2 border-[#0ea5e9] object-cover group-hover:border-[#0EA5E9] transition-colors"
                    src={avatarSrc}
                    alt={userName}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full border-2 border-[#0ea5e9] bg-[#0ea5e9] flex items-center justify-center text-white font-bold text-sm group-hover:border-[#0EA5E9] transition-colors">
                    {userName.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                )}
                <span className="material-symbols-outlined text-[#3e4850]" style={{ fontSize: '18px' }}>
                  expand_more
                </span>
              </div>

              {/* Profile Dropdown */}
              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#bec8d2]/30 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="p-3 border-b border-[#bec8d2]/30 bg-[#f6faff] sm:hidden">
                    <p className="text-sm font-bold text-[#171c20]">{userName}</p>
                    <p className="text-[10px] text-[#3e4850] uppercase">{userRole}</p>
                  </div>
                  <div className="py-1">
                    <button onClick={() => { setShowProfile(false); navigate(getSettingsPath()); }} className="w-full text-left px-4 py-2 text-sm text-[#3e4850] hover:bg-[#f0f4fa] hover:text-[#0EA5E9] flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person</span>
                      My Profile
                    </button>
                    <button onClick={() => { setShowProfile(false); navigate(getSettingsPath()); }} className="w-full text-left px-4 py-2 text-sm text-[#3e4850] hover:bg-[#f0f4fa] hover:text-[#0EA5E9] flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>settings</span>
                      Settings
                    </button>
                  </div>
                  <div className="border-t border-[#bec8d2]/30 py-1">
                    <button onClick={() => { setShowProfile(false); navigate('/login'); }} className="w-full text-left px-4 py-2 text-sm text-[#ba1a1a] hover:bg-[#ba1a1a]/10 flex items-center gap-2 font-semibold">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
