const button = document.querySelector(".button-submit");
const container1 = document.querySelector(".main-container");
const container2 = document.querySelector(".main-container-2");
const scoretext = document.querySelector(".score-ammount");

button.addEventListener("click", function () {
  if (scoretext.textContent != 0) {
    container1.style.display = "none";
    container2.style.display = "flex";
  }
});
