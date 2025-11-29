const TransactionCard = ({ tx }) => (
  <div className="rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm transition-all">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold capitalize text-slate-800 dark:text-slate-200">{tx.type}</p>
      <p className={`text-sm font-bold ${tx.type === 'withdraw' ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
        {tx.type === 'withdraw' ? '-' : '+'}${tx.amount?.toFixed(2)}
      </p>
    </div>
    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
      <p>Status: {tx.status}</p>
      {tx.reference && <p>Reference: {tx.reference}</p>}
      <p>{new Date(tx.createdAt).toLocaleString()}</p>
    </div>
  </div>
);

export default TransactionCard;

