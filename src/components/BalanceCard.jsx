const BalanceCard = ({ balance = 0, currency = 'USD' }) => (
  <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 dark:from-brand-700 dark:to-brand-600 p-6 text-white shadow-lg transition-all">
    <p className="text-sm uppercase tracking-widest text-white/70">Wallet Balance</p>
    <p className="mt-3 text-3xl font-bold">
      {currency} {balance.toFixed(2)}
    </p>
  </div>
);
// add
export default BalanceCard;

