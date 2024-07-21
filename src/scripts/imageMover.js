import { slideSquares,imageSquares,slidesContainer,movesContainer } from "./script.js";
const slides = slidesContainer.querySelectorAll('img');
let moves = 0;
slides.forEach((slide) => {
  slide.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
  slide.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});
slideSquares.forEach((square) => {
  square.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  square.addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text');
    const dropElement = document.getElementById(id);
    square.appendChild(dropElement);
  });
});
imageSquares.forEach((square) => {
  square.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  square.addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text');
    const dropElement = document.getElementById(id);
    square.appendChild(dropElement);
    moves++;
    movesContainer.innerText = moves;
  });
});
