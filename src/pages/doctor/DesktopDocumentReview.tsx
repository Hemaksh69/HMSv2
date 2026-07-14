import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';





export const DesktopDocumentReview: React.FC = () => {
  return (
    <DashboardLayout title="MediCare Medical Center" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-hidden p-8 flex flex-col h-[calc(100vh-64px)]">
          
          <div className="flex items-center gap-4 mb-6 shrink-0">
            <button className="w-10 h-10 rounded-full hover:bg-[#eaeef4] flex items-center justify-center text-[#3e4850] transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h2 className="text-2xl font-bold text-[#171c20]">Document Review</h2>
              <p className="text-sm text-[#3e4850]">Reviewing lab results for patient record update.</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
            
            {/* Left Column: Document Preview (60%) */}
            <div className="w-full lg:w-[60%] flex flex-col bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 overflow-hidden min-h-0">
              <div className="flex items-center justify-between p-3 border-b border-[#bec8d2]/30 bg-[#f0f4fa]/50 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#171c20]">Complete_Blood_Count_Vance.pdf</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded hover:bg-[#dee3e9]/50 flex items-center justify-center text-[#3e4850] transition-colors">
                    <span className="material-symbols-outlined text-sm">zoom_out</span>
                  </button>
                  <span className="text-xs font-semibold text-[#6e7881] w-12 text-center">100%</span>
                  <button className="w-8 h-8 rounded hover:bg-[#dee3e9]/50 flex items-center justify-center text-[#3e4850] transition-colors">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                  </button>
                  <div className="w-px h-4 bg-[#bec8d2] mx-2" />
                  <button className="w-8 h-8 rounded hover:bg-[#dee3e9]/50 flex items-center justify-center text-[#0EA5E9] transition-colors">
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                </div>
              </div>
              
              <div className="flex-1 bg-[#d6dae0]/20 flex justify-center p-4 md:p-8 overflow-y-auto">
                <div className="bg-white w-full max-w-[800px] min-h-[1000px] shadow-sm border border-[#bec8d2]/50 rounded p-8 md:p-12">
                  <div className="border-b-2 border-[#171c20] pb-4 mb-6 flex justify-between items-end">
                    <div>
                      <h1 className="text-2xl font-bold text-[#171c20]">Lab Results Report</h1>
                      <p className="text-sm text-[#6e7881]">MediCare Central Laboratory</p>
                    </div>
                    <div className="text-right text-sm text-[#3e4850]">
                      <p>Date: Oct 24, 2023</p>
                      <p>Ref: LRR-892-A</p>
                    </div>
                  </div>
                  
                  <div className="mb-8 grid grid-cols-2 gap-4 text-sm bg-[#f6faff] p-4 rounded-lg border border-[#bec8d2]/30">
                    <div>
                      <span className="font-semibold text-[#171c20]">Patient Name:</span> Eleanor Vance
                    </div>
                    <div>
                      <span className="font-semibold text-[#171c20]">Patient ID:</span> #9842-A
                    </div>
                    <div>
                      <span className="font-semibold text-[#171c20]">DOB:</span> 12/04/1945 (78y)
                    </div>
                    <div>
                      <span className="font-semibold text-[#171c20]">Ordering Physician:</span> Dr. Smith
                    </div>
                  </div>

                  <table className="w-full text-sm text-left mb-8">
                    <thead>
                      <tr className="border-b border-[#171c20]">
                        <th className="py-2 font-semibold">Test Name</th>
                        <th className="py-2 font-semibold">Result</th>
                        <th className="py-2 font-semibold">Reference Range</th>
                        <th className="py-2 font-semibold">Flag</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#bec8d2]/50">
                      <tr>
                        <td className="py-3">Hemoglobin (Hb)</td>
                        <td className="py-3 font-semibold">11.2 g/dL</td>
                        <td className="py-3 text-[#6e7881]">12.0 - 15.5 g/dL</td>
                        <td className="py-3"><span className="text-[#93000a] font-bold bg-[#ffdad6] px-2 py-0.5 rounded text-xs">LOW</span></td>
                      </tr>
                      <tr>
                        <td className="py-3">White Blood Cells (WBC)</td>
                        <td className="py-3 font-semibold">6.8 x10^3/uL</td>
                        <td className="py-3 text-[#6e7881]">4.5 - 11.0 x10^3/uL</td>
                        <td className="py-3"><span className="text-[#166534] font-bold bg-[#DCFCE7] px-2 py-0.5 rounded text-xs">NORMAL</span></td>
                      </tr>
                      <tr>
                        <td className="py-3">Platelets</td>
                        <td className="py-3 font-semibold">210 x10^3/uL</td>
                        <td className="py-3 text-[#6e7881]">150 - 450 x10^3/uL</td>
                        <td className="py-3"><span className="text-[#166534] font-bold bg-[#DCFCE7] px-2 py-0.5 rounded text-xs">NORMAL</span></td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-12 pt-8 border-t border-[#bec8d2]/50 text-sm text-[#6e7881]">
                    <p className="font-semibold text-[#171c20] mb-2">Pathologist Notes:</p>
                    <p>Mild anemia indicated by low Hemoglobin. Suggest follow up iron panel if clinically correlated. No other significant abnormalities detected in CBC.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Details & Actions (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col gap-6 min-h-0 overflow-y-auto">
              
              {/* Patient Info Card */}
              <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-5 shrink-0">
                <h3 className="text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-4">Patient Information</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f0f4fa] overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_Jl58BjtDwM9jb-gqcZsiiLKSzLJ6FfBEvANdlfk562aIDGhCMX5pC9bwKSRWQOu9Sl2coSQ_vDVN746lKbHAw6-lpy1HrOFYzi3_9Md5hCgmYObKI2BEHlRgAkVOWHCF3mY1kRBfN4A3hRybZRaGJ0dbQ0WDj5l2SST8BBooAkR3NzfDOxhtt1FnzKWjoqGQsmDbNaXIgRCoLlj1KUHOd7iKQ1jE8ybXF1Cw7imXBEx_7XlqDqYwGHrhudWSMtoy2m6BdctGqY" alt="Patient" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#171c20]">Eleanor Vance</h4>
                    <p className="text-sm text-[#3e4850]">Patient ID: #9842-A</p>
                  </div>
                  <button className="ml-auto text-[#0EA5E9] hover:bg-[#0ea5e9]/10 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Review Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-5 flex-1 flex flex-col">
                <h3 className="text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-4">Clinical Review</h3>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <label className="block text-sm font-semibold text-[#171c20] mb-2">Category</label>
                    <select className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50">
                      <option>Lab Results</option>
                      <option>Imaging</option>
                      <option>Consultation Notes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#171c20] mb-2">Status Flag</label>
                    <div className="grid grid-cols-3 gap-2">
                      <label className="flex items-center justify-center border border-[#166534]/30 bg-[#DCFCE7] text-[#166534] font-semibold py-2 rounded-lg cursor-pointer text-sm transition-colors">
                        <input type="radio" name="status" className="hidden" /> Normal
                      </label>
                      <label className="flex items-center justify-center border border-[#b45309]/50 bg-[#fef3c7] text-[#b45309] font-semibold py-2 rounded-lg cursor-pointer text-sm transition-colors shadow-sm">
                        <input type="radio" name="status" className="hidden" defaultChecked /> Review
                      </label>
                      <label className="flex items-center justify-center border border-[#ba1a1a]/30 bg-white text-[#3e4850] font-semibold py-2 rounded-lg cursor-pointer text-sm transition-colors">
                        <input type="radio" name="status" className="hidden" /> Critical
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#171c20] mb-2">Doctor's Notes</label>
                    <textarea className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 min-h-[120px]" placeholder="Add clinical remarks for the patient record...">Note mild anemia. Will order iron panel and follow up in 2 weeks.</textarea>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#bec8d2]/30 flex gap-3">
                  <button className="flex-1 px-4 py-2.5 rounded-lg border border-[#bec8d2] text-[#3e4850] font-semibold hover:bg-[#f0f4fa] transition-colors">Reject / Re-upload</button>
                  <button className="flex-1 px-4 py-2.5 rounded-lg bg-[#0EA5E9] text-white font-semibold hover:bg-[#0EA5E9]/90 shadow-sm flex items-center justify-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span> Approve & File
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
    </DashboardLayout>
    );
};
