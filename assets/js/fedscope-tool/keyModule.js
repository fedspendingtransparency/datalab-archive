---
---

const keyModule = (function() {
  function draw(id, keyData, keySettings) {
    const { orientation, fontSize, shape, spacing, borderWidth } = keySettings;

    const groupTransform =
      orientation === "horizontal"
        ? (d, i) => `translate(${spacing * i}, 0)`
        : (d, i) => `translate(0, ${spacing * i})`;

    const legend = d3
      .select(`#${id}`)
      .selectAll("g")
      .data(keyData)
      .enter()
      .append("g")
      .attr("transform", groupTransform);

    switch (shape) {
      case "rect":
        legend
          .append(shape)
          .attr("width", fontSize)
          .attr("height", fontSize)
          .style("fill", d => d.fillColor)
          .style("stroke", d => d.borderColor)
          .style("stroke-width", borderWidth);
      case "circle":
        legend
          .append(shape)
          .attr("cx", fontSize / 2)
          .attr("cy", fontSize / 2)
          .attr("r", fontSize / 2)
          .style("fill", d => d.fillColor)
          .style("stroke", d => d.borderColor)
          .style("stroke-width", borderWidth);
    }

    legend
      .append("text")
      .attr("x", fontSize + 5)
      .style("font-size", fontSize)
      .style("alignment-baseline", "hanging")
      .text(d => d.name);

    var svg = document.getElementById(id);
    var bb = svg.getBBox();

    d3
      .select(`#${id}`)
      .style("height", bb.height + 2 * borderWidth)
      .style("width", bb.width + 2 * borderWidth)
      .style("padding", borderWidth)
      .style("overflow", "visible");
  }
  return { draw };
})();
