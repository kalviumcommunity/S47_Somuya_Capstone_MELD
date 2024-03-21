import React from "react";
import HeroSection from "../components/HeroSection";
import Featuresection from "../components/Featuresection";
import AccelatorSection from "../components/AccelatorSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="flex flex-col gap-20 pt-32 pb-32">
        <div>
          <HeroSection />
        </div>
        <div>
          <Featuresection />
        </div>
        <div>
          <AccelatorSection />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
