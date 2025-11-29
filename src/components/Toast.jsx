const colors = {
  success: 'bg-emerald-600 dark:bg-emerald-700 shadow-emerald-600/30',
  error: 'bg-rose-600 dark:bg-rose-700 shadow-rose-600/30',
  info: 'bg-slate-700 dark:bg-slate-800 shadow-slate-700/30',
};

const Toast = ({ toast }) => {
  if (!toast) return null;
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className={`${colors[toast.type] || colors.info} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm`}>
        {toast.type === 'success' && (
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )}
        {toast.type === 'error' && (
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        )}
        <span className="font-medium">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;

