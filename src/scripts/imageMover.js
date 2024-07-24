import {
  slideSquares,
  imageSquares,
  movesContainer,
  slides,
} from './script.js';
function matchChecker() {
  let matches = 0;
  return (dropElementId, squareId) => {
    if (dropElementId === squareId) {
      matches++;
    }
    if (matches === 16) {
      alert('Congratulations you solved the puzzle');
    }
  };
}
function moveIncreaser() {
  let moves = 0;
  return () => {
    moves++;
    movesContainer.innerText = moves;
  };
}
const checkMatch = matchChecker();
const increaseMoves = moveIncreaser();
slides.forEach((slide) => {
  slide.addEventListener('dragstart', (e) => {
    slide.classList.add('draggable');
    console.log(slide);
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
    square.appendChild(dropElement);
    dropElement.classList.remove('draggable');
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
    increaseMoves();
    dropElement.classList.remove('draggable');
  });
});
export { slides };
