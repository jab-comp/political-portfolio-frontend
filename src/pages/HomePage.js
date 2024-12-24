// src/pages/HomePage.js
import React from "react";
import Navbar from "../components/Navbar";
import TitleSection from "../components/TitleSection";
import ContentSection from "../components/Content";
import { titleSectionData } from "../mockData";
import { contentData } from "../mockData";
import logoImage from "../assets/images/logo.jpeg"; // Import the image

const HomePage = () => {
  return (
    <div className="bg-[#1F2938]">
      <Navbar logo={logoImage} />
      <div className="bg-[#F3F4F6]">
        <TitleSection data={titleSectionData} />
      </div>
      <div className="w-[80%] mx-auto ">
        <ContentSection data={contentData} />
      </div>
    </div>
  );
};

export default HomePage;
