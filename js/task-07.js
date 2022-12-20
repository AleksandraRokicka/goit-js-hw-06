

"use strict";
const inputArea = document.querySelector("#font-size-control");//dobieramy się do id inputa//
const textSize = document.querySelector("#text");//dobieramy się do spana//
inputArea.addEventListener("input", (event) => {//dodajemy eventlistenera - input//
  textSize.style.fontSize = inputArea.value + "px";//do zmiennej dodajemy styl fontsize, ktory jest rowny temu co jest wpisane w input area+jednostka//
});