import React from "react";
import "./LandingPage.css";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import Delivery from "../../components/LandingPage/Delivery/Delivery";
import DiscountSection from "../../components/LandingPage/DiscountSection/DiscountSection";
import Collections from "../../components/LandingPage/CollectionSections/Collections";
import Testimonials from "../../components/LandingPage/Testimonial/Testimonial";

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
