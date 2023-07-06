// withdraw button part
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputFieldValue = getInputFieldValue('withdraw-field');
    const elementDisplayValue = getElementDisplayValue('withdraw-total');
    const balanceDisplayValue = getElementDisplayValue('balance-total');
    if (balanceDisplayValue < inputFieldValue) {
        alert('Do not have enough balance');
        return;
    }
    const withdrawTotal = inputFieldValue + elementDisplayValue;
    setElementValue('withdraw-total', withdrawTotal);
    const balanceTotal = balanceDisplayValue - inputFieldValue
    setElementValue('balance-total', balanceTotal);
})