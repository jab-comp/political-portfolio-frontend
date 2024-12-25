import React from 'react';
import { motion } from 'framer-motion';
import bgCover from "../assets/images/background.jpg";
import TitleSection from '../components/TitleSection';
import logo from "../assets/images/logo.jpeg"
import ContentSection from '../components/Content';

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 mr-2"
          />
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl"
          >
            <h1>Biography of Hon. Simona Broomes</h1>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative w-full h-screen flex flex-col items-center"
        style={{
          backgroundImage: `url(${bgCover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <TitleSection />
      </header>


      {/* Details Section */}
      <ContentSection />
    </div>
  );
};

export default HomePage;
