import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';




export const MobileAddDoctor: React.FC = () => {
  return (
    <DashboardLayout title="Add Doctor" showSearch={true}>
      <main className="flex-1 w-full pt-[calc(64px)] pb-24 px-4 overflow-y-auto">
        <form className="flex flex-col gap-6 max-w-lg mx-auto pb-8 pt-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Photo Upload */}
          <section className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center border border-[#bec8d2]/30 relative overflow-hidden">
            <div className="relative group cursor-pointer active:scale-95 transition-transform z-10">
              <div className="w-24 h-24 rounded-full bg-[#f6faff] border-2 border-dashed border-[#bec8d2] flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-[#6e7881] text-4xl">add_a_photo</span>
              </div>
              <div className="absolute bottom-0 right-0 bg-[#0ea5e9] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>edit</span>
              </div>
            </div>
            <p className="mt-3 text-sm font-bold text-[#3e4850] uppercase tracking-widest">Upload Photo</p>
            <p className="text-xs text-[#6e7881] mt-1 text-center">JPG or PNG, max 5MB</p>
          </section>

          {/* Personal Info */}
          <section className="bg-white rounded-xl shadow-sm p-5 border border-[#bec8d2]/30 space-y-5">
            <div className="flex items-center gap-2 mb-2 pb-3 border-b border-[#bec8d2]/30">
              <div className="w-8 h-8 rounded-full bg-[#6becfd]/30 flex items-center justify-center text-[#67E8F9]">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <h2 className="text-base font-semibold text-[#171c20]">Personal Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#3e4850] uppercase tracking-wide">Full Name</label>
                <input className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/50" placeholder="Dr. Jane Doe" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#3e4850] uppercase tracking-wide">Gender</label>
                  <select className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/50">
                    <option disabled value="">Select</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#3e4850] uppercase tracking-wide">Phone</label>
                  <input className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/50" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#3e4850] uppercase tracking-wide">Email Address</label>
                <input className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/50" placeholder="doctor@medicare.com" type="email" />
              </div>
            </div>
          </section>

          {/* Professional Details */}
          <section className="bg-white rounded-xl shadow-sm p-5 border border-[#bec8d2]/30 space-y-5">
            <div className="flex items-center gap-2 mb-2 pb-3 border-b border-[#bec8d2]/30">
              <div className="w-8 h-8 rounded-full bg-[#ad85ff]/30 flex items-center justify-center text-[#420095]">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>medical_information</span>
              </div>
              <h2 className="text-base font-semibold text-[#171c20]">Professional Details</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#3e4850] uppercase tracking-wide">Department</label>
                <select className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/50">
                  <option disabled value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#3e4850] uppercase tracking-wide">Specialization</label>
                <input className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/50" placeholder="e.g. Interventional" type="text" />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button className="w-full bg-[#0EA5E9] text-white font-semibold py-3 rounded-lg shadow-sm hover:bg-[#0EA5E9]/90 active:scale-95 transition-all order-1">
              Add Doctor Profile
            </button>
            <button className="w-full bg-white border border-[#bec8d2] text-[#171c20] font-semibold py-3 rounded-lg hover:bg-[#f0f4fa] active:scale-95 transition-all order-2">
              Cancel
            </button>
          </div>
        </form>
      </main>
    </DashboardLayout>
    );
};
