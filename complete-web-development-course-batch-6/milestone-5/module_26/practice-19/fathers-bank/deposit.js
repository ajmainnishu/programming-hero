document.getElementById('btn-deposit').addEventListener('click', function () {
    // deposit input part
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    depositField.value = '';
    if (isNaN(depositFieldString)) {
        alert('Please provide a valid number');
        return;
    }
    const newDepositField = parseFloat(depositFieldString);

    // deposit display part
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalString = depositTotal.innerText;
    const newDepositTotal = parseFloat(depositTotalString);
    const totalDepositAmount = newDepositField + newDepositTotal;
    depositTotal.innerText = totalDepositAmount;

    // balance display part
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalString);
    if (newBalanceTotal < newDepositField) {
        alert('Please provide a less then total balance');
        return;
    }
    const totalBalanceAmount = newDepositField + newBalanceTotal;
    balanceTotal.innerText = totalBalanceAmount;
})