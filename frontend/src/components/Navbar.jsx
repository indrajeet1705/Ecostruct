import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Dynamic className generator for active/inactive links
  const linkClasses = ({ isActive }) =>
    `hover:text-blue-600 transition ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="overflow-hidden">
          <img
            src="/images/logo.png"
            className="w-[200px] h-[50px] rounded-xl object-contain"
            alt="Ecostruct Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-semibold">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/products" className={linkClasses}>Products</NavLink>
          <NavLink to="/about" className={linkClasses}>About Us</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <FaPhone />
            Call Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium shadow-lg">
          <NavLink to="/" onClick={toggleMenu} className={linkClasses}>Home</NavLink>
          <NavLink to="/products" onClick={toggleMenu} className={linkClasses}>Products</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={linkClasses}>About Us</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={linkClasses}>Contact</NavLink>
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <FaPhone />
            Call Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
