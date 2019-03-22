(function hwcta() {
    function toggle() {
        var element = document.getElementsByClassName('hwcta').item(0),
            openClass = 'hwcta--open';
    
        element.classList.toggle(openClass);
    }
    
    function createButton() {
        var button = document.createElement('button'),
            plus = document.createElement('i'),
            minus = document.createElement('i');

        plus.classList.add('fas');
        plus.classList.add('fa-plus');
        plus.classList.add('hwcta__plus');
        minus.classList.add('fas');
        minus.classList.add('fa-minus');
        minus.classList.add('hwcta__minus');

        button.classList.add('hwcta__toggle');
        button.appendChild(plus);
        button.appendChild(minus);

        return button;
    }

    function addTitleAndTrigger(block, customTitle) {
        var title = customTitle || 'Data Sources and Methodology',
            h1 = document.createElement('h1'),
            button = createButton();

        h1.innerHTML = title;
        h1.classList.add('hwcta__heading');
        h1.appendChild(button);
        h1.addEventListener('click', toggle);

        block.appendChild(h1);
    }

    function createCopy(copyHTML) {
        var copyBlock = document.createElement('div');

        copyBlock.classList.add('hwcta__copy');
        copyBlock.innerHTML = copyHTML;

        return copyBlock;
    }

    function init() {
        var block = document.getElementsByClassName('hwcta').item(0),
            copyHTML = block.innerHTML;

        block.innerHTML = '';

        addTitleAndTrigger(block);

        block.appendChild(createCopy(copyHTML));
    }

    init();
})();
