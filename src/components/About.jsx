import React, { useState } from "react";
import coverImg from "../assets/bgOne-removebg-preview.png";
import MyInfo from "./MyInfo";
import cv from "../assets/Robi-cv-01851228651.pdf";
const About = () => {
  const [infoDIv, setInfoDiv] = useState(false);
  return (
    <section id="About" className=" border-t border-t-white">
      <div className="container">
        <div className="about_row flex justify-between items-cente">
          <div className="left">
            <div className="img">
              <img src={coverImg} alt="aboutMe-img" />
            </div>
          </div>
          <div className="right flex flex-col items-center">
            <h2 className=" mt-14 text-[38px] text-white font-semibold font-roboto">
              About Me
            </h2>
            <p className="text-[30px] font-semibold font-funnel text-white w-[680px]">
              A motivated and committed individual who is positive about
              applying my knowledge and abilities to develop and achieve in the
              technology sector. Building dynamic and effective websites is my
              main focus.
            </p>
            <div className="flex mt-12 gap-10">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                class="font-funnel cursor-pointer group/download relative flex gap-1 px-8 py-4 bg-[#5c5ee9bd] text-[#f1f1f1] rounded-lg hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Interface / Download">
                      <path
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="#f1f1f1"
                        d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                        id="Vector"
                      ></path>
                    </g>
                  </g>
                </svg>
                View CV
                <div class="absolute text-xs uppercase scale-0 rounded-md py-2 px-2 bg-[#5c5ee9f5] left-2/4 mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#5c5fe9] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4">
                  358kb
                </div>
              </a>
              <button
                onClick={() => setInfoDiv(true)}
                class="rounded-md cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500"
              >
                <span class="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">
                  Personal info
                </span>
                <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
                <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

                <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                <span class="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
              </button>
              {infoDIv && <MyInfo setInfoDiv={setInfoDiv} />}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="marqueeRow"> */}
      <div className="marquee text-white">
        <span>
          Web Development - Web Design - User Interface - React-&nbsp;
        </span>
        <span>
          Web Development - Web Design - User Interface - React-&nbsp;
        </span>
        <span>
          Web Development - Web Design - User Interface - React-&nbsp;
        </span>
        <span>
          Web Development - Web Design - User Interface - React-&nbsp;
        </span>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
