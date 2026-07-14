import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'admin' | 'doctor' | 'staff' | 'patient';

interface AuthContextType {
  role: UserRole;
  userName: string;
  userRoleLabel: string;
  avatarSrc: string;
  setRole: (role: UserRole) => void;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const roleMetadata = {
  admin: {
    userName: 'Sarah Jenkins',
    userRoleLabel: 'Hospital Admin',
    avatarSrc: '',
  },
  doctor: {
    userName: 'Dr. Julian',
    userRoleLabel: 'Cardiology',
    avatarSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-s3Ec58Wk2wgXYqHK3rxwGJw2s3nUekmmrc4YUC3lYldC0-t2MUvJn5rF068b5G4eMc9yt9ghYexHO1gEOfLyTPCau0NegdWaVHjuIxMrFL6nrYRXy9keKHqMjjDXZeTnZhhCegf6Yn-6nzppq2L3xfRp8I0-4VbCJP9IQSyb3dioL7hTUdxPuEvtjHO4vRq79G8HGkMOt7VJpC36q4usummKUhDCHmPpOQLl5fwyBiyarXuS89xxiUHbCmZglL1EeqV1hdHmRuE',
  },
  staff: {
    userName: 'Sarah Miller',
    userRoleLabel: 'Front Desk',
    avatarSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs3_myMXBN1bB24uoSHpMkJuube5HdqMmoPL5MqjsJP3zocRsyWa9P5Tzr6I8N6hsYBFTzNT-cNcJYD_ZWJs4lDjdjD1dw7mRm4gX-o1n41_mSG4JIT5C24gv2tTfUBRfsOjCrah0zv5Rseg25pRM3ZGoCO1PolI2mAbr0cuENtMhpJFoRbGVsihGyHfRlhTdsZsNaAGGSuIZZVhOsCDkErdmveIJxHLpqFcbxTs5FjFljwusfvfzjiZC7fmeVt2MT-rnmJUp_cNE',
  },
  patient: {
    userName: 'Alex Johnson',
    userRoleLabel: 'Patient Portal',
    avatarSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCG4bYwkfzOh8ez5wvG6HHZ7ljFBcqHWJVgZxxIq6K1UZ-tA0AoAFdg_45mhhshFj8IdP5d3tn8_pAxqiFN-2hNE_xcOjY4CaVL7tTWUOD9sAh_QDF1oereo4oe1d-r7dXAsCv7PSHbEw2sVSgaFxpmyIQ_5v3kqCKbgxvY6WJ6KgoKtTjU-x5Qq8k3gHhbmwzj9uq2ffkcgpI7DL2KVEFQiB7pXUpPmMVdEPRsk9P0Qa72d2Pby5lssD1bjFZCMcNDj9tb8jfSCQ',
  },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    // 1. Try localStorage
    const saved = localStorage.getItem('medicare_user_role') as UserRole | null;
    if (saved && ['admin', 'doctor', 'staff', 'patient'].includes(saved)) {
      return saved;
    }
    // 2. Try URL path inference
    const path = window.location.pathname;
    if (path.startsWith('/admin')) return 'admin';
    if (path.startsWith('/doctor')) return 'doctor';
    if (path.startsWith('/staff')) return 'staff';
    if (path.startsWith('/patient')) return 'patient';
    
    // 3. Fallback
    return 'admin';
  });

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    localStorage.setItem('medicare_user_role', newRole);
  };

  const login = (newRole: UserRole) => {
    setRole(newRole);
  };

  const logout = () => {
    localStorage.removeItem('medicare_user_role');
  };

  const metadata = roleMetadata[role];

  return (
    <AuthContext.Provider
      value={{
        role,
        userName: metadata.userName,
        userRoleLabel: metadata.userRoleLabel,
        avatarSrc: metadata.avatarSrc,
        setRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
