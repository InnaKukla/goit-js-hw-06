const form = document.querySelector('.login-form')
console.log(form)
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget
    
    if (email.value === "" || password.value === "") {
        alert ("Please, fill in all the fields!");
    } else

        console.log({
            Login: email.value,
            Password: password.value
        })
    form.reset();
}

