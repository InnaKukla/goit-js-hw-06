const inputEl = document.querySelector('#validation-input');

console.log(inputEl)

const inputLength = Number(inputEl.dataset.length)
console.log(inputLength)
inputEl.addEventListener('blur', lostEvent);


function lostEvent(event) {
    if (event.currentTarget.value.length === inputLength) {

        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');  
        
    } else
       
        inputEl.classList.add('invalid');
}