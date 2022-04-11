const swiper = new Swiper(".swiper", {
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
      loop: true,
      centeredSlides: true,
    },
    700: {
      slidesPerView: 2.1,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
    },
  },
});
 