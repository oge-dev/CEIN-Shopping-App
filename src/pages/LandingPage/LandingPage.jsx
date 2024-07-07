import React from "react";
import "./LandingPage.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Delivery from "../../components/Delivery/Delivery";
import DiscountSection from "../../components/DiscountSection/DiscountSection";
import Testimonials from "../../components/Testimonial/Testimonial";
import ProductList from "../../components/Products/ProductList";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
        <Delivery />
        <DiscountSection />
        <ProductList />
        <Testimonials />
    </div>
  );
};

export default LandingPage;
