import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';





export const DesktopPatientDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Hi, Alex" subtitle="Welcome back to your patient portal" showSearch={false} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Welcome Intro Card instead of Upcoming Appointment */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-ambient relative overflow-hidden border border-[#0ea5e9]/10">
            <div className="absolute -right-8 -top-8 w-48 h-48 bg-[#0ea5e9]/20 rounded-full blur-2xl" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-[#ad85ff]/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[#171c20] mb-2">Welcome to Aqua Premium HMS</h2>
              <p className="text-base text-[#3e4850] max-w-2xl leading-relaxed">
                Access your prescriptions, medical records, invoices, and lab test results securely in one place. If you need any assistance, contact our support team.
              </p>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div>
            <h3 className="text-sm font-bold text-[#3e4850] uppercase tracking-wider mb-4 px-1">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4 border border-[#bec8d2]/20 shadow-sm hover:shadow-md transition-all active:scale-95 text-left">
                <div className="w-12 h-12 rounded-full bg-[#6becfd]/20 text-[#67E8F9] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>prescriptions</span>
                </div>
                <div>
                  <p className="font-bold text-[#171c20]">Prescriptions</p>
                  <p className="text-xs text-[#3e4850] mt-1">View & refill</p>
                </div>
              </button>
              <button className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4 border border-[#bec8d2]/20 shadow-sm hover:shadow-md transition-all active:scale-95 text-left">
                <div className="w-12 h-12 rounded-full bg-[#ad85ff]/20 text-[#5B21B6] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                </div>
                <div>
                  <p className="font-bold text-[#171c20]">Records</p>
                  <p className="text-xs text-[#3e4850] mt-1">Download history</p>
                </div>
              </button>
              <button className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4 border border-[#bec8d2]/20 shadow-sm hover:shadow-md transition-all active:scale-95 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#89ceff]/10 to-transparent" />
                <div className="w-12 h-12 rounded-full bg-[#dee3e9] text-[#171c20] flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span>
                </div>
                <div className="relative z-10">
                  <p className="font-bold text-[#171c20]">Test Results</p>
                  <p className="text-xs text-[#3e4850] mt-1">Lab reports</p>
                </div>
              </button>
            </div>
          </div>

        </div>
    </DashboardLayout>
    );
};
