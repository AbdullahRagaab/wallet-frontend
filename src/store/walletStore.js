import { create } from 'zustand';

const useWalletStore = create((set) => ({
  wallet: null,
  history: [],
  loading: false,
  setWallet: (wallet) => set({ wallet }),
  setHistory: (history) => set({ history }),
  setLoading: (loading) => set({ loading }),
}));

export default useWalletStore;

