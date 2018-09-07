import { colors } from "../../colors";
import { translator } from "../../utils";

const outGroupClass = 'out-group',
    discGroupClass = 'disc-group';

function zoomOut(g) {
    g.select('.' + outGroupClass)
        .attr('opacity', 1)
        .transition()
        .duration(1000)
        .attr('opacity', 0)
}

function zoomIn(g) {
    g.select('.' + outGroupClass)
        .transition()
        .duration(1000)
        .attr('opacity', 1)
}

function init(g, baseDimensions, zoomTriggerX) {
    const outGroup = g.append('g')
        .classed(outGroupClass, true),
        trianglePoints = {
            in: {
                left: '155,21 158,15 152,15',
                right: '155,21 158,27 152,27'
            },
            out: {
                left: '5,16 10,13 10,19',
                right: '27,16 22,13 22,19'
            }
        };

    let text, triangleLeft, triangleRight, disc;

    outGroup.append('rect')
        .attr('width', baseDimensions.width - zoomTriggerX)
        .attr('height', baseDimensions.height)
        .attr('fill', colors.colorPrimaryDarker)
        .attr('stroke', colors.colorPrimaryDarker)
        .attr('x', 0)
        .attr('y', 0);

    text = outGroup.append('text')
        .text('zoom for')
        .attr('style', 'fill:white')
        .attr('font-size', 12)
        .attr('x', 10)
        .attr('y', 56);

    text.append('tspan')
        .text('More')
        .attr('style', 'fill:white')
        .attr('font-size', 18)
        .attr('x', 10)
        .attr('dy', 18);

    text.append('tspan')
        .text('Categories')
        .attr('style', 'fill:white')
        .attr('font-size', 18)
        .attr('x', 10)
        .attr('dy', 18);

    disc = g.append('g')
        .classed(discGroupClass, true)
        .attr('transform', translator(10, 7));

    disc.append('circle')
        .attr('fill', colors.colorPrimary)
        .attr('r', 16)
        .attr('cx', 16)
        .attr('cy', 16);

    disc.append('line')
        .attr('stroke', 'white')
        .attr('x1', 5)
        .attr('y1', 16)
        .attr('x2', 27)
        .attr('y2', 16)
        .attr('stroke-width', 1);

    triangleLeft = disc.append('polygon')
        .attr('points', trianglePoints.out.left)
        .attr('fill', 'white');

    triangleRight = disc.append('polygon')
        .attr('points', trianglePoints.out.right)
        .attr('fill', 'white');
}

function transformTrigger(state, g) {
    if (state === 'out') {
        zoomIn(g);
    } else {
        zoomOut(g);
    }
}

export function zoomInit(baseContainer, baseDimensions, zoomTriggerX, zoomCallback) {
    const g = baseContainer.append('g')
        .attr('transform', translator(zoomTriggerX, 0));

    let state = 'out';
    g.on('click', function () {
        state = (state === 'out') ? 'in' : 'out';
        
        zoomCallback(state);
        transformTrigger(state, g)
    })

    init(g, baseDimensions, zoomTriggerX);

    return 'zoomComponent';
}