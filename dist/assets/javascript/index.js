'use strict';

console.log('Hello world!');

$(document).ready(function () {
  // jQuery Selections
  var scene = $('.hero--scene');

// Pretty simple huh?
  scene.parallax({
    invertX: false,
    limitY: 0
  });


  $('.hidden').each( function(i){

    var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 200;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object ){

      $(this).addClass("animate-content");

    }

  });


  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hidden').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 400;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){

        $(this).addClass("animate-content");

      }

    });

  });


  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.page--body').each( function(i){

      var top_of_object = $(this).offset().top - 72;
      var top_of_window = $(window).scrollTop();

      /* If the object is completely visible in the window, fade it it */
      if( top_of_object < top_of_window ){

        //$(this).addClass("");

        $(".header--main").addClass("logo-dark");

        console.log("This is hit the top")
      } else {
        $(".header--main").removeClass("logo-dark");
      }

    });

  });


});



//# sourceMappingURL=index.js.map
