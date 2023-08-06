const inputField = id => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

// button name send
document.getElementById('btn-send-name').addEventListener('click', function () {
    localStorage.setItem('name', inputField('input-field-name'))
})

// button name delete
document.getElementById('btn-delete-name').addEventListener('click', function () {
    localStorage.removeItem('name');
})

// button email send
document.getElementById('btn-send-email').addEventListener('click', function () {
    localStorage.setItem('email', inputField('input-field-email'))
})

// button email delete
document.getElementById('btn-delete-email').addEventListener('click', function () {
    localStorage.removeItem('email');
})

// button message send
document.getElementById('btn-send-message').addEventListener('click', function () {
    localStorage.setItem('message', inputField('input-field-message'))
})

// button message delete
document.getElementById('btn-delete-message').addEventListener('click', function () {
    localStorage.removeItem('message');
})

// button send
document.getElementById('btn-send').addEventListener('click', function () {
    const name = inputField('input-field-name');
    const email = inputField('input-field-email');
    const message = inputField('input-field-message');
    const together = JSON.stringify({name, email, message});
    localStorage.setItem('together', together);
})

// common utilities
const documentGetElementById = (value1, value2, value3) => {
    document.getElementById('input-field-name').value = value1;
    document.getElementById('input-field-email').value = value2;
    document.getElementById('input-field-message').value = value3;
}

// button reset
document.getElementById('btn-reset').addEventListener('click', function () {
    localStorage.clear();
    documentGetElementById('', '', '')
})

// display local storage value
const displayValue = () => {
    documentGetElementById(localStorage.getItem('name'), localStorage.getItem('email'), localStorage.getItem('message'))
}
displayValue();