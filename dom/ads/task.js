const textBlocks = document.querySelectorAll('.rotator__case')
let counter = 0


setInterval(() => {
	textBlocks[counter].classList.remove("rotator__case_active")
	counter += 1
	if (counter >= textBlocks.length) {
		counter = 0
	}
	textBlocks[counter].classList.add("rotator__case_active")
}, 1000);
