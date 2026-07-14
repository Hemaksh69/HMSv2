import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export const MobileSettings: React.FC = () => {
  const { role, userName, userRoleLabel } = useAuth();
  
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences'>('preferences');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const renderRoleSpecificSettings = () => {
    switch (role) {
      case 'admin':
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#171c20]">System Preferences</h3>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">Global Notifications</p>
                <p className="text-xs text-[#3e4850]">Broadcast messages</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">Maintenance Mode</p>
                <p className="text-xs text-[#3e4850]">Disable access</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        );
      case 'doctor':
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#171c20]">Consultation</h3>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">New Patients</p>
                <p className="text-xs text-[#3e4850]">Show in directory</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">Auto-Approve</p>
                <p className="text-xs text-[#3e4850]">For returning patients</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        );
      case 'staff':
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#171c20]">Reception Defaults</h3>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">Quick Registration</p>
                <p className="text-xs text-[#3e4850]">Skip optional fields</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">Auto Print Receipt</p>
                <p className="text-xs text-[#3e4850]">Send to printer</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        );
      case 'patient':
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#171c20]">Account Linking</h3>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">Share Records</p>
                <p className="text-xs text-[#3e4850]">With referred doctors</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
              <div>
                <p className="font-semibold text-sm text-[#171c20]">Family Linking</p>
                <p className="text-xs text-[#3e4850]">Allow dependents view</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout title="Settings" showSearch={false}>
      {/* Tabs */}
      <div className="flex p-4 gap-2 border-b border-[#bec8d2]/20 bg-white">
        <button
          onClick={() => setActiveTab('preferences')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
            activeTab === 'preferences' ? 'bg-[#0ea5e9] text-white' : 'bg-[#f0f4fa] text-[#3e4850]'
          }`}
        >
          Preferences
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
            activeTab === 'profile' ? 'bg-[#0ea5e9] text-white' : 'bg-[#f0f4fa] text-[#3e4850]'
          }`}
        >
          Profile
        </button>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center text-3xl font-bold">
                {userName.split(' ').map(n => n[0]).join('')}
              </div>
              <Button variant="outline" className="text-xs py-1 px-3" onClick={() => triggerToast('Avatar selection is simulated in demo.')}>Change</Button>
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase text-[#3e4850]">Full Name</label>
                <input type="text" defaultValue={userName} className="w-full bg-white border border-[#bec8d2]/50 rounded-lg px-3 py-2 outline-none focus:border-[#0ea5e9] text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase text-[#3e4850]">Role</label>
                <input type="text" defaultValue={userRoleLabel} disabled className="w-full bg-[#e4e8ee] text-[#73787D] border border-[#bec8d2]/50 rounded-lg px-3 py-2 outline-none text-sm" />
              </div>
              <Button variant="primary" className="w-full mt-4" onClick={() => triggerToast('Profile settings saved successfully!')}>Save Changes</Button>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="space-y-6 animate-in fade-in">
            {/* Notifications */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#171c20]">Notifications</h3>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
                <div>
                  <p className="font-semibold text-sm text-[#171c20]">Email Alerts</p>
                  <p className="text-xs text-[#3e4850]">Daily summaries</p>
                </div>
                <input type="checkbox" checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} className="toggle-checkbox" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-[#bec8d2]/20">
                <div>
                  <p className="font-semibold text-sm text-[#171c20]">SMS Alerts</p>
                  <p className="text-xs text-[#3e4850]">Urgent notifications</p>
                </div>
                <input type="checkbox" checked={smsAlerts} onChange={(e) => setSmsAlerts(e.target.checked)} className="toggle-checkbox" />
              </div>
            </div>

            <div className="h-px bg-[#bec8d2]/30 w-full" />
            
            {renderRoleSpecificSettings()}
          </div>
        )}
      </div>

      {toastMessage && (
        <div className="fixed bottom-20 left-4 right-4 bg-[#171c20]/95 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 z-50">
          <span className="material-symbols-outlined text-[#0ea5e9]">check_circle</span>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}
    </DashboardLayout>
  );
};
