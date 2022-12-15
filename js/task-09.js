"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color"); //dobranie sie do przycisku//
const addColor = document.querySelector(".color"); //dobranie sie do spanu//
const body = document.querySelector("body"); //dobranie sie do body//

changeColor.addEventListener("click", (event) => {
  //dodanie eventlistenera z clickiem na buttonie//
  addColor.textContent = getRandomHexColor(); //dobranie sie do spana z "-", by pokazano nazwę koloru//
  body.style.backgroundColor = addColor.textContent; //zmiana koloru w body//
});
