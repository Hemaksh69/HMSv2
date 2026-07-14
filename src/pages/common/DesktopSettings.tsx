import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export const DesktopSettings: React.FC = () => {
  const { role, userName, userRoleLabel } = useAuth();
  
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences' | 'security'>('preferences');
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
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#171c20]">System Preferences</h3>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Global Notifications</p>
                <p className="text-sm text-[#3e4850]">Allow system-wide broadcast messages</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Maintenance Mode</p>
                <p className="text-sm text-[#3e4850]">Disable access for non-admin users</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        );
      case 'doctor':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#171c20]">Consultation Settings</h3>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Accepting New Patients</p>
                <p className="text-sm text-[#3e4850]">Show profile in public directory</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Auto-Approve Appointments</p>
                <p className="text-sm text-[#3e4850]">For returning patients only</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        );
      case 'staff':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#171c20]">Reception Defaults</h3>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Quick Registration</p>
                <p className="text-sm text-[#3e4850]">Skip optional fields by default</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Print Receipt Automatically</p>
                <p className="text-sm text-[#3e4850]">Send directly to front-desk printer</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        );
      case 'patient':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#171c20]">Account Preferences</h3>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Share Records with Specialists</p>
                <p className="text-sm text-[#3e4850]">Auto-grant access to referred doctors</p>
              </div>
              <input type="checkbox" className="toggle-checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
              <div>
                <p className="font-semibold text-[#171c20]">Family Account Linking</p>
                <p className="text-sm text-[#3e4850]">Allow dependents to view your records</p>
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
      <div className="p-8 flex-1">
          <Card className="max-w-4xl w-full p-0 overflow-hidden flex min-h-[600px]">
            {/* Settings Sidebar */}
            <div className="w-64 bg-[#f0f4fa] border-r border-[#bec8d2]/30 p-6">
              <h2 className="text-xl font-bold text-[#0EA5E9] mb-6">Settings</h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-colors flex items-center gap-3 ${
                    activeTab === 'profile' ? 'bg-[#0ea5e9] text-white' : 'text-[#3e4850] hover:bg-[#e4e8ee]'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person</span>
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('preferences')}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-colors flex items-center gap-3 ${
                    activeTab === 'preferences' ? 'bg-[#0ea5e9] text-white' : 'text-[#3e4850] hover:bg-[#e4e8ee]'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>tune</span>
                  Preferences
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-colors flex items-center gap-3 ${
                    activeTab === 'security' ? 'bg-[#0ea5e9] text-white' : 'text-[#3e4850] hover:bg-[#e4e8ee]'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lock</span>
                  Security
                </button>
              </nav>
            </div>

            {/* Settings Content */}
            <div className="flex-1 p-8 bg-white">
              {activeTab === 'profile' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                  <h2 className="text-2xl font-bold text-[#171c20] mb-6">Profile Settings</h2>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center text-3xl font-bold">
                      {userName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <Button variant="outline" onClick={() => triggerToast('Avatar selection is simulated in demo.')}>Change Avatar</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#3e4850]">Full Name</label>
                      <input type="text" defaultValue={userName} className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-lg px-4 py-2.5 outline-none focus:border-[#0ea5e9]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#3e4850]">Role</label>
                      <input type="text" defaultValue={userRoleLabel} disabled className="w-full bg-[#e4e8ee] text-[#73787D] border border-[#bec8d2]/50 rounded-lg px-4 py-2.5 outline-none" />
                    </div>
                  </div>
                  <Button variant="primary" className="mt-4" onClick={() => triggerToast('Profile settings saved successfully!')}>Save Changes</Button>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                  <h2 className="text-2xl font-bold text-[#171c20] mb-6">General Preferences</h2>
                  
                  {/* Notifications Block */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#171c20]">Notifications</h3>
                    <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
                      <div>
                        <p className="font-semibold text-[#171c20]">Email Alerts</p>
                        <p className="text-sm text-[#3e4850]">Receive daily summaries and updates via email</p>
                      </div>
                      <input type="checkbox" checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} className="toggle-checkbox" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#f6faff] rounded-xl border border-[#bec8d2]/30">
                      <div>
                        <p className="font-semibold text-[#171c20]">SMS Alerts</p>
                        <p className="text-sm text-[#3e4850]">Receive urgent notifications on your mobile</p>
                      </div>
                      <input type="checkbox" checked={smsAlerts} onChange={(e) => setSmsAlerts(e.target.checked)} className="toggle-checkbox" />
                    </div>
                  </div>

                  <div className="h-px bg-[#bec8d2]/30 w-full" />
                  
                  {renderRoleSpecificSettings()}
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                  <h2 className="text-2xl font-bold text-[#171c20] mb-6">Security & Password</h2>
                  <div className="space-y-4 max-w-md">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#3e4850]">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-lg px-4 py-2.5 outline-none focus:border-[#0ea5e9]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#3e4850]">New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-[#f6faff] border border-[#bec8d2]/50 rounded-lg px-4 py-2.5 outline-none focus:border-[#0ea5e9]" />
                    </div>
                    <Button variant="primary" className="w-full justify-center" onClick={() => triggerToast('Password updated successfully!')}>Update Password</Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
      </div>

      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-[#171c20] text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 z-50">
          <span className="material-symbols-outlined text-[#0ea5e9]">check_circle</span>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}
    </DashboardLayout>
  );
};
