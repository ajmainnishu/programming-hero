// 7. An array contains many objects. Find the object whose price is 5000 ace with find.



const phone = [
    {id: 1, name: 'Samsung', price: 20000},
    {id: 2, name: 'iphone', price: 80000},
    {id: 3, name: 'Techno', price: 5000},
    {id: 4, name: 'Xiaomi', price: 40000}
];
const phonePrice = phone.find(price => price.price === 5000);
console.log(phonePrice);