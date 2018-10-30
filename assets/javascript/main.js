$(document).ready(function () {
        // var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances

        // $(window).resize(function () {
        //         carousels = bulmaCarousel.attach();
        // });

        // $('#project-carousel').slick({
        //         // setting-name: setting-value
        // });

        $('#project-carousel').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 7000,
                responsive: [
                        {
                                breakpoint: 1910,
                                settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                        arrows: false
                                }
                        },
                        {
                                breakpoint: 1025,
                                settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                        arrows: true
                                }
                        },
                        {
                                breakpoint: 700,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: true
                                }
                        }

                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                ]
        });

        $('#left-button').on('click', function () {
                $('#project-carousel').slick('slickPrev');
        });

        $('#right-button').on('click', function () {
                $('#project-carousel').slick('slickNext');
        });


        $(".burger").click(function () {
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
        });

        $(".navbar-item").click(function () {
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
        });

        // About Me Modal

        $("#about-me").click(function () {
                $("#about-modal").toggleClass("is-active");
        });

        $("#about-delete").click(function () {
                $("#about-modal").toggleClass("is-active");
        });

        $("#about-background").click(function () {
                $("#about-modal").toggleClass("is-active");
        });

        // KCSF Modal

        $("#kc-store").click(function () {
                $("#kcsf-modal").toggleClass("is-active");
        });

        $("#kcsf-delete").click(function () {
                $("#kcsf-modal").toggleClass("is-active");
        });

        $("#kcsf-background").click(function () {
                $("#kcsf-modal").toggleClass("is-active");
        });
});

