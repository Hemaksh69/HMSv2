import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Badge } from '../../components/ui/Badge';

const patients = [
  {
    id: 'MC-84729',
    name: 'Robert Johnson',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1lj__sASXWeYs6eYOgfzURrGUsK3lb290etosAtf0QruOmnMNCp9gbuetBMGM_2US_tnkbQznrymk5aQSt-pnOIFncNAo6viyTEj3Z-kT9BhU7k9ugUAJHTrQrOgQVjD7xuZC2YmSo9QYbTwD34ATZwTR1O9kbrIh5Ekh9D2_SyDNUhe8n1RFU43oaZnml_6DCMpKGNPIEC0rM8dkMIBKUKgYXDrvv6Iuv_f4fi8h9o1rSFHmIUk8tloeE5Pc9G0sKxErPTLipnY',
    lastVisit: 'Oct 12, 2023',
    status: 'Active' as const,
    accentColor: 'bg-[#0EA5E9]',
  },
  {
    id: 'MC-39210',
    name: 'Maria Garcia',
    initials: 'MS',
    bgColor: 'bg-[#ad85ff] text-[#420095]',
    lastVisit: 'Jun 05, 2023',
    status: 'Inactive' as const,
    accentColor: 'bg-[#bec8d2]',
  },
  {
    id: 'MC-55102',
    name: 'Emily Chen',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1PmjhNnAJHvkqHjzDKQ_ni324fsMagIoX4ba-TylyL6ELJ00jIEd9ZmbpGXPQi_6h9OJh7VA20yRPLPlQqsvQtWOZDBvgIHtCv_6wVOADyL1Iws7jPe2vYBW_d9qGLsKNSFamR8bfOAB4PFBQZlWOTPiNBOQBo74gLUvo-3eccHcdkEEptZjQ5gdpaLSIWZRHV3KIciS1t_wHlF2Dnmj0gL4-SzLzik707UsYBFZCF5En_Nl8dR4x9kWZSUcG_IzcchhJAvKdiMI',
    lastVisit: 'Today, 10:30 AM',
    status: 'Active' as const,
    accentColor: 'bg-[#0EA5E9]',
  },
];

export const MobilePatientsList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Patients Directory" showSearch={true}>
      <main className="flex-1 flex flex-col px-4 py-4 gap-6 w-full max-w-3xl mx-auto">
        {/* Search and Filter */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 w-full">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7881]" style={{ fontSize: '20px' }}>search</span>
              <input
                className="w-full h-12 pl-10 pr-4 rounded-xl bg-white border border-[#bec8d2] focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none text-base transition-all"
                placeholder="Search patients..."
                type="text"
              />
            </div>
            <button className="h-12 px-4 rounded-xl bg-white border border-[#bec8d2] text-[#171c20] flex items-center justify-center gap-2 hover:bg-[#f0f4fa] transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>filter_list</span>
            </button>
          </div>
          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['All Patients', 'Active', 'Inactive', 'Recent Visit'].map((label, idx) => (
              <button
                key={label}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                  idx === 0
                    ? 'bg-[#0EA5E9] text-white'
                    : 'bg-[#dee3e9] text-[#3e4850] border border-[#bec8d2]/30 hover:bg-[#f0f4fa] transition-colors'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Patients List */}
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-[#171c20]">Patients List</h2>
          <div className="flex flex-col gap-3">
            {patients.map((patient) => (
              <div 
                key={patient.id} 
                onClick={() => navigate(`/admin/patients/${patient.id}`)}
                className="bg-white rounded-xl p-4 shadow-ambient flex flex-col gap-3 relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-transform"
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${patient.accentColor}`} />
                <div className="flex justify-between items-start w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center text-sm font-semibold flex-shrink-0 bg-[#0ea5e9] text-white">
                      {patient.avatar ? (
                        <img src={patient.avatar} alt={patient.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className={`w-full h-full flex items-center justify-center ${patient.bgColor}`}>{patient.initials}</span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-[#171c20]">{patient.name}</span>
                      <span className="text-sm text-[#6e7881]">ID: {patient.id}</span>
                    </div>
                  </div>
                  <Badge label={patient.status} variant={patient.status === 'Active' ? 'active' : 'inactive'} />
                </div>
                <div className="h-px w-full bg-[#bec8d2]/30" />
                <div className="flex justify-between items-center text-sm text-[#3e4850]">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                    <span>Last visit: {patient.lastVisit}</span>
                  </div>
                  <button className="text-[#0EA5E9] hover:text-[#89ceff] transition-colors p-1 flex items-center justify-center rounded-full hover:bg-[#f0f4fa]">
                    <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <button className="text-[#0EA5E9] text-xs font-semibold flex items-center gap-1 py-2 px-4 rounded-full hover:bg-[#f0f4fa] transition-colors">
              Load More <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>expand_more</span>
            </button>
          </div>
        </section>
      </main>

      {/* FAB */}
      <div className="fixed bottom-24 right-4 z-40">
        <button 
          onClick={() => navigate('/admin/patients/add')}
          className="w-14 h-14 bg-[#0EA5E9] text-white rounded-full shadow-ambient flex items-center justify-center hover:bg-[#0EA5E9]/90 transition-all active:scale-95 focus:ring-4 focus:ring-[#0EA5E9]/20"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>add</span>
        </button>
      </div>
    </DashboardLayout>
  );
};
