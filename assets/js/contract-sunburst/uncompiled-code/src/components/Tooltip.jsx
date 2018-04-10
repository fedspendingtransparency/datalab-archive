import React from "react";

function findTooltipText(depth) {
  switch (depth) {
    case 0:
      return "Click to reset";
    case 1:
      return "View this agency";
    case 2:
      return "View this subagency";
    case 3:
      return "View this contractor";
    default:
      console.log("something went wrong")
  }
}

const Tooltip = ({ depth, coordinates }) => {
  const { x, y } = coordinates;
  return (
    <div
      style={{
        position: "absolute",
        top: y + 15,
        left: x + 10,
        background: "rgb(255, 255, 255)",
        padding: "2px",
        pointerEvents: "none",
        border: "1px solid rgb(191, 188, 188)",
        fontSize: "10px",
        fontStyle: "italic"
      }}
    >
      {findTooltipText(depth)}
    </div>
  );
};

export default Tooltip;
