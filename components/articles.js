new Swiper(".articles__slider", {
  navigation: {
    nextEl: ".articles__navigation_type_next",
    prevEl: ".articles__navigation_type_prev",
  },
  pagination: {
    el: ".articles__pagination",
    clickable: true,
    uniqueNavElements: false,
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
      loop: true,
      watchSlidesVisibility: true,
      centeredSlides: true,
      slidesPerView: "auto",
      watchOverflow: true,
    },
    768: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 0,
      watchOverflow: false,
      watchSlidesVisibility: false,
      centeredSlides: false,
      loop: false,
    },
    1150: {
      grid: {
        rows: 2,
      },
      slidesPerView: 3,
      slidesPerGroup: 3,

      watchSlidesVisibility: false,
    },
  },
});
