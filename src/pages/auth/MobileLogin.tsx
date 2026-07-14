import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../context/AuthContext';

export const MobileLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('admin');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(selectedRole);
    navigate(`/${selectedRole}/dashboard`);
  };

  return (
    <div className="bg-[#f6faff] font-sans text-[#171c20] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#0ea5e9]/20 blur-[80px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#6becfd]/20 blur-[100px]" />
      </div>

      {/* Main Container */}
      <main className="w-full max-w-[420px] px-4 relative z-10">
        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-[0_16px_40px_-12px_rgba(0,101,145,0.15)] overflow-hidden border border-[#f0f4fa] backdrop-blur-md relative">
          {/* Glassmorphic Highlight Edge */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent" />

          <div className="p-8 flex flex-col items-center">
            {/* Logo & Brand */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-20 h-20 rounded-xl bg-[#f0f4fa] border border-[#bec8d2]/30 flex items-center justify-center mb-4 shadow-sm">
                <span
                  className="material-symbols-outlined text-[#0EA5E9]"
                  style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}
                >
                  medical_services
                </span>
              </div>
              <h1 className="text-2xl font-bold text-[#0EA5E9] tracking-tight">MediCare</h1>
            </div>

            {/* Welcome Text */}
            <div className="w-full text-center mb-6">
              <h2 className="text-2xl font-semibold text-[#171c20] leading-tight mb-2">Welcome Back</h2>
              <p className="text-base text-[#3e4850] leading-normal">Sign in to manage patient records securely.</p>
            </div>

            {/* Login Form */}
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Role Selector */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="role">
                  Access Portal / Role
                </label>
                <div className="relative flex items-center group input-focus-ring rounded-xl border border-[#bec8d2] bg-white transition-all duration-200">
                  <span className="material-symbols-outlined absolute left-4 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>badge</span>
                  <select
                    className="w-full h-12 pl-12 pr-10 bg-transparent border-none text-base text-[#171c20] rounded-xl appearance-none cursor-pointer outline-none"
                    id="role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                  >
                    <option value="admin">Hospital Admin Portal</option>
                    <option value="doctor">Doctor Portal (Cardiology)</option>
                    <option value="staff">Staff Portal (Front Desk)</option>
                    <option value="patient">Patient Portal</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 text-[#6e7881] pointer-events-none" style={{ fontSize: '20px' }}>expand_more</span>
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative flex items-center group input-focus-ring rounded-xl border border-[#bec8d2] bg-white transition-all duration-200">
                  <span className="material-symbols-outlined absolute left-4 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>mail</span>
                  <input
                    className="w-full h-12 pl-12 pr-4 bg-transparent border-none text-base text-[#171c20] placeholder-[#6e7881] focus:ring-0 rounded-xl py-0 outline-none"
                    id="email"
                    placeholder="dr.smith@medicare.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center w-full">
                  <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] ml-1" htmlFor="password">
                    Password
                  </label>
                  <Link className="text-sm text-[#0EA5E9] hover:text-[#0ea5e9] transition-colors font-medium" to="/support">
                    Forgot?
                  </Link>
                </div>
                <div className="relative flex items-center group input-focus-ring rounded-xl border border-[#bec8d2] bg-white transition-all duration-200">
                  <span className="material-symbols-outlined absolute left-4 text-[#6e7881] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>lock</span>
                  <input
                    className="w-full h-12 pl-12 pr-12 bg-transparent border-none text-base text-[#171c20] placeholder-[#6e7881] focus:ring-0 rounded-xl py-0 outline-none"
                    id="password"
                    placeholder="••••••••"
                    required
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    className="absolute right-4 text-[#6e7881] hover:text-[#3e4850] transition-colors flex items-center justify-center p-1 rounded-full"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="mt-4 w-full h-12 bg-[#0EA5E9] text-white font-semibold text-base rounded-xl shadow-md hover:bg-[#0EA5E9]/90 hover:shadow-lg active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2 relative overflow-hidden group"
                type="submit"
              >
                <span className="relative z-10">Secure Login</span>
                <span className="material-symbols-outlined text-[20px] relative z-10 transition-transform group-hover:translate-x-1" style={{ fontSize: '20px' }}>arrow_forward</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-100 transition-opacity" />
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-8 w-full flex flex-col items-center gap-4">
              <p className="text-sm text-[#3e4850]">
                New to MediCare?{' '}
                <Link className="font-semibold text-[#0EA5E9] hover:text-[#0ea5e9] transition-colors ml-1" to="/signup">
                  Request Access
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* HIPAA Badge */}
        <div className="mt-4 flex justify-center items-center gap-2 text-[#3e4850]/70">
          <span className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
          <span className="text-xs uppercase tracking-wider font-semibold">HIPAA Compliant System</span>
        </div>
      </main>
    </div>
  );
};
