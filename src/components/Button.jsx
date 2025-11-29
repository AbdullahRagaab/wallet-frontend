const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-500 dark:bg-brand-700 dark:hover:bg-brand-600 transition-colors',
    secondary: 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-slate-600 hover:bg-brand-50 dark:hover:bg-slate-600 transition-colors',
    danger: 'bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-700 dark:hover:bg-rose-600 transition-colors',
  };

  return (
    <button
      className={`rounded px-4 py-2 font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

