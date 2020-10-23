/**
 *
 *  sticky navigation
 *
 */



 // Carousel marcas

 $(document).ready(function(){
  $('.logomarcas').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<i class="left-arrow"></i>',
  nextArrow: '<i class="right-arrow"></i>',
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: 
  [
  {
     breakpoint: 600,
     settings: {
         infinite: true,
         arrows: true,
         dots: false,
         slidesToShow: 2,
         slidesToScroll: 2
     }
  },
  {
     breakpoint: 480,
     settings: {
         infinite: true,
         arrows: true,
         dots: false,
         slidesToShow: 1,
         slidesToScroll: 1
     }
  }
  ]
  });
});

// Carousel beneficios

$(document).ready(function(){
  $('.servicos').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<i class="left-arrow"></i>',
    nextArrow: '<i class="right-arrow"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  });