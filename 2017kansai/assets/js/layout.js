(function () {
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
    }

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
      return true;
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
  var windowSize = window.innerWidth ? window.innerWidth: $(window).width();
  $(window).resize(function() {
    var ReWindowSize = window.innerWidth ? window.innerWidth: $(window).width();
    if (windowSize != ReWindowSize) {
        location.reload();
    }
  });
})();
