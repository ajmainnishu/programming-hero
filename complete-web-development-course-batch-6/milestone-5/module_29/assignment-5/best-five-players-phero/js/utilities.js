// common function part
function getinputFieldValue (elementId) {
    const inputFieldValue = document.getElementById(elementId);
    const inputFieldValueString = inputFieldValue.value;
    const inputField = parseInt(inputFieldValueString);
    inputFieldValue.value = '';
    if (isNaN(inputField)) {
        alert('Please enter number');
        return;
    }
    return inputField;
}