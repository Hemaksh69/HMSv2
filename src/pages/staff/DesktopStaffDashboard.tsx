import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';





export const DesktopStaffDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Staff Dashboard" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full space-y-8">
          
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#171c20]">Welcome back, Sarah</h1>
              <p className="text-[#3e4850] mt-1">Front Desk Overview</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/staff/register')}
                className="flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] text-white rounded-xl font-bold shadow-ambient hover:bg-[#0EA5E9]/90 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
                Register Patient
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Stats Column */}
            <div className="lg:col-span-2 space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#bec8d2]/30 flex items-center justify-between col-span-2">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9]">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#3e4850] font-medium">Checked-In Patients Today</p>
                      <p className="text-4xl font-bold text-[#171c20]">42</p>
                    </div>
                  </div>
                  <div className="h-12 w-32 rounded-full bg-[#f0f4fa] flex items-center px-3">
                    <div className="flex-1 h-3/4 flex items-end gap-1.5">
                      <div className="w-3 bg-[#0EA5E9] rounded-full h-full" />
                      <div className="w-3 bg-[#0EA5E9]/60 rounded-full h-3/4" />
                      <div className="w-3 bg-[#0EA5E9]/80 rounded-full h-full" />
                      <div className="w-3 bg-[#0EA5E9] rounded-full h-5/6" />
                      <div className="w-3 bg-[#0EA5E9]/40 rounded-full h-1/2" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#bec8d2]/30 flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#ad85ff]/20 flex items-center justify-center text-[#5B21B6] mb-4">
                    <span className="material-symbols-outlined text-2xl">pending_actions</span>
                  </div>
                  <p className="text-3xl font-bold text-[#171c20]">12</p>
                  <p className="text-sm text-[#3e4850] font-medium leading-tight mt-1">Pending Approvals</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ffdad6] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#ba1a1a]/5 rounded-full blur-xl" />
                  <div className="w-12 h-12 rounded-full bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a] mb-4 relative z-10">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                  </div>
                  <p className="text-3xl font-bold text-[#ba1a1a] relative z-10">3</p>
                  <p className="text-sm text-[#ba1a1a] font-medium leading-tight mt-1 relative z-10">Active ER Cases</p>
                </div>
              </div>

              {/* Patient Queue */}
              <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/20 overflow-hidden">
                <div className="p-5 border-b border-[#bec8d2]/20 flex justify-between items-center bg-[#f6faff]">
                  <h2 className="text-lg font-bold text-[#171c20] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0EA5E9]">groups</span> Waiting Room Queue
                  </h2>
                  <button className="text-[#0EA5E9] text-sm font-semibold hover:underline">View Queue</button>
                </div>
                <div className="divide-y divide-[#bec8d2]/10">
                  <div className="p-4 flex items-center justify-between hover:bg-[#f0f4fa] transition-colors cursor-pointer bg-[#6becfd]/10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#ad85ff]/20 text-[#420095] flex items-center justify-center font-bold">MJ</div>
                      <div>
                        <h3 className="font-semibold text-[#171c20]">Michael Johnson</h3>
                        <p className="text-sm text-[#3e4850]">Checked in: 10:15 AM</p>
                      </div>
                    </div>
                    <span className="bg-[#6becfd]/30 text-[#67E8F9] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Next up</span>
                  </div>
                  <div className="p-4 flex items-center justify-between hover:bg-[#f0f4fa] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/20 text-[#0EA5E9] flex items-center justify-center font-bold">AK</div>
                      <div>
                        <h3 className="font-semibold text-[#171c20]">Anna Kowalski</h3>
                        <p className="text-sm text-[#3e4850]">Checked in: 10:25 AM</p>
                      </div>
                    </div>
                    <span className="bg-[#eaeef4] text-[#3e4850] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Waiting</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm font-bold text-[#3e4850] uppercase tracking-widest">Action Required</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Michael Chang', type: 'Prescription Refill', tag: 'Medication', tagColor: 'text-[#5B21B6]', tagBg: 'bg-[#ad85ff]/20' },
                    { name: 'Elena Rostova', type: 'Lab Results Review', tag: 'Diagnostics', tagColor: 'text-[#67E8F9]', tagBg: 'bg-[#6becfd]/30' }
                  ].map(item => (
                    <div key={item.name} className="p-4 rounded-xl border border-[#bec8d2]/30 bg-[#f6faff]">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-bold text-[#171c20]">{item.name}</p>
                          <p className="text-xs text-[#3e4850] mt-1">{item.type}</p>
                        </div>
                        <span className={`${item.tagBg} ${item.tagColor} text-[10px] font-bold uppercase px-2 py-1 rounded-full`}>{item.tag}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-white border border-[#bec8d2]/50 text-[#171c20] py-1.5 rounded-lg text-xs font-semibold hover:bg-[#e4e8ee] transition-colors">Review</button>
                        <button className="flex-1 bg-[#0EA5E9] text-white py-1.5 rounded-lg text-xs font-semibold hover:bg-[#0EA5E9]/90 transition-colors">Approve</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
    </DashboardLayout>
    );
};
