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


let node, circle, focus, view, bubbleSvg, recipient, root, nodes;
const widthPercentage = .7;
let maxHeight = document.getElementById("agency-investments__content").clientHeight;
let calculatedWidth = window.innerWidth * widthPercentage;
let bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;
const margin = 20;
let diameter = bubbleWidth;
let _chartState;

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
d3.select('#legend_scaleKey').append('circle')
    .attr('r', 25)
    .attr('class', 'legend_scaleKeyCircle')
    .attr('cx', 60)
    .attr('cy', 65);
d3.select('#legend_scaleKey').append('circle')
    .attr('r', 35)
    .attr('class', 'legend_scaleKeyCircle')
    .attr('cx', 60)
    .attr('cy', 65);
d3.select('#legend_scaleKey').append('circle')
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

/* Set color for sub-agency circles */
function circleFill (d) {
    if (d['color']) {
        return d.color;
    }
};

/* Store the current state */

/* Calculate text font size for bubbles before and after zoom */
function calculateTextFontSize (d) {
    let radius = 0;
    let labelWidth;

    if (d.fontsize) {
        //if fontsize is already calculated use that.
        return d.fontsize;
    }

    if (!d.computed) {
        //if computed not present get & store the getComputedTextLength() of the text field
        d.computed = this.getComputedTextLength();
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

function drawBubbleChart(root) {
    const targetWidth = bubbleWidth;
    
    bubble.chartHeight = targetWidth;

    tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
        if(d.depth === 2) {
            const tooltipHtml = "<div class='bubble-chart-tooltip'>" +
                "<span class='bubble-detail__agency-label'>Agency</span>" +
                "<span class='bubble-detail__agency-name'>" + d.parent.name + "</span>" +
                "<span class='bubble-detail__agency-label'>Sub-Agency</span>" +
                "<span class='bubble-detail__agency-name'>" + d.name + "</span>" +
                "<div class='information'><p class='key'>Total $ of Awards</p>" +
                "<span class='bubble-detail__agency-name'>" + formatCurrency(d.size) + "</span>" +
                "</div></div>";
            return tooltipHtml;
        }

        return '<div></div>';
    });

    focus = root;
    diameter = bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;


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
            return d.name;
        })
        .on("click", function(d) {
            setChartState(d);

            circle.classed('active', false);

            if (d.depth == 0) {
                if (focus !== d) zoom(d), d3.event.stopPropagation();
            } else if (d.depth == 1) {
                if (focus !== d) zoom(d), d3.event.stopPropagation();
                d3.select(this).classed("active", false);
            } else if (d.depth == 2) {
                // check if a bubble is already selected
                d3.select(this).classed("active", true);
                bubble.activateDetail(d);
            } else {
                console.log("why are we here?");
            }

        })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide);

    bubbleSvg.selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("font-family", "Source Sans Pro")
        .attr("class", "label")
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
        .on("click", function(d) {
            setChartState(d);

            circle.classed('active', false);
            if (d.depth == 0) {
                if (focus !== d) zoom(d), d3.event.stopPropagation();
            } else if (d.depth == 1) {
                if (focus !== d) zoom(d), d3.event.stopPropagation();
                d3.select(this).classed("active", false);
            } else if (d.depth == 2) {
                d3.select(this).classed("active", true);
                bubble.activateDetail(d);
            } else {
                console.log("why are we here?");
            }
        });

    node = bubbleSvg.selectAll("circle,text");

    bubbleSvg.call(tip);


}

// Zoom into a specific circle
function zoom(d) {
    const focus0 = focus;
    focus = d;

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

    setTimeout(function() {
        d3.selectAll("text.label").filter(function(d) {
            return d.parent === focus || this.style.display === "inline";
        }).style("font-size", calculateTextFontSize);
    }, 10);

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
            .attr('id', 'bubbletable');

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
                {"data": 'family'},
                {"data": 'obligation'},
                {"data": 'subagency'},
                {"data": 'type'},
            ],
            deferRender: true,
            scrollCollapse: true,
            scroller: true
        });
    });
};

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
    // put this in a set time out
    $("#agency-bubbleChart").empty();
    if (root) {
        maxHeight = document.getElementById("agency-investments__content").clientHeight;
        calculatedWidth = window.innerWidth * widthPercentage;
        diameter = bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;
        drawBubbleChart(root);
        // check the state here and replay
        const chartState = getChartState();

        if(chartState) {
            zoom(chartState);
        } else {
            zoomTo([root.x, root.y, root.r * 2 + margin]);
        }

    }
});

/*
*   Main Method
*/
d3.csv("/data-lab-data/CU_bubble_chart.csv", function(err, data) {
    if (err) { return err; }

    root = transformData(data);
    nodes = pack.nodes(root);

    drawBubbleChart(root);

    d3.select(bubbleChartContainer)
        .on("click", function() {
            const currentState = getChartState();
            if(!currentState || (currentState && currentState.depth !== 2)) {
                zoom(root);
            }
        });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    createBubbleTable(data); // has to match csv columns!

    if (!bubble.setSearchData) {
      console.warn('bubble method not available')
    } else {
      bubble.setSearchData(root);
      bubble.zoom = zoom;
    }

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
    for(agency in result) {
        result[agency] = _.groupBy(result[agency], 'subagency');

        tempRoot.children.push({"name": agency, "children": []});

        for(subagency in result[agency]) {
            result[agency][subagency] = _.groupBy(result[agency][subagency], 'Recipient');

            tempRoot.children[i].children.push({"name": subagency, "children": [], "color": null, "size": 0});

            var rsum;
            for (recipient in result[agency][subagency]) {
                rsum = 0;
                // start calculating size
                for (var r = 0; r < result[agency][subagency][recipient].length; r++) {
                    rsum += parseInt(result[agency][subagency][recipient][r].obligation);
                }

                for (var j = 0; j < tempRoot.children[i].children.length; j++) {
                    tempRoot.children[i].children[j].children.push({"name": recipient, "size": rsum});
                }
            }
        }

        i++;
    }

    recipient = result;

    // sum the subagencies obligations
    for (var i = 0; i < tempRoot.children.length; i++) {
        for (var j = 0; j < tempRoot.children[i].children.length; j++) {
            for (var k = 0; k < tempRoot.children[i].children[j].children.length; k++) {
                tempRoot.children[i].children[j].size += parseInt(tempRoot.children[i].children[j].children[k].size);
                tempRoot.children[i].children[j].children[k].name = null;

            }

            for (var k = 0; k < tempRoot.children[i].children[j].children.length; k++) {
                if(tempRoot.children[i].children[j].children[k] &&
                    !tempRoot.children[i].children[j].children[k].name) {
                    delete tempRoot.children[i].children[j].children[k];
                }
            }

            delete tempRoot.children[i].children[j].children;

        }
    }

    // add color
    for (var i = 0; i < tempRoot.children.length; i++) {
        for (var j = 0; j < tempRoot.children[i].children.length; j++) {
            tempRoot.children[i].children[j].color = color[i];
        }
    }

    return tempRoot;
}
