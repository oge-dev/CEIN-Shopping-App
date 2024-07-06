import React from "react";
import CollectionsComp from "../CollectionsComp";
import MenGucciSneakers from "../../assets/Men-Gucci-Sneakers.png";
import MenSuit from "../../assets/Men-Suit.png";
import MenNikeTrackSuit from "../../assets/Men-Nike-track-suit.png";
import MenRolexWatch from "../../assets/Men-Rolex-wrist-watch.png";
import Feedback from "../../assets/Feedback.png";
import MinusOutline from "../../assets/minus-outline.png";
import AddOutline from "../../assets/add-outline.png";
import "./collectionSection.css";
import ImgComp from "../imgComp.jsx";
import ArrowDown from "../../assets/Keyboard-arrow-down.png";
import { Link } from "react-router-dom";


const MenSection = () => {
  return (
    <div className="MenCollections-wrapper">
      <h2>Men's Collection</h2>
      <p>Check out most promising product bought by our buyer</p>
      <div className="MenCollections">
        <CollectionsComp
          Sample={MenGucciSneakers}
          SampleAlt={"Men-Gucci-Sneakers"}
          SampleImg={"SampleImg"}
          section={"Men"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Gucci Resort Sneakers"}
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
          Sample={MenSuit}
          SampleAlt={"Silk Suit - C345"}
          SampleImg={"SampleImg"}
          section={"Men"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Silk Suit - C345"}
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
          Sample={MenNikeTrackSuit}
          SampleAlt={"Nike Track Suit"}
          SampleImg={"SampleImg"}
          section={"Men"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Nike Track Suit"}
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
          Sample={MenRolexWatch}
          SampleAlt={"Rolex C156"}
          SampleImg={"SampleImg"}
          section={"Men"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Rolex C156"}
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
  );
};

export default MenSection;
