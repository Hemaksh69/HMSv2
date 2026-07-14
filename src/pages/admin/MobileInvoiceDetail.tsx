import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';




export const MobileInvoiceDetail: React.FC = () => {
  return (
    <DashboardLayout title="Invoice" showSearch={true}>
      <main className="flex-1 px-4 pt-4 pb-32 max-w-lg mx-auto w-full">
        
        <div className="bg-white/85 backdrop-blur-md rounded-xl p-4 flex flex-col gap-6 relative overflow-hidden border border-white/40 shadow-[0_8px_32px_rgba(0,101,145,0.05)]">
          
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#0EA5E9]/5 rounded-full blur-2xl pointer-events-none" />
          
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0EA5E9] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                <span className="font-bold text-xl text-[#0EA5E9] tracking-tight">MediCare</span>
              </div>
              <span className="text-xs text-[#3e4850] mt-2">123 Wellness Way, Suite 400<br/>Healthcare City, HC 90210</span>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ffdad6] text-[#93000a] text-[10px] uppercase tracking-wider font-bold">Due</span>
              <span className="text-xs text-[#3e4850] text-right">INV-2023-0842<br/>Oct 24, 2023</span>
            </div>
          </div>
          
          <hr className="border-t border-[#bec8d2]/30" />
          
          {/* Patient Details */}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#3e4850] font-semibold uppercase">Bill To</span>
            <span className="text-sm font-bold text-[#171c20]">Eleanor Vance</span>
            <span className="text-xs text-[#3e4850]">Patient ID: #9842-A<br/>eleanor.vance@example.com</span>
          </div>

          {/* Itemized List */}
          <div className="flex flex-col gap-3 mt-2">
            <span className="text-xs text-[#3e4850] font-semibold uppercase mb-1">Services Provided</span>
            
            <div className="bg-[#f0f4fa] rounded-lg p-3 flex justify-between items-center shadow-sm">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#171c20]">General Consultation</span>
                <span className="text-xs text-[#3e4850]">Dr. Smith - 45 mins</span>
              </div>
              <span className="text-sm font-bold text-[#0EA5E9]">$150.00</span>
            </div>
            
            <div className="bg-[#f0f4fa] rounded-lg p-3 flex justify-between items-center shadow-sm">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#171c20]">Comprehensive Blood Panel</span>
                <span className="text-xs text-[#3e4850]">Lab Services</span>
              </div>
              <span className="text-sm font-bold text-[#0EA5E9]">$220.00</span>
            </div>
            
            <div className="bg-[#f0f4fa] rounded-lg p-3 flex justify-between items-center shadow-sm">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#171c20]">ECG Monitoring</span>
                <span className="text-xs text-[#3e4850]">Diagnostic</span>
              </div>
              <span className="text-sm font-bold text-[#0EA5E9]">$85.00</span>
            </div>
          </div>

          <hr className="border-t border-[#bec8d2]/30" />

          {/* Totals */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#3e4850]">Subtotal</span>
              <span className="font-semibold text-[#171c20]">$455.00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#3e4850]">Insurance Coverage</span>
              <span className="font-semibold text-[#67E8F9]">-$300.00</span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2 pt-2 border-t border-[#bec8d2]/30">
              <span className="font-bold text-[#171c20]">Total Due</span>
              <span className="font-bold text-lg text-[#0EA5E9]">$155.00</span>
            </div>
          </div>

        </div>

      </main>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+80px)] left-0 w-full px-4 flex gap-3 z-30">
        <button className="flex-1 bg-white text-[#0EA5E9] border border-[#0EA5E9] font-bold py-3 rounded-xl hover:bg-[#f0f4fa] active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">download</span> PDF
        </button>
        <button className="flex-1 bg-[#0EA5E9] text-white font-bold py-3 rounded-xl shadow-md hover:bg-[#0EA5E9]/90 active:scale-95 transition-all flex items-center justify-center gap-2">
          Pay Now
        </button>
      </div>

    </DashboardLayout>
  );
};
