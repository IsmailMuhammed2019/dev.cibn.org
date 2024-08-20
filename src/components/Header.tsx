"use client";

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-200 text-white w-full">
      {/* Top Bar */}
      <div className="bg-green-700 text-xs py-2">
        <div className="container mx-auto px-4">
          {/* Centered Email and Phone Number */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1 text-xs text-white hover:text-gray-400">
              <FaEnvelope className="text-xs" />
              <a href="mailto:cibn@cibng.org">cibn@cibng.org</a>
            </div>
            <div className="flex items-center space-x-1 text-xs text-white hover:text-gray-400">
              <FaPhone className="text-xs" />
              <a href="tel:+1234567890">0700-DIAL-CIBN</a>
            </div>
          </div>
          {/* Social Media Icons and Signin/Join Links */}
          <div className="flex justify-center mt-2 text-xs text-white">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <a href="#" className="hover:text-gray-300"><FaFacebookF className="text-xs" /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter className="text-xs" /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram className="text-xs" /></a>
            </div>
            <div className="flex items-center space-x-1 ml-4">
              <a href="#" className="hover:text-gray-300">Signin</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-300">Join CIBN</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-t border-green-700 py-3 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4">
          {/* Mobile View - Align Logo, Search Bar, and Burger Icon Horizontally */}
          <div className="flex justify-between items-center w-full md:hidden">
            <div className="text-sm font-semibold">
              <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with your logo image */}
            </div>
            <div className="relative flex-1 mx-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="p-2 pl-8 text-sm border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full" 
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="ml-4 text-gray-800" onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>

          {/* Desktop View - Normal Layout */}
          <div className="hidden md:flex justify-between items-center w-full">
            <div className="text-sm font-semibold">
              <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with your logo image */}
            </div>
            <nav className={`flex space-x-6 mt-2 md:mt-0 text-sm md:text-base`}>
              <a href="#" className="text-gray-800 hover:text-gray-400">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-400">About</a>
              <a href="#" className="text-gray-800 hover:text-gray-400">Services</a>
              <a href="#" className="text-gray-800 hover:text-gray-400">Contact</a>
            </nav>
            <div className="relative mt-2 md:mt-0 flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="p-2 pl-8 text-sm border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full" 
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-green-700 text-gray-50 flex flex-col items-center pt-16">
          <button className="absolute top-4 right-4 text-gray-50" onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-50 hover:text-gray-300">Home</a>
            <a href="#" className="text-gray-50 hover:text-gray-300">About</a>
            <div className="relative group">
              <a href="#" className="text-gray-50 hover:text-gray-300">Services</a>
              <div className="absolute left-0 mt-2 w-48 bg-green-800 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 hover:bg-green-600">Service 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-green-600">Service 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-green-600">Service 3</a>
              </div>
            </div>
            <a href="#" className="text-gray-50 hover:text-gray-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
