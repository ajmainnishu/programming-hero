// const cruise = {
//     id: 101,
//     name: 'RJ Cruise',
//     money: 5000,
//     treatDay: function (expense, tips) {
//         this.money = this.money - expense - tips;
//         console.log(this)
//         return this.money;
//     }
// }
// const hero = {
//     id: 102,
//     name: 'Hero Balam',
//     money: 6000,
// }
// cruise.treatDay.call(hero, 500, 100)
// cruise.treatDay.apply(hero, [100, 100])