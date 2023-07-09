// calculate button part
document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputFieldPlayer = getinputFieldValue('input-field-player');
    const playerExpenses = document.getElementById('player-expenses');
    const playerList = document.getElementById('player-list');
    const playerListCount = playerList.childElementCount;
    const playerExpensesAmount = playerListCount * inputFieldPlayer;
    if (isNaN(playerExpensesAmount)) {
        return;
    }
    playerExpenses.innerText = playerExpensesAmount;
})



// total calculate button part
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const displayPlayerExpenses = document.getElementById('player-expenses');
    const displayplayerExpensesString = displayPlayerExpenses.innerText;
    const playerExpenses = parseInt(displayplayerExpensesString);
    const inputFieldManager = getinputFieldValue('input-field-manager');
    const inputFieldCoach = getinputFieldValue('input-field-coach');
    const totalAmount = playerExpenses + inputFieldManager + inputFieldCoach;
    const displayTotalAmount = document.getElementById('total-amount');
    if (isNaN(totalAmount)) {
        return;
    }
    displayTotalAmount.innerText = totalAmount;
})