const tooltipModule = (function() {
  function draw(title, information) {
    d3
      .select("#tooltip")
      .transition()
      .duration(200)
      .style("opacity", 1);

    d3
      .select("#tooltip")
      .html(toolTipHtml(title, information))
      .style("left", `${d3.event.pageX}px`)
      .style("top", `${d3.event.pageY}px`);

    function toolTipHtml(title, information) {
      const html = `
      <p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px">
        <b style="color:#555555">${title}</b>
      </p>
      <b style="color:#555555">
        <br>
        ${Object.entries(information).reduce((a, c) => {
          a += `
            <p style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; color: #7cd6f8;">${c[0]}</p>
            <p style="font-size: 20px; font-weight: normal; margin:0; line-height: 16px padding-top:"2px";>${c[1]}</p>
            `;
          return a;
        }, "")}
      </b>`;

      return html;
    }
  }

  function remove() {
    d3
      .select("#tooltip")
      .transition()
      .duration(500)
      .style("opacity", 0)
      .style("pointer-events", "none");
  }

  function move() {
    d3
      .select("#tooltip")
      .style("left", `${d3.event.pageX + 10}px`)
      .style("top", `${d3.event.pageY + 10}px`);
  }

  return { draw, remove, move };
})();
