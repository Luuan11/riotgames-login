const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login-btn')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {

    if(target.value === ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () =>{
    const [user, password] = inputs;

    if(user.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

inputs.forEach((input) => input.addEventListener('input', handleChange));
