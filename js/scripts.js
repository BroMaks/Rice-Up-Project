$(document).ready(function(){

    //Sliders
    var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
              delay: 5000,
              disableOnInteraction: false
    },
})
   });
  
   var mySwiper = new Swiper('.rewiew .swiper-container', {
          loop: true,
          pagination: {
              el: '.swiper-pagination-text',
              clickable: true
          },
          autoplay: {
              delay: 5000,
              disableOnInteraction: false
          },
      });