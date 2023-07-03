const h2 = document.getElementsByTagName('h2');
for (const color of h2) {
    color.style.color = 'red';
}




document.getElementById('backpack').style.backgroundColor = 'tomato';




document.getElementById('console-log').addEventListener('click', function () {
    console.log("Click Handler")
})




const buyNow = document.getElementsByClassName('buy-now');
for (const buy of buyNow) {
    buy.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}




document.getElementById('send-input').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const sendButton = document.getElementById('send-email');
    if (text === 'email') {
        sendButton.removeAttribute('disabled');
    }
    else {
        sendButton.setAttribute('disabled', true);
    }
});




document.getElementById('myImg').addEventListener('mouseenter', function () {
    const shoesMouse = document.getElementById('shoes-mouse');
    shoesMouse.innerHTML = `
                <img id="myImg" class="w-100" src="./images/shoes/shoe-3.png" alt="">
                  <h4>Reebok Dart Men’s Shoes</h4>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                  <h4>$1289</h4>
                  <a id="console-log" href="" class="bg-black text-white px-4 py-2 text-decoration-none rounded-2 my-3 d-inline-block buy-now">BUY NOW &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
    `
})




document.getElementById('lets-touch').addEventListener('dblclick', function () {
    document.body.style.backgroundColor = 'lightgray';
})