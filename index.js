$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 8
            },
            600: {
                items: 8
            },
            1000: {
                items: 8
            }
        }
    })
})