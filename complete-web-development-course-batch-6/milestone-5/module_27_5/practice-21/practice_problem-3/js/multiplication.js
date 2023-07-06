// multiplication part
document.getElementById('btn-mul').addEventListener('click', function () {
    const inputField1 = getInputValue('input-field-1');
    const inputField2 = getInputValue('input-field-2');
    const multiplicationNumber = inputField1 * inputField2;
    setElement('cal-number', multiplicationNumber);
})