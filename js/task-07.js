// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие
//      input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
//      В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);
const textEl = document.querySelector('#text')
console.log(textEl);


    inputEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px'
}