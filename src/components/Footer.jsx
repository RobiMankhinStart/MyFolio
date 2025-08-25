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
          <div className="flex lg:flex-row flex-col items-center justify-center gap-6   font-funnel text-[20px] text-white font-semibold">
            <a
              href="#banner"
              class="cursor-pointer inline-flex items-center rounded-lg px-5 py-2 text-2xl font-mono font-semibold text-rose-400 hover:text-white border-2 border-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"
            >
              Home
            </a>
            <a
              href="#about"
              class="cursor-pointer inline-flex items-center rounded-lg px-5 py-2 text-2xl font-mono font-semibold text-rose-400 hover:text-white border-2 border-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"
            >
              About
            </a>
            <a
              href="#portFolio"
              class="cursor-pointer inline-flex items-center rounded-lg px-5 py-2 text-2xl font-mono font-semibold text-rose-400 hover:text-white border-2 border-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"
            >
              PortFolio
            </a>
          </div>
          {/* ......  */}
          {/* <ul className="flex justify-center items-center gap-5">
            <li className="px-10 p-[2px] border-r-2">
              <a
                href="#banner"
                className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Home
              </a>
            </li>
            <li className="px-10 p-[2px] border-r-2">
              <a
                href="#about"
                className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                About
              </a>
            </li>
            <li className="px-10 p-[2px] ">
              <a
                href="#portFolio"
                className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                PortFolio
              </a>
            </li>
          </ul> */}

          <div className="socials lg:mt-14 mt-12 flex lg:flex-row flex-col items-center gap-14">
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
