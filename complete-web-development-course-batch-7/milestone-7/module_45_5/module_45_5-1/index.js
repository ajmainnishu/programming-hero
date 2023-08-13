const images = [
    "./images/pic-1.jpg",
    "./images/pic-2.jpg",
    "./images/pic-3.jpg",
    "./images/pic-4.jpg"
]
let imgIndex = 0;
const imgEl = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    } 
    const imgUrl = images[imgIndex];
    imgEl.setAttribute('src', imgUrl)
    imgIndex++;
}, 500);