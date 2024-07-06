import React from "react";
import CollectionsComp from "./CollectionsComp";
import YellowSuwade from "../../../assets/Men-yellow-shoes.png";
import EthnicKurti from "../../../assets/Womens-Ethnic-kurti.png";
import VNeckTop from "../../../assets/Women-T-shirts.png";
import RoundTshirt from "../../../assets/fashion-stylish-model-dressed.png";
import Feedback from "../../../assets/Feedback.png";
import MinusOutline from "../../../assets/minus-outline.png";
import AddOutline from "../../../assets/add-outline.png";
import "./collectionSection.css";

const NewArrivals = () => {
  return (
    <div className="MenCollections-wrapper">
      <h2>New Arrivals</h2>
      <p>Check out most promising product bought by our buyer</p>
      <div className="MenCollections">
        <CollectionsComp
          Sample={YellowSuwade}
          SampleAlt={"Yellow Suwade"}
          SampleImg={"SampleImg"}
          section={"Men"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Yellow Suwade"}
          price={"180"}
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
          Sample={EthnicKurti}
          SampleAlt={"Ethnic Kurti"}
          SampleImg={"SampleImg"}
          section={"Women"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Ethnic Kurti"}
          price={"350"}
          oldPrice={"400"}
          MinusIcon={"MinusIcon"}
          substrCount={MinusOutline}
          substrAlt={"minus-outline"}
          count={"0"}
          additionCount={AddOutline}
          addIcon={"addIcon"}
          additionAlt={"add-outline"}
        />
        <CollectionsComp
          Sample={VNeckTop}
          SampleAlt={"V-Neck Top"}
          SampleImg={"SampleImg"}
          section={"Women"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Women’s V-Neck Top"}
          price={"380"}
          oldPrice={"500"}
          MinusIcon={"MinusIcon"}
          substrCount={MinusOutline}
          substrAlt={"minus-outline"}
          count={"0"}
          additionCount={AddOutline}
          addIcon={"addIcon"}
          additionAlt={"add-outline"}
        />
        <CollectionsComp
          Sample={RoundTshirt}
          SampleAlt={"Round Neck T-shirt"}
          SampleImg={"SampleImg"}
          section={"Men"}
          rateImg={"rateImg"}
          rate={Feedback}
          rateAlt={"Feedback"}
          SampleName={"Round Neck T-shirt"}
          price={"450"}
          oldPrice={"500"}
          MinusIcon={"MinusIcon"}
          substrCount={MinusOutline}
          substrAlt={"minus-outline"}
          count={"0"}
          additionCount={AddOutline}
          addIcon={"addIcon"}
          additionAlt={"add-outline"}
        />
      </div>
    </div>
  );
};

export default NewArrivals;
