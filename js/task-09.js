function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
}
  
refs.btnEl.addEventListener('click', changeColor);

const randomColor = getRandomHexColor();

function changeColor(event) {
  const randomColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomColor;
  refs.spanEl.textContent = randomColor;
}
