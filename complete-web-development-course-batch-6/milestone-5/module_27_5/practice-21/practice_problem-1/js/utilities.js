// get input field part
function getInputFieldValue (inputId) {
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputField = parseFloat(inputFieldValueString);
    inputFieldValue.value = '';
    if (isNaN(inputField)) {
        alert('Please enter a number');
        return;
    }
    return inputField;
}

// get amount part
function getElementDisplayValue (elementId) {
    const elementDisplayValue = document.getElementById(elementId);
    const elementDisplayValueString = elementDisplayValue.innerText;
    const elementValue = parseFloat(elementDisplayValueString);
    return elementValue;
}

// display amount part
function setElementValue (elementId, valueId) {
    const elementDisplayValue = document.getElementById(elementId);
    if (isNaN(valueId)) {
        return;
    }
    elementDisplayValue.innerText = valueId;
}