import React, { Component } from "react";
import d3 from "d3";
import { findColor } from "helpers/d3Helpers.js";

const width = 600, height = 50, homeColor = "#923068";
const  b = {
    w: 125, h: 30, s: 3, t: 10
  };

const drawbread = (d, i) => {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
};

const getNodeNames = (nameData, aNode) => {
  switch (aNode.depth) {
    case 3:
    return nameData.recipients[aNode.id];
   
    case 2:
    return nameData.subagencies[aNode.id];

    case 1:
    return nameData.agencies[aNode.id];
    break;

    default:
    return aNode.name;
  }
};

const getTrailHierarchy = (activeNode, colors, staticData, RArray) => {
  let HArray = RArray || [];

  if (activeNode.depth > 1) {
    HArray.push({name: getNodeNames(staticData, activeNode), depth: activeNode.depth, id: activeNode.id, parent: activeNode.parent});
  }else {
    HArray.push({name: getNodeNames(staticData, activeNode), depth: activeNode.depth, id: activeNode.id});
  }
  
  if(activeNode.depth > 0){
    getTrailHierarchy(activeNode.parent, colors, staticData, HArray)
  } else {
     updateBreadcrumbs(colors, HArray.reverse());
  } 
}

// Update the breadcrumb trail to show the current sequence and percentage.
const updateBreadcrumbs = (colors, root) => {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(root, function(d) { return d.name + d.depth; });

  var entering = g.enter().append("svg:g");
  // Add breadcrumb and label for entering nodes.
  //var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", drawbread)
      .style("fill", d => {
        if (d.depth === 0){
          return homeColor;
        } else {
          return findColor(d, colors);
        }
        });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(function(d) { return String(d.name)
        .substring(0,4)
        .trimRight() + "..." +
        String(d.name).substr(String(d.name).length-4);});

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}


class BreadCrumbs extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          root: [],
          activePanelNode: {},
          staticData:{}   
        };
      }

    componentDidMount() {
        getTrailHierarchy(this.props.activePanelNode, this.props.colors, this.props.staticData);
    }

    shouldComponentUpdate(nextProps){
        if (nextProps.root === this.props.root) return false;

        getTrailHierarchy(nextProps.activePanelNode,nextProps.colors, nextProps.staticData);
      
        return false;
    }

  


  render() {
    return (
      <div id="sequence">
      <svg id="trail" style={{width:width, height:height}}>
          
        </svg>
      </div>
    );
  }
}

export default BreadCrumbs;