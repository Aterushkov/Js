window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let deadline = '2020-02-12';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) %  60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/(1000*60*60)%24));
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
        let days = timer.querySelector('.days');
        let hourse = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateTime, 1000);

        function updateTime(){
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hourse.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0){
                clearInterval(timeInterval);
                days.textContent  = '00';
                hourse.textContent  = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);
});