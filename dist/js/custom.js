"use strict";
$(document).ready(function() {
    $("select").niceSelect();
    AOS.init({
        once: true,
    });
});
window.addEventListener("load", AOS.refresh);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Counter Up Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$(".counter").counterUp({
    delay: 10,
    time: 1000,
});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Slick Slider Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$(".slick-slider").slick();
if (jQuery(".dev-project-slider").length > 0) {
    $(".dev-project-slider")
        .not(".slick-initialized")
        .slick({
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            prevArrow: $(".dev-project-slider__control-buttons .button--prev"),
            nextArrow: $(".dev-project-slider__control-buttons .button--next"),
            responsive: [{
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
}
if (jQuery(".dev-testimonial-slider").length > 0) {
    $(".dev-testimonial-slider")
        .not(".slick-initialized")
        .slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: $(".dev-testimonial-slider__control-buttons .button--prev"),
            nextArrow: $(".dev-testimonial-slider__control-buttons .button--next"),
        });
}


// /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//       Preloader Activation
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
// $(window).load(function () {
//   setTimeout(function () {
//     $("#loader").fadeOut(500);
//   }, 1000);
//   setTimeout(function () {
//     $("#loader").remove();
//   }, 2000);
// });