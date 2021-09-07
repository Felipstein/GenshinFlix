const simpleCarousel = document.querySelector('.js-carousel--simple');

const settings = {
    slidesToShow: 5,
    slidesToScroll: 4,
    dots: '.js-carousel--simple-dots',
    arrows: {
        prev: '.js-carousel--simple-prev',
        next: '.js-carousel--simple-next'
    }
};

new Glider(simpleCarousel, settings);