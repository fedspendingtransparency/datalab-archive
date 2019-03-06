// jrk

const headerContainers = {};
const desktopMin = 956;
let logoMarginOffset = 149;

function setContainers() {
  headerContainers.header = $('#header');
  headerContainers.headerLogo = $('.header-logo');
  headerContainers.masterLogo = $('#master-logo');
  headerContainers.oneTag = $('#one-line-tag');
  headerContainers.twoTag = $('#two-line-tag');
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
    headerContainers.oneTag.css('opacity', 1 - ratio).css('transform', 'scaleY('+1 - ratio+')');

  } else if (y < min) {
    headerContainers.oneTag.css('opacity', '1').css('transform', 'scaleY(1)');
    headerContainers.twoTag.css('opacity', '0').css('display', 'none');
  } else {
    headerContainers.oneTag.css('opacity', '0').css('transform', 'scaleY(0)');
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

function repositionHeaderItems() {
  setContainers();
  
  window.addEventListener('scroll', function() {
    let y = window.scrollY;
    let width = window.innerWidth;
    fixNav(y, width);
    moveLogo(y, width);
    setHeaderOpacity(y, width);
  });

  window.addEventListener('resize', setInitialLogoPosition);
  
    
}

function setInitialLogoPosition() {
  let width = window.innerWidth;
  if (width > desktopMin && width < 1350) {
    forceLogoLeft();
  } else {
    logoMarginOffset = 0 - (headerContainers.masterLogo.width() / 2);
    headerContainers.headerLogo.css('margin-left', logoMarginOffset + 'px').css('left', '50%');
  }
}

$(repositionHeaderItems);
$(setInitialLogoPosition);
