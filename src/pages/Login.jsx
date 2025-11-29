import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import useAuthStore from '../store/authStore';
import { loginUser, verify2fa } from '../services/authService';
import Toast from '../components/Toast';
import useToast from '../hooks/useToast';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [pending2FA, setPending2FA] = useState(null);
  const { setAuth, setLoading, loading } = useAuthStore();
  const navigate = useNavigate();
  const { toast, showToast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (pending2FA) {
        const { data } = await verify2fa({ email: pending2FA.email, code: twoFactorCode });
        setAuth({ user: data.user, token: data.token });
        navigate('/dashboard');
      } else {
        const { data } = await loginUser(form);
        if (data.requires2FA) {
          setPending2FA(data.user);
          showToast('Enter your 2FA code to continue', 'info');
        } else {
          setAuth({ user: data.user, token: data.token });
          navigate('/dashboard');
        }
      }
    } catch (error) {
      showToast(error.response?.data?.message || 'Login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900 transition-colors">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-xl dark:border dark:border-slate-700 transition-colors">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Welcome Back</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Securely access your wallet.</p>
        <div className="mt-6 space-y-4">
          <Input label="Email" name="email" type="email" required value={form.email} onChange={handleChange} />
          <Input
            label="Password"
            name="password"
            type="password"
            required
            value={form.password}
            onChange={handleChange}
          />
          {pending2FA && (
            <Input
              label="2FA Code"
              name="twoFactorCode"
              value={twoFactorCode}
              onChange={(e) => setTwoFactorCode(e.target.value)}
            />
          )}
          <Button className="w-full" disabled={loading}>
            {loading ? 'Authenticating...' : 'Login'}
          </Button>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            No account?{' '}
            <Link to="/register" className="text-brand-600 dark:text-brand-400">
              Create one
            </Link>
          </p>
        </div>
      </form>
      <Toast toast={toast} />
    </div>
  );
};

export default Login;

