const slidesContainer = document.querySelector('[data-container="slides"]');
const imageContainer = document.querySelector('[data-container="image"]');
const movesContainer = document.querySelector('[data-moves]');
let moves = 0;
function appendSquares() {
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement('div');
    const slideSquare = document.createElement('div');
    square.classList.add('square');
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
      slide.id = i;
      numbers.add(randIdx);
      i++;
    }
  }
}
appendSlides();
const slides = slidesContainer.querySelectorAll('img');
slides.forEach((slide, index) => {
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
