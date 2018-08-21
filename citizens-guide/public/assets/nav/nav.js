(function () {
  function getFilename(a) {
    return a.match(/.*\/(.*)$/i).pop();
  }

  var filename = getFilename(window.location.pathname),
    search = window.location.search;

  if (search) {
    filename = filename + search;
  }

  var ul = document.getElementsByClassName('site-nav__secondary-list'),
    allSecondaryLi = ul.item(0).children,
    liLength = allSecondaryLi.length;

  var i = 0;

  for (i; i < liLength; i++) {
    var current = allSecondaryLi.item(i),
      href = getFilename(current.firstChild.href);

    if (href === filename) {
      current.classList.add('active');
      break;
    }
  }
})();