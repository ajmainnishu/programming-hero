// input field part
function getInputValueField (elementId) {
    const inputValueField = document.getElementById(elementId);
    const inputValueFieldString = inputValueField.value;
    const inputValue = parseInt(inputValueFieldString);
    if (isNaN(inputValue)) {
        inputValueField.value = '';
        return;
    }
    return inputValue;
}


// display value part
function displayValue (elementId, valueId) {
    const displayElementValue = document.getElementById(elementId);
    if (isNaN(valueId)) {
        return;
    }
    displayElementValue.innerText = valueId;
}


// calculate expenses part
function getTotalExpenses () {
    const inputFoodValue = getInputValueField('input-food-field');
    const inputRentValue = getInputValueField('input-rent-field');
    const inputClothesValue = getInputValueField('input-clothes-field');
    const totalExpenses = inputFoodValue + inputRentValue + inputClothesValue;
    return totalExpenses;
}


// calculate balance part
function getTotalBalance () {
    const inputIncomeValue = getInputValueField('input-income-field');
    const totalExpenses = getTotalExpenses();
    const totalBalance = inputIncomeValue - totalExpenses;
    return totalBalance;
}

// input field value clear part
function inputValueClear (elementId) {
    const inputValueField = document.getElementById(elementId);
    inputValueField.value = '';
}

function inputClear () {
    inputValueClear('input-income-field');
    inputValueClear('input-food-field');
    inputValueClear('input-rent-field');
    inputValueClear('input-clothes-field');
    inputValueClear('input-save-field');
}