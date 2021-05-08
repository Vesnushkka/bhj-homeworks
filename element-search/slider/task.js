//Slider

const clickedPrevArrow = document.querySelector(".slider__arrow_prev");
const clickedNextArrow = document.querySelector(".slider__arrow_next");
const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
const currentIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("slider__item_active")
);
let index = 0;

const activeSlide = (n) => {
    const ind = Array.from(slides).findIndex((slide) =>
        slide.classList.contains("slider__item_active")
    );
    slides[ind].classList.remove("slider__item_active");
    slides[n].classList.add("slider__item_active");
};

const activeDot = (n) => {
    const ind = Array.from(dots).findIndex((dot) =>
        dot.classList.contains("slider__dot_active")
    );
    dots[ind]?.classList.remove("slider__dot_active");
    dots[n].classList.add("slider__dot_active");
};

const showActiveSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
};

const slideNext = () => {
    if (index == slides.length - 1) {
        index = 0;
        showActiveSlide(index);
    } else {
        index++;
        showActiveSlide(index);
    }
};

const slidePrev = () => {
    if (index == 0) {
        index = slides.length - 1;
        showActiveSlide(index);
    } else {
        index--;
        showActiveSlide(index);
    }
};

dots.forEach((dot, indexDot) => {
    dot.addEventListener("click", () => {
        index = indexDot;
        showActiveSlide(index);
    });
});

showActiveSlide(currentIndex);

clickedNextArrow.addEventListener("click", slideNext);
clickedPrevArrow.addEventListener("click", slidePrev);
