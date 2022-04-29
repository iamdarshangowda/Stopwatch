window.onload = function () {
  let start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset");

  let appendMinutes = document.getElementById("minutes"),
    appendSeconds = document.getElementById("seconds"),
    appendTens = document.getElementById("tens");

  let minutes = 00,
    seconds = 00,
    tens = 00;

  // button handelers setup
  let Interval;

  start.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  });

  stop.addEventListener("click", function () {
    clearInterval(Interval);
  });

  reset.addEventListener("click", function () {
    clearInterval(Interval);
    minutes = "00";
    seconds = "00";
    tens = "00";
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
  });

  // timer setup
  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 60) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
};
