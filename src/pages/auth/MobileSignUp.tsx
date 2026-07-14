import React from 'react';
import { Link } from 'react-router-dom';

export const MobileSignUp: React.FC = () => {
  return (
    <div className="bg-[#f6faff] font-sans text-[#171c20] min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0ea5e9] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ad85ff] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <main className="w-full max-w-md z-10">
        <div className="glass-card rounded-xl shadow-ambient p-8 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shadow-ambient flex items-center justify-center border border-[#bec8d2]/30 p-2">
              <span className="material-symbols-outlined text-[#0EA5E9]" style={{ fontSize: '52px', fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-[#171c20]">Join MediCare</h1>
              <p className="text-base text-[#3e4850] mt-1">Create your account to get started.</p>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: 'Full Name', id: 'name', icon: 'person', placeholder: 'John Doe', type: 'text' },
              { label: 'Email Address', id: 'email', icon: 'mail', placeholder: 'john@example.com', type: 'email' },
              { label: 'Phone Number', id: 'phone', icon: 'phone', placeholder: '(555) 123-4567', type: 'tel' },
              { label: 'Password', id: 'password', icon: 'lock', placeholder: '••••••••', type: 'password' },
              { label: 'Confirm Password', id: 'confirm_password', icon: 'lock', placeholder: '••••••••', type: 'password' },
            ].map(({ label, id, icon, placeholder, type }) => (
              <div key={id} className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#171c20] ml-1" htmlFor={id}>
                  {label}
                </label>
                <div className="relative input-focus-ring rounded-xl border border-[#dee3e9] bg-white">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7881]" style={{ fontSize: '20px' }}>{icon}</span>
                  <input
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-transparent border-none text-base text-[#171c20] placeholder-[#6e7881] focus:outline-none transition-all"
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    required
                    type={type}
                  />
                </div>
              </div>
            ))}

            <button
              className="w-full bg-[#0EA5E9] text-white font-semibold text-sm py-3 mt-2 rounded-xl shadow-sm hover:bg-[#0EA5E9]/90 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:ring-offset-2 transition-all active:scale-[0.98] uppercase tracking-wider"
              type="submit"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-[#3e4850]">
              Already have an account?{' '}
              <Link className="text-[#0EA5E9] font-semibold hover:text-[#0ea5e9] transition-colors" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
