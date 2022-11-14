
const refs = {
    butDecrement: document.querySelector('button[data-action="decrement"]'),
    butIncrement: document.querySelector('button[data-action="increment"]'),
    valueCounter: document.querySelector('#value'),
}

let counterValue = 0;

refs.butDecrement.addEventListener('click', decrementBtn)

function decrementBtn (event) {
    counterValue -= 1;
    refs.valueCounter.textContent = counterValue;
}


refs.butIncrement.addEventListener('click', incrementBtn)

function incrementBtn (event) {
    counterValue += 1;
    refs.valueCounter.textContent = counterValue;
}


