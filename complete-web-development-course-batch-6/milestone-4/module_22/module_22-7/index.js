// Calculate the total cost of the products in a shopping cart



// const shoppingCart = [
//     {name: 'shoe', price: 1200},
//     {name: 'shirt', price: 2200},
//     {name: 'pant', price: 3700},
//     {name: 'belt', price: 600},
// ];
// function totalCost (products) {
//     let sum = 0;
//     for (let i = 0; i < products.length; i++) {
//         let product = products[i];
//         sum = sum + product.price;
//     }
//     return sum;
// }
// const expense = totalCost(shoppingCart);
// console.log('Total expense today:', expense);




const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 3700, quantity: 4},
    {name: 'belt', price: 600, quantity: 3},
];
function totalCost (products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);