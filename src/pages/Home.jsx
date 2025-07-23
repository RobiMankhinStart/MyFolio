import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import MySkills from "../components/MySkills";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <About />
      <MySkills />
    </div>
  );
};

export default Home;
