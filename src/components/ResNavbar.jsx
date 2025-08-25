import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo1 from "../assets/images/logo2-removebg-preview.png";
import { ImCancelCircle } from "react-icons/im";

const ResNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="resnavbar"
      className="lg:hidden fixed left-0 right-0 z-20  bg-[#1c1a1fbb] p-3 border border-b-white"
    >
      <div className="container">
        <div className="containerRow flex items-center justify-between">
          <div className="logo">
            <img className=" w-[260px]" src={logo1} alt="logo" />
          </div>
          <div
            className={`${
              open ? "left-0" : "left-[-80%]"
            } transition-all duration-300 ease-linear flex flex-col gap-5 fixed w-[290px]  top-0 p-2 bg-gray-900 h-full`}
          >
            <div className="logo">
              <img className=" w-[240px]" src={logo1} alt="logo" />
            </div>

            <div className="navOptions ">
              <div className="flex flex-col items-center gap-7 font-funnel text-[20px] text-white font-semibold">
                <a
                  href="#banner"
                  class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  Home
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </a>
                <a
                  href="#about"
                  class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  About
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </a>
                <a
                  href="#portFolio"
                  class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  PortFolio
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </a>
                <a
                  href="#footer"
                  class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  Footer
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </a>
              </div>
            </div>
            <div className="socials">
              <div className="flex flex-col gap-1 items-center px-4 py-[2px] bg-blac rounded-[15px]">
                <a
                  href="https://github.com/RobiMankhinStart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
                >
                  <FaGithub className="text-white text-3xl" />

                  <div className="absolute top-2 left-[87px] transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                    Github
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/robi-mankhin-608b7b271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
                >
                  <FaLinkedin className="text-white text-3xl" />

                  <div className="absolute top-2 left-[87px] transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                    Linkedin
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/robi.leo.47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
                >
                  <FaFacebook className="text-white text-3xl" />

                  <div className="absolute top-2 left-[87px] -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                    Facebook
                  </div>
                </a>

                <a
                  href="https://x.com/Robi_Mankhin49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
                >
                  <FaSquareXTwitter className="text-white text-3xl " />

                  <div className="absolute top-2 left-[87px] -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                    Twitter
                  </div>
                </a>
              </div>
            </div>
          </div>
          {open ? (
            <ImCancelCircle
              onClick={() => setOpen(!open)}
              className=" text-[32px] w-[100px] text-white"
            />
          ) : (
            <FaBars
              onClick={() => setOpen(!open)}
              className="  w-[100px]  text-[32px]  text-white"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ResNavbar;
