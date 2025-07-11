"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 text-center rounded-t-xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-2xl font-bold text-blue-400 mb-4 md:mb-0">
            Soc AI
          </div>
          <div className="flex space-x-6">
            {/* Replace with <Link> when routing is available */}
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ImageGen AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;