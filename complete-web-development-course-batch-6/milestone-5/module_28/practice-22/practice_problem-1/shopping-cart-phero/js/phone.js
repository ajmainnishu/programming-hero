// phone plus button
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const inputFieldValue = getInputField('phone-number-field', true);
    devicePrice ('phone-total', inputFieldValue, 1219);
    calculationTotal();
})



// phone minus button
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const inputFieldValue = getInputField('phone-number-field', false);
    devicePrice ('phone-total', inputFieldValue, 1219);
    calculationTotal();
})