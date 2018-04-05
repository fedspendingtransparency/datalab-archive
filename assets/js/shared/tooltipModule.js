---
---

window.tooltipModule = (() => {
    function draw(tooltipId, title, information, disclaimers) {
        d3
            .select(tooltipId)
            .transition()
            .duration(200)
            .style("opacity", 1);

        function toolTipHtml(t, i, d) {
            function getinfoHtml() {
                return Object.entries(i).reduce((a, c) => {
                    a += `<p class="key">${c[0]}</p><p class="val">${c[1]}</p>`;
                    return a;
                }, "");
            }

            function getDisclaimerHtml() {
                return d.reduce((a, c) => {
                    a += `<div class="disclaimer">${c}<div />`;
                    return a;
                }, "");
            }

            const html = `
                <p class="title"><b>${t}</b></p>
                ${i ? `<br><div class="information">${getinfoHtml()}<div />` : ""}
                ${d ? `<br>${getDisclaimerHtml()}` : ""}
            `;
            return html;
        }

        d3
            .select(tooltipId)
            .html(toolTipHtml(title, information, disclaimers))
            .style("left", `${d3.event.pageX}px`)
            .style("top", `${d3.event.pageY}px`);
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
            .style("left", `${d3.event.pageX + 15}px`)
            .style("top", `${d3.event.pageY + 15}px`);
    }

    return { draw, remove, move };
})();
