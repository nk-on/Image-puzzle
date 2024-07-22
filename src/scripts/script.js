const slidesContainer = document.querySelector('[data-container="slides"]');
const imageContainer = document.querySelector('[data-container="image"]');
const movesContainer = document.querySelector('[data-moves]');
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
      numbers.add(randIdx);
      i++;
    }
  }
}
appendSlides();
const slides = slidesContainer.querySelectorAll('img');
function addID(){
  let regex = /\d+/g;
  slides.forEach((slide)=>{
    console.log(slide.src)
    let result = slide.src.match(regex);
    slide.id = result[result.length-1];
  });
}; 
addID();
export {slideSquares,imageSquares,slidesContainer,movesContainer,slides}