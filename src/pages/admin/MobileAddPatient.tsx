import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';




export const MobileAddPatient: React.FC = () => {
  return (
    <DashboardLayout title="Add Patient" showSearch={true}>
      <main className="w-full max-w-2xl mx-auto p-4 space-y-6">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Personal Info */}
          <section className="bg-white p-5 rounded-xl shadow-ambient border border-[#bec8d2]/20">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#bec8d2]/20">
              <span className="material-symbols-outlined text-[#0EA5E9]">person</span>
              <h2 className="text-lg font-bold text-[#171c20]">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">First Name</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="e.g. Jane" type="text" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Last Name</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="e.g. Doe" type="text" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Date of Birth</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" type="date" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Gender</label>
                <select className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all">
                  <option disabled value="">Select gender</option>
                  <option value="f">Female</option>
                  <option value="m">Male</option>
                  <option value="o">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Contact Details */}
          <section className="bg-white p-5 rounded-xl shadow-ambient border border-[#bec8d2]/20">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#bec8d2]/20">
              <span className="material-symbols-outlined text-[#0EA5E9]">contact_phone</span>
              <h2 className="text-lg font-bold text-[#171c20]">Contact Details</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Phone Number</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="(555) 000-0000" type="tel" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Email Address</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="patient@example.com" type="email" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Address</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="123 Health Ave" type="text" />
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="bg-white p-5 rounded-xl shadow-ambient border border-[#bec8d2]/20">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#bec8d2]/20">
              <span className="material-symbols-outlined text-[#0EA5E9]">local_hospital</span>
              <h2 className="text-lg font-bold text-[#171c20]">Emergency Contact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Contact Name</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="Full Name" type="text" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Relationship</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="e.g. Spouse" type="text" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-[#3e4850] mb-1 uppercase tracking-wider">Contact Phone</label>
                <input className="w-full h-11 px-3 py-2 bg-white border border-[#bec8d2] rounded-lg text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all" placeholder="(555) 000-0000" type="tel" />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full px-6 py-3 bg-[#0EA5E9] text-white font-semibold rounded-lg hover:bg-[#0EA5E9]/90 shadow-md transition-all active:scale-95 text-center" type="submit">
              Save Patient Record
            </button>
            <button className="w-full px-6 py-3 bg-[#eaeef4] border border-[#bec8d2] text-[#171c20] font-semibold rounded-lg hover:bg-[#e4e8ee] transition-colors text-center" type="button">
              Cancel
            </button>
          </div>
        </form>
      </main>
    </DashboardLayout>
    );
};
