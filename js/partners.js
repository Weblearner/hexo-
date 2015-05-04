$('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: 
    [
        {
            breakpoint: 1200,
            settings: 
            {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 900,
            settings: 
            {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});