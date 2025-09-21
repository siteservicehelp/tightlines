(function($) { $(function() {

    // Preloader
    $(window).on('load', function () {
        preloader = $('.loaderArea'),
        loader = preloader.find('.loader');
        $('html').removeClass('overflow-hidden');
        $('body').removeClass('overflow-hidden');
        loader.delay(500).fadeOut();
        preloader.delay(500).fadeOut('slow');
    });



    setTimeout(function() {
        $('#tg').modal('show');
    }, 100000);

}) })(jQuery)




window.addEventListener('load', () => {
   /*Sticky header*/
    var header = document.querySelector('.header-wrapper');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            header.classList.add('header-sticky');
        } else {
            header.classList.remove('header-sticky');
        }
    });


   /*Menu toggle*/
    const toggleButton = document.querySelector('.app-toggle-button')
    const navMenu = document.querySelector('.menu-wrapper')
    const bodyWrapper = document.querySelector('body')
    const htmlWrapper = document.querySelector('html')
    const headerWrapper = document.querySelector('.header-wrapper')
    if (toggleButton) { // add event listener only of button exists
        toggleButton.addEventListener('click', function() {   
            if(!this.classList.contains('button-open')) {
                this.classList.add('button-open')
                navMenu.classList.add('menu-wrapper-show')                
                bodyWrapper.classList.add('overflow-hidden')
                htmlWrapper.classList.add('overflow-hidden')
                headerWrapper.classList.add('header-wrapper-open')
            } else {
                this.classList.remove('button-open')
                navMenu.classList.remove('menu-wrapper-show')                
                bodyWrapper.classList.remove('overflow-hidden')    
                htmlWrapper.classList.remove('overflow-hidden')   
                headerWrapper.classList.remove('header-wrapper-open')
            }       
        })
    }
});