import React from "react";
import { FaCss3Alt, FaFigma, FaGithub, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

const MySkills = () => {
  return (
    <section id="skills" className=" pt-6">
      <div className="container">
        <div className="skillsRow flex flex-col items-center">
          <h2 className="text-[38px] font-bold font-funnel text-white">
            Technologies & Expertise
          </h2>
          <div className="flex gap-14 flex-wrap mt-8">
            <div className="text-yellow-300 border border-yellow-300 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg ">
              <TiHtml5 className="md:size-[130px] size-[100px] " />
            </div>
            <div className="text-yellow-300 border border-yellow-300 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg ">
              <FaCss3Alt className="md:size-[130px] size-[100px] " />
            </div>
            <div className="text-yellow-300 border border-yellow-300 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg ">
              <TbBrandJavascript className="md:size-[130px] size-[100px] " />
            </div>
            <div className="text-gray-300 border border-gray-300 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
              <RiTailwindCssFill className="md:size-[130px] size-[100px] " />
            </div>
            <div className="text-blue-400 border border-blue-400 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
              <FaReact className="md:size-[130px] size-[100px] " />
            </div>
            <div className="text-blue-500 border border-blue-500 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
              <SiRedux className="md:size-[130px] size-[100px] " />
            </div>
            <div className="text-red-300 border border-red-300 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
              <FaGithub className="md:size-[130px] size-[100px] " />
            </div>
            <div className="text-purple-300 border border-purple-300 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
              <FaFigma className="md:size-[130px] size-[100px] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
