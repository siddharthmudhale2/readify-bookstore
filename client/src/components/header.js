import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          📚 Readify
        </Link>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/home" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/gallery" className="hover:text-indigo-600">Gallery</Link>
          <Link to="/newuser" className="hover:text-indigo-600">New User</Link>
          <div className="relative group">
            <span className="cursor-pointer hover:text-indigo-600">Login ▾</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2">
              <Link to="/adminlogin" className="block px-4 py-2 hover:bg-gray-100">Admin Login</Link>
              <Link to="/userlogin" className="block px-4 py-2 hover:bg-gray-100">User Login</Link>
            </div>
          </div>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>

        <div className="md:hidden">
          <FaBars className="text-2xl text-gray-700 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
