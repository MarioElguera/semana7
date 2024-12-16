document.addEventListener('DOMContentLoaded', () => {
    if ($('.carousel').hasClass('autoplay')) {
        $('.carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
        });
    }
});