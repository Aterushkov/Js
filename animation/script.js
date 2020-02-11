let btn = document.querySelector('.btn');
let elem = document.querySelector('.box');

function myAnimation(){
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if(pos == 300){
             clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event){
    // if(event.target && event.target.tagName == 'BUTTON'){
    // if(event.target && event.target.classList.contains('first')){
        if(event.target && event.target.matches('button.first')){
        console.log('Кнопка!');
    }
});