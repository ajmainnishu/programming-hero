// deposit button part
document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputFieldValue = getInputFieldValue('deposit-field');
    const elementDisplayValue = getElementDisplayValue('deposit-total');
    const depositTotal = inputFieldValue + elementDisplayValue;
    setElementValue('deposit-total', depositTotal);
    const balanceDisplayValue = getElementDisplayValue('balance-total');
    const balanceTotal = inputFieldValue + balanceDisplayValue;
    setElementValue('balance-total', balanceTotal);
});