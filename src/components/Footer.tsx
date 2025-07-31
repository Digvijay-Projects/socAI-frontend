// src/components/Footer.tsx
'use client';

import React from "react";
import Link from "next/link"; // Import Link for internal navigation
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Example: Using react-icons for social media icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 sm:px-8 text-center border-t border-gray-800 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 md:mb-0">
          Soc AI
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-8 mb-6 md:mb-0">
          <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors duration-200 text-lg">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors duration-200 text-lg">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200 text-lg">
            Contact Us
          </Link>
        </div>

        {/* Social Media Icons (Example using react-icons) */}
        <div className="flex space-x-6 text-2xl mb-6 md:mb-0">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Soc AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;