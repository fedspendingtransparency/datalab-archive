(function() {
    const detailContainer = d3.select('#bubble-detail').append('section').classed('bubble-detail', true),
        activeClass = 'bubble-detail--active';

    let agencyName, subAgencyName;

    function activateDetail(data) {
        console.log('activate', data);

        detailContainer.classed(activeClass, true);

        agencyName.text(data.parent.name)
        subAgencyName.text(data.name)
    }

    function placeCloseButton() {
        detailContainer.append('button')
            .classed('bubble-detail__close', true)
            .text('close')
            .on('click', () => {
                detailContainer.classed(activeClass, false)
            })
    }
    
    function init() {
        placeCloseButton();
        
        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Agency');
        agencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);
        
        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Sub-Agency');
        subAgencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        bubble.activateDetail = activateDetail
    }
    
    init()
})()