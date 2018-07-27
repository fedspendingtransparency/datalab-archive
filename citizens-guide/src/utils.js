export function getElementBox(d3Selection) {
    return {
        width: Math.ceil(d3Selection.node().getBoundingClientRect().width),
        height: Math.ceil(d3Selection.node().getBoundingClientRect().height)
    }
}

export function translator(x, y) {
    return `translate(${x}, ${y})`
}

export function getTransform(d3Selection) {
    const re = /(\d)+/g
    const originalTransform = d3Selection.attr('transform').match(re);

    return {
        x: Number(originalTransform[0]),
        y: Number(originalTransform[1])
    }
}