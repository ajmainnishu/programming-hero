// division part
document.getElementById('btn-div').addEventListener('click', function () {
    const inputField1 = getInputValue('input-field-1');
    const inputField2 = getInputValue('input-field-2');
    const divisionNumber = inputField1 / inputField2;
    setElement('cal-number', divisionNumber);
})