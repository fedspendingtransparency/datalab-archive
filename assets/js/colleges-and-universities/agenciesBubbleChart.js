---
---
/*
*   Local declarations
*/
const bubbleChartContainer = document.getElementById('agency-bubbleChart');
const color = ['#c8ac7f','#C6919E','#C99E7F','#879BBA','#A3D1CC', '#88A6A0','#879BBA',
    '#A3D1CC','#80AEC4','#C9BB7F','#C6919E',
    '#879BBA','#C99E7F','#879BBA','#C6919E','#A3D1CC','#80AEC4','#C9BB7F',
    '#88A6A0','#c8ac7f','#C99E7F','#879BBA','#A3D1CC','#88A6A0','#80AEC4','#C9BB7F',
    '#80AEC4','#C99E7F','#C6919E','#879BBA','#A3D1CC','#88A6A0','#80AEC4','#C9BB7F',
    '#C9BB7F','#c8ac7f','#C6919E','#879BBA','#A3D1CC','#88A6A0','#80AEC4','#C9BB7F',
    '#c8ac7f','#c8ac7f','#C99E7F','#879BBA','#A3D1CC','#88A6A0','#80AEC4','#C9BB7F'];


const bTableBtn = $('#bubble-table-trigger');
const bTableContainer = $('#bubbleTableContainer');
const bChartContainer = $('#bubbleChartContainer');
const bChartBtn = $('#bubble-chart-trigger');
const tooltipClose = $('.bubble-detail__close');

const detailContainer = d3.select('#bubble-detail section.bubble-detail');
const detailContainerActiveClass = 'bubble-detail--active';

let node, circle, focus, view, bubbleSvg, recipient, root, nodes;
const widthPercentage = .7;
let maxHeight = document.getElementById("agency-investments__content").clientHeight;
let calculatedWidth = window.innerWidth * widthPercentage;
let bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;
const margin = 20;
let diameter = bubbleWidth;
let _chartState;
let popoverData;
let tip;

let resize = false;

const pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) {
        if(d.size > 0) {
            return d.size;
        }
    })
    .sort( function(a, b) {
        var threshold = 100;
        if ((a.value > threshold) && (b.value > threshold)) {
            return b.value - a.value;
        } else {
            return -1;
        }
    });

// add legend
d3.select('#agency-legend_scaleKey').append('circle')
    .attr('r', 25)
    .attr('class', 'legend_scaleKeyCircle')
    .attr('cx', 60)
    .attr('cy', 65);
d3.select('#agency-legend_scaleKey').append('circle')
    .attr('r', 35)
    .attr('class', 'legend_scaleKeyCircle')
    .attr('cx', 60)
    .attr('cy', 65);
d3.select('#agency-legend_scaleKey').append('circle')
    .attr('r', 45)
    .attr('class', 'legend_scaleKeyCircle')
    .attr('cx', 60)
    .attr('cy', 65);

/* functions */

function setChartState (d) {
    _chartState = d;
}

function getChartState () {
    return _chartState;
}

function clearChartState () {
    _chartState = null;
}

/* Set color for sub-agency circles */
function circleFill (d) {
    if (d['color']) {
        return d.color;
    }
};

function isZoomedIn(d) {
    if (d.depth === 2 && focus === d.parent || d.depth === 1 && focus === d) {
        return true;
    }

    return false;
}

function setLegendLeft (leftState) {
    d3.select('#agency-legend_colorKey').classed("left", leftState);
}

function closeDetailPanel() {
    if (d3.event) d3.event.stopPropagation();
    detailContainer.classed(detailContainerActiveClass, false);
}

/* Store the current state */

/* Calculate text font size for bubbles before and after zoom */
function calculateTextFontSize (d) {
    let radius = 0;
    let labelWidth;

    if (!resize) {
        if (d.fontsize) {
            //if fontsize is already calculated use that.
            return d.fontsize;
        }

        if (!d.computed) {
            //if computed not present get & store the getComputedTextLength() of the text field
            d.computed = this.getComputedTextLength();
        }
    }

    if (d.computed != 0) {
        //if computed is not 0 then get the visual radius of DOM
        //if radius present in DOM use that
        radius = d.r ? d.r : 0;

        labelWidth = radius * 2 * diameter / (d.parent.r * 2 + margin) - margin;

        d.fontsize = labelWidth/d.computed > 0 ? labelWidth/d.computed + "em" : 0.01 + "em";

        return d.fontsize;

    }
};

function isTablet() {
    const minThreshold = 949;
    const maxThreshold = 1199;

    return (minThreshold <= window.innerWidth && window.innerWidth <= maxThreshold);
}

function setAgencyTooltipHtml(d) {
    const elName = "agency_tip_" + d.name.replace(/ /g,"_");
    const tooltipHtml = "<div class='bubble-chart-tooltip' id='" + elName + "'>" +
        "<span class='bubble-detail__close'><i class='fas fa-times'></i></span>" +
        "<span class='bubble-detail__agency-label'>Agency</span>" +
        "<span class='bubble-detail__agency-name'>" + d.name + "</span>" +
        "<div class='information'><p class='key' style='color: #881E3D;'>Total Investment</p>" +
        "<span class='bubble-detail__agency-name'>" + formatCurrency(popoverData[d.name].total_investment) + "</span>" +
        "</div></div>";
    return tooltipHtml;
}

function setSubagencyTooltipHtml(d) {
    const elName = "subagency_tip_" + d.name.replace(/ /g,"_");
    const tooltipHtml = "<div class='bubble-chart-tooltip' id='" + elName + "'>" +
        "<span class='bubble-detail__close'><i class='fas fa-times'></i></span>" +
        "<span class='bubble-detail__agency-label'>Agency</span>" +
        "<span class='bubble-detail__agency-name'>" + d.parent.name + "</span>" +
        "<span class='bubble-detail__agency-label'>Sub-Agency</span>" +
        "<span class='bubble-detail__agency-name'>" + d.name + "</span>" +
        "<div class='information'><p class='key' style='color: #881E3D;'>Total $ of Awards</p>" +
        "<span class='bubble-detail__agency-name'>" + formatCurrency(d.size) + "</span>" +
        "</div></div>";
    return tooltipHtml;
}


function drawBubbleChart(root) {
    const targetWidth = bubbleWidth;
    
    bubble.chartHeight = targetWidth;

    let tooltipHtml = '<div></div>';

    tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
        if (isZoomedIn(d)) {
            if (d.depth === 2) {
                tooltipHtml = setSubagencyTooltipHtml(d);
            } else if (d.depth === 1) {
                tooltipHtml = setAgencyTooltipHtml(d);
            }
        } else {
            if (d.depth === 2) {
                tooltipHtml = setAgencyTooltipHtml(d.parent);
            } else if (d.depth === 1) {
                tooltipHtml = setAgencyTooltipHtml(d);
            }
        }

        return tooltipHtml;
    });

    focus = root;
    diameter = bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;

    d3.select(bubbleChartContainer)
        .attr('style', "width: " + bubbleWidth + "px; height: " + bubbleWidth + "px;");

    bubbleSvg = d3.select(bubbleChartContainer).append("svg")
        .attr("id", "chart")
        .attr("width", targetWidth)
        .attr("height", bubble.chartHeight)
        .append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    circle = bubbleSvg.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("class", function(d) {
            return d.parent ? d.children ? "node" : "node--leaf" : "node--root";
        })
        .style("fill", circleFill)
        .attr("r", function(d) {
            if (d.r > 0) {
                return d.r;
            }
        })
        .attr("id", function(d) {
            return d.name.replace(/ /g,"_");
        })
        .on("click", bubbleClick)
        .on("mouseover", function(d) {
            if (!isTablet()) {
                tip.show(d);
            }
        })
        .on("mouseout", function(d) {
            tip.hide(d);
        });

    bubbleSvg.selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("font-family", "Source Sans Pro")
        .attr("class", "label")
        .attr("id", function(d) {
            return "text_" + d.name.replace(/ /g,"_");
        })
        .style("fill-opacity", function(d) {
            return d.parent === root ? 1 : 0;
        })
        .style("display", function(d) {
            return d.parent === root ? null : "none";
        })
        .text(function(d) {
            return d.name;
        })
        .style("font-size", calculateTextFontSize)
        .attr("text-anchor", "middle")
        .on("click", bubbleClick)
        .on("mouseover", function(d) {
            // const elName = d.name.replace(/ /g,"_");
            if (!isTablet()) {
                tip.show(d);
            }
        })
        .on("mouseout", tip.hide);

    node = bubbleSvg.selectAll("circle,text");

    bubbleSvg.call(tip);


}

// close tooltip
function closeTooltip() {
    tip.hide();
}

// Zoom into a specific circle
function zoom(d) {
    const focus0 = focus;
    focus = d;

    closeDetailPanel();
    closeTooltip();

    const transition = d3.transition()
        .duration(d3.event && d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
            var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
            return function(t) {
                zoomTo(i(t));
            };
        });

    transition.selectAll(".node--root")
        .style("fill-opacity", function() {
            return focus.name === "flare" ? 1 : 0;
        });

    transition.selectAll("text.label")
        .style("fill-opacity", function(d) {
            return d.parent === focus ? 1 : 0;
        })
        .each("start", function(d) {
            if (d.parent === focus) {
                this.style.display = "inline";
            } else {
                this.style.display="none";
            }
        })
        .each("end", function(d) {
            if (d.parent !== focus) {
                this.style.display = "none";
            } else {
                this.style.display="inline";
            }
        });

    // hide the text
    setTimeout(function() {
        // show the text
        d3.selectAll("text.label").filter(function(d) {
            return d.parent === focus || this.style.display === "inline";
        }).style("font-size", calculateTextFontSize);

    }, 100);
}

function zoomTo(v) {
    var k = diameter / v[2];
    view = v;
    node.attr("transform", function(d) {
        return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
    });

    circle.attr("r", function(d) {
        return d.r * k;
    });
}


/**
   Make a table, a bubble table ;;;;
**/
function createBubbleTable(data) {
    d3.csv("/data-lab-data/CU_bubble_chart_table.csv", function(err, data) {
        if (err) {
            return err;
        }
        let table = d3.select('#bubbleTableContainer').append('table')
            .attr('id', 'bubbletable')
	    .attr('class', 'compact');

        let titles = ['Recipient', 'Agency', 'SubAgency', 'Family', 'Type', 'Obligation'];

        let headers = table.append('thead').append('tr')
            .selectAll('th')
            .data(titles).enter()
            .append('th')
            .text(function (d) {
                return d;
            });

        // datatable start
        let dTable = $('#bubbletable').dataTable({
            data: data,
            columns: [
                {"data": 'Recipient'},
                {"data": 'agency'},
                {"data": 'subagency'},
                {"data": 'family'},
                {"data": 'type'},
                {"data": 'obligation', 'render': $.fn.dataTable.render.number(',', '.', 0, '$')}
            ],
            deferRender: true,
            scrollCollapse: true,
            scroller: true
        });
    });
};

function selectSubAgency(d) {
    const elSelector = "circle.node--leaf[id='" + d.name.replace(/ /g,"_") + "']";
    circle.classed('active', false);
    d3.select(elSelector).classed("active", true);
    if (focus !== d) zoom(d.parent), d3.event.stopPropagation();

}

function bubbleClick(d) {

    circle.classed('active', false);

    // need to check if focus is d, maybe?
    if (isZoomedIn(d)) {
        if (d.depth === 2) {
            d3.event.stopPropagation();
            setChartState(d.parent);

            const elName = "circle.node--leaf#" + d.name.replace(/ /g,"_");
            d3.select(elName).classed("active", true);
            bubble.activateDetail(d);

        } else if (d.depth === 1) {
            setLegendLeft(false);

            clearChartState();

            if (focus !== d) zoom(d), d3.event.stopPropagation();

        }
    } else {

        if (d.depth === 2) {
            setLegendLeft(true);
            setChartState(d.parent);

            // check if a bubble is already selected
            if (focus !== d.parent) zoom(d.parent), d3.event.stopPropagation();

        } else if (d.depth === 1) {
            setLegendLeft(true);
            setChartState(d);

            if (focus !== d) zoom(d), d3.event.stopPropagation();

        }
    }
}


/*
*   Event Handlers
*/

bChartBtn.click(function(){
    bTableContainer.hide(); // show
    bChartContainer.show(); // hide bubble chart
});

// table button toggle click
bTableBtn.click(function(){
    bTableContainer.show(); // show
    bChartContainer.hide(); // hide bubble chart
});

// Redraw based on the new size whenever the browser window is resized.
window.addEventListener("resize", function() {
    closeDetailPanel();
    $("#agency-bubbleChart").empty();
    if (root) {
        maxHeight = document.getElementById("agency-investments__content").clientHeight;
        calculatedWidth = window.innerWidth * widthPercentage;
        diameter = bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;

        resize = true;
        drawBubbleChart(root);
        resize = false;

        // check the state here and replay
        const chartState = getChartState();

        if(chartState) {
            zoom(chartState);

        } else {
            zoomTo([root.x, root.y, root.r * 2 + margin]);
        }

    }
});

tooltipClose.click(function() {
    tip.hide();
});


/*
*   Main Method
*/

d3.csv("/data-lab-data/CU_bubble_chart.csv", function(err1, data) {
    if (err1) { return err1; }
    d3.csv("/data-lab-data/CU/Bubble_Chart_Agency_Hover_data.csv", function(err2, rawPopoverData) {
        if (err2) { return err2; }

        popoverData = _.keyBy(rawPopoverData, 'agency');

        root = transformData(data);
        nodes = pack.nodes(root);

        drawBubbleChart(root);

        d3.select(bubbleChartContainer)
            .on("click", function () {
                const currentState = getChartState();
                if (!currentState || (currentState && currentState.depth !== 2)) {
                    setLegendLeft(false);
                    clearChartState();
                    zoom(root);
                }
            });

        zoomTo([root.x, root.y, root.r * 2 + margin]);

        createBubbleTable(data); // has to match csv columns!

        if (!bubble.setSearchData) {
            console.warn('bubble method not available')
        } else {
            bubble.setSearchData(root);
            bubble.selectSubAgency = selectSubAgency;
            bubble.zoom = zoom;
        }
    });
});

/*
* Function to Transform Data (needs to be refactored)
 */

function transformData(data) {
    let result = _.groupBy(data, 'agency');
    var i = 0;
    let tempRoot = {
        "name": "flare",
        "children": []
    };

    // Re-structure data
    for(let agency in result) {
        result[agency] = _.groupBy(result[agency], 'subagency');

        tempRoot.children.push({"name": agency, "children": []});

        for(let subagency in result[agency]) {
            if(result[agency][subagency] && result[agency][subagency].length > 0) {
                result[agency][subagency] = result[agency][subagency][0].obligation;
            } else {
                result[agency][subagency] = 0;
            }

            tempRoot.children[i].children.push({"name": subagency, "children": [], "color": null, "size": result[agency][subagency]});
        }

        i++;
    }

    recipient = result;

    // add color
    for (var i = 0; i < tempRoot.children.length; i++) {
        for (var j = 0; j < tempRoot.children[i].children.length; j++) {
            tempRoot.children[i].children[j].color = color[i];
        }
    }

    return tempRoot;
}
