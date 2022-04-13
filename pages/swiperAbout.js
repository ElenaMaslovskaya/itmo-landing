const swiper = new Swiper(".about__swiper", {
  autoHeight: true,
  // Mousewheel control
  mousewheel: true,
  // Grab cursor
  grabCursor: true,
  // Keyboard control
  keyboard: {
    enabled: true,
  },
  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true,
      centeredSlides: false,
    },
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
      loop: true,
      centeredSlides: false,
    },
  },
});
 