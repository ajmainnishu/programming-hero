// minus part
document.getElementById('btn-minus').addEventListener('click', function () {
    const inputField1 = getInputValue('input-field-1');
    const inputField2 = getInputValue('input-field-2');
    const minusNumber = inputField1 - inputField2;
    setElement('cal-number', minusNumber);
})