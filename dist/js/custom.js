(function($) {
    "use strict";

    /*------------------------------------------------------------------
    [Table of contents]
    ----------------------------------------

    -------------------------------------------------------------------*/

    /*--------------------------------------------------------------
    CUSTOM PRE DEFINE FUNCTION
    ------------------------------------------------------------*/
    jQuery.fn.is_exist = function() {
        return this.length;
    }

    var testimonial_slider = $('.flc-testimonial-slider');
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
    var client_slider = $('.flc-client-slider');
    if (client_slider.is_exist()) {
        client_slider.not(".slick-initialized").slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesToShow: 6,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
    }



})(jQuery);