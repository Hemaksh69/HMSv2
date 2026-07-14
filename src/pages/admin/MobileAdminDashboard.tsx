import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

const departments = [
  { name: 'Cardiology', percent: 85, color: 'bg-[#0EA5E9]', textColor: 'text-[#171c20]' },
  { name: 'Neurology', percent: 62, color: 'bg-[#67E8F9]', textColor: 'text-[#3e4850]' },
  { name: 'Pediatrics', percent: 92, color: 'bg-[#ba1a1a]', textColor: 'text-[#ba1a1a]' },
  { name: 'Orthopedics', percent: 45, color: 'bg-[#5B21B6]', textColor: 'text-[#3e4850]' },
];

export const MobileAdminDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Medicare" showSearch={true}>
      <main className="px-4 flex flex-col gap-6 py-4 max-w-7xl mx-auto">
        {/* Main Stat Card */}
        <section className="glass-card rounded-xl p-6 flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-2xl" />
          <div className="flex justify-between items-start z-10">
            <div>
              <p className="text-sm text-[#3e4850] font-medium">Total Patients</p>
              <h2 className="text-3xl font-bold text-[#0EA5E9] leading-tight mt-1">12,450</h2>
            </div>
            <div className="bg-white rounded-full p-2 shadow-sm border border-[#bec8d2]/20">
              <span className="material-symbols-outlined text-[#0EA5E9]" style={{ fontSize: '24px' }}>group</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 z-10">
            <div className="flex items-center text-[#67E8F9] font-medium bg-[#6becfd]/30 px-2 py-1 rounded text-xs">
              <span className="material-symbols-outlined mr-1" style={{ fontSize: '16px' }}>trending_up</span>
              +15%
            </div>
            <span className="text-xs text-[#3e4850]">vs last month</span>
          </div>
        </section>

        {/* Small Stat Grid */}
        <section className="grid grid-cols-2 gap-4">
          {[
            { icon: 'group', label: 'Active Staff', value: '48', sub: 'On shift', iconColor: 'text-[#5B21B6]' },
            { icon: 'bed', label: 'Inpatients', value: '1,024', sub: 'Current occupancy', iconColor: 'text-[#0EA5E9]' },
            { icon: 'directions_walk', label: 'Outpatients', value: '856', sub: 'Today', iconColor: 'text-[#67E8F9]' },
            { icon: 'healing', label: 'Surgeries', value: '24', sub: 'Scheduled today', iconColor: 'text-[#ba1a1a]' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#bec8d2]/20 flex flex-col gap-2 hover:bg-[#f0f4fa] transition-colors">
              <div className="flex items-center gap-2 text-[#3e4850] mb-1">
                <span className={`material-symbols-outlined ${stat.iconColor}`} style={{ fontSize: '18px' }}>{stat.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wider">{stat.label}</span>
              </div>
              <p className="text-xl font-bold text-[#171c20]">{stat.value}</p>
              <p className="text-[10px] text-[#3e4850]">{stat.sub}</p>
            </div>
          ))}
        </section>

        {/* Departments List */}
        <section className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[#0EA5E9]">Department Occupancy</h3>
          <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/20 overflow-hidden">
            {departments.map((dept, idx) => (
              <div key={dept.name} className={`p-4 flex flex-col gap-2 hover:bg-[#f0f4fa] transition-colors ${idx < departments.length - 1 ? 'border-b border-[#bec8d2]/20' : ''}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#171c20]">{dept.name}</span>
                  <span className={`text-xs font-semibold ${dept.textColor}`}>{dept.percent}%</span>
                </div>
                <div className="w-full bg-[#eaeef4] h-2 rounded-full overflow-hidden">
                  <div className={`${dept.color} h-full rounded-full`} style={{ width: `${dept.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};
