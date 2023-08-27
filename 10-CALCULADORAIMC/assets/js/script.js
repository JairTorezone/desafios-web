import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const width = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotNumber = notNumber(width) || notNumber(height);

  if (weightOrHeightIsNotNumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(width, height);
  displayResultMessage(result);
};

inputWeight.oninput = () => {
  AlertError.close();
};

inputHeight.oninput = () => {
  AlertError.close();
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}
