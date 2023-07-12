// Implement filter, find on an array of objects



// const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums);


// const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// const tinyNums = numbers.filter(number => number < 20);
// console.log(tinyNums);


// const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// const even = numbers.filter(n => n % 2 === 0);
// console.log(even);


// const products = [
//     {id: 1, name: 'laptop', price: 45000},
//     {id: 2, name: 'mobile', price: 80000},
//     {id: 3, name: 'watch', price: 35000},
//     {id: 4, name: 'tablet', price: 23000},
// ];
// const expensive = products.filter(product => product.price > 100000);
// console.log(expensive);




// const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// const fives = numbers.find(num => num % 5 === 0);
// console.log(fives);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000},
];
const cheap = products.find(product => product.price < 40000);
console.log(cheap);