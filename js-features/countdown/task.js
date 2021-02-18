//Countdown

const timer = document.getElementById("timer");
const countTimer = function () {
  if (+timer.textContent === 0) {
    clearInterval(intervalPerSecond);
    alert("Вы победили в конкурсе!");
    return;
  }
  timer.textContent -= 1;
};

const intervalPerSecond = setInterval(countTimer, 1000);

// Task 1_1

// 1. Получить число
// 2. Перевести в секунды
// 3. Вычесть  1 секунду
// 4. Перевести обратно в нужный формат

const hourTimer = document.getElementById("timer_hms");

const hmsFormatToSeconds = function (time) {
  let [h, m, s] = time.split(":");
  let totalSeconds = +h * 3600 + +m * 60 + +s;
  return totalSeconds;
};

const countTimerHms = function () {
  let seconds = hmsFormatToSeconds(hourTimer.textContent);
  if (seconds === 0) {
    clearInterval(hmsIntervalPerSecond);
    alert("Вы победили в конкурсе!");
    return;
  }
  hourTimer.textContent = secondsToHms(seconds - 1);
};

const secondsToHms = function (second) {
  return new Date(second * 1000).toISOString().substr(11, 8);
};

const hmsIntervalPerSecond = setInterval(countTimerHms, 1000);
