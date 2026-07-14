import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';




export const MobileDocumentUpload: React.FC = () => {
  return (
    <DashboardLayout title="Upload Document" showSearch={true}>
      <main className="flex-1 p-4 flex flex-col gap-6">
        
        {/* Upload Zone */}
        <section>
          <div className="mb-2">
            <h2 className="text-lg font-bold text-[#171c20]">Secure File Upload</h2>
            <p className="text-sm text-[#3e4850] mt-1">Select or drag & drop patient records, lab results, or imaging files.</p>
          </div>
          <div className="border-2 border-dashed border-[#bec8d2] hover:border-[#0ea5e9] bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6faff] to-white opacity-50 z-0" />
            <div className="w-16 h-16 rounded-full bg-[#f0f4fa] flex items-center justify-center z-10">
              <span className="material-symbols-outlined text-[32px] text-[#0EA5E9]">cloud_upload</span>
            </div>
            <div className="text-center z-10">
              <span className="text-base font-semibold text-[#0EA5E9] block mb-1">Tap to browse files</span>
              <span className="text-sm text-[#3e4850]">or drop files here</span>
            </div>
            <div className="flex gap-2 mt-2 z-10">
              <span className="text-[10px] font-semibold text-[#6e7881] bg-[#f0f4fa] px-2 py-1 rounded-md border border-[#bec8d2]/30">PDF, JPG, PNG</span>
              <span className="text-[10px] font-semibold text-[#6e7881] bg-[#f0f4fa] px-2 py-1 rounded-md border border-[#bec8d2]/30">Max 50MB</span>
            </div>
          </div>
        </section>

        {/* Selected Files */}
        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4">
          <div className="flex justify-between items-center mb-4 border-b border-[#bec8d2]/30 pb-2">
            <h3 className="text-base font-bold text-[#171c20]">Selected Files</h3>
            <span className="text-xs font-semibold text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-1 rounded-full">2 files</span>
          </div>
          <div className="space-y-3">
            
            <div className="flex items-center justify-between p-3 bg-[#f0f4fa] rounded-lg border border-[#bec8d2]/30">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0 text-[#0EA5E9]">
                  <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-[#171c20] truncate">Patient_Blood_Test_Q3.pdf</p>
                  <p className="text-xs text-[#6e7881]">2.4 MB • Complete</p>
                </div>
              </div>
              <button className="text-[#3e4850] p-1 shrink-0">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#f0f4fa] rounded-lg border border-[#bec8d2]/30">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0 text-[#0ea5e9]">
                  <span className="material-symbols-outlined text-[20px]">image</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-[#171c20] truncate">XRay_Chest_Frontal.jpg</p>
                  <p className="text-xs text-[#6e7881]">5.1 MB • Complete</p>
                </div>
              </div>
              <button className="text-[#3e4850] p-1 shrink-0">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

          </div>
        </section>

        {/* Document Details */}
        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4 space-y-4">
          <h3 className="text-base font-bold text-[#171c20]">Details</h3>
          
          <div>
            <label className="block text-xs font-semibold text-[#171c20] mb-1.5 uppercase tracking-wider">Patient</label>
            <div className="relative">
              <select className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 appearance-none">
                <option>Search patient...</option>
                <option>Eleanor Vance (ID: #9842-A)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#6e7881] pointer-events-none">expand_more</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171c20] mb-1.5 uppercase tracking-wider">Category</label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center justify-center border border-[#0ea5e9] bg-[#0ea5e9]/10 text-[#0EA5E9] font-semibold py-2 rounded-lg cursor-pointer text-sm">
                <input type="radio" name="category" className="hidden" defaultChecked />
                Lab Results
              </label>
              <label className="flex items-center justify-center border border-[#bec8d2] bg-white text-[#3e4850] font-medium py-2 rounded-lg cursor-pointer text-sm">
                <input type="radio" name="category" className="hidden" />
                Imaging
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171c20] mb-1.5 uppercase tracking-wider">Notes</label>
            <textarea className="w-full bg-[#f6faff] border border-[#bec8d2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 min-h-[80px]" placeholder="Add remarks..."></textarea>
          </div>
        </section>

        {/* Upload Button */}
        <button className="w-full bg-[#0EA5E9] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#0EA5E9]/90 active:scale-95 transition-all flex items-center justify-center gap-2 mb-4">
          <span className="material-symbols-outlined">cloud_upload</span>
          Confirm Upload
        </button>

      </main>
    </DashboardLayout>
    );
};
