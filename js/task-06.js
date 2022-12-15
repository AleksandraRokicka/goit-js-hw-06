"use strict";

const inputArea = document.querySelector("#validation-input");

const lengthValue = inputArea.getAttribute("data-length");
inputArea.addEventListener("blur", (event) => {
  if (parseInt(lengthValue) === inputArea.value.trim().length) {
    inputArea.classList.add("valid");
    inputArea.classList.remove("invalid");
  } else {
    inputArea.classList.add("invalid");
    inputArea.classList.add("valid");
  }
});
