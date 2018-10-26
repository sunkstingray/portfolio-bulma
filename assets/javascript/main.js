$(document).ready(function () {
        var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances

        $(window).resize(function () {
                carousels = bulmaCarousel.attach();
        });

        $(".burger").click(function () {
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
        });

        $(".navbar-item").click(function () {
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
        });

        $("#about-me").click(function () {
                $(".modal").toggleClass("is-active");
        });

        $(".delete").click(function () {
                $(".modal").toggleClass("is-active");
        });

        $(".modal-background").click(function () {
                $(".modal").toggleClass("is-active");
        });
});

