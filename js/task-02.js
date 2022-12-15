"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// funkcja klasyczna
// ingredients.forEach(function (ingredient, index) {
//   ingredient = document.createElement("li");
//   ingredient.textContent = ingredients[index];
//   ingredient.classList.add("item");

//   const listIngredients = document.querySelector("ul");
//   listIngredients.appendChild(ingredient);
//   console.log(ingredient);
// });

// funkcja strzałkowa z appendChild
// const singleIngredients = ingredients.forEach((e) => {
//   let ingredient = document.createElement("li");
//   ingredient.textContent = e;
//   ingredient.classList.add("item");

//   const listIngredients = document.querySelector("#ingredients");
//   listIngredients.appendChild(ingredient);
// });

// funkcja strzałkowa z insertAdjacentElement
const singleIngredients = ingredients.forEach((e) => {
  let ingredient = document.createElement("li");
  ingredient.textContent = e;
  ingredient.classList.add("item");

  const listIngredients = document.querySelector("#ingredients");
  listIngredients.insertAdjacentElement("beforeend", ingredient);
});
