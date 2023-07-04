document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    const depositTotalElement = document.getElementById('deposit-total');
    depositTotalElement.innerText = depositAmount;
})
