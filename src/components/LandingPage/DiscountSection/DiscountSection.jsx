import React from "react";
import ImgComp from "../../imgComp";
import GirlImg from "../../../assets/discountImage2.png";
import BoyImg from "../../../assets/discountImage.png";
import "./DiscountSection.css";
import Button from "../../buttonComp";

const DiscountSection = () => {
  return (
    <div className="DiscountSection">
      <div className="discount">
        <div className="girl">
          <div className="discount-text">
            <h2>Collection For Girls</h2>
            <p>
              Up To <span>40%</span> Off
            </p>
            <Button to={"/shop"} linkText={"Shop Now"} />
          </div>
          <div className="discount-img">
            <ImgComp src={GirlImg} alt={"Girls"} />
          </div>
        </div>
        <div className="boy">
          <div className="discount-text">
            <h2>Collection For Boys</h2>
            <p>
              Up To <span>40%</span> Off
            </p>
            <Button to={"/shop"} linkText={"Shop Now"} />
          </div>
          <div className="discount-img">
            <ImgComp src={BoyImg} alt={"Boys"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
