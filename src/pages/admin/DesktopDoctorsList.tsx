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

export const DesktopDoctorsList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Doctors Directory" showSearch={true}>
      <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#171c20]">Doctors Directory</h1>
            <p className="text-[#3e4850] mt-1">Manage and view all registered medical staff.</p>
          </div>
          <button 
            onClick={() => navigate('/admin/doctors/add')}
            className="flex items-center gap-2 bg-[#0EA5E9] text-white py-2 px-6 rounded-xl font-semibold shadow-sm hover:bg-[#0EA5E9]/90 transition-colors"
          >
            <span className="material-symbols-outlined">person_add</span> Add Doctor
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {doctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-sm border border-[#bec8d2]/30 p-6 flex flex-col sm:flex-row gap-6 items-start transition-shadow hover:shadow-md">
              <img className="w-24 h-24 rounded-2xl object-cover shrink-0 border border-[#dee3e9]" src={doctor.image} alt={doctor.name} />
              <div className="flex-1 min-w-0 w-full">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-[#171c20] truncate">{doctor.name}</h2>
                  <span className="bg-[#6becfd]/20 text-[#67E8F9] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${doctor.statusColor}`} /> {doctor.status}
                  </span>
                </div>
                <p className="text-[#0EA5E9] mb-4 font-semibold">{doctor.specialty}</p>
                
                <div className="flex items-center gap-6 text-sm text-[#3e4850] mb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#5B21B6] text-base">star</span>
                    <span className="font-medium">{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span className="font-medium">{doctor.time}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#eaeef4] text-[#171c20] font-semibold py-2.5 rounded-xl hover:bg-[#e4e8ee] transition-colors border border-[#bec8d2]/30">
                    View Profile
                  </button>
                  <button className="flex-1 bg-white text-[#0EA5E9] border border-[#bec8d2]/50 font-semibold py-2.5 rounded-xl hover:bg-[#f0f4fa] transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span> Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
