const swiper = new Swiper(".swiper", {
  autoHeight: true,
  
  grabCursor:true,
  mousewheel: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
       
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: true,
    },
    700: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
      spaceBetween: 16,
      loop: false,
      centeredSlides: false,
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
 