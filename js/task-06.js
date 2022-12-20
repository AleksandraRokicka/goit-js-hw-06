"use strict";
const inputArea = document.querySelector("#validation-input"); //dobieramy się do id inputa//

const lengthValue = inputArea.getAttribute("data-length"); //dobranie sie do atrybutu data-length//
inputArea.addEventListener("blur", (event) => {
  //dodajemy eventlistenera-blur??//
  if (parseInt(lengthValue) === inputArea.value.trim().length) {
    //uzywmay parseInt aby przekonwertowac liczbe w stringu "6" na liczbe zwykla - 6, aby mozna bylo policzyc ilosc wpisywanych znakow//
    //czyli jesli ilosc znakow wynoszaca 6 (podane w kodzie html) jest scisle rowna ilosci znakow pisanej przez uzytkownaika - liczymy to za pomoca lenght i trim() - trim usuwa spacje jako znaki//
    inputArea.classList.add("valid"); //dodajemy klasę walid//
    inputArea.classList.remove("invalid"); //usuwamy klasę invalid//
  } else {
    //w przeciwnym razie...//
    inputArea.classList.add("invalid"); //dodajemy klasę inwalid//
    inputArea.classList.add("valid"); //dodajemy klasę valid//
  }
});
