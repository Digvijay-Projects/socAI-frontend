// contexts/AuthContext.tsx
'use client'; // This is a client component

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the UserData interface separately for clarity and reusability
interface UserData {
  id: string;
  username: string;
  email: string;
  credits: number;
  // Add any other properties your user object might have
}

interface AuthContextType {
  user: UserData | null; // Use UserData type here
  token: string | null;
  login: (token: string, userData: UserData) => void; // Use UserData type here
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt_token');
    const storedUser = localStorage.getItem('user_data');
    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser) as UserData);
      } catch (e) {
        console.error("Failed to parse stored user data:", e);
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_data');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (newToken: string, userData: UserData) => { 
    setToken(newToken);
    setUser(userData);
    localStorage.setItem('jwt_token', newToken);
    localStorage.setItem('user_data', JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user_data');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}