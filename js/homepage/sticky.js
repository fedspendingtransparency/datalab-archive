// Jack Killilea (jrk) <Killilea_Jack@bah.com>
// Sticky.js
// Quick Sticky Header for New Homepage

$(function() {
  stickyHeader($("#header")); // our Header id in our homepage
  stickyBanner($('.official-banner')); // official-banner
});

function stickyHeader(sticky) {
  if (typeof sticky !== "undefined") {
    let position = $(sticky).offset().top;
    
    $(window).on('scroll', function() {
      $(window).scrollTop() >= position ? $(sticky).css('position', 'fixed').css('top', '0').css('width', '100%') : $(sticky).css('position', 'relative');
    });
  }
}

function stickyBanner(banner) {
  if (typeof banner !== "undefined") {
    let position = $(banner).offset().top;
    
    $(window).on('scroll', function() {
      $(window).scrollTop() >= position ? $(banner).css('position', 'fixed').css('top', '0').css('width', '100%') : $(banner).css('position', 'relative');
    });
  }
}

