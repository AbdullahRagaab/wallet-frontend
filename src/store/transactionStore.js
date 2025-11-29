import { create } from 'zustand';

const useTransactionStore = create((set) => ({
  transactions: [],
  loading: false,
  setTransactions: (transactions) => set({ transactions }),
  setLoading: (loading) => set({ loading }),
}));

export default useTransactionStore;

