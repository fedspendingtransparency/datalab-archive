// Jack Killilea (jrk) <Killilea_Jack@bah.com>
// Sticky.js
// Sticky Header and Extra Magic for New Homepage!
// using jquery 1.11.3! (updating, if bugged then revert!)

const headerRight = '.header-right';
const spendingLogo = '.usaspending-logo-center';
const hiddenUlSection = '.dropdownUlSection';
const li = '.navListItem';
const navClick = '#navText';
const analysesNav = '.secondaryNavAnalyses';
const resourcesNav = '.secondaryNavResources';
const ffgNav = '.secondaryNavFFG';
const datalabLogo = '.datalabLogo';
const burgerMenu = '#burger-navbar-toggle';

// colors!
const lb = '#2376d8'; // light blue link
const db = '#0a2644'; // dark blue link

// Main Header Li's for hover
const analysesText = '.analysesText';
const resourcesText = '.resourcesText';
const ffgText = '.ffgText';
const regex = new RegExp("[a-zA-Z]");
const pathname = window.location.pathname;

// Mobile section
const mobileMenu = '#mobileSection';
const analysesAnchor = '#analysesAnchor';
const resourcesAnchor = '#resourcesAnchor';
const ffgAnchor = '#ffgAnchor';
const mobileAnalyses = '#mobileAnalyses';
const mobileResources = '#mobileResources';
const mobileFFG = '#mobileFFG';

$(function() {
  stickyHeader($("#header")); // our Header id in our homepage
  mobileEvents(); // mobile events seperated
  applyColorsClick(); // added colors 

  // on burger menu click, we'll show nav
  $(burgerMenu).click(function() {
//    $(mobileMenu).css('display', 'flex');
    $(mobileMenu).toggle('slow');
  });

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
  });

  $(hiddenUlSection).mouseleave(function(){
    $(hiddenUlSection).css('display', 'none');
  });

});

/*
  Splitting mobile events into 
  another function. Just to save
  someone a headache.
*/
function mobileEvents() {

  // *** MOBILE *** ///
  $(analysesAnchor).click(function() {
//    $(mobileAnalyses).css('display', 'block');
    $(mobileAnalyses).toggle('slow');
  });

  $(resourcesAnchor).click(function() {
//    $(mobileResources).css('display', 'block');
    $(mobileResources).toggle('slow');
  });

  $(ffgAnchor).click(function() {
//    $(mobileFFG).css('display', 'block');
    $(mobileFFG).toggle('slow');
  });

}


/*
  Check if we're at the top of the page,
  if we are, keep things non sticky,
  when we scroll, lets make things sticky ~

  TODO: Add Scroll event debounce!
*/
function stickyHeader(sticky) {
  if (typeof sticky !== "undefined") {
    
    $(window).on('scroll', function() {

      if ($(window).scrollTop() === 0) {
        $(sticky).css('display', 'flex').css('position','relative').css('width', ''); // make sure we remove width to get rid of overflow problem!

        $(burgerMenu).css('padding-right', '0px'); // get rid of burger menu padding..
        $(mobileMenu).css('justify-content','flex-end').css('flex-direction', 'row').css('z-index', '999').css('top', '').css('position', '').css('width', ''); // take defaults from what we have in 'header.css'

        $(spendingLogo).css('justify-content', 'flex-end').css('padding-right', '120px');
        if($(window).width() >= 1920) {
          $(spendingLogo).css('justify-content', 'flex-end').css('padding-right', '220px');
        }
        if ($(window).width() <= 950) {
          $(spendingLogo).css('justify-content', 'flex-start').css('padding-right', '0px');
        }

      } else {

        // if not at the top, then we make it "sticky"
        $(sticky).css('position','fixed').css('top', '0').css('width','100%');
        // also make secondary mobile sticky 
        $(mobileMenu).css('position','fixed').css('top', '100px').css('width', '100%').css('justify-content','flex-end').css('align-items','flex-end').css('background-color','#FFFFFF');
        // move burger menu over as well
        $(burgerMenu).css('padding-right', '45px').css('align-items', 'flex-end');

        // only if we are on the homepage, move logo to left!
        if(!regex.test(pathname)) {
          $(spendingLogo).css('justify-content', 'flex-start').css('padding-right', '0px');
        } 
      }

    }); // end of scroll event !
  }
}

function applyColorsClick() {
  $(analysesAnchor).click(function() {
    $(analysesAnchor).css('color', db);
  });
}
