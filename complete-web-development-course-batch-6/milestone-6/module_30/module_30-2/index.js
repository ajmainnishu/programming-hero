// ES6 Intro difference between var, Let and const



// const student = {
//     name: 'mofiz',
//     address: 'Rangpur'
// }
// student.name = 'Mofazzol';
// console.log(student);




var numbers = [12, 14, 11, 17, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    sum = sum + number;
}
console.log(number);