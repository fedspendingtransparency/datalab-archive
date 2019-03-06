// jrk
function fixNav(y) {
  const max = 29;
  let yOffset = max - y;
  if (y > max) {
    yOffset = 0;
  }
  $('#header').css('top', yOffset + 'px');

}

function moveLogo(y) {
  const max = 200;
  let p = 50;
  let steps = p / max; // .25 
  let leftPos = (max - y) * steps;
//  console.log(y, leftPos);

  let m = 149;
  let mSteps = m / max;
  let leftMargin = 0 - (max - y) * mSteps;

  leftPos = leftPos < 0 ? 0 : leftPos;
  leftMargin = leftMargin > 0 ? 0 : leftMargin;

  console.log(y, leftPos, leftMargin);

  $('.header-logo').css('left', leftPos + '%').css('margin-left', leftMargin + 'px');


}

function repositionHeaderItems() {
  
  window.addEventListener('scroll', function() {
    let y = window.scrollY;
    fixNav(y);
    moveLogo(y);
  });
  
}


$(repositionHeaderItems);
