import { useEffect, useState } from 'react';
import { fetchUsers, fetchAdminTransactions } from '../services/adminService';
import Loader from '../components/Loader';

const Admin = () => {
  const [stats, setStats] = useState({ users: 0, transactions: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const [usersRes, txRes] = await Promise.all([fetchUsers(), fetchAdminTransactions()]);
        setStats({ users: usersRes.data.length, transactions: txRes.data.length });
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow dark:border dark:border-slate-700 transition-colors">
        <p className="text-sm text-slate-500 dark:text-slate-400">Total Users</p>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.users}</p>
      </div>
      <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow dark:border dark:border-slate-700 transition-colors">
        <p className="text-sm text-slate-500 dark:text-slate-400">Transactions</p>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.transactions}</p>
      </div>
    </div>
  );
};

export default Admin;

