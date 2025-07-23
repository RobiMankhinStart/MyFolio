import React from "react";
import { MyWorks } from "../MyProjects/MyWorks";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const PortFolio = () => {
  return (
    <section id="portFolio" className="mt-10">
      <div className="container">
        <div className="">
          <h2 className="text-[38px] text-center font-bold font-funnel text-white">
            My Works
          </h2>
          <div className="folioDiv flex  flex-wrap gap-10 justify-center items-center">
            {MyWorks.map((item) => (
              <div
                key={item.id}
                className="mt-6 p-3 rounded-lg shadow-yellow-600 shadow flex flex-col gap-3 bg-[#66515186]"
              >
                <div className="duration-300 h-[300px] overflow-hidden  md:w-[540px] lg:w-[550px] w-[270px]">
                  <img
                    className="rounded-lg h-full w-full object-cover"
                    src={item.Image}
                    alt={item.title}
                  />
                </div>
                <h3 className="ml-2 text-center text-white text-lg font-poppins md:text-2xl font-bold">
                  {item.title}
                </h3>
                <div className="ml-2 flex items-center justify-center gap gap-10">
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative group text-slate-950 transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-[3deg] will-change-transform duration-300 shadow-lg hover:shadow-xl h-12 text-lg pl-[5rem] pr-6 bg-yellow-400 shadow-yellow-400/30 hover:shadow-yellow-400/30"
                  >
                    <div class="absolute left-0 top-0 mt-1 ml-1 bg-white text-slate-950 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 h-10 w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-full w-full"
                      >
                        <path d="M10 8h.01"></path>
                        <path d="M12 12h.01"></path>
                        <path d="M14 8h.01"></path>
                        <path d="M16 12h.01"></path>
                        <path d="M18 8h.01"></path>
                        <path d="M6 8h.01"></path>
                        <path d="M7 16h10"></path>
                        <path d="M8 12h.01"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </svg>
                    </div>

                    <div>Play demo</div>

                    <div class="bg-orange-400 absolute flex rounded-full animate-ping opacity-75 h-5 w-5 -top-2 -right-2"></div>
                    <div class="bg-orange-600 absolute flex rounded-full scale-[90%] h-5 w-5 -top-2 -right-2"></div>
                  </a>

                  <a
                    href={item.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-lime-950 text-lime-400 border border-lime-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                  >
                    <span class="bg-lime-400 shadow-lime-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Get Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortFolio;
