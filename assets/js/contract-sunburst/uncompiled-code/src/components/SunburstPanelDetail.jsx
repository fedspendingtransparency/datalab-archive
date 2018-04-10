// library imports
import React from "react";

// import components
import PSCCard from "components/PSCCard";
import SubagencyCard from "components/SubagencyCard";

const SunburstPanelDetail = ({ activePanelNode, staticData }) => {
  const {
    PSCByRecip,
    others,
    recipients,
    agencies,
    subagencies,
    PSCs
  } = staticData;
  const { depth, id, parent, children } = activePanelNode;

  let detailHtml;

  switch (depth) {
    case 3:
      if (recipients[activePanelNode.id] === "Other") {
        const otherContractors = others.reduce((a, c) => {
          if (c.sub === activePanelNode.parent.id) a.push(c);
          return a;
        }, []);
        detailHtml = (
          <div className="sunburst-panel-tab-2">
            {otherContractors.map((otherContractorDetail, i) => (
              <SubagencyCard
                name={recipients[otherContractorDetail.recip]}
                value={otherContractorDetail.val}
                key={i}
              />
            ))}
          </div>
        );
      } else {
        let currPSCs = PSCByRecip[`${id}-${parent.id}`] || [];
        currPSCs = currPSCs.sort((a,b) => b[1] - a[1])

        detailHtml = (
          <div className="sunburst-panel-tab-3">
            {currPSCs.map((PSCDetails, i) => (
              <PSCCard
                name={PSCs[PSCDetails[0]].name}
                file={PSCs[PSCDetails[0]].file}
                val={PSCDetails[1]}
                key={i}
              />
            ))}
          </div>
        );
      }
      break;

    case 2:
      detailHtml = (
        <div className="sunburst-panel-tab-2">
          {children
            .slice(0, 5)
            .map((recipientDetails, i) => (
              <SubagencyCard
                name={recipients[recipientDetails.id]}
                value={recipientDetails.value}
                key={i}
              />
            ))}
        </div>
      );
      break;

    case 1:
      detailHtml = (
        <div className="sunburst-panel-tab-2">
          {children
            .slice(0, 5)
            .map((subagencyDetails, i) => (
              <SubagencyCard
                name={subagencies[subagencyDetails.id]}
                value={subagencyDetails.value}
                key={i}
              />
            ))}
        </div>
      );
      break;

    case 0:
      detailHtml = (
        <div className="sunburst-panel-tab-2">
          {children
            .slice(0, 5)
            .map((agencyDetails, i) => (
              <SubagencyCard
                name={agencies[agencyDetails.id]}
                value={agencyDetails.value}
                key={i}
              />
            ))}
        </div>
      );
      break;

    default:
      console.log("something went wrong");
  }

  return detailHtml;
};

export default SunburstPanelDetail;
