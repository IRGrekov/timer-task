let inputEl = document.querySelector("input");
let buttonEl = document.querySelector("button");
let timerEl = document.getElementById("timer");

let intervalId = null;

const animateTimer = (seconds) => {
  clearInterval(intervalId);
  let remainingSeconds = seconds;

  function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return `${hours}:${minutes}:${seconds}`;
  }

  const tick = () => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      timerEl.textContent = formatTime(remainingSeconds);
    } else {
      clearInterval(intervalId);
    }
  };

  tick();
  intervalId = setInterval(tick, 1000);
};

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = "";
});
