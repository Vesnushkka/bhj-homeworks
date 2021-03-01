//Navigation menu

let mainMenuItem = document.querySelectorAll("ul.menu_main > li.menu__item");
let allSubMenu = document.querySelectorAll(".menu_sub");

mainMenuItem.forEach((element) => {
  element.addEventListener("click", openNavigation);
});

function openNavigation(event) {
  const subMenu = this.querySelector(".menu_sub");
  if (subMenu) {
    event.preventDefault();
    subMenu.classList.toggle("menu_active");
  }
  
  allSubMenu.forEach((element) => {
	  if(element != subMenu) {
		  element.classList.remove("menu_active");
	  }
  })
}
