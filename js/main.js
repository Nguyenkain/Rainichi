$(document).ready(function() {
    var swiper = new Swiper('.slides', {
        autoplay: 10000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.info-pagination',
        autoplayDisableOnInteraction: true
    });
});

