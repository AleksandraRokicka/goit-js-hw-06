"use strict";

const listCategories = document.querySelectorAll("li.item"); //dobranie się do listy z klasą item//
console.log(`Number of categories: ${listCategories.length}`); //liczymy ilosc kategorii+wpisujemy za pomocą łancucha szablonowego ilość (length) kategorii.//

const ElementsAmountInCategory = listCategories.forEach((el) => {
  //pętla po liście li.item//
  console.log(
    `Category: ${el.querySelector("h2").textContent}\nElements: ${
      el.querySelector("ul").childElementCount
    }` //dobranie sie do tekstu nagłówka, /n -> nowa linijka, dobranie się do ul i policzenie jego dzieci (li)//
  );
});
