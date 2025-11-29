import { useState } from 'react';
import Button from '../components/Button';

const Settings = () => {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Settings</h1>
      <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow dark:border dark:border-slate-700 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Two Factor Authentication</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Add an extra layer of security to your account.</p>
          </div>
          <Button variant="secondary" onClick={() => setTwoFactor(!twoFactor)}>
            {twoFactor ? 'Disable' : 'Enable'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

