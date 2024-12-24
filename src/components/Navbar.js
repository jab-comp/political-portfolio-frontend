// src/components/Navbar.js
import React from 'react';

const Navbar = ({logo}) => {
  return (
    <nav className=" bg-gray-800 text-white">
      <div className='w-[80%] mx-auto flex items-center py-2' >
      <img src={logo} alt="Logo" className="h-[60px] rounded-md" />
      <ul className="flex space-x-16 w-full justify-center">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Services</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
