(function($) { $(function() {    

}) })(jQuery)




window.addEventListener('load', () => {
   /*Expeditions slider*/
    var swiper = new Swiper(".expeditionsSwiper", {
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".expeditions-swiper-button-next",
            prevEl: ".expeditions-swiper-button-prev",
        },
    });
});