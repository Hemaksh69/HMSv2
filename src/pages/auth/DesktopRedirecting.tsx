import React from 'react';

const loadingSteps = [
  { icon: 'check', done: true },
  { icon: 'check', done: true },
  { icon: 'sync', done: false },
];

export const DesktopRedirecting: React.FC = () => {
  return (
    <div className="bg-[#f6faff] font-sans text-[#171c20] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#0EA5E9]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-[#6becfd]/10 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-lg px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6 transition-all duration-700 ease-in-out hover:scale-105">
            <div className="w-48 h-24 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-[#0EA5E9] rounded-2xl flex items-center justify-center drop-shadow-xl">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '36px', fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                </div>
                <span className="text-4xl font-bold text-[#0EA5E9]">MediCare</span>
              </div>
            </div>
          </div>

          {/* Spinner */}
          <div className="mt-6 mb-8">
            <div className="relative w-20 h-20">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#bec8d2]" />
              {/* Spinning ring */}
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0ea5e9]"
                style={{ animation: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite' }}
              />
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
          </div>

          {/* Loading Content */}
          <div className="space-y-4 animate-[fadeUp_0.8s_ease-out_forwards]">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#0EA5E9]">
              Redirecting to your dashboard...
            </h1>
            <div className="bg-white/40 backdrop-blur-md p-4 rounded-xl max-w-sm mx-auto shadow-sm border border-[#0EA5E9]/10">
              <p className="text-[#3e4850] text-sm animate-pulse">
                Our secure system is authenticating your credentials and preparing your clinical environment based on your practitioner profile.
              </p>
            </div>
          </div>

          {/* Secure Badge */}
          <div className="mt-12 flex items-center gap-2 text-[#3e4850]/60 text-xs font-semibold">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>verified_user</span>
            <span>Secure Session Active</span>
          </div>
        </div>
      </main>

      {/* Footer Status Bar */}
      <div className="fixed bottom-8 w-full flex justify-center px-4">
        <div className="bg-[#eaeef4]/50 px-6 py-2 rounded-full border border-[#bec8d2]/30 flex items-center gap-4">
          <div className="flex -space-x-2">
            {loadingSteps.map((step, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full border-2 border-[#f6faff] flex items-center justify-center ${
                  step.done ? 'bg-[#0EA5E9]/20' : 'bg-[#dee3e9]'
                } ${!step.done ? 'animate-pulse' : ''}`}
              >
                <span className={`material-symbols-outlined ${step.done ? 'text-[#0EA5E9]' : 'text-[#3e4850]'}`} style={{ fontSize: '12px' }}>
                  {step.icon}
                </span>
              </div>
            ))}
          </div>
          <span className="text-xs font-semibold text-[#3e4850] uppercase tracking-widest">Verifying Roles</span>
        </div>
      </div>
    </div>
  );
};
