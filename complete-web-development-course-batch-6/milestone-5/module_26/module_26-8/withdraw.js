document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWitDrawAmountString = withdrawField.value;
    const newWitDrawAmount = parseFloat(newWitDrawAmountString);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newWitDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    withdrawField.value = '';
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal - newWitDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})