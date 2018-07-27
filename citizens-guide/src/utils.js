export function getElementBox(d3Selection){
    return {
        width: Math.ceil(d3Selection.node().getBoundingClientRect().width),
        height: Math.ceil(d3Selection.node().getBoundingClientRect().height)
    }
}

export function translator(x, y) {
    return `translate(${x}, ${y})`
}