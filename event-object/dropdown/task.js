// Task 1 DROPDOWN
	
let mainText = document.querySelector(".dropdown__value");
mainText.addEventListener("click", openText);

let listItem = document.querySelector(".dropdown__list");

function openText() {
	if (listItem.classList.contains("dropdown__list_active")) {
		listItem.classList.remove("dropdown__list_active");
  } else {
    listItem.classList.add("dropdown__list_active");
  }
}


let selectedItem = listItem.querySelectorAll(".dropdown__link");

selectedItem.forEach((element) => {
	element.addEventListener("click", selectItem);
})

function selectItem(event) {
	event.preventDefault();
	mainText.textContent=this.textContent;
	listItem.classList.remove("dropdown__list_active");
}

