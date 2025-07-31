// app/login/page.tsx
'use client'; // This is a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { API_BASE_URL } from '../../../lib/utils'; // Adjust path based on your project structure
import { useAuth } from '../../../contexts/AuthContext'; // Adjust path based on your project structure

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth(); // Get the login function from AuthContext

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Create FormData for x-www-form-urlencoded
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);

      const response = await fetch(`${API_BASE_URL}/users/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || 'Login failed');
        return;
      }

      const accessToken = data.access_token;

      // Fetch user details to store in context (using the token)
      const userResponse = await fetch(`${API_BASE_URL}/users/user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const userData = await userResponse.json();

      if (!userResponse.ok) {
        console.error('Failed to fetch user data after login:', userData);
        setError('Login successful but failed to get user details.');
        return;
      }

      login(accessToken, userData);
      console.log('User logged in:', userData);
      // Assuming your dashboard is under /auth/dashboard based on your path change
      router.push('/auth/dashboard');

    } catch (err) {
      console.error('Network error during login:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto mt-12 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
      {error && (
        <p className="text-red-600 text-center mb-4 p-2 bg-red-100 border border-red-200 rounded">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md font-semibold text-white transition duration-200 ease-in-out
            ${loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'}`}
        >
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Don&apos; have an account?{' '}
        <Link href="/auth/signup" className="text-blue-600 hover:underline font-medium">
          Sign Up here
        </Link>
      </p>
    </div>
  );
}