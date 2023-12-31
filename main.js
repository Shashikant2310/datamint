$(document).ready(function() {
  $('.card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    infinite: false,
    prevArrow: '<span class="prev_icon"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="next_icon"><i class="fa-solid fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
  
});

