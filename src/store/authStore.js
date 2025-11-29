import { create } from 'zustand';

const tokenFromStorage = localStorage.getItem('wallet_token');
const userFromStorage = tokenFromStorage ? JSON.parse(localStorage.getItem('wallet_user') || '{}') : null;

const useAuthStore = create((set) => ({
  user: userFromStorage || null,
  token: tokenFromStorage || null,
  loading: false,
  setAuth: ({ user, token }) => {
    localStorage.setItem('wallet_token', token);
    localStorage.setItem('wallet_user', JSON.stringify(user));
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem('wallet_token');
    localStorage.removeItem('wallet_user');
    set({ user: null, token: null });
  },
  setLoading: (loading) => set({ loading }),
}));

export default useAuthStore;

