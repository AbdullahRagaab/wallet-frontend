import { useState } from 'react';
import Button from '../components/Button';
import { withdrawFunds } from '../services/walletService';
import useToast from '../hooks/useToast';
import Toast from '../components/Toast';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast, showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await withdrawFunds({ amount: Number(amount) });
      showToast('Withdrawal request sent successfully', 'success');
      setAmount('');
    } catch (error) {
      showToast(error.response?.data?.message || 'Withdrawal failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast toast={toast} />
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Withdraw Funds</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Transfer funds to your account</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form Card */}
          <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow transition-all">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Withdrawal Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-semibold">$</span>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    required
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 pl-8 text-lg font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition"
                  />
                </div>
              </div>

              {/* Info Box */}
              <div className="rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-900/50 p-4">
                <p className="text-sm text-rose-900 dark:text-rose-200">
                  <span className="font-semibold">Processing fee:</span> Standard bank transfer fees apply
                </p>
              </div>

              <Button 
                className="w-full bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600 text-white py-3 text-base font-bold shadow hover:shadow-lg transition" 
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Processing...
                  </span>
                ) : (
                  'Withdraw Funds'
                )}
              </Button>
            </form>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-6 border border-emerald-200 dark:border-emerald-900/50 transition-all">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">Fast Processing</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">1-2 business days</p>
            </div>
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-6 border border-blue-200 dark:border-blue-900/50 transition-all">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">Secure Transfer</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Bank-level encryption</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;

