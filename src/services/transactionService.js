import api from './api';

export const getTransactions = () => api.get('/wallet/history');

