//Navigation menu

let mainMenuItem = document.querySelectorAll(
    "ul.menu_main > li.menu__item > a"
);

mainMenuItem.forEach((element) => {
    element.addEventListener("click", openNavigation);
});

function openNavigation(event) {
    const subMenu = this.closest(".menu__item").querySelector(".menu_sub");
    const activeMenu = document.querySelector(".menu_active");
    if (activeMenu !== subMenu) {
      activeMenu?.classList.remove("menu_active");
    }
    if(subMenu){
      event.preventDefault();
      subMenu.classList.toggle("menu_active");
    }
}