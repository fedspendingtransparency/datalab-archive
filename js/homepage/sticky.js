// Jack Killilea (jrk) <Killilea_Jack@bah.com>
// Sticky.js
// Sticky Header and Extra Magic for New Homepage!
// using jquery 1.11.3! (updating, if bugged then revert!)

const headerRight = '.header-right';
const spendingLogoDiv = '.usaspending-logo-center';
const hiddenUlSection = '.dropdownUlSection';
const li = '.navListItem';
const navClick = '#navText';
const analysesNav = '.secondaryNavAnalyses';
const resourcesNav = '.secondaryNavResources';
const ffgNav = '.secondaryNavFFG';
const datalabLogo = '.datalabLogo';
const burgerMenu = '#burger-navbar-toggle';
const centerLogo = '.centerLogo';
const leftLogo = '.leftLogo';

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


/* 
  Helper function to check when burger
  is shown.
*/
function isMobile() {
  if ($(window).width() < 950) {
    //    console.log('mobile');
    return true;
  } else {
    return false;
  }
}

// helper function to
// throttle scroll events
function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}

$(function() {
  stickyHeader($("#header")); // our Header id in our homepage
  mobileEvents(); // mobile events seperated
  applyColorsClick(); // added colors 
  svgFixies(); // svg resize on pages

  window.addEventListener('scroll', throttle(svgFixies, 4000)); // add throttle to scrolling..

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
  Svg helper function to swap svgs on different pages
*/
function svgFixies() {

  // if we are on the homepage
  if (!regex.test(pathname)) {
    let svg = $('svg')[3];
    svg.setAttribute('width', '400px');

    if($(window).width() <= 500) {
      svg.setAttribute('width', '350px');
    }

    if ($(window).width() <= 440) {
      svg.setAttribute('width', '315px');
    }

    $(window).resize(function() {

      if($(window).width() > 500) {
        svg.setAttribute('width', '400px');
      }

      if($(window).width() <= 500) {
        svg.setAttribute('width', '350px');
      }

      if ($(window).width() <= 440) {
        svg.setAttribute('width', '315px');
      }

    });
  }

  // if we aren't on the homepage (cg or dl page)
  if (regex.test(pathname)) {
    let svg = $('svg')[2]; // on other pages its 2nd svg element 
    svg.setAttribute('width', '400px');

    if($(window).width() <= 500) {
      svg.setAttribute('width', '350px');
    }
    
    if ($(window).width() <= 440) {
      svg.setAttribute('width', '315px');
    }

    $(window).resize(function() {
      if($(window).width() > 500) {
        svg.setAttribute('width', '400px');
      }

      if($(window).width() <= 500) {
        svg.setAttribute('width', '350px');
      }
      
      if ($(window).width() <= 440) {
        svg.setAttribute('width', '315px');
      }
    });
  }

  //  function moveHeaderReplace(cb) {
  //    if(!isMobile()) {
  //      $(window).on('scroll', function() {
  //        $('.centerLogo').animate({
  //          'margin-right': 'auto'
  //        }, 1000);
  //        setTimeout(function(){ cb(); }, 1000);
  //      });
  //    }
  //  }

  function marginCheck() {
    //      console.log('center logo should go!');
    $(centerLogo).css('display', 'none');
    $(leftLogo).css('display', 'block');
  }

  //  if (!regex.test(pathname)) {
  //    moveHeaderReplace(marginCheck);
  //  {

  // helper to correct animation
  function afterAnimation() {
    // TODO - deal with margin-right: auto
    // after animation is done in css for proper alignment..
  }
  
}

/*
  onScroll and Sticky header
*/
function stickyHeader(sticky) {
  if (typeof sticky !== "undefined") {
    
    $(window).on('scroll', function() {

      if ($(window).scrollTop() === 0) {
        $(sticky).css('display', 'flex').css('position','relative').css('width', ''); // make sure we remove width to get rid of overflow problem!

        //        $(burgerMenu).css('padding-right', '0px'); // get rid of burger menu padding..
        $(mobileMenu).css('justify-content','flex-end').css('flex-direction', 'row').css('z-index', '20').css('top', '').css('position', '').css('width', ''); // take defaults from what we have in 'header.css'

        // dont do sliding animation on mobile break (955px)
        if(!regex.test(pathname) && $(window).width() > 1008) {
          $('.logo-div-animate-after').removeClass('logo-div-animate-after').addClass('logo-div');
        } 
      } else {

        // if not at the top, then we make it "sticky"
        $(sticky).css('position','fixed').css('top', '0').css('width','100%');
        // also make secondary mobile sticky 
        $(mobileMenu).css('position','fixed').css('top', '100px').css('width', '100%').css('justify-content','flex-end').css('align-items','flex-end').css('background-color','#FFFFFF');

        if(!regex.test(pathname) && $(window).width() > 1008) {
          $('.logo-div').addClass('logo-div-animate').removeClass('logo-div');
        }

      }
    }); // end of scroll event !

    // landing page mobile fixy
//    if(!regex.test(pathname)) {
//      if ($(window).width() <= 1280) {
//        $('.logo-div').css('position', 'static');
//      }
//    }

    // any non landing page, make logo left.
    if(regex.test(pathname)) {
      $('.logo-div').removeClass('logo-div').addClass('logo-div-left');
      $('.logo-div-nonlanding').css('display', 'block');
    }
    
    $('.logo-div').on('transitionend', () => {
      $('.logo-div-animate').removeClass('logo-div-animate').addClass('logo-div-animate-after');
      console.log('end logo div');
    });

  }
}

function applyColorsClick() {
  $(analysesAnchor).click(function() {
    $(analysesAnchor).css('color', db);
  });
}
