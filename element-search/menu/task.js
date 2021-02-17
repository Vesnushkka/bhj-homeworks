//Navigation menu

let mainMenuItem = document.querySelector('.menu__main');
let mainMenuMatches = mainMenuItem.querySelectorAll('li.menu_item > a');
let subMenuItem = document.querySelector('.menu_sub');
let subMenuMatches = document.querySelectorAll("li.menu_item > a");
let openedMenu = subMenuMatches.closest('.menu_sub');

mainMenuMatches.forEach((element) => {
	element.addEventListener('click', openNavigation);
})

function openNavigation(event) {
	if(openedMenu.classlist.contains('menu_active')){
		openedMenu.classlist.remove("menu_active");
	}else {
		openedMenu.classlist.add("menu_active");
	}
	event.preventDefault();
}