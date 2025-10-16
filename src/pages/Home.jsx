import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import DemoTab from "../components/DemoTab";
import VidlyproComp from "../components/VidlyproComp";
import BeforeAfterChart from "../components/BeforeAfterChart";
import ProcessTimeline from "../components/ProcessTimeline";
import StatsCounter from "../components/StatsCounter";

const Home = () => {
  return (
    <div className="pb-100">
      <Navbar />
      <Hero />
      <StatsCounter />
      <DemoTab />
      <BeforeAfterChart />
      <VidlyproComp />
      <FAQ />
    </div>
  );
};

export default Home;
