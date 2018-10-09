function toggle() {
    var element = document.getElementsByClassName('hwcta').item(0),
        openClass = 'hwcta--open';

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

(function init() {
    var trigger = document.getElementsByClassName('hwcta__heading').item(0);

    trigger.addEventListener('click', toggle);
})()