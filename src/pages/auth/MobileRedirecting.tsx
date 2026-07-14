import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MobileRedirecting: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/patient/dashboard');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#f6faff] text-[#171c20] min-h-screen flex items-center justify-center overflow-hidden font-sans relative">
      
      {/* Subtle Ambient Background Accents */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-[#89ceff]/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-[#6becfd]/20 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Container */}
      <main className="w-full max-w-md px-6 flex flex-col items-center justify-center text-center z-10 animate-[fadeInUp_0.8s_ease-out_forwards]">
        
        {/* Logo Container with Animation */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Pulsing Rings (Background) */}
          <div className="absolute inset-0 rounded-full border-2 border-[#0ea5e9] opacity-50 z-0 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <div className="absolute inset-0 rounded-full border-2 border-[#0ea5e9] opacity-30 z-0 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
          
          {/* Logo Image */}
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-lg shadow-[#0ea5e9]/20 p-4 flex items-center justify-center border border-[#dee3e9]">
            <img alt="MediCare Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLtbK-dHyyQ9-gNxfCOOXLKSdE1mUsmb2GHX3CO-o56Dm1X1GTMdUVCn4u2J-zpyCvY9cQCMnbPjnHni3FNFJg61fqFjxJJyAf3MkPgbLZeH_acsWrReB38m2Gz-upt5AA53NZS0Z58w5YOPKH6awvg7CA8q2Mg8Zri9Q2wzvjDesCmNhLw64LQiAFMR-tthcpgD0yTxhtOuwquLtf3MBf9I43cgIWWir1O0psQx8jJAzYQyrmYlhFEULNw"/>
          </div>
        </div>

        {/* Typography & Text */}
        <h1 className="text-2xl font-bold text-[#0EA5E9] mb-2">Redirecting...</h1>
        <p className="text-base text-[#3e4850] mb-12">Please wait while we securely connect you to your MediCare dashboard.</p>

        {/* Spinner / Progress Indicator */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-4 border-[#e4e8ee] border-t-[#0EA5E9] animate-spin"></div>
          <span className="text-xs font-semibold text-[#6e7881] uppercase tracking-widest">Securing connection</span>
        </div>

      </main>
    </div>
  );
};
