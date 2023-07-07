// input field value
function getInputField (inputId, booleanValue) {
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputValue = parseInt(inputFieldValueString);
    let newNumber
    if (booleanValue) {
        newNumber = inputValue + 1;
    }
    else {
        newNumber = inputValue - 1;
    }
    inputFieldValue.value = newNumber;
    return newNumber;;
}



// device price
function devicePrice (elementPrice, inputFieldValue, price) {
    const deviceValue = document.getElementById(elementPrice);
    const devicePrice = inputFieldValue * price;
    deviceValue.innerText = devicePrice;
}



// number convert
function getTextElementByValue (elementId) {
    const elementPriceValue = document.getElementById(elementId);
    const elementPriceValueString = elementPriceValue.innerText;
    const elementPrice = parseInt(elementPriceValueString);
    return elementPrice;
}



// price set
function setValue (elementId, valueId) {
    const getTotalValue = document.getElementById(elementId)
    getTotalValue.innerText = valueId;
}



// total device price with tax
function calculationTotal () {
    const casePrice = getTextElementByValue('case-total');
    const phonePrice = getTextElementByValue('phone-total');
    const deviceTotalPrice = casePrice + phonePrice;
    setValue('sub-total', deviceTotalPrice);
    const taxAmountString = (deviceTotalPrice * 0.1).toFixed(1);
    const taxAmount = parseFloat(taxAmountString);
    setValue('tax-amount', taxAmount);
    const totalPrice = deviceTotalPrice + taxAmount;
    setValue('final-total', totalPrice);
}