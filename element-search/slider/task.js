//Slider

let clickedArrow = document.querySelectorAll('slider__arrow');
let activeSlide = document.querySelectorAll('slider__item');

clickedArrow.forEach(element){
	element('click', slidePhoto);
}

function slidePhoto() {
	if(activeSlide.classlist.contains('slider__item_active')) {
		activeSlide.classlist.remove('slider__item_active');
	} else {
		activeSlide.classlist.add('slider__item_active');
	}
}