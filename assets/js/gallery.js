(function($) { $(function() {
    

}) })(jQuery)

window.addEventListener('load', () => {
    const clickWrapper = document.querySelector('#no-click')
    const firstClickWrapper = document.querySelector('.click-1-btn')
    const secondClickWrapper = document.querySelector('.click-2-btn')
    const thirdClickWrapper = document.querySelector('.click-3-btn')    
    const fourClickWrapper = document.querySelector('.click-4-btn') 
    const galleryNav = document.querySelector('.app-gallery-slider-nav')
    const gallerySwiper = document.querySelector('.app-gallery-slider-wrapper')
      
    // Добавляем первый обработчик клика  
    firstClickWrapper.addEventListener('click', function() {  
        // Добавляем класс при первом клике  
        clickWrapper.classList.add('click-1');
        firstClickWrapper.classList.remove('show');
        firstClickWrapper.classList.remove('show');
        secondClickWrapper.classList.add('show');
    });  

    secondClickWrapper.addEventListener('click', function() {  
        // Добавляем класс при первом клике  
        clickWrapper.classList.remove('click-1');
        clickWrapper.classList.add('click-2');
        secondClickWrapper.classList.remove('show');
        thirdClickWrapper.classList.add('show');
    });  

    thirdClickWrapper.addEventListener('click', function() {  
        // Добавляем класс при первом клике  
        clickWrapper.classList.remove('click-2');
        clickWrapper.classList.add('click-3');
        thirdClickWrapper.classList.remove('show');
        fourClickWrapper.classList.add('show');
    });  

    fourClickWrapper.addEventListener('click', function() {  
        // Добавляем класс при первом клике  
        clickWrapper.classList.remove('click-3');
        clickWrapper.classList.add('click-4');
        fourClickWrapper.classList.remove('show');
        galleryNav.classList.remove('hidden-gallery-nav');
        gallerySwiper.classList.remove('hidden-gallery');
    });  


    /*var swiper = new Swiper(".gallerySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".gallery-swiper-button-next",
            prevEl: ".gallery-swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
    });*/


    var swiper = new Swiper(".thumbsSwiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper2 = new Swiper(".gallerySwiper", {
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".gallery-swiper-button-next",
            prevEl: ".gallery-swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
})