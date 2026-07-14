import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';




export const DesktopPatientDetail: React.FC = () => {
  return (
    <DashboardLayout title="Patient Details" showSearch={true}>
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth bg-[#f0f4fa]">
          <div className="max-w-6xl mx-auto space-y-8 pb-8">
            
            {/* Patient Header Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden border border-[#bec8d2]/20 shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjGRlp5eoGOoAtsCfQtEwfRDtncBdw3DFo77WIVOEnCKbusxBrdNFTK-idszF5uTupkzpyLVwBSSzsm9XtqJZE7nsFf-DixTGFvrD0yORZqhfsXRaaIAVRGGIH7JmoM2pzciyDScAvy_dkWpFYMpeOioEbK027BDQSitcrPvBUsSoqvkD5gjtjraX513s4Nl7atro9oys6BUby7svN6pL1sY240Oc4YXGeNBgOrKJ2VtYPHn2FmQwpXf3yr5Mvj3OMQDdmGr-wVZ8" alt="Eleanor Vance" />
                </div>
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#67E8F9] rounded-full border-4 border-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <div>
                    <h1 className="text-3xl font-bold text-[#171c20] tracking-tight">Eleanor Vance</h1>
                    <p className="text-sm text-[#3e4850]">ID: #MRN-84920 <span className="mx-2">•</span> DoB: Mar 14, 1956 (68 yrs)</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-[#eaeef4] text-[#171c20] text-sm font-semibold rounded-xl hover:bg-[#e4e8ee] transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>print</span> Print
                    </button>
                    <button className="px-4 py-2 bg-[#0EA5E9] text-white text-sm font-semibold rounded-xl hover:bg-[#0EA5E9]/90 shadow-sm transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span> Edit Profile
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#3e4850]" style={{ fontSize: '18px' }}>call</span>
                    <span className="font-medium text-[#171c20]">(555) 234-9876</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#3e4850]" style={{ fontSize: '18px' }}>mail</span>
                    <span className="font-medium text-[#171c20]">eleanor.v@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#3e4850]" style={{ fontSize: '18px' }}>location_on</span>
                    <span className="font-medium text-[#171c20]">1245 Maple Street, Apt 4B</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'monitor_weight', label: 'Weight', val: '65 kg', color: 'text-[#0EA5E9]', bg: 'bg-[#0ea5e9]/10' },
                { icon: 'height', label: 'Height', val: '162 cm', color: 'text-[#67E8F9]', bg: 'bg-[#6becfd]/20' },
                { icon: 'water_drop', label: 'Blood Group', val: 'A+', color: 'text-[#ba1a1a]', bg: 'bg-[#ffdad6]/50' },
                { icon: 'monitor_heart', label: 'Blood Pressure', val: '120/80', color: 'text-[#5B21B6]', bg: 'bg-[#ad85ff]/10' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-[#bec8d2]/20 hover:-translate-y-1 transition-transform">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{stat.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#3e4850] uppercase tracking-wider font-semibold">{stat.label}</p>
                    <p className="text-xl font-bold text-[#171c20]">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Complex Info Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Clinical Notes Tab Header */}
                <div className="border-b border-[#bec8d2]/30 flex gap-6">
                  {['Clinical Notes', 'Treatment Plan', 'Lab Results', 'Imaging'].map((tab, idx) => (
                    <button key={tab} className={`pb-3 text-base font-semibold ${idx === 0 ? 'text-[#0EA5E9] border-b-2 border-[#0EA5E9]' : 'text-[#3e4850] hover:text-[#0EA5E9]'}`}>
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Notes List */}
                <div className="space-y-4">
                  {[
                    { doc: 'Dr. Sarah Jenkins', spec: 'Cardiology', date: 'Oct 12, 2023', note: 'Patient reports mild shortness of breath upon exertion. BP is well managed at current medication levels. Advised to continue current diet and light exercise regimen. Scheduled follow-up in 3 months.' },
                    { doc: 'Dr. Michael Chen', spec: 'General Practice', date: 'Aug 04, 2023', note: 'Annual physical completed. All vitals within normal ranges. Renewed prescriptions for hypertension and Type 2 Diabetes. Patient is adhering well to treatment plan.' }
                  ].map((note, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-[#bec8d2]/20">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/10 text-[#0EA5E9] flex items-center justify-center font-bold">{note.doc.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                          <div>
                            <h4 className="font-bold text-[#171c20]">{note.doc}</h4>
                            <p className="text-xs text-[#3e4850]">{note.spec}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-[#3e4850] bg-[#f0f4fa] px-3 py-1 rounded-full">{note.date}</span>
                      </div>
                      <p className="text-sm text-[#171c20] leading-relaxed mb-4">{note.note}</p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-[#eaeef4] rounded-lg text-xs font-semibold text-[#3e4850]">View Attachments (2)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="space-y-6">
                {/* Active Conditions */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#bec8d2]/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-[#171c20] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0EA5E9]" style={{ fontSize: '20px' }}>monitor_heart</span> Conditions
                    </h3>
                    <button className="text-[#0EA5E9] hover:bg-[#f0f4fa] p-1 rounded-md transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Hypertension', desc: 'Diagnosed 2019 • Managed', color: 'bg-[#ba1a1a]' },
                      { name: 'Type 2 Diabetes', desc: 'Diagnosed 2021 • Diet controlled', color: 'bg-[#67E8F9]' }
                    ].map(cond => (
                      <div key={cond.name} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f0f4fa] transition-colors border border-transparent hover:border-[#bec8d2]/30">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${cond.color}`} />
                        <div>
                          <p className="font-semibold text-[#171c20] text-sm">{cond.name}</p>
                          <p className="text-xs text-[#3e4850]">{cond.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Allergies */}
                <div className="bg-[#ffdad6]/20 rounded-2xl p-6 shadow-sm border border-[#ba1a1a]/20">
                  <h3 className="font-bold text-[#93000a] flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-[#ba1a1a]" style={{ fontSize: '20px' }}>warning</span> Allergies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white rounded-full text-[#ba1a1a] text-xs font-bold border border-[#ba1a1a]/30 shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]" /> Penicillin
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-[#ba1a1a] text-xs font-bold border border-[#ba1a1a]/30 shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]" /> Latex (Mild)
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col gap-3">
                  <button className="w-full py-3 bg-[#0EA5E9] text-white font-semibold rounded-xl hover:bg-[#0EA5E9]/90 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-sm">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit_note</span> Add Clinical Note
                  </button>
                  <button className="w-full py-3 bg-white border border-[#0EA5E9]/20 text-[#0EA5E9] font-semibold rounded-xl hover:bg-[#f0f4fa] transition-all active:scale-95 flex items-center justify-center gap-2 text-sm">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>event</span> Schedule Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
};
