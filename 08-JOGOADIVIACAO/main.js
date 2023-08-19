//variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector(".btnTry");
const btnReset = document.querySelector(".btnReset");

/**Pegando número aleatório */
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

console.log(randomNumber);

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnter);

//funções
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");
  let inputvalue = inputNumber.value;

  validateNumber(inputvalue);

  if (inputvalue == randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function handleEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function validateNumber(inputvalue) {
  if (inputvalue < 0) {
    alert("Não aceito números negativos");
    xAttempts = 0;
    inputNumber.value = "";
  } else if (inputvalue > 10) {
    alert("Não aceito números maior que 10");
    inputNumber.value = "";
    xAttempts = 0;
  } else if (inputvalue == "") {
    alert("Digite um número valido, não aceita vazio");
    inputNumber.value = "";
    xAttempts = 0;
  }
}
