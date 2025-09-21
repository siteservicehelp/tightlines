(function($) { $(function() {
    

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
    
});