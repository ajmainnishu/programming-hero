// multiple ways to get and set object property



// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }
// console.log(shoppingCart);




// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }
// var penCount = shoppingCart.pen;


// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }
// var penCount = shoppingCart['pen'];




// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }
// var properties = Object.keys(shoppingCart);
// console.log(properties);


/* var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
var properties = Object.values(shoppingCart);
console.log(properties); */




// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }
// var propertyName = 'mouse';
// var propertyValues = shoppingCart[propertyName];
// console.log(propertyValues);




// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }
// shoppingCart['mouse'] = 15;
// console.log(shoppingCart);


var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
var propertyName = 'mouse';
shoppingCart[propertyName] = 15;
console.log(shoppingCart);