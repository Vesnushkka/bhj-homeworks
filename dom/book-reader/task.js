const fontButtons = document.querySelectorAll('.font-size')

fontButtons.forEach(element => {
	element.addEventListener('click', changeFontSize)
});

function changeFontSize(event) {

	event.preventDefault()
	const activeIndex = Array.from(fontButtons).findIndex((fontButton) =>
		fontButton.classList.contains('font-size_active')
	)
	const idx = Array.from(fontButtons).indexOf(event.target);

	fontButtons[activeIndex]?.classList.remove('font-size_active')
	fontButtons[idx]?.classList.add('font-size_active')

	const fontButtonParent = this.closest('#book')
	const fontButtonAttr = this.getAttribute('data-size')
	console.log(fontButtonAttr);

	if (fontButtonAttr === 'small') {
		fontButtonParent.classList.add('book_fs-small')
		fontButtonParent.classList.remove('book_fs-big')
	} else if (fontButtonAttr === 'big') {
		fontButtonParent.classList.add('book_fs-big')
		fontButtonParent.classList.remove('book_fs-small')
	} else {
		fontButtonParent.classList.remove('book_fs-small')
		fontButtonParent.classList.remove('book_fs-big')
	}
}


