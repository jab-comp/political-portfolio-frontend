import React from "react";
import logo from "../assets/images/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
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
  const regionData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <footer className="bg-gray-100 py-5">
      <div className="lg:w-[95%] w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:items-end">
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-24 lg:h-40 lg:w-40 mb-5 lg:mb-0"
          />
          <p className="text-[14px] text-[#02314F]  font-semibold">
            Paid for by Assembly Liberty Prosperity Political Party (ALP)
          </p>
        </div>

        {/* Contact Section */}
        <div className=" md:w-[30%] text-center">
          <div className="flex flex-col items-center justify-center py-5">
            <h2 className="font-semibold text-xl lg:text-3xl">Contact Us</h2>
            <div className="bg-blue-700 h-[3px] w-[60px] lg:w-[100px] rounded-3xl"></div>
          </div>

          {/* Social Icons */}
          <div className="text-center flex flex-wrap justify-center gap-5">
            <a
              href="https://www.facebook.com/share/1BYqk9B3eH/?mibextid=wwXIfr"
              target="_blank"
              className="text-blue-700"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} className="lg:size-30" color="blue" />
            </a>
            <a
              href="https://www.tiktok.com/@alp_guyana?_t=8sUSHMPkOXm&_r=1"
              target="_blank"
              className=""
              rel="noopener noreferrer"
            >
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

        <div className="flex-1 flex flex-col justify-between p-3 bg-[#02314F] rounded  h-[160px] mt-5 lg:mt-0 space-y-3">
          <div className="flex gap-1 items-end">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium  text-white "
              >
                Join our Movement
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border  border-gray-300 bg-transparent text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block md:w-[250px] w-[200px] p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="flex gap-2 items-center">
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300  text-sm rounded bg-transparent text-white block w-full p-2.5 "
              >
                <option selected>Region</option>
                {regionData.map((item) => {
                  return <option value="US">{item}</option>;
                })}
              </select>

              <FaArrowRightLong size={35} className="text-white cursor-pointer" />
            </div>
          </div>

          <ul className="space-x-4 text-[14px] text-white font-semibold">
            <l1>Privacy policy</l1>
            <l1>Term & Conditions</l1>
            <l1>Press</l1>
            <l1>Careers</l1>
            <l1>Powered by AWS</l1>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
