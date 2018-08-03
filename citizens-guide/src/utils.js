export function getElementBox(d3Selection) {
    const rect = d3Selection.node().getBoundingClientRect();

    return {
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height)
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