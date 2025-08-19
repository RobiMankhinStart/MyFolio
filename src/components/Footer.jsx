import React from "react";
import logo from "../assets/images/logo1-removebg-preview.png";
const Footer = () => {
  return (
    <footer className="py-10 pb-14 border border-t-white">
      <div className="container">
        <div className="fotrRow flex flex-col items-center gap-6">
          <div className="w-[270px]">
            <img className="w-full" src={logo} alt="Footer_logo" />
          </div>
          <ul className="flex items-center justify-center  font-funnel text-[20px] text-white font-semibold">
            <li className="px-10 p-[2px] border-r-2">
              {/* <button>Home</button> */}
              <button class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Home
              </button>
            </li>
            <li className="px-10 p-[2px] border-r-2">
              {/* <button>About</button> */}
              <button class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                About
              </button>
            </li>
            <li className="px-10 p-[2px] ">
              {/* <button>PortFolio</button> */}
              <button class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                PortFolio
              </button>
            </li>
          </ul>
          <div className="socials mt-14 flex items-center gap-14">
            <button className="fooBut">
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"> Facebook</span>
            </button>
            <button className="fooBut">
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan">Linkedin</span>
            </button>
            <button className="fooBut">
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"> Twitter</span>
            </button>
            <button className="fooBut">
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"></span>
              <span className="fooSpan"> Github</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
