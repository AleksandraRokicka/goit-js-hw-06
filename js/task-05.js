"use strict";
const input = document.querySelector("#name-input"); //dobieramy sie do inputa, gdzie wpisujemy wartość//
const output = document.querySelector("#name-output"); //dobieramy się do inputa, gdzie pokazywane jest nasze wpisane imię//

input.addEventListener("input", (event) => {
  //dodajemy eventlistenera - input//
  const inputValue = input.value; //utworzenie zmiennej by dostać się do wpisanej przez kogos wartosci w inpucie//

  if (inputValue === "") {
    //jeśli wartość jest pusta...//
    output.textContent = "Anonymous"; //to output pokazuje tekst Anonymus//
  } else {
    //w przeciwnym razie//
    output.textContent = inputValue; //output pokazuje tekst - tą wpisaną wartość//
  }
});
