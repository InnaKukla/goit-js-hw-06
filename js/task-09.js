function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
}
  
refs.btnEl.addEventListener('click', changeColor);

function changeColor(event) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor()
}
