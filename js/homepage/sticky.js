// Jack Killilea (jrk) <Killilea_Jack@bah.com>
// Sticky.js
// Quick Sticky Header and Extra Magic for New Homepage!

const headerRight = '.header-right';
const spendingLogo = '.usaspending-logo-center';
const hiddenUlSection = '.dropdownUlSection';
const li = '.navListItem';
const navClick = '#navText';
const analysesNav = '.secondaryNavAnalyses';
const resourcesNav = '.secondaryNavResources';
const ffgNav = '.secondaryNavFFG';

// Main Header Li's for hover
const analysesText = '.analysesText';
const resourcesText = '.resourcesText';
const ffgText = '.ffgText';

$(function() {
  stickyHeader($("#header")); // our Header id in our homepage
  stickyBanner($('.official-banner')); // official-banner
  
  /* on Nav Li's hover event, show dropdown hidden Ul nav*/
  $(li).hover(function() {
    $(hiddenUlSection).css('display', 'flex'); // flex container
  });

  /* Secondary Ul dropdown Section */
  $(analysesText).mouseover(function() {
    $(analysesNav).css('display', 'block');
    $(resourcesNav).css('display', 'none');
    $(ffgNav).css('display', 'none');
  });
  
  $(resourcesText).mouseover(function() {
    $(resourcesNav).css('display', 'block');
    $(analysesNav).css('display', 'none');
    $(ffgNav).css('display', 'none');
  });

  $(ffgText).mouseover(function() {
    $(ffgNav).css('display', 'block');
    $(analysesNav).css('display', 'none');
    $(resourcesNav).css('display', 'none');
  });

  $(hiddenUlSection).mouseenter(function(){
    $(hiddenUlSection).css('display', 'flex');
    console.log('entering ul section');
  });

  $(hiddenUlSection).mouseleave(function(){
    $(hiddenUlSection).css('display', 'none');
    console.log('leaving ul section');
  });

});

function stickyHeader(sticky) {
  if (typeof sticky !== "undefined") {
    
    $(window).on('scroll', function() {

      if($(window).scrollTop() === 0) {
        $(sticky).css('display', 'flex').css('position','relative');
        $(spendingLogo).css('margin-left', '800px'); // move the logo back to the middle when we get back up there
      } else {
        // if not at the top, then we make it "sticky"
        $(sticky).css('position','fixed').css('top', '0').css('width','100%').css('justify-content', 'space-between').css('text-align', 'center');

        // also lets move our logo to the left
        $(spendingLogo).css('margin-left','0');
        
        // also gotta move over the right side of the nav!
        $(headerRight).css('padding-right', '40px');

      }
    });
  }
}

function stickyBanner(banner) {
  if (typeof banner !== "undefined") {
    let position = $(banner).offset().top;
    
    $(window).on('scroll', function() {

      // if we're back at the top of the page...
      if ($(window).scrollTop() === 0) {
        $(banner).css('display', 'flex');
        console.log('im at the top of the page');
      } else {
        $(banner).css('display' ,'none');
      }
    });
    
    
  }
}

