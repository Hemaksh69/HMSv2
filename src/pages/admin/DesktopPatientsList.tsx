import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Badge } from '../../components/ui/Badge';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

interface Patient {
  id: string;
  name: string;
  initials?: string;
  avatar?: string;
  age: number;
  gender: string;
  phone: string;
  lastVisit: string;
  status: 'Active' | 'Inactive';
  bgColor?: string;
}

const patients: Patient[] = [
  {
    id: '#PT-2049',
    name: 'Eleanor Richards',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQhGUL2H_CoPmK6DbyWhBteFwarPWEvGMGM_W3HwIqNxAmR3UsKda-3YkTb8U5tjotdpViSNHCR8Buf6fZb3Cl7G1EZM_7Si9SIIlEWJwbUYkOEMwvxF7VaCRRcKi2t5vsWkXFMajnhSqLh_gNzQpV5VHEfD_ZS4mp2cKI4v5a7TxbVWm4w-8REuwW_74e4WDb0cZWCZ4N-DJGtaqcLUkL6LSYayblS4I0I2ZpGxUPuJPfUjqb3btjGi40erdmSF5tAZpBAckwefo',
    age: 45,
    gender: 'F',
    phone: '(555) 123-4567',
    lastVisit: 'Oct 12, 2023',
    status: 'Active',
  },
  {
    id: '#PT-2050',
    name: 'Marcus Chen',
    initials: 'MC',
    bgColor: 'bg-[#6becfd]/50 text-[#67E8F9]',
    age: 32,
    gender: 'M',
    phone: '(555) 987-6543',
    lastVisit: 'Sep 28, 2023',
    status: 'Inactive',
  },
  {
    id: '#PT-2051',
    name: 'Priya Sharma',
    initials: 'PS',
    bgColor: 'bg-[#ad85ff]/50 text-[#420095]',
    age: 28,
    gender: 'F',
    phone: '(555) 456-7890',
    lastVisit: 'Nov 01, 2023',
    status: 'Active',
  },
  {
    id: '#PT-2052',
    name: 'James Okafor',
    initials: 'JO',
    bgColor: 'bg-[#0ea5e9]/20 text-[#0EA5E9]',
    age: 61,
    gender: 'M',
    phone: '(555) 321-0987',
    lastVisit: 'Oct 31, 2023',
    status: 'Active',
  },
];

export const DesktopPatientsList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Patients Management" showSearch={true}>
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-[#171c20]">Patients Management</h2>
                <p className="text-base text-[#3e4850] mt-1">View, add, and manage patient records</p>
              </div>
              <button 
                onClick={() => navigate('/admin/patients/add')}
                className="flex items-center gap-2 bg-[#0EA5E9] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#0EA5E9]/90 transition-colors shadow-sm self-start sm:self-auto text-sm"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                Add Patient
              </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-xl p-4 shadow-[0_4px_20px_rgba(14,165,233,0.05)] border border-[#bec8d2]/20 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-96">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3e4850]" style={{ fontSize: '20px' }}>search</span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-[#f6faff] rounded-xl border border-[#bec8d2]/50 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 text-base text-[#171c20] outline-none transition-all"
                  placeholder="Search patients by name, ID, or phone..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f6faff] border border-[#bec8d2]/50 text-sm text-[#3e4850] hover:bg-[#f0f4fa] whitespace-nowrap">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
                  Filter
                </button>
                <select className="px-4 py-2 rounded-xl bg-[#f6faff] border border-[#bec8d2]/50 text-sm text-[#3e4850] outline-none focus:border-[#0ea5e9]">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            {/* Patients Table */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(14,165,233,0.08)] border border-[#bec8d2]/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f0f4fa] border-b border-[#bec8d2]/30">
                      {['Patient Name', 'Age/Gender', 'Phone', 'Last Visit', 'Status', 'Actions'].map((h, i) => (
                        <th key={h} className={`px-6 py-4 text-xs font-semibold text-[#3e4850] uppercase tracking-wider ${i === 5 ? 'text-right' : ''}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#bec8d2]/20">
                    {patients.map((patient, idx) => (
                      <tr key={patient.id} className={`hover:bg-[#c9e6ff]/10 transition-colors group ${idx % 2 === 1 ? 'bg-[#f0f4fa]/30' : ''}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {patient.avatar ? (
                              <img className="w-10 h-10 rounded-full object-cover border border-[#bec8d2]/30" src={patient.avatar} alt={patient.name} />
                            ) : (
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border border-[#bec8d2]/30 ${patient.bgColor}`}>
                                {patient.initials}
                              </div>
                            )}
                            <div>
                              <p className="text-base font-semibold text-[#171c20]">{patient.name}</p>
                              <p className="text-sm text-[#3e4850]">{patient.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-base text-[#171c20]">{patient.age} / {patient.gender}</td>
                        <td className="px-6 py-4 text-base text-[#3e4850]">{patient.phone}</td>
                        <td className="px-6 py-4 text-base text-[#3e4850]">{patient.lastVisit}</td>
                        <td className="px-6 py-4">
                          <Badge label={patient.status} variant={patient.status === 'Active' ? 'active' : 'inactive'} />
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => navigate(`/admin/patients/${patient.id}`)}
                              className="p-1.5 text-[#3e4850] hover:text-[#0EA5E9] hover:bg-[#c9e6ff] rounded-lg transition-colors" 
                              title="View"
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                            </button>
                            <button className="p-1.5 text-[#3e4850] hover:text-[#0EA5E9] hover:bg-[#c9e6ff] rounded-lg transition-colors" title="Edit">
                              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="px-6 py-4 border-t border-[#bec8d2]/30 flex items-center justify-between bg-[#f6faff]">
                <p className="text-sm text-[#3e4850]">
                  Showing <span className="font-semibold text-[#171c20]">1</span> to{' '}
                  <span className="font-semibold text-[#171c20]">10</span> of{' '}
                  <span className="font-semibold text-[#171c20]">45</span> patients
                </p>
                <div className="flex gap-1">
                  <button className="p-1.5 rounded-lg border border-[#bec8d2]/50 text-[#3e4850] hover:bg-[#f0f4fa] disabled:opacity-50" disabled>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                  </button>
                  {[1, 2, 3].map((p) => (
                    <button
                      key={p}
                      className={`w-8 h-8 rounded-lg font-semibold text-sm flex items-center justify-center ${
                        p === 1 ? 'bg-[#0EA5E9] text-white' : 'border border-[#bec8d2]/50 text-[#3e4850] hover:bg-[#f0f4fa]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button className="p-1.5 rounded-lg border border-[#bec8d2]/50 text-[#3e4850] hover:bg-[#f0f4fa]">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </DashboardLayout>
  );
};
