// src/components/Navbar.js
import React from 'react';

const Navbar = ({logo}) => {
  return (
    <nav className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
      <img src={logo} alt="Logo" className="h-8 mr-6" />
      <ul className="flex space-x-16 w-full justify-center">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Services</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
