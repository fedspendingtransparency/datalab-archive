// import libraries
import React, { Component } from "react";
import { svg, select, event } from "d3";

// import helper functions
import { arcTween, arc, findColor } from "helpers/d3Helpers.js";

class Sunburst extends Component {
  componentDidMount() {
    const svg = select("#sunburst");
    const paths = svg.selectAll("path").data(this.props.root);
    const colors = this.props.colors;

    paths
      .enter()
      .append("path")
      .attr("d", arc)
      .each(function(d) {
        this._current = d;
      })
      .on("mouseover", (d) => this.props.handleHover(d))
      .on("mousemove", () => {
        const {pageX, pageY} = event
        this.props.handleMouseMove(pageX, pageY)
      })
      .on("mouseout", this.props.handleUnhover)
      .style("cursor", "pointer")
      .style("stroke", "#fff")
      .style("stroke-width", "0.4px")
      .style("fill", d => {
        return findColor(d, colors);
      })
      .on("click", this.props.handleClick);

  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.root === this.props.root) return false;

    const svg = select("#sunburst");
    const paths = svg.selectAll("path").data(nextProps.root);
    const colors = this.props.colors;

    paths
      .enter()
      .append("path")
      .attr("d", arc)
      .each(function(d) {
        this._current = d;
      })
      .on("mouseover", (d) => this.props.handleHover(d))
      .on("mousemove", () => {
        const {pageX, pageY} = event
        this.props.handleMouseMove(pageX, pageY)
      })
      .on("mouseout", this.props.handleUnhover)
      .style("cursor", "pointer")
      .style("stroke", "#fff")
      .style("stroke-width", "0.4px")
      .style("fill", d => {
        const color = findColor(d, colors);
        return color;
      })
      .on("click", this.props.handleClick);

    paths.exit().remove();

    paths
      .transition()
      .duration(750)
      .attrTween("d", arcTween)
      .style("fill", d => {
        const color = findColor(d, colors);
        return color;
      });

    return false;
  }

  render() {
    return (
      <div className="sunburst-panel-col-item">
        <svg width="600" height="600">
          <g transform="translate(300,300)" id="sunburst" />
        </svg>
      </div>
    );
  }
}

export default Sunburst;
