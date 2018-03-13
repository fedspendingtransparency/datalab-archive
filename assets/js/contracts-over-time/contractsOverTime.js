$(function() {
  const {
    orientParallaxSection,
    findParallaxStatus,
    findAndOriendParallax
  } = parallaxModule;

  const { draw } = barchartModule;

  findAndOriendParallax();

  let timeout;
  $(window).scroll(() => {
    clearTimeout(timeout);
    timeout = setTimeout(findAndOriendParallax, 0);
  });

  dataModule.loadAwardsByYear(draw);
});
