let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let rates = document.querySelector(".rates");
let numbersRated = document.querySelectorAll(".numbers");
let card = document.querySelector(".card");
let card2 = document.querySelector(".card2");

let rate = 0;

function handleClick(e) {
  const selectedNumber = e.currentTarget;
  if (selectedNumber.classList.contains("active")) {
    return;
  }
  numbersRated.forEach((number) => {
    number.classList.remove("active");
  });
  selectedNumber.classList.add("active");
  rate = selectedNumber.innerText;
}

numbersRated.forEach((number) => {
  number.addEventListener("click", handleClick);
});

btn.addEventListener("click", function (e) {
  card.style.display = "none";
  card2.style.display = "block";
  rates.innerText = rate;
});

btn2.addEventListener("click", function (e) {
    numbersRated.forEach((number) => {
        number.classList.remove("active");
      });
      rate = 0;
  card.style.display = "block";
  card2.style.display = "none";
});
