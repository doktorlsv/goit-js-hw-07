function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const myButton = document.querySelector(".change-color");
const mySpan = document.querySelector(".color");

myButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  mySpan.textContent = randomColor;
});
