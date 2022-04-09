(function($) {
    "use strict";

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
    if (jQuery(".flc-testimonial-slider").length > 0) {
        $(".flc-testimonial-slider")
            .not(".slick-initialized")
            .slick({
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
    if (jQuery(".flc-client-slider").length > 0) {
        $(".flc-client-slider")
            .not(".slick-initialized")
            .slick({
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