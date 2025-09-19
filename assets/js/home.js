(function($) { $(function() {

    $(window).on('load', function () {
        singleMovie = $('.single-movie:nth-child(2)');
        singleMovie.addClass('active');
    });


    $('.single-movie').mouseover( function() {     
        $('.single-movie').removeClass('active'); 
        $(this).addClass('active') 
    });

}) })(jQuery)




window.addEventListener('load', () => {
    /*Movies block*/
    const moveWrappers = document.querySelectorAll(".single-movie");
    moveWrappers.forEach(moveWrap => {
        moveWrap.onpointermove = event => {
            const move = moveWrap.querySelector(".app-play-video");  
            const { clientX, clientY } = event;            

            move.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            
            }, {duration: 1000, fill: "forwards"})
        }
    });


    /*Expeditions slider*/
    var swiper = new Swiper(".expeditionsSwiper", {
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".expeditions-swiper-button-next",
            prevEl: ".expeditions-swiper-button-prev",
        },
    });


    /*Gallery slider*/
    var gallery = new Swiper(".gallerySwiper", {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 40,
        mousewheel: true,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 100,
            disableOnInteraction: false,
        },
        //waitForTransition: false,
        //pauseOnMouseEnter: true,
    });
});