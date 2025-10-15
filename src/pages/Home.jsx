import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import DemoTab from "../components/DemoTab";

const Home = () => {
  return (
    <div className="pb-100">
      <Navbar />
      <Hero />
      <FAQ />
      <DemoTab />
    </div>
  );
};

export default Home;
