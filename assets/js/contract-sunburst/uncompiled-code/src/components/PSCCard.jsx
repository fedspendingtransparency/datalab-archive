// library imports
import React from "react";

// import helper functions
import { formatNumber } from "helpers/d3Helpers.js";

const PSCCard = ({ name, file, val }) => {
  return (
    <div className="psc-card">
      <img
        src={`./../../data-lab-data/sunburst/Sunburst_Icons_SVGs/${file}`}
        alt="logo"
        className="psc-icon psc-card-item"
      />
      <div className="psc-card-item">
        <div className="name">{name}</div>
        <div className="obligation">{formatNumber(val)}</div>
      </div>
    </div>
  );
};

export default PSCCard;
