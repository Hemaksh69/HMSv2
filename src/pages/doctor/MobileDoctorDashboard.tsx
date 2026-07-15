import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';




export const MobileDoctorDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Welcome back, Dr. Julian" showSearch={true}>
      <main className="flex-1 overflow-y-auto p-4 pb-24 flex flex-col gap-6">
        
        {/* Welcome Section */}
        <section className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#171c20]">Welcome back, Dr. Julian</h1>
            <p className="text-sm text-[#3e4850] mt-1">Here is your clinical overview for today.</p>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded-full border border-[#bec8d2]/30 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-sm font-semibold text-[#171c20] pr-1">Available</span>
          </div>
        </section>

        {/* Clinical Workload Overview */}
        <section className="bg-white rounded-xl shadow-ambient border border-[#bec8d2]/20 p-5 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
          <div className="flex justify-between items-center mb-6 relative z-10 border-b border-[#bec8d2]/20 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#0ea5e9] rounded-lg text-white">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h2 className="text-lg font-semibold text-[#171c20]">Today's Workload</h2>
            </div>
            <span className="text-2xl font-bold text-[#0EA5E9]">8</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-[#f6faff] p-3 rounded-lg border border-[#bec8d2]/30 text-center">
              <p className="text-xs text-[#3e4850] font-semibold uppercase tracking-wider mb-1">Reviewed</p>
              <p className="text-xl font-bold text-[#171c20]">3</p>
            </div>
            <div className="bg-[#0EA5E9]/5 p-3 rounded-lg border border-[#0EA5E9]/20 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0EA5E9]" />
              <p className="text-xs text-[#0EA5E9] font-semibold uppercase tracking-wider mb-1">Pending</p>
              <p className="text-xl font-bold text-[#0EA5E9]">5</p>
            </div>
          </div>
        </section>

        {/* Upload Document Action */}
        <section
          onClick={() => navigate('/doctor/records/upload')}
          className="bg-[#0EA5E9] text-white rounded-xl shadow-md p-5 flex flex-col relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
        >
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl -mr-10 -mb-10 pointer-events-none" />
          <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-white">cloud_upload</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Upload Document</h2>
          <p className="text-sm opacity-90 mb-4">Upload lab results, imaging, or patient records.</p>
          <button className="bg-white text-[#0EA5E9] font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 self-start">
            <span className="material-symbols-outlined text-sm">upload</span> Upload Now
          </button>
        </section>

        {/* Quick Clinical Note */}
        <section
          onClick={() => navigate('/doctor/prescribe')}
          className="bg-[#ad85ff] text-white rounded-xl shadow-md p-5 flex flex-col relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
        >
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl -mr-10 -mb-10 pointer-events-none" />
          <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-white">edit_note</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Quick Clinical Note</h2>
          <p className="text-sm opacity-90 mb-4">Draft a new note for a recent patient encounter.</p>
          <button className="bg-white text-[#420095] font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 self-start">
            <span className="material-symbols-outlined text-sm">add</span> Start Draft
          </button>
        </section>

        {/* Patient Queue */}
        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/20 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#bec8d2]/20 flex justify-between items-center bg-[#f6faff]">
            <h2 className="text-lg font-semibold text-[#171c20] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0EA5E9] text-xl">groups</span> Today's Patient Queue
            </h2>
            <button 
              onClick={() => navigate('/doctor/records')}
              className="text-[#0EA5E9] text-sm font-semibold hover:underline"
            >
              View All
            </button>
          </div>
          <div className="divide-y divide-[#bec8d2]/10">
            {/* Upcoming Highlighted */}
            <div 
              onClick={() => navigate('/doctor/records')}
              className="p-4 flex items-center justify-between hover:bg-[#f0f4fa] transition-colors cursor-pointer bg-[#0EA5E9]/5"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-12 h-12 rounded-full object-cover border-2 border-[#0EA5E9]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAV3qzQAG9mVwLivwr0d0eya8L7MRDCOZsh9QLSOyT9t2DY50Dl2pLxPHD15TDPB0bb6_bS1blHkK3X6izGklLANeRsxg0YX00yp4ckgptxan194S0LEcqQ-trnefdSQiW8HaRQTeA4uT0CzNkXCoKqpJZ8GZ4cdnZPk1fXsZPkRAGGLRdW-1gK38Slk_qX13bTGDAtK_Gop5hjezwJepoR8MuXjfxgqbnDS9gl9M2b6XaE9suNFR2LChBQYi1uVcUXXfaYFUxug4" alt="Sarah Chen" />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <div className="w-3 h-3 rounded-full bg-[#0EA5E9]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#171c20]">Sarah Chen</h3>
                  <div className="flex items-center gap-2 text-sm text-[#3e4850]">
                    <span className="material-symbols-outlined text-[#0ea5e9] text-sm">meeting_room</span> Assigned Bed 302
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="bg-[#0EA5E9] text-white text-xs font-semibold px-2 py-1 rounded-full">Next</span>
              </div>
            </div>

            {/* Waiting Room Patient */}
            <div 
              onClick={() => navigate('/doctor/records')}
              className="p-4 flex items-center justify-between hover:bg-[#f0f4fa] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ad85ff]/20 text-[#420095] flex items-center justify-center font-bold text-lg">MJ</div>
                <div>
                  <h3 className="font-semibold text-[#171c20]">Michael Johnson</h3>
                  <div className="flex items-center gap-2 text-sm text-[#3e4850]">
                    <span className="material-symbols-outlined text-sm">meeting_room</span> Admitted Ward 4B
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="bg-[#6becfd]/20 text-[#67E8F9] text-[10px] font-semibold px-2 py-1 rounded-full">In Ward</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </DashboardLayout>
    );
};
