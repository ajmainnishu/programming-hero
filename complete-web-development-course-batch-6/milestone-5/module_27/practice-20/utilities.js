// input field part
function getInputValue (inputValue) {
    const inputFieldValue = document.getElementById(inputValue)
    const inputFieldValueString = inputFieldValue.value;
    const inputField = parseFloat(inputFieldValueString);
    inputFieldValue.value = '';
    if (isNaN(inputField)) {
        alert('Please enter a number');
        return;
    }
    return inputField;
}

// number display part
function setElement (elementId, valueId) {
    const elementFieldValue = document.getElementById(elementId);
    if (isNaN(valueId)) {
        elementFieldValue.style.display = 'hidden';
        return;
    }
    elementFieldValue.innerText = valueId;
}