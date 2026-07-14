import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';




export const MobilePatientDetail: React.FC = () => {
  return (
    <DashboardLayout title="Eleanor Vance" showSearch={true}>
      <main className="flex-1 overflow-y-auto w-full max-w-3xl mx-auto px-4 py-4 pb-24">
        {/* Patient Header Card */}
        <section className="bg-white rounded-xl shadow-ambient p-4 mb-6 flex items-center gap-4 relative overflow-hidden border border-[#bec8d2]/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/10 rounded-bl-full -z-10" />
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#eaeef4] flex-shrink-0 relative">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfiPMIqlpHHkouiMcKMVqaxfJ1RTTNIlh4Y2nEomY8O_R57rNFwHi5ISAxIXhtVR2ginRzaEX9svjqqFtAYVFfKIhyE1mlqdvCpwS3tg8tbBSAiQ5T9gWtKxLBKF5JU2PXfgOWoivi3Ut2cyiaPw47zinWzWaPCsmn7LExFvQ7sjr_ey0r_cYf5S39odEiecE-4EMKaVjDQ8dVUdeKxYlhAmP9cN8X0EjrR600GyOJ5h6oAIEzX9_aMG4DYlqSSg_YTbsFdRrCcKQ" alt="Eleanor Vance" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#67E8F9] rounded-full border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-semibold text-[#171c20] truncate">Eleanor Vance</h1>
            <p className="text-sm text-[#3e4850] mb-1">ID: #MRN-84920</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-0.5 rounded-full bg-[#eaeef4] text-[#3e4850] text-[10px] font-bold uppercase tracking-wider">Female, 68</span>
              <span className="px-2 py-0.5 rounded-full bg-[#0ea5e9]/20 text-[#003751] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">verified</span> Active
              </span>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <nav className="flex overflow-x-auto scrollbar-hide gap-4 mb-6 border-b border-[#bec8d2]/30 pb-2">
          {['Overview', 'Appts', 'Rx', 'Billing', 'Docs'].map((tab, idx) => (
            <button key={tab} className={`whitespace-nowrap px-1 py-2 text-base font-semibold ${idx === 0 ? 'text-[#0EA5E9] border-b-2 border-[#0EA5E9]' : 'text-[#3e4850] opacity-70'}`}>
              {tab}
            </button>
          ))}
        </nav>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Quick Stats */}
          <div className="col-span-2 grid grid-cols-3 gap-2">
            {[
              { icon: 'local_hospital', val: '14', label: 'Total Visits', color: 'text-[#0EA5E9]' },
              { icon: 'event_upcoming', val: 'Oct 12', label: 'Next Appt', color: 'text-[#5B21B6]' },
              { icon: 'payments', val: '$45.00', label: 'Balance', color: 'text-[#67E8F9]' },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-xl p-2 flex flex-col items-center justify-center shadow-sm border border-[#bec8d2]/10">
                <span className={`material-symbols-outlined mb-1 ${stat.color}`}>{stat.icon}</span>
                <span className="text-lg font-bold text-[#171c20] mt-1">{stat.val}</span>
                <span className="text-[10px] text-[#3e4850] text-center leading-tight uppercase font-semibold tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Active Conditions */}
          <div className="col-span-2 bg-white rounded-xl shadow-ambient p-4 border border-[#bec8d2]/20">
            <div className="flex items-center justify-between mb-4 border-b border-[#bec8d2]/20 pb-2">
              <h3 className="text-lg font-semibold text-[#171c20] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0EA5E9]">monitor_heart</span> Conditions
              </h3>
              <button className="text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">Edit</button>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 bg-[#f6faff] p-2 rounded-md border border-[#dee3e9]">
                <div className="w-2 h-2 rounded-full bg-[#ba1a1a] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#171c20]">Hypertension</p>
                  <p className="text-xs text-[#3e4850]">Diagnosed: 2019 • Managed via medication</p>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-[#f6faff] p-2 rounded-md border border-[#dee3e9]">
                <div className="w-2 h-2 rounded-full bg-[#67E8F9] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#171c20]">Type 2 Diabetes</p>
                  <p className="text-xs text-[#3e4850]">Diagnosed: 2021 • Diet controlled</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Allergies */}
          <div className="col-span-2 bg-[#ffdad6]/30 rounded-xl shadow-sm p-4 border border-[#ba1a1a]/20">
            <h3 className="text-lg font-semibold text-[#93000a] flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#ba1a1a]">warning</span> Allergies
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-white rounded-full text-[#ba1a1a] text-sm border border-[#ba1a1a]/30 flex items-center gap-1 shadow-sm font-semibold">Penicillin</span>
              <span className="px-3 py-1 bg-white rounded-full text-[#ba1a1a] text-sm border border-[#ba1a1a]/30 flex items-center gap-1 shadow-sm font-semibold">Latex (Mild)</span>
            </div>
          </div>

          {/* Action Button */}
          <button className="col-span-2 mt-2 bg-[#0EA5E9] text-white text-base font-semibold rounded-xl py-3 flex items-center justify-center gap-2 shadow-md hover:bg-[#0EA5E9]/90 active:scale-95 transition-all w-full">
            <span className="material-symbols-outlined">edit_note</span> Add Clinical Note
          </button>
        </div>
      </main>
    </DashboardLayout>
    );
};
