"use client";

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaBars } from 'react-icons/fa';

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
          {/* Centered Email and Phone Number on One Line */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center space-x-8 text-xs text-white hover:text-gray-400">
              <a href="mailto:cibn@cibng.org" className="flex items-center space-x-1">
                <FaEnvelope className="text-xs" />
                <span>cibn@cibng.org</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-1">
                <FaPhone className="text-xs" />
                <span>0700-DIAL-CIBN</span>
              </a>
            </div>
            {/* Social Media Icons and Signin/Join Links */}
            <div className="flex items-center space-x-4 text-xs text-white mt-2">
              <div className="flex items-center space-x-3">
                <a href="#" className="hover:text-gray-300"><FaFacebookF className="text-xs" /></a>
                <a href="#" className="hover:text-gray-300"><FaTwitter className="text-xs" /></a>
                <a href="#" className="hover:text-gray-300"><FaInstagram className="text-xs" /></a>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <a href="#" className="hover:text-gray-300">Signin</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-300">Join CIBN</a>
              </div>
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
            <nav className={`flex space-x-6 mt-2 md:mt-0 text-sm md:text-base ${menuOpen ? 'block' : 'hidden'} md:block`}>
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
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 md:hidden">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Services</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>
          <button className="text-gray-800 mt-4" onClick={toggleMenu}>
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
