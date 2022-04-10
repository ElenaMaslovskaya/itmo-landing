



/*
const swiper = new Swiper('.swiper', {

  autoHeight: true,
  slidesPerView: 3,
  
  slidesPerGroup: 3,
  loop: true,
  

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

 
  grabCursor: true,


  keyboard: {
    enabled: true,
  },

  
  mousewheel: true,

  
  lazy: true,

  

  breakpoints: {
    300: {
      slidesPerView: 'auto',
      slidesPerGroup: 0,
      centeredSlides: true,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2.2,
      slidesPerGroup: 0,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  }
});
*/
const swiper = new Swiper(".swiper", {
  autoHeight: true,
  
  loop: true,
  centeredSlides: true,
  grabCursor:true,
       
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
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 16,
          
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
          },
        },
      });
 