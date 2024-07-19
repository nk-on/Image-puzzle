import { imageContainer, slidesContainer } from './script.js';
function appendSquares() {
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    imageContainer.appendChild(square);
  }
}
appendSquares();
