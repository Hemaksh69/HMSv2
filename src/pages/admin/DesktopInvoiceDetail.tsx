import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React from 'react';





export const DesktopInvoiceDetail: React.FC = () => {
  return (
    <DashboardLayout title="" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full space-y-6">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#171c20]">Invoice Details</h2>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/5 rounded-md font-semibold transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span> Download PDF
              </button>
              <button className="px-6 py-2 bg-[#0EA5E9] text-white rounded-md font-semibold hover:bg-[#0EA5E9]/90 transition-all shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">check_circle</span> Mark as Paid
              </button>
            </div>
          </div>

          <div className="bg-white w-full rounded-xl shadow-sm border border-[#bec8d2]/30 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="flex justify-between items-start border-b border-[#bec8d2]/30 pb-8 mb-8 relative z-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#0EA5E9]">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                  <span className="text-3xl font-bold tracking-tight">MediCare</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#171c20]">MediCare Hospital</h3>
                  <p className="text-sm text-[#3e4850] mt-1">456 Health Way, Wellness District</p>
                  <p className="text-sm text-[#3e4850]">contact@medicare.com | (555) 123-4567</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="bg-[#ffdad6]/20 text-[#93000a] px-4 py-1.5 rounded-full font-bold text-xs tracking-wider border border-[#ba1a1a]/20 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse" /> DUE
                </div>
                <h1 className="text-5xl font-bold text-[#bec8d2]/50 leading-none">INVOICE</h1>
                <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-right">
                  <span className="text-sm font-semibold text-[#3e4850]">Invoice #:</span>
                  <span className="text-sm font-bold text-[#171c20]">INV-2023-089</span>
                  <span className="text-sm font-semibold text-[#3e4850]">Date:</span>
                  <span className="text-sm text-[#171c20]">Oct 24, 2023</span>
                  <span className="text-sm font-semibold text-[#3e4850]">Due Date:</span>
                  <span className="text-sm font-bold text-[#ba1a1a]">Nov 07, 2023</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mb-12 relative z-10">
              <div className="mb-6 md:mb-0">
                <p className="text-xs text-[#3e4850] font-semibold uppercase tracking-wider mb-2">Bill To</p>
                <h4 className="text-lg font-bold text-[#171c20]">Eleanor Vance</h4>
                <p className="text-sm text-[#3e4850] mt-1">Patient ID: #9842-A</p>
                <p className="text-sm text-[#3e4850]">eleanor.vance@example.com</p>
                <p className="text-sm text-[#3e4850]">789 Oak Avenue, Apt 4B<br />Metropolis, NY 10001</p>
              </div>
            </div>

            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#bec8d2]/50">
                    <th className="py-4 px-2 text-xs font-semibold text-[#3e4850] uppercase tracking-wider">Description</th>
                    <th className="py-4 px-2 text-xs font-semibold text-[#3e4850] uppercase tracking-wider">Qty</th>
                    <th className="py-4 px-2 text-xs font-semibold text-[#3e4850] uppercase tracking-wider">Rate</th>
                    <th className="py-4 px-2 text-xs font-semibold text-[#3e4850] uppercase tracking-wider text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#bec8d2]/30">
                  <tr>
                    <td className="py-4 px-2">
                      <p className="font-bold text-[#171c20]">General Consultation</p>
                      <p className="text-sm text-[#3e4850]">Dr. Smith - Initial Assessment</p>
                    </td>
                    <td className="py-4 px-2 text-[#3e4850]">1</td>
                    <td className="py-4 px-2 text-[#3e4850]">$150.00</td>
                    <td className="py-4 px-2 text-right font-bold text-[#171c20]">$150.00</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-2">
                      <p className="font-bold text-[#171c20]">Comprehensive Blood Panel</p>
                      <p className="text-sm text-[#3e4850]">Lab Services</p>
                    </td>
                    <td className="py-4 px-2 text-[#3e4850]">1</td>
                    <td className="py-4 px-2 text-[#3e4850]">$220.00</td>
                    <td className="py-4 px-2 text-right font-bold text-[#171c20]">$220.00</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-2">
                      <p className="font-bold text-[#171c20]">ECG Monitoring</p>
                      <p className="text-sm text-[#3e4850]">Diagnostic</p>
                    </td>
                    <td className="py-4 px-2 text-[#3e4850]">1</td>
                    <td className="py-4 px-2 text-[#3e4850]">$85.00</td>
                    <td className="py-4 px-2 text-right font-bold text-[#171c20]">$85.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-8 relative z-10">
              <div className="w-full md:w-1/2 space-y-3">
                <div className="flex justify-between text-[#3e4850]">
                  <span>Subtotal</span>
                  <span>$455.00</span>
                </div>
                <div className="flex justify-between text-[#3e4850]">
                  <span>Tax (0%)</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-[#3e4850]">
                  <span>Insurance Coverage</span>
                  <span className="text-[#67E8F9]">-$300.00</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#bec8d2]/50 pt-4 mt-4">
                  <span className="text-lg font-bold text-[#171c20]">Total Due</span>
                  <span className="text-2xl font-bold text-[#0EA5E9]">$155.00</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </DashboardLayout>
    );
};
