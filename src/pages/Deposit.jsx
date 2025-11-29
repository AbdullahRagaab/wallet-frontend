import { useState } from 'react';
import Button from '../components/Button';
import { depositFunds } from '../services/walletService';
import useToast from '../hooks/useToast';
import Toast from '../components/Toast';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast, showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await depositFunds({ amount: Number(amount) });
      showToast('Deposit successful', 'success');
      setAmount('');
    } catch (error) {
      showToast(error.response?.data?.message || 'Deposit failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast toast={toast} />
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Add Funds</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Deposit money to your wallet</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form Card */}
          <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow dark:border dark:border-slate-700 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Deposit Amount</label>
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
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 pl-8 text-lg font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Payment Method</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-3 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
                  >
                    <span>💳</span>
                    Card
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-3 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
                  >
                    <span>🏦</span>
                    Bank
                  </button>
                </div>
              </div>

              {/* Info Box */}
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900/50 p-4 transition-colors">
                <p className="text-xs text-emerald-900 dark:text-emerald-400">
                  <span className="font-semibold">Demo Mode:</span> Use any amount to test. Integration ready for Stripe/PayPal.
                </p>
              </div>

              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white py-3 text-base font-bold shadow hover:shadow-lg transition-all" 
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Processing...
                  </span>
                ) : (
                  'Deposit Now'
                )}
              </Button>
            </form>
          </div>

          {/* Security Features */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-6 border border-emerald-200 dark:border-emerald-900/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">SSL Encrypted</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">256-bit encryption</p>
            </div>
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-6 border border-blue-200 dark:border-blue-900/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.118a3.066 3.066 0 01-3.062 3.062H7.117a3.066 3.066 0 01-3.062-3.062V6.517a3.066 3.066 0 012.812-3.062zm7.958 5.953a.75.75 0 00-1.08-.022L9 12.846l-1.146-1.081a.75.75 0 10-1.08 1.022l1.82 1.708a.75.75 0 001.056-.004l4.5-4.693a.75.75 0 00-.022-1.077z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">Verified</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">All transactions checked</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;

