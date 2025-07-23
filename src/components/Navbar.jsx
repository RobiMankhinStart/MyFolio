import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <section
      id="navbar"
      className="fixed left-0 right-0 z-20  bg-[#1c1a1fbb] py-9 px-2 border border-b-white"
    >
      <div className="container">
        <div className="containerRow flex items-center justify-between">
          <div className="logo">
            <h2 className="text-white text-[20px] font-poppins font-bold">
              Ro <span>Bi</span>
            </h2>
          </div>
          <div className="navOptions ">
            <ul className="flex items-center justify-center gap-7 font-funnel text-[20px] text-white font-semibold">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>PortFolio</button>
              </li>
              <li>
                <button>Footer</button>
              </li>
            </ul>
          </div>
          <div className="socials">
            <div class="flex justify-around gap-4 items-center px-4 py-[2px] bg-black rounded-[15px] ring-1 ring-white">
              <div class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                <FaGithub className="text-white text-xl" />

                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Github
                </div>
              </div>
              <div class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                <SiGmail className="text-white text-xl" />

                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Email
                </div>
              </div>

              <div class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                <FaLinkedin className="text-white text-xl" />

                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Linkedin
                </div>
              </div>

              <div class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                <FaFacebook className="text-white text-xl" />

                <div class="absolute top-12 left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Facebook
                </div>
              </div>

              <div class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                <FaPhoneAlt className="text-white text-xl" />

                <div class="absolute top-12 left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  Phone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
