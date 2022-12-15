

"use strict";
const inputArea = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
inputArea.addEventListener("input", (event) => {
  textSize.style.fontSize = inputArea.value + "px";
});