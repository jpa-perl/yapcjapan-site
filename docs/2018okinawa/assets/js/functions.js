$(window).load(function() {

	// IMAGE REPLACEMENT
	ImageReplacement();

});

$(function() {
	if (window.matchMedia('screen and (min-width: 900px)').matches) {

		// HEADER
		$(window).on('load scroll resize', function() {
			if ($(this).scrollTop() > 100) {
				$('body').addClass('fixed');
				$('#gnavi').addClass('fixed');
				$('#hero').addClass('fixed');
			} else {
				$('body').removeClass('fixed');
				$('#gnavi').removeClass('fixed');
				$('#hero').removeClass('fixed');
			}
		});

	} else {

		// HEADER
		$(window).on('load scroll resize', function() {
			if ($(this).scrollTop() > 45) {
				$('body').addClass('fixed');
				$('#header').addClass('fixed');
				$('#hero').addClass('fixed');
			} else {
				$('body').removeClass('fixed');
				$('#header').removeClass('fixed');
				$('#hero').removeClass('fixed');
			}
		});

		// Toggle MENU
		var state = false;
		var scrollpos;
		$('.btn-menu a').on('click', function(){
			if(state == false) {
				$('#gnavi').stop().slideDown();
				$(this).addClass('active');
				$('#header').addClass('open');
				$('#hero').addClass('open');
				scrollpos = $(window).scrollTop();
				$('body').addClass('open').css({'top': -scrollpos});
				state = true;
			} else {
				$('#gnavi').stop().slideUp();
				$(this).removeClass('active');
				$('#header').removeClass('open');
				$('#hero').removeClass('open');
				$('body').removeClass('open').css({'top': 0});
				window.scrollTo( 0 , scrollpos );
				state = false;
			}
		});

	}
});

$(document).ready(function() {

	// Smooth scroll
	$('a[href*="#top"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var speed = 300;
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			var position = target.offset().top - 0;
			if (target.length) {
				$('html, body').animate({ scrollTop: position }, speed, 'swing');
				return false;
			}
		}
	});

	// Animate on Scroll
	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
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

	// Google Map
	$('.iframe').click(function(){
		$('.iframe iframe').css('pointer-events', 'auto');
	});

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

