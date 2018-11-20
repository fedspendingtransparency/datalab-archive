/**
 * Scrollytelling with ScrollMagic library
 */
$(function() {
    let controller = new ScrollMagic.Controller();

    // Section 1: Overview Information : Showing Help Text & Chart
    // We need to break them into tiny tiny little parts as we go across
    // legit going to make a new scene for everything until we go back and refactor this
    // super messy.. we can do much better.. need to test how this works for now...

    new ScrollMagic.Scene({
        triggerElement: ".overview_information",
    })
    .addIndicators({name: "1"}) // for testing
    .setClassToggle('#investmenth2', 'appearScroll')
    .addTo(controller);

    // Investment Dollar Amount
    new ScrollMagic.Scene({
        triggerElement: '#totalInvesmentDollarAmount',
    })
    .addIndicators({name: "2"})
    .setClassToggle('#totalInvesmentDollarAmount', 'appearScroll')
    .addTo(controller);

    // Spending Total
    new ScrollMagic.Scene({
        triggerElement: '#investment_spending_total',
    })
    .addIndicators({name: "3"})
    .setClassToggle('#investment_spending_total', 'appearScroll')
    .addTo(controller);

    // Graph
    new ScrollMagic.Scene({
        triggerElement: '#totalInvestments_Graph',
    })
    .addIndicators({name: "4"})
    .setClassToggle('#totalInvestments_Graph', 'appearScroll')
    .addTo(controller);

    // Information Rectangle
    let lastSceneOne = new ScrollMagic.Scene({
        triggerElement: '#infoRect',
        duration: 150
    })
    .addIndicators({name: "5"})
    .setClassToggle('#infoRect', 'appearScroll')
    .on('start', function() {
        $('#infoRect').show();
    })
    .on('leave', function() {
        $('#infoRect').hide();
    })
    .on('enter', function() {
        $('#infoRect').show();
    })
    .addTo(controller);

//    $('.fade-in').each(function(){
        //let tween = TweenMax.from($(this), 0.3, {ease: Linear.easeNone});
//
        //let scene = new ScrollMagic.Scene({
            //triggerElement: this,
        //})
        //.setTween(tween)
        //.addIndicators({name: "rari"})
        //.addTo(controller);
    //});


    /////////////////////
    /// Section 2: Contracts, Grants, Aid ///
    //new ScrollMagic.Scene({
        //triggerElement: '#totalInvestments_breakdown',
    //})
    new ScrollMagic.Scene({
        triggerElement: '#contractsSpan',        
    })
    .addIndicators({name: "contracts"})
    .setClassToggle('#contractsSpan', 'appearScroll')
    .offset(100)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#grantsSpan',        
    })
    .addIndicators({name: "grants"})
    .setClassToggle('#grantsSpan', 'appearScroll')
    .offset(200)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#studentaidSpan',        
    })
    .addIndicators({name: "aid"})
    .setClassToggle('#studentaidSpan', 'appearScroll')
    .offset(300)
    .addTo(controller);

});