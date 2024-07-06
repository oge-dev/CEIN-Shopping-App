import React from "react";
import ImgComp from "./imgComp.jsx";
import "./DeliveryComp.css";

const DeliveryComp = ({ src, alt, headingText, paragraphText }) => {
  return (
    <div className="DeliveryComp">
      <ImgComp src={src} alt={alt} />
      <div>
        <h2>{headingText}</h2>
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};

export default DeliveryComp;
