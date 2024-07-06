import React from "react";
import CollectionsComp from "../CollectionsComp";
import WomenHandbag from "../../assets/Women-handbag.png";
import WomenGown from "../../assets/Women-gown.png";
import WomenShoes from "../../assets/Women-shoes.png";
import TrackSuits from "../../assets/Women-track-suits.png";
import Feedback from "../../assets/Feedback.png";
import MinusOutline from "../../assets/minus-outline.png";
import AddOutline from "../../assets/add-outline.png";
import "./collectionSection.css";
import ImgComp from "../imgComp.jsx";
import ArrowDown from "../../assets/Keyboard-arrow-down.png";
import { Link } from "react-router-dom";

const WomenSection = () => {
  return (
    <div className="MenCollections-wrapper">
    <h2>Women's Collection</h2>
    <p>Check out most promising product bought by our buyer</p>
    <div className="MenCollections">
      <CollectionsComp
        Sample={WomenHandbag}
        SampleAlt={"Women-handbag"}
        SampleImg={"SampleImg"}
        section={"Women"}
        rateImg={"rateImg"}
        rate={Feedback}
        rateAlt={"Feedback"}
        SampleName={"Leather Hand Bag"}
        price={"200"}
        oldPrice={"300"}
        MinusIcon={"MinusIcon"}
        substrCount={MinusOutline}
        substrAlt={"minus-outline"}
        count={"0"}
        additionCount={AddOutline}
        addIcon={"addIcon"}
        additionAlt={"add-outline"}
      />
      <CollectionsComp
        Sample={WomenGown}
        SampleAlt={"Women-gown"}
        SampleImg={"SampleImg"}
        section={"Women"}
        rateImg={"rateImg"}
        rate={Feedback}
        rateAlt={"Feedback"}
        SampleName={"Silk Saree Gown"}
        price={"250"}
        oldPrice={"300"}
        MinusIcon={"MinusIcon"}
        substrCount={MinusOutline}
        substrAlt={"minus-outline"}
        count={"0"}
        additionCount={AddOutline}
        addIcon={"addIcon"}
        additionAlt={"add-outline"}
      />
      <CollectionsComp
        Sample={WomenShoes}
        SampleAlt={"Women-shoes"}
        SampleImg={"SampleImg"}
        section={"Women"}
        rateImg={"rateImg"}
        rate={Feedback}
        rateAlt={"Feedback"}
        SampleName={"Black High Heels"}
        price={"200"}
        oldPrice={"300"}
        MinusIcon={"MinusIcon"}
        substrCount={MinusOutline}
        substrAlt={"minus-outline"}
        count={"0"}
        additionCount={AddOutline}
        addIcon={"addIcon"}
        additionAlt={"add-outline"}
      />
      <CollectionsComp
        Sample={TrackSuits}
        SampleAlt={"Track Suit"}
        SampleImg={"SampleImg"}
        section={"Women"}
        rateImg={"rateImg"}
        rate={Feedback}
        rateAlt={"Feedback"}
        SampleName={"Soft Track Suit"}
        price={"300"}
        oldPrice={"350"}
        MinusIcon={"MinusIcon"}
        substrCount={MinusOutline}
        substrAlt={"minus-outline"}
        count={"0"}
        additionCount={AddOutline}
        addIcon={"addIcon"}
        additionAlt={"add-outline"}
      />
    </div>
    <div className="btn-container">
      <button className="btn">
        <Link to="/">
          <span> See More</span>

          <ImgComp
            src={ArrowDown}
            alt={"Arrow-Down"}
            className={"ArrowDown"}
          />
        </Link>
      </button>
    </div>
  </div>
  )
}

export default WomenSection