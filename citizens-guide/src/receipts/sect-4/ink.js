import { initDropShadow } from "./dropShadow";
import { range } from 'd3-array';
import { translator } from "../../utils";

const d3 = { range };

let containers, dimensions;

function buildCountryBox() {
    containers.country.append('rect')
        .attr('width', dimensions.countryColumnWidth)
        .attr('height', dimensions.totalHeight)
        .attr('fill', 'white')
        .attr('stroke', '#eee')
        .style('filter', 'url(#drop-shadow)');
}

function buildGdpBox() {
    containers.gdp.append('rect')
        .attr('width', dimensions.gdpColumnWidth)
        .attr('height', dimensions.totalHeight)
        .attr('fill', 'white')
        .attr('stroke', '#eee')
        .style('filter', 'url(#drop-shadow)');
}

function placeHorizontalStripes(dataLength) {
    const stripes = containers.chart.append('g').attr('transform', translator(0, dimensions.header));

    stripes.selectAll('line')
        .data(d3.range(dataLength + 1))
        .enter()
        .append('line')
        .attr('x1', 0)
        .attr('y1', function(d){
            return d * dimensions.rowHeight;
        })
        .attr('x2', 1200)
        .attr('y2', function(d){
            return d * dimensions.rowHeight;
        })
        .attr('stroke', 'rgba(100,100,100,0.1)')
        .attr('stroke-width', 1)
}

function placeMask() {
    containers.legends.append('rect')
        .attr('width', 1200)
        .attr('height', dimensions.header)
        .attr('stroke', 'none')
        .attr('fill', 'white')
}

export function ink(_containers, _dimensions, dataLength) { 
    containers = _containers;
    dimensions = _dimensions;

    initDropShadow();
    buildCountryBox();
    buildGdpBox();
    placeHorizontalStripes(dataLength);
    placeMask();
}