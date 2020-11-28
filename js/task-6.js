const inputColorRef = document.querySelector('#validation-input');

inputColorRef.addEventListener('change', event => {
    if (inputColorRef.value.length == inputColorRef.getAttribute("data-length")) {
        inputColorRef.className = 'valid';
    }
    else {
        inputColorRef.className = 'invalid';
    }
})