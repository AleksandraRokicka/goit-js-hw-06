"use strict";
let counterValue = 0; //tworzymy zmienną, gdzie przechoywana jest wartość licznika, najpier jest 0;//
let number = document.querySelector("#value"); //dobieramy sie do spana//

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
); //dobieramy sie za pomoca atrybutów danych do buttona, który zmniejsza wartość//
decrementButton.addEventListener("click", (e) => {
  //dodajemy eventlistenera=click//
  counterValue--; // zmienna counterValue pomniejszamy o 1//
  number.innerHTML = counterValue; //??//
});

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
); //dobieramy sie za pomoca atrybutów danych do buttona, który zwiększa wartość//
incrementButton.addEventListener("click", (e) => {
  //dodajemy eventlistenera=click//
  counterValue++; // zmienna counterValue powiekszamy o 1//
  number.innerHTML = counterValue; //??//
});
