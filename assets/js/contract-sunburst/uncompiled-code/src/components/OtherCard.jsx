// import libraries
import React from "react";

// import helpers
import { formatNumber } from "helpers/d3Helpers.js";

const OtherCard = ({ name, value }) => {
  return (
    <div className="psc_panel" height="155" width="465">
      <div className="psc-category">{name}</div>
      <div className="psc-obligation">{formatNumber(value)}</div>
    </div>
  );
};

export default OtherCard;
