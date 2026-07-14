import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';




export const MobileStaffDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Welcome" showSearch={true}>
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-24 space-y-8">
        
        {/* Quick Actions */}
        <section className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => navigate('/staff/register')}
            className="flex flex-row items-center justify-center gap-3 p-4 bg-[#0EA5E9] text-white rounded-xl shadow-ambient active:scale-95 transition-transform w-full"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
            <span className="font-semibold text-sm">Register New Patient</span>
          </button>
        </section>

        {/* Overview (Bento Grid) */}
        <section>
          <h2 className="text-sm font-semibold text-[#3e4850] uppercase tracking-widest mb-4 px-1">Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-white rounded-xl p-5 shadow-sm border border-[#bec8d2]/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9]">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                </div>
                <div>
                  <p className="text-sm text-[#3e4850] font-medium">Checked-In Patients</p>
                  <p className="text-3xl font-bold text-[#171c20]">42</p>
                </div>
              </div>
              <div className="h-10 w-24 rounded-full bg-[#f0f4fa] flex items-center px-2">
                <div className="flex-1 h-1/2 flex items-end gap-1">
                  <div className="w-2 bg-[#0EA5E9] rounded-full h-full" />
                  <div className="w-2 bg-[#0EA5E9]/60 rounded-full h-3/4" />
                  <div className="w-2 bg-[#0EA5E9]/80 rounded-full h-full" />
                  <div className="w-2 bg-[#0EA5E9] rounded-full h-5/6" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#bec8d2]/30 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-[#ad85ff]/20 flex items-center justify-center text-[#5B21B6] mb-2">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <p className="text-2xl font-bold text-[#171c20]">12</p>
              <p className="text-sm text-[#3e4850] font-medium leading-tight mt-1">Pending Approvals</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#ffdad6] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ba1a1a]/5 rounded-full blur-xl" />
              <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a] mb-2 relative z-10">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              </div>
              <p className="text-2xl font-bold text-[#ba1a1a] relative z-10">3</p>
              <p className="text-sm text-[#ba1a1a] font-medium leading-tight mt-1 relative z-10">Active ER Cases</p>
            </div>
          </div>
        </section>

        {/* Pending Approvals */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-sm font-semibold text-[#3e4850] uppercase tracking-widest">Pending Approvals</h2>
            <button className="text-[#0EA5E9] text-sm font-semibold">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Michael Chang', type: 'Prescription Refill • Lisinopril', tag: 'Medication', tagColor: 'text-[#5B21B6]', tagBg: 'bg-[#ad85ff]/20' },
              { name: 'Elena Rostova', type: 'Lab Results Review • Blood Panel', tag: 'Diagnostics', tagColor: 'text-[#67E8F9]', tagBg: 'bg-[#6becfd]/30' }
            ].map(item => (
              <div key={item.name} className="bg-white p-4 rounded-xl shadow-sm border border-[#bec8d2]/30">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-semibold text-[#171c20] text-lg">{item.name}</p>
                    <p className="text-sm text-[#3e4850]">{item.type}</p>
                  </div>
                  <span className={`${item.tagBg} ${item.tagColor} text-[10px] font-bold uppercase px-2 py-1 rounded-full`}>{item.tag}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#eaeef4] border border-[#bec8d2]/50 text-[#171c20] py-2 rounded-lg text-sm font-semibold active:bg-[#e4e8ee] transition-colors">Reject</button>
                  <button className="flex-1 bg-[#0EA5E9] text-white py-2 rounded-lg text-sm font-semibold active:scale-[0.98] transition-transform">Approve</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </DashboardLayout>
    );
};
