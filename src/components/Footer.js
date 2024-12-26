import React from "react";
import logo from "../assets/images/logo.png";

import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-5">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center lg:items-end">
        {/* Logo Section */}
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-24 lg:h-40 lg:w-40 mb-5 lg:mb-0"
        />

        {/* Contact Section */}
        <div className="flex-1 text-center">
          <div className="flex flex-col items-center justify-center py-5">
            <h2 className="font-semibold text-xl lg:text-3xl">Contact Us</h2>
            <div className="bg-blue-700 h-[3px] w-[60px] lg:w-[100px] rounded-3xl"></div>
          </div>

          {/* Social Icons */}
          <div className="text-center flex flex-wrap justify-center gap-5">
            <a
              href="#"
              target="_blank"
              className="text-blue-700"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} className="lg:size-30" color="blue" />
            </a>
            <a href="#" target="_blank" className="" rel="noopener noreferrer">
              <FaTiktok size={25} className="lg:size-30" color="black" />
            </a>
            <a href="#" target="_blank" className="" rel="noopener noreferrer">
              <FaInstagram size={25} className="lg:size-30" color="#E4405F" />
            </a>
            <a href="#" target="_blank" className="" rel="noopener noreferrer">
              <FaLinkedin size={25} className="lg:size-30" color="#0A66C2" />
            </a>
            <a href="#" target="_blank" className="" rel="noopener noreferrer">
              <FaTwitter size={25} className="lg:size-30" color="#1DA1F2" />
            </a>
            <a href="#" target="_blank" className="" rel="noopener noreferrer">
              <FaYoutube size={25} className="lg:size-30" color="#FF0000" />
            </a>
            <a href="#" target="_blank" className="" rel="noopener noreferrer">
              <FaWhatsapp size={25} className="lg:size-30" color="#25D366" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
