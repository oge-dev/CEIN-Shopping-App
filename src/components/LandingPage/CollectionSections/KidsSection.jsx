import React from "react";
import CollectionsComp from "./CollectionsComp";
import Balletwear from "../../../assets/Rectangle760.png";
import CottonSoftSocks from "../../../assets/Children-nike-socks.png";
import NikeTrackSuit from "../../../assets/Children-nike-track-suit.png";
import PumaViverRunner from "../../../assets/Children-puma-shoes.png";
import Feedback from "../../../assets/Feedback.png";
import MinusOutline from "../../../assets/minus-outline.png";
import AddOutline from "../../../assets/add-outline.png";
import "./collectionSection.css";
import ImgComp from "../../imgComp";
import ArrowDown from "../../../assets/Keyboard-arrow-down.png";
import { Link } from "react-router-dom";

const KidsSection = () => {
  return (
    <div className="MenCollections-wrapper">
      <h2>Kids Collection</h2>
      <p>Check out most promising product bought by our buyer</p>
      <div className="MenCollections">
        <CollectionsComp
          Sample={Balletwear}
          SampleAlt={"Complete Ballet wear"}
          SampleImg={"SampleImg"}
          section={"Kids"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Complete Ballet wear"}
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
          Sample={CottonSoftSocks}
          SampleAlt={"Cotton Soft Socks"}
          SampleImg={"SampleImg"}
          section={"Kids"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Cotton Soft Socks"}
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
          Sample={NikeTrackSuit}
          SampleAlt={"Nike Track Suit"}
          SampleImg={"SampleImg"}
          section={"Kids"}
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
          Sample={PumaViverRunner}
          SampleAlt={"Puma Viver Runner"}
          SampleImg={"SampleImg"}
          section={"Kids"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Puma Viver Runner"}
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

export default KidsSection