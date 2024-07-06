import React from "react";
import "./LandingPage.css";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import Delivery from "../../components/LandingPage/Delivery/Delivery";
import DiscountSection from "../../components/LandingPage/DiscountSection/DiscountSection";
import Testimonials from "../../components/LandingPage/Testimonial/Testimonial";
import ProductList from "../../components/ShopPage/Products/ProductList";

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
