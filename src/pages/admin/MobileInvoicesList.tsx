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
    date: 'Oct 12, 2023',
    amount: '145.00',
    status: 'PAID',
  },
  {
    id: 'INV-2023-092',
    name: 'Robert Chen',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPf1Az8nW6GykL-NV6iTJXISeDG5DlvWeho3iqCBI6AFMXXVQjwT92-Js0vMTStGhYiL-s_MjOYLHuIygssJZlVWW7zl4T58_U4-7XWX4rmKMYG5J5yT74361ZJmQfZqCyroxU3HOmd81FEGyUISvDMv2Yq5fQ46MWwtrGzQaiUgb1gkX7jCk7iz90XyWyKguU0mQZOKlh5t9ALtdUSbQsPzjFXS7O7Plp4rnwlEu2r_ugcFYSoVsqEIgQFUr083MXS5ai419VPjU',
    date: 'Oct 12, 2023',
    amount: '280.00',
    status: 'DUE',
  },
];

export const MobileInvoicesList: React.FC = () => {
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
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAV3qzQAG9mVwLivwr0d0eya8L7MRDCOZsh9QLSOyT9t2DY50Dl2pLxPHD15TDPB0bb6_bS1blHkK3X6izGklLANeRsxg0YX00yp4ckgptxan194S0LEcqQ-trnefdSQiW8HaRQTeA4uT0CzNkXCoKqpJZ8GZ4cdnZPk1fXsZPkRAGGLRdW-1gK38Slk_qX13bTGDAtK_Gop5hjezwJepoR8MuXjfxgqbnDS9gl9M2b6XaE9suNFR2LChBQYi1uVcUXXfaYFUxug4',
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
    <DashboardLayout title="Invoices" showSearch={true}>
      <main className="p-4 flex flex-col gap-6">
        
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-hide">
          <button 
            onClick={() => setActiveTab('ALL')}
            className={`px-6 py-2 rounded-full font-semibold text-xs whitespace-nowrap active:scale-95 transition-all ${activeTab === 'ALL' ? 'bg-[#0ea5e9] text-white' : 'bg-[#eaeef4] text-[#3e4850] hover:bg-[#e4e8ee]'}`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab('PAID')}
            className={`px-6 py-2 rounded-full font-semibold text-xs whitespace-nowrap active:scale-95 transition-all ${activeTab === 'PAID' ? 'bg-[#0ea5e9] text-white' : 'bg-[#eaeef4] text-[#3e4850] hover:bg-[#e4e8ee]'}`}
          >
            Paid
          </button>
          <button 
            onClick={() => setActiveTab('DUE')}
            className={`px-6 py-2 rounded-full font-semibold text-xs whitespace-nowrap active:scale-95 transition-all ${activeTab === 'DUE' ? 'bg-[#0ea5e9] text-white' : 'bg-[#eaeef4] text-[#3e4850] hover:bg-[#e4e8ee]'}`}
          >
            Due
          </button>
        </div>

        {/* Invoices List */}
        <div className="flex flex-col gap-4">
          {filteredInvoices.map(invoice => (
            <article 
              key={invoice.id}
              onClick={() => navigate(`/admin/billing/${invoice.id}`)}
              className="bg-white rounded-xl p-4 shadow-[0_4px_20px_-2px_rgba(14,165,233,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(14,165,233,0.15)] transition-shadow border border-[#bec8d2]/30 flex flex-col gap-4 relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${invoice.status === 'PAID' ? 'bg-[#67E8F9]' : 'bg-[#5B21B6]'} opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img className="w-10 h-10 rounded-full object-cover border border-[#bec8d2]/20" src={invoice.avatar} alt="Patient" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#171c20]">{invoice.name}</h3>
                    <p className="text-xs text-[#3e4850]">{invoice.id}</p>
                  </div>
                </div>
                {invoice.status === 'PAID' ? (
                  <span className="px-2 py-1 rounded-full bg-[#67E8F9]/10 text-[#67E8F9] font-semibold text-xs uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Paid
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded-full bg-[#5B21B6]/10 text-[#5B21B6] font-semibold text-xs uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> Due
                  </span>
                )}
              </div>
              <div className="flex justify-between items-end border-t border-[#dee3e9] pt-3">
                <div>
                  {invoice.status === 'PAID' ? (
                    <p className="text-xs text-[#3e4850] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span> {invoice.date}
                    </p>
                  ) : (
                    <p className="text-xs text-[#ba1a1a] font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">warning</span> Due {invoice.date}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-[#0EA5E9]">${invoice.amount}</p>
                </div>
              </div>
            </article>
          ))}
          {filteredInvoices.length === 0 && (
            <div className="text-center py-12 text-[#3e4850]">
              No invoices found for this filter.
            </div>
          )}
        </div>
      </main>

      {/* FAB to create invoice */}
      <div className="fixed bottom-24 right-4 z-40">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-14 h-14 bg-[#0EA5E9] text-white rounded-full shadow-ambient flex items-center justify-center hover:bg-[#0EA5E9]/90 transition-all active:scale-95 focus:ring-4 focus:ring-[#0EA5E9]/20"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>add</span>
        </button>
      </div>

      {/* Create Invoice Bottom Sheet / Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#171c20]/60 backdrop-blur-sm flex items-end justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md shadow-2xl border border-[#bec8d2]/30 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
            {/* Header */}
            <div className="p-4 border-b border-[#bec8d2]/20 flex justify-between items-center bg-[#f6faff]">
              <h3 className="text-lg font-bold text-[#171c20] flex items-center gap-2">
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
            <form onSubmit={handleCreateInvoice} className="p-5 space-y-4 pb-8 sm:pb-5">
              <div>
                <label className="block text-xs font-bold text-[#3e4850] uppercase tracking-wider mb-1">Patient Name</label>
                <input 
                  type="text" 
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  required
                  className="w-full px-4 py-3 border border-[#bec8d2] rounded-xl focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 outline-none transition-all text-sm"
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
                    className="w-full px-4 py-3 border border-[#bec8d2] rounded-xl focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3e4850] uppercase tracking-wider mb-1">Invoice Date</label>
                  <input 
                    type="date" 
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-[#bec8d2] rounded-xl focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/50 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e4850] uppercase tracking-wider mb-1.5">Status</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus('PAID')}
                    className={`py-2.5 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 transition-all ${status === 'PAID' ? 'bg-[#DCFCE7] border-[#166534]/30 text-[#166534]' : 'bg-white border-[#bec8d2] text-[#3e4850] hover:bg-[#f0f4fa]'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Paid
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus('DUE')}
                    className={`py-2.5 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 transition-all ${status === 'DUE' ? 'bg-[#ffdad6] border-[#ba1a1a]/30 text-[#93000a]' : 'bg-white border-[#bec8d2] text-[#3e4850] hover:bg-[#f0f4fa]'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">schedule</span> Due
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
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
