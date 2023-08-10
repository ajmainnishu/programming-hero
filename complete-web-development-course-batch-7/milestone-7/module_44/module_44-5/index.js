// JSON, Fetch, keys, values, array add or remove using dots



// const student = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// }
// const studentJSON = JSON.stringify(student);
// console.log(studentJSON);
// const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);




// const student = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// }
// const keys = Object.keys(student);
// const values = Object.values(student);
// console.log(keys, values);




// const products = [
//     {name: 'laptop', price: 3200, brand: 'len', color: 'silver'},
//     {name: 'phone', price: 7000, brand: 'HTC', color: 'golden'},
//     {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
//     {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
//     {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
// ];
// const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};
// const newProducts = [...products, newProduct];
// console.log(newProducts);
// console.log(products);




const products = [
    {name: 'laptop', price: 3200, brand: 'len', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'HTC', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);