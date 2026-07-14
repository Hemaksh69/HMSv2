import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';





export const DesktopDocumentUpload: React.FC = () => {
  return (
    <DashboardLayout title="MediCare Medical Center" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold text-[#171c20]">Secure File Upload</h2>
            <p className="text-[#3e4850] mt-1">Select or drag & drop patient records, lab results, or imaging files.</p>
          </div>

          <div className="border-2 border-dashed border-[#bec8d2] hover:border-[#0ea5e9] bg-white rounded-xl p-12 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer group shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6faff] to-white opacity-50 z-0" />
            <div className="w-16 h-16 rounded-full bg-[#f0f4fa] group-hover:bg-[#0ea5e9]/10 flex items-center justify-center transition-colors z-10">
              <span className="material-symbols-outlined text-[32px] text-[#0EA5E9] group-hover:text-[#0ea5e9] transition-colors">cloud_upload</span>
            </div>
            <div className="text-center z-10">
              <span className="text-base font-semibold text-[#0EA5E9] block mb-1 group-hover:underline">Browse files</span>
              <span className="text-sm text-[#3e4850]">or drag and drop here</span>
            </div>
            <div className="flex gap-4 mt-2 z-10">
              <span className="text-xs font-semibold text-[#6e7881] bg-[#f0f4fa] px-3 py-1 rounded-full border border-[#bec8d2]/30">PDF, JPG, PNG</span>
              <span className="text-xs font-semibold text-[#6e7881] bg-[#f0f4fa] px-3 py-1 rounded-full border border-[#bec8d2]/30">Max 50MB</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-6">
            <h3 className="text-lg font-bold text-[#171c20] mb-4">Selected Files</h3>
            <div className="space-y-4">
              
              <div className="flex items-center justify-between p-4 bg-[#f0f4fa] rounded-lg border border-[#bec8d2]/30 hover:border-[#0ea5e9]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#0EA5E9]">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#171c20]">Patient_Blood_Test_Q3.pdf</p>
                    <p className="text-xs text-[#6e7881]">2.4 MB</p>
                  </div>
                </div>
                <button className="text-[#3e4850] hover:text-[#ba1a1a] transition-colors p-2">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#f0f4fa] rounded-lg border border-[#bec8d2]/30 hover:border-[#0ea5e9]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#0ea5e9]">
                    <span className="material-symbols-outlined">image</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#171c20]">XRay_Chest_Frontal.jpg</p>
                    <p className="text-xs text-[#6e7881]">5.1 MB</p>
                  </div>
                </div>
                <button className="text-[#3e4850] hover:text-[#ba1a1a] transition-colors p-2">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#171c20]">Document Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#171c20] mb-2">Patient</label>
                <div className="relative">
                  <select className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 appearance-none">
                    <option>Search patient...</option>
                    <option>Eleanor Vance (ID: #9842-A)</option>
                    <option>Robert Chen (ID: #3321-B)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#6e7881] pointer-events-none">expand_more</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#171c20] mb-2">Document Type</label>
                <div className="relative">
                  <select className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 appearance-none">
                    <option>Select type...</option>
                    <option>Lab Results</option>
                    <option>Imaging/X-Ray</option>
                    <option>Prescription</option>
                    <option>Consultation Notes</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#6e7881] pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#171c20] mb-2">Clinical Notes (Optional)</label>
              <textarea className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 min-h-[100px]" placeholder="Add any relevant remarks about these files..."></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-[#bec8d2]/30">
            <button className="px-6 py-2.5 rounded-lg border border-[#bec8d2] text-[#3e4850] font-semibold hover:bg-[#f0f4fa] transition-colors bg-white">Cancel</button>
            <button className="px-8 py-2.5 rounded-lg bg-[#0EA5E9] text-white font-semibold hover:bg-[#0EA5E9]/90 shadow-sm flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">cloud_upload</span> Upload Files
            </button>
          </div>

        </div>
    </DashboardLayout>
    );
};
