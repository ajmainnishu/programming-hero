// (advanced) Looping through an Object and Object summary



// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2
// }
// const keys = Object.keys(shoppingCart);
// console.log(keys);
// const values = Object.values(shoppingCart);
// console.log(values);
// for (i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, propertyValue);
// }


var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}