import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import MySkills from "../components/MySkills";
import PortFolio from "../components/PortFolio";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <About />
      <MySkills />
      <PortFolio />
      <Footer />
    </div>
  );
};

export default Home;
