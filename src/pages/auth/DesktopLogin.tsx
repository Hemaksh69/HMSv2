import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../context/AuthContext';

export const DesktopLogin: React.FC = () => {
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
    <div className="font-sans text-[#171c20] aqua-gradient min-h-screen flex flex-col items-center justify-center p-6">
      {/* Login Container */}
      <main className="w-full max-w-5xl">
        {/* Main Card */}
        <div className="glass-card-strong rounded-3xl overflow-hidden flex shadow-2xl shadow-[#0EA5E9]/10" style={{ minHeight: '600px' }}>

          {/* ── Left Side: Illustration & Branding ── */}
          <section
            className="w-[45%] shrink-0 flex flex-col justify-center items-center p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #f0f8ff 0%, #e0f2fe 50%, #cffafe 100%)' }}
          >
            {/* Branding Header */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0EA5E9] rounded-xl flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              </div>
              <span className="text-2xl font-bold text-[#0EA5E9]">MediCare</span>
            </div>

            {/* Illustration */}
            <div className="relative z-10 text-center">
              <div
                className="w-[260px] h-[220px] mx-auto mb-8 rounded-3xl flex items-center justify-center shadow-xl"
                style={{ background: 'linear-gradient(135deg, #BAE6FD 0%, #67E8F9 100%)' }}
              >
                <span className="material-symbols-outlined text-white" style={{ fontSize: '110px', fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
              </div>
              <h2 className="text-3xl font-bold text-[#171c20] mb-3">Better Care<br />Better Health</h2>
              <p className="text-base text-[#3e4850] max-w-xs mx-auto leading-relaxed">
                Experience the next generation of healthcare management with our intuitive clinical ecosystem.
              </p>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#67E8F9]/10 rounded-full blur-3xl pointer-events-none" />
          </section>

          {/* ── Right Side: Login Form ── */}
          <section className="flex-1 flex flex-col justify-center bg-white px-12 py-10">
            <div className="w-full max-w-sm mx-auto">

              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#171c20] mb-2">Welcome Back</h1>
                <p className="text-base text-[#3e4850]">Log in to your clinical dashboard</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Role Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold tracking-widest uppercase text-[#3e4850]" htmlFor="role">
                    Access Portal / Role
                  </label>
                  <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white transition-shadow">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#73787D] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>badge</span>
                    <select
                      className="w-full pl-12 pr-10 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] rounded-xl appearance-none cursor-pointer"
                      id="role"
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                    >
                      <option value="admin">Hospital Admin Portal</option>
                      <option value="doctor">Doctor Portal (Cardiology)</option>
                      <option value="staff">Staff Portal (Front Desk)</option>
                      <option value="patient">Patient Portal</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#73787D] pointer-events-none" style={{ fontSize: '20px' }}>expand_more</span>
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold tracking-widest uppercase text-[#3e4850]" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white transition-shadow">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#73787D] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>mail</span>
                    <input
                      className="w-full pl-12 pr-4 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] placeholder-[#73787D] rounded-xl"
                      id="email"
                      placeholder="dr.smith@medicare.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold tracking-widest uppercase text-[#3e4850]" htmlFor="password">
                      Password
                    </label>
                    <Link className="text-xs font-semibold text-[#0EA5E9] hover:underline" to="/support">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative group input-focus-ring rounded-xl border border-[#bec8d2] bg-white transition-shadow">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#73787D] group-focus-within:text-[#0EA5E9] transition-colors" style={{ fontSize: '20px' }}>lock</span>
                    <input
                      className="w-full pl-12 pr-12 py-3.5 bg-transparent border-none outline-none text-base text-[#171c20] placeholder-[#73787D] rounded-xl"
                      id="password"
                      placeholder="••••••••"
                      required
                      type={showPassword ? 'text' : 'password'}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#73787D] hover:text-[#171c20] transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  className="w-full bg-[#0EA5E9] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-[#0EA5E9]/25 hover:bg-[#0284C7] active:scale-95 transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Login</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                </button>

                {/* Divider */}
                <div className="relative flex items-center py-1">
                  <div className="flex-grow border-t border-[#bec8d2]" />
                  <span className="mx-4 text-[#73787D] text-xs font-bold">OR</span>
                  <div className="flex-grow border-t border-[#bec8d2]" />
                </div>

                {/* SSO Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="flex items-center justify-center gap-2 py-3 px-3 border border-[#bec8d2] rounded-xl text-sm font-semibold text-[#171c20] hover:bg-[#f0f4fa] active:scale-95 transition-all whitespace-nowrap"
                    type="button"
                  >
                    <span className="material-symbols-outlined shrink-0" style={{ fontSize: '18px' }}>verified_user</span>
                    Hospital ID
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 py-3 px-3 border border-[#bec8d2] rounded-xl text-sm font-semibold text-[#171c20] hover:bg-[#f0f4fa] active:scale-95 transition-all whitespace-nowrap"
                    type="button"
                  >
                    <span className="material-symbols-outlined shrink-0" style={{ fontSize: '18px' }}>key</span>
                    Single Sign-On
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-[#3e4850]">
                  New patient?{' '}
                  <Link className="text-[#0EA5E9] font-bold hover:underline" to="/signup">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Legal Footer */}
        <footer className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-semibold text-[#73787D]">
          <Link className="hover:text-[#0EA5E9] transition-colors" to="/support">Privacy Policy</Link>
          <Link className="hover:text-[#0EA5E9] transition-colors" to="/support">Terms of Service</Link>
          <Link className="hover:text-[#0EA5E9] transition-colors" to="/support">System Status</Link>
          <span>© 2024 MediCare Inc.</span>
        </footer>
      </main>
    </div>
  );
};
