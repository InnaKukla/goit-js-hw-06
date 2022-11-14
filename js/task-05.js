const input = document.querySelector('#name-input');

const nameLabel = document.querySelector('#name-output')


input.addEventListener('input', changeLabel);

function changeLabel(event) {
    nameLabel.textContent = event.currentTarget.value;
    if (!nameLabel.textContent) {
        return (nameLabel.textContent = "Anonymous")
    }
}