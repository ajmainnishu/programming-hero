// (advanced) function arguments pass by reference pass by value



// function sum (a, b, c) {
//     const result = a + b + c;
//     return result;
// }
// console.log(arguments);
// const total = sum(45, 89, 12, 45, 98, 56);




// function sum (a, b, c) {
//     console.log(arguments);
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);


// function sum (a, b, c) {
//     console.log(arguments[4]);
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);


// function sum (a, b, c) {
//     console.log(typeof arguments);
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);


// function sum (a, b, c) {
//     for (const args of arguments) {
//         console.log(args);
//     }
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);


// function sum (a, b, c) {
//     const args = [...arguments];
//     console.log(args);
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);




// function sum (a, b, c) {
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12, 45, 98, 56);
// console.log(typeof sum);




// function sum (a, b, c) {
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12, 45, 98, 56);
// console.log(sum.length);




// let num1 = 5;
// let num2 = 7;
// function multiply (a, b) {
//     const result = a * b;
//     return result;
// }
// const output = multiply(num1, num2);
// console.log(output);


// let num1 = 5;
// let num2 = 7;
// function multiply (a, b) {
//     a = 27
//     const result = a * b;
//     return result;
// }
// const output = multiply(num1, num2);
// console.log(output);




// let num1 = 5;
// let num2 = 7;
// function multiply (a, b) {
//     a = 27
//     const result = a * b;
//     return result;
// }
// console.log(num1, num2);
// const output = multiply(num1, num2);
// console.log(output);
// console.log(num1, num2);


let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};
function makeMovie (couple1, couple2) {
    couple1.name = 'Ononto';
    couple2.name = 'mim';
    console.log('1', couple1, couple2)
}
console.log('2', student1, student2);
makeMovie(student1, student2);
console.log('3', student1, student2);