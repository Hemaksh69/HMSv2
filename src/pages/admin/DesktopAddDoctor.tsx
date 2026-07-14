import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';





export const DesktopAddDoctor: React.FC = () => {
  return (
    <DashboardLayout title="Hospital Management System" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full space-y-8 bg-[#f0f4fa]">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#3e4850] text-sm font-medium mb-2">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>medical_services</span>
                <span>Doctors</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                <span className="text-[#0EA5E9]">Add New Doctor</span>
              </div>
              <h2 className="text-3xl font-bold text-[#171c20]">Doctor Profile</h2>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 rounded-lg border border-[#bec8d2] text-[#171c20] font-semibold hover:bg-white transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-[#0EA5E9] text-white font-semibold hover:bg-[#0EA5E9]/90 shadow-sm transition-all flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>save</span> Save Doctor
              </button>
            </div>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column (Photo & Primary) */}
              <div className="space-y-8">
                {/* Photo Upload */}
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-[#0ea5e9]/10 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-[#f6faff] border-2 border-dashed border-[#bec8d2] flex items-center justify-center mb-4 relative group cursor-pointer hover:border-[#0EA5E9] transition-colors">
                    <span className="material-symbols-outlined text-[#6e7881] text-4xl group-hover:text-[#0EA5E9]">add_a_photo</span>
                    <div className="absolute bottom-0 right-0 bg-[#0ea5e9] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-[#3e4850] uppercase tracking-widest">Upload Photo</p>
                  <p className="text-xs text-[#6e7881] mt-1">High-res JPG or PNG</p>
                </div>

                {/* Account Settings */}
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-[#0ea5e9]/10">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#bec8d2]/30">
                    <span className="material-symbols-outlined text-[#5B21B6]">manage_accounts</span>
                    <h3 className="font-semibold text-[#171c20]">Account Status</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#f6faff] rounded-lg border border-[#bec8d2]/30">
                      <div>
                        <p className="font-semibold text-[#171c20]">Active Status</p>
                        <p className="text-xs text-[#3e4850]">Allow system access</p>
                      </div>
                      <div className="w-12 h-6 bg-[#0EA5E9] rounded-full relative cursor-pointer shadow-inner">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-[#0ea5e9]/10">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#bec8d2]/30">
                    <span className="material-symbols-outlined text-[#0EA5E9]">badge</span>
                    <h3 className="text-lg font-semibold text-[#171c20]">Personal Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">Full Name *</label>
                      <input className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all" placeholder="e.g. Dr. Jane Doe" type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">Gender</label>
                      <select className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all">
                        <option disabled value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">Phone Number</label>
                      <input className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all" placeholder="+1 (555) 000-0000" type="tel" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">Email Address *</label>
                      <input className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all" placeholder="doctor@medicare.com" type="email" />
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-[#0ea5e9]/10">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#bec8d2]/30">
                    <span className="material-symbols-outlined text-[#ad85ff]">medical_information</span>
                    <h3 className="text-lg font-semibold text-[#171c20]">Professional Details</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">Department *</label>
                      <select className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all">
                        <option disabled value="">Select Department</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="pediatrics">Pediatrics</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">Specialization</label>
                      <input className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all" placeholder="e.g. Interventional Cardiology" type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">License Number *</label>
                      <input className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all" placeholder="MD-123456" type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-2">Years of Experience</label>
                      <input className="w-full bg-white border border-[#bec8d2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all" placeholder="e.g. 15" type="number" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </form>

        </div>
    </DashboardLayout>
    );
};
