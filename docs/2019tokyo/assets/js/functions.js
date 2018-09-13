$(window).load(function() {

	// IMAGE REPLACEMENT
	ImageReplacement();

});

$(document).ready(function() {

	// Smooth scroll
	$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 45;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	// FADE LINK
	$('a, input[type="submit"], input[type="image"]').hover(function() {
		$(this).stop().fadeTo('slow', 0.5);
	},
	function() {
		$(this).stop().fadeTo('slow', 1);
	});

	// PAGE TOP
	$('#pagetop').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#pagetop').fadeIn();
		} else {
			$('#pagetop').fadeOut();
		}
	});

});

$(function() {

	// MAIN VISUAL
	$(window).on('load resize', function() {
		WindowHeight = $(window).height();
		$('#mainvisual, #footer').css('height', WindowHeight + 'px');
	});

	// FADE IN
	$('#mainvisual').css({opacity: '0'});
	setTimeout(function(){
		$('#mainvisual').stop().animate({opacity:'1'}, 1000);
	},1000);
	$('#footer').css({opacity: '0'});
	setTimeout(function(){
		$('#footer').stop().animate({opacity:'1'}, 1000);
	},2000);

});

// RELAYOUT
var timer = false;
var windowSize = window.innerWidth ? window.innerWidth: $(window).width();
$(window).resize(function() {
	var ReWindowSize = window.innerWidth ? window.innerWidth: $(window).width();
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


