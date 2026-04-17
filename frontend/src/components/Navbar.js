/* eslint-disable jsx-a11y/anchor-is-valid */
import {  MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-red-600 transition">
          Home
        </Link>
        <div className="group relative flex items-center cursor-pointer">
          <Link
            to="/services"
            className="flex items-center hover:text-red-600 transition"
          >
            Services 
            {/* <ChevronDown size={16} className="ml-1" /> */}
          </Link>

          {/* Dropdown menu */}
          {/* <div className="absolute hidden group-hover:block top-full left-0 bg-white border shadow-lg w-40 ">
            <Link
              to="/gallery/modern-kitchen"
              className="block px-4 py-2 hover:bg-gray-100 border-b"
            >
              Modern Modular Kitchen Design
            </Link>

            <Link
              to="/gallery/doors"
              className="block px-4 py-2 hover:bg-gray-100 border-b"
            >
              Complete Door Solutions
            </Link>

            <Link
              to="/gallery/wooden-work"
              className="block px-4 py-2 hover:bg-gray-100 border-b"
            >
              Custom Wooden Work
            </Link>

            <Link
              to="/gallery/sunmica"
              className="block px-4 py-2 hover:bg-gray-100 border-b"
            >
              Premium Finishing Materials
            </Link>

            <Link
              to="/gallery/glass"
              className="block px-4 py-2 hover:bg-gray-100 border-b"
            >
              Professional Glass Work
            </Link>
          </div> */}
        </div>

        <Link to="/gallery" className="hover:text-red-600 transition">
          Gallery
        </Link>

        <Link to="/brands" className="hover:text-red-600 transition">
          Brands
        </Link>

        <Link to="/contact" className="hover:text-red-600 transition">
          Contact Us
        </Link>
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold hover:bg-green-600 transition">
        <a
          href="https://wa.me/9418031457"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold hover:bg-green-600 transition"
        >
          <MessageCircle size={18} /> WhatsApp Chat
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
