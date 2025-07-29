// app/dashboard/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/AuthContext'; // Adjust path based on your project structure

export default function DashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      // If done loading and no user, redirect to login
      router.push('/auth/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className="p-5 text-center text-gray-700">Loading user session...</div>;
  }

  if (!user) {
    return null; // Should redirect, so this won't typically render
  }

  return (
    <div className="p-5 max-w-2xl mx-auto mt-12 border border-gray-200 rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome, {user.username}!</h1>
      <p className="text-gray-700 mb-2">Email: {user.email}</p>
      <p className="text-gray-700 mb-4">Credits: {user.credits}</p>
      {/* Display other user details */}

      <button
        onClick={logout}
        className="mt-6 py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 ease-in-out"
      >
        Logout
      </button>

      <h2 className="mt-10 text-2xl font-semibold text-gray-800">Your Protected Content Here</h2>
      <p className="text-gray-600 mt-2">This content is only visible to logged-in users. You can add more features and information here.</p>
    </div>
  );
}