(function () {
    const trigger = d3.select('.cfda__trigger'),
        close = d3.select('.cfda__close'),
        contents = d3.select('.cfda__contents'),
        activeClass = 'cfda__contents--active';

    trigger.on('click', () => {
        contents.classed(activeClass, !contents.classed(activeClass));
    })

    close.on('click', () => {
        contents.classed(activeClass, false);
    })
})()
