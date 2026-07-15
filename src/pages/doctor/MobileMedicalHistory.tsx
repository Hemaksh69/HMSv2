import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React, { useState } from 'react';




export const MobileMedicalHistory: React.FC = () => {
  const [expandedMeds, setExpandedMeds] = useState(false);

  return (
    <DashboardLayout title="Medical History" showSearch={true}>
      <main className="flex-1 p-4 max-w-2xl mx-auto w-full pb-24">
        
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#171c20] mb-1">Medical History</h1>
          <p className="text-sm text-[#3e4850]">Review past diagnoses and treatments.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 border-l-2 border-[#e4e8ee] space-y-6">
          
          {/* Timeline Entry 1 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0EA5E9] ring-4 ring-white z-10" />
            <div className="bg-white border border-[#bec8d2]/30 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[10px] text-[#0EA5E9] font-bold tracking-wider uppercase mb-1">Oct 24, 2023</div>
                  <h2 className="text-lg font-semibold text-[#171c20]">Acute Bronchitis</h2>
                </div>
                <span className="bg-[#ffdad6] text-[#93000a] text-[10px] px-2 py-1 rounded-full font-bold">Resolved</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-[#3e4850] mb-3">
                <span className="material-symbols-outlined text-[14px]">person</span>
                <span>Dr. Sarah Jenkins</span>
                <span className="mx-0.5">•</span>
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                <span>City Clinic</span>
              </div>
              
              <p className="text-xs text-[#3e4850] mb-4 bg-[#f0f4fa] p-3 rounded-md leading-relaxed">
                Patient presented with persistent cough and mild fever. Prescribed rest and a short course of antibiotics to prevent secondary infection.
              </p>

              {/* Collapsible Medicines */}
              <div className="border border-[#bec8d2]/30 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setExpandedMeds(!expandedMeds)}
                  className="w-full flex items-center justify-between p-3 bg-[#f6faff] transition-colors text-left"
                >
                  <span className="font-semibold text-sm text-[#171c20] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0EA5E9] text-[18px]">prescriptions</span> Medications
                  </span>
                  <span className={`material-symbols-outlined text-[#3e4850] transition-transform duration-200 ${expandedMeds ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                
                {expandedMeds && (
                  <div className="bg-white px-3">
                    <ul className="py-2 space-y-2">
                      <li className="flex justify-between items-center text-sm border-b border-[#e4e8ee] pb-2">
                        <div>
                          <div className="font-semibold text-[#171c20] text-xs">Amoxicillin 500mg</div>
                          <div className="text-[#3e4850] text-[10px]">Take 1 tablet every 8 hours</div>
                        </div>
                        <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0ea5e9]/20 px-2 py-1 rounded">7 Days</span>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <div>
                          <div className="font-semibold text-[#171c20] text-xs">Ibuprofen 400mg</div>
                          <div className="text-[#3e4850] text-[10px]">As needed for fever/pain</div>
                        </div>
                        <span className="text-[10px] font-bold text-[#6e7881] px-2 py-1 border border-[#e4e8ee] rounded">PRN</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Timeline Entry 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#bec8d2] ring-4 ring-white z-10" />
            <div className="bg-white border border-[#bec8d2]/30 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[10px] text-[#6e7881] font-bold tracking-wider uppercase mb-1">Jun 12, 2023</div>
                  <h2 className="text-lg font-semibold text-[#171c20]">Routine Physical</h2>
                </div>
                <span className="bg-[#e4e8ee] text-[#3e4850] text-[10px] px-2 py-1 rounded-full font-bold">Completed</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-[#3e4850] mb-3">
                <span className="material-symbols-outlined text-[14px]">person</span>
                <span>Dr. Michael Chen</span>
              </div>
              
              <p className="text-xs text-[#3e4850] leading-relaxed">
                Annual checkup. Vitals normal. Blood work ordered for standard lipid panel.
              </p>
            </div>
          </div>

        </div>
      </main>
    </DashboardLayout>
    );
};
