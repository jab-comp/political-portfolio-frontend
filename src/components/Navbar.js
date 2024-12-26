// src/components/Navbar.js
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center px-8 py-2  bg-gray-100">
      <div className="md:flex items-center justify-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="md:h-[120px] md:w-[160px]  h-[90px] w-[140px] mr-2"
        />
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl"
        >
          <h1
            className=" lg:text-5xl py-1 md:mt-5 md:text-3xl text-1xl text-nowrap font-bold lg:mb-6 px-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-500 to-red-500"
            style={{
              textShadow: "0px 0px 1px rgba(0, 0, 0, 0.3)",
            }}
          >
            Biography of Hon. Simona Broomes
          </h1>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
