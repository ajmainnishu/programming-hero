// additional part
document.getElementById('btn-add').addEventListener('click', function () {
    const inputField1 = getInputValue('input-field-1');
    const inputField2 = getInputValue('input-field-2');
    const additionNumber = inputField1 + inputField2;
    setElement('cal-number', additionNumber);
})