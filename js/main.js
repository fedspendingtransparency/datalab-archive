function setCookie(name, value, days) {
    let expires = "";

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
}

function getURLParams() {
    let match;
    const pl = /\+/g;
    const search = /([^&=]+)=?([^&]*)/g;
    const decode = (s) => { return decodeURIComponent(s.replace(pl, " ")); };
    const query = window.location.search.substring(1);
  
    let urlParams = {};
    while (match = search.exec(query)) {
      urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
}

function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
        }).join('&');
}

function closeInfoBanner() {
    document.querySelector('.info-banner').style.display = 'none';

    setCookie('is-info-banner-visible', 'no', 7);
}

function handleInfoBarVisibility() {
    document.querySelector('.info-banner').style.display = getCookie('is-info-banner-visible') == null ? 'block' : 'none';
}

$(".share-viz-button").click(function() {
    $(this).find('span.popuptext.right').toggleClass('show');
});

(function debugOnLoad($) {
    handleInfoBarVisibility();

    $(() => {
        $('.scrolly').scrolly({ speed: 1500, offset: 0 });
    });

    window.onscroll = function debugOnScroll() {
        const scrollElement = document.getElementById("return-to-top");

        if (scrollElement == null) {
            return;
        }

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollElement.style.display = "block";
        }
        else {
            scrollElement.style.display = "none";
        }
    };

    $('#return-to-top').click(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
}(jQuery));
