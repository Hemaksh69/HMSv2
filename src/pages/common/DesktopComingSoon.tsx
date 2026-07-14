import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';

export const DesktopComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Feature Coming Soon" showSearch={false}>
      <div className="min-h-[calc(100vh-70px)] flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-[#0EA5E9]/5 border border-[#bec8d2]/10 p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#e4e8ee] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-[#3e4850]" style={{ fontSize: '40px' }}>
              construction
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#0EA5E9] mb-4">Feature Coming Soon</h1>
          <p className="text-[#3e4850] mb-8 leading-relaxed">
            This feature is outside the scope of the current demo. It will be available in a future update.
          </p>
          <Button variant="primary" onClick={() => navigate(-1)} className="w-full justify-center">
            Go Back
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};
