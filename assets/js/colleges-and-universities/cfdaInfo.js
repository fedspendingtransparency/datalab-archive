(function(){
    const trigger = d3.select('.cfda__trigger'),
        close = d3.select('.cfda__close'),
        contents = d3.select('cfda__contents')

    trigger.on('click', () => {
        d3.event.preventDefault();
        contents.classed('.cfda__contents--active', !contents.classed('.cfda__contents--active'));
    })

    close.on('click', () => {
        d3.event.preventDefault();
        contents.classed('cfda__contents--active', false);
    })
})()