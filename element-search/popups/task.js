//Popup

let content = document.querySelectorAll(".modal");
let openedContent = document.querySelector("#modal_main");
let successedContent = document.querySelector("#modal_success");
let closedContent = document.querySelectorAll(".modal__close");
let dangerButton = document.querySelector(".btn_danger");
let successButton = document.querySelector(".btn_success");

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  openedContent.classList.add("modal_active");
}

dangerButton.addEventListener("click", showSuccessButton);

function showSuccessButton() {
  openedContent.classList.remove("modal_active");
  successedContent.classList.add("modal_active");
}

closedContent.forEach((element) => {
  element.addEventListener("click", closeContent);
});

function closeContent() {
  this.closest(".modal").classList.remove("modal_active");
}

