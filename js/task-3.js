const myInput = document.querySelector("#name-input");
const myOutput = document.querySelector("#name-output");

myInput.addEventListener("input", () => {
  const check = myInput.value.trim();
  myOutput.textContent = check !== "" ? check : "Anonymous";
});
