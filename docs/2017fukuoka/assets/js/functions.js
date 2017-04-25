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

		// NIWAKA
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300) {
				$('#niwaka').fadeOut('slow');
			} else {
				$('#niwaka').fadeIn();
			}
		});

	} else {

		// HEADER
		$(window).on('load scroll resize', function() {
			if ($(this).scrollTop() > 45) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		});

		// Toggle MENU
		var state = false;
		var scrollpos;
		$('.btn-menu a').on('click', function(){
			if(state == false) {
				scrollpos = $(window).scrollTop();
				$('body').addClass('fixed').css({'top': -scrollpos});
				$(this).addClass('active');
				$('#gnavi').stop().slideDown();
				state = true;
			} else {
				$('body').removeClass('fixed').css({'top': 0});
				window.scrollTo( 0 , scrollpos );
				$(this).removeClass('active');
				$('#gnavi').stop().slideUp();
				state = false;
			}
		});

		// NIWAKA
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#niwaka').fadeOut('slow');
			} else {
				$('#niwaka').fadeIn();
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

	// MouseMove Effect
	var niwaka = document.getElementById('niwaka');
	var parallax = new Parallax(niwaka);
	var hero = document.getElementById('hero');
	var parallax = new Parallax(hero);

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

    $('.navbar-nav li').on('click', function(){
        if (window.innerWidth <= 899) {
            $('#header .header .btn-menu a').click();
        }
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

