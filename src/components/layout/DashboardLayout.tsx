import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../context/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  showLangSwitcher?: boolean;
}

// Single Source of Truth for Role-based Navigation
const NAVIGATION_CONFIG: Record<
  UserRole,
  {
    desktopNav: { icon: string; label: string; to: string }[];
    mobileNav: { icon: string; label: string; to: string }[];
    footerItems: { icon: string; label: string; to: string }[];
  }
> = {
  admin: {
    desktopNav: [
      { icon: 'dashboard', label: 'Dashboard', to: '/admin/dashboard' },
      { icon: 'person', label: 'Patients', to: '/admin/patients' },
      { icon: 'medical_services', label: 'Doctors', to: '/admin/doctors' },
      { icon: 'group', label: 'Staff', to: '/admin/staff' },
      { icon: 'payments', label: 'Billing', to: '/admin/billing' },
      { icon: 'assessment', label: 'Reports', to: '/admin/reports' },
      { icon: 'settings', label: 'Settings', to: '/admin/settings' },
    ],
    mobileNav: [
      { icon: 'home', label: 'Home', to: '/admin/dashboard' },
      { icon: 'group', label: 'Patients', to: '/admin/patients' },
      { icon: 'payments', label: 'Billing', to: '/admin/billing' },
      { icon: 'settings', label: 'Profile', to: '/admin/settings' },
    ],
    footerItems: [],
  },
  doctor: {
    desktopNav: [
      { icon: 'home', label: 'Home', to: '/doctor/dashboard' },
      { icon: 'group', label: 'My Patients', to: '/doctor/patients' },
      { icon: 'description', label: 'Prescriptions', to: '/doctor/prescriptions' },
      { icon: 'folder_open', label: 'Records', to: '/doctor/records' },
    ],
    mobileNav: [
      { icon: 'home', label: 'Home', to: '/doctor/dashboard' },
      { icon: 'group', label: 'Patients', to: '/doctor/patients' },
      { icon: 'description', label: 'Prescriptions', to: '/doctor/prescriptions' },
      { icon: 'settings', label: 'Profile', to: '/doctor/settings' },
    ],
    footerItems: [
      { icon: 'help', label: 'Support', to: '/doctor/support' },
      { icon: 'settings', label: 'Settings', to: '/doctor/settings' },
    ],
  },
  staff: {
    desktopNav: [
      { icon: 'dashboard', label: 'Dashboard', to: '/staff/dashboard' },
      { icon: 'person_add', label: 'Registration', to: '/staff/register' },
      { icon: 'description', label: 'Records', to: '/staff/records' },
      { icon: 'payments', label: 'Billing', to: '/staff/billing' },
    ],
    mobileNav: [
      { icon: 'home', label: 'Home', to: '/staff/dashboard' },
      { icon: 'person_add', label: 'Reg', to: '/staff/register' },
      { icon: 'description', label: 'Records', to: '/staff/records' },
      { icon: 'settings', label: 'Profile', to: '/staff/settings' },
    ],
    footerItems: [
      { icon: 'help', label: 'Support Center', to: '/staff/support' },
      { icon: 'settings', label: 'Settings', to: '/staff/settings' },
    ],
  },
  patient: {
    desktopNav: [
      { icon: 'home', label: 'Home', to: '/patient/dashboard' },
      { icon: 'prescriptions', label: 'Prescriptions', to: '/patient/prescriptions' },
      { icon: 'download', label: 'Records', to: '/patient/records' },
      { icon: 'payments', label: 'Billing', to: '/patient/billing' },
    ],
    mobileNav: [
      { icon: 'home', label: 'Home', to: '/patient/dashboard' },
      { icon: 'description', label: 'Rx', to: '/patient/prescriptions' },
      { icon: 'download', label: 'Records', to: '/patient/records' },
      { icon: 'settings', label: 'Profile', to: '/patient/settings' },
    ],
    footerItems: [
      { icon: 'help', label: 'Support', to: '/patient/support' },
      { icon: 'settings', label: 'Settings', to: '/patient/settings' },
    ],
  },
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = 'Medicare',
  subtitle = '',
  showSearch = true,
  showLangSwitcher = false,
}) => {
  const { role, userName, userRoleLabel, avatarSrc } = useAuth();
  
  // Mobile breakpoint check (matching ResponsiveLayout.tsx)
  const getIsMobile = () => window.screen.width < 768;
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const config = NAVIGATION_CONFIG[role] || NAVIGATION_CONFIG.admin;

  if (isMobile) {
    return (
      <div className="bg-[#f6faff] font-sans text-[#171c20] min-h-screen pb-[80px] flex flex-col">
        {/* Unified Mobile Header */}
        <header className="bg-white text-[#0EA5E9] flex justify-between items-center px-4 h-16 w-full sticky top-0 z-40 border-b border-[#bec8d2]/30 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-2">
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt={userName}
                className="w-8 h-8 rounded-full object-cover border border-[#bec8d2]/30 flex-shrink-0"
              />
            ) : (
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#bec8d2]/30 flex-shrink-0 bg-[#f0f4fa] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0EA5E9]" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
            )}
            <div>
              <h1 className="font-semibold text-[#0EA5E9] text-sm leading-tight">{title}</h1>
              <p className="text-[10px] text-[#3e4850] leading-none">
                {userRoleLabel} • {userName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-[#3e4850] hover:bg-[#f0f4fa] transition-colors duration-200 p-2 rounded-full active:scale-95 flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>search</span>
            </button>
            <button className="text-[#3e4850] hover:bg-[#f0f4fa] transition-colors duration-200 p-2 rounded-full active:scale-95 flex items-center justify-center relative">
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#ba1a1a] rounded-full border border-white" />
            </button>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Unified Bottom Navigation */}
        <BottomNav items={config.mobileNav} />
      </div>
    );
  }

  return (
    <div className="bg-[#f6faff] min-h-screen font-sans flex text-[#171c20] relative">
      {/* Unified Left Sidebar */}
      <Sidebar
        navItems={config.desktopNav}
        role={userRoleLabel}
        userName={userName}
        userSubtitle={role === 'admin' ? 'Hospital Admin' : role === 'doctor' ? 'Clinical Staff' : role === 'staff' ? 'Front Desk Staff' : 'Patient'}
        avatarSrc={avatarSrc}
        footerItems={config.footerItems}
      />

      {/* Main Panel */}
      <main className="ml-[280px] flex-1 flex flex-col min-h-screen">
        {/* Unified TopBar */}
        <TopBar
          title={title}
          subtitle={subtitle}
          userName={userName}
          userRole={userRoleLabel}
          avatarSrc={avatarSrc}
          showSearch={showSearch}
          showLangSwitcher={showLangSwitcher}
        />
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};
