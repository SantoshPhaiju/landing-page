import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer relative bottom-0 mt-20">
      <div className="footerContainer bg-[#feb3cd] h-[800px] w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,96C672,85,768,139,864,176C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div className="footerHeading flex flex-col justify-center items-center">
          <h3 className="text-center text-4xl text-black font-bold mb-6">
            What are you waiting for?
          </h3>
          <Button
            variant="contained"
            className="uppercase rounded-3xl text-base text-white bg-blue-600 hover:bg-blue-900 py-2 px-4 mt-10"
          >
            Get Started
          </Button>
        </div>

        <div className="footerBody grid grid-cols-12 gap-6 my-12 w-[1200px] mx-auto">
          <div className="item col-span-3 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-black font-bold mb-4">Logo Here</h2>
            <p className="text-xl text-slate-600 font-sans mb-8">Movie</p>
            <p className="text-sm text-slate-800">&copy; Santosh Phaiju 2022</p>
          </div>
          <div className="item col-span-2">
            <div className="itemHeading">
              <h4 className="uppercase font-bold text-sm text-pink-800">
                company
              </h4>
              <ul className="flex flex-col gap-3 mt-7">
                <li>Team</li>
                <li>History</li>
                <li>Locations</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="item col-span-2">
            <div className="itemHeading">
              <h4 className="uppercase font-bold text-sm text-pink-800">
                resources
              </h4>
              <ul className="flex flex-col gap-3 mt-7">
                <li>Resource</li>
                <li>Resource Name</li>
                <li>Another resource</li>
                <li>Final resource</li>
              </ul>
            </div>
          </div>
          <div className="item col-span-2">
            <div className="itemHeading">
              <h4 className="uppercase font-bold text-sm text-pink-800">
                legal
              </h4>
              <ul className="flex flex-col gap-3 mt-7">
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Terms Condition</li>
              </ul>
            </div>
          </div>
          <div className="item col-span-3">
            <div className="socialIcons flex justify-around">
              <div className="item bg-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-300">
                <Facebook color="primary" className="" />
              </div>
              <div className="item bg-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-300">
                <LinkedIn color="primary" />
              </div>
              <div className="item bg-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-300">
                <Twitter color="primary" />
              </div>
              <div className="item bg-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-300">
                <Instagram color="primary" />
              </div>
            </div>

            <div className="buttonContainer flex justify-center items-center mt-6 ">
              <Button
                variant="contained"
                className="uppercase rounded-3xl text-base text-white bg-pink-600 hover:bg-blue-900 py-2 px-4 mt-10"
              >
                Stay Connected
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
