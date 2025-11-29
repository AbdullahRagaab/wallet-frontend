import { useEffect, useState } from 'react';
import { fetchAdminTransactions } from '../services/adminService';

const AdminTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchAdminTransactions().then(({ data }) => setTransactions(data));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">All Transactions</h1>
      <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow dark:border dark:border-slate-700 transition-colors">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-700/50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">Type</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">From</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">To</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {transactions.map((tx) => (
              <tr key={tx._id} className="text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                <td className="px-4 py-3 capitalize">{tx.type}</td>
                <td className="px-4 py-3">${tx.amount?.toFixed(2)}</td>
                <td className="px-4 py-3">{tx.fromUser?.email || '-'}</td>
                <td className="px-4 py-3">{tx.toUser?.email || '-'}</td>
                <td className="px-4 py-3">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTransactions;

