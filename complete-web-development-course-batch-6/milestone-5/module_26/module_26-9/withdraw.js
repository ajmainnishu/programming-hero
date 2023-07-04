document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWitDrawAmountString = withdrawField.value;
    const newWitDrawAmount = parseFloat(newWitDrawAmountString);
    withdrawField.value = '';
    if (isNaN (newWitDrawAmount)) {
        alert('Please provide a valid number')
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (newWitDrawAmount > previousBalanceTotal) {
        alert ('Baap er bank e eto taka nai');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWitDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    const newBalanceTotal = previousBalanceTotal - newWitDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})