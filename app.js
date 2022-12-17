let quoteWrapper = document.querySelector(".quote");

let quote = quoteWrapper.textContent.trim();
let words = quote.split(" ");

words = words.map((word) => {
  let letters = word.split("");

  letters = letters.map((letter) => `<span class="letter">${letter}</span>`);
  word = letters.join("");
  return `<div>${word}</div>`;
});

words = words.join("<span class='empty'></span>");

quoteWrapper.innerHTML = words;

let letters = document.querySelectorAll(".letter");

letters.forEach((letter, index) => {
  letter.style.animationDelay = 50 * index + "ms";
});
