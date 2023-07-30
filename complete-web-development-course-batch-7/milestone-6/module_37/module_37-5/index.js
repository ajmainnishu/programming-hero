// Block scope global scope simple understanding of Hoisting



// function add (a, b) {
//     const total = a + b;
//     if (b > 5) {
//         const sum = 25 + a + b;
//     }
//     else {
//         const sum = 5 + a + b;
//         var current = sum;
//     }
//     console.log(current);
//     return total;
// }
// add(5, 6);


// function add (a, b) {
//     const total = a + b;
//     if (b > 5) {
//         const sum = 25 + a + b;
//     }
//     else {
//         const sum = 5 + a + b;
//         var current = sum;
//     }
//     console.log(current);
//     return total;
// }
// add(5, 3);




// for (var i = 0; i < 5; i++) {
//     console.log(i);1
// }
// console.log('outside', i);




// print5();
// function print5 () {
//     console.log('inside print5', 5);
// }




console.log(print10);
var print10 = function () {
    console.log('inside print10', 10)
}