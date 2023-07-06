// input field part
function getInputValue (inputValue) {
    const inputFieldValue = document.getElementById(inputValue)
    const inputFieldValueString = inputFieldValue.value;
    inputFieldValue.value = '';
    if (inputFieldValueString === '') {
        alert('Please type');
        setElement('discount-number', 100)
        return;
    }
    return inputFieldValueString;
}

// number display part
function setElement (elementId, valueId) {
    const elementFieldValue = document.getElementById(elementId);
    elementFieldValue.innerText = valueId;
}