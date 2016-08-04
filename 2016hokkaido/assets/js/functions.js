function include(scriptUrl) {
	document.write('<script src="' + scriptUrl + '"></script>');
}

include('./assets/js/bootstrap.min.js');
include('./assets/js/jquery.kerning.min.js');
include('./assets/js/jquery.mmenu.all.min.js');

$(window).load(function() {

	// IMAGE REPLACEMENT
	ImageReplacement();

});


$(function() {
	if (window.matchMedia('screen and (min-width: 900px)').matches) {

		// HEADER
		$(window).on('load scroll resize', function() {
			if ($(this).scrollTop() > 50) {
				$('body').addClass('fixed');
				$('#gnavi').addClass('fixed');
			} else {
				$('body').removeClass('fixed');
				$('#gnavi').removeClass('fixed');
			}
		});
        // $('#facebook-news').removeAttr('width').attr('width', '750');

	} else {

		// MENU
		$('nav#menu').mmenu({
			offCanvas: {
				position: 'left'
			},
			navbar: {
				title: "YAPC::Hokkaido"
			},
//			navbars: {
//				position: "bottom",
//				content: [
//				   '',
//				]
//			},
			extensions: ['pagedim-black', 'pageshadow', 'theme-white'],
//			'autoHeight': true,
			dragOpen: {
				open: 'true'
			}
		});
        // $('#facebook-news').removeAttr('width').attr('width', '300');
	}
});

$(document).ready(function() {

	// Smooth scroll
	$('a[href*="#top"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var speed = 300;
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			var position = target.offset().top - 100;
			if (target.length) {
				$('html, body').animate({ scrollTop: position }, speed, 'swing');
				return false;
			}
		}
	});

	// Fade Link
	$('a, input[type="submit"], input[type="image"]').hover(function() {
		$(this).stop().fadeTo('slow', 0.5);
	},
	function() {
		$(this).stop().fadeTo('slow', 1);
	});
	$('a.nofade').hover(function() {
		$(this).stop();
	});

	// LIST
	$('li:last-child').addClass('last');
	$('ul li, ol li').removeClass('even').removeClass('odd');
	$('ul, ol').each(function() {
		$('li:even', $(this)).addClass('even');
		$('li:odd', $(this)).addClass('odd');
	});

	// PAGE TOP
	$('#pagetop').hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#pagetop').fadeIn();
		} else {
			$('#pagetop').fadeOut();
		}
	});

	// HEADER
	$(window).on('load scroll resize', function() {
		if ($(this).scrollTop() > 1) {
			$('#lead h1').css({ 'z-index' : '1' });
		} else {
			$('#lead h1').css({ 'z-index' : '3' });
		}
	});

	// Google Map
	$('.iframe').click(function(){
		$('.iframe iframe').css('pointer-events', 'auto');
	});

	// KERNING
	$('h3.title').kerning("./assets/js/kerning-data.json");
	$('.mm-navbar a.mm-title').kerning("./assets/js/kerning-data.json");

});

// RELAYOUT
var timer = false;
var windowSize = window.innerWidth ? window.innerWidth: $(window).width();
$(window).resize(function() {

	var ReWindowSize = window.innerWidth ? window.innerWidth: $(window).width();

	if (windowSize >= 900) {
	}
	if (windowSize <= 899) {
	}
	if (timer !== false) {
		clearTimeout(timer);
	}
	if (windowSize != ReWindowSize) {
		location.href = location.href;
	}

});

// IMAGE REPLACEMENT
function ImageReplacement() {
	var WIDTH = $(window).width();
	var BREAKPOINT = '899';
	if ( WIDTH < BREAKPOINT ) {
		$('.ImageReplacement').each(function() {
			$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_sp$2"));
		});
	} else {
		$('.ImageReplacement').each(function() {
			$(this).attr("src",$(this).attr("src").replace(/^(.+)_sp(\.[a-z]+)$/, "$1$2"));
		});
	}
}
