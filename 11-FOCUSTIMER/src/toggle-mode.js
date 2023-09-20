const btnToggle = document.getElementById("toggle-mode");

btnToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
