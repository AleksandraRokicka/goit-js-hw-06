"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery"); //dobieramy się do galerii//

const imageCode = images
  .map(
    (
      image //robimy pętle po tablicy-stałej z obrazami//
    ) =>
      `<li class="item"><img class="image" src=${image.url} alt="${image.alt}"/></li>`
  ) //dodajemy li o klasie item, dodajemy img o klasie image, robimy ściezkę  do obrazu i tekst alternatywny//
  .join(""); //usuwamy grawis, który jest między obrazkami, poprzez wrzucenie pustego stringa//

list.insertAdjacentHTML("beforeend", imageCode); //wrzucamy wszystko w listę//
