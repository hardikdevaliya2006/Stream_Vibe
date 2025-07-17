import React from "react";

const SecationHeader = ({ subText, mainText }) => {
  return (
    <div className="secationHeaderTextWrap">
      <div className="mainText text-white">
        <h1>{mainText}</h1>
      </div>
      <div className="subText text-gray-60">
        <h4>{subText}</h4>
      </div>
    </div>
  );
};

export default SecationHeader;
