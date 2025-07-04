const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

items.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("ul li").length);
});
