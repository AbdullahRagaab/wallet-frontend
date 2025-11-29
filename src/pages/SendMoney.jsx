import { useState } from 'react';
import Button from '../components/Button';
import { transferFunds } from '../services/walletService';
import useToast from '../hooks/useToast';
import Toast from '../components/Toast';

const SendMoney = () => {
  const [form, setForm] = useState({ recipientEmail: '', amount: '' });
  const [loading, setLoading] = useState(false);
  const { toast, showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await transferFunds({ recipientEmail: form.recipientEmail, amount: Number(form.amount) });
      showToast('Transfer completed successfully', 'success');
      setForm({ recipientEmail: '', amount: '' });
    } catch (error) {
      showToast(error.response?.data?.message || 'Transfer failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast toast={toast} />
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Send Money</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Transfer funds to anyone, anywhere</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form Card */}
          <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow dark:border dark:border-slate-700 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Recipient Section */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Recipient Email</label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <input
                    type="email"
                    value={form.recipientEmail}
                    onChange={(e) => setForm({ ...form, recipientEmail: e.target.value })}
                    placeholder="recipient@example.com"
                    required
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 pl-12 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Amount Section */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Amount to Send</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-semibold">$</span>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    placeholder="0.00"
                    required
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 pl-8 text-lg font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Summary Card */}
              {form.amount && (
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 p-4 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Amount</span>
                      <span className="font-semibold text-slate-900 dark:text-white">${parseFloat(form.amount || 0).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-blue-200 dark:border-blue-900/50"></div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Total</span>
                      <span className="font-bold text-lg text-blue-600 dark:text-blue-400">${parseFloat(form.amount || 0).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Info Box */}
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 p-4 transition-colors">
                <p className="text-sm text-blue-900 dark:text-blue-400">
                  <span className="font-semibold">Transfer instantly:</span> Funds arrive in seconds
                </p>
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white py-3 text-base font-bold shadow hover:shadow-lg transition-all" 
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Send Money
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-6 border border-blue-200 dark:border-blue-900/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">Instant</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Arrive in seconds</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-6 border border-emerald-200 dark:border-emerald-900/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">Easy</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Just email & amount</p>
            </div>
            <div className="rounded-2xl bg-purple-50 dark:bg-purple-900/20 p-6 border border-purple-200 dark:border-purple-900/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">Safe</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Bank-level security</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMoney;

