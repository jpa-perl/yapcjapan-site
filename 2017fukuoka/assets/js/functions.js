$(function() {

	// Smooth scroll
	$('a[href^="#top"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 60;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	// Fade Link
	$('a, input[type="submit"], input[type="image"]').hover(function() {
		$(this).stop().fadeTo('slow', 0.5);
	},
	function() {
		$(this).stop().fadeTo('slow', 1);
	});

	// PAGE TOP
	$('#pagetop').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 30) {
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