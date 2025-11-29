import { useEffect, useState } from 'react';
import { fetchUsers, toggleUserBlock } from '../services/adminService';
import Button from '../components/Button';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(({ data }) => setUsers(data));
  }, []);

  const handleToggle = async (user) => {
    const { data } = await toggleUserBlock(user._id, !user.isBlocked);
    setUsers((prev) => prev.map((u) => (u._id === user._id ? data : u)));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Manage Users</h1>
      <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow dark:border dark:border-slate-700 transition-colors">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-700/50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">Email</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">Status</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {users.map((user) => (
              <tr key={user._id} className="text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.isBlocked ? 'Blocked' : 'Active'}</td>
                <td className="px-4 py-3 text-right">
                  <Button variant={user.isBlocked ? 'secondary' : 'danger'} onClick={() => handleToggle(user)}>
                    {user.isBlocked ? 'Unblock' : 'Block'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;

