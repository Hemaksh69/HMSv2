import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';




export const MobilePatientDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Hi, Alex" showSearch={true}>
      <main className="flex-1 px-4 pb-24 flex flex-col gap-6">
        
        {/* Welcome Card instead of Upcoming Appointment */}
        <section className="mt-2">
          <div className="bg-white/85 backdrop-blur-md rounded-[20px] p-5 shadow-ambient relative overflow-hidden border border-[#0ea5e9]/10">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-2xl" />
            <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-[#ad85ff]/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <h2 className="text-lg font-bold text-[#171c20] mb-1">Welcome to Aqua Premium HMS</h2>
              <p className="text-xs text-[#3e4850] leading-relaxed">
                Access prescriptions, records, invoices, and lab test results securely in your portal.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions Grid */}
        <section>
          <h3 className="text-sm font-bold text-[#3e4850] uppercase tracking-wider mb-3 px-1">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <button className="bg-white rounded-xl p-4 flex flex-row items-center gap-4 border border-[#bec8d2]/20 shadow-sm hover:shadow-md transition-all active:scale-95 text-left w-full">
              <div className="w-10 h-10 rounded-full bg-[#6becfd]/20 text-[#67E8F9] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>prescriptions</span>
              </div>
              <div>
                <p className="font-semibold text-[#171c20] text-sm">Prescriptions</p>
                <p className="text-[10px] text-[#3e4850] mt-0.5">View & refill</p>
              </div>
            </button>
            <button className="bg-white rounded-xl p-4 flex flex-row items-center gap-4 border border-[#bec8d2]/20 shadow-sm hover:shadow-md transition-all active:scale-95 text-left w-full">
              <div className="w-10 h-10 rounded-full bg-[#ad85ff]/20 text-[#5B21B6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
              </div>
              <div>
                <p className="font-semibold text-[#171c20] text-sm">Records</p>
                <p className="text-[10px] text-[#3e4850] mt-0.5">Download history</p>
              </div>
            </button>
            <button className="bg-white rounded-xl p-4 flex flex-row items-center gap-4 border border-[#bec8d2]/20 shadow-sm hover:shadow-md transition-all active:scale-95 text-left relative overflow-hidden w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#89ceff]/10 to-transparent" />
              <div className="w-10 h-10 rounded-full bg-[#dee3e9] text-[#171c20] flex items-center justify-center relative z-10 shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span>
              </div>
              <div className="relative z-10">
                <p className="font-semibold text-[#171c20] text-sm">Test Results</p>
                <p className="text-[10px] text-[#3e4850] mt-0.5">Lab reports</p>
              </div>
            </button>
          </div>
        </section>

      </main>
    </DashboardLayout>
    );
};
