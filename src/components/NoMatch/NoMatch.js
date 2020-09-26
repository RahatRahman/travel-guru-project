import React from "react";
import Image from "../../Image/NoMatch.jpg";

const NoMatch = () => {
  const imgStyle = {
    height: "100vh",
    width: "100vw",
  };
  return (
    <div>
      <img style={imgStyle} src={Image} alt="" />
    </div>
  );
};

export default NoMatch;
