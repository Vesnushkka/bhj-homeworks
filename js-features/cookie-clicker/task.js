//Coockie-clicker

let cookieClicker = document.querySelector(".clicker__cookie");
let counter = document.getElementById("clicker__counter");
cookieClicker.addEventListener('click', clickCount);
cookieClicker.addEventListener('click', changeSize);

let fieldForCounter = 0;

function clickCount() {
	fieldForCounter += 1;
	counter.textContent = fieldForCounter;
}

function changeSize() {
	if(cookieClicker.width == '200') {
		cookieClicker.width = '170';
	}else {
		cookieClicker.width = '200';
	}
}