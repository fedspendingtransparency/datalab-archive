$(function() {
  const {
    orientParallaxSection,
    findParallaxStatus,
    findAndOriendParallax
  } = parallaxModule;

  const { draw } = barchartModule;

  findAndOriendParallax();

  $(window).scroll(findAndOriendParallax);

  dataModule.loadAwardsByYear(draw);
});
