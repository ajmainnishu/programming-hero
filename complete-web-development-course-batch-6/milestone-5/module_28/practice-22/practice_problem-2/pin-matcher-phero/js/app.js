// generator pin part
function generatePin () {
    const generatePin = Math.round(Math.random() * 10000);
    const generatePinString = generatePin + '';
    if (generatePinString.length === 4) {
        return generatePin;
    }
    else {
        return generatePin();
    }
}

// generator pin field part
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = generatePin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

// calculator part
document.getElementById('calculator').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    if (isNaN(numbers)) {
        if (numbers === 'C') {
            typedNumberField.value = '';
        }
        else if (numbers === '<') {
            const numbersArray = typedNumber.split('');
            numbersArray.pop();
            const newNumbers = numbersArray.join('');
            typedNumberField.value = newNumbers;
        }
    }
    else {
        const newTypedNumber = typedNumber + numbers;
        typedNumberField.value = newTypedNumber;
    }
})

// pin matching part
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if (displayPin === typedNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'block';
    }
    displayPinField.value = '';
    typedNumberField.value = '';
})