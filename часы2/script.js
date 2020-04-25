function displayTime(){
    let now = new Date();

    let div = document.querySelector('#clock');

    div.innerHTML = now.toLocaleTimeString();

    setTimeout(displayTime, 1000);

}

window.onload = displayTime();