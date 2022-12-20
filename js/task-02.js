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

// funkcja strzałkowa z insertAdjacentElement://
const singleIngredients = ingredients.forEach((e) => {
  //pętla po tablicy ingredients//
  let ingredient = document.createElement("li"); //stworzenie elementów "li"//
  ingredient.textContent = e; //przypisujemy test do li (e-jako pojedynczy element z tablicy-iterowalismy po niej)//
  ingredient.classList.add("item"); //dodajemy clasę "item" do ingredient//

  const listIngredients = document.querySelector("#ingredients"); //dobieramy się do listy ingredients//
  listIngredients.insertAdjacentElement("beforeend", ingredient); //wrzucamy tą listę//
});
