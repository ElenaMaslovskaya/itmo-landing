new Swiper(".team__slider", {
  loop: true,
  spaceBetween: 8,
  slidesPerView: "auto",
  watchSlidesVisibility: true,
  watchOverflow: true,
  pagination: {
    el: ".team__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".team__navigation_type_next",
    prevEl: ".team__navigation_type_prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: "auto",
      watchSlidesVisibility: true,
      watchOverflow: true,
    },
    1282: {
      loop: false,
      spaceBetween: 30,
    },
  },
});
