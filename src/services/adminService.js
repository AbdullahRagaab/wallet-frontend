import api from './api';

export const fetchUsers = () => api.get('/admin/users');
export const fetchAdminTransactions = () => api.get('/admin/transactions');
export const toggleUserBlock = (id, isBlocked) =>
  api.patch(`/admin/user/${id}/block`, { isBlocked });

