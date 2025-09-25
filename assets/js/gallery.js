(function($) { $(function() {
    

}) })(jQuery)

window.addEventListener('load', () => {
    const clickWrapper = document.querySelector('#no-click')
    const firstClickWrapper = document.querySelector('.click-1-btn')
    const secondClickWrapper = document.querySelector('.click-2-btn')
    const thirdClickWrapper = document.querySelector('.click-3-btn')    
      
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
    });  
})