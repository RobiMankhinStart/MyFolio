import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from "../assets/images/logo1-removebg-preview.png";
import logo1 from "../assets/images/logo2-removebg-preview.png";

const Navbar = () => {
  return (
    <section
      id="navbar"
      className="fixed left-0 right-0 z-20  bg-[#1c1a1fbb] p-3 border border-b-white"
    >
      <div className="container">
        <div className="containerRow flex items-center justify-between">
          <div className="logo">
            <img className=" w-[260px]" src={logo1} alt="logo" />
            {/* <h2 className="text-[#f96902] text-[38px] font-poppins font-bold">
              Ro<span>Bi</span>
            </h2> */}
          </div>
          <div className="navOptions ">
            <ul className="flex items-center justify-center gap-7 font-funnel text-[20px] text-white font-semibold">
              <li>
                <button class="overflow-hidden w-28 p-1 h-10 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                  Home
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-[6px] left-4 z-10">
                    Explore!
                  </span>
                </button>
                {/* <button>Home</button> */}
              </li>
              <li>
                <button class="overflow-hidden w-28 p-1 h-10 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                  About
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-[6px] left-4 z-10">
                    Explore!
                  </span>
                </button>
                {/* <button>About</button> */}
              </li>
              <li>
                <button class="overflow-hidden w-28 p-1 h-10 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                  PortFolio
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-[6px] left-4 z-10">
                    Explore!
                  </span>
                </button>
                {/* <button>PortFolio</button> */}
              </li>
              <li>
                <button class="overflow-hidden w-28 p-1 h-10 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                  Footer
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-[6px] left-4 z-10">
                    Explore!
                  </span>
                </button>
                {/* <button>Footer</button> */}
              </li>
            </ul>
          </div>
          <div className="socials">
            <div class="flex justify-around gap-4 items-center px-4 py-[2px] bg-black rounded-[15px] ring-1 ring-white">
              <a
                href="https://github.com/RobiMankhinStart"
                target="_blank"
                rel="noopener noreferrer"
                class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
              >
                <FaGithub className="text-white text-xl" />

                <div class="absolute top-11 left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Github
                </div>
              </a>
              {/* <div class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                <SiGmail className="text-white text-xl" />

                <div class="absolute top-11 left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Email
                </div>
              </div> */}

              <a
                href="https://www.linkedin.com/in/robi-mankhin-608b7b271/"
                target="_blank"
                rel="noopener noreferrer"
                class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
              >
                <FaLinkedin className="text-white text-xl" />

                <div class="absolute top-11 left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Linkedin
                </div>
              </a>

              <a
                href="https://www.facebook.com/robi.leo.47"
                target="_blank"
                rel="noopener noreferrer"
                class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
              >
                <FaFacebook className="text-white text-xl" />

                <div class="absolute top-11 left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Facebook
                </div>
              </a>

              <a
                href="https://x.com/Robi_Mankhin49"
                target="_blank"
                rel="noopener noreferrer"
                class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
              >
                <FaSquareXTwitter className="text-white text-xl " />

                <div class="absolute top-11 left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Twitter
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
