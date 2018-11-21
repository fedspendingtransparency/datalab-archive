(function(){
    function goScroll(step){
        window.scroll(0, window.pageYOffset + step);
    }
    
    function onLinkClick(e) {
        var targetSelector = e.srcElement.getAttribute("href"),
            targetElementOffset = document.querySelector(targetSelector).offsetTop,
            step = 45,
            difference = targetElementOffset - window.pageYOffset,
            steps = Math.floor(Math.abs(difference)/step),
            remainder = difference%step;
            i = 0;
        
            e.preventDefault();

        if (difference < 0) {
            step = 0 - step;
        }

        goScroll(remainder);

        var s = setInterval(function(){
            if (i === steps) {
                clearInterval(s);
            } else {
                i += 1;
                goScroll(step)
            }
        }, 10)
    }
    
    function attachHandlers() {
        document.querySelectorAll('.scroll-to').forEach(function(element){
            element.addEventListener("click", onLinkClick);
        });
    }

    attachHandlers();
})();