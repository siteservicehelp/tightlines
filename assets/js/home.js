(function($) { $(function() {

    $(window).on('load', function () {
        singleMovie = $('.single-movie:nth-child(2)');
        singleMovie.addClass('active');
    });


    $('.single-movie').mouseover( function() {     
        $('.single-movie').removeClass('active'); 
        $(this).addClass('active') 
    });


    /*Video modal*/
    var videoSrc = $("#video-modal iframe").attr("src");
    $('#video-modal').on('show.bs.modal', function () { // on opening the modal
      // set the video to autostart
      $("#video-modal iframe").attr("src", videoSrc+"&amp;autoplay=0");
    });
    $("#video-modal").on('hidden.bs.modal', function (e) { // on closing the modal
      // stop the video
      $("#video-modal iframe").attr("src", null);
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