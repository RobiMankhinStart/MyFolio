import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import MySkills from "../components/MySkills";
import PortFolio from "../components/PortFolio";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <About />
      <MySkills />
      <PortFolio />
    </div>
  );
};

export default Home;
