$(document).ready(function () {
        var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances

        $(window).resize(function () {
                carousels = bulmaCarousel.attach();
        });

        $(".burger").click(function () {
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
        });
});

