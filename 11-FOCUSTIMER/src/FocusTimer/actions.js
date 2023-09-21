import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

let minutes = Number(el.minutes.textContent);
let seconds = Number(el.seconds.textContent);

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPress.play();
}

export function reset() {
  state.isRunning = false;
  state.isRunning = document.documentElement.classList.remove("running");

  sounds.buttonPress.play();
  timer.updateDisplay();
  return;
}

export function plusFiveMinutes() {
  minutes += state.addOrminusfiveMinutes;

  if (minutes > 60) {
    minutes = state.minutes;
  }
  sounds.buttonPress.play();
  timer.updateDisplay(minutes, seconds);
}

export function minusFiveMinutes() {
  minutes -= state.addOrminusfiveMinutes;

  if (minutes <= 0) {
    reset();
    minutes = state.minutes;
  }
  sounds.buttonPress.play();
  timer.updateDisplay(minutes, seconds);
}
