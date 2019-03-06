// jrk

const headerContainers = {};

function setContainers() {
  headerContainers.header = $('#header');
  headerContainers.headerLogo = $('.header-logo');
}

function fixNav(y) {
  const max = 29;
  let yOffset = max - y;
  if (y > max) {
    yOffset = 0;
  }
  headerContainers.header.css('top', yOffset + 'px');

}

function moveLogo(y) {
  const max = 200;
  let p = 50;
  let steps = p / max; // .25 
  let leftPos = (max - y) * steps;

  let m = 149;
  let mSteps = m / max;
  let leftMargin = 0 - (max - y) * mSteps;

  leftPos = leftPos < 0 ? 0 : leftPos;
  leftMargin = leftMargin > 0 ? 0 : leftMargin;

  headerContainers.headerLogo.css('left', leftPos + '%').css('margin-left', leftMargin + 'px');

}

function setHeaderOpacity(y) {
  const low = 250;
  const high = 300;
  const range = high - low;

  let opacity = 1;
  let yOffset = y - low;

  if (y >= low) {
    opacity = 1 - (yOffset / range);
    opacity = opacity < 0 ? 0 : opacity;
  }

  headerContainers.header.css('opacity', opacity);
}

function repositionHeaderItems() {
  setContainers();
  
  window.addEventListener('scroll', function() {
    let y = window.scrollY;
    fixNav(y);
    moveLogo(y);
    setHeaderOpacity(y);
  });
  
}

$(repositionHeaderItems);
