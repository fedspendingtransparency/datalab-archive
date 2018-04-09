// import libraries
import React from "react";

// import components
import SunburstPanelTitle from "components/SunburstPanelTitle";
import SunburstPanelDetail from "components/SunburstPanelDetail";

const SunburstPanel = ({
  activePanelNode,
  sunburstFilterByText,
  staticData
}) => {
  return (
      <div id="sunburst-panel" className="sunburst-panel-col-item" style={{ padding: "0px" }}>
        <SunburstPanelTitle
          activePanelNode={activePanelNode}
          sunburstFilterByText={sunburstFilterByText}
          staticData={staticData}
        />
        <SunburstPanelDetail
          activePanelNode={activePanelNode}
          staticData={staticData}
        />
      </div>
  );
};

export default SunburstPanel;
