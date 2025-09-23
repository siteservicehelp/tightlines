window.addEventListener('load', () => {
  	var swiper = new Swiper(".teamSwiper", {
    	slidesPerView: 3,
    	spaceBetween: 20,
    	loop: true,
        navigation: {
            nextEl: ".team-swiper-button-next",
            prevEl: ".team-swiper-button-prev",
        },
  	});
});