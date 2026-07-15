import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type StatusFlag = 'normal' | 'review' | 'critical';
type ReviewState = 'idle' | 'approving' | 'rejecting';

export const MobileDocumentReview: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<StatusFlag>('review');
  const [notes, setNotes] = useState('Note mild anemia indicated by low Hemoglobin. Follow up iron panel required.');
  const [reviewState, setReviewState] = useState<ReviewState>('idle');

  const handleApprove = () => {
    setReviewState('approving');
    setTimeout(() => {
      setReviewState('idle');
      navigate('/doctor/records');
    }, 1000);
  };

  const handleReject = () => {
    setReviewState('rejecting');
    setTimeout(() => {
      setReviewState('idle');
      navigate('/doctor/records/upload');
    }, 1000);
  };

  const statusConfig: Record<StatusFlag, { label: string; border: string; bg: string; text: string; icon: string; iconColor: string }> = {
    normal: { label: 'Normal', border: 'border-[#bec8d2]/50', bg: 'bg-white', text: 'text-[#171c20]', icon: 'check_circle', iconColor: 'text-[#166534]' },
    review: { label: 'Review', border: 'border-2 border-[#b45309]', bg: 'bg-[#fef3c7]', text: 'text-[#b45309]', icon: 'error', iconColor: 'text-[#b45309]' },
    critical: { label: 'Critical', border: 'border-[#bec8d2]/50', bg: 'bg-white', text: 'text-[#171c20]', icon: 'warning', iconColor: 'text-[#ba1a1a]' },
  };

  return (
    <DashboardLayout title="Review Document" showSearch={true}>
      <main className="flex-1 w-full max-w-2xl mx-auto p-4 flex flex-col gap-6">

        {/* Document Preview */}
        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 overflow-hidden flex flex-col">
          <div className="bg-[#f0f4fa] p-4 border-b border-[#bec8d2]/30 flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#0EA5E9]">
              <span className="material-symbols-outlined">description</span>
              <span className="font-semibold text-sm truncate max-w-[200px]">Lab_Results_Q3.pdf</span>
            </div>
            <button className="text-[#0EA5E9] hover:bg-[#0ea5e9]/20 p-1.5 rounded-full transition-colors">
              <span className="material-symbols-outlined">open_in_full</span>
            </button>
          </div>
          <div className="relative h-64 bg-[#dee3e9] flex items-center justify-center p-4">
            <img className="w-full h-full object-cover rounded shadow-sm opacity-80 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChD_KIAp8y-hSLxibZLBovF5Egt-x9F73d7M4l0nEoM_gkd9uc9wGfqDiY7fQCpVcEmT8xU6EU1PC-sJqGo8cUpuNb46VrTd0T-7LJZv38jS371gduJi_BalfLwSxXviRJB9TguvT3hdByLQptIsFXRE5laQmV7j3YV_Z4LhmLJa8EXhAcghzBihL9MGZloQbwk1J40-eQII22YZ1VV6wTUkDm9bA_lHCIGWSyd91yDQXSXwufMUSe_BTmiGWkn33HS8iV1167AHQ" alt="Document preview" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 backdrop-blur-sm text-[#0EA5E9] rounded-full p-3 shadow-md hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
        </section>

        {/* Patient Info */}
        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4">
          <h3 className="text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-3">Patient Information</h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e4e8ee] shrink-0 flex items-center justify-center text-[#0EA5E9] overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy-OCvJpsRQmdilfApZilgF7Twt-PqoiLzJ8TDQgWXrZ0_luyeT8byX4nuL7h0GLGjSsJDg7vJ9_n09HZJblAl3E9ob-AuHgDov_W3Rq9mBQYMhP6-Iy-d7Jw3z0J7LSYhXlF2yjJ8QPAU-ofGmj0Sm6jKCG93--rBnjPlUIq7iZ6FQ9CIio8WOKGuFJ_Vv7uCsYttoLvbXPaAFHpA9o24Nrk5tKxXutzYbLzfQP8w_mH8IY3Ze579uyVq1jfbAn0b74xTmr9jbow" alt="Patient" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg text-[#171c20]">Eleanor Vance</h2>
              <p className="text-sm text-[#3e4850]">DOB: 12/04/1945 (78y) • ID: #983-221</p>
            </div>
          </div>
        </section>

        {/* Upload Details */}
        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4">
          <h3 className="text-xs font-semibold text-[#3e4850] uppercase tracking-wider mb-3">Upload Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-[#3e4850] mb-1">Uploaded By</span>
              <span className="font-semibold text-[#171c20]">Sarah Jenkins, RN</span>
            </div>
            <div>
              <span className="block text-[#3e4850] mb-1">Date & Time</span>
              <span className="font-semibold text-[#171c20]">Oct 24, 2023 - 14:30</span>
            </div>
          </div>
        </section>

        {/* Clinical Action Form */}
        <section className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/30 p-4 flex flex-col gap-4">
          <h3 className="text-xs font-semibold text-[#3e4850] uppercase tracking-wider">Clinical Action</h3>

          <div>
            <label className="block text-xs font-bold text-[#171c20] mb-2 uppercase">Status Flag</label>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(statusConfig) as StatusFlag[]).map((key) => {
                const cfg = statusConfig[key];
                const active = status === key;
                return (
                  <button
                    key={key}
                    onClick={() => setStatus(key)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg border cursor-pointer transition-all ${cfg.border} ${cfg.bg} ${active ? 'ring-2 ring-[#0ea5e9]/50 scale-105' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <span className={`material-symbols-outlined mb-1 text-[20px] ${cfg.iconColor}`}>{cfg.icon}</span>
                    <span className={`text-[10px] font-bold ${cfg.text}`}>{cfg.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#171c20] mb-2 uppercase">Physician Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0ea5e9] min-h-[100px]"
              placeholder="Add clinical remarks here..."
            />
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2 mb-4">
          <button
            onClick={handleReject}
            disabled={reviewState !== 'idle'}
            className="flex-1 py-3.5 rounded-xl border-2 border-[#bec8d2] text-[#3e4850] font-bold active:bg-[#f0f4fa] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {reviewState === 'rejecting' ? (
              <><span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Rejecting...</>
            ) : (
              'Reject'
            )}
          </button>
          <button
            onClick={handleApprove}
            disabled={reviewState !== 'idle'}
            className="flex-1 py-3.5 rounded-xl bg-[#0EA5E9] text-white font-bold shadow-md active:bg-[#0EA5E9]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {reviewState === 'approving' ? (
              <><span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Approving...</>
            ) : (
              <><span className="material-symbols-outlined text-[18px]">done_all</span> Approve</>
            )}
          </button>
        </div>

      </main>
    </DashboardLayout>
  );
};
