function setCookie(name, value, days) {
	var expires = "";
	
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
	}
	
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	
    for (var i = 0;i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	
    return null;
}

function closeInfoBanner() {
	document.querySelector('.info-banner').style.display = 'none';

	setCookie('is-info-banner-visible', 'no', 7);
}

function handleInfoBarVisibility() {
	document.querySelector('.info-banner').style.display = getCookie('is-info-banner-visible') == null ? 'block' : 'none';
}

$(".share-viz-button").click(function(){
	$(this).find('span.popuptext.right').toggleClass('show');
});

(function($) {
	handleInfoBarVisibility();

	$(function() {
		$('.scrolly').scrolly({ speed: 1500, offset: 0 });
	});

	window.onscroll = function() {
		var scrollElement = document.getElementById("return-to-top");

		if (scrollElement == null) { return; }

		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			scrollElement.style.display = "block";
		} else {
			scrollElement.style.display = "none";
		}
	}

	$('#return-to-top').click(function () {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	});

})(jQuery);
