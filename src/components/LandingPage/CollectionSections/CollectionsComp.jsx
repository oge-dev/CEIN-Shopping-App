import React from "react";
import ImgComp from "../../imgComp";

const CollectionsComp = ({
  Sample,
  SampleAlt, SampleImg,
  section,
  rate,
  rateAlt,
  SampleName,
  price,
  oldPrice,
  substrCount,
  substrAlt,
  count, MinusIcon, addIcon,
  additionCount,
  additionAlt,
}) => {
  return (
    <div className="CollectionsComp">
      <ImgComp src={Sample} alt={SampleAlt} className={SampleImg} />
      <div className="section-rate">
        <span>{section}</span>
        <span>
          <ImgComp className={"rateImg"} src={rate} alt={rateAlt} />
        </span>
      </div>
      <h3>{SampleName}</h3>
      <div className="Pricing-gridIcons">
        <div className="Pricing">
          <span>&#36;{price}</span>
          <span>
            <del> &#36;{oldPrice}</del>
          </span>
        </div>
        <div className="gridIcons">
          <span>
            <ImgComp src={substrCount} alt={substrAlt} ClassName={MinusIcon} />
          </span>
          <span>{count}</span>
          <span>
            <ImgComp src={additionCount} alt={additionAlt}  ClassName={addIcon}  />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionsComp;
