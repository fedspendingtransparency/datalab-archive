// Jack Killilea (jrk) <Killilea_Jack@bah.com>
// Header.js
// Sticky Header and Extra Magic for New Homepage!
// using jquery 1.11.3! (updating, if bugged then revert!)

(function() {

  let headerHeight;
  let availableNav = [];
  let subNavHideTimeout;
  const headerContainers = {};
  const mobileContainers = {};
  const desktopMin = 956;
  const regex = new RegExp("[a-zA-Z]");
  const pathname = window.location.pathname;
  let logoMarginOffset = 149;

  // Mini-Navs
  const analysesNav = '.secondaryNavAnalyses';
  const resourcesNav = '.secondaryNavResources';
  const ffgNav = '.secondaryNavFFG';

  // Main Header Li's for hover
  const analysesText = '.analysesText';
  const resourcesText = '.resourcesText';
  const ffgText = '.ffgText';

  // Mobile section
  //const mobileMenu = '#mobileSection';
  //const analysesAnchor = '#analysesAnchor';
  //const resourcesAnchor = '#resourcesAnchor';
  //const ffgAnchor = '#ffgAnchor';
  //const mobileAnalyses = '#mobileAnalyses';
  //const mobileResources = '#mobileResources';
  //const mobileFFG = '#mobileFFG';

  function setMobileContainers() {
    mobileContainers.menu = $('#mobileSection');
    mobileContainers.burgerMenu = $('#burger-navbar-toggle');
    mobileContainers.analysesAnchor = $('#analysesAnchor');
    mobileContainers.resourcesAnchor = $('#resourcesAnchor');
    mobileContainers.ffgAnchor = $('#ffgAnchor');
    mobileContainers.mobileAnalyses = $('#mobileAnalyses');
    mobileContainers.mobileResources = $('#mobileResources');
    mobileContainers.mobileFFG = $('#mobileFFG');
  }

  function setContainers() {
    headerContainers.header = $('#header');
    headerContainers.headerLogo = $('.header-logo');
    headerContainers.masterLogo = $('#master-logo');
    headerContainers.oneTag = $('#one-line-tag');
    headerContainers.twoTag = $('#two-line-tag');
    headerContainers.navLi = $('.navListItem');
    headerContainers.desktopNavItem = $('.desktop-nav-item');
    headerContainers.dropdown = $('.dropdown-ul-section');

  }

  function fixNav(y, width) {
    const max = 29;
    let yOffset = max - y;
    if (y > max) {
      yOffset = 0;
    }
    headerContainers.header.css('top', yOffset + 'px');

  }

  function forceLogoLeft() {
    headerContainers.headerLogo.css('left', '0%').css('margin-left', '0px');
  }

  function moveLogo(y, width) {
    const max = 200;
    let p = 50;
    let steps = p / max; // .25 
    let leftPos = (max - y) * steps;

    let mSteps = -logoMarginOffset / max;

    let leftMargin = 0 - (max - y) * mSteps;

    if (width > desktopMin && width < 1350) {
      forceLogoLeft();
      return;
    }

    if (width < desktopMin) {
      headerContainers.headerLogo.css('left', '50%').css('margin-left', logoMarginOffset + 'px');
      return;
    }

    leftPos = leftPos < 0 ? 0 : leftPos;
    leftMargin = leftMargin > 0 ? 0 : leftMargin;

    headerContainers.headerLogo.css('left', leftPos + '%').css('margin-left', leftMargin + 'px');

    transitionTags(max, y);
  }

  function transitionTags(scrollMax, y) {
    const halfMax = scrollMax / 2;
    const min = halfMax - 10;
    const max = halfMax + 10;
    const range = max - min;
    let steps = 1 / range;
    let ratio;

    if (y >= min && y <= max)  {
      ratio = (y - min) * steps;
      headerContainers.twoTag.css('display', 'inline-block').css('opacity', ratio);
      headerContainers.oneTag.css('opacity', 1 - ratio).css('transform', 'scaleY('+1 - ratio+')').css('display', 'inline-block');

    } else if (y < min) {
      headerContainers.oneTag.css('opacity', '1').css('transform', 'scaleY(1)').css('display', 'inline-block');
      headerContainers.twoTag.css('opacity', '0').css('display', 'none');
    } else {
      headerContainers.oneTag.css('opacity', '0').css('transform', 'scaleY(0)').css('display', 'none');
      headerContainers.twoTag.css('opacity', '1').css('display', 'inline-block');
    }

  }


  function setHeaderOpacity(y, width) {
    const low = 250;
    const high = 300;
    const range = high - low;

    let opacity = 1;
    let yOffset = y - low;
    
    if (y >= low && width >= desktopMin) {
      opacity = 1 - (yOffset / range);
      opacity = opacity < 0 ? 0 : opacity;
    }

    headerContainers.header.css('opacity', opacity);
  }

  function setMobileBurger() {
    $('#burger-navbar-toggle').click(function() {
      mobileContainers.menu.toggle('slow');
    });
  }

  function displaySubNav(event, leave) {
    let targetElement;
    const targetId = $(event.target).data('target');
    if (!targetId) {
      targetElement = $(event.target);
    } else {
      targetElement = $('#subnav-' + targetId);
    }
    
    if (leave) {
      targetElement.removeClass('active');
      return;
    } 
    targetElement.addClass('active');
  }

  function showThisNav(triggerId) {
    clearTimeout(subNavHideTimeout);
    if (!triggerId) {
      return;
    }
    availableNav.forEach( id => {
      const targetSubNav = $('#subnav-' + id);
      if (id == triggerId) {
        targetSubNav.addClass('active');
      } else {
        targetSubNav.removeClass('active');
      }
    });
  }


  function manageSubNav(e) {
    const triggerId = $(this).data('target');

    if (e.type === 'mouseover') {
      showThisNav(triggerId);
      // show my nav!
    } else {
      subNavHideTimeout = setTimeout(killAllSubNavs, 600);
      // kill everything! 
    }
  }

  function killAllSubNavs() {
    headerContainers.dropdown.removeClass('active');
  }

  function listAvailableNav() {
    headerContainers.desktopNavItem.each(function(){
      availableNav.push($(this).data('target'));
    });
  }

  function setDropdownHeaderSection() {

    headerContainers.navLi.on('mouseover mouseleave', manageSubNav);
    headerContainers.dropdown.on('mouseover mouseleave', manageSubNav);

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

  }

  function repositionHeaderItems(shouldMoveLogo) {

    window.addEventListener('scroll', function() {
      let y = window.scrollY;
      let width = window.innerWidth;
      fixNav(y, width);
      if(shouldMoveLogo) {
        moveLogo(y, width);
      }

    });

    window.addEventListener('resize', setInitialLogoPosition);
  }

  function setHeaderHeight() {
    headerHeight = headerContainers.header.outerHeight();
    console.log(headerHeight);
  }

  function adaptToHeaderHeight() {
    $('#main').css('margin-top', headerHeight + 'px');
  }

  function setInitialLogoPosition() {
    let width = window.innerWidth;
    if (width > desktopMin && width < 1350) {
      forceLogoLeft();
    } else {
      logoMarginOffset = 0 - (headerContainers.masterLogo.width() / 2);
      headerContainers.headerLogo.css('margin-left', logoMarginOffset + 'px').css('left', '50%');
    }

    headerContainers.headerLogo.removeClass('header-logo--init');
  }

  $(function() {

    setContainers();
    setHeaderHeight();
    adaptToHeaderHeight();
    setMobileContainers();
    listAvailableNav();
    setDropdownHeaderSection();
    setMobileBurger();

    window.addEventListener('resize', function(){
      setHeaderHeight();
      adaptToHeaderHeight();
    });


    if ($('body').hasClass('landing')) {
      repositionHeaderItems('moveLogo');
      setInitialLogoPosition();
    } else {
      repositionHeaderItems();
    }
  });

})(); 

