$(function() {
  const {
    orientParallaxSection,
    findParallaxStatus,
    findAndOriendParallax
  } = parallaxModule;

  findAndOriendParallax();

  let timeout;
  $(window).scroll(() => {
    clearTimeout(timeout);
    timeout = setTimeout(findAndOriendParallax, 0);
  });

  const printData = data => console.log(data);

  dataModule.loadAwardsByYear(printData);
});
