import { chartWidth } from "./widthManager";

export const dotConstants = {
    offset: {
        x: 5,
        y: 6
    },
    radius: 2
};

export let dotsPerRow;

export function setDotsPerRow() {
    const workingWidth = chartWidth - dotConstants.radius;

    console.log('cw', chartWidth)

    dotsPerRow = Math.floor(workingWidth / dotConstants.offset.x);
}