
    // модальное окошко
    let more = document.querySelector('.more'); // Кнопка узнать больше
    let overlay = document.querySelector('.overlay'); // Само окно
    let close = document.querySelector('.popup-close'); // крестик

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //Заставляет страницу не двигаться
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; //Заставляет страницу не двигаться
    });