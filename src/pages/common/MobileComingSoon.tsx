import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

export const MobileComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Feature Coming Soon" showSearch={false}>
      <div className="flex flex-col p-4 items-center justify-center min-h-[calc(100vh-160px)]">
        <Card className="w-full text-center p-8">
          <div className="w-16 h-16 bg-[#e4e8ee] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-[#3e4850]" style={{ fontSize: '32px' }}>
              construction
            </span>
          </div>
          <h1 className="text-xl font-bold text-[#0EA5E9] mb-3">Feature Coming Soon</h1>
          <p className="text-[#3e4850] text-sm mb-8">
            This feature is outside the scope of the current demo. It will be available in a future update.
          </p>
          <Button variant="primary" onClick={() => navigate(-1)} className="w-full justify-center">
            Go Back
          </Button>
        </Card>
      </div>
    </DashboardLayout>
  );
};
