window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent  = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i = a; i<tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i<tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })

    let deadline = '2020-02-11';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) %  60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/(1000*60*60)));
        let days = Math.floor((t/(1000*60*60*24)));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hourse = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateTime, 1000);

        function updateTime(){
            let t = getTimeRemaining(endtime);
            hourse.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0){
                clearInterval(timeInterval);
                hourse.textContent  = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);

    // модальное окошко
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //форма 
    let  message = {
        loading: 'Загрузка',
        success: 'Спасибо',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form');
    let  input = form.getElementsByTagName('input');
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');


    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        request.send(formData);

        request.addEventListener('readystatechange', function(){
            if(request.readyState < 4 ){
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success;
            } else{
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i=0; i<input.length; i++){
            input[i].value = '';
        }
    });

    //Слайдер
    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');
    showSlides(slideIndex);
    function showSlides(n){
        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item)=>item.classList.remove('dot-active'));

        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }
    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n );
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });
    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for(let i=0; i< dots.length + 1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });

    //Калькулятор
    let persons = document.querySelectorAll('.counter-block-input')[0];
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.getElementById('select');
    let tolalValue = document.getElementById('total');
    let persinsSum = 0;
    let daysSum = 0;
    let total = 0;

    tolalValue.innerHTML = 0;
    
    persons.addEventListener('change', function(){
        persinsSum = +this.value;
        total = (daysSum + persinsSum)*6;
    });

    if(restDays.value == ''){
        tolalValue.innerHTML = 0;
    } else{
        tolalValue.innerHTML = total;
    }
    restDays.addEventListener('change', function(){
        daysSum = +this.value;
        total = (daysSum + persinsSum)*6;
    });

    if(persons.value == ''){
        tolalValue.innerHTML = 0;
    } else{
        tolalValue.innerHTML = total;
    }

    place.addEventListener('change', function(){
        if(restDays.value == '' || persons.value == ''){
            tolalValue.innerHTML = 0;
        } else {
            let a = total;
            tolalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })
});