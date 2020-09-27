import React from "react";
import Image from "../../Image/NoMatch.jpg";

const NoMatch = () => {
  const imgStyle = {
    height: "100%",
    width: "100%",
  };
  return (
    <div>
      <img style={imgStyle} src={Image} alt="" />
    </div>
  );
};

export default NoMatch;
