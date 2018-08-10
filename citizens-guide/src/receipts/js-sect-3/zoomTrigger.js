import { select } from "d3-selection";
import { translator } from "../../utils";

const d3 = { select },
    trianglePoints = {
        in: {
            top: '155,21 158,15 152,15',
            bottom: '155,21 158,27 152,27'
        },
        out: {
            top: '155,10 158,15 152,15',
            bottom: '155,32 158,27 152,27'
        }
    }

export const trigger = {
    init: function (globals) {
        const self = this,
            rectWidth = 180,
            trigger = globals.chart.append('g')
                .attr('style', 'cursor:pointer')
                .attr('transform', translator(-globals.labelPadding - rectWidth + 10, globals.y(globals.zoomThreshold / 2)))

        let text;

        this.triggerWrapper = trigger.append('g');
        this.state = 'out';
        this.box = this.triggerWrapper.append('g');

        this.box.append('rect')
            .attr('width', rectWidth)
            .attr('height', 42)
            .attr('fill', '#4A90E2')

        text = this.box.append('text')
            .attr('style', 'fill:white');

        text.append('tspan')
            .text('Zoom for')
            .attr('x', 10)
            .attr('dy', 16)
            .attr('font-size', 11);

        text.append('tspan')
            .text('More Categories')
            .attr('x', 10)
            .attr('dy', 16)
            .attr('font-size', 18);

        this.disc = this.triggerWrapper.append('g');

        this.disc.append('circle')
            .attr('fill', '#205493')
            .attr('r', 16)
            .attr('cx', 155)
            .attr('cy', 21)

        this.disc.append('line')
            .attr('stroke', 'white')
            .attr('x1', 155)
            .attr('y1', 11)
            .attr('x2', 155)
            .attr('y2', 31)
            .attr('stroke-width', 1)

        this.triangleTop = this.disc.append('polygon')
            .attr('points', trianglePoints.out.top)
            .attr('fill', 'white')

        this.triangleBottom = this.disc.append('polygon')
            .attr('points', trianglePoints.out.bottom)
            .attr('fill', 'white')

        trigger.on('mouseover', function () {
            d3.select(this).select('rect')
                .transition()
                .duration(300)
                .attr('fill', '#0068e2')
                .ease();

            d3.select(this).select('circle')
                .transition()
                .duration(300)
                .attr('fill', function () {
                    return (self.state === 'in') ? '#4A90E2' : '#205493';
                })
                .ease();
        })

        trigger.on('mouseout', function () {
            d3.select(this).select('rect')
                .transition()
                .duration(500)
                .attr('fill', '#4A90E2')
                .ease();

            d3.select(this).select('circle')
                .transition()
                .duration(300)
                .attr('fill', '#205493')
                .ease();
        })

        this.trigger = trigger;

        return trigger;
    },
    toggle: function () {
        if (this.state === 'out') {
            this.state = 'in';
            this.setStateIn();
        } else {
            this.state = 'out';
            this.setStateOut();
        }
    },
    setStateIn: function () {
        this.box.transition()
            .duration(300)
            .attr('opacity', 0)
            .ease();

        this.triggerWrapper.transition()
            .duration(1000)
            .delay(300)
            .attr('transform', translator(-180, 0));

        this.triangleTop.transition()
            .duration(500)
            .delay(1300)
            .attr('points', trianglePoints.in.top);

        this.triangleBottom.transition()
            .duration(500)
            .delay(1300)
            .attr('points', trianglePoints.in.bottom);
    },
    setStateOut: function () {
        this.box.transition()
            .delay(500)
            .duration(500)
            .attr('opacity', 1)
            .ease();

        this.triggerWrapper.transition()
            .duration(1000)
            .attr('transform', translator(0, 0));

        this.triangleTop.transition()
            .duration(500)
            .delay(1300)
            .attr('points', trianglePoints.out.top);

        this.triangleBottom.transition()
            .duration(500)
            .delay(1300)
            .attr('points', trianglePoints.out.bottom);
    }
}