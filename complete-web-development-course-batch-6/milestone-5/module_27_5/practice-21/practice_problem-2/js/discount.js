// discount part
document.getElementById('btn-apply').addEventListener('click', function () {
    const inputField = getInputValue('input-field');
    if (inputField === 'DOM') {
        const discountAmount = (100 * 30) / 100;
        const discount = 100 - discountAmount;
        setElement('discount-number', discount);
    }
    else {
        setElement('discount-number', 100);
    }
})