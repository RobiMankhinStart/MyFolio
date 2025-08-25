import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import MySkills from "../components/MySkills";
import PortFolio from "../components/PortFolio";
import Footer from "../components/Footer";
import ResNavbar from "../components/ResNavbar";

const Home = () => {
  return (
    <div className="">
      <ResNavbar />
      <Navbar />
      <section className="relative scroll-mt-32" id="banner">
        <Banner />
      </section>
      <section className="relative scroll-mt-32" id="about">
        <About />
        <MySkills />
      </section>
      <section className="relative scroll-mt-32" id="portFolio">
        <PortFolio />
      </section>
      <section className="relative scroll-mt-32" id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
