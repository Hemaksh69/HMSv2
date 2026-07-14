import { DashboardLayout } from '../../components/layout/DashboardLayout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Invoice {
  id: string;
  name: string;
  avatar: string;
  date: string;
  amount: string;
  status: 'PAID' | 'DUE';
}

const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'INV-2023-089',
    name: 'Eleanor Vance',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_Jl58BjtDwM9jb-gqcZsiiLKSzLJ6FfBEvANdlfk562aIDGhCMX5pC9bwKSRWQOu9Sl2coSQ_vDVN746lKbHAw6-lpy1HrOFYzi3_9Md5hCgmYObKI2BEHlRgAkVOWHCF3mY1kRBfN4A3hRybZRaGJ0dbQ0WDj5l2SST8BBooAkR3NzfDOxhtt1FnzKWjoqGQsmDbNaXIgRCoLlj1KUHOd7iKQ1jE8ybXF1Cw7imXBEx_7XlqDqYwGHrhudWSMtoy2m6BdctGqY',
    date: 'Oct 24, 2023',
    amount: '155.00',
    status: 'DUE',
  },
  {
    id: 'INV-2023-088',
    name: 'Robert Chen',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPf1Az8nW6GykL-NV6iTJXISeDG5DlvWeho3iqCBI6AFMXXVQjwT92-Js0vMTStGhYiL-s_MjOYLHuIygssJZlVWW7zl4T58_U4-7XWX4rmKMYG5J5yT74361ZJmQfZqCyroxU3HOmd81FEGyUISvDMv2Yq5fQ46MWwtrGzQaiUgb1gkX7jCk7iz90XyWyKguU0mQZOKlh5t9ALtdUSbQsPzjFXS7O7Plp4rnwlEu2r_ugcFYSoVsqEIgQFUr083MXS5ai419VPjU',
    date: 'Oct 23, 2023',
    amount: '320.00',
    status: 'PAID',
  }
];

export const DesktopInvoicesList: React.FC = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>(INITIAL_INVOICES);
  const [activeTab, setActiveTab] = useState<'ALL' | 'PAID' | 'DUE'>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [patientName, setPatientName] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState<'PAID' | 'DUE'>('DUE');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !amount) return;

    const newInvoice: Invoice = {
      id: `INV-2023-${Math.floor(100 + Math.random() * 900)}`,
      name: patientName,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAV3qzQAG9mVwLivwr0d0eya8L7MRDCOZsh9QLSOyT9t2DY50Dl2pLxPHD15TDPB0bb6_bS1blHkK3X6izGklLANeRsxg0YX00yp4ckgptxan194S0LEcqQ-trnefdSQiW8HaRQTeA4uT0CzNkXCoKqpJZ8GZ4cdnZPk1fXsZPkRAGGLRdW-1gK38Slk_qX13bTGDAtK_Gop5hjezwJepoR8MuXjfxgqbnDS9gl9M2b6XaE9suNFR2LChBQYi1uVcUXXfaYFUxug4', // Default placeholder avatar
      date: new Date(invoiceDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      amount: parseFloat(amount).toFixed(2),
      status: status,
    };

    setInvoices([newInvoice, ...invoices]);
    setIsModalOpen(false);

    // Reset fields
    setPatientName('');
    setAmount('');
    setStatus('DUE');
    setInvoiceDate(new Date().toISOString().split('T')[0]);
  };

  const filteredInvoices = invoices.filter(invoice => {
    if (activeTab === 'ALL') return true;
    return invoice.status === activeTab;
  });

  return (
    <DashboardLayout title="Billing" subtitle="" showSearch={true} showLangSwitcher={false}>
      <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full space-y-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#171c20] tracking-tight">Billing & Invoices</h2>
              <p className="text-[#3e4850] mt-1">Manage patient billing, payments, and outstanding dues.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              Create Invoice
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-[#bec8d2]/20 overflow-hidden">
            
            {/* Filters Bar */}
            <div className="p-5 border-b border-[#bec8d2]/20 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/50">
              <div className="flex space-x-1 bg-[#f0f4fa] p-1 rounded-lg w-full sm:w-auto">
                <button 
                  onClick={() => setActiveTab('ALL')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'ALL' ? 'bg-white text-[#0EA5E9] shadow-sm' : 'text-[#3e4850] hover:text-[#0EA5E9]'}`}
                >
                  All Invoices
                </button>
                <button 
                  onClick={() => setActiveTab('PAID')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'PAID' ? 'bg-white text-[#0EA5E9] shadow-sm' : 'text-[#3e4850] hover:text-[#0EA5E9]'}`}
                >
                  Paid
                </button>
                <button 
                  onClick={() => setActiveTab('DUE')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'DUE' ? 'bg-white text-[#0EA5E9] shadow-sm' : 'text-[#3e4850] hover:text-[#0EA5E9]'}`}
                >
                  Due
                </button>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#bec8d2] rounded-md text-sm text-[#3e4850] hover:bg-[#f0f4fa] transition-colors bg-white">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#bec8d2] rounded-md text-sm text-[#3e4850] hover:bg-[#f0f4fa] transition-colors bg-white">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span> This Month
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f0f4fa]/50">
                  <tr className="border-b border-[#bec8d2]/30 text-xs font-semibold text-[#6e7881] uppercase tracking-wider">
                    <th className="px-6 py-4">Invoice ID</th>
                    <th className="px-6 py-4">Patient Name</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#bec8d2]/20">
                  {filteredInvoices.map(invoice => (
                    <tr 
                      key={invoice.id} 
                      onClick={() => navigate(`/admin/billing/${invoice.id}`)}
                      className="hover:bg-[#0ea5e9]/5 transition-colors group cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-[#171c20]">{invoice.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img className="w-8 h-8 rounded-full object-cover border border-[#bec8d2]/50" src={invoice.avatar} alt="Patient" />
                          <span className="font-semibold text-[#171c20]">{invoice.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#3e4850] text-sm">{invoice.date}</td>
                      <td className="px-6 py-4 font-semibold text-[#171c20]">${invoice.amount}</td>
                      <td className="px-6 py-4">
                        {invoice.status === 'DUE' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ffdad6] text-[#93000a] border border-[#ba1a1a]/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-pulse" /> DUE
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#DCFCE7] text-[#166534] border border-[#166534]/20">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span> PAID
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <button className="p-2 text-[#3e4850] hover:text-[#0EA5E9] hover:bg-[#0ea5e9]/10 rounded-full transition-colors">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredInvoices.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-[#3e4850]">
                        No invoices found for this filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Placeholder */}
            <div className="p-4 border-t border-[#bec8d2]/20 flex justify-between items-center bg-[#f0f4fa]/30 text-sm text-[#3e4850]">
              <span>Showing {filteredInvoices.length} entries</span>
              <div className="flex gap-1">
                <button className="p-1 rounded hover:bg-[#e4e8ee] disabled:opacity-50" disabled><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
                <button className="w-8 h-8 rounded bg-[#0EA5E9] text-white font-medium">1</button>
                <button className="p-1 rounded hover:bg-[#e4e8ee]" disabled><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
              </div>
            </div>

          </div>

        </div>

      {/* Create Invoice Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#171c20]/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-[#bec8d2]/30 flex flex-col overflow-hidden animate-in fade-in duration-200">
            {/* Header */}
            <div className="p-6 border-b border-[#bec8d2]/20 flex justify-between items-center bg-[#f6faff]">
              <h3 className="text-xl font-bold text-[#171c20] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0ea5e9]">payments</span>
                New Invoice
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#e4e8ee] text-[#3e4850] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateInvoice} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#3e4850] uppercase tracking-wider mb-1">Patient Name</label>
                <input 
                  type="text" 
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-4 py-3 border border-[#bec8d2] rounded-xl focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3e4850] uppercase tracking-wider mb-1">Amount ($)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 150.00"
                    required
                    className="w-full px-4 py-3 border border-[#bec8d2] rounded-xl focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3e4850] uppercase tracking-wider mb-1">Invoice Date</label>
                  <input 
                    type="date" 
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-[#bec8d2] rounded-xl focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e4850] uppercase tracking-wider mb-1.5">Status</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus('PAID')}
                    className={`py-2.5 rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 transition-all ${status === 'PAID' ? 'bg-[#DCFCE7] border-[#166534]/30 text-[#166534]' : 'bg-white border-[#bec8d2] text-[#3e4850] hover:bg-[#f0f4fa]'}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">check_circle</span> Paid
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus('DUE')}
                    className={`py-2.5 rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 transition-all ${status === 'DUE' ? 'bg-[#ffdad6] border-[#ba1a1a]/30 text-[#93000a]' : 'bg-white border-[#bec8d2] text-[#3e4850] hover:bg-[#f0f4fa]'}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">schedule</span> Due
                  </button>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-[#bec8d2] text-[#171c20] font-semibold text-sm hover:bg-[#f0f4fa] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold text-sm hover:bg-[#0EA5E9]/90 shadow-md active:scale-95 transition-transform"
                >
                  Generate Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
