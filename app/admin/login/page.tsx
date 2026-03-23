'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a secure auth request.
    // For this static demo, we use a simple predefined password.
    if (password === 'admin123') {
      localStorage.setItem('gir_admin_auth', 'true');
      router.push('/admin');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-nature-beige flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-nature-cream">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-nature-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-nature-darkGreen">Admin Access</h1>
          <p className="text-gray-500 mt-2">Enter your password to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-nature-green outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm mt-2 ml-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-nature-darkGreen text-white py-4 rounded-xl font-bold hover:bg-nature-green transition-all shadow-lg hover:shadow-nature-green/20"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-8">
          &copy; 2026 Gir Ayurveda Organics
        </p>
      </div>
    </div>
  );
}
