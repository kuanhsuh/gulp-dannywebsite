(function($) {
  'use strict'; // Start of use strict

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
      if ($('#mainNav').hasClass('navbar-dark')) {
        $('#mainNav').removeClass('navbar-dark');
        $('#mainNav').addClass('navbar-light');
      }
    } else {
      $('#mainNav').removeClass('navbar-shrink');
      if ($('#mainNav').hasClass('navbar-light')) {
        $('#mainNav').removeClass('navbar-light');
        $('#mainNav').addClass('navbar-dark');
      }
    }
  });

  // Navigation scroll
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

})(jQuery); // End of use strict
