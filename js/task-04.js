"use strict";
let counterValue = 0;
let number = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
decrementButton.addEventListener("click", (e) => {
  counterValue--;
  number.innerHTML = counterValue;
});

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
incrementButton.addEventListener("click", (e) => {
  counterValue++;
  number.innerHTML = counterValue;
});
s;
