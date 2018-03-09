$(function() {
  function orientParallaxSection() {
    const elements = $.makeArray($(".left"));

    // this doesn't change as the user scrolls
    const elementsData = elements.map(c => {
      const top = $(c).offset().top;
      const bottom = top + $(c).outerHeight();
      const id = $(c).attr("id");
      return { top, bottom, id };
    });

    let parallaxStatus, activePanel;

    // this does change as the user scrolls
    const breakpoint1 = $("#scroll-breakpoint-1");
    const breakpointY1 = breakpoint1.outerHeight() + breakpoint1.offset().top;
    const breakpoint2 = $("#scroll-breakpoint-2");
    const breakpointY2 = breakpoint2.outerHeight() + breakpoint2.offset().top;
    const triggerpoint = $("#scroll-triggerpoint");
    const triggerpointY =
      triggerpoint.outerHeight() + triggerpoint.offset().top;

    if (breakpointY1 <= elementsData[0].top) parallaxStatus = "pre";
    else if (breakpointY2 >= elementsData[elementsData.length - 1].bottom)
      parallaxStatus = "post";
    else parallaxStatus = "active";

    $(".parallax-container").removeClass("fixed");
    $(".parallax-container").removeClass("absolute");
    $(".parallax-container").removeClass("post");

    switch (parallaxStatus) {
      case "pre":
        $("#counter").html(`not currently scrolling past a panel`);
        $(".parallax-container").addClass("absolute");
        break;
      case "post":
        $("#counter").html(`not currently scrolling past a panel`);
        $(".parallax-container").addClass("absolute");
        $(".parallax-container").addClass("post");
        break;
      default:
        $(".parallax-container").addClass("fixed");
    }

    activePanel = elementsData.find(e => {
      return triggerpointY >= e.top && triggerpointY <= e.bottom;
    });
    if (activePanel) {
      $("#counter").html(`currently scrolling past panel ${activePanel.id}`);
    }
  }

  orientParallaxSection();

  $(window).scroll(orientParallaxSection);
});
