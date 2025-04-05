$(document).ready(function () {
  // Initialize slider
  $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  dots: false
              }
          }
      ]
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $(this).attr('href');
      
      // Scroll to target with offset
      $('html, body').animate({
          scrollTop: $(target).offset().top - 20 // 20px offset
      }, 800);
      
  });
});