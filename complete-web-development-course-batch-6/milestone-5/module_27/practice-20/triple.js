// triple button part
document.getElementById('btn-triple').addEventListener('click', function () {
    const inputField = getInputValue('input-field');
    const tripleNumber = inputField * 3;
    setElement('triple-number', tripleNumber);
})