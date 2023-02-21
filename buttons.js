const buttonsList = document.querySelectorAll(".button-rating");
let click = false;
let scoreAmmount = 0;
let scoreText = document.querySelector(".score-ammount");

buttonsList.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (element.classList.contains("rating-active")) {
      click = false;
      element.classList.remove("rating-active");
      element.classList.add("rating-hover");
      scoreAmmount = 0;
    } else {
      click = true;
      element.classList.remove("rating-hover");
      element.classList.add("rating-active");
      scoreAmmount = index + 1;
    }
    buttonsList.forEach((element2) => {
      if (element2 != element) {
        element2.classList.remove("rating-active");
      }
    });
    scoreText.textContent = scoreAmmount;
    console.log(scoreText);
  });

  element.addEventListener("mouseover", function () {
    if (element.classList.contains("rating-active")) {
      element.classList.remove("rating-hover");
    } else {
      element.classList.add("rating-hover");
    }
  });
  element.addEventListener("mouseout", function () {
    element.classList.remove("rating-hover");
  });
});
