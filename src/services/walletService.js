import api from './api';

export const fetchWallet = () => api.get('/wallet');
export const fetchHistory = () => api.get('/wallet/history');
export const depositFunds = (payload) => api.post('/wallet/deposit', payload);
export const withdrawFunds = (payload) => api.post('/wallet/withdraw', payload);
export const transferFunds = (payload) => api.post('/wallet/transfer', payload);

