document.getElementById('btn-withdraw').addEventListener('click', function () {
    // withdraw input part
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    withdrawField.value = '';
    if (isNaN(withdrawFieldString)) {
        alert('Please provide a valid number');
        return;
    }
    const newWithdrawField = parseFloat(withdrawFieldString);

    // withdraw display part
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalString);

    // balance display part
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalString);
    if (newWithdrawField > newBalanceTotal) {
        alert('Please provide number below total balance');
        return;
    }
    const totalWithdrawAmount = newWithdrawField + newWithdrawTotal;
    withdrawTotal.innerText = totalWithdrawAmount;
    const totalBalanceAmount = newBalanceTotal - newWithdrawField;
    balanceTotal.innerText = totalBalanceAmount;
})