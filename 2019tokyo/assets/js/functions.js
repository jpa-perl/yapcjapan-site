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

	} else {

		// MAIN VISUAL
		$(window).on('load resize', function() {
			var windowheight = $(window).height();
			$('#mainvisual .inner, #mainvisual h1, #mainvisual h2, #mainvisual figure').css('height', windowheight + 'px');
		});

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
		$('.btn-menu a').on('click', function() {
			if(state == false) {
				scrollpos = $(window).scrollTop();
				$('body').addClass('open').css({'top': -scrollpos});
				$('#header').addClass('open');
				$(this).addClass('active');
				$('#gnavi').stop().slideDown('fast');
				state = true;
			} else {
				$('body').removeClass('open').css({'top': 0});
				window.scrollTo( 0 , scrollpos );
				$('#header').removeClass('open');
				$(this).removeClass('active');
				$('#gnavi').stop().slideUp();
				state = false;
			}
		});
		$('#gnavi a').click(function() {
			$('body').removeClass('open').css({'top': 0});
			var target = $(this.hash);
			var position = target.offset().top - 0;
			window.scrollTo( 0 , position );
			$('#header').removeClass('open');
			$('.btn-menu a').removeClass('active');
			$('#gnavi').hide();
//			$('#gnavi').stop().slideUp();
			state = false;
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

	// ANCHOR SCROLL
	$('a').click(function() {
		var target = $(this.hash);
		var position = target.offset().top - 80;
		$('body,html').animate({scrollTop: position }, 300, 'swing');
		return false;
	});
	var anchor = location.hash;
	if (anchor) {
		var position = $(anchor).offset().top - 80;
		$(window).load(function() {
			setTimeout(function() {
				$('html,body').animate({scrollTop: $('html,body').offset().top}, 0);
				return false;
			},0);
			setTimeout(function() {
				$('body,html').animate({scrollTop: position }, 300, 'swing');
				return false;
			},100);
		});
	}

	// MouseMove Effect
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);

	// Section Title
	$('h3.title').removeClass('active');
	$(window).scroll(function() {
		var windowtop = $(window).scrollTop() - 200;
		var windowheight = $(window).height();
		$('h3.title').each(function() {
			var objectposition = $(this).offset().top;
			if (windowtop > objectposition - windowheight) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
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

