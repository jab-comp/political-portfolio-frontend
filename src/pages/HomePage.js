// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import TitleSection from '../components/TitleSection';
import ContentSection from '../components/Content';
import { titleSectionData } from '../mockData';
import { contentData } from '../mockData';
import logoImage from '../assets/images/pPLogo.png'; // Import the image

const HomePage = () => {
  return (
    <div>
      <Navbar logo={logoImage} />
      <TitleSection data={titleSectionData}/>
      <ContentSection data={contentData} />
    </div>
  );
};

export default HomePage;
