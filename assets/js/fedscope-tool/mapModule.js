---
---

window.mapModule = {
    draw: (data, { states }) => {
        const { tooltipModule } = window;

        const svg = d3.select("#mapSvg");
        svg.selectAll("*").remove();

        const filteredData = [...data];

        const initialStateData = Object.keys(states).reduce((a, c) => {
            a[c] = 0;
            return a;
        }, {});

        const dataByState = filteredData.reduce((a, c) => {
            a[c.stateAbbreviation] += c.employeeCount;
            return a;
        }, initialStateData);

        const max = d3.max(Object.values(dataByState), (d) => d);
        const min = d3.min(Object.values(dataByState), (d) => d);

        const formatNumber = d3.format(",d");

        const colors = ["#f2f1f8", "#3f3c7d"];

        const color = d3
            .scaleLinear()
            .domain([min, max])
            .range(colors)
            .interpolate(d3.interpolateRgb);

        function handleMouseOver(d) {
            tooltipModule.draw("#tooltip", d.name, {
                Employees: formatNumber(dataByState[d.abbreviation])
            });
            d3.select(this).style("fill", "#D334BA");
        }

        function handleMouseOut() {
            tooltipModule.remove("#tooltip");
            d3.select(this).style("fill", (d) => color(dataByState[d.abbreviation]));
        }

        function handleMouseMove() {
            tooltipModule.move("#tooltip");
        }

        const mapGroup = svg
            .append("g")
            .attr("transform", "scale(.9375)");

        mapGroup
            .selectAll(".state")
            .data(Object.values(states))
            .enter()
            .append("path")
            .attr("class", "state")
            .attr("d", (d) => d.path)
            .style("fill", (d) => color(dataByState[d.abbreviation]))
            .on("mouseover", handleMouseOver)
            .on("mousemove", handleMouseMove)
            .on("mouseout", handleMouseOut);

        const svgWidth = 900;
        const scaleWidth = 400;

        const scaleGroup = svg
            .append("g")
            .attr("transform", `translate(${(svgWidth - scaleWidth) / 2}, 10)`);

        const linearGradient = scaleGroup
            .append("defs")
            .append("linearGradient")
            .attr("id", "linear-gradient");

        linearGradient
            .append("stop")
            .attr("offset", "0%")
            .attr("stop-color", colors[0]);

        linearGradient
            .append("stop")
            .attr("offset", "100%")
            .attr("stop-color", colors[1]);

        scaleGroup
            .append("rect")
            .attr("height", 10)
            .attr("width", scaleWidth)
            .attr("fill", "url(#linear-gradient)");

        scaleGroup
            .append("text")
            .text(`${formatNumber(min)}`)
            .attr("transform", `translate(0, 20)`)
            .attr("text-anchor", "middle")
            .attr("font-size", 12);

        scaleGroup
            .append("text")
            .text(`${formatNumber(max)}`)
            .attr("transform", `translate(${scaleWidth}, 20)`)
            .attr("text-anchor", "middle")
            .attr("font-size", 12);
    }
};
