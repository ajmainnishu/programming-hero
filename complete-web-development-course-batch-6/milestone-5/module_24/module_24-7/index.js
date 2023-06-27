// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.firstChild);


// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes);


// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes[3]);


// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes[3].childNodes);


// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes[3].childNodes[5]);


// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes[3].childNodes[5].nextSibling);


// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes[3].childNodes[5].previousSibling);


// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer.childNodes[3].childNodes[5].previousSibling);




// const placeUL = document.querySelector('#places-container ul')
// console.log(placeUL);




// const para = document.createElement('p');
// console.log(para);


// const span = document.createElement('p');
// console.log(span);


// const div = document.createElement('div');
// console.log(div);




// const li = document.createElement('li');
// li.innerText = 'Brand New place to go';
// console.log(li);




// const li = document.createElement('li');
// li.innerText = 'Brand New place to go';
// const placeUL = document.querySelector('#places-container ul')
// console.log(placeUL.appendChild(li));




const placeUL = document.querySelector('#places-container ul')
const li2 = document.createElement('li');
li2.innerText = 'another dynamic li';
placeUL.append(li2);
console.log(placeUL.parentNode);
console.log(placeUL.parentNode.parentNode);
console.log(placeUL.parentNode.parentNode.parentNode);
console.log(placeUL.parentNode.parentNode.parentNode.parentNode);
console.log(placeUL.parentNode.parentNode.parentNode.parentNode.parentNode);