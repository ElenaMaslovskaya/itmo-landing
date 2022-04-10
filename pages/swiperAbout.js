const swiper = new Swiper('.swiper', {
  // Height
  autoHeight: true,
  slidesPerView: 3,
  //spaceBetween: 2,
  slidesPerGroup: 3,
  loop: true,
  //loopFillGroupWithBlank: true,

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Grab cursor
  grabCursor: true,

  // Keyboard control
  //keyboard: {
    //enabled: true,
  //},

  // Mousewheel control
  //mousewheel: true,

  // Lazy load images
  //lazy: true,

  

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 0,
      centeredSlides: true,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2.2,
      slidesPerGroup: 0,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  }
});

 