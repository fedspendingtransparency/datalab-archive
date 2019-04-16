// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                if (this.parentNode !== null)
                    this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

(function accordion() {
    function toggle() {
        var openClass = 'accordion--open';

        this.classList.toggle(openClass);
    }

    function createButton() {
        var button = document.createElement('button'),
            plus = document.createElement('i'),
            minus = document.createElement('i'),
            srText = document.createElement('span');

        plus.classList.add('fas');
        plus.classList.add('fa-plus');
        plus.classList.add('accordion__plus');
        minus.classList.add('fas');
        minus.classList.add('fa-minus');
        minus.classList.add('accordion__minus');
        srText.classList.add('sr-only');
        srText.textContent = "toggle contents";

        button.classList.add('accordion__toggle');
        button.appendChild(plus);
        button.appendChild(minus);
        button.appendChild(srText);

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
