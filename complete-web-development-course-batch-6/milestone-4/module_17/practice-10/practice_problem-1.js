// You are given an array: var fruits = ['Apple', 'Banana', 'Orange'];



// a)
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);
fruits[bananaIndex] = 'Mango';
console.log(fruits);


// b)
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);