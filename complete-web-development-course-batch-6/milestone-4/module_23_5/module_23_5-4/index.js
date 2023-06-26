// (advanced) Find the matching product by searching products



// const numbers = [45, 65, 23, 98, 19];
// for (const number of numbers) {
//     console.log(number);
// }




// const products = [
//     {id: 1, name: 'xiaomi phone One night', price: 19000},
//     {id: 2, name: 'iphone', price: 19000},
//     {id: 3, name: 'mac book air', price: 19000},
//     {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
//     {id: 5, name: 'Dell inspiron latop', price: 19000},
//     {id: 6, name: 'Samsung phone note 7', price: 19000},
//     {id: 7, name: 'Nokia old age phone gone', price: 19000},
//     {id: 8, name: 'Phone one', price: 19000}
// ]
// for (const product of products) {
//     console.log(product);
// }




// const products = [
//     {id: 1, name: 'xiaomi phone One night', price: 19000},
//     {id: 2, name: 'iphone', price: 19000},
//     {id: 3, name: 'mac book air', price: 19000},
//     {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
//     {id: 5, name: 'Dell inspiron latop', price: 19000},
//     {id: 6, name: 'Samsung phone note 7', price: 19000},
//     {id: 7, name: 'Nokia old age phone gone', price: 19000},
//     {id: 8, name: 'Phone one', price: 19000}
// ]
// function matchedProducts (products, search) {
//     const matched = [];
//     for (const product of products) {
//         if (product.name.includes(search)) {
//             matched.push(product);
//         }
//     }
//     return matched;
// }
// const result = matchedProducts(products, 'phone');
// console.log(result);


const products = [
    {id: 1, name: 'xiaomi phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 19000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron latop', price: 19000},
    {id: 6, name: 'Samsung phone note 7', price: 19000},
    {id: 7, name: 'Nokia old age phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 19000}
]
function matchedProducts (products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);