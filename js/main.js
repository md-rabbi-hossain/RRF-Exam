$(document).ready(function () {
    $('.slider ').slick({
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
   $(document).ready(function() {
  // Smooth scroll for clicked links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    scrollToTarget(target);
    
    // Update URL without jumping
    if (history.pushState) {
      history.pushState(null, null, target);
    } else {
      window.location.hash = target;
    }
  });

  // Function to handle scrolling with offset
  // Smooth scroll for clicked links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    scrollToTarget(target);
    
    // Update URL without jumping
    if (history.pushState) {
      history.pushState(null, null, target);
    } else {
      window.location.hash = target;
    }
  });

  // Function to handle scrolling with offset
  function scrollToTarget(target) {
    const $target = $(target);
    if ($target.length) {
      const offset = 100; // Adjust this value as needed
      $('html, body').animate(
        { scrollTop: $target.offset().top - offset },
        500 // Animation speed
      );
    }
  }

  // Handle page load with hash in URL
  if (window.location.hash) {
    // Wait briefly to allow page to render
    setTimeout(function() {
      scrollToTarget(window.location.hash);
    }, 100);
  }
});
  });