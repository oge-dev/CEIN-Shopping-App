import React from "react";
import NewArrivals from "./NewArrivals.jsx";
import MenSection from "./MenSection.jsx";
import WomenSection from "./WomenSection.jsx";
import KidsSection from "./KidsSection.jsx";
import "./Collections.css";

const Collections = () => {
  return (
    <div className="Collections">
      <NewArrivals />
      <MenSection />
      <WomenSection />
      <KidsSection />
    </div>
  );
};

export default Collections;
