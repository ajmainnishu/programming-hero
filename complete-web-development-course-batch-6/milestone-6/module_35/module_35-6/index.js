// (optional) Borrow method from object and use it on another object



// const kodomAli = {
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
//         this.money = this.money - (amount + tips);
//         return this.money;
//     }
// }
// const badamAli = {
//     name: 'kacha badam',
//     money: 8000,
// }
// const result = kodomAli.exam.call(badamAli);
// console.log(result);


// const kodomAli = {
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
//         this.money = this.money - (amount + tips);
//         return this.money;
//     }
// }
// const badamAli = {
//     name: 'kacha badam',
//     money: 8000,
// }
// const badamMoney = kodomAli.treatDay.call(badamAli, 400, 40);
// console.log(badamMoney);




// const kodomAli = {
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
//         this.money = this.money - (amount + tips);
//         return this.money;
//     }
// }
// const badamAli = {
//     name: 'kacha badam',
//     money: 8000,
// }
// const badamMoney = kodomAli.treatDay.apply(badamAli, [1000, 100]);
// console.log(badamMoney);




const kodomAli = {
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
const badamAli = {
    name: 'kacha badam',
    money: 8000,
}
const badamAliTreat = kodomAli.treatDay.bind(badamAli);
console.log(badamAliTreat(1000, 100));