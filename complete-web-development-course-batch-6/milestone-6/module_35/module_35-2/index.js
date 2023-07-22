// Object method access and set property values



// const student = {
//     name: 'Kodom Ali',
//     money: 5000,
//     study: 'Math',
//     subjects: ['calculus', 'algebra', 'geometry'],
//     exam: function () {
//         console.log(this.name, 'is participating in an exam');
//     }
// }
// student.exam();


// const student = {
//     name: 'Kodom Ali',
//     money: 5000,
//     study: 'Math',
//     subjects: ['calculus', 'algebra', 'geometry'],
//     exam: function () {
//         return this.name + 'is participating in an exam'
//     }
// }
// const output = student.exam();
// console.log(output);


// const student = {
//     name: 'Kodom Ali',
//     money: 5000,
//     study: 'Math',
//     subjects: ['calculus', 'algebra', 'geometry'],
//     exam: function () {
//         return this.name + 'is participating in an exam'
//     },
//     improveExam: function (subject) {
//         this.exam();
//         return `${this.name} is taking improvement exam on ${subject}`
//     }
// }
// const output = student.improveExam('Alegbra');
// console.log(output);


// const student = {
//     name: 'Kodom Ali',
//     money: 5000,
//     study: 'Math',
//     subjects: ['calculus', 'algebra', 'geometry'],
//     exam: function () {
//         return this.name + 'is participating in an exam'
//     },
//     improveExam: function (subject) {
//         this.exam();
//         return `${this.name} is taking improvement exam on ${subject}`
//     },
//     treatDay: function (amount) {
//         this.money = this.money - amount;
//         return this.money;
//     }
// }
// const output = student.treatDay(1000);
// console.log(output);
// const output1 = student.treatDay(1000);
// console.log(output1);


// const student = {
//     name: 'Kodom Ali',
//     money: 5000,
//     study: 'Math',
//     subjects: ['calculus', 'algebra', 'geometry'],
//     exam: function () {
//         return this.name + 'is participating in an exam'
//     },
//     improveExam: function (subject) {
//         this.exam();
//         return `${this.name} is taking improvement exam on ${subject}`
//     },
//     treatDay: function (amount, tips) {
//         this.money = this.money - amount - tips;
//         return this.money;
//     }
// }
// const output = student.treatDay(1000, 500);
// console.log(output);


const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return this.name + 'is participating in an exam'
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function (amount, tips) {
        this.money = this.money - (amount + tips);
        return this.money;
    }
}
const output = student.treatDay(1000, 500);
console.log(output);