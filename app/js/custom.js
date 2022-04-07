(function ($) {
  "use strict";

/*------------------------------------------------------------------
[Table of contents]
----------------------------------------

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
  jQuery.fn.is_exist = function () {
    return this.length;
  }

  var testimonial_slider = $('.testimonial-slider');
  if (testimonial_slider.is_exist()) {
      testimonial_slider.not(".slick-initialized").slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
  }




})(jQuery);





