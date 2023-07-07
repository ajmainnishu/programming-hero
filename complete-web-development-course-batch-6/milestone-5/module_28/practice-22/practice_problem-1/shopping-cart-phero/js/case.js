// case plus button
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const inputFieldValue = getInputField('case-number-field', true);
    devicePrice ('case-total', inputFieldValue, 59);
    calculationTotal();
})



// case minus button
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const inputFieldValue = getInputField('case-number-field', false);
    devicePrice ('case-total', inputFieldValue, 59);
    calculationTotal();
})