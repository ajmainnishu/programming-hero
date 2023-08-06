let count = 0;
const p = document.getElementById('p');

// button add
document.getElementById('btn-add').addEventListener('click', function () {
    count++;
    localStorage.setItem('count', JSON.stringify({count}));
    p.innerText = count;
})

// display number
const displayCount = () => {
    const count = localStorage.getItem('count');
    const countNumber = JSON.parse(count);
    p.innerText = countNumber?.count ? countNumber.count : 0
}
displayCount();