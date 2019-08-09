const
	margin = { top: 0, right: 0, bottom: 0, left: 100 },
	width = 900 - margin.left - margin.right,
	height = 900 - margin.top - margin.bottom,
	x = d3.scaleBand().range([0, width]).round(0.5),
	// y = d3.scaleLinear().range([height, 0]),
	y = d3.scaleSqrt().range([height, 0]),
	xAxis = d3.axisBottom(x).tickSize(5),
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
		x.domain(data.map(d => d.abbreviation));
		y.domain([0, d3.max(data, d => d.total)]);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0, " + height + ")")
			.call(xAxis)
			.select(".domain").remove()
			.selectAll("text")
			.style("text-anchor", "middle")
			.attr("x", d => x(d.abbreviation))
			// .attr("dx", "-0.5em")
			.attr("y", 30)
			.attr("dy", "-0.55em")
			.attr("transform", "rotate(90)")
			;

		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			// .append("text")
			// // .attr("transform", "rotate(-90)")
			// .attr("y", 5)
			// .attr("dy", "0.8em")
			// .attr("text-anchor", "end")
			;

		svg.selectAll("bar")
			.data(data)
			.enter()
			.append("rect")
			.classed("total", true)
			.attr("x", d => x(d.abbreviation))
			.attr("width", x.bandwidth())
			.attr("y", d => y(d.total))
			.attr("height", d => height - y(d.total))
			;

		svg.selectAll("bar")
			.data(data)
			.enter()
			.append("rect")
			.classed("rnd", true)
			.attr("x", d => x(d.abbreviation))
			.attr("width", x.bandwidth())
			.attr("y", d => y(d.rnd))
			.attr("height", d => height - y(d.rnd))
			;

		svg.selectAll(".label")
			.data(data)
			.enter()
			.append("g")
			.attr("transform", d => "translate(" + (x(d.abbreviation) + x.bandwidth() / 2 - 3) + ",0)")
			.append("text")
			.attr("class", "label")
			.attr("x", 600)
			.text(d => d.agency)
			;
	});
}
