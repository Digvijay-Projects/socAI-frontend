// app/dashboard/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/AuthContext'; // Adjust path based on your project structure
import CreateContentSection from '@/components/CreateContentSection'; // Import the new component

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-300">
        <p className="text-xl animate-pulse">Loading user session...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen w-full bg-gray-950 text-gray-100 flex flex-col">
      <header className="w-full bg-gray-950 py-6 px-4 sm:px-8 lg:px-12 border-b border-gray-800 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto"> 
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              Welcome, {user.username || 'User'}!
            </h1>
            <p className="text-white text-lg">Email: {user.email}</p>
            <p className="text-white text-lg">Credits: <span className="font-semibold text-yellow-400">{user.credits || 0}</span></p>
          </div>
          <button
            onClick={logout}
            className="py-2 px-5 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-950 transition duration-200 ease-in-out shadow-md"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex-grow w-full">
        <CreateContentSection />
      </main>
    </div>
  );
}