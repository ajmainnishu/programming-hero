// Everything you need to know about return from a function



// function add(number1, number2) {
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }
// var total = add(80, 20);
// console.log('total', total);


// function add(number1, number2) {
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }
// console.log(add(80, 20));


// function add(number1, number2) {
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return;
// }
// var total = add(80, 20);
// console.log('total', total);


// function add(number1, number2) {
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return 500;
// }
// var total = add(80, 20);
// console.log('total', total);


// function add(number1, number2) {
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return 500;
//     console.log('I am hungry');
//     return 'hello done';
// }
// var total = add(80, 20);
// console.log('total', total);


function bringSingara (money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 200;
var singaras = bringSingara(myTaka);
console.log('Eating singaras', singaras);