const Input = ({ label, type = 'text', className = '', ...props }) => (
  <label className="flex flex-col gap-1 text-sm font-medium text-slate-600 dark:text-slate-400">
    {label}
    <input
      type={type}
      className={`rounded border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-500 dark:focus:border-brand-400 focus:outline-none transition-colors ${className}`}
      {...props}
    />
  </label>
);

export default Input;

