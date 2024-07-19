import { imageContainer, slidesContainer } from './script.js';
function appendSquares() {
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    imageContainer.appendChild(square);
  }
};

function appendSlides() {
  for (let i = 0; i < 16; i++) {
    const slide = document.createElement('img');
    slide.classList.add('slide')
    slide.setAttribute('src', `Assets/toucan-splitedImages/${i}.jpg`);
    slidesContainer.appendChild(slide);
  }
}
appendSquares();
appendSlides();