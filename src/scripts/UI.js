import { imageContainer, slidesContainer } from './script.js';
function appendSquares() {
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    imageContainer.appendChild(square);
  }
}
function appendSlides() {
  let i = 0;
  const numbers = new Set();
  while (i < 16) {
    let randIdx = Math.floor(Math.random() * 16);
    if (numbers.has(randIdx)) {
      randIdx = Math.floor(Math.random() * 16);
    } else {
      const slide = document.createElement('img');
      slide.classList.add('slide');
      slide.setAttribute('src', `Assets/toucan-splitedImages/${randIdx}.jpg`);
      slidesContainer.appendChild(slide);
      i++;
    }
  }
}
appendSquares();
appendSlides();
