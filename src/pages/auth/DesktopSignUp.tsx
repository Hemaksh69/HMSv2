import React from 'react';
import { Link } from 'react-router-dom';

export const DesktopSignUp: React.FC = () => {
  return (
    <div className="bg-[#f6faff] font-sans text-[#171c20] min-h-screen flex items-center justify-center p-4 md:p-6 relative overflow-x-hidden">
      {/* Abstract Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#89ceff]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#54d8e8]/20 rounded-full blur-3xl pointer-events-none" />

      <main className="w-full max-w-[520px] z-10">
        <div className="glass-card rounded-[2rem] p-6 md:p-12 flex flex-col gap-8 items-center shadow-[0_10px_40px_-10px_rgba(0,101,145,0.15)]">
          {/* Branding Header */}
          <header className="flex flex-col items-center gap-4 text-center">
            <div className="w-24 h-24 mb-2 transition-transform hover:scale-105 duration-300 bg-[#f0f4fa] rounded-xl border border-[#bec8d2]/30 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[#0EA5E9]" style={{ fontSize: '60px', fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold text-[#0EA5E9]">Join MediCare</h1>
              <p className="text-base text-[#3e4850] px-6">Experience clinical excellence and seamless care coordination.</p>
            </div>
          </header>

          {/* Registration Form */}
          <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="full_name">Full Name</label>
                <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>person</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] placeholder-[#6e7881] rounded-xl" id="full_name" placeholder="Dr. John Doe" type="text" />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="email">Email Address</label>
                <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>mail</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] placeholder-[#6e7881] rounded-xl" id="email" placeholder="john.doe@hospital.com" type="email" />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="phone">Phone Number</label>
                <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>call</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] placeholder-[#6e7881] rounded-xl" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="password">Password</label>
                <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>lock</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] placeholder-[#6e7881] rounded-xl" id="password" placeholder="••••••••" type="password" />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="confirm_password">Confirm Password</label>
                <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>lock_reset</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] placeholder-[#6e7881] rounded-xl" id="confirm_password" placeholder="••••••••" type="password" />
                </div>
              </div>
            </div>

            {/* Admin Notice Info Box */}
            <div className="bg-[#c9e6ff]/30 p-4 rounded-xl flex items-start gap-4 border border-[#0EA5E9]/10">
              <span className="material-symbols-outlined text-[#0EA5E9] mt-0.5" style={{ fontSize: '20px' }}>info</span>
              <p className="text-sm text-[#003751] leading-relaxed">
                Signing up here creates a Patient account. Doctors and Staff accounts are created by an Admin to maintain clinical integrity.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="w-full bg-[#0EA5E9] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0EA5E9]/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Create Account</span>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
            </button>

            {/* Navigation Link */}
            <footer className="flex items-center justify-center gap-2 pt-2">
              <span className="text-sm text-[#3e4850]">Already have an account?</span>
              <Link className="text-[#0EA5E9] font-bold text-sm hover:underline transition-all" to="/login">Log In</Link>
            </footer>
          </form>
        </div>

        {/* Footer Branding */}
        <div className="mt-6 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#6e7881]">MediCare Hospital Management System</p>
          <p className="text-[10px] text-[#bec8d2] mt-2 opacity-60">© 2024 AquaCare Medical Group. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};
