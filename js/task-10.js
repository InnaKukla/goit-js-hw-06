function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего 
// рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция 
// создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

const refs = {
  inputEl: document.querySelector("#controls input"),
  btnElCreate: document.querySelector('[data-create]'),
  btnElDestroy: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector("#boxes"),
}
refs.btnElCreate.addEventListener('click', onBtnCreateElClick);
refs.btnElDestroy.addEventListener('click', removeBoxes)


const getInputValue = () => Number(refs.inputEl.value);
// const changeSize =() => 

function createBoxes(amount) {
  let boxSize = 30;
  let str = `<div style = width =${boxSize}px height =${boxSize}px`
}
function onBtnCreateElClick() {
  const boxes = [];
  let amount = getInputValue();
  // let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {

    const color = getRandomHexColor();
    const box = document.createElement("div");
   
    


    box.style.backgroundColor = color;
    // box.style.width = `${boxSize}px + 10 px'`;
    
    boxes.push(box);
  }
  
  refs.boxEl.append(...boxes);
  console.log(boxes)
}



// const inputEl = document.querySelector("#controls input")
// console.log(inputEl);
// const btnElCreate = document.querySelector('[data-create]')
// console.log(btnElCreate);
// const btnElDestroy = document.querySelector('[data-destroy]')
// console.log(btnElDestroy);
// const boxesEl = document.querySelector("#boxes")
// console.log(boxesEl);

// btnElCreate.addEventListener('click', onBtnCreateElClick);
// // btnElDestroy.addEventListener('click', onBtnDestroyElClick);

// const getInputValue = () => Number(inputEl.value)

// // const collection= []
// function onBtnCreateElClick() {
//   const boxes = [];
//   let amount = getInputValue();
//   for (let i = 1; i <= amount; i += 1) {
//     // getRandomHexColor()
//     // boxes.push(i);
//     const color = getRandomHexColor();
//     const box = document.createElement("div")
    
//     box.style.backgroundColor = color;
//     box.style.width = 30 + (i + 10);

//     boxes.push(box);

//   }
//   boxesEl.append(...boxes)
//   console.log(boxes)
// }
// // onBtnCreateElClick(3)
// // function onBtnDestroyElClick(event) {
  
// // }
// // const collection= []
// // function btnCreate(event) {
// //   event.currentTarget.push(collection)
// // // }
// // function createBoxes(amount){
// //   const newBoxes = document.createElement("div")
// //   boxesEl.append(newDiv) + amount
// // }
// // createBoxes(5);