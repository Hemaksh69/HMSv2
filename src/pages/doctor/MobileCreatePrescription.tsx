import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React, { useState } from 'react';




export const MobileCreatePrescription: React.FC = () => {
  const [medications, setMedications] = useState([{ id: 1 }]);

  const addMedication = () => {
    setMedications([...medications, { id: Date.now() }]);
  };

  return (
    <DashboardLayout title="Medicare" showSearch={true}>
      <main className="flex-1 p-4 pb-24 overflow-y-auto">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Patient Details */}
          <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-5">
            <h2 className="text-sm font-bold text-[#171c20] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0EA5E9] text-[18px]">person</span>
              Patient Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#6e7881] mb-1">Select Patient</label>
                <select className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0ea5e9]">
                  <option value="" disabled>Select patient...</option>
                  <option value="1">John Doe</option>
                  <option value="2">Jane Smith</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#6e7881] mb-1">Diagnosis</label>
                <input type="text" className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0ea5e9]" placeholder="e.g. Viral Fever" />
              </div>
            </div>
          </section>

          {/* Medications */}
          <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold text-[#171c20] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0EA5E9] text-[18px]">medication</span>
                Medications
              </h2>
            </div>
            
            <div className="space-y-4">
              {medications.map((med, index) => (
                <div key={med.id} className="p-4 border border-[#bec8d2]/50 rounded-lg bg-[#f0f4fa] relative">
                  {index > 0 && (
                    <button type="button" className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-[#bec8d2] text-[#ba1a1a] rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  )}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-[#6e7881] mb-1 uppercase tracking-wider">Medicine Name</label>
                      <input type="text" className="w-full bg-white border border-[#bec8d2]/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#0ea5e9]" placeholder="e.g. Paracetamol" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-[#6e7881] mb-1 uppercase tracking-wider">Dosage</label>
                        <input type="text" className="w-full bg-white border border-[#bec8d2]/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#0ea5e9]" placeholder="500mg" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#6e7881] mb-1 uppercase tracking-wider">Duration (Days)</label>
                        <input type="number" className="w-full bg-white border border-[#bec8d2]/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#0ea5e9]" placeholder="3" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#6e7881] mb-1 uppercase tracking-wider">Frequency</label>
                      <select className="w-full bg-white border border-[#bec8d2]/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#0ea5e9]">
                        <option>1-0-1 (Twice a day)</option>
                        <option>1-1-1 (Thrice a day)</option>
                        <option>As needed (PRN)</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              type="button"
              onClick={addMedication}
              className="mt-4 w-full border-2 border-dashed border-[#bec8d2] text-[#0EA5E9] font-semibold py-3 rounded-lg hover:bg-[#f0f4fa] transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">add</span> Add Medicine
            </button>
          </section>

          {/* Notes */}
          <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-5">
            <h2 className="text-sm font-bold text-[#171c20] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0EA5E9] text-[18px]">note_alt</span>
              Notes
            </h2>
            <textarea 
              className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-[#0ea5e9] min-h-[100px]" 
              placeholder="Additional instructions..."
            />
          </section>

          <button className="w-full bg-[#0EA5E9] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#0EA5E9]/90 active:scale-95 transition-all flex justify-center items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">send</span> Issue Prescription
          </button>
        </form>
      </main>
    </DashboardLayout>
    );
};
