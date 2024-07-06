import React from "react";
import Button from "../buttonComp";
import "./styles/HeroSection.css";

// HeroSection Component
const HeroSection = () => {
  return (
    // rendering of hero section
    <div className="hero-section">
      {/* hero section text */}
      <p>T-shirt / Tops /Jacket</p>
      <p>Where Fashion Meets Function</p>
      <p>cool / Style / Dress</p>
      {/* button at hero section */}
      <Button to={"/shop"} linkText={"Shop Now"} />
    </div>
  );
};

export default HeroSection;
