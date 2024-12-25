import React from "react";
import { motion } from "framer-motion";
import bgCover from "../assets/images/background.jpg";
import TitleSection from "../components/TitleSection";
import logo from "../assets/images/logo.jpeg";
import ContentSection from "../components/Content";

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-center px-8 py-4 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 text-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16 mr-2" />
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
        className="relative w-full lg:h-[90vh] h-auto flex py-10  flex-col items-center justify-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgCover})`,
          backgroundSize: "cover", // Ensures the image covers the entire screen
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image repetition
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
