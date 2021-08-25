

window.onload = function() {
    $('.swiper-wrapper').slick({
        slidesToShow: 1,
        arrows:false,
        autoplay : true,
        autoplaySpeed : 2000,
        dots: true,
        dotsClass : "slick-dots_1",
        draggable : true             
    });
        
    
    $('.slider_slides ul').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        arrows:false,
        autoplay : true,
        autoplaySpeed : 2000,
        dots: true,
        dotsClass : "slick-dots",
        draggable : true             
    });
}
