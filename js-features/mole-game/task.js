//Molegame

let allHole = document.querySelectorAll(".hole");
let deadMole = document.getElementById("dead");
let lostHole = document.getElementById("lost");
let countDeadMole = 0;
let countLostHole = 0;

allHole.forEach((element) => {
  element.addEventListener("click", pressMole);
});

function pressMole() {
  if (this.classList.contains("hole_has-mole")) {
    countDeadMole += 1;
    deadMole.textContent = countDeadMole;
    winOrLost();
  } else {
    countLostHole += 1;
    lostHole.textContent = countLostHole;
    winOrLost();
  }
}

function winOrLost() {
  if (countDeadMole == 10) {
    alert("Победа");
    document.location.reload();
  } else if (countLostHole == 5) {
    alert("Вы проиграли");
    document.location.reload();
  }
}
