(function () {
    function getFilename(a) {
        return a.match(/.*\/(.*)$/i).pop();
    }

    function setCurrentPageActive() {
        var filename = getFilename(window.location.pathname);

        filename = filename || 'index.html';

        var ul = document.getElementsByClassName('chapter-nav__primary-list');

        if (!ul.item(0)) {
            return;
        }

        var allSecondaryLi = ul.item(0).children,
            liLength = allSecondaryLi.length;

        if(filename === 'index.html'){
            allSecondaryLi.item(1).classList.add('active');
            return true;
        }

        var i = 1;


        for (i; i < liLength; i++) {
            var current = allSecondaryLi.item(i),
                href = getFilename(current.firstChild.href);

            if (filename === href) {
                current.classList.add('active');
                break;
            }
        }

        return true;
    }

    function toggleActiveStatus() {
        var element = document.getElementsByClassName('chapter-nav').item(0),
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
        var button = document.getElementsByClassName('chapter-nav-trigger').item(0);

        button.addEventListener('click', toggleActiveStatus);
    }

    if (setCurrentPageActive()) {
        initButton();
    }
})();