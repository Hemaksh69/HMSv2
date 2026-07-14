import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

// --- Animated Count-Up Hook ---
function useCountUp(target: number, duration = 1800, startDelay = 300) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * target));
        if (progress < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    }, startDelay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf.current); };
  }, [target, duration, startDelay]);
  return value;
}

interface DepartmentBarProps {
  icon: string;
  name: string;
  percent: number;
  color: string;
  textColor: string;
}

const DepartmentBar: React.FC<DepartmentBarProps> = ({ icon, name, percent, color, textColor }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className={`material-symbols-outlined ${textColor}`} style={{ fontSize: '20px' }}>{icon}</span>
        <span className="font-bold text-[#171c20]">{name}</span>
      </div>
      <span className={`text-xs font-bold ${textColor}`}>{percent}% Occupied</span>
    </div>
    <div className="w-full h-3 bg-[#eaeef4] rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

interface EmergencyFeedItemProps {
  color: string;
  title: string;
  subtitle: string;
  detail: string;
  detailColor: string;
  dimmed?: boolean;
}

const EmergencyFeedItem: React.FC<EmergencyFeedItemProps> = ({ color, title, subtitle, detail, detailColor, dimmed }) => (
  <div className={`flex gap-4 ${dimmed ? 'opacity-70' : ''}`}>
    <div className={`w-2 h-12 ${color} rounded-full flex-shrink-0`} />
    <div>
      <p className="text-sm font-bold text-[#171c20]">{title}</p>
      <p className="text-xs text-[#3e4850]">{subtitle}</p>
      <p className={`text-xs ${detailColor} mt-1 font-medium`}>{detail}</p>
    </div>
  </div>
);

export const DesktopAdminDashboard: React.FC = () => {
  const patientCount = useCountUp(24512, 1800, 300);
  const inpatientCount = useCountUp(45, 1000, 600);
  const outpatientCount = useCountUp(83, 1100, 650);
  const surgeryCount = useCountUp(12, 800, 700);

  const formatNumber = (n: number) => n.toLocaleString();

  return (
    <DashboardLayout
      title="Welcome back, Admin Sarah"
      subtitle="Here is your hospital overview for today."
      showSearch={true}
      showLangSwitcher={true}
    >
        {/* Dashboard Canvas */}
        <div className="p-8 space-y-8">
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Large Stats Card (Animated Gradient) ── */}
            <div
              className="lg:col-span-2 relative overflow-hidden rounded-3xl p-8 text-white shadow-2xl shadow-[#0EA5E9]/30 flex flex-col justify-between min-h-[240px]"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #22D3EE 50%, #67E8F9 100%)',
                animation: 'cardFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
              }}
            >
              {/* Floating orb decorations */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle, white 0%, transparent 70%)',
                  animation: 'orbFloat 6s ease-in-out infinite',
                }}
              />
              <div
                className="absolute top-4 right-24 w-24 h-24 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, white 0%, transparent 70%)',
                  animation: 'orbFloat 8s ease-in-out infinite 2s',
                }}
              />

              {/* Top row */}
              <div className="z-10 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/70 font-semibold uppercase tracking-widest text-xs mb-2">Total Patients</p>
                    <h3
                      className="text-6xl font-extrabold tabular-nums"
                      style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
                    >
                      {formatNumber(patientCount)}
                    </h3>
                  </div>

                  {/* Shimmer Badge */}
                  <div
                    className="relative overflow-hidden bg-white/25 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-1.5 border border-white/30"
                    style={{ animation: 'badgePulse 2.5s ease-in-out infinite 1.5s' }}
                  >
                    {/* shimmer sweep */}
                    <div
                      className="absolute inset-0 -skew-x-12"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                        animation: 'shimmerSweep 2.5s ease-in-out infinite 1s',
                        backgroundSize: '200% 100%',
                      }}
                    />
                    <span className="material-symbols-outlined relative z-10" style={{ fontSize: '16px' }}>trending_up</span>
                    <span className="text-sm font-bold relative z-10">+12.5%</span>
                  </div>
                </div>
              </div>

              {/* Animated Wave SVG */}
              <div className="absolute bottom-0 left-0 w-full h-28 overflow-hidden">
                <svg
                  className="w-[200%] h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 2000 100"
                  style={{ animation: 'waveFlow 8s linear infinite' }}
                >
                  <path
                    d="M0,60 C200,10 400,90 600,60 C800,30 1000,80 1200,50 C1400,20 1600,90 1800,55 C1900,38 1950,60 2000,60 L2000,100 L0,100 Z"
                    fill="rgba(255,255,255,0.25)"
                  />
                  <path
                    d="M0,75 C250,30 450,95 700,70 C900,45 1100,85 1350,65 C1550,45 1750,80 2000,70 L2000,100 L0,100 Z"
                    fill="rgba(255,255,255,0.15)"
                  />
                </svg>
              </div>

              {/* Legend */}
              <div className="z-10 relative flex items-center gap-4 text-sm font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
                  Active Records
                </span>
                <span className="flex items-center gap-1.5 opacity-60">
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  Archived
                </span>
              </div>

              {/* CSS keyframes injected inline */}
              <style>{`
                @keyframes cardFadeUp {
                  from { opacity: 0; transform: translateY(24px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes waveFlow {
                  from { transform: translateX(0); }
                  to   { transform: translateX(-50%); }
                }
                @keyframes orbFloat {
                  0%, 100% { transform: translateY(0) scale(1); }
                  50%       { transform: translateY(-16px) scale(1.05); }
                }
                @keyframes badgePulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
                  50%       { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
                }
                @keyframes shimmerSweep {
                  0%   { transform: translateX(-100%) skewX(-12deg); }
                  100% { transform: translateX(300%) skewX(-12deg); }
                }
                @keyframes statFadeUp {
                  from { opacity: 0; transform: translateY(16px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
              `}</style>
            </div>

            {/* Daily Summary Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#0EA5E9]/5 border border-[#bec8d2]/10 flex flex-col justify-center" style={{ animation: 'cardFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DDD6FE]/40 flex items-center justify-center text-[#5B21B6]">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>clinical_notes</span>
                </div>
                <h4 className="font-bold text-lg text-[#171c20]">Daily Summary</h4>
              </div>
              <p className="text-[#3e4850] text-base leading-relaxed mb-6">
                Today's discharge rate is slightly higher than yesterday. Ensure all pharmacy clearances are prioritized.
              </p>
              <button className="w-full py-3 bg-[#e4e8ee] rounded-xl text-[#0EA5E9] font-bold hover:bg-[#0ea5e9] hover:text-white transition-all active:scale-95">
                Download Report
              </button>
            </div>
          </section>

          {/* 4-Column Stat Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'group', label: 'Active Staff', value: '48', color: 'bg-[#0EA5E9]/10', iconColor: 'text-[#0EA5E9]', delay: '0.2s' },
              { icon: 'bedroom_parent', label: 'In Patients', value: inpatientCount, color: 'bg-[#67E8F9]/10', iconColor: 'text-[#67E8F9]', delay: '0.3s' },
              { icon: 'directions_walk', label: 'Out Patients', value: outpatientCount, color: 'bg-[#5B21B6]/10', iconColor: 'text-[#5B21B6]', delay: '0.35s' },
              { icon: 'medical_information', label: 'Surgeries', value: surgeryCount, color: 'bg-[#ba1a1a]/10', iconColor: 'text-[#ba1a1a]', delay: '0.4s' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-3xl shadow-sm border border-[#bec8d2]/20 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                style={{ animation: `statFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${stat.delay} both` }}
              >
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center ${stat.iconColor}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{stat.icon}</span>
                </div>
                <div>
                  <p className="text-[#3e4850] font-medium text-sm">{stat.label}</p>
                  <h4 className="text-3xl font-bold text-[#171c20] tabular-nums">{stat.value}</h4>
                </div>
              </div>
            ))}
          </section>

          {/* Bottom Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Departments Section */}
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl shadow-[#0EA5E9]/5 border border-[#bec8d2]/10 overflow-hidden">
              <div className="p-6 border-b border-[#bec8d2]/10 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#171c20]">Departments</h3>
                  <p className="text-sm text-[#3e4850]">Capacity &amp; Resource Allocation</p>
                </div>
                <Link className="text-[#0EA5E9] font-bold text-sm hover:underline" to="/admin/reports">See all</Link>
              </div>
              <div className="p-6 space-y-6">
                <DepartmentBar icon="favorite" name="Cardiology" percent={85} color="bg-[#0EA5E9]" textColor="text-[#0EA5E9]" />
                <DepartmentBar icon="psychology" name="Neurology" percent={62} color="bg-[#67E8F9]" textColor="text-[#67E8F9]" />
                <DepartmentBar icon="orthopedics" name="Orthopedics" percent={45} color="bg-[#5B21B6]" textColor="text-[#5B21B6]" />
                <DepartmentBar icon="child_care" name="Pediatrics" percent={92} color="bg-[#ba1a1a]" textColor="text-[#ba1a1a]" />
              </div>
            </div>

            {/* Emergency Feed */}
            <div className="lg:col-span-4 bg-white rounded-3xl shadow-xl shadow-[#0EA5E9]/5 border border-[#bec8d2]/10 flex flex-col">
              <div className="p-6 border-b border-[#bec8d2]/10">
                <h3 className="text-xl font-bold text-[#171c20]">Emergency Feed</h3>
              </div>
              <div className="p-6 flex-1 space-y-6 overflow-y-auto custom-scrollbar">
                <EmergencyFeedItem
                  color="bg-[#ba1a1a]"
                  title="Emergency Admission"
                  subtitle="Patient: David Miller • 5 mins ago"
                  detail="Critical State - Trauma Room 4"
                  detailColor="text-[#ba1a1a]"
                />
                <EmergencyFeedItem
                  color="bg-[#0EA5E9]"
                  title="Surgery Completed"
                  subtitle="Dr. Sarah Cole • Cardiology Unit"
                  detail="Patient stable, moved to recovery."
                  detailColor="text-[#0EA5E9]"
                />
                <EmergencyFeedItem
                  color="bg-[#bec8d2]"
                  title="Daily Rounds Started"
                  subtitle="Nursing Staff • North Wing"
                  detail="Scheduled routine checkups."
                  detailColor="text-[#3e4850]"
                  dimmed
                />
              </div>
              <div className="p-4 bg-[#f0f4fa] rounded-b-3xl">
                <button className="w-full py-2 text-[#0EA5E9] font-bold text-sm border border-[#0EA5E9]/20 rounded-xl hover:bg-white transition-colors">
                  View All Events
                </button>
              </div>
            </div>
          </section>
        </div>

      {/* FAB */}
      <Link 
        to="/admin/patients/add"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#0EA5E9] text-white rounded-full shadow-2xl shadow-[#0EA5E9]/40 flex items-center justify-center hover:scale-110 active:scale-90 transition-all group z-50"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
        <span className="absolute right-full mr-4 bg-[#dee3e9] text-[#171c20] px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
          Register Patient
        </span>
      </Link>
    </DashboardLayout>
  );
};
