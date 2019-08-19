const
	margin = { top: 10, right: 10, bottom: 10, left: 10 },
	width = 1000 - margin.left - margin.right,
	height = 1000 - margin.top - margin.bottom,
	x = d3.scaleBand().range([0, width]).round(0.5),
	y = d3.scaleSqrt().range([height, 0]),
	xAxis = d3.axisBottom(x).tickSize(0),
	yAxis = d3.axisLeft(y)
	// yAxis   = d3.axisLeft(y).ticks(5).innerTickSize(-width).outerTickSize(0).tickPadding(10)
	;

window.onload = () => {
	const svg = d3.select("#chart")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		;

	d3.csv("/data-lab-data/rd/2018_RnD_Total_Pct_v2.csv", (error, data) => {
		if (error) throw error;
		console.log(data);

		data = data.sort((a, b) => b.rnd - a.rnd);
		x.domain(data.map(d => d.agency));
		y.domain([0, d3.max(data, d => d.total)]);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0, " + height + ")")
			.call(xAxis)
			.select(".domain").remove()
			.selectAll("text")
			.style("text-anchor", "middle")
			// .attr("x", d => x(d.agency))
			.attr("dx", "-0.5em")
			.attr("y", 30)
			.attr("dy", "-0.55em")
			.attr("transform", "rotate(90)")
			;

		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 5)
			.attr("dy", "0.8em")
			.attr("text-anchor", "end")
			;

		svg.selectAll("bar")
			.data(data)
			.enter()
			.append("rect")
			.classed("total", true)
			.attr("x", d => x(d.agency))
			.attr("width", x.bandwidth())
			.attr("y", d => y(d.total))
			.attr("height", d => height - y(d.total))
			;

		svg.selectAll("bar")
			.data(data)
			.enter()
			.append("rect")
			.classed("rnd", true)
			.attr("x", d => x(d.agency))
			.attr("width", x.bandwidth())
			.attr("y", d => y(d.rnd))
			.attr("height", d => height - y(d.rnd))
			;

		svg.selectAll(".label")
			.data(data)
			.enter()
			.append("g")
			.attr("transform", d => "translate(" + (x(d.agency) + x.bandwidth() / 2 - 3) + ",0)")
			.append("text")
			.attr("class", "label")
			.attr("x", 850)
			.text(d => d.agency)
			;
	});
}





// const margin = {
// 	top: 10,
// 	right: 80,
// 	bottom: 110,
// 	left: 90
// };
// const width = +svg.attr("width") - margin.left - margin.right;
// const height = +svg.attr("height") - margin.top - margin.bottom;

// const width = 1000;
// const height = 1000;
// const x = d3
// 	.scaleBand()
// 	.rangeRound([0, width])
// 	.padding(0.1)
// ;
// const y = d3.scaleLinear().rangeRound([height, 0]);

// const groupedData = Object.values(
// 	data.reduce((a, c) => {
// 			if (!a[c.occupationCategoryId]) {
// 					a[c.occupationCategoryId] = {
// 							occupationCategoryId: c.occupationCategoryId,
// 							occupationCategoryName:
// 		occupationCategories[c.occupationCategoryId].shortenedName,
// 							employeeCount: c.employeeCount,
// 							occupationCategoryType: c.occupationType
// 					};
// 			}
// 			else {
// 					a[c.occupationCategoryId].employeeCount += c.employeeCount;
// 			}
// 			return a;
// 	}, {})
// )
// 	.sort((a, b) => b.employeeCount - a.employeeCount)
// 	.reduce((a, c, i) => {
// 			if (i < 25) {
// 					a.push(c);
// 			}
// 			else if (i === 25) {
// 					a.push({
// 							occupationCategoryId: 99,
// 							occupationCategoryName: "All Other Occupations",
// 							occupationCategoryType: "Other",
// 							employeeCount: c.employeeCount
// 					});
// 			}
// 			else if (i > 25) {
// 					a[25].employeeCount += c.employeeCount;
// 			}
// 			return a;
// 	}, []);

// x.domain(groupedData.map((d) => d.occupationCategoryName));
// y.domain([0, d3.max(groupedData, (d) => d.employeeCount)]);

// svg.append("g")
// 	.data(groupedData)
// 	.enter()
// 	.append("rect")
// 	.attr("class", "bar")
// 	.attr("x", (d) => x(d.occupationCategoryName))
// 	.attr("y", (d) => y(d.employeeCount))
// 	.attr("width", x.bandwidth())
// 	.attr("height", (d) => height - y(d.employeeCount))
// 	.attr("fill", (d) => findFillColor(d.occupationCategoryType))
// 	.attr("stroke", "rgb(0,0,0)")
// 	.attr("stroke-width", "1")
// ;
