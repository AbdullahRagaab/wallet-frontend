import { useEffect } from 'react';
import TransactionCard from '../components/TransactionCard';
import useTransactionStore from '../store/transactionStore';
import { getTransactions } from '../services/transactionService';

const Transactions = () => {
  const { transactions, setTransactions, loading, setLoading } = useTransactionStore();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const { data } = await getTransactions();
        setTransactions(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [setLoading, setTransactions]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Transactions</h1>
      {loading && <p className="text-slate-600 dark:text-slate-400">Loading...</p>}
      <div className="grid gap-4 md:grid-cols-2">
        {transactions.map((tx) => (
          <TransactionCard key={tx._id} tx={tx} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;

