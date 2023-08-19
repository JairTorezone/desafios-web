//variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const cookieClick = document.querySelector("#cookie");
const btnClick = document.querySelector("#btnClick");
let ParagrafhMsg = document.querySelector("#message");
let messages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Não é sobre o que você e capaz de fazer, mas sobre as pessoas que você consegue tocar!",
  "Não desista o Começo é a parte mais difícil",
  "Boas Cosias ACONTECEM para aqueles que têm fé, Melhores COISAS para aqueles que levantam e fazem!",
  "Uma meta é um sonho com um prazo",
  "Dias melhores virão",
  "Não coloce limite em seus sonhos, coloque fé",
  "Deus está contigo",
  "Difícil? Não se preocupe! É apenas um sinal de que você está no caminho certo",
  "Sem sacrifício, não há vitória.",
  "Insanidade é continuar fazendo a mesma coisa e esperar resultados diferentes",
  "“Não procure estudar mais. Procure aprender mais.”",
  "Um dia sem estudar é um dia a mais entre você e seu objetivo.",
  "“De que maneira o estudo vai ajudar você na sua vida? Pense nisto todos os dias quando acordar”",
  "“Não procure estudar muito hoje. Procure estudar pouco todos os dias. Essa é a chave do aprendizado”",
  "Para ter sucesso, não basta descobrir o propósito da tua vida. É preciso ter coragem para realizá-lo.",
  "Seu sucesso depende da força e da coragem que você emprega na vida!",
  "Viva a vida com a força de um leão destemido, porque cada dia é uma nova aprendizagem.",
];

//Eventos
cookieClick.addEventListener("click", handleClickImagCookie);
btnClick.addEventListener("click", handleBtnClick);
document.addEventListener("keydown", handleEnter);

//funções
function handleClickImagCookie() {
  toggleScreen();
  messagePhrasesRamdon();
}

function handleBtnClick() {
  toggleScreen();
}

function handleEnter(event) {
  if (event.key == "Enter" && screen2.classList.contains("btnClick")) {
    handleBtnClick();
  }
}
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function messagePhrasesRamdon() {
  let message = numberRandom();
  console.log(message);
  ParagrafhMsg.innerText = messages[message];
}

function numberRandom() {
  return Math.round(Math.random() * messages.length - 1);
}
