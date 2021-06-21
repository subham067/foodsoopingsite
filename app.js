$(document).ready(function () {
   $('.food_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: ".prev-btn",
      nextArrow: ".next-btn",
      autoplay: true,
      responsive: [
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ]
   }) 



   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })


})
