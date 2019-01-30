'use strict';

var app = {};

app.flickityFn = function () {
  $('.flickity-container').flickity({
    wrapAround: true,
    autoPlay: 1500,
    prevNextButtons: false,
    pageDots: false
  });
};

app.init = function () {
  app.flickityFn();
};

$(function () {
  app.init();
});