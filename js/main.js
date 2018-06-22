---
---

// Start polyfills for IE

if (!Object.entries) {
    Object.entries = function( obj ){
      var ownProps = Object.keys( obj ),
          i = ownProps.length,
          resArray = new Array(i); // preallocate the Array
      while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
  
      return resArray;
    };
  }
  
if (!Object.values) {
    Object.values = function(obj) {
        var res = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                res.push(obj[i]);
            }
        }
        return res;
    }
}

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return kValue.
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
            }
            // e. Increase k by 1.
            k++;
        }

        // 7. Return undefined.
        return undefined;
        },
        configurable: true,
        writable: true
    });
    }

// End polyfills for IE

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
    var item = document.querySelector('.info-banner');

    if (item != null) {
        item.style.display = getCookie('is-info-banner-visible') == null ? 'block' : 'none';
    }
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
