// Module introduction Different way to Create Object



// const player = {};
// player.name = 'Small Nirob';
// player.specialty = 'batsman';
// player.bat = function () {
//     console.log('swing your bat');
// }
// console.log(player);
// player.bat();




// const student = {
//     name: 'Pandey',
//     job: 'khai andey',
//     ball: function () {
//         console.log('throw the ball');
//     },
//     salary: 10000
// }
// console.log(student);




// const person = new Object();
// console.log(person);


// const person = Object();
// console.log(person);




// const item = Object.create(null);
// console.log(item);




// const student = {
//     name: 'Pandey',
//     job: 'khai andey',
//     ball: function () {
//         console.log('throw the ball');
//     },
//     salary: 10000
// }
// const atel = Object.create(student);
// console.log(atel);


// const student = {
//     name: 'Pandey',
//     job: 'khai andey',
//     ball: function () {
//         console.log('throw the ball');
//     },
//     salary: 10000
// }
// const atel = Object.create(student);
// console.log(atel.name);


// const student = {
//     name: 'Pandey',
//     job: 'khai andey',
//     ball: function () {
//         console.log('throw the ball');
//     },
//     salary: 10000
// }
// const atel = Object.create(student);
// console.log(atel.friend);




// class Person {
//     name = 'abul';
//     address = 'sodor ghat';
//     constructor (age) {
//         this.age = age;
//     }
// }
// const person1 = new Person(56);
// console.log(person1);




function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car ('elon', 32);
console.log(tesla);