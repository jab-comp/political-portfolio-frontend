// src/mockData.js

import titleImage from './assets/images/titleImage.jpg';
import image1 from './assets/images/contentImage0.png';
import image2 from './assets/images/contentImage1.webp';
import image3 from './assets/images/contentImage2.jpg';


export const titleSectionData = {
    title: "Welcome to Political Portfolio",
    image: titleImage, // Ensure this is in the public folder or imported
    description: "This is a platform to showcase political portfolios, events, and related content."
  };
  
export const contentData = [
    {
      title: "Empowering Communities",
      image: image1,
      description: "Explore how our platform empowers communities to connect with their leaders.",
    },
    {
      title: "Transparent Governance",
      image: image2,
      description: "Transparency in political processes is at the core of our mission.",
    },
    {
      title: "Driving Change",
      image: image3,
      description: "Join us in driving positive change through collective efforts.",
    },
  ];