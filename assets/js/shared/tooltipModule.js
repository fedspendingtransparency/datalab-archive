---
---

const tooltipModule = (function() {
  function draw(tooltipId, title, information) {
    d3
      .select(tooltipId)
      .transition()
      .duration(200)
      .style("opacity", 1);

    d3
      .select(tooltipId)
      .html(toolTipHtml(title, information))
      .style("left", `${d3.event.pageX}px`)
      .style("top", `${d3.event.pageY}px`);

    function toolTipHtml(title, information) {
      const html = `
      <p class="title">
        <b>${title}</b>
      </p>
      <br>
      <div class="information">
        ${Object.entries(information).reduce((a, c) => {
          a += `
            <p class="key">${c[0]}</p>
            <p class="val">${c[1]}</p>
            `;
          return a;
        }, "")}
      <div />  
      `;

      return html;
    }
  }

  function remove(tooltipId) {
    d3
      .select(tooltipId)
      .transition()
      .duration(500)
      .style("opacity", 0)
      .style("pointer-events", "none");
  }

  function move(tooltipId) {
    d3
      .select(tooltipId)
      .style("left", `${d3.event.pageX + 10}px`)
      .style("top", `${d3.event.pageY + 10}px`);
  }

  return { draw, remove, move };
})();
