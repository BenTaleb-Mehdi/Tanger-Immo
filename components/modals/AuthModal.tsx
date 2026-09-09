'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = 'signin',
}: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Success! Logged in as ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900">
            {mode === 'signin' ? 'Welcome Back' : 'Create an Account'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {mode === 'signin'
              ? 'Sign in to access saved apartments, tours, and applications'
              : 'Join thousands of satisfied residents on Urban Living'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Full Name
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-teal-100 transition">
                <User className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full text-sm text-slate-800 outline-none bg-transparent"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Email Address
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-teal-100 transition">
              <Mail className="h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full text-sm text-slate-800 outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Password
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-teal-100 transition">
              <Lock className="h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-sm text-slate-800 outline-none bg-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-navy py-3 px-4 text-sm font-bold text-white shadow hover:bg-slate-800 active:scale-95 transition"
          >
            <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          {mode === 'signin' ? (
            <p>
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="font-bold text-brand-teal hover:underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signin')}
                className="font-bold text-brand-teal hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
