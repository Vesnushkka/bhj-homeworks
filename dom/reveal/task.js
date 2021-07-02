const reveals = document.querySelectorAll(".reveal")

document.addEventListener("scroll", onScroll)

function onScroll() {
	reveals.forEach(el => {
		if (el.getBoundingClientRect().top < window.innerHeight) {
			el.classList.add('reveal_active')
		} else {
			el.classList.remove('reveal_active')
		}
	})
}

