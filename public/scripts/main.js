'use strict';

var app = {};

// app.smoothScroll starts

app.smoothScroll = function () {
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
};

// app.smoothScroll ends

// app.flickityFn starts

app.flickityFn = function () {
  $('.flickity-container').flickity({
    wrapAround: true,
    autoPlay: 1500,
    prevNextButtons: false,
    pageDots: false
  });
};

// app.flickityFn ends

// app.burgAnim starts

app.burgAnim = function () {
  $('.hamburger-menu').click(function () {
    $('.hamburger-menu').toggleClass('active');
    $('.responsive-nav').toggleClass('active-nav');
  });
};

// app.burgAnim ends

// app.navClose starts

app.navClose = function () {
  $('.nav-li').click(function () {
    $('.hamburger-menu').toggleClass('active');
    $('.responsive-nav').toggleClass('active-nav');
  });
};

// app.navClose ends


app.init = function () {
  app.smoothScroll();
  app.flickityFn();
  app.burgAnim();
  app.navClose();
};

$(function () {
  AOS.init();
  app.init();
});