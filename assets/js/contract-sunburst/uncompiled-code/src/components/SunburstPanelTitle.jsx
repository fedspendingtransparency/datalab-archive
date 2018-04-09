// library imports
import React from "react";

// import helper functions
import { formatNumber } from "helpers/d3Helpers.js";

const SunburstPanelTitle = ({
  activePanelNode,
  sunburstFilterByText,
  staticData
}) => {
  const { awardsContracts, others, agencies, subagencies, recipients } = staticData;

  let detailsHtml;

  if (activePanelNode.name === "Other") {
    const parentName = activePanelNode.parent.name;
    const totalOtherContracts = others.reduce((a, c) => {
      if (c.sub === parentName) a = a + c.val;
      return a;
    }, 0);
    detailsHtml = (
      <div>
        <h3>Other Contractors Supporting the </h3>
        <h3>{parentName}</h3>
        <h3>with Contract Values Less Than $1,000,000</h3>
        <h3>
          These Contracts are Worth a Total Value of
          {` ${formatNumber(totalOtherContracts)}`}
        </h3>
        <h3>TOP CONTRACTORS</h3>
      </div>
    );
  } else {
    switch (activePanelNode.depth) {
      case 0:
        detailsHtml = (
          <div>
            <h2 className="title">{activePanelNode.name}</h2>
            <h3>
              Total Contracts{sunburstFilterByText.length
                ? ` Related to ${sunburstFilterByText}`
                : ""}:
            </h3>
            <h1>{formatNumber(activePanelNode.value)}</h1>
            <h3>AGENCIES</h3>
          </div>
        );
        break;
      case 1:
        detailsHtml = (
          <div>
            <h2 className="title">{agencies[activePanelNode.id]}</h2>
            <h3>
              Total Contracts{sunburstFilterByText.length
                ? ` Related to ${sunburstFilterByText}`
                : ""}:
            </h3>
            <h1>{formatNumber(activePanelNode.value)}</h1>
            <h3>SUBAGENCIES</h3>
          </div>
        ); 
        break;
      case 2:
        detailsHtml = (
          <div>
            <h2 className="title">{subagencies[activePanelNode.id]}</h2>
            <h3>
              Total Contracts{sunburstFilterByText.length
                ? ` Related to ${sunburstFilterByText}`
                : ""}:
            </h3>
            <h1>{formatNumber(activePanelNode.value)}</h1>
            <h3>CONTRACTORS</h3>
          </div>
        );
        break;
      case 3:
        const parentName = subagencies[activePanelNode.parent.id];
        const recipTotalContracts = awardsContracts.reduce((a, c) => {
          if (c.recip === activePanelNode.id) return a + c.val;
          else return a;
        }, 0);

        detailsHtml = (
          <div>
            <h2 className="title">{recipients[activePanelNode.id]}</h2>
            <h3>Contracts for {parentName}:</h3>
            <h1>{formatNumber(activePanelNode.value)}</h1>
            <h3>Total Contracts in 2017</h3>
            <h1>{formatNumber(recipTotalContracts)}</h1>
          </div>
        );
        break;
      default:
        console.log("something went wrong");
    }
  }

  return (
    <div className="sunburst-panel-tab">
      {detailsHtml}
    </div>
  );
};

export default SunburstPanelTitle;
