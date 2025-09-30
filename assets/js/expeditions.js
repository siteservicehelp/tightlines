(function($) { $(function() {    

}) })(jQuery)




window.addEventListener('load', () => {
   /*Expeditions slider*/
   var swiper = new Swiper(".single-expeditions-block", {
        //loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        grid: {
        	fill: "row",
	        rows: 1,
	    },
	    /*autoplay: {
        	delay: 3000,
        	disableOnInteraction: false,
      	},*/
      	pagination: {
        	el: ".swiper-pagination",
        	clickable: true,
      	},
      	breakpoints: {
        	576: {
          		slidesPerView: 2,
          		spaceBetween: 20,
          		grid: {
		        	fill: "row",
			        rows: 4,
			    },
        	},
        	992: {
          		slidesPerView: 3,
          		spaceBetween: 20,
          		grid: {
		        	fill: "row",
			        rows: 3,
			    },
        	},
        	1441: {
          		slidesPerView: 4,
          		spaceBetween: 20,
          		grid: {
		        	fill: "row",
			        rows: 2,
			    },
        	},
      	},
    });

    var swiper2 = new Swiper(".expeditionsSwiper", {
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".expeditions-swiper-button-next",
            prevEl: ".expeditions-swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
});