let tabs = document.querySelectorAll('.tab');

let tabContent = document.querySelector(".tab__content");

tabs.forEach((element) => {
	element.addEventListener('click', openTab);
})

function addActiveClass() {
	if (this.classList.contains('tab_active')){
		this.classList.remove('tab_active')
	}else {
		this.classList.add('tab_active')
	}	
}

function openTab() {
	let tabsArray = Array.from(tabs);
   tabsArray.indexOf(element);
	
	if(tabsArray.classList.contains('tab_active')){
		tabContent.classList.add("tab__content_active");
	}else {
		tabContent.classList.remove("tab__content_active");
	}
}