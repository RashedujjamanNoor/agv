import React, { Suspense, lazy } from "react";

// Lazy load all heavy components
const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const FAQ = lazy(() => import("../components/FAQ"));
const DemoTab = lazy(() => import("../components/DemoTab"));
const VidlyproComp = lazy(() => import("../components/VidlyproComp"));
const BeforeAfterChart = lazy(() => import("../components/BeforeAfterChart"));
const ProcessTimeline = lazy(() => import("../components/ProcessTimeline"));
const StatsCounter = lazy(() => import("../components/StatsCounter"));
const TestimonialSlider = lazy(() => import("../components/TestimonialSlider"));
const CTASection = lazy(() => import("../components/CTASection"));
const Footer = lazy(() => import("../components/Footer"));
const FounderSection = lazy(() => import("../components/FounderSection"));
const ReviewSlider = lazy(() => import("../components/ReviewSlider"));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-gray-500">
          Loading...
        </div>
      }
    >
      <div>
        <Navbar />
        <Hero />
        <StatsCounter />
        <DemoTab />
        <TestimonialSlider />
        <BeforeAfterChart />
        <ReviewSlider />
        <VidlyproComp />
        <FounderSection />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Home;
