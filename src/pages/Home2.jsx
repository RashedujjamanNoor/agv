import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero2 from "../components/Hero2";
import DemoTab from "../components/DemoTab2";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BeforeAfterChart from "../components/BeforeAfterChart";
import VidlyproComp from "../components/VidlyproComp";
import FounderSection from "../components/FounderSection";
import CTASection from "../components/CTASection";
import ReviewSlider2 from "../components/ReviewSlider2";
import StatsCounter2 from "../components/StatsCounter2";
import FloatingContactIcons from "../components/ContactBtn";

const Home2 = () => {
  return (
    <div>
      <Navbar2 />
      <Hero2 />
      <StatsCounter2 />
      <DemoTab />
      <BeforeAfterChart />
      <ReviewSlider2 />
      <VidlyproComp />
      <FounderSection />
      <CTASection />
      <FAQ />
      <Footer />
      <FloatingContactIcons />
    </div>
  );
};

export default Home2;
