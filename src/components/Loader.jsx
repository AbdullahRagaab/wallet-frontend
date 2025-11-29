const Loader = ({ label = 'Loading...' }) => (
  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
    <span className="h-3 w-3 animate-ping rounded-full bg-brand-600 dark:bg-brand-400" />
    <span>{label}</span>
  </div>
);

export default Loader;

