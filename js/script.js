$('.slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: 
    [
        {
            breakpoint: 750,
            settings: 
            {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 320,
            settings: 
            {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});