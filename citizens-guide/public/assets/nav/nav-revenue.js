(function () {
    function getFilename(a) {
        return a.match(/.*\/(.*)$/i).pop();
    }

    function setCurrentPageActive() {
        var filename = getFilename(window.location.pathname);

        var ul = document.getElementsByClassName('site-nav__primary-list'),
            allSecondaryLi = ul.item(0).children,
            liLength = allSecondaryLi.length;

        var i = 0;

        for (i; i < liLength; i++) {
            var current = allSecondaryLi.item(i),
                href = getFilename(current.firstChild.href);

            if (filename === href) {
                current.classList.add('active');
                break;
            }
        }
    }

    function toggleActiveStatus() {
        var element = document.getElementsByClassName('site-nav__primary-list').item(0),
            openClass = 'menu-open';

        if (element.classList) { 
            element.classList.toggle(openClass);
        } else {
            // For IE9
            var classes = element.className.split(" ");
            var i = classes.indexOf(openClass);
        
            if (i >= 0) 
                classes.splice(i, 1);
            else 
                classes.push(openClass);
                element.className = classes.join(" "); 
        }

    }

    function initButton() {
        var button = document.getElementsByClassName('revenue-nav-trigger').item(0);

        button.addEventListener('click', toggleActiveStatus);
    }

    setCurrentPageActive();
    initButton();
})();