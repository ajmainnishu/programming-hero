// players button part
const buttonPlayers = document.getElementsByClassName('btn-players');
for (const player of buttonPlayers) {
    player.addEventListener('click', function () {
        const playerName = player.parentNode.firstElementChild.innerText;
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = playerName;
        li.classList.add('text-start');
        li.classList.add('ps-3');
        li.classList.add('py-2');
        playerList.appendChild(li);
        const listArray = playerList.childNodes;
        if (listArray.length >= 7) {
            alert('Maximum 5 players selected');
            playerList.removeChild(li);
            return;
        }
        if (player) {
            player.setAttribute('disabled', true);
        }
    });
}