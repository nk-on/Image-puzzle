const slidesContainer = document.querySelector('[data-container="slides"]');
const imageContainer = document.querySelector('[data-container="image"]');
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
};
appendSlides();
export { imageContainer, slidesContainer };
