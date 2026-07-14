import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React, { useState } from 'react';





export const DesktopCreatePrescription: React.FC = () => {
  const [medications, setMedications] = useState([{ id: 1 }]);

  const addMedication = () => {
    setMedications([...medications, { id: Date.now() }]);
  };

  return (
    <DashboardLayout title="MediCare HMS" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full space-y-8">
          
          <div className="flex items-center gap-4 mb-2">
            <button className="p-2 -ml-2 rounded-full hover:bg-[#e4e8ee] transition-colors text-[#3e4850]">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-3xl font-bold text-[#171c20]">Create Prescription</h1>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Patient Selection Card */}
            <div className="bg-white/90 backdrop-blur-md border border-white/50 shadow-sm rounded-xl p-6">
              <h2 className="text-lg font-semibold text-[#171c20] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0EA5E9]">person</span>
                Patient Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-xs text-[#6e7881] mb-1 font-semibold">Select Patient</label>
                  <select className="w-full bg-[#f6faff] border border-[#e5e7eb] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 appearance-none">
                    <option value="" disabled>Search patient by name or ID</option>
                    <option value="1">John Doe (ID: PT-10293)</option>
                    <option value="2">Jane Smith (ID: PT-83921)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-[34px] text-[#6e7881] pointer-events-none">expand_more</span>
                </div>
                <div>
                  <label className="block text-xs text-[#6e7881] mb-1 font-semibold">Diagnosis / Condition</label>
                  <input type="text" className="w-full bg-[#f6faff] border border-[#e5e7eb] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20" placeholder="e.g. Acute Bronchitis" />
                </div>
              </div>
            </div>

            {/* Medications Section */}
            <div className="bg-white/90 backdrop-blur-md border border-white/50 shadow-sm rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-[#171c20] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0EA5E9]">medication</span>
                  Medications
                </h2>
                <button 
                  onClick={addMedication}
                  className="text-[#0EA5E9] bg-[#0ea5e9]/10 hover:bg-[#0ea5e9]/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span> Add Medicine
                </button>
              </div>

              <div className="space-y-6">
                {medications.map((med, index) => (
                  <div key={med.id} className="p-5 border border-[#e5e7eb] rounded-xl bg-[#f6faff] relative">
                    {index > 0 && (
                      <button className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-[#bec8d2] text-[#ba1a1a] rounded-full flex items-center justify-center hover:bg-[#ffdad6] hover:border-[#ffdad6] transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      <div className="md:col-span-4">
                        <label className="block text-xs text-[#6e7881] mb-1 font-semibold">Medicine Name</label>
                        <input type="text" className="w-full bg-white border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20" placeholder="e.g. Amoxicillin" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#6e7881] mb-1 font-semibold">Dosage</label>
                        <input type="text" className="w-full bg-white border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20" placeholder="e.g. 500mg" />
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-xs text-[#6e7881] mb-1 font-semibold">Frequency</label>
                        <select className="w-full bg-white border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20">
                          <option>1-0-1 (Twice a day)</option>
                          <option>1-1-1 (Thrice a day)</option>
                          <option>1-0-0 (Morning only)</option>
                          <option>0-0-1 (Night only)</option>
                          <option>As needed (PRN)</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-xs text-[#6e7881] mb-1 font-semibold">Duration (Days)</label>
                        <input type="number" className="w-full bg-white border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20" placeholder="5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-white/90 backdrop-blur-md border border-white/50 shadow-sm rounded-xl p-6">
              <h2 className="text-lg font-semibold text-[#171c20] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0EA5E9]">note_alt</span>
                Additional Notes
              </h2>
              <textarea 
                className="w-full bg-[#f6faff] border border-[#e5e7eb] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 min-h-[120px]" 
                placeholder="Add dietary advice, follow-up instructions, or specific warnings here..."
              />
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#bec8d2]/30">
              <button className="px-6 py-3 rounded-lg text-[#3e4850] font-semibold hover:bg-[#f0f4fa] transition-colors border border-[#bec8d2]/50 bg-white">
                Save as Draft
              </button>
              <button className="px-8 py-3 rounded-lg bg-[#0EA5E9] text-white font-semibold hover:bg-[#0EA5E9]/90 shadow-sm transition-all flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span> Issue Prescription
              </button>
            </div>

          </form>
        </div>
    </DashboardLayout>
    );
};
