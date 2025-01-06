// src/components/Navbar.js
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import Survey from "./Survey";

const Navbar = () => {
  const [surveyModalIsOpen, setSurveyModalIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const MenuItem = ({ children }) => (
    <li className="cursor-pointer py-2 rounded-md ">
      {children}
    </li>
  );

  return (
    <nav className="px-4 py-2 bg-gray-100">
      <div className="w-[90%] flex items-center justify-between   mx-auto">
        {/* Logo Section */}
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="md:h-[120px] md:w-[160px] h-[90px] w-[140px]"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex md:items-center md:space-x-10 text-[18px] text-[#02314F] font-semibold">
        <ul className="flex space-x-10">
            {[
              "Home",
              "About",
              "ALP Party",
              "Volunteer",
              "Donation",
              "Videos",
              "Reform",
              "Schedule",
              "Contact",
            ].map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-[#02314F] text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 bg-gray-100 text-[#02314F] text-[18px] font-semibold">
          <ul className="flex flex-col space-y-4 text-center">
            {[
              "Home",
              "About",
              "ALP Party",
              "Volunteer",
              "Donation",
              "Videos",
              "Reform",
              "Schedule",
              "Contact",
            ].map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </ul>
        </div>
      )}

      {/* Volunteer Button */}
      {showButton && (
        <div className="hidden md:block mt-4 text-center">
          <button
            className="px-3 py-2 rounded-md bg-[#b8a725] text-white font-semibold"
            onClick={() => setSurveyModalIsOpen(true)}
          >
            Become a Volunteer
          </button>
        </div>
      )}

      {/* Survey Modal */}
      <Survey
        modalIsOpen={surveyModalIsOpen}
        setSurveyModalIsOpen={setSurveyModalIsOpen}
        showButton={showButton}
        alreadyVoted={alreadyVoted}
        setDataUpdate={setDataUpdate}
      />
    </nav>
  );
};

export default Navbar;
