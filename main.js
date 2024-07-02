let timeDisplay = document.querySelector(".time-display");
let [h, m, s, ms] = [0, 0, 0, 0];
let time = null;

let startBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let stopBtn = document.querySelector(".stop");

startBtn.addEventListener("click", () => {
  if (!time) {
    time = setInterval(displayTime, 10);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(time);
  time = null;
});

stopBtn.addEventListener("click", () => {
  clearInterval(time);
  time = null;
  [h, m, s, ms] = [0, 0, 0, 0];
  timeDisplay.innerHTML = "00 : 00 : 00 : 000";
});

function displayTime() {
  ms += 10;
  if (ms == 1000) {
    ms = 0;
    s++;
    if (s == 60) {
      s = 0;
      m++;
    }
    if (m == 60) {
      m = 0;
      s = 0;
      h++;
    }
  }

  let formattedMS = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
  // ${ms < 100 ? "0" + ms : ms < 10 ? ms + "00" : ms}
  // let ms < 100?"0"+ms;
  timeDisplay.innerHTML = `${h < 10 ? "0" + h : h} : ${
    m < 10 ? "0" + m : m
  } : ${s < 10 ? "0" + s : s} : ${formattedMS}`;
  // console.log(h, m, s, ms);
}
