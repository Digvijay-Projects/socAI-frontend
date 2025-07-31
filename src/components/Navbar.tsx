"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from '../contexts/AuthContext'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isLoading, logout } = useAuth();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center rounded-b-xl relative">
      <div className="flex items-center space-x-2">
        <Image
          src="/images/socai-logo.png"
          alt="Socai Logo"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="text-2xl font-bold text-blue-600">Socai</span>
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Features</a>
        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">How It Works</a>
        <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Testimonials</a>
        <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Pricing</a>
        <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">FAQ</a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {!isLoading && ( 
          user ? (
            <button
              onClick={logout}
              className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-md"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/auth/signup" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-200">Sign Up</a>
              <a href="/auth/login" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">Sign In</a>
            </>
          )
        )}
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-xl z-10 flex flex-col items-start px-6 py-4 space-y-4 md:hidden">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">FAQ</a>
          <div className="flex space-x-4">
            {!isLoading && (
              user ? (
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-md"
                >
                  Logout
                </button>
              ) : (
                <>
                  <a href="/auth/signup" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-200">Sign Up</a>
                  <a href="/auth/login" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">Sign In</a>
                </>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}