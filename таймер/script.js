function displayTimer(){
    let now = new Date();

    let div = document.querySelector('#clock');
    let sDate = new Date(2020,11,31);
    let timer = sDate.getTime() - now.getTime();
    let days = parseInt(timer/(24*60*60*1000));
    let hours = parseInt(timer/(60*60*1000))%24;
    let minutes = parseInt(timer/(60*1000))%60;
    let seconds = parseInt(timer/(1000))%60;


    div.innerHTML = days + ' дней и '+ hours + ' : '+ minutes + ' : '+ seconds;

    setTimeout(displayTimer, 1000);

}

window.onload = displayTimer();