$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})



// Menú fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
   
    $('.navbar-fixed-js').addClass('fixed-color');
    $('.nav-link').addClass('link-color');
    // $('.navbar-fixed-js').removeClasss('top');
    // $("#iso").removeClass('img-size').attr('src', 'assets/img/logo_black.png').removeClass('scroll-up');


  } else {
    $('.nav-link').removeClass('link-color');
    $('.navbar-fixed-js').removeClass('fixed-color');
    // $('.nav-top__header').removeClass('nav-top__header--detele');
    // $('.navbar').addClass('top');
    // $("#iso").addClass('img-size').attr('src', 'assets/img/logo.png').removeClass('scroll-up');

    // $('.navbar-fixed-js').addClass('top');
    // $('.navbar-fixed-js').removeClasss('top');
  }
});



    


( function( $ ) {
  const $document = $(document);
  
  const initTyped = (selector, options) => {
   let settings = options;
   if (!settings) {
    settings = {
     stringsElement: '#typed-content',
     typeSpeed: 60,
     backSpeed: 40,
     loop: true,
     showCursor: true
    };
   }
   
   let typed = new Typed(selector, settings);
  }
  
  $document.ready(() => {
   console.log('ready');
   
   initTyped('.js-typed');
  });
 })(jQuery);
