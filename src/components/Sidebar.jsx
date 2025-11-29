import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/send-money', label: 'Send Money' },
  { to: '/deposit', label: 'Deposit' },
  { to: '/withdraw', label: 'Withdraw' },
  { to: '/settings', label: 'Settings' },
  { to: '/admin', label: 'Admin' },
];

const Sidebar = () => (
  <aside className="h-full border-r border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-6 transition-colors">
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `rounded px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;

