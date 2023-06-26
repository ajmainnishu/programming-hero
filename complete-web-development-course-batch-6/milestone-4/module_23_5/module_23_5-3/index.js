// (optional) Explore what you can do with JavaScript Object



// const nayok = {
//     name: 'Sakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
//     movies: [{name: 'no 1', year: 2015}, {name: 'king khan', year: 2018}],
//     act: function() {
//         console.log('acting like sakib khan')
//     },
//     car: {
//         brand: 'tesla',
//         price: 50000000,
//         made: 2025,
//         manufacturer: {
//             name: 'tesla',
//             ceo: 'Elon Mask',
//             country: 'USA'
//         }
//     }
// }
// console.log(nayok);


// const nayok = {
//     name: 'Sakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
//     movies: [{name: 'no 1', year: 2015}, {name: 'king khan', year: 2018}],
//     act: function() {
//         console.log('acting like sakib khan')
//     },
//     car: {
//         brand: 'tesla',
//         price: 50000000,
//         made: 2025,
//         manufacturer: {
//             name: 'tesla',
//             ceo: 'Elon Mask',
//             country: 'USA'
//         }
//     }
// }
// nayok.act();


// const nayok = {
//     name: 'Sakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
//     movies: [{name: 'no 1', year: 2015}, {name: 'king khan', year: 2018}],
//     act: function() {
//         console.log('acting like sakib khan')
//     },
//     car: {
//         brand: 'tesla',
//         price: 50000000,
//         made: 2025,
//         manufacturer: {
//             name: 'tesla',
//             ceo: 'Elon Mask',
//             country: 'USA'
//         }
//     }
// }
// console.log(nayok.car.manufacturer.country);


// const nayok = {
//     name: 'Sakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
//     movies: [{name: 'no 1', year: 2015}, {name: 'king khan', year: 2018}],
//     act: function() {
//         console.log('acting like sakib khan')
//     },
//     car: {
//         brand: 'tesla',
//         price: 50000000,
//         made: 2025,
//         manufacturer: {
//             name: 'tesla',
//             ceo: 'Elon Mask',
//             country: 'USA'
//         }
//     }
// }
// console.log(nayok.movies[1]);




// const products = {
//     '0': 15,
//     '1': 56,
//     '2': 87
// }
// console.log(products[2]);
// console.log(products['2']);




// function add(num1, num2) {
//     console.log(num1, num2);
// }
// add(12, 13, 45, 89, 78);


// function add(num1, num2) {
//     console.log(arguments);
// }
// add(12, 13, 45, 89, 78);


function add(num1, num2) {
    console.log(arguments[3]);
}
add(12, 13, 45, 89, 78);