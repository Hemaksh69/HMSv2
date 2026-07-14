import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';

interface FormSectionProps {
  icon: string;
  iconColor?: string;
  title: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ icon, iconColor = 'text-[#0EA5E9]', title, children }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#bec8d2]/20">
    <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#bec8d2]/20">
      <span className={`material-symbols-outlined ${iconColor}`} style={{ fontSize: '20px' }}>{icon}</span>
      <h3 className="text-base font-bold text-[#171c20]">{title}</h3>
    </div>
    {children}
  </div>
);

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, icon, required, ...props }) => (
  <div>
    <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] block mb-1.5">
      {label} {required && <span className="text-[#ba1a1a]">*</span>}
    </label>
    <div className="relative">
      {icon && <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3e4850]" style={{ fontSize: '20px' }}>{icon}</span>}
      <input
        className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 rounded-xl border border-[#bec8d2] bg-white text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all`}
        {...props}
      />
    </div>
  </div>
);

export const DesktopAddPatient: React.FC = () => {
  return (
    <DashboardLayout title="Add New Patient" showSearch={true}>
      <div className="flex-1 overflow-y-auto p-8 bg-[#f0f4fa]">
        <div className="max-w-5xl mx-auto pb-8">
          {/* Page Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#3e4850] text-sm font-medium mb-2">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person</span>
                <span>Patients</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                <span className="text-[#0EA5E9]">Add New Patient</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#171c20]">Patient Profile</h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button className="px-5 py-2.5 rounded-xl border border-[#bec8d2] text-[#171c20] font-semibold hover:bg-[#f0f4fa] transition-colors bg-white text-sm">Cancel</button>
              <button className="px-5 py-2.5 rounded-xl bg-[#0EA5E9] text-white font-semibold hover:bg-[#0EA5E9]/90 shadow-sm transition-all flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>save</span>
                Save Patient
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Demographics */}
              <FormSection icon="person" title="Demographics">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="First Name" required placeholder="John" type="text" />
                  <InputField label="Last Name" required placeholder="Doe" type="text" />
                  <div className="sm:col-span-2">
                    <InputField label="Date of Birth" required icon="calendar_today" type="date" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] block mb-1.5">Gender *</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-[#bec8d2] bg-white text-base text-[#171c20] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <InputField label="Blood Group" placeholder="O+" type="text" />
                </div>
              </FormSection>

              {/* Contact Information */}
              <FormSection icon="contact_phone" title="Contact Information">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <InputField label="Phone Number" required icon="call" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label="Email Address" icon="mail" placeholder="john.doe@example.com" type="email" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label="Address" icon="home" placeholder="123 Main St" type="text" />
                  </div>
                </div>
              </FormSection>

              {/* Emergency Contact */}
              <FormSection icon="emergency" iconColor="text-[#ba1a1a]" title="Emergency Contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <InputField label="Contact Name" placeholder="Full Name" type="text" />
                  </div>
                  <InputField label="Relationship" placeholder="e.g. Spouse, Parent" type="text" />
                  <InputField label="Phone" icon="call" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </FormSection>

              {/* Medical History */}
              <FormSection icon="medical_information" iconColor="text-[#5B21B6]" title="Medical History (Brief)">
                <div className="space-y-5">
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] block mb-1.5">Known Allergies</label>
                    <textarea className="w-full pl-4 pr-4 py-2.5 rounded-xl border border-[#bec8d2] bg-white text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all min-h-[70px] resize-none" placeholder="List known allergies..." />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-[#3e4850] block mb-1.5">Existing Conditions</label>
                    <textarea className="w-full pl-4 pr-4 py-2.5 rounded-xl border border-[#bec8d2] bg-white text-base text-[#171c20] placeholder-[#6e7881] outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all min-h-[70px] resize-none" placeholder="Diabetes, Hypertension, etc." />
                  </div>
                </div>
              </FormSection>
            </div>

            {/* Mobile Save Button */}
            <div className="md:hidden flex gap-3">
              <button className="flex-1 py-3 rounded-xl border border-[#bec8d2] text-[#171c20] font-semibold bg-white text-sm">Cancel</button>
              <button className="flex-1 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold text-sm">Save Patient</button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};
