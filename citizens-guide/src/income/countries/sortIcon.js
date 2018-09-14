import { select } from 'd3-selection';
import { getElementBox, translator } from '../../utils';

const d3 = { select },
    iconHeight = 16,
    triangleWidthHalf = 4,
    triangleTop = iconHeight - triangleWidthHalf - 2,
    lineLengths = [8, 6, 4, 2],
    lineStart = triangleWidthHalf * 2 + 2,
    lineYOffset = 4,
    colorInactive = '#ddd';

export function renderSortIcon(container) {
    const parent = d3.select(this),
        parentBox = getElementBox(parent),
        iconGroup = parent.append('g').attr('transform', translator(parentBox.width + 20, 8 + iconHeight));

    iconGroup.append('rect')
        .attr('fill', 'white')
        .attr('width', lineStart + lineLengths[0])
        .attr('height', iconHeight)

    iconGroup.append('line')
        .attr('x1', triangleWidthHalf)
        .attr('x2', triangleWidthHalf)
        .attr('y1', 0)
        .attr('y2', iconHeight - 1)
        .attr('stroke', colorInactive)
        .attr('stroke-width', 2)

    iconGroup.append('polygon')
        .attr('points', `${triangleWidthHalf},${iconHeight} 0,${triangleTop} ${triangleWidthHalf * 2},${triangleTop}`)
        .attr('fill', colorInactive);

    iconGroup.selectAll('line.sort')
        .data([0, 1, 2, 3])
        .enter()
        .append('line')
        .attr('class', 'sort')
        .attr('stroke-width', 2)
        .attr('stroke', colorInactive)
        .attr('x1', lineStart)
        .attr('x2', function (d) {
            console.log(d, lineLengths[d])
            return lineStart + lineLengths[d];
        })
        .attr('y1', function (d) {
            return lineYOffset * d + 1;
        })
        .attr('y2', function (d) {
            return lineYOffset * d + 1;
        })
}