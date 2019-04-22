import { layout, interpolate, scale, svg, format, rgb } from "d3";

export const width = 600;
export const height = 600;
export const radius = 300;


export var partition = layout.partition().value(d => d.size);

export var formatNumber = format("$,f");
export var x = scale.linear().range([0, 2 * Math.PI]);
export var y = scale.sqrt().range([0, radius]);
export var arc = svg
  .arc()
  .startAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x))))
  .endAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))))
  .innerRadius(d => Math.max(0, y(d.y)))
  .outerRadius(d => Math.max(0, y(d.y + d.dy)));

export function arcTween(a) {
  const oldDims = {
    x: this._current.x,
    y: this._current.y,
    dx: this._current.dx,
    dy: this._current.dy
  };

  const newDims = {
    x: a.x,
    y: a.y,
    dx: a.dx,
    dy: a.dy
  };

  var i = interpolate(oldDims, newDims);
  this._current = i(0);
  return function(t) {
    const transDims = i(t);
    return arc(transDims);
  };
}

export function findColor(node, colors) {
  switch (node.depth) {
    case 0: // root
      return "#FFFFFF";
    case 1: // agency
      return colors[node.id].color;
    case 2: // subagency
      return rgb(
        colors[node.parent.id].color
      ).darker(-0.75);
    case 3: // contractor
      return rgb(
        colors[node.parent.parent.id].color
      ).darker(-1.25);
    default:
      return "#FFFFFF";
  }
}
