const text = document.querySelectorAll('.rotator__case')


setInterval(() => {
	text.forEach(el => {
		if (el.classList.contains("rotator__case_active")) {
			el.classList.remove('rotator__case_active')
		} else {
			el.classList.add('rotator__case_active')
		}
	})
}, 1000);


