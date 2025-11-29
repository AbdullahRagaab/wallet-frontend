import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import useAuthStore from '../store/authStore';
import { registerUser } from '../services/authService';
import Toast from '../components/Toast';
import useToast from '../hooks/useToast';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
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
      const { data } = await registerUser(form);
      setAuth({ user: data.user, token: data.token });
      showToast('Account created successfully', 'success');
      navigate('/dashboard');
    } catch (error) {
      showToast(error.response?.data?.message || 'Registration failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900 transition-colors">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-xl dark:border dark:border-slate-700 transition-colors">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Create Wallet</h1>
        <div className="mt-6 space-y-4">
          <Input label="Full Name" name="name" required value={form.name} onChange={handleChange} />
          <Input label="Email" name="email" type="email" required value={form.email} onChange={handleChange} />
          <Input
            label="Password"
            name="password"
            type="password"
            required
            value={form.password}
            onChange={handleChange}
          />
          <Input label="Phone" name="phone" required value={form.phone} onChange={handleChange} />
          <Button className="w-full" disabled={loading}>
            {loading ? 'Please wait...' : 'Create Account'}
          </Button>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-600 dark:text-brand-400">
              Sign in
            </Link>
          </p>
        </div>
      </form>
      <Toast toast={toast} />
    </div>
  );
};

export default Register;

