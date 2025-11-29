import { useEffect } from 'react';
import BalanceCard from '../components/BalanceCard';
import TransactionCard from '../components/TransactionCard';
import useWalletStore from '../store/walletStore';
import { fetchWallet, fetchHistory } from '../services/walletService';
import Loader from '../components/Loader';

const Dashboard = () => {
  const { wallet, history, setWallet, setHistory, loading, setLoading } = useWalletStore();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const [walletRes, historyRes] = await Promise.all([fetchWallet(), fetchHistory()]);
        setWallet(walletRes.data);
        setHistory(historyRes.data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [setHistory, setLoading, setWallet]);

  if (loading || !wallet) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <BalanceCard balance={wallet.balance} currency={wallet.currency} />
        <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow transition-all">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Quick Stats</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-slate-900 dark:text-slate-100">
            <div>
              <p className="text-xs uppercase text-slate-400 dark:text-slate-500">Transactions</p>
              <p className="text-2xl font-bold">{history.length}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-400 dark:text-slate-500">Last Activity</p>
              <p className="text-lg font-semibold">
                {history[0] ? new Date(history[0].createdAt).toLocaleDateString() : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow transition-all">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Activity</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {history.slice(0, 4).map((tx) => (
            <TransactionCard key={tx._id} tx={tx} />
          ))}
          {history.length === 0 && <p className="text-sm text-slate-500 dark:text-slate-400">No transactions yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

