import * as el from "./elements.js";
import * as actions from "./actions.js";
import * as sounds from "./sounds.js";

export function registerControls() {
  el.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] !== "function") {
      return;
    }
    actions[action]();
  });
}

export function registerIcons() {
  el.wrapperIcons.addEventListener("click", (event) => {
    let icon = event.target.dataset.action;
    let elements;

    if (icon == "tree") {
      elements = el.btnTree.classList.toggle("tree");
      elements ? sounds.soundFloresta.play() : sounds.soundFloresta.pause();
    }

    if (icon === "rain") {
      elements = el.btnRain.classList.toggle("rain");
      elements ? sounds.soundChuva.play() : sounds.soundChuva.pause();
    }

    if (icon === "coffe") {
      elements = el.btnCoffe.classList.toggle("coffe");
      elements ? sounds.soundCafeteira.play() : sounds.soundCafeteira.pause();
    }

    if (icon === "fire") {
      elements = el.btnFire.classList.toggle("fire");
      elements ? sounds.soundLareira.play() : sounds.soundLareira.pause();
    }
  });
}
