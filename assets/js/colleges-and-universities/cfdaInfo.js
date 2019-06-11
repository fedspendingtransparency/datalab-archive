(function(){
    function init() {
        const trigger = d3.select('.cfda__trigger'),
        close = d3.select('.cfda__close'),
        contents = d3.select('cfda__contents');
        
        trigger.on('click', () => {
            contents.classed('.cfda__contents--active', !contents.classed('.cfda__contents--active'));
        })
        
        close.on('click', () => {
            contents.classed('cfda__contents--active', false);
        })
    }

    setTimeout(init, 1500) // wait until dom elements are present on the page
})()