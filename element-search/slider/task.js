//Slider

const clickedPrevArrow = document.querySelector(".slider__arrow_prev");
const clickedNextArrow = document.querySelector(".slider__arrow_next");
const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
let index = 0;

const activeSlide = n => {
	for(slide of slides) {
		slide.classList.remove("slider__item_active");
	}
	slides[n].classList.add("slider__item_active");
}

const activeDot = n => {
	for(dot of dots) {
		dot.classList.remove("slider__dot_active");
	}
	dots[n].classList.add("slider__dot_active");
}

const showActiveSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}

const slideNext = () => {
		if(index == slides.length - 1) {
			index = 0;
			showActiveSlide(index);
		}else {
			index++;
			showActiveSlide(index);
		}
}

const slidePrev = () => {
	if(index == 0) {
		index = slides.length - 1;
		showActiveSlide(index);
	} else {
		index--;
		showActiveSlide(index);
	}
}

dots.forEach((dot, indexDot) => {
	dot.addEventListener("click", () => {
		index = indexDot;
		showActiveSlide(index);
	})
})
clickedNextArrow.addEventListener("click", slideNext);
clickedPrevArrow.addEventListener("click", slidePrev);

