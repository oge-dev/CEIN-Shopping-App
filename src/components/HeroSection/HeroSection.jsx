import React from "react";
import Button from "../buttonComp";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <p>T-shirt / Tops /Jacket</p>
      <p>Where Fashion Meets Function</p>
      <p>cool / Style / Dress</p>
      <Button to={"/products"} linkText={"Shop Now"} />
    </div>
  );
};

export default HeroSection;
