import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      {/* Top Navbar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="text-sm">
            <span>Call us: +123 456 789</span>
          </div>
          <div className="text-sm">
            <a href="#" className="hover:text-gray-400 mx-2">Login</a>
            <a href="#" className="hover:text-gray-400 mx-2">Register</a>
            <a href="#" className="hover:text-gray-400 mx-2">Cart (0)</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">MyShop</a>
          </div>

          {/* Navigation Links */}
          <nav className={`md:flex space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
            <a href="#" className="block md:inline-block hover:text-blue-500 py-2 px-4">Home</a>
            <a href="#" className="block md:inline-block hover:text-blue-500 py-2 px-4">Shop</a>
            <a href="#" className="block md:inline-block hover:text-blue-500 py-2 px-4">Categories</a>
            <a href="#" className="block md:inline-block hover:text-blue-500 py-2 px-4">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              className="border rounded px-2 py-1"
              placeholder="Search..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow`}>
        <nav className="flex flex-col items-center py-4">
          <a href="#" className="block py-2 px-4 hover:bg-gray-200">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-200">Shop</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-200">Categories</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
