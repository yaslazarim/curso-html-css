const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let toMove = 10;

buttonRight.addEventListener('click', function (){
    toMove += 10;
    elements.style = `transform: translateX(${toMove}px)`;
})

buttonLeft.addEventListener('click', function (){
    toMove -= 10;
    elements.style = `transform: translateX(${toMove}px)`;
})