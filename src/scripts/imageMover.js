import {
  slideSquares,
  imageSquares,
  movesContainer,
  slides,
  checkMatch,
} from './script.js';
let moves = 0;
console.log(slides)
slides.forEach((slide) => {
  slide.addEventListener('dragstart', (e) => {
      slide.classList.add('draggable');
      console.log(slide)
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
    const dropElement = document.getElementsByClassName('draggable')[0];
    checkMatch(square.id, dropElement.id);
    square.appendChild(dropElement);;
  });
});
imageSquares.forEach((square) => {
  square.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  square.addEventListener('drop', (e) => {
    const dropElement = document.getElementsByClassName('draggable')[0];
    checkMatch(square.id, dropElement.id);
    square.appendChild(dropElement);
    moves++;
    movesContainer.innerText = moves;
  });
});
export { slides };
