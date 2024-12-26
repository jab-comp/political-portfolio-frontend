import React from "react";
import bgCover from "../assets/images/flag2.jpg";
import TitleSection from "../components/TitleSection";
import ContentSection from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <header
        className="relative w-full lg:h-[80vh] h-auto flex py-10  flex-col items-center justify-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgCover})`,
          backgroundSize: "cover", // Ensures the image covers the entire screen
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image repetition
        }}
      >
        <TitleSection />
      </header>
      <ContentSection />
      <Footer />
    </div>
  );
};

export default HomePage;
