import {
  slideSquares,
  imageSquares,
  movesContainer,
  slides,
  dialogElement,
  totalMovesContainer,
  playAgainButton,
} from './script.js';
function moveIncreaser() {
  let moves = 0;
  return () => {
    moves++;
    movesContainer.innerText = moves;
  };
}
const increaseMoves = moveIncreaser();
function openDialog() {
  dialogElement.showModal();
  totalMovesContainer.textContent = movesContainer.innerText;
  playAgainButton.addEventListener('click', () => {
    location.reload();
  });
};
function checkCompletion() {
  for (let i = 0; i < imageSquares.length; i++) {
    const imageSquare = imageSquares[i];
    console.log(imageSquare);
    let imgId;
    if (imageSquare.firstChild) {
      imgId = imageSquare.firstChild.id;
    }
    if (imgId !== imageSquare.id) {
      return;
    }
  }
  openDialog();
}
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
    if(square.children.length > 0) return;
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
    if(square.children.length > 0) return;
    square.appendChild(dropElement);
    increaseMoves();
    checkCompletion();
    dropElement.classList.remove('draggable');
  });
});
export { slides };
