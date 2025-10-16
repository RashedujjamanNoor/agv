import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import DemoTab from "../components/DemoTab";
import VidlyproComp from "../components/VidlyproComp";
import BeforeAfterChart from "../components/BeforeAfterChart";
import ProcessTimeline from "../components/ProcessTimeline";
import StatsCounter from "../components/StatsCounter";
import TestimonialSlider from "../components/TestimonialSlider";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsCounter />
      <DemoTab />
      <BeforeAfterChart />
      <TestimonialSlider />
      <VidlyproComp />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
