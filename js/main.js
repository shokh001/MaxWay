$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 2,
        autoplay: true,
        margin:30,
        autoplayTimeout: 100000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            500: {
                items: 1
            },

            1000: {
                items: 2
            },
        }
    });
});