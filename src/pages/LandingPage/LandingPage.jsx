import React from "react";
import "./LandingPage.css";
import HeroSection from "../../components/LandingPage/HeroSection.jsx";
import Delivery from "../../components/LandingPage/Delivery.jsx";
import DiscountSection from "../../components/LandingPage/DiscountSection.jsx";
import Collections from "../../components/LandingPage/Collections.jsx";
import Testimonials from "../../components/LandingPage/Testimonial.jsx";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <div className="Delivery-Collections-Testimonials">
        <Delivery />
        <DiscountSection />
        <Collections />
        <Testimonials />
      </div>
    </div>
  );
};

export default LandingPage;
