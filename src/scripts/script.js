const slidesContainer = document.querySelector('[data-container="slides"]');
const imageContainer = document.querySelector('[data-container="image"]');
const movesContainer = document.querySelector('[data-moves]');
const dialogElement = document.querySelector('[data-dialog]');
const totalMovesContainer = document.querySelector('[data-container="moves"]');
const playAgainButton = document.querySelector('[data-button="play-again"]');
//add ids to squares backwards
function appendSquares() {
  for (let i = 15; i >= 0; i--) {
    const square = document.createElement('div');
    const slideSquare = document.createElement('div');
    square.classList.add('square');
    square.id = i;
    slideSquare.classList.add('square');
    imageContainer.appendChild(square);
    slidesContainer.appendChild(slideSquare);
  }
}
appendSquares();
const slideSquares = slidesContainer.querySelectorAll('.square');
const imageSquares = imageContainer.querySelectorAll('.square');
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
      slide.setAttribute('draggable', 'true');
      slideSquares[i].appendChild(slide);
      numbers.add(randIdx);
      i++;
    }
  }
}
appendSlides();
const slides = slidesContainer.querySelectorAll('img');
//Adding id's to slide images according to their numeration in assets folder
function addID() {
  let regex = /\d+/g;
  slides.forEach((slide) => {
    let result = slide.src.match(regex);
    slide.id = result[result.length - 1];
  });
}
addID();
export {
  slideSquares,
  imageSquares,
  slidesContainer,
  movesContainer,
  slides,
  dialogElement,
  totalMovesContainer,
  playAgainButton
};
