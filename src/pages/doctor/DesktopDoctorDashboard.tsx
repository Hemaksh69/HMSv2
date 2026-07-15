import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';





export const DesktopDoctorDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Welcome back, Dr. Julian" subtitle="Here is your clinical overview for today." showSearch={false} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Bento Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Clinical Workload (Featured Card) */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-[0_8px_24px_-8px_rgba(0,101,145,0.1)] border border-[#bec8d2]/20 p-6 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0ea5e9]/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
              <div className="flex justify-between items-center mb-8 relative z-10 border-b border-[#bec8d2]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#0ea5e9] rounded-xl text-white shadow-md">
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>monitoring</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#171c20]">Clinical Workload Overview</h2>
                </div>
                <span className="text-4xl font-bold text-[#0EA5E9]">8</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <div className="bg-[#f6faff] p-4 rounded-xl border border-[#bec8d2]/30 text-center">
                  <p className="text-xs text-[#3e4850] font-semibold uppercase tracking-wider mb-2">Reviewed</p>
                  <p className="text-2xl font-bold text-[#171c20]">3</p>
                </div>
                <div className="bg-[#0EA5E9]/5 p-4 rounded-xl border border-[#0EA5E9]/20 text-center relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0EA5E9]" />
                  <p className="text-xs text-[#0EA5E9] font-semibold uppercase tracking-wider mb-2">Pending</p>
                  <p className="text-2xl font-bold text-[#0EA5E9]">5</p>
                </div>
                <div className="bg-[#f6faff] p-4 rounded-xl border border-[#bec8d2]/30 text-center">
                  <p className="text-xs text-[#3e4850] font-semibold uppercase tracking-wider mb-2">Discharged</p>
                  <p className="text-2xl font-bold text-[#171c20]">2</p>
                </div>
                <div className="bg-[#f6faff] p-4 rounded-xl border border-[#bec8d2]/30 text-center">
                  <p className="text-xs text-[#3e4850] font-semibold uppercase tracking-wider mb-2">Avg Review</p>
                  <p className="text-2xl font-bold text-[#171c20]">15m</p>
                </div>
              </div>
            </div>

            {/* Clinical Note Action */}
            <div className="lg:col-span-4 grid grid-rows-2 gap-6">
              <div
                onClick={() => navigate('/doctor/records/upload')}
                className="bg-[#0EA5E9] text-white rounded-2xl shadow-[0_8px_24px_-8px_rgba(14,165,233,0.3)] p-6 flex flex-col justify-between relative overflow-hidden hover:shadow-[0_12px_32px_-8px_rgba(14,165,233,0.4)] transition-shadow duration-300 cursor-pointer"
              >
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl -mr-16 -mb-16 pointer-events-none" />
                <div>
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>cloud_upload</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">Upload Document</h2>
                  <p className="text-white/90">Upload lab results, imaging, or patient records.</p>
                </div>
                <button className="bg-white text-[#0EA5E9] font-bold py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors self-start shadow-sm active:scale-95">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>upload</span> Upload
                </button>
              </div>

              <div
                onClick={() => navigate('/doctor/records/1/review')}
                className="bg-[#ad85ff] text-white rounded-2xl shadow-[0_8px_24px_-8px_rgba(115,46,228,0.3)] p-6 flex flex-col justify-between relative overflow-hidden hover:shadow-[0_12px_32px_-8px_rgba(115,46,228,0.4)] transition-shadow duration-300 cursor-pointer"
              >
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl -mr-16 -mb-16 pointer-events-none" />
                <div>
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>edit_note</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">Quick Clinical Note</h2>
                  <p className="text-white/90">Draft a note for a recent patient encounter.</p>
                </div>
                <button onClick={() => navigate('/doctor/prescribe')} className="bg-white text-[#420095] font-bold py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors self-start shadow-sm active:scale-95">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span> Start Draft
                </button>
              </div>
            </div>
          </section>

          {/* Patient Queue */}
          <section className="bg-white rounded-2xl shadow-sm border border-[#bec8d2]/20 overflow-hidden">
            <div className="p-6 border-b border-[#bec8d2]/20 flex justify-between items-center bg-[#f6faff]">
              <h2 className="text-xl font-bold text-[#171c20] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0EA5E9]">groups</span> Today's Patient Queue
              </h2>
              <button className="text-[#0EA5E9] font-bold hover:underline">View All</button>
            </div>
            
            <div className="divide-y divide-[#bec8d2]/20">
              {/* Patient */}
              <div 
                onClick={() => navigate('/doctor/records')}
                className="p-6 flex items-center justify-between hover:bg-[#f0f4fa] transition-colors cursor-pointer bg-[#c9e6ff]/30"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover border-2 border-[#0ea5e9]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAV3qzQAG9mVwLivwr0d0eya8L7MRDCOZsh9QLSOyT9t2DY50Dl2pLxPHD15TDPB0bb6_bS1blHkK3X6izGklLANeRsxg0YX00yp4ckgptxan194S0LEcqQ-trnefdSQiW8HaRQTeA4uT0CzNkXCoKqpJZ8GZ4cdnZPk1fXsZPkRAGGLRdW-1gK38Slk_qX13bTGDAtK_Gop5hjezwJepoR8MuXjfxgqbnDS9gl9M2b6XaE9suNFR2LChBQYi1uVcUXXfaYFUxug4" alt="Sarah Chen" />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                      <div className="w-3 h-3 rounded-full bg-[#0EA5E9]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#171c20] text-lg">Sarah Chen</h3>
                    <div className="flex items-center gap-2 text-[#3e4850] mt-1">
                      <span className="material-symbols-outlined text-[#0EA5E9]" style={{ fontSize: '18px' }}>meeting_room</span>
                      <span className="font-medium">Assigned Bed 302</span>
                      <span className="text-[#bec8d2]">•</span>
                      <span>Cardiology Panel</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">Next Review</span>
                  <button className="text-[#0EA5E9] hover:text-[#0ea5e9] transition-colors p-2 rounded-full hover:bg-[#e4e8ee]">
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Waiting Room Patient */}
              <div 
                onClick={() => navigate('/doctor/records')}
                className="p-6 flex items-center justify-between hover:bg-[#f0f4fa] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#ad85ff]/20 text-[#420095] flex items-center justify-center font-bold text-xl border border-[#ad85ff]/30">MJ</div>
                  <div>
                    <h3 className="font-bold text-[#171c20] text-lg">Michael Johnson</h3>
                    <div className="flex items-center gap-2 text-[#3e4850] mt-1">
                      <span className="material-symbols-outlined text-[#3e4850]" style={{ fontSize: '18px' }}>meeting_room</span>
                      <span className="font-medium">Admitted Ward 4B</span>
                      <span className="text-[#bec8d2]">•</span>
                      <span>Hypertension Check</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-[#6becfd]/20 text-[#67E8F9] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">In Ward</span>
                  <button className="text-[#3e4850] hover:text-[#0EA5E9] transition-colors p-2 rounded-full hover:bg-[#e4e8ee]">
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>
    </DashboardLayout>
    );
};
