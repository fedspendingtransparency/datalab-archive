import React, { Component } from "react";
import d3 from "d3";
import { findColor } from "helpers/d3Helpers.js";

const width = 600, height = 50;
const lightColors = [
  d3.rgb(255, 224, 146).toString(),
  d3.rgb(255, 223, 156).toString(),
  d3.rgb(255, 224, 142).toString(),
  d3.rgb(255, 224, 137).toString(),
  d3.rgb(255, 223, 151).toString()
];
const  b = {
    w: 125, h: 30, s: 3, t: 10, homeW: 40
  };
var handleClick, handleHover, handleUnhover;

const drawbread = (d, i) => {
  var points = [];
  if (i === 0) {
    points.push("0,0");
    points.push(b.homeW + ",0");
    points.push(b.homeW + b.t + "," + (b.h / 2));
    points.push(b.homeW + "," + b.h);
    points.push("0," + b.h);
  } else {
    points.push("0,0");
    points.push(b.w + ",0");
    points.push(b.w + b.t + "," + (b.h / 2));
    points.push(b.w + "," + b.h);
    points.push("0," + b.h);
  }
 
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
    return nameData.subagenciesAbbrv[aNode.id];

    case 1:
    return nameData.agenciesAbbrv[aNode.id];
    break;

    default:
    return aNode.name;
  }
};

const getTrailHierarchy = (activeNode, colors, staticData, RArray) => {
  let HArray = RArray || [];
  
  if(activeNode.depth >= 3){
   
      HArray.push({name: getNodeNames(staticData, activeNode),
         depth: activeNode.depth, 
         id: activeNode.id, 
         parent: activeNode.parent, 
         value: activeNode.value});
   
  } else if ((activeNode.depth === 2) || 1) {

      HArray.push({name: getNodeNames(staticData, activeNode), 
        depth: activeNode.depth, 
        id: activeNode.id, 
        parent: activeNode.parent, 
        children: activeNode.children, 
        value: activeNode.value});

  } else if ( activeNode.depth < 1) {

      HArray.push({name: getNodeNames(staticData, activeNode), 
        depth: activeNode.depth, 
        id: activeNode.id, 
        value: activeNode.value});

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
      .data(root, d => { return d.name + d.depth; });

  var entering = g.enter().append("svg:g");
  // Add breadcrumb and label for entering nodes.
  //var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", drawbread)
      .style("fill", d => findColor(d, colors))
      .style("opacity", d => { return (d.depth === 0 ? 0 : 1) })
      .on("click", d => {handleHover(d); handleClick(d)});


  entering.append( "svg:text")
      .attr("x", d => { return ((d.depth === 0 ? b.homeW : b.w) + b.t) / 2; })
      .attr("y", b.h / 2)
      .attr("dy", "0.35em" ) 
      .attr("text-anchor", "middle")
      .attr("fill", d => 
      { 
        return (d.depth === 0 || lightColors.includes(findColor(d, colors).toString())  ? "black" : "white") 
      })
      .attr("font-family", d => { return (d.depth === 0 ? "FontAwesome" : ""); })
      .text( d => { 
        if(d.depth === 0) return '\uf015'; 
        if(d.depth < 3){
          return String(d.name);
        }
        return String(d.name)
        .substring(0,4)
        .trimRight() + "..." +
        String(d.name).substr(String(d.name).length-4);
      })
        .on("click", d => {handleHover(d); handleClick(d)});
          
        
  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    var trans =  "translate(" + i * (b.w + b.s) + ", 0)";
    var hometrans =  "translate(" + (i * (b.w + b.s) - (b.w - b.homeW)) + ", 0)";
    return (d.depth > 0 ? hometrans : trans)
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
      
      handleClick = this.props.handleClick;
      handleHover = this.props.handleHover;
      handleUnhover = this.props.handleUnhover;

      getTrailHierarchy(this.props.activePanelNode, this.props.colors, this.props.staticData);

    }

    shouldComponentUpdate(nextProps){
        
      if (nextProps.activePanelNode === this.props.activeNode) return false;
      
      handleClick = this.props.handleClick
      handleHover = this.props.handleHover;
      handleUnhover = this.props.handleUnhover;

      if (!nextProps.tooltipShown && Object.keys(nextProps.lastNodeClicked).length > 0) {
        getTrailHierarchy(nextProps.lastNodeClicked, nextProps.colors, nextProps.staticData);
        return false;
      }

      

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