$(function() {
  const { orientParallaxSection } = parallaxModule();

  orientParallaxSection();

  let timeout;
  $(window).scroll(() => {
    clearTimeout(timeout);
    timeout = setTimeout(orientParallaxSection, 5);
  });
});
