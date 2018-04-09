// library imports
import React from "react";

// import helper functions
import { formatNumber } from "helpers/d3Helpers.js";

const SubagencyCard = ({ name, value }) => {
  return (
    <div className="subagency-card">
      <div className="name details">{name}</div>
      <div className="obligation details">{formatNumber(value)}</div>
    </div>
  );
};

export default SubagencyCard;
