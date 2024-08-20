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
          {/* Centered Email and Phone Number */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex items-center space-x-4 text-xs text-white">
              <a href="mailto:cibn@cibng.org" className="flex items-center space-x-1 hover:text-gray-400">
                <FaEnvelope className="text-xs" />
                <span>cibn@cibng.org</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-gray-400">
                <FaPhone className="text-xs" />
                <span>0700-DIAL-CIBN</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-white hover:text-gray-300"><FaFacebookF className="text-xs" /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaTwitter className="text-xs" /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaInstagram className="text-xs" /></a>
              <div className="flex items-center space-x-1">
                <a href="#" className="text-white hover:text-gray-300">Signin</a>
                <span>|</span>
                <a href="#" className="text-white hover:text-gray-300">Join CIBN</a>
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
            <nav className="flex space-x-6 mt-2 md:mt-0 text-sm md:text-base">
              <a href="#" className="text-gray-800 hover:text-gray-400">Home</a>
              <div className="relative group">
                <a href="#" className="text-gray-800 hover:text-gray-400">About</a>
                <div className="absolute left-0 hidden mt-2 space-y-2 bg-white text-black group-hover:block">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Team</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Careers</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-800 hover:text-gray-400">Services</a>
                <div className="absolute left-0 hidden mt-2 space-y-2 bg-white text-black group-hover:block">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Consulting</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Support</a>
                </div>
              </div>
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
        <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 md:hidden">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <div className="relative group">
            <a href="#" className="text-white hover:text-gray-400">About</a>
            <div className="absolute left-0 hidden mt-2 space-y-2 bg-gray-700 text-white group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">Team</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">Careers</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="text-white hover:text-gray-400">Services</a>
            <div className="absolute left-0 hidden mt-2 space-y-2 bg-gray-700 text-white group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">Consulting</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">Support</a>
            </div>
          </div>
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
