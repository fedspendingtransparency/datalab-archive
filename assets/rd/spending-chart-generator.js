d3.json("/data-lab-data/rd/2018_RnD_Total_Pct_v2.csv", (error, data) => {
	if (error) throw error;
	console.log (data);
});

const svg = d3.select("#chart");

// const margin = {
// 	top: 10,
// 	right: 80,
// 	bottom: 110,
// 	left: 90
// };
// const width = +svg.attr("width") - margin.left - margin.right;
// const height = +svg.attr("height") - margin.top - margin.bottom;

const width = 1000;
const height = 1000;
const x = d3
	.scaleBand()
	.rangeRound([0, width])
	.padding(0.1)
;
const y = d3.scaleLinear().rangeRound([height, 0]);

const g = svg
	.append("g")
;
