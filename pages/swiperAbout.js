const swiper = new Swiper('.swiper', {
  
  slidesPerView: 3,
  //spaceBetween: 2,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,

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
  keyboard: {
    enabled: true,
  },

  // Mousewheel control
  mousewheel: true,

  // Lazy load images
  lazy: true,

  // Height
  autoHeight: true,
});
