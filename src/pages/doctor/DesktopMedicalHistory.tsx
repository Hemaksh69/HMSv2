import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';





export const DesktopMedicalHistory: React.FC = () => {
  const [expandedMeds, setExpandedMeds] = useState(false);
  const navigate = useNavigate();

  return (
    <DashboardLayout title="" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 lg:px-12 max-w-5xl mx-auto w-full">
          
          {/* Patient Profile Mini-Header */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#bec8d2]/20 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#0ea5e9]/10 to-transparent pointer-events-none" />
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#f6faff] shadow-md shrink-0 relative">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1yaOneUMR0A7RF_Pl6cb497ySuwRdWqpjG9wfm2vMmFqG7_s7kp8h5XksOYQVwjz9boLIdHzWLndZMx7fUP_v4icDeIQpLbD4q1zyKQ2W9JFuiTdcpb6NnLHPzQBY7lckgJHG_JyeNGuN6R_uXXCKpRMIWgk_SJes1RTYOT0BxmkIsOau_7WymrU0Ne0lNURRBFClUUro-d4rcqMbigHXwsBgBZJ0dqnOuNG6CwP5O7CoV9dMo7t5RjFWIoYUIRVmVF5KiwD3JXI" alt="Patient Profile" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#67E8F9] text-white rounded-full flex items-center justify-center border-2 border-[#f6faff]">
                <span className="material-symbols-outlined text-[14px]">verified</span>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left z-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h1 className="text-3xl font-bold text-[#171c20]">Robert Mitchell</h1>
                <span className="bg-[#6becfd]/20 text-[#67E8F9] text-xs font-bold px-3 py-1 rounded-full border border-[#67E8F9]/20 inline-block w-fit mx-auto sm:mx-0">Male, 42 yrs</span>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-[#3e4850] mb-4">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">bloodtype</span> O+ Positive</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">monitor_weight</span> 175 lbs</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">height</span> 5' 11"</span>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto z-10">
              <button 
                onClick={() => navigate('/doctor/prescribe')}
                className="flex-1 sm:flex-none bg-[#ad85ff] hover:bg-[#986beb] text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition-colors text-sm flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>prescriptions</span>
                Prescribe
              </button>
              <button className="flex-1 sm:flex-none bg-[#0EA5E9] text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-[#0EA5E9]/90 transition-colors text-sm">
                Edit Vitals
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#171c20] mb-2">Medical History</h2>
            <p className="text-[#3e4850]">Review past diagnoses and treatments.</p>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 border-l-2 border-[#e4e8ee] space-y-8">
            
            {/* Timeline Entry 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0EA5E9] ring-4 ring-white z-10" />
              <div className="bg-white border border-[#bec8d2]/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-xs text-[#0EA5E9] font-semibold tracking-wider uppercase mb-1">Oct 24, 2023</div>
                    <h3 className="text-xl font-bold text-[#171c20]">Acute Bronchitis</h3>
                  </div>
                  <span className="bg-[#ffdad6] text-[#93000a] text-xs px-2 py-1 rounded-full font-semibold">Resolved</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-[#3e4850] mb-4">
                  <span className="material-symbols-outlined text-[16px]">person</span>
                  <span>Dr. Sarah Jenkins</span>
                  <span className="mx-1">•</span>
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>City Clinic</span>
                </div>
                
                <p className="text-sm text-[#3e4850] mb-4 bg-[#f0f4fa] p-3 rounded-md">
                  Patient presented with persistent cough and mild fever. Prescribed rest and a short course of antibiotics to prevent secondary infection.
                </p>

                {/* Collapsible Medicines */}
                <div className="border border-[#bec8d2]/30 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setExpandedMeds(!expandedMeds)}
                    className="w-full flex items-center justify-between p-3 bg-[#f6faff] hover:bg-[#f0f4fa] transition-colors text-left"
                  >
                    <span className="font-semibold text-sm text-[#171c20] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0EA5E9] text-[18px]">prescriptions</span> Prescribed Medications
                    </span>
                    <span className={`material-symbols-outlined text-[#3e4850] transition-transform duration-200 ${expandedMeds ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  
                  {expandedMeds && (
                    <div className="bg-white px-3">
                      <ul className="py-2 space-y-2">
                        <li className="flex justify-between items-center text-sm border-b border-[#e4e8ee] pb-2">
                          <div>
                            <div className="font-semibold text-[#171c20]">Amoxicillin 500mg</div>
                            <div className="text-[#3e4850] text-xs">Take 1 tablet every 8 hours</div>
                          </div>
                          <span className="text-xs font-semibold text-[#0EA5E9] bg-[#0ea5e9]/20 px-2 py-1 rounded">7 Days</span>
                        </li>
                        <li className="flex justify-between items-center text-sm">
                          <div>
                            <div className="font-semibold text-[#171c20]">Ibuprofen 400mg</div>
                            <div className="text-[#3e4850] text-xs">As needed for fever/pain</div>
                          </div>
                          <span className="text-xs font-semibold text-[#6e7881] px-2 py-1">PRN</span>
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
              <div className="bg-white border border-[#bec8d2]/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-xs text-[#6e7881] font-semibold tracking-wider uppercase mb-1">Jun 12, 2023</div>
                    <h3 className="text-xl font-bold text-[#171c20]">Routine Physical</h3>
                  </div>
                  <span className="bg-[#e4e8ee] text-[#3e4850] text-xs px-2 py-1 rounded-full font-semibold">Completed</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-[#3e4850] mb-4">
                  <span className="material-symbols-outlined text-[16px]">person</span>
                  <span>Dr. Michael Chen</span>
                </div>
                
                <p className="text-sm text-[#3e4850]">
                  Annual checkup. Vitals normal. Blood work ordered for standard lipid panel.
                </p>
              </div>
            </div>

          </div>

        </div>
    </DashboardLayout>
    );
};
