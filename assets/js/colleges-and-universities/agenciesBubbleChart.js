/*
  --------------------------------------------------------------------------------------------------------------------
*   Local declarations
*--------------------------------------------------------------------------------------------------------------------
*/
const bubbleChartContainer = document.getElementById('bubbleChartContainer');
const color = ['#bf8381','#c19082','#c39f84','#c7bc87','#c7c889','#bbc888','#aec788','#a3c787','#91c7a5',
    '#91c78b','#91c7c1','#8ab0c6','#9481c4','#bf84b9', '#91c78b','#91c7c1','#8ab0c6','#9481c4','#bf84b9',
    '#bf8381','#c19082','#c39f84','#c7bc87','#c7c889','#bbc888','#aec788','#a3c787','#91c7a5'];

/*
  --------------------------------------------------------------------------------------------------------------------
*   functions
*--------------------------------------------------------------------------------------------------------------------
*/


var circleFill = function(d) {
    if (d['color']) {
        return d.color;
    } else if (d.parent && d.parent.name === "flare") {
        return '#f3f3f3';
    } else {
        return '#f8f8f8';
    }
}

var calculateTextFontSize = function(d) {
    var id = d3.select(this).text();
    var radius = 0;

    if(d.depth === 2) {
        if(d.fontsize =  d.r > 30) {
            d.fontsize = "12px";
        } else if (d.fontsize =  d.r > 20) {
            d.fontsize = "4px";
        } else if (d.fontsize =  d.r > 5) {
            d.fontsize = "2px";
        } else {
            d.fontsize = "1px";
        }
    }

    if (d.fontsize){
        //if fontsize is already calculated use that.
        return d.fontsize;
    }
    if (!d.computed) {
        //if computed not present get & store the getComputedTextLength() of the text field
        d.computed = this.getComputedTextLength();
        if(d.computed != 0){
            //if computed is not 0 then get the visual radius of DOM
            //if radius present in DOM use that
            radius = d.r ? d.r : 0;

            //calculate the font size and store it in object for future
            d.fontsize = 24 * radius / d.computed + "px";
            return d.fontsize;
        }
    }
}

var margin = 20,
    diameter = 800;

var pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) {
        if(d.size > 0) {
            return d.size;
        }
    })

var node, circle, recipientMap;

function drawBubbleChart(root) {
    var width = 1600;
    var height = 2000;

    var aspect = window.innerWidth / window.innerHeight;
    var targetWidth = window.innerWidth;


    var svg = d3.select(bubbleChartContainer).append("svg")
        .attr("id", "chart")
        .attr("width", targetWidth)
        .attr("height", targetWidth / aspect)
        .append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");


    var focus = root,
        nodes = pack.nodes(root),
        view;

    circle = svg.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("class", function(d) {
            return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root";
        })
        .attr("class", function(d) {
            return d.name;
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
            if (focus !== d) zoom(d), d3.event.stopPropagation();
        });

    circle.append("svg:title")
        .text(function(d) {
            return d.name;
        })

    var text = svg.selectAll("text")
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
        .attr("text-anchor", "middle");

    node = svg.selectAll("circle,text");

}

function transformData(data) {
    var result = _.groupBy(data, 'agency');
    var i = 0;
    var tempRoot = {
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

// Zoom into a specific circle
// CALL THIS FUNCTION ON SEARCH
// Parameter is a specific node 
function zoom(d) {
    var focus0 = focus;
    focus = d;

    if (!d.parent || d.parent.name === "flare") {
        var transition = d3.transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .tween("zoom", function(d) {
                var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
                return function(t) {
                    zoomTo(i(t));
                };
            });

        transition.selectAll("text")
            .filter(function(d) {
                return d.parent === focus || this.style.display === "inline";
            })
            .style("fill-opacity", function(d) {
                return d.parent === focus ? 1 : 0;
            })
            .each("start", function(d) {
                if (d.parent === focus) this.style.display = "inline";
            })
            .each("end", function(d) {
                if (d.parent !== focus) this.style.display = "none";
            });
        setTimeout(function() {
            d3.selectAll("text").filter(function(d) {
                return d.parent === focus || this.style.display === "inline";
            }).style("font-size", calculateTextFontSize);
        }, 10)

    } else {
        console.log(recipient[d.parent.name][d.name]);
        // window.alert('open right window, parent - ' + d.parent.name + ', ' + d.name);
    }

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

/*
--------------------------------------------------------------------------------------------------------------------
*   Main Method
*--------------------------------------------------------------------------------------------------------------------
*/
d3.csv("/data-lab-data/CU_bubble_chart.csv", function(data) {
    var root = transformData(data);

    drawBubbleChart(root);

    d3.select(bubbleChartContainer)
        .on("click", function() {
            zoom(root);
        });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    if (!bubble.setAgencies) {
      console.warn('bubble method not available')
    } else {
      bubble.setAgencies(agenciesData);
    }

});
