//  (advanced) Object and Array Destructuring



// const fish = {
//     name: 'King Hilsa',
//     address: 'Chadpur',
//     color: 'silver',
//     phone: '017176588899',
//     price: 4000
// }
// const phone = fish.phone;
// console.log(phone);


// const fish = {
//     name: 'King Hilsa',
//     address: 'Chadpur',
//     color: 'silver',
//     phone: '017176588899',
//     price: 4000
// }
// const {phone} = fish;
// console.log(phone);


// const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'};
// console.log(age, name);


// const {age:boyos} = {name: 'Almas', age: 56, profession: 'makeup artist'};
// console.log(boyos);




// const [first, second] = [44, 99, 88, 456];
// console.log(first, second);


// const nayoks = ['sakib', 'bappi', 'raj'];
// const [king, lost, notun] = nayoks;
// console.log(notun);




function getNames() {
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(chacha);