"use strict";

const listCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listCategories.length}`);

const ElementsAmountInCategory = listCategories.forEach((el) => {
  console.log(
    `Category: ${el.querySelector("h2").textContent}\nElements: ${
      el.querySelector("ul").childElementCount
    }`
  );
});
