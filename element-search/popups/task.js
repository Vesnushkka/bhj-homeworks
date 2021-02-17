//Popup

let openedContent = document.querySelector('modal');
let closedContent = document.querySelector('modal__close');
let success = document.querySelector('show-success');

document.addEventListener('load', ready);

function ready(){
    openedContent.classList.add('modal_active');
}

closedContent.addEventListener('click', closeContent);

function closeConntent() {
    openedContent.classList.remove('modal_active');
}

success.addEventListener('click', function (event) {
    event.preventDefault();
    
});