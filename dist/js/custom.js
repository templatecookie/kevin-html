(function($) {
    "use strict";
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        Nice Select Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $("select").niceSelect();
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      AOS Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init({
        once: true,
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
        datepicker Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('#datepicker').datepicker();
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
    if (jQuery(".doctor-work-slider").length > 0) {
        $(".doctor-work-slider")
            .not(".slick-initialized")
            .slick({
                dots: false,
                infinite: true,
                speed: 800,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: $(".doctor-work-slider__control-buttons .button--prev"),
                nextArrow: $(".doctor-work-slider__control-buttons .button--next"),
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
    if (jQuery(".doctor-success-slider").length > 0) {
        $(".doctor-success-slider")
            .not(".slick-initialized")
            .slick({
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: $(".doctor-success-slider__control-buttons .button--prev"),
                nextArrow: $(".doctor-success-slider__control-buttons .button--next"),
                responsive: [{
                        breakpoint: 1399,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
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
    if (jQuery(".doctor-testimonial-slider").length > 0) {
        $(".doctor-testimonial-slider")
            .not(".slick-initialized")
            .slick({
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
            });
    }
    if (jQuery(".doctor-event-slider").length > 0) {
        $(".doctor-event-slider")
            .not(".slick-initialized")
            .slick({
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: $(".doctor-event-slider__control-buttons .button--prev"),
                nextArrow: $(".doctor-event-slider__control-buttons .button--next"),
                responsive: [{
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });
    }
    if (jQuery(".law-testimonial-slider").length > 0) {
        $(".law-testimonial-slider")
            .not(".slick-initialized")
            .slick({
                dots: false,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: $(".law-testimonial-slider__control-buttons .button--prev"),
                nextArrow: $(".law-testimonial-slider__control-buttons .button--next"),
            });
    }
    if (jQuery(".ceo-testimonial-slider").length > 0) {
        $(".ceo-testimonial-slider")
            .not(".slick-initialized")
            .slick({
                dots: true,
                fade: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            });
    }
    if (jQuery(".pd-quotation-slider").length > 0) {
        $(".pd-quotation-slider")
            .not(".slick-initialized")
            .slick({
                dots: false,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: $(".pd-quotation-slider__control-buttons .button--prev"),
                nextArrow: $(".pd-quotation-slider__control-buttons .button--next"),
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
                prevArrow: $(".flc-testimonial-slider__control-buttons .button--prev"),
                nextArrow: $(".flc-testimonial-slider__control-buttons .button--next"),
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
    if (jQuery(".ceo-team--slider").length > 0) {
        $(".ceo-team--slider")
            .not(".slick-initialized")
            .slick({
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: $(".ceo-team--slider__control-buttons .button--prev"),
                nextArrow: $(".ceo-team--slider__control-buttons .button--next"),
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
                            arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 420,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });
    }
    if (jQuery(".photographer-service--half-fluid").length > 0) {
        $(".photographer-service--half-fluid").slick({
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
        });
    }
    $(window).load(function() {
        if (this.innerWidth > 600) {
            const offestContainer = $(".container").offset().left;
            $(".photographer-service--half-fluid").css("margin-left", offestContainer);
        } else {
            $(".photographer-service--half-fluid").css("margin-left", "0px");
        }
    });
    $(window).on("resize", function() {
        if (this.innerWidth > 600) {
            const offestContainer = $(".container").offset().left;
            $(".photographer-service--half-fluid").css("margin-left", offestContainer);
        } else {
            $(".photographer-service--half-fluid").css("margin-left", "0px");
        }
    });
    if (jQuery(".ui-project-slider--half-fluid").length > 0) {
        $(".ui-project-slider--half-fluid").slick({
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 7,
            slidesToScroll: 2,
            arrows: true,
            prevArrow: $(".ui-project-slider--half-fluid__control-buttons .button--prev"),
            nextArrow: $(".ui-project-slider--half-fluid__control-buttons .button--next"),
            responsive: [{
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
    $(window).load(function() {
        if (this.innerWidth > 600) {
            const offestContainer = $(".container").offset().left;
            $(".ui-project-slider--half-fluid").css("margin-left", offestContainer);
        } else {
            $(".ui-project-slider--half-fluid").css("margin-left", "0px");
        }
    });
    $(window).on("resize", function() {
        if (this.innerWidth > 600) {
            const offestContainer = $(".container").offset().left;
            $(".ui-project-slider--half-fluid").css("margin-left", offestContainer);
        } else {
            $(".ui-project-slider--half-fluid").css("margin-left", "0px");
        }
    });
    if (jQuery(".ui-testimonial-slider").length > 0) {
        $(".ui-testimonial-slider")
            .not(".slick-initialized")
            .slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                arrows: true,
                dots: false,
                speed: 300,
                centerPadding: '-20px',
                infinite: true,
                autoplaySpeed: 5000,
                autoplay: true,
                prevArrow: $(".ui-testimonial-slider__control-buttons .button--prev"),
                nextArrow: $(".ui-testimonial-slider__control-buttons .button--next"),
                responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            centerPadding: '20px',
                            slidesToShow: 1,
                        }
                    },
                ]
            });
    }
    $('.resume-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.resume-slider-nav'
    });
    $('.resume-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.resume-slider-for',
        arrows: true,
        dots: false,
        focusOnSelect: true,
        prevArrow: $(".resume-slider-nav-wrapper__control-buttons .button--prev"),
        nextArrow: $(".resume-slider-nav-wrapper__control-buttons .button--next"),
        responsive: [{
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
})(jQuery);