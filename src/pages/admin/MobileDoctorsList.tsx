import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    specialty: 'Pediatrics',
    status: 'Available',
    statusColor: 'bg-[#67E8F9]',
    rating: '4.9 (120)',
    time: '9:00 AM - 5:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjEuGS4fSRLFSDo6hd9VMEzQdGs7qZ-lmdexI4hkIQ7N7K8AGWhU1ZXGE_IJpbX7HUSj4sk2rGggs0QZz86q6ILj35rO4ylYzxwvFTjgWnW5jX9tn0GVbemzaJE0WNtDr1rWwWdJ0stZAtVr5wNdV6PFR4J9kG5yl2wN6-e_BvDs3WR2tS1mbCCmQDFvvV-K2mKsvWfh53VxOfvOwFRYoeNXUhcu7YbzaC-AGpnH31ZberWD1TY_THFZQ21CBL3DhtUkKAw0SHOhI',
  },
  {
    id: 2,
    name: 'Dr. Marcus Chen',
    specialty: 'Cardiology',
    status: 'In Surgery',
    statusColor: 'bg-[#ba1a1a]',
    rating: '4.8 (215)',
    time: '11:00 AM - 7:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpJUEuCx3ed8okt0QOzdRbMGfIi4DnytGqvaY0CrI_N1JZWwLNRwdCbjMSTR47PakycGmMtT-B3zxf3sCIL5biID7-xN54FeHlGHkPW8HJQSo-1tO3SNJ31uSxjEQJ_AxHbtltg7OcojYsM5dHe9uAmfeWQWougduOWoGpqGNgKLJDmyHErTaFvJPytucmpu603KFHsxeDBJ2IzjDcWKDhBTEHB4g74C2kgndCGpViMo_P2vKR_JteksDMVIBYmDhRJ8nP1f_lWs8',
  },
];

export const MobileDoctorsList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Doctors Directory" showSearch={true}>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#171c20]">Doctors Directory</h1>
            <p className="text-sm text-[#3e4850]">Manage and view all registered medical staff.</p>
          </div>
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3e4850]">search</span>
            <input className="w-full pl-10 pr-4 py-3 bg-white border border-[#bec8d2] rounded-xl text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 transition-all shadow-sm" placeholder="Search doctors..." type="text" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {doctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4 flex flex-col sm:flex-row gap-4 items-start transition-shadow hover:shadow-md">
              <img className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#dee3e9]" src={doctor.image} alt={doctor.name} />
              <div className="flex-1 min-w-0 w-full">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-lg font-semibold text-[#171c20] truncate">{doctor.name}</h2>
                  <span className="bg-[#6becfd]/20 text-[#67E8F9] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${doctor.statusColor}`} /> {doctor.status}
                  </span>
                </div>
                <p className="text-sm text-[#0EA5E9] mb-2 font-medium">{doctor.specialty}</p>
                <div className="flex items-center gap-4 text-sm text-[#3e4850] mb-4">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#5B21B6] text-sm">star</span>
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>{doctor.time}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#eaeef4] text-[#171c20] font-semibold py-2 rounded-lg text-sm hover:bg-[#e4e8ee] transition-colors border border-[#bec8d2]/30">View Profile</button>
                  <button className="flex-1 bg-white text-[#0EA5E9] border border-[#bec8d2]/50 font-semibold py-2 rounded-lg text-sm hover:bg-[#f0f4fa] transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span> Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FAB */}
      <div className="fixed bottom-24 right-4 z-40">
        <button 
          onClick={() => navigate('/admin/doctors/add')}
          className="w-14 h-14 bg-[#0EA5E9] text-white rounded-full shadow-ambient flex items-center justify-center hover:bg-[#0EA5E9]/90 transition-all active:scale-95 focus:ring-4 focus:ring-[#0EA5E9]/20"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>add</span>
        </button>
      </div>
    </DashboardLayout>
  );
};
