const tooltipModule = function() {
  function draw(title, information) {
    d3
      .select("#tooltip")
      .transition()
      .duration(200)
      .style("opacity", 0.9);

    d3
      .select("#tooltip")
      .html(toolTipHtml(title, information))
      .style("left", `${d3.event.pageX}px`)
      .style("top", `${d3.event.pageY}px`);

    const formatPercent = d3.format(",.0%");
    const formatActions = d3.format(",");
    const formatDollars = d3.format("$,");

    function toolTipHtml(title, information) {
      const html = `<h4>${title}</h4>
        <table>
        ${Object.entries(information).reduce((a, c) => {
          let formatNumber;
          a += `
            <tr>
              <td>${c[0]}: </td>
              <td>${c[1]}</td>
            </tr>
            `;
          return a;
        }, "")}
        </table>`;
      return html;
    }
  }

  function remove() {
    d3
      .select("#tooltip")
      .transition()
      .duration(500)
      .style("opacity", 0);
  }

  function move() {
    d3
      .select("#tooltip")
      .style("left", `${d3.event.pageX}px`)
      .style("top", `${d3.event.pageY}px`);
  }

  return { draw, remove, move };
};
