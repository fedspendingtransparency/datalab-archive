(function accordion() {
    function toggle() {
        var openClass = 'accordion--open';

        this.classList.toggle(openClass);
    }

    function createButton() {
        var button = document.createElement('button'),
            plus = document.createElement('i'),
            minus = document.createElement('i');

        plus.classList.add('fas');
        plus.classList.add('fa-plus');
        plus.classList.add('accordion__plus');
        minus.classList.add('fas');
        minus.classList.add('fa-minus');
        minus.classList.add('accordion__minus');

        button.classList.add('accordion__toggle');
        button.appendChild(plus);
        button.appendChild(minus);

        return button;
    }

    function addTitleAndTrigger(block, customTitle) {
        var title = customTitle || 'Click for more',
            h1 = document.createElement('h1'),
            button = createButton();

        h1.innerHTML = title;
        h1.classList.add('accordion__heading');
        h1.appendChild(button);
        h1.addEventListener('click', toggle.bind(block));

        block.appendChild(h1);
    }

    function createCopy(copyHTML) {
        var copyBlock = document.createElement('div');

        copyBlock.classList.add('accordion__content');
        copyBlock.innerHTML = copyHTML;

        return copyBlock;
    }

    function init(block) {
        var content = block.getElementsByClassName('accordion__content').item(0)
        copyHTML = content.innerHTML,
            heading = block.getElementsByTagName('h1').item(0)
        title = heading.innerHTML;

        heading.remove();
        content.remove();

        // block.innerHTML = '';

        addTitleAndTrigger(block, title);

        block.appendChild(createCopy(copyHTML));
    }

    var instances = document.getElementsByClassName('accordion');

    for (var x = 0; x < instances.length; x++) {
        init(instances[x]);
    }
})();
