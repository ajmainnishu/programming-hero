// double button part
document.getElementById('btn-double').addEventListener('click', function () {
    const inputField = getInputValue('input-field');
    const doubleNumber = inputField * 2;
    setElement('double-number', doubleNumber);
})